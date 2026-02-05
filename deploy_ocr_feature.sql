-- OCR Feature Deployment Script
-- Database: MySQL
-- Date: 2026-02-05

-- 1. Create vehicle_images table
CREATE TABLE IF NOT EXISTS `vehicle_images` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `receipt_id` INT NULL,
  `truck_vehicle_id` INT NULL,
  `vehicle_number_extracted` VARCHAR(64) NULL,
  `ocr_confidence` DECIMAL(5,2) NULL,
  `ocr_provider` VARCHAR(32) NULL,
  `ocr_raw_json` TEXT NULL,
  `original_filename` VARCHAR(255) NULL,
  `filename_encrypted` VARCHAR(255) NOT NULL,
  `mime_type` VARCHAR(64) NOT NULL,
  `size_bytes` INT NOT NULL,
  `processed_at` DATETIME NULL,
  `created_by` VARCHAR(64) NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_receipt_id` (`receipt_id`),
  INDEX `idx_truck_vehicle_id` (`truck_vehicle_id`),
  INDEX `idx_vehicle_number_extracted` (`vehicle_number_extracted`),
  CONSTRAINT `fk_vehicle_images_receipt` FOREIGN KEY (`receipt_id`) REFERENCES `receipts`(`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_vehicle_images_truck_vehicle` FOREIGN KEY (`truck_vehicle_id`) REFERENCES `truck_vehicles`(`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Verification (Optional - can be run to verify table existence)
-- DESCRIBE vehicle_images;
