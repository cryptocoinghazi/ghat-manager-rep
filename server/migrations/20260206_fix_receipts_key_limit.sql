-- Fix ER_TOO_MANY_KEYS error by removing redundant unique constraint
ALTER TABLE `receipts` DROP INDEX `receipt_no`;
