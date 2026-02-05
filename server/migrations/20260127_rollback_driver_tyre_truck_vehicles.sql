-- Rollback: revert receipts changes and drop truck_vehicles

-- Revert payment_method to VARCHAR (it was already likely varchar, but ensuring default)
ALTER TABLE receipts
  MODIFY COLUMN payment_method VARCHAR(32) NOT NULL DEFAULT 'cash';

-- Drop added columns if exist
ALTER TABLE receipts
  DROP COLUMN IF EXISTS tyre_type,
  DROP COLUMN IF EXISTS driver_name;

-- Drop truck_vehicles table
DROP TABLE IF EXISTS truck_vehicles;
