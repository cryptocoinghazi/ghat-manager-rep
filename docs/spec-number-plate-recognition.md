# Photo-Based Truck Number Plate Recognition - Technical Specification

## Overview
- Adds photo-based number plate OCR integrated with quick receipt workflow
- Preserves existing schema; introduces a new `vehicle_images` table and APIs
- Supports Google Vision API or AWS Textract; falls back to manual entry when confidence < 85%

## Database Schema
### Table: vehicle_images
- id INT PK AUTO_INCREMENT
- receipt_id INT NULL FK -> receipts(id) ON DELETE SET NULL ON UPDATE CASCADE
- truck_vehicle_id INT NULL FK -> truck_vehicles(id) ON DELETE SET NULL ON UPDATE CASCADE
- vehicle_number_extracted VARCHAR(64) NULL
- ocr_confidence DECIMAL(5,2) NULL
- ocr_provider VARCHAR(32) NULL
- ocr_raw_json TEXT NULL
- original_filename VARCHAR(255) NULL
- filename_encrypted VARCHAR(255) NOT NULL
- mime_type VARCHAR(64) NOT NULL
- size_bytes INT NOT NULL
- processed_at DATETIME NULL
- created_by VARCHAR(64) NULL
- created_at DATETIME DEFAULT CURRENT_TIMESTAMP
- updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
- INDEX idx_receipt_id(receipt_id), idx_truck_vehicle_id(truck_vehicle_id), idx_vehicle_number_extracted(vehicle_number_extracted)

## API Contract
### POST /api/trucks/photo-recognition
- Auth: Bearer token (admin/user)
- Content-Type: multipart/form-data; field: image (JPEG/PNG ≤ 5MB)
- Query: async=true (optional) to enqueue OCR processing
- Response (sync):
  - id: number
  - filename: string
  - extracted_plate: string|null
  - confidence: number (0–100)
  - provider: string
  - processing_ms: number
  - needs_manual: boolean
  - match: { vehicle: TruckVehicles|null, owner: TruckOwners|null }
- Errors:
  - 400 No image uploaded
  - 413 File too large
  - 415 Unsupported file type
  - 500 Photo recognition failed

### GET /api/trucks/photo-recognition/:id
- Auth: Bearer token
- Response: vehicle_images row
- Errors: 404 Not found

## OCR Integration
- Provider selection via env `OCR_PROVIDER=google|aws|mock`
- Google Vision: REST images:annotate with `GOOGLE_VISION_API_KEY`
- AWS Textract: requires proxy/Lambda; not enabled by default
- Normalization formats Indian plates (e.g., MH31AB1234 → MH-31-AB-1234)
- Confidence accepted when ≥ 85%; otherwise manual override suggested

## UI/UX Flow (Quick Receipt)
- New “Upload Photo” button near Vehicle Number
- Accepts camera/gallery; shows thumbnail, OCR confidence
- Prefills Vehicle Number; if vehicle is known, prefills Owner
- Manual override always allowed
- Loading indicator during OCR; inline error messages for failures

## Error Handling
- Client: validates file size/type; displays inline errors and toasts
- Server: validates MIME and size; standard HTTP codes with messages
- OCR network timeout handled; returns 500 with details

## Security Measures
- Auth required; role-based checks preserved
- Storage with encrypted filenames (SHA-256 of salted metadata)
- Strict MIME and size validation
- Directory traversal prevention

## Performance & Queue
- Default synchronous processing for small uploads
- Optional asynchronous mode via `?async=true` with in-memory queue
- UI shows loading indicator; polling supported via GET endpoint

## Deployment Plan
- Apply new migration `20260205_add_vehicle_images_table.sql`
- Deploy backend; ensure env vars:
  - OCR_PROVIDER
  - GOOGLE_VISION_API_KEY (when using Google Vision)
- No downtime expected; new routes are additive; existing receipt flow unchanged

## Rollback Strategy
- Remove route mounts and OCR module import
- Drop table `vehicle_images` if needed via a rollback script
- Revert client UI changes (remove Upload button)

## Phased Timeline
- Phase 1 (Day 1–2): DB table, backend API, client UI upload
- Phase 2 (Day 3): OCR provider wiring, confidence handling, matching
- Phase 3 (Day 4): Async queue, loading indicators, error hardening
- Phase 4 (Day 5): Tests (unit OCR normalization, API validation), UAT

## Acceptance Criteria
- Upload JPEG/PNG ≤ 5MB and receive recognized plate with confidence
- Prefill vehicle and owner when matched; manual override working
- Errors surfaced appropriately; security and performance measures in place
