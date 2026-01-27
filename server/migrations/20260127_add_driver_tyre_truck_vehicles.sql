-- Add new columns to receipts
ALTER TABLE receipts
  ADD COLUMN driver_name VARCHAR(255) NULL AFTER vehicle_number,
  ADD COLUMN tyre_type VARCHAR(32) NULL AFTER driver_name;

-- Update payment_method to include online and partial (keep flexible as VARCHAR or update ENUM if strictly required, sticking to VARCHAR for safety)
ALTER TABLE receipts
  MODIFY COLUMN payment_method VARCHAR(32) NOT NULL DEFAULT 'cash';

-- Create truck_vehicles lookup table
CREATE TABLE IF NOT EXISTS truck_vehicles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  vehicle_number VARCHAR(64) NOT NULL UNIQUE,
  truck_owner_id INT NULL,
  driver_name VARCHAR(255) NULL,
  tyre_type VARCHAR(32) NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_truck_owner_id (truck_owner_id),
  CONSTRAINT fk_truck_vehicles_owner FOREIGN KEY (truck_owner_id) REFERENCES truck_owners(id) ON DELETE SET NULL ON UPDATE CASCADE
);
