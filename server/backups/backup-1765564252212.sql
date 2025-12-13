/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: credit_payments
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `credit_payments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `receipt_id` int DEFAULT NULL,
  `amount_paid` decimal(10, 2) NOT NULL,
  `payment_date` datetime DEFAULT NULL,
  `payment_mode` varchar(32) DEFAULT NULL,
  `reference_no` varchar(64) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `receipt_id` (`receipt_id`),
  CONSTRAINT `credit_payments_ibfk_1` FOREIGN KEY (`receipt_id`) REFERENCES `receipts` (`id`) ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: deposit_transactions
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `deposit_transactions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `owner_id` int NOT NULL,
  `type` varchar(16) NOT NULL,
  `amount` decimal(10, 2) NOT NULL,
  `previous_balance` decimal(10, 2) NOT NULL,
  `new_balance` decimal(10, 2) NOT NULL,
  `receipt_no` varchar(64) DEFAULT NULL,
  `notes` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `owner_id` (`owner_id`),
  CONSTRAINT `deposit_transactions_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `truck_owners` (`id`) ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: expense_categories
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `expense_categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL,
  `description` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE = InnoDB AUTO_INCREMENT = 10 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: expenses
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `expenses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `category` varchar(64) DEFAULT NULL,
  `description` text,
  `amount` decimal(10, 2) DEFAULT NULL,
  `payment_mode` varchar(32) DEFAULT NULL,
  `receipt_number` varchar(64) DEFAULT NULL,
  `vendor_name` varchar(255) DEFAULT NULL,
  `ghat_location` varchar(255) DEFAULT NULL,
  `approved_by` varchar(255) DEFAULT NULL,
  `remarks` text,
  `status` varchar(32) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: receipts
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `receipts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `receipt_no` varchar(64) NOT NULL,
  `truck_owner` varchar(255) NOT NULL,
  `vehicle_number` varchar(64) NOT NULL,
  `date_time` datetime DEFAULT NULL,
  `brass_qty` decimal(10, 2) NOT NULL,
  `rate` decimal(10, 2) NOT NULL,
  `loading_charge` decimal(10, 2) DEFAULT '0.00',
  `cash_paid` decimal(10, 2) DEFAULT '0.00',
  `credit_amount` decimal(10, 2) DEFAULT '0.00',
  `total_amount` decimal(10, 2) NOT NULL,
  `payment_status` varchar(32) DEFAULT 'pending',
  `payment_method` varchar(32) DEFAULT 'cash',
  `deposit_deducted` decimal(10, 2) DEFAULT '0.00',
  `owner_type` varchar(32) DEFAULT 'regular',
  `applied_rate` decimal(10, 2) DEFAULT NULL,
  `notes` text,
  `is_active` int DEFAULT '1',
  `owner_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `receipt_no` (`receipt_no`)
) ENGINE = InnoDB AUTO_INCREMENT = 9 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: settings
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `settings` (
  `key` varchar(64) NOT NULL,
  `value` text,
  `category` varchar(64) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: truck_owners
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `truck_owners` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `phone` varchar(64) DEFAULT NULL,
  `address` text,
  `credit_limit` decimal(10, 2) DEFAULT '0.00',
  `payment_type` varchar(32) DEFAULT 'cash',
  `is_partner` int DEFAULT '0',
  `partner_rate` decimal(10, 2) DEFAULT NULL,
  `deposit_balance` decimal(10, 2) DEFAULT '0.00',
  `vehicle_number` varchar(64) DEFAULT NULL,
  `is_active` int DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE = InnoDB AUTO_INCREMENT = 7 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: users
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(64) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `role` varchar(32) DEFAULT 'user',
  `is_active` int DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: credit_payments
# ------------------------------------------------------------


# ------------------------------------------------------------
# DATA DUMP FOR TABLE: deposit_transactions
# ------------------------------------------------------------

INSERT INTO
  `deposit_transactions` (
    `id`,
    `owner_id`,
    `type`,
    `amount`,
    `previous_balance`,
    `new_balance`,
    `receipt_no`,
    `notes`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    1,
    1,
    'add',
    10000.00,
    0.00,
    10000.00,
    NULL,
    'Manual deposit add',
    '2025-12-12 03:56:40',
    '2025-12-12 03:56:40'
  );
INSERT INTO
  `deposit_transactions` (
    `id`,
    `owner_id`,
    `type`,
    `amount`,
    `previous_balance`,
    `new_balance`,
    `receipt_no`,
    `notes`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    2,
    1,
    'deduct',
    1150.00,
    10000.00,
    8850.00,
    'GM9006',
    'Receipt deduction',
    '2025-12-12 14:45:15',
    '2025-12-12 14:45:15'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: expense_categories
# ------------------------------------------------------------

INSERT INTO
  `expense_categories` (
    `id`,
    `name`,
    `description`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    1,
    'LABOR',
    'Worker wages and labor costs',
    '2025-12-12 03:56:40',
    '2025-12-12 03:56:40'
  );
INSERT INTO
  `expense_categories` (
    `id`,
    `name`,
    `description`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    2,
    'FUEL',
    'Diesel, petrol, gas',
    '2025-12-12 03:56:40',
    '2025-12-12 03:56:40'
  );
INSERT INTO
  `expense_categories` (
    `id`,
    `name`,
    `description`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    3,
    'MAINTENANCE',
    'Equipment and vehicle maintenance',
    '2025-12-12 03:56:40',
    '2025-12-12 03:56:40'
  );
INSERT INTO
  `expense_categories` (
    `id`,
    `name`,
    `description`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    4,
    'OFFICE',
    'Office supplies and expenses',
    '2025-12-12 03:56:40',
    '2025-12-12 03:56:40'
  );
INSERT INTO
  `expense_categories` (
    `id`,
    `name`,
    `description`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    5,
    'TRANSPORT',
    'Transportation costs',
    '2025-12-12 03:56:40',
    '2025-12-12 03:56:40'
  );
INSERT INTO
  `expense_categories` (
    `id`,
    `name`,
    `description`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    6,
    'RENT',
    'Rent and lease payments',
    '2025-12-12 03:56:40',
    '2025-12-12 03:56:40'
  );
INSERT INTO
  `expense_categories` (
    `id`,
    `name`,
    `description`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    7,
    'UTILITIES',
    'Electricity, water, internet',
    '2025-12-12 03:56:40',
    '2025-12-12 03:56:40'
  );
INSERT INTO
  `expense_categories` (
    `id`,
    `name`,
    `description`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    8,
    'FOOD',
    'Food and refreshments',
    '2025-12-12 03:56:40',
    '2025-12-12 03:56:40'
  );
INSERT INTO
  `expense_categories` (
    `id`,
    `name`,
    `description`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    9,
    'OTHER',
    'Miscellaneous expenses',
    '2025-12-12 03:56:40',
    '2025-12-12 03:56:40'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: expenses
# ------------------------------------------------------------

INSERT INTO
  `expenses` (
    `id`,
    `date`,
    `category`,
    `description`,
    `amount`,
    `payment_mode`,
    `receipt_number`,
    `vendor_name`,
    `ghat_location`,
    `approved_by`,
    `remarks`,
    `status`,
    `created_by`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    1,
    '2025-12-11',
    'FUEL',
    'Disel',
    20000.00,
    'CASH',
    '1',
    'Kiran petrol ',
    'Ralegaon',
    'Mansur ',
    'Disel ',
    'APPROVED',
    'admin',
    '2025-12-12 03:56:40',
    '2025-12-12 03:56:40'
  );
INSERT INTO
  `expenses` (
    `id`,
    `date`,
    `category`,
    `description`,
    `amount`,
    `payment_mode`,
    `receipt_number`,
    `vendor_name`,
    `ghat_location`,
    `approved_by`,
    `remarks`,
    `status`,
    `created_by`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    2,
    '2025-12-12',
    'LABOR',
    'test expense',
    222.00,
    'CASH',
    NULL,
    NULL,
    'yavatmal',
    NULL,
    NULL,
    NULL,
    'admin',
    '2025-12-12 14:12:20',
    '2025-12-12 14:12:20'
  );
INSERT INTO
  `expenses` (
    `id`,
    `date`,
    `category`,
    `description`,
    `amount`,
    `payment_mode`,
    `receipt_number`,
    `vendor_name`,
    `ghat_location`,
    `approved_by`,
    `remarks`,
    `status`,
    `created_by`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    3,
    '2025-12-12',
    'LABOR',
    'test expense',
    22.00,
    'UPI',
    NULL,
    NULL,
    'yavatmal',
    NULL,
    NULL,
    NULL,
    'admin',
    '2025-12-12 16:56:48',
    '2025-12-12 16:56:48'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: receipts
# ------------------------------------------------------------

INSERT INTO
  `receipts` (
    `id`,
    `receipt_no`,
    `truck_owner`,
    `vehicle_number`,
    `date_time`,
    `brass_qty`,
    `rate`,
    `loading_charge`,
    `cash_paid`,
    `credit_amount`,
    `total_amount`,
    `payment_status`,
    `payment_method`,
    `deposit_deducted`,
    `owner_type`,
    `applied_rate`,
    `notes`,
    `is_active`,
    `owner_id`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    1,
    'GM9001',
    'test',
    '1111',
    '2025-12-11 15:28:16',
    1.00,
    1201.00,
    0.00,
    0.00,
    1201.00,
    1201.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    1201.00,
    '',
    1,
    NULL,
    '2025-12-12 03:56:40',
    '2025-12-12 03:56:40'
  );
INSERT INTO
  `receipts` (
    `id`,
    `receipt_no`,
    `truck_owner`,
    `vehicle_number`,
    `date_time`,
    `brass_qty`,
    `rate`,
    `loading_charge`,
    `cash_paid`,
    `credit_amount`,
    `total_amount`,
    `payment_status`,
    `payment_method`,
    `deposit_deducted`,
    `owner_type`,
    `applied_rate`,
    `notes`,
    `is_active`,
    `owner_id`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    2,
    'GM9002',
    'test',
    '1111',
    '2025-12-11 15:53:18',
    1.00,
    1200.00,
    150.00,
    1350.00,
    0.00,
    1350.00,
    'paid',
    'cash',
    0.00,
    'regular',
    1200.00,
    '',
    1,
    NULL,
    '2025-12-12 03:56:40',
    '2025-12-12 03:56:40'
  );
INSERT INTO
  `receipts` (
    `id`,
    `receipt_no`,
    `truck_owner`,
    `vehicle_number`,
    `date_time`,
    `brass_qty`,
    `rate`,
    `loading_charge`,
    `cash_paid`,
    `credit_amount`,
    `total_amount`,
    `payment_status`,
    `payment_method`,
    `deposit_deducted`,
    `owner_type`,
    `applied_rate`,
    `notes`,
    `is_active`,
    `owner_id`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    3,
    'GM9003',
    'test',
    '1111',
    '2025-12-11 16:01:29',
    1.00,
    1200.00,
    150.00,
    1350.00,
    0.00,
    1350.00,
    'paid',
    'cash',
    0.00,
    'regular',
    1200.00,
    '',
    1,
    NULL,
    '2025-12-12 03:56:40',
    '2025-12-12 03:56:40'
  );
INSERT INTO
  `receipts` (
    `id`,
    `receipt_no`,
    `truck_owner`,
    `vehicle_number`,
    `date_time`,
    `brass_qty`,
    `rate`,
    `loading_charge`,
    `cash_paid`,
    `credit_amount`,
    `total_amount`,
    `payment_status`,
    `payment_method`,
    `deposit_deducted`,
    `owner_type`,
    `applied_rate`,
    `notes`,
    `is_active`,
    `owner_id`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    4,
    'GM9004',
    'test2',
    '11112',
    '2025-12-11 16:02:31',
    1.00,
    1200.00,
    0.00,
    1200.00,
    0.00,
    1200.00,
    'paid',
    'cash',
    0.00,
    'regular',
    1200.00,
    '',
    1,
    NULL,
    '2025-12-12 03:56:40',
    '2025-12-12 03:56:40'
  );
INSERT INTO
  `receipts` (
    `id`,
    `receipt_no`,
    `truck_owner`,
    `vehicle_number`,
    `date_time`,
    `brass_qty`,
    `rate`,
    `loading_charge`,
    `cash_paid`,
    `credit_amount`,
    `total_amount`,
    `payment_status`,
    `payment_method`,
    `deposit_deducted`,
    `owner_type`,
    `applied_rate`,
    `notes`,
    `is_active`,
    `owner_id`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    5,
    'GM9005',
    'Bilal',
    'MH 29 7867',
    '2025-12-11 16:34:04',
    4.00,
    1000.00,
    2000.00,
    6000.00,
    0.00,
    6000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    1000.00,
    '',
    1,
    NULL,
    '2025-12-12 03:56:40',
    '2025-12-12 16:57:45'
  );
INSERT INTO
  `receipts` (
    `id`,
    `receipt_no`,
    `truck_owner`,
    `vehicle_number`,
    `date_time`,
    `brass_qty`,
    `rate`,
    `loading_charge`,
    `cash_paid`,
    `credit_amount`,
    `total_amount`,
    `payment_status`,
    `payment_method`,
    `deposit_deducted`,
    `owner_type`,
    `applied_rate`,
    `notes`,
    `is_active`,
    `owner_id`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    6,
    'GM9006',
    'test',
    '1111',
    '2025-12-12 14:45:15',
    1.00,
    1000.00,
    150.00,
    0.00,
    1150.00,
    1150.00,
    'paid',
    'deposit',
    1150.00,
    'partner',
    1000.00,
    '',
    1,
    NULL,
    '2025-12-12 14:45:15',
    '2025-12-12 14:45:15'
  );
INSERT INTO
  `receipts` (
    `id`,
    `receipt_no`,
    `truck_owner`,
    `vehicle_number`,
    `date_time`,
    `brass_qty`,
    `rate`,
    `loading_charge`,
    `cash_paid`,
    `credit_amount`,
    `total_amount`,
    `payment_status`,
    `payment_method`,
    `deposit_deducted`,
    `owner_type`,
    `applied_rate`,
    `notes`,
    `is_active`,
    `owner_id`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    7,
    'GM9007',
    'test8',
    '8888',
    '2025-12-12 16:50:29',
    1.00,
    1200.00,
    0.00,
    1200.00,
    0.00,
    1200.00,
    'paid',
    'cash',
    0.00,
    'regular',
    1200.00,
    '',
    1,
    NULL,
    '2025-12-12 16:50:29',
    '2025-12-12 16:50:29'
  );
INSERT INTO
  `receipts` (
    `id`,
    `receipt_no`,
    `truck_owner`,
    `vehicle_number`,
    `date_time`,
    `brass_qty`,
    `rate`,
    `loading_charge`,
    `cash_paid`,
    `credit_amount`,
    `total_amount`,
    `payment_status`,
    `payment_method`,
    `deposit_deducted`,
    `owner_type`,
    `applied_rate`,
    `notes`,
    `is_active`,
    `owner_id`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    8,
    'GM9008',
    'test44',
    '444',
    '2025-12-12 16:56:15',
    1.00,
    4444.00,
    0.00,
    4444.00,
    0.00,
    4444.00,
    'paid',
    'cash',
    0.00,
    'regular',
    4444.00,
    '',
    1,
    NULL,
    '2025-12-12 16:56:15',
    '2025-12-12 16:56:15'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: settings
# ------------------------------------------------------------

INSERT INTO
  `settings` (
    `key`,
    `value`,
    `category`,
    `updated_at`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    'auto_backup_enabled',
    'true',
    'backup',
    '2025-12-12 18:27:35',
    '2025-12-12 18:27:35',
    '2025-12-12 18:27:35'
  );
INSERT INTO
  `settings` (
    `key`,
    `value`,
    `category`,
    `updated_at`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    'auto_backup_time',
    '00:00',
    'backup',
    '2025-12-12 18:27:35',
    '2025-12-12 18:27:35',
    '2025-12-12 18:27:35'
  );
INSERT INTO
  `settings` (
    `key`,
    `value`,
    `category`,
    `updated_at`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    'auto_print',
    'true',
    'receipt',
    '2025-12-12 18:27:35',
    '2025-12-12 03:56:39',
    '2025-12-12 18:27:35'
  );
INSERT INTO
  `settings` (
    `key`,
    `value`,
    `category`,
    `updated_at`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    'currency',
    '₹',
    'financial',
    '2025-12-12 18:27:35',
    '2025-12-12 03:56:39',
    '2025-12-12 18:27:35'
  );
INSERT INTO
  `settings` (
    `key`,
    `value`,
    `category`,
    `updated_at`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    'default_partner_rate',
    '1000',
    'financial',
    '2025-12-12 18:27:35',
    '2025-12-12 03:56:39',
    '2025-12-12 18:27:35'
  );
INSERT INTO
  `settings` (
    `key`,
    `value`,
    `category`,
    `updated_at`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    'default_rate',
    '1200',
    'financial',
    '2025-12-12 18:27:35',
    '2025-12-12 03:56:39',
    '2025-12-12 18:27:35'
  );
INSERT INTO
  `settings` (
    `key`,
    `value`,
    `category`,
    `updated_at`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    'include_barcode',
    'true',
    'receipt',
    '2025-12-12 18:27:35',
    '2025-12-12 03:56:39',
    '2025-12-12 18:27:35'
  );
INSERT INTO
  `settings` (
    `key`,
    `value`,
    `category`,
    `updated_at`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    'loading_charge',
    '0',
    'financial',
    '2025-12-12 18:27:35',
    '2025-12-12 03:56:39',
    '2025-12-12 18:27:35'
  );
INSERT INTO
  `settings` (
    `key`,
    `value`,
    `category`,
    `updated_at`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    'print_duplicate',
    'false',
    'receipt',
    '2025-12-12 18:27:35',
    '2025-12-12 03:56:39',
    '2025-12-12 18:27:35'
  );
INSERT INTO
  `settings` (
    `key`,
    `value`,
    `category`,
    `updated_at`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    'printer_width',
    '58mm',
    'receipt',
    '2025-12-12 18:27:35',
    '2025-12-12 03:56:39',
    '2025-12-12 18:27:35'
  );
INSERT INTO
  `settings` (
    `key`,
    `value`,
    `category`,
    `updated_at`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    'quarry_address',
    'Yavatmal, District Office',
    'company',
    '2025-12-12 18:27:35',
    '2025-12-12 03:56:39',
    '2025-12-12 18:27:35'
  );
INSERT INTO
  `settings` (
    `key`,
    `value`,
    `category`,
    `updated_at`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    'quarry_name',
    'Yavatmal Ghat ',
    'company',
    '2025-12-12 18:27:35',
    '2025-12-12 03:56:39',
    '2025-12-12 18:27:35'
  );
INSERT INTO
  `settings` (
    `key`,
    `value`,
    `category`,
    `updated_at`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    'receipt_prefix',
    'GM',
    'receipt',
    '2025-12-12 18:27:35',
    '2025-12-12 03:56:39',
    '2025-12-12 18:27:35'
  );
INSERT INTO
  `settings` (
    `key`,
    `value`,
    `category`,
    `updated_at`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    'receipt_start',
    '1',
    'receipt',
    '2025-12-12 18:27:35',
    '2025-12-12 03:56:39',
    '2025-12-12 18:27:35'
  );
INSERT INTO
  `settings` (
    `key`,
    `value`,
    `category`,
    `updated_at`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    'unit',
    'Brass',
    'general',
    '2025-12-12 18:27:35',
    '2025-12-12 03:56:39',
    '2025-12-12 18:27:35'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: truck_owners
# ------------------------------------------------------------

INSERT INTO
  `truck_owners` (
    `id`,
    `name`,
    `phone`,
    `address`,
    `credit_limit`,
    `payment_type`,
    `is_partner`,
    `partner_rate`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    1,
    'test',
    NULL,
    NULL,
    0.00,
    'mixed',
    1,
    1000.00,
    8850.00,
    '1111',
    1,
    '2025-12-12 03:56:39',
    '2025-12-12 14:45:15'
  );
INSERT INTO
  `truck_owners` (
    `id`,
    `name`,
    `phone`,
    `address`,
    `credit_limit`,
    `payment_type`,
    `is_partner`,
    `partner_rate`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    2,
    'test2',
    NULL,
    NULL,
    0.00,
    'cash',
    0,
    NULL,
    0.00,
    '11112',
    1,
    '2025-12-12 03:56:39',
    '2025-12-12 03:56:39'
  );
INSERT INTO
  `truck_owners` (
    `id`,
    `name`,
    `phone`,
    `address`,
    `credit_limit`,
    `payment_type`,
    `is_partner`,
    `partner_rate`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    3,
    'Bilal',
    NULL,
    NULL,
    0.00,
    'mixed',
    1,
    1000.00,
    0.00,
    'MH 29 7867',
    1,
    '2025-12-12 03:56:39',
    '2025-12-12 14:13:52'
  );
INSERT INTO
  `truck_owners` (
    `id`,
    `name`,
    `phone`,
    `address`,
    `credit_limit`,
    `payment_type`,
    `is_partner`,
    `partner_rate`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    4,
    'test new ref',
    NULL,
    NULL,
    0.00,
    'cash',
    0,
    NULL,
    0.00,
    '4444',
    1,
    '2025-12-12 14:14:22',
    '2025-12-12 14:14:22'
  );
INSERT INTO
  `truck_owners` (
    `id`,
    `name`,
    `phone`,
    `address`,
    `credit_limit`,
    `payment_type`,
    `is_partner`,
    `partner_rate`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    5,
    'test8',
    NULL,
    NULL,
    0.00,
    'cash',
    0,
    NULL,
    0.00,
    '8888',
    1,
    '2025-12-12 16:50:29',
    '2025-12-12 16:50:29'
  );
INSERT INTO
  `truck_owners` (
    `id`,
    `name`,
    `phone`,
    `address`,
    `credit_limit`,
    `payment_type`,
    `is_partner`,
    `partner_rate`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    6,
    'test44',
    NULL,
    NULL,
    0.00,
    'cash',
    0,
    NULL,
    0.00,
    '444',
    1,
    '2025-12-12 16:56:14',
    '2025-12-12 16:56:14'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: users
# ------------------------------------------------------------

INSERT INTO
  `users` (
    `id`,
    `username`,
    `password_hash`,
    `full_name`,
    `role`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    1,
    'admin',
    '$2b$10$whcC.q7JyK54w4jJBDBo/.COpUtrIqTTuCa6o.UbEwovGkRi6X3o2',
    'Administrator',
    'admin',
    1,
    '2025-12-12 03:56:40',
    '2025-12-12 03:56:40'
  );
INSERT INTO
  `users` (
    `id`,
    `username`,
    `password_hash`,
    `full_name`,
    `role`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    2,
    'user',
    '$2b$10$wr/j359sdy3bfMm6ySV7BuMtd/8umM18RB0Tg3FQar1EoFNUUIWzS',
    'Standard User',
    'user',
    1,
    '2025-12-12 03:56:40',
    '2025-12-12 03:56:40'
  );

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
