-- Migration Script for Ghat Manager (MySQL)
-- Generated for Digital Ocean Managed Database
-- Usage: Execute this script in your Digital Ocean database console or via a MySQL client connected to your instance.

-- 1. Disable Foreign Key Checks temporarily to avoid ordering issues
SET FOREIGN_KEY_CHECKS = 0;

-- 2. Drop tables if they exist (for a fresh start)
DROP TABLE IF EXISTS `vehicle_ownership_history`;
DROP TABLE IF EXISTS `vehicle_edit_history`;
DROP TABLE IF EXISTS `truck_owner_edit_history`;
DROP TABLE IF EXISTS `receipt_edit_history`;
DROP TABLE IF EXISTS `deposit_transactions`;
DROP TABLE IF EXISTS `credit_payments`;
DROP TABLE IF EXISTS `expense_categories`;
DROP TABLE IF EXISTS `expenses`;
DROP TABLE IF EXISTS `settings`;
DROP TABLE IF EXISTS `users`;
DROP TABLE IF EXISTS `gst_receipts`;
DROP TABLE IF EXISTS `receipts`;
DROP TABLE IF EXISTS `truck_vehicles`;
DROP TABLE IF EXISTS `truck_owners`;

-- 3. Create Tables

-- Table: truck_owners
CREATE TABLE `truck_owners` (
  `id` INTEGER NOT NULL auto_increment,
  `name` VARCHAR(255) NOT NULL UNIQUE,
  `phone` VARCHAR(64),
  `address` TEXT,
  `credit_limit` DECIMAL(10,2) DEFAULT 0,
  `payment_type` VARCHAR(32) DEFAULT 'cash',
  `is_partner` INTEGER DEFAULT 0,
  `partner_rate` DECIMAL(10,2),
  `is_gst_client` TINYINT(1) DEFAULT 0,
  `deposit_balance` DECIMAL(10,2) DEFAULT 0,
  `vehicle_number` VARCHAR(64),
  `is_active` INTEGER DEFAULT 1,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table: truck_vehicles
CREATE TABLE `truck_vehicles` (
  `id` INTEGER NOT NULL auto_increment,
  `vehicle_number` VARCHAR(64) NOT NULL UNIQUE,
  `truck_owner_id` INTEGER,
  `driver_name` VARCHAR(255),
  `tyre_type` VARCHAR(16),
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`truck_owner_id`) REFERENCES `truck_owners` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table: receipts
CREATE TABLE `receipts` (
  `id` INTEGER NOT NULL auto_increment,
  `receipt_no` VARCHAR(64) NOT NULL UNIQUE,
  `truck_owner` VARCHAR(255) NOT NULL,
  `vehicle_number` VARCHAR(64) NOT NULL,
  `driver_name` VARCHAR(255),
  `tyre_type` VARCHAR(16),
  `date_time` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `brass_qty` DECIMAL(10,2) NOT NULL,
  `rate` DECIMAL(10,2) NOT NULL,
  `loading_charge` DECIMAL(10,2) DEFAULT 0,
  `cash_paid` DECIMAL(10,2) DEFAULT 0,
  `credit_amount` DECIMAL(10,2) DEFAULT 0,
  `total_amount` DECIMAL(10,2) NOT NULL,
  `payment_status` VARCHAR(32) DEFAULT 'pending',
  `payment_method` VARCHAR(32) DEFAULT 'cash',
  `deposit_deducted` DECIMAL(10,2) DEFAULT 0,
  `owner_type` VARCHAR(32) DEFAULT 'regular',
  `applied_rate` DECIMAL(10,2),
  `notes` TEXT,
  `is_active` INTEGER DEFAULT 1,
  `owner_id` INTEGER,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`owner_id`) REFERENCES `truck_owners` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table: gst_receipts
CREATE TABLE `gst_receipts` (
  `id` INTEGER NOT NULL auto_increment,
  `receipt_no` VARCHAR(64) NOT NULL UNIQUE,
  `truck_owner` VARCHAR(255) NOT NULL,
  `vehicle_number` VARCHAR(64) NOT NULL,
  `date_time` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `brass_qty` DECIMAL(10,2) NOT NULL,
  `rate` DECIMAL(10,2) NOT NULL,
  `loading_charge` DECIMAL(10,2) DEFAULT 0,
  `gst_rate` DECIMAL(5,2) DEFAULT 5.00,
  `cgst_amount` DECIMAL(10,2) DEFAULT 0,
  `sgst_amount` DECIMAL(10,2) DEFAULT 0,
  `igst_amount` DECIMAL(10,2) DEFAULT 0,
  `total_before_gst` DECIMAL(10,2) DEFAULT 0,
  `cash_paid` DECIMAL(10,2) DEFAULT 0,
  `credit_amount` DECIMAL(10,2) DEFAULT 0,
  `total_amount` DECIMAL(10,2) NOT NULL,
  `payment_status` VARCHAR(32) DEFAULT 'pending',
  `payment_method` VARCHAR(32) DEFAULT 'cash',
  `notes` TEXT,
  `is_active` INTEGER DEFAULT 1,
  `owner_id` INTEGER,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`owner_id`) REFERENCES `truck_owners` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table: credit_payments
CREATE TABLE `credit_payments` (
  `id` INTEGER NOT NULL auto_increment,
  `receipt_id` INTEGER,
  `amount_paid` DECIMAL(10,2) NOT NULL,
  `payment_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `payment_mode` VARCHAR(32),
  `reference_no` VARCHAR(64),
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`receipt_id`) REFERENCES `receipts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table: deposit_transactions
CREATE TABLE `deposit_transactions` (
  `id` INTEGER NOT NULL auto_increment,
  `owner_id` INTEGER NOT NULL,
  `type` VARCHAR(16) NOT NULL,
  `amount` DECIMAL(10,2) NOT NULL,
  `previous_balance` DECIMAL(10,2) NOT NULL,
  `new_balance` DECIMAL(10,2) NOT NULL,
  `receipt_no` VARCHAR(64),
  `notes` TEXT,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`owner_id`) REFERENCES `truck_owners` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table: settings
CREATE TABLE `settings` (
  `key` VARCHAR(64) NOT NULL,
  `value` TEXT,
  `category` VARCHAR(64),
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table: users
CREATE TABLE `users` (
  `id` INTEGER NOT NULL auto_increment,
  `username` VARCHAR(64) NOT NULL UNIQUE,
  `password_hash` VARCHAR(255) NOT NULL,
  `full_name` VARCHAR(255),
  `role` VARCHAR(32) DEFAULT 'user',
  `is_active` INTEGER DEFAULT 1,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table: expenses
CREATE TABLE `expenses` (
  `id` INTEGER NOT NULL auto_increment,
  `date` DATE,
  `category` VARCHAR(64),
  `description` TEXT,
  `amount` DECIMAL(10,2),
  `payment_mode` VARCHAR(32),
  `receipt_number` VARCHAR(64),
  `vendor_name` VARCHAR(255),
  `ghat_location` VARCHAR(255),
  `approved_by` VARCHAR(255),
  `remarks` TEXT,
  `status` VARCHAR(32),
  `created_by` VARCHAR(255),
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table: expense_categories
CREATE TABLE `expense_categories` (
  `id` INTEGER NOT NULL auto_increment,
  `name` VARCHAR(64) UNIQUE,
  `description` TEXT,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table: receipt_edit_history
CREATE TABLE `receipt_edit_history` (
  `id` INTEGER NOT NULL auto_increment,
  `receipt_id` INTEGER NOT NULL,
  `field_name` VARCHAR(64) NOT NULL,
  `old_value` TEXT,
  `new_value` TEXT,
  `change_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `changed_by` VARCHAR(64),
  `reason` TEXT,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`receipt_id`) REFERENCES `receipts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table: truck_owner_edit_history
CREATE TABLE `truck_owner_edit_history` (
  `id` INTEGER NOT NULL auto_increment,
  `owner_id` INTEGER NOT NULL,
  `field_name` VARCHAR(64) NOT NULL,
  `old_value` TEXT,
  `new_value` TEXT,
  `change_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `changed_by` VARCHAR(64),
  `reason` TEXT,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`owner_id`) REFERENCES `truck_owners` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table: vehicle_edit_history
CREATE TABLE `vehicle_edit_history` (
  `id` INTEGER NOT NULL auto_increment,
  `vehicle_number` VARCHAR(64) NOT NULL,
  `field_name` VARCHAR(64) NOT NULL,
  `old_value` TEXT,
  `new_value` TEXT,
  `change_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `changed_by` VARCHAR(64),
  `reason` TEXT,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table: vehicle_ownership_history
CREATE TABLE `vehicle_ownership_history` (
  `id` INTEGER NOT NULL auto_increment,
  `vehicle_number` VARCHAR(64) NOT NULL,
  `previous_owner_id` INTEGER,
  `new_owner_id` INTEGER,
  `change_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `changed_by` VARCHAR(64),
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. Insert Default Data

-- Default Settings
INSERT INTO `settings` (`key`, `value`, `category`, `updated_at`) VALUES
('company_name', 'Ghat Manager', 'company', NOW()),
('default_rate', '0', 'financial', NOW()),
('receipt_prefix', 'REC', 'receipt', NOW()),
('receipt_start', '1000', 'receipt', NOW());

-- Default Admin User (Username: admin, Password: password123)
INSERT INTO `users` (`username`, `password_hash`, `full_name`, `role`, `is_active`, `createdAt`, `updatedAt`) 
VALUES ('admin', '$2b$10$iNpSzMehXkOlBp/1JXXrbuvfgij.44hHWl.sV3A//JaIykBrGlwLK', 'System Admin', 'admin', 1, NOW(), NOW());

-- Re-enable Foreign Key Checks
SET FOREIGN_KEY_CHECKS = 1;

-- End of Migration Script
