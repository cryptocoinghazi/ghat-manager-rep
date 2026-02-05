import { expect } from 'chai';
import { normalizePlate } from '../server/services/ocr.js';

describe('OCR Module normalizePlate', () => {
  it('formats standard Indian plates', () => {
    expect(normalizePlate('MH31AB1234')).to.equal('MH-31-AB-1234');
    expect(normalizePlate('mh 12 de 3456')).to.equal('MH-12-DE-3456');
  });
  it('handles partial inputs', () => {
    expect(normalizePlate('MH31')).to.equal('MH-31');
  });
  it('returns null for empty', () => {
    expect(normalizePlate('')).to.equal(null);
    expect(normalizePlate(null)).to.equal(null);
  });
});
