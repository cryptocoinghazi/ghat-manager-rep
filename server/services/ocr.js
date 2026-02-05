import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export function normalizePlate(text) {
  if (!text) return null;
  const cleaned = text.toUpperCase().replace(/[^A-Z0-9]/g, '');
  // Insert hyphens for typical Indian plate formats when possible (e.g., MH31AB1234 -> MH-31-AB-1234)
  const parts = [];
  let idx = 0;
  parts.push(cleaned.slice(idx, idx += 2)); // State
  parts.push(cleaned.slice(idx, idx += 2)); // RTO code
  // Remaining may be 2 letters + 4 digits or variable
  const remaining = cleaned.slice(idx);
  if (remaining.length >= 6) {
    parts.push(remaining.slice(0, remaining.length - 4));
    parts.push(remaining.slice(-4));
  } else if (remaining.length > 0) {
    parts.push(remaining);
  }
  return parts.filter(Boolean).join('-');
}

function normalizeCandidate(candidate) {
  if (!candidate) return null;
  const s = candidate.toUpperCase().replace(/[^A-Z0-9]/g, '');
  const m = s.match(/^([A-Z]{2})(\d{1,2})([A-Z]{1,3})(\d{3,4})$/);
  if (!m) return null;
  const rto = m[2].padStart(2, '0');
  return `${m[1]}-${rto}-${m[3]}-${m[4]}`;
}

function extractBestPlate(text) {
  if (!text) return null;
  const u = text.toUpperCase();
  const patterns = [
    /([A-Z]{2}\s*-?\s*\d{1,2}\s*-?\s*[A-Z]{1,3}\s*-?\s*\d{3,4})/g,
    /([A-Z]{2}\d{1,2}[A-Z]{1,3}\d{3,4})/g
  ];
  const set = new Set();
  const cands = [];
  for (const p of patterns) {
    let m;
    while ((m = p.exec(u)) !== null) {
      const n = normalizeCandidate(m[1]);
      if (n && !set.has(n)) {
        set.add(n);
        cands.push(n);
      }
    }
  }
  if (cands.length) {
    cands.sort((a, b) => {
      const la = a.split('-').pop().length;
      const lb = b.split('-').pop().length;
      return lb - la;
    });
    return cands[0];
  }
  const fallback = normalizeCandidate(u);
  return fallback || null;
}

export async function ocrNumberPlate(filePath) {
  let provider = (process.env.OCR_PROVIDER || '').toLowerCase(); // 'google' | 'aws' | 'ocrspace'
  
  if (!fs.existsSync(filePath)) {
    throw new Error('Image file not found for OCR');
  }
  const buffer = fs.readFileSync(filePath);
  let result = { text: null, confidence: 0, provider, raw: null };

  if (provider === 'ocrspace') {
    const apiKey = process.env.OCR_SPACE_API_KEY;
    if (!apiKey) {
      throw new Error('OCR_SPACE_API_KEY not configured');
    }

    try {
      const formData = new FormData();
      // Node.js globals: Blob is available in v18+.
      const blob = new Blob([buffer], { type: 'image/jpeg' });
      formData.append('file', blob, path.basename(filePath));
      formData.append('apikey', apiKey);
      formData.append('language', 'eng');
      formData.append('OCREngine', '2'); // Engine 2 is better for number plates/digits
      formData.append('scale', 'true');

      const res = await fetch('https://api.ocr.space/parse/image', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`OCR.space request failed: ${res.status} ${await res.text()}`);
      }

      const json = await res.json();
      result.raw = json;

      if (json.IsErroredOnProcessing) {
        throw new Error(`OCR.space error: ${json.ErrorMessage}`);
      }

      const parsedText = json.ParsedResults?.[0]?.ParsedText || '';
      
      if (parsedText) {
        const normalized = extractBestPlate(parsedText) || normalizePlate(parsedText);
        result.text = normalized || parsedText.trim().toUpperCase();
        result.confidence = 90; 
      }
      
      return result;

    } catch (error) {
      console.error('OCR.space failed:', error);
      throw error; 
    }
  }

  if (provider === 'google') {
    const apiKey = process.env.GOOGLE_VISION_API_KEY;
    if (!apiKey) {
      throw new Error('GOOGLE_VISION_API_KEY not configured');
    }
    const body = {
      requests: [
        {
          image: { content: buffer.toString('base64') },
          features: [{ type: 'TEXT_DETECTION' }]
        }
      ]
    };
    const res = await fetch(`https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      timeout: 20000
    });
    if (!res.ok) {
      throw new Error(`Google Vision request failed: ${res.status} ${await res.text()}`);
    }
    const json = await res.json();
    result.raw = json;
    const annotation = json?.responses?.[0]?.fullTextAnnotation?.text || json?.responses?.[0]?.textAnnotations?.[0]?.description;
    if (annotation) {
      const normalized = extractBestPlate(annotation) || normalizePlate(annotation);
      result.text = normalized || annotation.trim().toUpperCase();
      const pages = json?.responses?.[0]?.fullTextAnnotation?.pages || [];
      let avgConfidence = 0;
      let count = 0;
      for (const p of pages) {
        for (const b of (p.blocks || [])) {
          if (typeof b.confidence === 'number') {
            avgConfidence += b.confidence * 100;
            count++;
          }
        }
      }
      result.confidence = count ? Math.min(100, Math.max(0, avgConfidence / count)) : 85;
    }
    return result;
  }

  if (provider === 'aws') {
    throw new Error('AWS Textract integration not configured.');
  }

  // No provider or unsupported provider
  throw new Error(`OCR Provider "${provider}" is not supported or configured.`);
}
