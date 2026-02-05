SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE `credit_payments`;
TRUNCATE TABLE `deposit_transactions`;
TRUNCATE TABLE `expenses`;
TRUNCATE TABLE `receipt_edit_histories`;
TRUNCATE TABLE `receipts`;
TRUNCATE TABLE `settings`;
TRUNCATE TABLE `truck_owner_edit_histories`;
TRUNCATE TABLE `truck_owners`;
TRUNCATE TABLE `truck_vehicles`;
TRUNCATE TABLE `users`;
TRUNCATE TABLE `vehicle_ownership_histories`;
TRUNCATE TABLE `vehicle_images`;

INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    1,
    23,
    10000.00,
    '2026-02-01 12:47:05',
    'cash',
    'payment jama',
    '2026-02-01 12:47:05',
    '2026-02-01 12:47:05'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    2,
    64,
    10000.00,
    '2026-02-01 12:47:05',
    'cash',
    'payment jama',
    '2026-02-01 12:47:05',
    '2026-02-01 12:47:05'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    3,
    108,
    10000.00,
    '2026-02-01 12:47:05',
    'cash',
    'payment jama',
    '2026-02-01 12:47:05',
    '2026-02-01 12:47:05'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    4,
    26,
    7000.00,
    '2026-02-03 11:44:47',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:44:47',
    '2026-02-03 11:44:47'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    5,
    68,
    7000.00,
    '2026-02-03 11:44:47',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:44:47',
    '2026-02-03 11:44:47'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    6,
    100,
    7000.00,
    '2026-02-03 11:44:47',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:44:47',
    '2026-02-03 11:44:47'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    7,
    227,
    7000.00,
    '2026-02-03 11:44:47',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:44:47',
    '2026-02-03 11:44:47'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    8,
    79,
    17000.00,
    '2026-02-03 11:45:07',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:07',
    '2026-02-03 11:45:07'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    9,
    140,
    17000.00,
    '2026-02-03 11:45:07',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:07',
    '2026-02-03 11:45:07'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    10,
    141,
    11000.00,
    '2026-02-03 11:45:07',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:07',
    '2026-02-03 11:45:07'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    11,
    142,
    22000.00,
    '2026-02-03 11:45:07',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:07',
    '2026-02-03 11:45:07'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    12,
    152,
    11000.00,
    '2026-02-03 11:45:07',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:07',
    '2026-02-03 11:45:07'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    13,
    153,
    22000.00,
    '2026-02-03 11:45:07',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:07',
    '2026-02-03 11:45:07'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    14,
    199,
    17000.00,
    '2026-02-03 11:45:07',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:07',
    '2026-02-03 11:45:07'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    15,
    221,
    22000.00,
    '2026-02-03 11:45:07',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:07',
    '2026-02-03 11:45:07'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    16,
    236,
    17000.00,
    '2026-02-03 11:45:08',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:08',
    '2026-02-03 11:45:08'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    17,
    237,
    11000.00,
    '2026-02-03 11:45:08',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:08',
    '2026-02-03 11:45:08'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    18,
    241,
    11000.00,
    '2026-02-03 11:45:08',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:08',
    '2026-02-03 11:45:08'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    19,
    242,
    22000.00,
    '2026-02-03 11:45:08',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:08',
    '2026-02-03 11:45:08'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    20,
    244,
    17000.00,
    '2026-02-03 11:45:08',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:08',
    '2026-02-03 11:45:08'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    21,
    316,
    10000.00,
    '2026-02-03 11:45:08',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:08',
    '2026-02-03 11:45:08'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    22,
    317,
    17000.00,
    '2026-02-03 11:45:08',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:08',
    '2026-02-03 11:45:08'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    23,
    319,
    22000.00,
    '2026-02-03 11:45:08',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:08',
    '2026-02-03 11:45:08'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    24,
    363,
    22000.00,
    '2026-02-03 11:45:08',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:08',
    '2026-02-03 11:45:08'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    25,
    365,
    10000.00,
    '2026-02-03 11:45:08',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:08',
    '2026-02-03 11:45:08'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    26,
    370,
    17000.00,
    '2026-02-03 11:45:08',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:08',
    '2026-02-03 11:45:08'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    27,
    3,
    12000.00,
    '2026-02-03 11:45:29',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    28,
    5,
    18000.00,
    '2026-02-03 11:45:29',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    29,
    77,
    12000.00,
    '2026-02-03 11:45:29',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    30,
    125,
    12000.00,
    '2026-02-03 11:45:29',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    31,
    154,
    12000.00,
    '2026-02-03 11:45:29',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    32,
    185,
    12000.00,
    '2026-02-03 11:45:29',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    33,
    189,
    18000.00,
    '2026-02-03 11:45:29',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    34,
    231,
    12000.00,
    '2026-02-03 11:45:29',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    35,
    232,
    18000.00,
    '2026-02-03 11:45:29',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    36,
    233,
    12000.00,
    '2026-02-03 11:45:29',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    37,
    278,
    12000.00,
    '2026-02-03 11:45:29',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    38,
    305,
    12000.00,
    '2026-02-03 11:45:29',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    39,
    309,
    12000.00,
    '2026-02-03 11:45:29',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    40,
    310,
    18000.00,
    '2026-02-03 11:45:29',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    41,
    336,
    12000.00,
    '2026-02-03 11:45:29',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    42,
    338,
    12000.00,
    '2026-02-03 11:45:29',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    43,
    339,
    18000.00,
    '2026-02-03 11:45:29',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    44,
    366,
    12000.00,
    '2026-02-03 11:45:29',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    45,
    367,
    18000.00,
    '2026-02-03 11:45:29',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    46,
    368,
    12000.00,
    '2026-02-03 11:45:29',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    47,
    32,
    12000.00,
    '2026-02-03 11:46:20',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:46:20',
    '2026-02-03 11:46:20'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    48,
    39,
    8000.00,
    '2026-02-03 11:46:20',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:46:20',
    '2026-02-03 11:46:20'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    49,
    70,
    12000.00,
    '2026-02-03 11:46:20',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:46:20',
    '2026-02-03 11:46:20'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    50,
    87,
    12000.00,
    '2026-02-03 11:46:20',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:46:20',
    '2026-02-03 11:46:20'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    51,
    117,
    8000.00,
    '2026-02-03 11:46:20',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:46:20',
    '2026-02-03 11:46:20'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    52,
    151,
    12000.00,
    '2026-02-03 11:46:20',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:46:20',
    '2026-02-03 11:46:20'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    53,
    176,
    12000.00,
    '2026-02-03 11:46:20',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:46:20',
    '2026-02-03 11:46:20'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    54,
    203,
    9000.00,
    '2026-02-03 11:46:20',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:46:20',
    '2026-02-03 11:46:20'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    55,
    269,
    8000.00,
    '2026-02-03 11:46:20',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:46:20',
    '2026-02-03 11:46:20'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    56,
    282,
    12000.00,
    '2026-02-03 11:46:20',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:46:20',
    '2026-02-03 11:46:20'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    57,
    286,
    9000.00,
    '2026-02-03 11:46:20',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:46:20',
    '2026-02-03 11:46:20'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    58,
    356,
    8000.00,
    '2026-02-03 11:46:20',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:46:20',
    '2026-02-03 11:46:20'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    59,
    40,
    7000.00,
    '2026-02-03 11:46:41',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:46:41',
    '2026-02-03 11:46:41'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    60,
    97,
    7000.00,
    '2026-02-03 11:46:41',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:46:41',
    '2026-02-03 11:46:41'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    61,
    148,
    7000.00,
    '2026-02-03 11:46:41',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:46:41',
    '2026-02-03 11:46:41'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    62,
    174,
    7000.00,
    '2026-02-03 11:46:41',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:46:41',
    '2026-02-03 11:46:41'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    63,
    257,
    7000.00,
    '2026-02-03 11:46:41',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 11:46:41',
    '2026-02-03 11:46:41'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    64,
    368,
    12000.00,
    '2026-02-03 12:49:13',
    'cash',
    '6 tyre 9000,10 Tyre 16000 ke hisab se paid 1/02/ 2026 tak nil 1 gadi ka check karna baki hai  Test',
    '2026-02-03 12:49:13',
    '2026-02-03 12:49:13'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    65,
    28,
    8000.00,
    '2026-02-03 17:41:51',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    66,
    29,
    8000.00,
    '2026-02-03 17:41:51',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    67,
    31,
    8000.00,
    '2026-02-03 17:41:51',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    68,
    36,
    11000.00,
    '2026-02-03 17:41:51',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    69,
    37,
    8000.00,
    '2026-02-03 17:41:51',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    70,
    73,
    11000.00,
    '2026-02-03 17:41:51',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    71,
    85,
    11000.00,
    '2026-02-03 17:41:51',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    72,
    98,
    8000.00,
    '2026-02-03 17:41:51',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    73,
    99,
    8000.00,
    '2026-02-03 17:41:51',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    74,
    103,
    11000.00,
    '2026-02-03 17:41:51',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    75,
    143,
    11000.00,
    '2026-02-03 17:41:51',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    76,
    146,
    8000.00,
    '2026-02-03 17:41:51',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    77,
    161,
    8000.00,
    '2026-02-03 17:41:51',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    78,
    163,
    8000.00,
    '2026-02-03 17:41:51',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    79,
    165,
    11000.00,
    '2026-02-03 17:41:51',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    80,
    170,
    11000.00,
    '2026-02-03 17:41:51',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    81,
    171,
    8000.00,
    '2026-02-03 17:41:51',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    82,
    177,
    11000.00,
    '2026-02-03 17:41:51',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    83,
    211,
    8000.00,
    '2026-02-03 17:41:51',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    84,
    212,
    11000.00,
    '2026-02-03 17:41:51',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    85,
    258,
    8000.00,
    '2026-02-03 17:41:51',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    86,
    265,
    5000.00,
    '2026-02-03 17:41:51',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    87,
    10,
    11000.00,
    '2026-02-03 17:49:35',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 17:49:35',
    '2026-02-03 17:49:35'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    88,
    11,
    11000.00,
    '2026-02-03 17:49:36',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 17:49:36',
    '2026-02-03 17:49:36'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    89,
    214,
    11000.00,
    '2026-02-03 17:49:36',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 17:49:36',
    '2026-02-03 17:49:36'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    90,
    235,
    3000.00,
    '2026-02-03 17:49:36',
    'cash',
    'Bulk Payment Allocation',
    '2026-02-03 17:49:36',
    '2026-02-03 17:49:36'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    91,
    415,
    10000.00,
    '2026-02-04 21:19:11',
    'cash',
    'Cash Wasim Bhai 2.4 Min Pe',
    '2026-02-04 21:19:11',
    '2026-02-04 21:19:11'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    92,
    460,
    10000.00,
    '2026-02-04 21:19:11',
    'cash',
    'Cash Wasim Bhai 2.4 Min Pe',
    '2026-02-04 21:19:11',
    '2026-02-04 21:19:11'
  );
INSERT INTO
  `credit_payments` (
    `id`,
    `receipt_id`,
    `amount_paid`,
    `payment_date`,
    `payment_mode`,
    `reference_no`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    93,
    500,
    10000.00,
    '2026-02-04 21:19:11',
    'cash',
    'Cash Wasim Bhai 2.4 Min Pe',
    '2026-02-04 21:19:11',
    '2026-02-04 21:19:11'
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
    1,
    37,
    'refund',
    2.00,
    0.00,
    2.00,
    'GM9091',
    'Excess payment moved to deposit (Receipt Edit)',
    '2026-01-30 14:54:10',
    '2026-01-30 14:54:10'
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
    47,
    'refund',
    1000.00,
    0.00,
    1000.00,
    'GM9229',
    'Excess payment moved to deposit (Receipt Edit)',
    '2026-01-31 17:41:10',
    '2026-01-31 17:41:10'
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
    3,
    18,
    'refund',
    30000.00,
    0.00,
    30000.00,
    'GM9158',
    'Excess payment moved to deposit (Receipt Edit)',
    '2026-02-01 12:44:52',
    '2026-02-01 12:44:52'
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
    4,
    18,
    'set',
    0.00,
    30000.00,
    0.00,
    NULL,
    'Set balance',
    '2026-02-01 12:47:47',
    '2026-02-01 12:47:47'
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
    5,
    47,
    'refund',
    1500.00,
    1000.00,
    2500.00,
    'GM9306',
    'Excess payment moved to deposit (Receipt Edit)',
    '2026-02-01 21:39:45',
    '2026-02-01 21:39:45'
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
    6,
    5,
    'refund',
    150.00,
    0.00,
    150.00,
    'GM9532',
    'Excess payment moved to deposit (Receipt Edit)',
    '2026-02-05 00:39:09',
    '2026-02-05 00:39:09'
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
    1,
    '2026-01-29 00:00:00',
    'FUEL',
    '50,000 Paid To Dissel Pump In Previous Bill ',
    50000.00,
    'UPI',
    '',
    'Rijju',
    'Ralegaon',
    '',
    '',
    'APPROVED',
    'Faizan',
    '2026-01-30 10:14:46',
    '2026-01-30 10:15:01'
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
    '2026-01-29 00:00:00',
    'OTHER',
    'Patwari ko Dene ke liye 30,000 Tousif ko diya',
    30000.00,
    'CASH',
    '',
    'Prasad',
    'Ralegaon ',
    '',
    '',
    'APPROVED',
    'Faizan',
    '2026-01-30 10:15:54',
    '2026-01-30 10:16:14'
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
    '2026-01-30 00:00:00',
    'FUEL',
    '50,000 Paid To Dissel Pump In Previous Bill ',
    50000.00,
    'CASH',
    NULL,
    'Rijju',
    'Ralegaon',
    NULL,
    NULL,
    NULL,
    'Faizan',
    '2026-01-30 10:16:35',
    '2026-01-30 10:16:35'
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
    4,
    '2026-01-30 00:00:00',
    'FUEL',
    '50,000 Paid To Dissel Pump In Previous Bill ',
    50000.00,
    'CASH',
    '',
    'Rijju',
    'Ralegaon',
    '',
    '',
    'APPROVED',
    'Faizan',
    '2026-01-30 15:15:17',
    '2026-01-30 15:15:22'
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
    5,
    '2026-01-30 00:00:00',
    'LABOR',
    'DARWHA HUNDAYI KAMBLE POCLAND',
    40000.00,
    'UPI',
    '',
    'BHAIYA',
    'RALEGAON',
    '',
    '',
    'APPROVED',
    'Faizan',
    '2026-01-30 17:10:39',
    '2026-01-31 10:09:47'
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
    7,
    '2026-01-30 00:00:00',
    'LABOR',
    'Avez Pathan ',
    1500.00,
    'CASH',
    NULL,
    NULL,
    'Ralegaon',
    NULL,
    NULL,
    NULL,
    'Faizan',
    '2026-01-31 09:51:36',
    '2026-01-31 09:51:36'
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
    8,
    '2026-01-31 00:00:00',
    'LABOR',
    'Ek Bar 45000 fir 50,000 Diye Boat Wale ko',
    95000.00,
    'UPI',
    '',
    '',
    'Ralegaon ',
    '',
    '',
    'APPROVED',
    'Faizan',
    '2026-01-31 10:07:21',
    '2026-01-31 10:07:29'
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
    9,
    '2026-01-31 00:00:00',
    'LABOR',
    'Nilesh Kamble Pocland 10,000 Diye',
    40000.00,
    'UPI',
    '',
    '',
    'Ralegaon ',
    '',
    '',
    'APPROVED',
    'Faizan',
    '2026-01-31 10:08:23',
    '2026-01-31 10:09:32'
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
    10,
    '2026-01-31 00:00:00',
    'LABOR',
    'Rafi Ko Diye Machine Bhada New Pocland ',
    20000.00,
    'UPI',
    NULL,
    NULL,
    'Ralegaon ',
    NULL,
    NULL,
    NULL,
    'Faizan',
    '2026-01-31 10:09:17',
    '2026-01-31 10:09:17'
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
    11,
    '2026-01-31 00:00:00',
    'LABOR',
    'TAUFIK BHURYA ',
    3000.00,
    'CASH',
    NULL,
    NULL,
    'RALEGAON',
    NULL,
    NULL,
    NULL,
    'Faizan',
    '2026-01-31 17:34:55',
    '2026-01-31 17:34:55'
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
    12,
    '2026-01-31 00:00:00',
    'OTHER',
    'Shahebaz Bhaiya ne Liye Shaz Bhai Ka Naam pe',
    20000.00,
    'UPI',
    NULL,
    NULL,
    'Ralegaon ',
    NULL,
    NULL,
    NULL,
    'Faizan',
    '2026-01-31 19:27:12',
    '2026-01-31 19:27:12'
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
    13,
    '2026-02-01 00:00:00',
    'LABOR',
    'guru ralegaon location advance shahebaz bhaiya',
    5000.00,
    'UPI',
    NULL,
    NULL,
    'RALEGAON',
    NULL,
    NULL,
    NULL,
    'Faizan',
    '2026-02-01 13:29:52',
    '2026-02-01 13:29:52'
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
    14,
    '2026-01-02 00:00:00',
    'LABOR',
    'RAFI KO POCLAND KE LIYE 20/20 DIYE',
    20000.00,
    'UPI',
    NULL,
    NULL,
    'RALEGAON',
    NULL,
    NULL,
    NULL,
    'Faizan',
    '2026-02-02 15:14:56',
    '2026-02-02 15:14:56'
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
    16,
    '2026-01-02 00:00:00',
    'LABOR',
    'AJIT SAO BOAT',
    30000.00,
    'CASH',
    NULL,
    NULL,
    'RALEGAON',
    NULL,
    NULL,
    NULL,
    'Faizan',
    '2026-02-02 15:16:06',
    '2026-02-02 15:16:06'
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
    17,
    '2026-02-02 00:00:00',
    'LABOR',
    'BABAR BOAT SHOLAPUR',
    70000.00,
    'CASH',
    NULL,
    NULL,
    'RALEGAON',
    NULL,
    NULL,
    NULL,
    'Faizan',
    '2026-02-02 15:16:31',
    '2026-02-02 15:16:31'
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
    18,
    '2026-01-02 00:00:00',
    'LABOR',
    'BABAR BOAT SHOLAPUR',
    150000.00,
    'CASH',
    NULL,
    NULL,
    'RALEGAON',
    NULL,
    NULL,
    NULL,
    'Faizan',
    '2026-02-02 15:17:02',
    '2026-02-02 15:17:02'
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
    19,
    '2026-02-02 00:00:00',
    'OTHER',
    'Yevti Ki Maidam Ko',
    5000.00,
    'CASH',
    NULL,
    NULL,
    'Ralegaon',
    NULL,
    NULL,
    NULL,
    'Faizan',
    '2026-02-02 19:23:00',
    '2026-02-02 19:23:00'
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
    20,
    '2026-02-02 00:00:00',
    'LABOR',
    'Patwari Yevti Kohli Saheb',
    60000.00,
    'CASH',
    NULL,
    NULL,
    'Yevti ',
    NULL,
    NULL,
    NULL,
    'Faizan',
    '2026-02-02 19:23:33',
    '2026-02-02 19:23:33'
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
    21,
    '2026-02-02 00:00:00',
    'LABOR',
    'Patwari ko 7.5,5,10 karke total ',
    22500.00,
    'CASH',
    NULL,
    NULL,
    'Yevti ',
    NULL,
    NULL,
    NULL,
    'Faizan',
    '2026-02-02 19:25:03',
    '2026-02-02 19:25:03'
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
    22,
    '2026-02-02 00:00:00',
    'LABOR',
    'Ajay Gawande',
    50000.00,
    'CASH',
    NULL,
    NULL,
    'Yavatmal ',
    NULL,
    NULL,
    NULL,
    'Faizan',
    '2026-02-02 19:25:20',
    '2026-02-02 19:25:20'
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
    23,
    '2026-02-02 00:00:00',
    'LABOR',
    'Kohli Patwari Yevti Double',
    20000.00,
    'CASH',
    NULL,
    NULL,
    'Yevti ',
    NULL,
    NULL,
    NULL,
    'Faizan',
    '2026-02-02 19:25:45',
    '2026-02-02 19:25:45'
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
    24,
    '2026-02-01 17:01:00',
    'LABOR',
    'Gani Bhai Kalam Muram Ke',
    46000.00,
    'CASH',
    NULL,
    NULL,
    'Kalam',
    NULL,
    NULL,
    NULL,
    'Faizan',
    '2026-02-03 11:33:49',
    '2026-02-03 11:33:49'
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
    25,
    '2026-02-02 17:03:00',
    'LABOR',
    'Kohli Patwari Yevti 3rd',
    20000.00,
    'CASH',
    NULL,
    NULL,
    'Yevti',
    NULL,
    NULL,
    NULL,
    'Faizan',
    '2026-02-03 11:34:21',
    '2026-02-03 11:34:21'
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
    26,
    '2026-02-03 17:04:00',
    'LABOR',
    'Patwari ko diye',
    10000.00,
    'CASH',
    NULL,
    NULL,
    'Yevti ',
    NULL,
    NULL,
    NULL,
    'Faizan',
    '2026-02-03 11:34:39',
    '2026-02-03 11:34:39'
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
    27,
    '2026-02-03 17:04:00',
    'LABOR',
    'Babar Boat Bhaiya Ne Diye',
    50000.00,
    'CASH',
    NULL,
    NULL,
    'Yevti ',
    NULL,
    NULL,
    NULL,
    'Faizan',
    '2026-02-03 11:38:45',
    '2026-02-03 11:38:45'
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
    28,
    '2026-02-04 18:08:00',
    'TRANSPORT',
    'Saini Pocland ko Bhaiya Ne Diye',
    100000.00,
    'CASH',
    '',
    '',
    'Yevti ',
    '',
    '',
    'APPROVED',
    'Faizan',
    '2026-02-03 11:39:16',
    '2026-02-04 12:38:05'
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
    29,
    '2026-02-03 17:09:00',
    'LABOR',
    'Sunny Boat Wale ko Diye Rijju K pass se Bhaiya ne diye',
    3000.00,
    'CASH',
    NULL,
    NULL,
    'Yevti',
    NULL,
    NULL,
    NULL,
    'Faizan',
    '2026-02-03 11:39:57',
    '2026-02-03 11:39:57'
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
    30,
    '2026-02-04 18:06:00',
    'FUEL',
    'Dissel Ke Precious Bill Me Diye',
    300000.00,
    'CASH',
    '',
    '',
    'Yevti',
    '',
    '',
    'APPROVED',
    'Faizan',
    '2026-02-03 11:40:29',
    '2026-02-04 12:36:59'
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
    31,
    '2026-02-03 00:00:00',
    'LABOR',
    'Sunny Boat Wale ko',
    10000.00,
    'CASH',
    NULL,
    NULL,
    'Yevti',
    NULL,
    NULL,
    NULL,
    'Faizan',
    '2026-02-03 14:53:31',
    '2026-02-03 14:53:31'
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
    32,
    '2026-02-03 23:58:00',
    'LABOR',
    'OVEZ BHAI KHARCHA',
    1000.00,
    'CASH',
    NULL,
    NULL,
    'RALEGAON',
    NULL,
    NULL,
    NULL,
    'Faizan',
    '2026-02-03 18:29:09',
    '2026-02-03 18:29:09'
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
    33,
    '2026-02-03 23:59:00',
    'LABOR',
    'SHAHEBAZ BHAI DISSEL',
    2000.00,
    'CASH',
    NULL,
    NULL,
    'Yevti',
    NULL,
    NULL,
    NULL,
    'Faizan',
    '2026-02-03 18:29:26',
    '2026-02-03 18:29:26'
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
    34,
    '2026-02-04 16:01:00',
    'LABOR',
    'Bank Transfer 1.5 Lakh Ajit Saw Ko',
    150000.00,
    'BANK_TRANSFER',
    NULL,
    NULL,
    'Yavatmal ',
    NULL,
    NULL,
    NULL,
    'Faizan',
    '2026-02-04 10:32:43',
    '2026-02-04 10:32:43'
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
    35,
    '2026-02-04 16:02:00',
    'LABOR',
    'Sunny Lokhande 50k Online',
    50000.00,
    'UPI',
    NULL,
    NULL,
    'Yavatmal ',
    NULL,
    NULL,
    NULL,
    'Faizan',
    '2026-02-04 10:33:53',
    '2026-02-04 10:33:53'
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
    36,
    '2026-02-04 17:07:00',
    'LABOR',
    'Rijju Bhaiya ne Hisab me se sunny boat wale ko',
    3000.00,
    'CASH',
    '',
    '',
    'Yevti',
    '',
    '',
    'APPROVED',
    'Faizan',
    '2026-02-04 10:41:33',
    '2026-02-04 11:37:56'
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
    37,
    '2026-02-05 03:22:00',
    'LABOR',
    'Babar Boat Wale Ko rijju bhaiya ne diye ',
    50000.00,
    'CASH',
    '',
    '',
    'Yevti',
    '',
    '',
    'APPROVED',
    'Faizan',
    '2026-02-04 10:42:13',
    '2026-02-04 21:52:30'
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
    38,
    '2026-02-04 16:12:00',
    'LABOR',
    'Ajit boat wale se bhaiya ne liye the, rijju bhaiya me boat wale ko wapis diye ',
    10000.00,
    'CASH',
    NULL,
    NULL,
    'Yevti',
    NULL,
    NULL,
    NULL,
    'Faizan',
    '2026-02-04 10:43:18',
    '2026-02-04 10:43:18'
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
    39,
    '2026-02-04 18:07:00',
    'TRANSPORT',
    'Rafi Mamu ko Rijju Bhaiya Ne Online Mare',
    50000.00,
    'UPI',
    '',
    '',
    'Yavatmal ',
    '',
    '',
    'APPROVED',
    'Faizan',
    '2026-02-04 12:06:09',
    '2026-02-04 12:37:24'
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
    40,
    '2026-02-04 18:07:00',
    'TRANSPORT',
    'Rafi Mamu Ko Bank Transfer ',
    100000.00,
    'BANK_TRANSFER',
    '',
    '',
    'Yavatmal ',
    '',
    '',
    'APPROVED',
    'Faizan',
    '2026-02-04 12:06:28',
    '2026-02-04 12:37:17'
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
    41,
    '2026-02-04 18:07:00',
    'TRANSPORT',
    'JCB Guluane ke 1st Day Ke Rehan Ko',
    10000.00,
    'CASH',
    '',
    'Rehan',
    'Yavatmal ',
    '',
    '',
    'APPROVED',
    'Faizan',
    '2026-02-04 12:36:30',
    '2026-02-04 12:37:08'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    1,
    4,
    'cash_paid',
    '0',
    '10000',
    '2026-01-29 14:32:32',
    'admin',
    'Payment update',
    '2026-01-29 14:32:32',
    '2026-01-29 14:32:32'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    2,
    4,
    'payment_status',
    'unpaid',
    'paid',
    '2026-01-29 14:32:32',
    'admin',
    'Payment status update',
    '2026-01-29 14:32:32',
    '2026-01-29 14:32:32'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    3,
    20,
    'brass_qty',
    '3.5',
    '1',
    '2026-01-29 16:57:01',
    'admin',
    'Receipt Edit',
    '2026-01-29 16:57:01',
    '2026-01-29 16:57:01'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    4,
    20,
    'total_amount',
    '42000',
    '12000',
    '2026-01-29 16:57:01',
    'admin',
    'Receipt Edit',
    '2026-01-29 16:57:01',
    '2026-01-29 16:57:01'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    5,
    24,
    'rate',
    '1',
    '12000',
    '2026-01-29 17:26:28',
    'admin',
    'Receipt Edit',
    '2026-01-29 17:26:28',
    '2026-01-29 17:26:28'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    6,
    24,
    'total_amount',
    '1',
    '12000',
    '2026-01-29 17:26:28',
    'admin',
    'Receipt Edit',
    '2026-01-29 17:26:28',
    '2026-01-29 17:26:28'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    7,
    28,
    'cash_paid',
    '7998',
    '3000',
    '2026-01-29 17:36:25',
    'admin',
    'Receipt Edit',
    '2026-01-29 17:36:25',
    '2026-01-29 17:36:25'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    8,
    31,
    'cash_paid',
    '3001',
    '3000',
    '2026-01-29 17:51:44',
    'admin',
    'Receipt Edit',
    '2026-01-29 17:51:44',
    '2026-01-29 17:51:44'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    9,
    31,
    'rate',
    '10998',
    '11000',
    '2026-01-29 17:51:56',
    'admin',
    'Receipt Edit',
    '2026-01-29 17:51:56',
    '2026-01-29 17:51:56'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    10,
    31,
    'total_amount',
    '10998',
    '11000',
    '2026-01-29 17:51:56',
    'admin',
    'Receipt Edit',
    '2026-01-29 17:51:56',
    '2026-01-29 17:51:56'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    11,
    36,
    'rate',
    '10997',
    '11000',
    '2026-01-29 17:59:55',
    'admin',
    'Receipt Edit',
    '2026-01-29 17:59:55',
    '2026-01-29 17:59:55'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    12,
    36,
    'total_amount',
    '10997',
    '11000',
    '2026-01-29 17:59:55',
    'admin',
    'Receipt Edit',
    '2026-01-29 17:59:55',
    '2026-01-29 17:59:55'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    13,
    40,
    'cash_paid',
    '10000',
    '3000',
    '2026-01-29 18:08:49',
    'admin',
    'Receipt Edit',
    '2026-01-29 18:08:49',
    '2026-01-29 18:08:49'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    14,
    40,
    'payment_status',
    'paid',
    'partial',
    '2026-01-29 18:08:49',
    'admin',
    'Receipt Edit',
    '2026-01-29 18:08:49',
    '2026-01-29 18:08:49'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    15,
    49,
    'cash_paid',
    '2999',
    '3000',
    '2026-01-29 18:32:56',
    'admin',
    'Receipt Edit',
    '2026-01-29 18:32:56',
    '2026-01-29 18:32:56'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    16,
    55,
    'rate',
    '11997',
    '12000',
    '2026-01-29 19:41:33',
    'admin',
    'Receipt Edit',
    '2026-01-29 19:41:33',
    '2026-01-29 19:41:33'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    17,
    55,
    'total_amount',
    '11997',
    '12000',
    '2026-01-29 19:41:33',
    'admin',
    'Receipt Edit',
    '2026-01-29 19:41:33',
    '2026-01-29 19:41:33'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    18,
    61,
    'rate',
    '10997',
    '11000',
    '2026-01-29 20:55:56',
    'admin',
    'Receipt Edit',
    '2026-01-29 20:55:56',
    '2026-01-29 20:55:56'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    19,
    61,
    'total_amount',
    '10997',
    '11000',
    '2026-01-29 20:55:56',
    'admin',
    'Receipt Edit',
    '2026-01-29 20:55:56',
    '2026-01-29 20:55:56'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    20,
    60,
    'rate',
    '10999',
    '11000',
    '2026-01-29 20:56:10',
    'admin',
    'Receipt Edit',
    '2026-01-29 20:56:10',
    '2026-01-29 20:56:10'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    21,
    60,
    'total_amount',
    '10999',
    '11000',
    '2026-01-29 20:56:10',
    'admin',
    'Receipt Edit',
    '2026-01-29 20:56:10',
    '2026-01-29 20:56:10'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    22,
    65,
    'rate',
    '17997',
    '18000',
    '2026-01-29 21:34:32',
    'admin',
    'Receipt Edit',
    '2026-01-29 21:34:32',
    '2026-01-29 21:34:32'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    23,
    65,
    'cash_paid',
    '4',
    'NaN',
    '2026-01-29 21:34:32',
    'admin',
    'Receipt Edit',
    '2026-01-29 21:34:32',
    '2026-01-29 21:34:32'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    24,
    65,
    'total_amount',
    '17997',
    '18000',
    '2026-01-29 21:34:32',
    'admin',
    'Receipt Edit',
    '2026-01-29 21:34:32',
    '2026-01-29 21:34:32'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    25,
    65,
    'payment_status',
    'partial',
    'unpaid',
    '2026-01-29 21:34:32',
    'admin',
    'Receipt Edit',
    '2026-01-29 21:34:32',
    '2026-01-29 21:34:32'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    26,
    69,
    'rate',
    '11997',
    '12000',
    '2026-01-29 22:00:50',
    'admin',
    'Receipt Edit',
    '2026-01-29 22:00:50',
    '2026-01-29 22:00:50'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    27,
    69,
    'total_amount',
    '11997',
    '12000',
    '2026-01-29 22:00:50',
    'admin',
    'Receipt Edit',
    '2026-01-29 22:00:50',
    '2026-01-29 22:00:50'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    28,
    12,
    'truck_owner',
    'Shahrukh Pathan',
    'WASIM PATHAN',
    '2026-01-29 22:02:30',
    'admin',
    'Receipt Edit',
    '2026-01-29 22:02:30',
    '2026-01-29 22:02:30'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    29,
    13,
    'truck_owner',
    'Shahrukh Pathan',
    'WASIM PATHAN',
    '2026-01-29 22:02:47',
    'admin',
    'Receipt Edit',
    '2026-01-29 22:02:47',
    '2026-01-29 22:02:47'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    30,
    13,
    'vehicle_number',
    'MH04GR9803',
    'MH29T0288',
    '2026-01-29 22:02:47',
    'admin',
    'Receipt Edit',
    '2026-01-29 22:02:47',
    '2026-01-29 22:02:47'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    31,
    13,
    'vehicle_number',
    'MH29T0288',
    'MH04GR9803',
    '2026-01-29 22:04:03',
    'admin',
    'Receipt Edit',
    '2026-01-29 22:04:03',
    '2026-01-29 22:04:03'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    32,
    32,
    'vehicle_number',
    'MH40CM1340',
    'MH40CM1344',
    '2026-01-29 22:50:01',
    'Faizan',
    'Receipt Edit',
    '2026-01-29 22:50:01',
    '2026-01-29 22:50:01'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    33,
    67,
    'cash_paid',
    '5996',
    '6000',
    '2026-01-30 09:38:59',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 09:38:59',
    '2026-01-30 09:38:59'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    34,
    5,
    'loading_charge',
    '150',
    '',
    '2026-01-30 09:39:32',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 09:39:32',
    '2026-01-30 09:39:32'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    35,
    5,
    'total_amount',
    '18150',
    '18000',
    '2026-01-30 09:39:32',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 09:39:32',
    '2026-01-30 09:39:32'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    36,
    83,
    'rate',
    '11998',
    '12000',
    '2026-01-30 13:17:59',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 13:17:59',
    '2026-01-30 13:17:59'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    37,
    83,
    'total_amount',
    '11998',
    '12000',
    '2026-01-30 13:17:59',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 13:17:59',
    '2026-01-30 13:17:59'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    38,
    82,
    'rate',
    '11998',
    '12000',
    '2026-01-30 13:18:09',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 13:18:09',
    '2026-01-30 13:18:09'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    39,
    82,
    'total_amount',
    '11998',
    '12000',
    '2026-01-30 13:18:09',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 13:18:09',
    '2026-01-30 13:18:09'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    40,
    81,
    'cash_paid',
    '2999',
    '3000',
    '2026-01-30 13:18:22',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 13:18:22',
    '2026-01-30 13:18:22'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    41,
    82,
    'is_active',
    '1',
    '0',
    '2026-01-30 13:26:03',
    'Faizan',
    'Receipt Deleted',
    '2026-01-30 13:26:03',
    '2026-01-30 13:26:03'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    42,
    89,
    'cash_paid',
    '',
    '10000',
    '2026-01-30 13:28:54',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 13:28:54',
    '2026-01-30 13:28:54'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    43,
    89,
    'payment_status',
    'unpaid',
    'paid',
    '2026-01-30 13:28:54',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 13:28:54',
    '2026-01-30 13:28:54'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    44,
    106,
    'rate',
    '12000',
    '18000',
    '2026-01-30 14:52:34',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 14:52:34',
    '2026-01-30 14:52:34'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    45,
    106,
    'total_amount',
    '12000',
    '18000',
    '2026-01-30 14:52:34',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 14:52:34',
    '2026-01-30 14:52:34'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    46,
    107,
    'rate',
    '12005',
    '12000',
    '2026-01-30 14:52:42',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 14:52:42',
    '2026-01-30 14:52:42'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    47,
    107,
    'total_amount',
    '12005',
    '12000',
    '2026-01-30 14:52:42',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 14:52:42',
    '2026-01-30 14:52:42'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    48,
    104,
    'loading_charge',
    '3',
    '',
    '2026-01-30 14:52:57',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 14:52:57',
    '2026-01-30 14:52:57'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    49,
    104,
    'total_amount',
    '12003',
    '12000',
    '2026-01-30 14:52:57',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 14:52:57',
    '2026-01-30 14:52:57'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    50,
    102,
    'cash_paid',
    '2996',
    '3000',
    '2026-01-30 14:53:10',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 14:53:10',
    '2026-01-30 14:53:10'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    51,
    97,
    'cash_paid',
    '2998',
    '3000',
    '2026-01-30 14:53:24',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 14:53:24',
    '2026-01-30 14:53:24'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    52,
    100,
    'cash_paid',
    '4999',
    '5000',
    '2026-01-30 14:53:35',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 14:53:35',
    '2026-01-30 14:53:35'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    53,
    99,
    'cash_paid',
    '2998',
    '3000',
    '2026-01-30 14:53:48',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 14:53:48',
    '2026-01-30 14:53:48'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    54,
    91,
    'rate',
    '10998',
    '11000',
    '2026-01-30 14:54:28',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 14:54:28',
    '2026-01-30 14:54:28'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    55,
    91,
    'cash_paid',
    '10998',
    '11000',
    '2026-01-30 14:54:28',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 14:54:28',
    '2026-01-30 14:54:28'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    56,
    91,
    'total_amount',
    '10998',
    '11000',
    '2026-01-30 14:54:28',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 14:54:28',
    '2026-01-30 14:54:28'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    57,
    72,
    'cash_paid',
    '',
    '12000',
    '2026-01-30 17:32:46',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 17:32:46',
    '2026-01-30 17:32:46'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    58,
    72,
    'payment_status',
    'unpaid',
    'paid',
    '2026-01-30 17:32:46',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 17:32:46',
    '2026-01-30 17:32:46'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    59,
    128,
    'cash_paid',
    '',
    '12000',
    '2026-01-30 17:32:55',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 17:32:55',
    '2026-01-30 17:32:55'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    60,
    128,
    'payment_status',
    'unpaid',
    'paid',
    '2026-01-30 17:32:55',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 17:32:55',
    '2026-01-30 17:32:55'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    61,
    114,
    'rate',
    '11999',
    '12000',
    '2026-01-30 17:44:07',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 17:44:07',
    '2026-01-30 17:44:07'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    62,
    114,
    'total_amount',
    '11999',
    '12000',
    '2026-01-30 17:44:07',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 17:44:07',
    '2026-01-30 17:44:07'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    63,
    134,
    'cash_paid',
    '',
    '18000',
    '2026-01-30 17:49:54',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 17:49:54',
    '2026-01-30 17:49:54'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    64,
    134,
    'payment_status',
    'unpaid',
    'paid',
    '2026-01-30 17:49:54',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 17:49:54',
    '2026-01-30 17:49:54'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    65,
    144,
    'rate',
    '11999',
    '12000',
    '2026-01-30 20:36:01',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 20:36:01',
    '2026-01-30 20:36:01'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    66,
    144,
    'total_amount',
    '11999',
    '12000',
    '2026-01-30 20:36:01',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 20:36:01',
    '2026-01-30 20:36:01'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    67,
    161,
    'cash_paid',
    '2998',
    '3000',
    '2026-01-30 22:44:15',
    'Faizan',
    'Receipt Edit',
    '2026-01-30 22:44:15',
    '2026-01-30 22:44:15'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    68,
    229,
    'rate',
    '12000',
    '11000',
    '2026-01-31 17:41:10',
    'Faizan',
    'Receipt Edit',
    '2026-01-31 17:41:10',
    '2026-01-31 17:41:10'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    69,
    229,
    'cash_paid',
    '12000',
    '11000',
    '2026-01-31 17:41:10',
    'Faizan',
    'Receipt Edit',
    '2026-01-31 17:41:10',
    '2026-01-31 17:41:10'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    70,
    229,
    'total_amount',
    '12000',
    '11000',
    '2026-01-31 17:41:10',
    'Faizan',
    'Receipt Edit',
    '2026-01-31 17:41:10',
    '2026-01-31 17:41:10'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    71,
    220,
    'cash_paid',
    '',
    '11000',
    '2026-01-31 19:16:36',
    'Faizan',
    'Receipt Edit',
    '2026-01-31 19:16:36',
    '2026-01-31 19:16:36'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    72,
    220,
    'payment_status',
    'unpaid',
    'paid',
    '2026-01-31 19:16:36',
    'Faizan',
    'Receipt Edit',
    '2026-01-31 19:16:36',
    '2026-01-31 19:16:36'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    73,
    191,
    'cash_paid',
    '5997',
    '6000',
    '2026-01-31 19:18:48',
    'Faizan',
    'Receipt Edit',
    '2026-01-31 19:18:48',
    '2026-01-31 19:18:48'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    74,
    208,
    'cash_paid',
    '3',
    '',
    '2026-01-31 19:19:41',
    'Faizan',
    'Receipt Edit',
    '2026-01-31 19:19:41',
    '2026-01-31 19:19:41'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    75,
    208,
    'payment_status',
    'partial',
    'unpaid',
    '2026-01-31 19:19:41',
    'Faizan',
    'Receipt Edit',
    '2026-01-31 19:19:41',
    '2026-01-31 19:19:41'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    76,
    252,
    'loading_charge',
    '150',
    '',
    '2026-01-31 20:05:29',
    'Faizan',
    'Receipt Edit',
    '2026-01-31 20:05:29',
    '2026-01-31 20:05:29'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    77,
    252,
    'total_amount',
    '10150',
    '10000',
    '2026-01-31 20:05:29',
    'Faizan',
    'Receipt Edit',
    '2026-01-31 20:05:29',
    '2026-01-31 20:05:29'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    78,
    204,
    'cash_paid',
    '',
    '17000',
    '2026-02-01 10:56:49',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 10:56:49',
    '2026-02-01 10:56:49'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    79,
    204,
    'payment_status',
    'unpaid',
    'paid',
    '2026-02-01 10:56:49',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 10:56:49',
    '2026-02-01 10:56:49'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    80,
    38,
    'cash_paid',
    '',
    '10000',
    '2026-02-01 10:57:07',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 10:57:07',
    '2026-02-01 10:57:07'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    81,
    38,
    'payment_status',
    'unpaid',
    'paid',
    '2026-02-01 10:57:07',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 10:57:07',
    '2026-02-01 10:57:07'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    82,
    259,
    'cash_paid',
    '11000',
    '',
    '2026-02-01 12:26:11',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 12:26:11',
    '2026-02-01 12:26:11'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    83,
    259,
    'payment_status',
    'paid',
    'unpaid',
    '2026-02-01 12:26:11',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 12:26:11',
    '2026-02-01 12:26:11'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    84,
    219,
    'cash_paid',
    '11000',
    '',
    '2026-02-01 12:26:18',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 12:26:18',
    '2026-02-01 12:26:18'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    85,
    219,
    'payment_status',
    'paid',
    'unpaid',
    '2026-02-01 12:26:18',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 12:26:18',
    '2026-02-01 12:26:18'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    86,
    124,
    'cash_paid',
    '11000',
    '',
    '2026-02-01 12:26:25',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 12:26:25',
    '2026-02-01 12:26:25'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    87,
    124,
    'payment_status',
    'paid',
    'unpaid',
    '2026-02-01 12:26:25',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 12:26:25',
    '2026-02-01 12:26:25'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    88,
    252,
    'cash_paid',
    '',
    '10000',
    '2026-02-01 12:44:21',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 12:44:21',
    '2026-02-01 12:44:21'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    89,
    252,
    'payment_status',
    'unpaid',
    'paid',
    '2026-02-01 12:44:21',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 12:44:21',
    '2026-02-01 12:44:21'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    90,
    172,
    'cash_paid',
    '',
    '10000',
    '2026-02-01 12:44:31',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 12:44:31',
    '2026-02-01 12:44:31'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    91,
    172,
    'payment_status',
    'unpaid',
    'paid',
    '2026-02-01 12:44:31',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 12:44:31',
    '2026-02-01 12:44:31'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    92,
    158,
    'cash_paid',
    '',
    '10000',
    '2026-02-01 12:44:52',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 12:44:52',
    '2026-02-01 12:44:52'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    93,
    158,
    'payment_status',
    'unpaid',
    'paid',
    '2026-02-01 12:44:52',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 12:44:52',
    '2026-02-01 12:44:52'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    94,
    23,
    'bulk_payment',
    '0 (Status: unpaid)',
    '10000 (Status: paid)',
    '2026-02-01 12:47:05',
    'Faizan',
    'Bulk Payment: payment jama',
    '2026-02-01 12:47:05',
    '2026-02-01 12:47:05'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    95,
    64,
    'bulk_payment',
    '0 (Status: unpaid)',
    '10000 (Status: paid)',
    '2026-02-01 12:47:05',
    'Faizan',
    'Bulk Payment: payment jama',
    '2026-02-01 12:47:05',
    '2026-02-01 12:47:05'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    96,
    108,
    'bulk_payment',
    '0 (Status: unpaid)',
    '10000 (Status: paid)',
    '2026-02-01 12:47:05',
    'Faizan',
    'Bulk Payment: payment jama',
    '2026-02-01 12:47:05',
    '2026-02-01 12:47:05'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    97,
    61,
    'cash_paid',
    '3000',
    '1000',
    '2026-02-01 13:16:39',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 13:16:39',
    '2026-02-01 13:16:39'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    98,
    297,
    'rate',
    '12000',
    '18000',
    '2026-02-01 20:04:32',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 20:04:32',
    '2026-02-01 20:04:32'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    99,
    297,
    'total_amount',
    '12000',
    '18000',
    '2026-02-01 20:04:32',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 20:04:32',
    '2026-02-01 20:04:32'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    100,
    356,
    'cash_paid',
    '2998',
    '3000',
    '2026-02-01 21:40:37',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 21:40:37',
    '2026-02-01 21:40:37'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    101,
    306,
    'rate',
    '20500',
    '22000',
    '2026-02-01 21:41:11',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 21:41:11',
    '2026-02-01 21:41:11'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    102,
    306,
    'cash_paid',
    '20500',
    '22000',
    '2026-02-01 21:41:11',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 21:41:11',
    '2026-02-01 21:41:11'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    103,
    306,
    'total_amount',
    '20500',
    '22000',
    '2026-02-01 21:41:11',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 21:41:11',
    '2026-02-01 21:41:11'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    104,
    309,
    'rate',
    '11997',
    '12000',
    '2026-02-01 21:41:36',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 21:41:36',
    '2026-02-01 21:41:36'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    105,
    309,
    'total_amount',
    '11997',
    '12000',
    '2026-02-01 21:41:36',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 21:41:36',
    '2026-02-01 21:41:36'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    106,
    344,
    'truck_owner',
    'Raju Thakre ',
    'PRASAD THAKRE',
    '2026-02-01 21:55:00',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 21:55:00',
    '2026-02-01 21:55:00'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    107,
    312,
    'truck_owner',
    'Raju Thakre ',
    'PRASAD THAKRE',
    '2026-02-01 21:55:07',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 21:55:07',
    '2026-02-01 21:55:07'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    108,
    247,
    'truck_owner',
    'Raju Thakre ',
    'PRASAD THAKRE',
    '2026-02-01 21:55:23',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 21:55:23',
    '2026-02-01 21:55:23'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    109,
    192,
    'truck_owner',
    'Raju Thakre ',
    'PRASAD THAKRE',
    '2026-02-01 21:56:00',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 21:56:00',
    '2026-02-01 21:56:00'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    110,
    281,
    'is_active',
    '1',
    '0',
    '2026-02-01 22:10:51',
    'Faizan',
    'Receipt Deleted',
    '2026-02-01 22:10:51',
    '2026-02-01 22:10:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    111,
    282,
    'rate',
    '12000',
    '18000',
    '2026-02-01 22:12:26',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 22:12:26',
    '2026-02-01 22:12:26'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    112,
    282,
    'total_amount',
    '12000',
    '18000',
    '2026-02-01 22:12:26',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 22:12:26',
    '2026-02-01 22:12:26'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    113,
    308,
    'is_active',
    '1',
    '0',
    '2026-02-01 22:17:23',
    'Faizan',
    'Receipt Deleted',
    '2026-02-01 22:17:23',
    '2026-02-01 22:17:23'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    114,
    314,
    'rate',
    '10000',
    '11000',
    '2026-02-01 22:19:03',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 22:19:03',
    '2026-02-01 22:19:03'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    115,
    314,
    'cash_paid',
    '10000',
    '11000',
    '2026-02-01 22:19:03',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 22:19:03',
    '2026-02-01 22:19:03'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    116,
    314,
    'total_amount',
    '10000',
    '11000',
    '2026-02-01 22:19:03',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 22:19:03',
    '2026-02-01 22:19:03'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    117,
    315,
    'rate',
    '10000',
    '11000',
    '2026-02-01 22:19:23',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 22:19:23',
    '2026-02-01 22:19:23'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    118,
    315,
    'cash_paid',
    '10000',
    '11000',
    '2026-02-01 22:19:23',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 22:19:23',
    '2026-02-01 22:19:23'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    119,
    315,
    'total_amount',
    '10000',
    '11000',
    '2026-02-01 22:19:23',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 22:19:23',
    '2026-02-01 22:19:23'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    120,
    327,
    'cash_paid',
    '2000',
    '10000',
    '2026-02-01 22:21:21',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 22:21:21',
    '2026-02-01 22:21:21'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    121,
    339,
    'rate',
    '12000',
    '18000',
    '2026-02-01 22:28:07',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 22:28:07',
    '2026-02-01 22:28:07'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    122,
    339,
    'total_amount',
    '12000',
    '18000',
    '2026-02-01 22:28:07',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 22:28:07',
    '2026-02-01 22:28:07'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    123,
    345,
    'truck_owner',
    'NARENDRA PATIL',
    'ROMU FUTANE',
    '2026-02-01 22:33:01',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 22:33:01',
    '2026-02-01 22:33:01'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    124,
    345,
    'vehicle_number',
    'MH29BE4276',
    'MH 32 AJ 4276',
    '2026-02-01 22:33:01',
    'Faizan',
    'Receipt Edit',
    '2026-02-01 22:33:01',
    '2026-02-01 22:33:01'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    125,
    351,
    'is_active',
    '1',
    '0',
    '2026-02-02 12:57:21',
    'Faizan',
    'Receipt Deleted',
    '2026-02-02 12:57:21',
    '2026-02-02 12:57:21'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    126,
    337,
    'is_active',
    '1',
    '0',
    '2026-02-02 12:57:40',
    'Faizan',
    'Receipt Deleted',
    '2026-02-02 12:57:40',
    '2026-02-02 12:57:40'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    127,
    335,
    'is_active',
    '1',
    '0',
    '2026-02-02 12:58:03',
    'Faizan',
    'Receipt Deleted',
    '2026-02-02 12:58:03',
    '2026-02-02 12:58:03'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    128,
    334,
    'rate',
    '11000',
    '12000',
    '2026-02-02 13:33:27',
    'Faizan',
    'Receipt Edit',
    '2026-02-02 13:33:27',
    '2026-02-02 13:33:27'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    129,
    334,
    'cash_paid',
    '1000',
    '11000',
    '2026-02-02 13:33:27',
    'Faizan',
    'Receipt Edit',
    '2026-02-02 13:33:27',
    '2026-02-02 13:33:27'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    130,
    334,
    'total_amount',
    '11000',
    '12000',
    '2026-02-02 13:33:27',
    'Faizan',
    'Receipt Edit',
    '2026-02-02 13:33:27',
    '2026-02-02 13:33:27'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    131,
    325,
    'rate',
    '12000',
    '10000',
    '2026-02-02 15:06:42',
    'Faizan',
    'Receipt Edit',
    '2026-02-02 15:06:42',
    '2026-02-02 15:06:42'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    132,
    325,
    'cash_paid',
    '',
    '10000',
    '2026-02-02 15:06:42',
    'Faizan',
    'Receipt Edit',
    '2026-02-02 15:06:42',
    '2026-02-02 15:06:42'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    133,
    325,
    'total_amount',
    '12000',
    '10000',
    '2026-02-02 15:06:42',
    'Faizan',
    'Receipt Edit',
    '2026-02-02 15:06:42',
    '2026-02-02 15:06:42'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    134,
    325,
    'payment_status',
    'unpaid',
    'paid',
    '2026-02-02 15:06:42',
    'Faizan',
    'Receipt Edit',
    '2026-02-02 15:06:42',
    '2026-02-02 15:06:42'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    140,
    26,
    'bulk_payment',
    '5000 (Status: partial)',
    '12000 (Status: paid)',
    '2026-02-03 11:44:47',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:44:47',
    '2026-02-03 11:44:47'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    141,
    68,
    'bulk_payment',
    '5000 (Status: partial)',
    '12000 (Status: paid)',
    '2026-02-03 11:44:47',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:44:47',
    '2026-02-03 11:44:47'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    142,
    100,
    'bulk_payment',
    '5000 (Status: partial)',
    '12000 (Status: paid)',
    '2026-02-03 11:44:47',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:44:47',
    '2026-02-03 11:44:47'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    143,
    227,
    'bulk_payment',
    '5000 (Status: partial)',
    '12000 (Status: paid)',
    '2026-02-03 11:44:47',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:44:47',
    '2026-02-03 11:44:47'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    144,
    79,
    'bulk_payment',
    '0 (Status: unpaid)',
    '17000 (Status: paid)',
    '2026-02-03 11:45:07',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:07',
    '2026-02-03 11:45:07'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    145,
    140,
    'bulk_payment',
    '0 (Status: unpaid)',
    '17000 (Status: paid)',
    '2026-02-03 11:45:07',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:07',
    '2026-02-03 11:45:07'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    146,
    141,
    'bulk_payment',
    '0 (Status: unpaid)',
    '11000 (Status: paid)',
    '2026-02-03 11:45:07',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:07',
    '2026-02-03 11:45:07'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    147,
    142,
    'bulk_payment',
    '0 (Status: unpaid)',
    '22000 (Status: paid)',
    '2026-02-03 11:45:07',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:07',
    '2026-02-03 11:45:07'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    148,
    152,
    'bulk_payment',
    '0 (Status: unpaid)',
    '11000 (Status: paid)',
    '2026-02-03 11:45:07',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:07',
    '2026-02-03 11:45:07'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    149,
    153,
    'bulk_payment',
    '0 (Status: unpaid)',
    '22000 (Status: paid)',
    '2026-02-03 11:45:07',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:07',
    '2026-02-03 11:45:07'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    150,
    199,
    'bulk_payment',
    '0 (Status: unpaid)',
    '17000 (Status: paid)',
    '2026-02-03 11:45:07',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:07',
    '2026-02-03 11:45:07'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    151,
    221,
    'bulk_payment',
    '0 (Status: unpaid)',
    '22000 (Status: paid)',
    '2026-02-03 11:45:07',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:07',
    '2026-02-03 11:45:07'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    152,
    236,
    'bulk_payment',
    '0 (Status: unpaid)',
    '17000 (Status: paid)',
    '2026-02-03 11:45:07',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:07',
    '2026-02-03 11:45:07'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    153,
    237,
    'bulk_payment',
    '0 (Status: unpaid)',
    '11000 (Status: paid)',
    '2026-02-03 11:45:08',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:08',
    '2026-02-03 11:45:08'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    154,
    241,
    'bulk_payment',
    '0 (Status: unpaid)',
    '11000 (Status: paid)',
    '2026-02-03 11:45:08',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:08',
    '2026-02-03 11:45:08'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    155,
    242,
    'bulk_payment',
    '0 (Status: unpaid)',
    '22000 (Status: paid)',
    '2026-02-03 11:45:08',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:08',
    '2026-02-03 11:45:08'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    156,
    244,
    'bulk_payment',
    '0 (Status: unpaid)',
    '17000 (Status: paid)',
    '2026-02-03 11:45:08',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:08',
    '2026-02-03 11:45:08'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    157,
    316,
    'bulk_payment',
    '0 (Status: unpaid)',
    '10000 (Status: paid)',
    '2026-02-03 11:45:08',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:08',
    '2026-02-03 11:45:08'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    158,
    317,
    'bulk_payment',
    '0 (Status: unpaid)',
    '17000 (Status: paid)',
    '2026-02-03 11:45:08',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:08',
    '2026-02-03 11:45:08'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    159,
    319,
    'bulk_payment',
    '0 (Status: unpaid)',
    '22000 (Status: paid)',
    '2026-02-03 11:45:08',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:08',
    '2026-02-03 11:45:08'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    160,
    363,
    'bulk_payment',
    '0 (Status: unpaid)',
    '22000 (Status: paid)',
    '2026-02-03 11:45:08',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:08',
    '2026-02-03 11:45:08'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    161,
    365,
    'bulk_payment',
    '0 (Status: unpaid)',
    '10000 (Status: paid)',
    '2026-02-03 11:45:08',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:08',
    '2026-02-03 11:45:08'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    162,
    370,
    'bulk_payment',
    '0 (Status: unpaid)',
    '17000 (Status: paid)',
    '2026-02-03 11:45:08',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:08',
    '2026-02-03 11:45:08'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    163,
    3,
    'bulk_payment',
    '0 (Status: unpaid)',
    '12000 (Status: paid)',
    '2026-02-03 11:45:29',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    164,
    5,
    'bulk_payment',
    '0 (Status: unpaid)',
    '18000 (Status: paid)',
    '2026-02-03 11:45:29',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    165,
    77,
    'bulk_payment',
    '0 (Status: unpaid)',
    '12000 (Status: paid)',
    '2026-02-03 11:45:29',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    166,
    125,
    'bulk_payment',
    '0 (Status: unpaid)',
    '12000 (Status: paid)',
    '2026-02-03 11:45:29',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    167,
    154,
    'bulk_payment',
    '0 (Status: unpaid)',
    '12000 (Status: paid)',
    '2026-02-03 11:45:29',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    168,
    185,
    'bulk_payment',
    '0 (Status: unpaid)',
    '12000 (Status: paid)',
    '2026-02-03 11:45:29',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    169,
    189,
    'bulk_payment',
    '0 (Status: unpaid)',
    '18000 (Status: paid)',
    '2026-02-03 11:45:29',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    170,
    231,
    'bulk_payment',
    '0 (Status: unpaid)',
    '12000 (Status: paid)',
    '2026-02-03 11:45:29',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    171,
    232,
    'bulk_payment',
    '0 (Status: unpaid)',
    '18000 (Status: paid)',
    '2026-02-03 11:45:29',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    172,
    233,
    'bulk_payment',
    '0 (Status: unpaid)',
    '12000 (Status: paid)',
    '2026-02-03 11:45:29',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    173,
    278,
    'bulk_payment',
    '0 (Status: unpaid)',
    '12000 (Status: paid)',
    '2026-02-03 11:45:29',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    174,
    305,
    'bulk_payment',
    '0 (Status: unpaid)',
    '12000 (Status: paid)',
    '2026-02-03 11:45:29',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    175,
    309,
    'bulk_payment',
    '0 (Status: unpaid)',
    '12000 (Status: paid)',
    '2026-02-03 11:45:29',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    176,
    310,
    'bulk_payment',
    '0 (Status: unpaid)',
    '18000 (Status: paid)',
    '2026-02-03 11:45:29',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    177,
    336,
    'bulk_payment',
    '0 (Status: unpaid)',
    '12000 (Status: paid)',
    '2026-02-03 11:45:29',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    178,
    338,
    'bulk_payment',
    '0 (Status: unpaid)',
    '12000 (Status: paid)',
    '2026-02-03 11:45:29',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    179,
    339,
    'bulk_payment',
    '0 (Status: unpaid)',
    '18000 (Status: paid)',
    '2026-02-03 11:45:29',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    180,
    366,
    'bulk_payment',
    '0 (Status: unpaid)',
    '12000 (Status: paid)',
    '2026-02-03 11:45:29',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    181,
    367,
    'bulk_payment',
    '0 (Status: unpaid)',
    '18000 (Status: paid)',
    '2026-02-03 11:45:29',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    182,
    368,
    'bulk_payment',
    '0 (Status: unpaid)',
    '12000 (Status: paid)',
    '2026-02-03 11:45:29',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:45:29',
    '2026-02-03 11:45:29'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    183,
    32,
    'bulk_payment',
    '6000 (Status: partial)',
    '18000 (Status: paid)',
    '2026-02-03 11:46:20',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:46:20',
    '2026-02-03 11:46:20'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    184,
    39,
    'bulk_payment',
    '3000 (Status: partial)',
    '11000 (Status: paid)',
    '2026-02-03 11:46:20',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:46:20',
    '2026-02-03 11:46:20'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    185,
    70,
    'bulk_payment',
    '6000 (Status: partial)',
    '18000 (Status: paid)',
    '2026-02-03 11:46:20',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:46:20',
    '2026-02-03 11:46:20'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    186,
    87,
    'bulk_payment',
    '6000 (Status: partial)',
    '18000 (Status: paid)',
    '2026-02-03 11:46:20',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:46:20',
    '2026-02-03 11:46:20'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    187,
    117,
    'bulk_payment',
    '3000 (Status: partial)',
    '11000 (Status: paid)',
    '2026-02-03 11:46:20',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:46:20',
    '2026-02-03 11:46:20'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    188,
    151,
    'bulk_payment',
    '6000 (Status: partial)',
    '18000 (Status: paid)',
    '2026-02-03 11:46:20',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:46:20',
    '2026-02-03 11:46:20'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    189,
    176,
    'bulk_payment',
    '6000 (Status: partial)',
    '18000 (Status: paid)',
    '2026-02-03 11:46:20',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:46:20',
    '2026-02-03 11:46:20'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    190,
    203,
    'bulk_payment',
    '3000 (Status: partial)',
    '12000 (Status: paid)',
    '2026-02-03 11:46:20',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:46:20',
    '2026-02-03 11:46:20'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    191,
    269,
    'bulk_payment',
    '3000 (Status: partial)',
    '11000 (Status: paid)',
    '2026-02-03 11:46:20',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:46:20',
    '2026-02-03 11:46:20'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    192,
    282,
    'bulk_payment',
    '6000 (Status: partial)',
    '18000 (Status: paid)',
    '2026-02-03 11:46:20',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:46:20',
    '2026-02-03 11:46:20'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    193,
    286,
    'bulk_payment',
    '3000 (Status: partial)',
    '12000 (Status: paid)',
    '2026-02-03 11:46:20',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:46:20',
    '2026-02-03 11:46:20'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    194,
    356,
    'bulk_payment',
    '3000 (Status: partial)',
    '11000 (Status: paid)',
    '2026-02-03 11:46:20',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:46:20',
    '2026-02-03 11:46:20'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    195,
    40,
    'bulk_payment',
    '3000 (Status: partial)',
    '10000 (Status: paid)',
    '2026-02-03 11:46:41',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:46:41',
    '2026-02-03 11:46:41'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    196,
    97,
    'bulk_payment',
    '3000 (Status: partial)',
    '10000 (Status: paid)',
    '2026-02-03 11:46:41',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:46:41',
    '2026-02-03 11:46:41'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    197,
    148,
    'bulk_payment',
    '3000 (Status: partial)',
    '10000 (Status: paid)',
    '2026-02-03 11:46:41',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:46:41',
    '2026-02-03 11:46:41'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    198,
    174,
    'bulk_payment',
    '3000 (Status: partial)',
    '10000 (Status: paid)',
    '2026-02-03 11:46:41',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:46:41',
    '2026-02-03 11:46:41'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    199,
    257,
    'bulk_payment',
    '3000 (Status: partial)',
    '10000 (Status: paid)',
    '2026-02-03 11:46:41',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 11:46:41',
    '2026-02-03 11:46:41'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    200,
    368,
    'cash_paid',
    '12000',
    '',
    '2026-02-03 11:57:51',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 11:57:51',
    '2026-02-03 11:57:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    201,
    368,
    'payment_status',
    'paid',
    'unpaid',
    '2026-02-03 11:57:51',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 11:57:51',
    '2026-02-03 11:57:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    202,
    368,
    'cash_paid',
    '',
    '12000',
    '2026-02-03 12:48:44',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 12:48:44',
    '2026-02-03 12:48:44'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    203,
    368,
    'payment_status',
    'unpaid',
    'paid',
    '2026-02-03 12:48:44',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 12:48:44',
    '2026-02-03 12:48:44'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    204,
    368,
    'cash_paid',
    '12000',
    '',
    '2026-02-03 12:49:05',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 12:49:05',
    '2026-02-03 12:49:05'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    205,
    368,
    'payment_status',
    'paid',
    'unpaid',
    '2026-02-03 12:49:05',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 12:49:05',
    '2026-02-03 12:49:05'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    206,
    368,
    'bulk_payment',
    '0 (Status: unpaid)',
    '12000 (Status: paid)',
    '2026-02-03 12:49:13',
    'Faizan',
    'Bulk Payment: 6 tyre 9000,10 Tyre 16000 ke hisab se paid 1/02/ 2026 tak nil 1 gadi ka check karna baki hai  Test',
    '2026-02-03 12:49:13',
    '2026-02-03 12:49:13'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    207,
    368,
    'cash_paid',
    '12000',
    '',
    '2026-02-03 12:49:28',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 12:49:28',
    '2026-02-03 12:49:28'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    208,
    368,
    'payment_status',
    'paid',
    'unpaid',
    '2026-02-03 12:49:28',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 12:49:28',
    '2026-02-03 12:49:28'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    209,
    389,
    'rate',
    '16998',
    '17000',
    '2026-02-03 15:05:07',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 15:05:07',
    '2026-02-03 15:05:07'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    210,
    389,
    'total_amount',
    '16998',
    '17000',
    '2026-02-03 15:05:07',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 15:05:07',
    '2026-02-03 15:05:07'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    211,
    411,
    'rate',
    '11998',
    '12000',
    '2026-02-03 15:52:41',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 15:52:41',
    '2026-02-03 15:52:41'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    212,
    411,
    'total_amount',
    '11998',
    '12000',
    '2026-02-03 15:52:41',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 15:52:41',
    '2026-02-03 15:52:41'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    213,
    381,
    'cash_paid',
    '',
    '10000',
    '2026-02-03 16:39:29',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 16:39:29',
    '2026-02-03 16:39:29'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    214,
    381,
    'payment_status',
    'unpaid',
    'paid',
    '2026-02-03 16:39:29',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 16:39:29',
    '2026-02-03 16:39:29'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    215,
    389,
    'cash_paid',
    '',
    '17000',
    '2026-02-03 16:40:13',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 16:40:13',
    '2026-02-03 16:40:13'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    216,
    389,
    'payment_status',
    'unpaid',
    'paid',
    '2026-02-03 16:40:13',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 16:40:13',
    '2026-02-03 16:40:13'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    217,
    393,
    'cash_paid',
    '',
    '10000',
    '2026-02-03 16:40:53',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 16:40:53',
    '2026-02-03 16:40:53'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    218,
    393,
    'payment_status',
    'unpaid',
    'paid',
    '2026-02-03 16:40:53',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 16:40:53',
    '2026-02-03 16:40:53'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    219,
    405,
    'rate',
    '12000',
    '18000',
    '2026-02-03 16:42:10',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 16:42:10',
    '2026-02-03 16:42:10'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    220,
    405,
    'total_amount',
    '12000',
    '18000',
    '2026-02-03 16:42:10',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 16:42:10',
    '2026-02-03 16:42:10'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    221,
    28,
    'bulk_payment',
    '3000 (Status: partial)',
    '11000 (Status: paid)',
    '2026-02-03 17:41:51',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    222,
    29,
    'bulk_payment',
    '3000 (Status: partial)',
    '11000 (Status: paid)',
    '2026-02-03 17:41:51',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    223,
    31,
    'bulk_payment',
    '3000 (Status: partial)',
    '11000 (Status: paid)',
    '2026-02-03 17:41:51',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    224,
    36,
    'bulk_payment',
    '0 (Status: unpaid)',
    '11000 (Status: paid)',
    '2026-02-03 17:41:51',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    225,
    37,
    'bulk_payment',
    '3000 (Status: partial)',
    '11000 (Status: paid)',
    '2026-02-03 17:41:51',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    226,
    73,
    'bulk_payment',
    '0 (Status: unpaid)',
    '11000 (Status: paid)',
    '2026-02-03 17:41:51',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    227,
    85,
    'bulk_payment',
    '0 (Status: unpaid)',
    '11000 (Status: paid)',
    '2026-02-03 17:41:51',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    228,
    98,
    'bulk_payment',
    '3000 (Status: partial)',
    '11000 (Status: paid)',
    '2026-02-03 17:41:51',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    229,
    99,
    'bulk_payment',
    '3000 (Status: partial)',
    '11000 (Status: paid)',
    '2026-02-03 17:41:51',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    230,
    103,
    'bulk_payment',
    '0 (Status: unpaid)',
    '11000 (Status: paid)',
    '2026-02-03 17:41:51',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    231,
    143,
    'bulk_payment',
    '0 (Status: unpaid)',
    '11000 (Status: paid)',
    '2026-02-03 17:41:51',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    232,
    146,
    'bulk_payment',
    '3000 (Status: partial)',
    '11000 (Status: paid)',
    '2026-02-03 17:41:51',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    233,
    161,
    'bulk_payment',
    '3000 (Status: partial)',
    '11000 (Status: paid)',
    '2026-02-03 17:41:51',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    234,
    163,
    'bulk_payment',
    '3000 (Status: partial)',
    '11000 (Status: paid)',
    '2026-02-03 17:41:51',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    235,
    165,
    'bulk_payment',
    '0 (Status: unpaid)',
    '11000 (Status: paid)',
    '2026-02-03 17:41:51',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    236,
    170,
    'bulk_payment',
    '0 (Status: unpaid)',
    '11000 (Status: paid)',
    '2026-02-03 17:41:51',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    237,
    171,
    'bulk_payment',
    '3000 (Status: partial)',
    '11000 (Status: paid)',
    '2026-02-03 17:41:51',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    238,
    177,
    'bulk_payment',
    '0 (Status: unpaid)',
    '11000 (Status: paid)',
    '2026-02-03 17:41:51',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    239,
    211,
    'bulk_payment',
    '3000 (Status: partial)',
    '11000 (Status: paid)',
    '2026-02-03 17:41:51',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    240,
    212,
    'bulk_payment',
    '0 (Status: unpaid)',
    '11000 (Status: paid)',
    '2026-02-03 17:41:51',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    241,
    258,
    'bulk_payment',
    '3000 (Status: partial)',
    '11000 (Status: paid)',
    '2026-02-03 17:41:51',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    242,
    265,
    'bulk_payment',
    '3000 (Status: partial)',
    '8000 (Status: partial)',
    '2026-02-03 17:41:51',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 17:41:51',
    '2026-02-03 17:41:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    243,
    258,
    'cash_paid',
    '11000',
    '',
    '2026-02-03 17:42:44',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:42:44',
    '2026-02-03 17:42:44'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    244,
    258,
    'payment_status',
    'paid',
    'unpaid',
    '2026-02-03 17:42:44',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:42:44',
    '2026-02-03 17:42:44'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    245,
    212,
    'cash_paid',
    '11000',
    '',
    '2026-02-03 17:42:55',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:42:55',
    '2026-02-03 17:42:55'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    246,
    212,
    'payment_status',
    'paid',
    'unpaid',
    '2026-02-03 17:42:55',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:42:55',
    '2026-02-03 17:42:55'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    247,
    211,
    'cash_paid',
    '11000',
    '',
    '2026-02-03 17:43:07',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:43:07',
    '2026-02-03 17:43:07'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    248,
    211,
    'payment_status',
    'paid',
    'unpaid',
    '2026-02-03 17:43:07',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:43:07',
    '2026-02-03 17:43:07'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    249,
    177,
    'cash_paid',
    '11000',
    '',
    '2026-02-03 17:43:16',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:43:16',
    '2026-02-03 17:43:16'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    250,
    177,
    'payment_status',
    'paid',
    'unpaid',
    '2026-02-03 17:43:16',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:43:16',
    '2026-02-03 17:43:16'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    251,
    171,
    'cash_paid',
    '11000',
    '',
    '2026-02-03 17:43:24',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:43:24',
    '2026-02-03 17:43:24'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    252,
    171,
    'payment_status',
    'paid',
    'unpaid',
    '2026-02-03 17:43:24',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:43:24',
    '2026-02-03 17:43:24'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    253,
    171,
    'cash_paid',
    '',
    '4000',
    '2026-02-03 17:43:50',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:43:50',
    '2026-02-03 17:43:50'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    254,
    171,
    'payment_status',
    'unpaid',
    'partial',
    '2026-02-03 17:43:50',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:43:50',
    '2026-02-03 17:43:50'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    255,
    171,
    'cash_paid',
    '4000',
    '',
    '2026-02-03 17:45:33',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:45:33',
    '2026-02-03 17:45:33'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    256,
    171,
    'payment_status',
    'partial',
    'unpaid',
    '2026-02-03 17:45:33',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:45:33',
    '2026-02-03 17:45:33'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    257,
    170,
    'cash_paid',
    '11000',
    '',
    '2026-02-03 17:45:42',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:45:42',
    '2026-02-03 17:45:42'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    258,
    170,
    'payment_status',
    'paid',
    'unpaid',
    '2026-02-03 17:45:42',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:45:42',
    '2026-02-03 17:45:42'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    259,
    165,
    'cash_paid',
    '11000',
    '',
    '2026-02-03 17:45:51',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:45:51',
    '2026-02-03 17:45:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    260,
    165,
    'payment_status',
    'paid',
    'unpaid',
    '2026-02-03 17:45:51',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:45:51',
    '2026-02-03 17:45:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    261,
    163,
    'cash_paid',
    '11000',
    '',
    '2026-02-03 17:45:59',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:45:59',
    '2026-02-03 17:45:59'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    262,
    163,
    'payment_status',
    'paid',
    'unpaid',
    '2026-02-03 17:45:59',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:45:59',
    '2026-02-03 17:45:59'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    263,
    161,
    'cash_paid',
    '11000',
    '',
    '2026-02-03 17:46:09',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:46:09',
    '2026-02-03 17:46:09'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    264,
    161,
    'payment_status',
    'paid',
    'unpaid',
    '2026-02-03 17:46:09',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:46:09',
    '2026-02-03 17:46:09'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    265,
    161,
    'cash_paid',
    '',
    '2000',
    '2026-02-03 17:46:21',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:46:21',
    '2026-02-03 17:46:21'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    266,
    161,
    'payment_status',
    'unpaid',
    'partial',
    '2026-02-03 17:46:21',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:46:21',
    '2026-02-03 17:46:21'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    267,
    10,
    'bulk_payment',
    '0 (Status: unpaid)',
    '11000 (Status: paid)',
    '2026-02-03 17:49:35',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 17:49:35',
    '2026-02-03 17:49:35'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    268,
    11,
    'bulk_payment',
    '0 (Status: unpaid)',
    '11000 (Status: paid)',
    '2026-02-03 17:49:35',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 17:49:35',
    '2026-02-03 17:49:35'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    269,
    214,
    'bulk_payment',
    '0 (Status: unpaid)',
    '11000 (Status: paid)',
    '2026-02-03 17:49:36',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 17:49:36',
    '2026-02-03 17:49:36'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    270,
    235,
    'bulk_payment',
    '0 (Status: unpaid)',
    '3000 (Status: partial)',
    '2026-02-03 17:49:36',
    'Faizan',
    'Bulk Payment: No notes',
    '2026-02-03 17:49:36',
    '2026-02-03 17:49:36'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    271,
    235,
    'cash_paid',
    '3000',
    '11000',
    '2026-02-03 17:50:06',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:50:06',
    '2026-02-03 17:50:06'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    272,
    235,
    'payment_status',
    'partial',
    'paid',
    '2026-02-03 17:50:06',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:50:06',
    '2026-02-03 17:50:06'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    273,
    263,
    'cash_paid',
    '',
    '11000',
    '2026-02-03 17:50:14',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:50:14',
    '2026-02-03 17:50:14'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    274,
    263,
    'payment_status',
    'unpaid',
    'paid',
    '2026-02-03 17:50:14',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:50:14',
    '2026-02-03 17:50:14'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    275,
    271,
    'cash_paid',
    '',
    '11000',
    '2026-02-03 17:50:21',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:50:21',
    '2026-02-03 17:50:21'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    276,
    271,
    'payment_status',
    'unpaid',
    'paid',
    '2026-02-03 17:50:21',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:50:21',
    '2026-02-03 17:50:21'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    277,
    322,
    'cash_paid',
    '',
    '11000',
    '2026-02-03 17:50:29',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:50:29',
    '2026-02-03 17:50:29'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    278,
    322,
    'payment_status',
    'unpaid',
    'paid',
    '2026-02-03 17:50:29',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:50:29',
    '2026-02-03 17:50:29'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    279,
    322,
    'cash_paid',
    '11000',
    '8000',
    '2026-02-03 17:50:48',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:50:48',
    '2026-02-03 17:50:48'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    280,
    322,
    'payment_status',
    'paid',
    'partial',
    '2026-02-03 17:50:48',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:50:48',
    '2026-02-03 17:50:48'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    281,
    197,
    'rate',
    '11000',
    '10000',
    '2026-02-03 17:52:29',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:52:29',
    '2026-02-03 17:52:29'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    282,
    197,
    'total_amount',
    '11000',
    '10000',
    '2026-02-03 17:52:29',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 17:52:29',
    '2026-02-03 17:52:29'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    283,
    422,
    'rate',
    '21999',
    '22000',
    '2026-02-03 20:06:22',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 20:06:22',
    '2026-02-03 20:06:22'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    284,
    422,
    'total_amount',
    '21999',
    '22000',
    '2026-02-03 20:06:22',
    'Faizan',
    'Receipt Edit',
    '2026-02-03 20:06:22',
    '2026-02-03 20:06:22'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    285,
    516,
    'rate',
    '12000',
    '8000',
    '2026-02-04 21:11:22',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:11:22',
    '2026-02-04 21:11:22'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    286,
    516,
    'total_amount',
    '12000',
    '8000',
    '2026-02-04 21:11:22',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:11:22',
    '2026-02-04 21:11:22'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    287,
    511,
    'cash_paid',
    '5999',
    '6000',
    '2026-02-04 21:11:46',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:11:46',
    '2026-02-04 21:11:46'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    288,
    287,
    'cash_paid',
    '',
    '10000',
    '2026-02-04 21:13:35',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:13:35',
    '2026-02-04 21:13:35'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    289,
    287,
    'payment_status',
    'unpaid',
    'paid',
    '2026-02-04 21:13:35',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:13:35',
    '2026-02-04 21:13:35'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    290,
    357,
    'cash_paid',
    '',
    '10000',
    '2026-02-04 21:13:38',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:13:38',
    '2026-02-04 21:13:38'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    291,
    357,
    'payment_status',
    'unpaid',
    'paid',
    '2026-02-04 21:13:38',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:13:38',
    '2026-02-04 21:13:38'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    292,
    415,
    'bulk_payment',
    '0 (Status: unpaid)',
    '10000 (Status: paid)',
    '2026-02-04 21:19:11',
    'Faizan',
    'Bulk Payment: Cash Wasim Bhai 2.4 Min Pe',
    '2026-02-04 21:19:11',
    '2026-02-04 21:19:11'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    293,
    460,
    'bulk_payment',
    '0 (Status: unpaid)',
    '10000 (Status: paid)',
    '2026-02-04 21:19:11',
    'Faizan',
    'Bulk Payment: Cash Wasim Bhai 2.4 Min Pe',
    '2026-02-04 21:19:11',
    '2026-02-04 21:19:11'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    294,
    500,
    'bulk_payment',
    '0 (Status: unpaid)',
    '10000 (Status: paid)',
    '2026-02-04 21:19:11',
    'Faizan',
    'Bulk Payment: Cash Wasim Bhai 2.4 Min Pe',
    '2026-02-04 21:19:11',
    '2026-02-04 21:19:11'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    295,
    264,
    'cash_paid',
    '',
    '10000',
    '2026-02-04 21:22:47',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:22:47',
    '2026-02-04 21:22:47'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    296,
    264,
    'payment_status',
    'unpaid',
    'paid',
    '2026-02-04 21:22:47',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:22:47',
    '2026-02-04 21:22:47'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    297,
    159,
    'cash_paid',
    '',
    '11000',
    '2026-02-04 21:22:51',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:22:51',
    '2026-02-04 21:22:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    298,
    159,
    'payment_status',
    'unpaid',
    'paid',
    '2026-02-04 21:22:51',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:22:51',
    '2026-02-04 21:22:51'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    299,
    498,
    'rate',
    '11000',
    '9000',
    '2026-02-04 21:37:07',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:37:07',
    '2026-02-04 21:37:07'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    300,
    498,
    'total_amount',
    '11000',
    '9000',
    '2026-02-04 21:37:07',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:37:07',
    '2026-02-04 21:37:07'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    301,
    497,
    'rate',
    '11999',
    '10000',
    '2026-02-04 21:37:30',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:37:30',
    '2026-02-04 21:37:30'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    302,
    497,
    'total_amount',
    '11999',
    '10000',
    '2026-02-04 21:37:30',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:37:30',
    '2026-02-04 21:37:30'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    303,
    495,
    'rate',
    '11997',
    '12000',
    '2026-02-04 21:37:54',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:37:54',
    '2026-02-04 21:37:54'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    304,
    495,
    'total_amount',
    '11997',
    '12000',
    '2026-02-04 21:37:54',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:37:54',
    '2026-02-04 21:37:54'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    305,
    488,
    'rate',
    '12000',
    '10000',
    '2026-02-04 21:38:33',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:38:33',
    '2026-02-04 21:38:33'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    306,
    488,
    'total_amount',
    '12000',
    '10000',
    '2026-02-04 21:38:33',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:38:33',
    '2026-02-04 21:38:33'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    307,
    485,
    'rate',
    '12000',
    '11000',
    '2026-02-04 21:39:08',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:39:08',
    '2026-02-04 21:39:08'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    308,
    485,
    'total_amount',
    '12000',
    '11000',
    '2026-02-04 21:39:08',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:39:08',
    '2026-02-04 21:39:08'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    309,
    470,
    'rate',
    '12000',
    '4000',
    '2026-02-04 21:40:19',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:40:19',
    '2026-02-04 21:40:19'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    310,
    470,
    'total_amount',
    '12000',
    '4000',
    '2026-02-04 21:40:19',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:40:19',
    '2026-02-04 21:40:19'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    311,
    469,
    'rate',
    '12000',
    '7000',
    '2026-02-04 21:40:46',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:40:46',
    '2026-02-04 21:40:46'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    312,
    469,
    'total_amount',
    '12000',
    '7000',
    '2026-02-04 21:40:46',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:40:46',
    '2026-02-04 21:40:46'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    313,
    467,
    'rate',
    '18000',
    '16000',
    '2026-02-04 21:41:20',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:41:20',
    '2026-02-04 21:41:20'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    314,
    467,
    'total_amount',
    '18000',
    '16000',
    '2026-02-04 21:41:20',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:41:20',
    '2026-02-04 21:41:20'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    315,
    466,
    'rate',
    '11000',
    '9000',
    '2026-02-04 21:41:35',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:41:35',
    '2026-02-04 21:41:35'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    316,
    466,
    'total_amount',
    '11000',
    '9000',
    '2026-02-04 21:41:35',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:41:35',
    '2026-02-04 21:41:35'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    317,
    449,
    'rate',
    '12000',
    '10000',
    '2026-02-04 21:42:40',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:42:40',
    '2026-02-04 21:42:40'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    318,
    449,
    'total_amount',
    '12000',
    '10000',
    '2026-02-04 21:42:40',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:42:40',
    '2026-02-04 21:42:40'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    319,
    456,
    'rate',
    '11000',
    '18000',
    '2026-02-04 21:44:17',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:44:17',
    '2026-02-04 21:44:17'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    320,
    456,
    'cash_paid',
    '',
    '6000',
    '2026-02-04 21:44:17',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:44:17',
    '2026-02-04 21:44:17'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    321,
    456,
    'total_amount',
    '11000',
    '18000',
    '2026-02-04 21:44:17',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:44:17',
    '2026-02-04 21:44:17'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    322,
    456,
    'payment_status',
    'unpaid',
    'partial',
    '2026-02-04 21:44:17',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:44:17',
    '2026-02-04 21:44:17'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    323,
    459,
    'rate',
    '10000',
    '9000',
    '2026-02-04 21:54:35',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:54:35',
    '2026-02-04 21:54:35'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    324,
    459,
    'total_amount',
    '10000',
    '9000',
    '2026-02-04 21:54:35',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:54:35',
    '2026-02-04 21:54:35'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    325,
    465,
    'rate',
    '12000',
    '8000',
    '2026-02-04 21:57:14',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:57:14',
    '2026-02-04 21:57:14'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    326,
    465,
    'total_amount',
    '12000',
    '8000',
    '2026-02-04 21:57:14',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:57:14',
    '2026-02-04 21:57:14'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    327,
    464,
    'rate',
    '12000',
    '8000',
    '2026-02-04 21:57:43',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:57:43',
    '2026-02-04 21:57:43'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    328,
    464,
    'total_amount',
    '12000',
    '8000',
    '2026-02-04 21:57:43',
    'Faizan',
    'Receipt Edit',
    '2026-02-04 21:57:43',
    '2026-02-04 21:57:43'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    329,
    532,
    'loading_charge',
    '150',
    '',
    '2026-02-05 00:39:09',
    'Faizan',
    'Receipt Edit',
    '2026-02-05 00:39:09',
    '2026-02-05 00:39:09'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    330,
    532,
    'cash_paid',
    '10150',
    '10000',
    '2026-02-05 00:39:09',
    'Faizan',
    'Receipt Edit',
    '2026-02-05 00:39:09',
    '2026-02-05 00:39:09'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    331,
    532,
    'total_amount',
    '10150',
    '10000',
    '2026-02-05 00:39:09',
    'Faizan',
    'Receipt Edit',
    '2026-02-05 00:39:09',
    '2026-02-05 00:39:09'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    332,
    528,
    'rate',
    '24000',
    '',
    '2026-02-05 01:01:52',
    'Faizan',
    'Receipt Edit',
    '2026-02-05 01:01:52',
    '2026-02-05 01:01:52'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    333,
    528,
    'cash_paid',
    '24000',
    '',
    '2026-02-05 01:01:52',
    'Faizan',
    'Receipt Edit',
    '2026-02-05 01:01:52',
    '2026-02-05 01:01:52'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    334,
    528,
    'total_amount',
    '24000',
    '',
    '2026-02-05 01:01:52',
    'Faizan',
    'Receipt Edit',
    '2026-02-05 01:01:52',
    '2026-02-05 01:01:52'
  );
INSERT INTO
  `receipt_edit_histories` (
    `id`,
    `receipt_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    335,
    528,
    'payment_status',
    'paid',
    'unpaid',
    '2026-02-05 01:01:52',
    'Faizan',
    'Receipt Edit',
    '2026-02-05 01:01:52',
    '2026-02-05 01:01:52'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    1,
    'GM9001',
    'Raju Thakre ',
    'MH49BZ8473',
    '2026-01-29 13:51:57',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    1,
    '2026-01-29 13:51:57',
    '2026-01-29 13:51:57',
    'Pramod',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    2,
    'GM9002',
    'Nikhil Dhote',
    'MH29AB7585',
    '2026-01-29 13:54:37',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'online',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    2,
    '2026-01-29 13:54:37',
    '2026-01-29 13:54:37',
    'Shubham ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    3,
    'GM9003',
    'Popat Seth ',
    'MH40Y1951',
    '2026-01-29 13:55:29',
    1.00,
    12000.00,
    0.00,
    12000.00,
    0.00,
    12000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    3,
    '2026-01-29 13:55:29',
    '2026-02-03 11:45:29',
    'Raju',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    4,
    'GM9004',
    'Sohel Sayyed ',
    'MH29T1051',
    '2026-01-29 14:02:05',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    4,
    '2026-01-29 14:02:06',
    '2026-01-29 14:32:32',
    'Suraj',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    5,
    'GM9005',
    'Popat Seth ',
    'MH29BE4455',
    '2026-01-29 14:03:14',
    1.00,
    18000.00,
    0.00,
    18000.00,
    0.00,
    18000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    3,
    '2026-01-29 14:03:15',
    '2026-02-03 11:45:29',
    'Amol',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    6,
    'GM9006',
    'Raju Thakre ',
    'MH35AJ0247',
    '2026-01-29 14:04:45',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    1,
    '2026-01-29 14:04:45',
    '2026-01-29 14:04:45',
    'Sandip',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    7,
    'GM9007',
    'Sahil Sayyed ',
    'MH40L1629',
    '2026-01-29 14:16:41',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    5,
    '2026-01-29 14:16:41',
    '2026-01-29 14:16:41',
    'Mohan',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    8,
    'GM9008',
    'Masroor Bhai ',
    'MH31M5768',
    '2026-01-29 14:47:29',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    6,
    '2026-01-29 14:47:29',
    '2026-01-29 14:47:29',
    'Raju',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    9,
    'GM9009',
    'Pramod Press ',
    'MH29T1530',
    '2026-01-29 15:11:31',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    7,
    '2026-01-29 15:11:32',
    '2026-01-29 15:11:32',
    'Pawan',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    10,
    'GM9010',
    'Bharat Kale',
    'MH29BE5768',
    '2026-01-29 15:27:55',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    8,
    '2026-01-29 15:27:58',
    '2026-02-03 17:49:35',
    'Hitesh',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    11,
    'GM9011',
    'Bharat Kale',
    'MH40N5437',
    '2026-01-29 15:29:49',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    8,
    '2026-01-29 15:29:52',
    '2026-02-03 17:49:35',
    'Khushal',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    12,
    'GM9012',
    'WASIM PATHAN',
    'MH29T0288',
    '2026-01-29 15:36:59',
    1.00,
    11000.00,
    0.00,
    3000.00,
    8000.00,
    11000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    33,
    '2026-01-29 15:37:02',
    '2026-01-29 22:02:30',
    'Aakash',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    13,
    'GM9013',
    'WASIM PATHAN',
    'MH04GR9803',
    '2026-01-29 15:38:47',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    33,
    '2026-01-29 15:38:50',
    '2026-01-29 22:04:03',
    'Golu',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    14,
    'GM9014',
    'Shahebaz Bhaiya',
    'MH32Q1248',
    '2026-01-29 15:49:46',
    1.00,
    18000.00,
    0.00,
    0.00,
    18000.00,
    18000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    10,
    '2026-01-29 15:49:49',
    '2026-01-29 15:49:49',
    '1',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    15,
    'GM9015',
    'Shoaib Ner',
    'MH29BT0934',
    '2026-01-29 15:52:09',
    1.00,
    12000.00,
    0.00,
    6000.00,
    6000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    11,
    '2026-01-29 15:52:12',
    '2026-01-29 15:52:12',
    'Pappu',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    16,
    'GM9016',
    'Abbu Bhai',
    'MH29-3977',
    '2026-01-29 15:55:39',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    12,
    '2026-01-29 15:55:41',
    '2026-01-29 15:55:41',
    'Mama',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    17,
    'GM9017',
    'Abbu Bhai',
    'MH40-4177',
    '2026-01-29 15:57:17',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    12,
    '2026-01-29 15:57:20',
    '2026-01-29 15:57:20',
    'MAMA',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    18,
    'GM9018',
    'Aamir Babba ',
    'MH04FU3734',
    '2026-01-29 15:59:44',
    1.00,
    12000.00,
    0.00,
    6000.00,
    6000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    13,
    '2026-01-29 15:59:47',
    '2026-01-29 15:59:47',
    'Mintu dada',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    19,
    'GM9019',
    'Shaz Ahemad',
    'MH49AT6089',
    '2026-01-29 16:02:04',
    1.00,
    18000.00,
    0.00,
    0.00,
    18000.00,
    18000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    14,
    '2026-01-29 16:02:07',
    '2026-01-29 16:02:07',
    'kALIM',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    20,
    'GM9020',
    'Ravi H',
    'MH40N7526',
    '2026-01-29 16:05:15',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    15,
    '2026-01-29 16:05:18',
    '2026-01-29 16:57:01',
    'Gajanan',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    21,
    'GM9021',
    'Tarik Sharik',
    'MH28B8929',
    '2026-01-29 16:13:11',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    16,
    '2026-01-29 16:13:14',
    '2026-01-29 16:13:14',
    'Dhanraj',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    22,
    'GM9022',
    'Saddam Bhai',
    'MH29T0400',
    '2026-01-29 16:29:05',
    1.00,
    10000.00,
    0.00,
    0.00,
    10000.00,
    10000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    17,
    '2026-01-29 16:29:05',
    '2026-01-29 16:29:05',
    'Umesh',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    23,
    'GM9023',
    'Wasim Memon',
    'MH03CP1869',
    '2026-01-29 16:33:11',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    18,
    '2026-01-29 16:33:11',
    '2026-02-01 12:47:05',
    'Kalim',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    24,
    'GM9024',
    'Shobu Bhai',
    'MH29BE9020',
    '2026-01-29 17:26:01',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    1.00,
    '',
    1,
    19,
    '2026-01-29 17:26:01',
    '2026-01-29 17:26:28',
    'Nadir',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    25,
    'GM9025',
    'Abbu Bhai',
    'MH04N6917',
    '2026-01-29 17:29:16',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    12,
    '2026-01-29 17:29:17',
    '2026-01-29 17:29:17',
    'Ashpak',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    26,
    'GM9026',
    'Aayan Bhai',
    'MH40-7077',
    '2026-01-29 17:31:47',
    1.00,
    12000.00,
    0.00,
    12000.00,
    0.00,
    12000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    20,
    '2026-01-29 17:31:47',
    '2026-02-03 11:44:47',
    'Farukh',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    27,
    'GM9027',
    'Shahezad Bhaya',
    'MH27BX5006',
    '2026-01-29 17:33:45',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    21,
    '2026-01-29 17:33:45',
    '2026-01-29 17:33:45',
    NULL,
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    28,
    'GM9028',
    'Ajay Golait',
    'MH27BF7924',
    '2026-01-29 17:35:59',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    'Online',
    1,
    22,
    '2026-01-29 17:36:00',
    '2026-02-03 17:41:51',
    'Salim',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    29,
    'GM9029',
    'Ajay Golait',
    'MH40N6624',
    '2026-01-29 17:41:07',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    22,
    '2026-01-29 17:41:07',
    '2026-02-03 17:41:51',
    'FIROZ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    30,
    'GM9030',
    'Vaibhav Randive',
    'MH40CM9654',
    '2026-01-29 17:47:08',
    1.00,
    18000.00,
    0.00,
    0.00,
    18000.00,
    18000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    23,
    '2026-01-29 17:47:09',
    '2026-01-29 17:47:09',
    'Gajanan',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    31,
    'GM9031',
    'Ajay Golait',
    'MH29BE3577',
    '2026-01-29 17:51:21',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10998.00,
    '',
    1,
    22,
    '2026-01-29 17:51:22',
    '2026-02-03 17:41:51',
    'NOORA BHAI',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    32,
    'GM9032',
    'RAJU NA',
    'MH40CM1344',
    '2026-01-29 17:53:43',
    1.00,
    18000.00,
    0.00,
    18000.00,
    0.00,
    18000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    24,
    '2026-01-29 17:53:43',
    '2026-02-03 11:46:20',
    'SHER KHAN',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    33,
    'GM9033',
    'Masroor Bhai ',
    'MH31-2322',
    '2026-01-29 17:55:31',
    1.00,
    12000.00,
    0.00,
    3000.00,
    9000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    6,
    '2026-01-29 17:55:31',
    '2026-01-29 17:55:31',
    'NYANESHWAR',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    34,
    'GM9034',
    'VAIBHAV RANDIVE',
    'MH31CB4968',
    '2026-01-29 17:56:26',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    23,
    '2026-01-29 17:56:26',
    '2026-01-29 17:56:26',
    'LAXMAN',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    35,
    'GM9035',
    'Vaibhav Randive',
    'NL01AJ5912',
    '2026-01-29 17:57:30',
    1.00,
    18000.00,
    0.00,
    0.00,
    18000.00,
    18000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    23,
    '2026-01-29 17:57:30',
    '2026-01-29 17:57:30',
    'ZAHIR',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    36,
    'GM9036',
    'Ajay Golait',
    'MH06BD7171',
    '2026-01-29 17:59:08',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    10997.00,
    '',
    1,
    22,
    '2026-01-29 17:59:08',
    '2026-02-03 17:41:51',
    'SHUBHAM',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    37,
    'GM9037',
    'Ajay Golait',
    'MH05AM510',
    '2026-01-29 18:03:49',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    22,
    '2026-01-29 18:03:49',
    '2026-02-03 17:41:51',
    'SANTOSH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    38,
    'GM9038',
    'NARENDRA PATIL',
    'MH29T0976',
    '2026-01-29 18:05:09',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    25,
    '2026-01-29 18:05:09',
    '2026-02-01 10:57:07',
    'MAHADEO',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    39,
    'GM9039',
    'RAJU NA',
    'MH31DS1106',
    '2026-01-29 18:06:48',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    24,
    '2026-01-29 18:06:49',
    '2026-02-03 11:46:20',
    'AVINASH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    40,
    'GM9040',
    'SHAHEZAD JHON',
    'MH40N3037',
    '2026-01-29 18:08:07',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'online',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    26,
    '2026-01-29 18:08:07',
    '2026-02-03 11:46:41',
    'SALIM',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    41,
    'GM9041',
    'MAHI DORLI',
    'MH27DT1140',
    '2026-01-29 18:14:51',
    1.00,
    11000.00,
    0.00,
    6000.00,
    5000.00,
    11000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    27,
    '2026-01-29 18:14:51',
    '2026-01-29 18:14:51',
    'NILESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    42,
    'GM9042',
    'NARENDRA PATIL',
    'MH29BE4276',
    '2026-01-29 18:16:04',
    1.00,
    17000.00,
    0.00,
    17000.00,
    0.00,
    17000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    17000.00,
    '',
    1,
    25,
    '2026-01-29 18:16:04',
    '2026-01-29 18:16:04',
    'BHARAT',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    43,
    'GM9043',
    'NARENDRA PATIL',
    'MH35K5049',
    '2026-01-29 18:17:31',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    25,
    '2026-01-29 18:17:31',
    '2026-01-29 18:17:31',
    'UMESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    44,
    'GM9044',
    'Shahrukh Pathan',
    'MH40T013',
    '2026-01-29 18:19:17',
    1.00,
    10000.00,
    0.00,
    0.00,
    10000.00,
    10000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    9,
    '2026-01-29 18:19:17',
    '2026-01-29 18:19:17',
    'SHANKAR',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    45,
    'GM9045',
    'SHEKHAR SARODE',
    'MH29BD5049',
    '2026-01-29 18:24:31',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    11000.00,
    'REHAN',
    1,
    28,
    '2026-01-29 18:24:31',
    '2026-01-29 18:24:31',
    'NILESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    46,
    'GM9046',
    'JIVNE BABU',
    'MH32F1990',
    '2026-01-29 18:26:26',
    1.00,
    12000.00,
    0.00,
    12000.00,
    0.00,
    12000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    29,
    '2026-01-29 18:26:26',
    '2026-01-29 18:26:26',
    'BABA',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    47,
    'GM9047',
    'JIVNE BABU',
    'MH02C8007',
    '2026-01-29 18:27:10',
    1.00,
    12000.00,
    0.00,
    12000.00,
    0.00,
    12000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    29,
    '2026-01-29 18:27:10',
    '2026-01-29 18:27:10',
    'BABA',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    48,
    'GM9048',
    'SUMIT SHIRBHATE',
    'MH32Q5452',
    '2026-01-29 18:31:17',
    1.00,
    12000.00,
    0.00,
    3000.00,
    9000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    30,
    '2026-01-29 18:31:17',
    '2026-01-29 18:31:17',
    'RAJKUMAR',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    49,
    'GM9049',
    'SUMIT SHIRBHATE',
    'MH40Y0075',
    '2026-01-29 18:32:07',
    1.00,
    12000.00,
    0.00,
    3000.00,
    9000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    30,
    '2026-01-29 18:32:07',
    '2026-01-29 18:32:56',
    'KISHAN',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    50,
    'GM9050',
    'Vaibhav Randive',
    'MH05AN1468',
    '2026-01-29 18:34:26',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    23,
    '2026-01-29 18:34:26',
    '2026-01-29 18:34:26',
    'AASHISH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    51,
    'GM9051',
    'ASLAM NA',
    'MH29BE0585',
    '2026-01-29 18:37:44',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    31,
    '2026-01-29 18:37:44',
    '2026-01-29 18:37:44',
    'KALIM',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    52,
    'GM9052',
    'NARENDRA PATIL',
    'MH29BE0019',
    '2026-01-29 18:44:53',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    25,
    '2026-01-29 18:44:53',
    '2026-01-29 18:44:53',
    'VINOD',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    53,
    'GM9053',
    'NARENDRA PATIL',
    'MH29BE9076',
    '2026-01-29 18:45:52',
    1.00,
    22000.00,
    0.00,
    22000.00,
    0.00,
    22000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    22000.00,
    '',
    1,
    25,
    '2026-01-29 18:45:53',
    '2026-01-29 18:45:53',
    'MANIK',
    '12 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    54,
    'GM9054',
    'Raju Thakre ',
    'MH32AJ6475',
    '2026-01-29 19:40:03',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    1,
    '2026-01-29 19:40:03',
    '2026-01-29 19:40:03',
    'KARTIK',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    55,
    'GM9055',
    'Raju Thakre ',
    'MH35AJ0247',
    '2026-01-29 19:40:38',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    11997.00,
    '',
    1,
    1,
    '2026-01-29 19:40:38',
    '2026-01-29 19:41:33',
    'Sandip',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    56,
    'GM9056',
    'Sohel Sayyed ',
    'MH29T1051',
    '2026-01-29 19:41:09',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'online',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    4,
    '2026-01-29 19:41:10',
    '2026-01-29 19:41:10',
    'Suraj',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    57,
    'GM9057',
    'Raju Thakre ',
    'MH49BZ8473',
    '2026-01-29 19:46:48',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    1,
    '2026-01-29 19:46:49',
    '2026-01-29 19:46:49',
    'Pramod',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    58,
    'GM9058',
    'BANTY DESHMUKH',
    'MH40CM8462',
    '2026-01-29 20:16:11',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    32,
    '2026-01-29 20:16:12',
    '2026-01-29 20:16:12',
    'DHIRAJ',
    NULL
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    59,
    'GM9059',
    'Tarik Sharik',
    'MH28B8929',
    '2026-01-29 20:38:36',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    16,
    '2026-01-29 20:38:36',
    '2026-01-29 20:38:36',
    'Dhanraj',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    60,
    'GM9060',
    'WASIM PATHAN',
    'MH29T0288',
    '2026-01-29 20:47:41',
    1.00,
    11000.00,
    0.00,
    3000.00,
    8000.00,
    11000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    10999.00,
    '',
    1,
    33,
    '2026-01-29 20:47:41',
    '2026-01-29 20:56:10',
    'Aakash',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    61,
    'GM9061',
    'WASIM PATHAN',
    'MH04GR9803',
    '2026-01-29 20:48:35',
    1.00,
    11000.00,
    0.00,
    1000.00,
    10000.00,
    11000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    10997.00,
    '',
    1,
    33,
    '2026-01-29 20:48:35',
    '2026-02-01 13:16:39',
    'Golu',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    62,
    'GM9062',
    'Shahezad Bhaya',
    'MH27BX5006',
    '2026-01-29 20:52:19',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    21,
    '2026-01-29 20:52:19',
    '2026-01-29 20:52:19',
    'SANTOSH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    63,
    'GM9063',
    'Saddam Bhai',
    'MH29T0400',
    '2026-01-29 20:56:30',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    17,
    '2026-01-29 20:56:31',
    '2026-01-29 20:56:31',
    'Umesh',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    64,
    'GM9064',
    'Wasim Memon',
    'MH03CP1869',
    '2026-01-29 20:59:07',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    18,
    '2026-01-29 20:59:07',
    '2026-02-01 12:47:05',
    'Kalim',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    65,
    'GM9065',
    'Shahebaz Bhaiya',
    'MH32Q1248',
    '2026-01-29 21:25:23',
    1.00,
    18000.00,
    0.00,
    0.00,
    0.00,
    18000.00,
    'unpaid',
    'cash',
    0.00,
    'regular',
    17997.00,
    '',
    1,
    10,
    '2026-01-29 21:25:23',
    '2026-01-29 21:34:32',
    '1',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    66,
    'GM9066',
    'Sahil Sayyed ',
    'MH40L1629',
    '2026-01-29 21:27:12',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    5,
    '2026-01-29 21:27:12',
    '2026-01-29 21:27:12',
    'Mohan',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    67,
    'GM9067',
    'Aamir Babba ',
    'MH04FU3734',
    '2026-01-29 21:58:05',
    1.00,
    12000.00,
    0.00,
    6000.00,
    6000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    13,
    '2026-01-29 21:58:05',
    '2026-01-30 09:38:59',
    'Mintu dada',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    68,
    'GM9068',
    'Aayan Bhai',
    'MH40-7077',
    '2026-01-29 21:58:47',
    1.00,
    12000.00,
    0.00,
    12000.00,
    0.00,
    12000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    20,
    '2026-01-29 21:58:48',
    '2026-02-03 11:44:47',
    'Farukh',
    NULL
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    69,
    'GM9069',
    'Shobu Bhai',
    'MH29BE9020',
    '2026-01-29 22:00:10',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    11997.00,
    '',
    1,
    19,
    '2026-01-29 22:00:10',
    '2026-01-29 22:00:50',
    'Nadir',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    70,
    'GM9070',
    'RAJU NA',
    'MH40CM1344',
    '2026-01-29 22:46:52',
    1.00,
    18000.00,
    0.00,
    18000.00,
    0.00,
    18000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    24,
    '2026-01-29 22:46:53',
    '2026-02-03 11:46:20',
    'SHER KHAN',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    71,
    'GM9071',
    'Raju Tajne',
    'MH40Y8231',
    '2026-01-29 22:51:19',
    1.00,
    18000.00,
    0.00,
    18000.00,
    0.00,
    18000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    34,
    '2026-01-29 22:51:19',
    '2026-01-29 22:51:19',
    'Ravindra',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    72,
    'GM9072',
    'JIVNE BABU',
    'MH32F1990',
    '2026-01-29 23:26:25',
    1.00,
    12000.00,
    0.00,
    12000.00,
    0.00,
    12000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    29,
    '2026-01-29 23:26:25',
    '2026-01-30 17:32:46',
    'BABA',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    73,
    'GM9073',
    'Ajay Golait',
    'MH06BD7171',
    '2026-01-30 09:37:47',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-01-30 09:37:47',
    '2026-02-03 17:41:51',
    'SHUBHAM',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    74,
    'GM9074',
    'Raju Thakre ',
    'MH49BZ8473',
    '2026-01-30 12:40:09',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    1,
    '2026-01-30 12:40:10',
    '2026-01-30 12:40:10',
    'Pramod',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    75,
    'GM9075',
    'Pramod Press ',
    'MH29T1530',
    '2026-01-30 12:41:04',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    7,
    '2026-01-30 12:41:05',
    '2026-01-30 12:41:05',
    'Pawan',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    76,
    'GM9076',
    'Pramod Press ',
    'MH31CQ8667',
    '2026-01-30 12:42:18',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    7,
    '2026-01-30 12:42:19',
    '2026-01-30 12:42:19',
    'SAHIL',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    77,
    'GM9077',
    'Popat Seth ',
    'MH40Y1951',
    '2026-01-30 12:45:12',
    1.00,
    12000.00,
    0.00,
    12000.00,
    0.00,
    12000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    3,
    '2026-01-30 12:45:13',
    '2026-02-03 11:45:29',
    'Raju',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    78,
    'GM9078',
    'Raju Thakre ',
    'MH32AJ6475',
    '2026-01-30 12:46:15',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    1,
    '2026-01-30 12:46:16',
    '2026-01-30 12:46:16',
    'KARTIK',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    79,
    'GM9079',
    'KIRAN MATE',
    'MH29BE5904',
    '2026-01-30 12:49:34',
    1.00,
    17000.00,
    0.00,
    17000.00,
    0.00,
    17000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    17000.00,
    '',
    1,
    35,
    '2026-01-30 12:49:35',
    '2026-02-03 11:45:07',
    'VILAS',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    80,
    'GM9080',
    'Sahil Sayyed ',
    'MH40L1629',
    '2026-01-30 13:15:17',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'online',
    0.00,
    'partner',
    10000.00,
    'CASH BHAIYA KO DIYE 4500 KA DISSEL 5500 DIYE',
    1,
    5,
    '2026-01-30 13:15:18',
    '2026-01-30 17:27:30',
    'Mohan',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    81,
    'GM9081',
    'SUMIT SHIRBHATE',
    'MH32Q5452',
    '2026-01-30 13:16:12',
    1.00,
    12000.00,
    0.00,
    3000.00,
    9000.00,
    12000.00,
    'partial',
    'online',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    30,
    '2026-01-30 13:16:13',
    '2026-01-30 13:18:22',
    'RAJKUMAR',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    82,
    'GM9082',
    'SUMIT SHIRBHATE',
    'MH40Y0075',
    '2026-01-30 13:16:37',
    1.00,
    12000.00,
    0.00,
    3000.00,
    9000.00,
    12000.00,
    'partial',
    'online',
    0.00,
    'regular',
    11998.00,
    '',
    0,
    30,
    '2026-01-30 13:16:38',
    '2026-01-30 13:26:03',
    'KISHAN',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    83,
    'GM9083',
    'SUMIT SHIRBHATE',
    'MH40Y0075',
    '2026-01-30 13:16:37',
    1.00,
    12000.00,
    0.00,
    3000.00,
    9000.00,
    12000.00,
    'partial',
    'online',
    0.00,
    'regular',
    11998.00,
    '',
    1,
    30,
    '2026-01-30 13:16:38',
    '2026-01-30 13:17:59',
    'KISHAN',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    84,
    'GM9084',
    'Masroor Bhai ',
    'MH31M5768',
    '2026-01-30 13:18:48',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    6,
    '2026-01-30 13:18:49',
    '2026-01-30 13:18:49',
    'Raju',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    85,
    'GM9085',
    'Ajay Golait',
    'MH06BD7171',
    '2026-01-30 13:19:44',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-01-30 13:19:45',
    '2026-02-03 17:41:51',
    'SHUBHAM',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    86,
    'GM9086',
    'ARBAZ BHAI',
    'MH40N7150',
    '2026-01-30 13:21:12',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    36,
    '2026-01-30 13:21:13',
    '2026-01-30 13:21:13',
    NULL,
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    87,
    'GM9087',
    'RAJU NA',
    'MH40CM1344',
    '2026-01-30 13:21:51',
    1.00,
    18000.00,
    0.00,
    18000.00,
    0.00,
    18000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    24,
    '2026-01-30 13:21:53',
    '2026-02-03 11:46:20',
    'SHER KHAN',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    88,
    'GM9088',
    'ASLAM NA',
    'MH29BE0585',
    '2026-01-30 13:22:22',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    31,
    '2026-01-30 13:22:24',
    '2026-01-30 13:22:24',
    'KALIM',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    89,
    'GM9089',
    'NARENDRA PATIL',
    'MH29BE0019',
    '2026-01-30 13:23:14',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    25,
    '2026-01-30 13:23:15',
    '2026-01-30 13:28:54',
    'VINOD',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    90,
    'GM9090',
    'Raju Thakre ',
    'MH35AJ0247',
    '2026-01-30 13:50:51',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    1,
    '2026-01-30 13:50:52',
    '2026-01-30 13:50:52',
    'Sandip',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    91,
    'GM9091',
    'SAILESH BELEKAR',
    '8411949466',
    '2026-01-30 13:57:23',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'online',
    0.00,
    'regular',
    10998.00,
    '',
    1,
    37,
    '2026-01-30 13:57:24',
    '2026-01-30 14:54:28',
    'DIPAK',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    92,
    'GM9092',
    'NARENDRA PATIL',
    'MH29T0976',
    '2026-01-30 13:58:46',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    25,
    '2026-01-30 13:58:47',
    '2026-01-30 13:58:47',
    'MAHADEO',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    93,
    'GM9093',
    'NARENDRA PATIL',
    'MH29BE4276',
    '2026-01-30 13:59:28',
    1.00,
    17000.00,
    0.00,
    17000.00,
    0.00,
    17000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    17000.00,
    '',
    1,
    25,
    '2026-01-30 13:59:29',
    '2026-01-30 13:59:29',
    'BHARAT',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    94,
    'GM9094',
    'NARENDRA PATIL',
    'MH29BE9076',
    '2026-01-30 14:01:16',
    1.00,
    22000.00,
    0.00,
    22000.00,
    0.00,
    22000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    22000.00,
    '',
    1,
    25,
    '2026-01-30 14:01:17',
    '2026-01-30 14:01:17',
    'MANIK',
    '12 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    95,
    'GM9095',
    'VISHAL PANDARPURE',
    'MH36F1695',
    '2026-01-30 14:09:34',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    38,
    '2026-01-30 14:09:35',
    '2026-01-30 14:09:35',
    'YOGESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    96,
    'GM9096',
    'GANESH SHIRSAGAR',
    'MH04EB7139',
    '2026-01-30 14:12:45',
    1.00,
    12000.00,
    0.00,
    12000.00,
    0.00,
    12000.00,
    'paid',
    'online',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    39,
    '2026-01-30 14:12:46',
    '2026-01-30 14:12:46',
    'SACHIIN',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    97,
    'GM9097',
    'SHAHEZAD JHON',
    'MH40N3037',
    '2026-01-30 14:13:19',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    26,
    '2026-01-30 14:13:20',
    '2026-02-03 11:46:41',
    'SALIM',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    98,
    'GM9098',
    'Ajay Golait',
    'MH29BE3577',
    '2026-01-30 14:15:21',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-01-30 14:15:22',
    '2026-02-03 17:41:51',
    'NOORA BHAI',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    99,
    'GM9099',
    'Ajay Golait',
    'MH40N6624',
    '2026-01-30 14:15:52',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-01-30 14:15:53',
    '2026-02-03 17:41:51',
    'FIROZ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    100,
    'GM9100',
    'Aayan Bhai',
    'MH40-7077',
    '2026-01-30 14:16:46',
    1.00,
    12000.00,
    0.00,
    12000.00,
    0.00,
    12000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    20,
    '2026-01-30 14:16:47',
    '2026-02-03 11:44:47',
    'Farukh',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    101,
    'GM9101',
    'Shoaib Ner',
    'MH29BT0934',
    '2026-01-30 14:18:15',
    1.00,
    12000.00,
    0.00,
    6000.00,
    6000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    11,
    '2026-01-30 14:18:16',
    '2026-01-30 14:18:16',
    'Pappu',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    102,
    'GM9102',
    'Masroor Bhai ',
    'MH31-2322',
    '2026-01-30 14:22:36',
    1.00,
    12000.00,
    0.00,
    3000.00,
    9000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    6,
    '2026-01-30 14:22:37',
    '2026-01-30 14:53:10',
    'NYANESHWAR',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    103,
    'GM9103',
    'Ajay Golait',
    'MH05AM510',
    '2026-01-30 14:40:45',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-01-30 14:40:46',
    '2026-02-03 17:41:51',
    'SANTOSH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    104,
    'GM9104',
    'Tarik Sharik',
    'MH28B8929',
    '2026-01-30 14:46:14',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    16,
    '2026-01-30 14:46:15',
    '2026-01-30 14:52:57',
    'Dhanraj',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    105,
    'GM9105',
    'Ravi H',
    'MH40N7526',
    '2026-01-30 14:47:28',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    15,
    '2026-01-30 14:47:29',
    '2026-01-30 14:47:29',
    'Gajanan',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    106,
    'GM9106',
    'Abbu Bhai',
    'MH49AT7175',
    '2026-01-30 14:49:17',
    1.00,
    18000.00,
    0.00,
    0.00,
    18000.00,
    18000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    12,
    '2026-01-30 14:49:18',
    '2026-01-30 14:52:34',
    'Mama',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    107,
    'GM9107',
    'Abbu Bhai',
    'MH29-3977',
    '2026-01-30 14:51:40',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12005.00,
    '',
    1,
    12,
    '2026-01-30 14:51:41',
    '2026-01-30 14:52:42',
    'Mama',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    108,
    'GM9108',
    'Wasim Memon',
    'MH03CP1869',
    '2026-01-30 14:56:41',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'credit',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    18,
    '2026-01-30 14:56:42',
    '2026-02-01 12:47:05',
    'Kalim',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    109,
    'GM9109',
    'MAHI DORLI',
    'MH27DT1140',
    '2026-01-30 15:02:11',
    1.00,
    12000.00,
    0.00,
    3000.00,
    9000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    27,
    '2026-01-30 15:02:12',
    '2026-01-30 15:02:12',
    'NILESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    110,
    'GM9110',
    'NARENDRA PATIL',
    'MH35K5049',
    '2026-01-30 15:04:23',
    1.00,
    10000.00,
    0.00,
    9500.00,
    500.00,
    10000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    25,
    '2026-01-30 15:04:24',
    '2026-01-30 15:04:24',
    'UMESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    111,
    'GM9111',
    'Vaibhav Randive',
    'MH40CM9654',
    '2026-01-30 16:06:31',
    1.00,
    18000.00,
    0.00,
    0.00,
    18000.00,
    18000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    23,
    '2026-01-30 16:06:32',
    '2026-01-30 16:06:32',
    'Gajanan',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    112,
    'GM9112',
    'Shahezad Bhaya',
    'MH27BX5006',
    '2026-01-30 16:09:22',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    21,
    '2026-01-30 16:09:23',
    '2026-01-30 16:09:23',
    'SANTOSH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    113,
    'GM9113',
    'Abbu Bhai',
    'MH04N6917',
    '2026-01-30 16:10:02',
    1.00,
    12000.00,
    0.00,
    6000.00,
    6000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    12,
    '2026-01-30 16:10:03',
    '2026-01-30 16:10:03',
    'Ashpak',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    114,
    'GM9114',
    'Vaibhav Randive',
    'MH31CB4968',
    '2026-01-30 16:21:39',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    11999.00,
    '',
    1,
    23,
    '2026-01-30 16:21:40',
    '2026-01-30 17:44:07',
    'LAXMAN',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    115,
    'GM9115',
    'SHAZ AHMAD',
    'TN91L8190',
    '2026-01-30 16:24:22',
    1.00,
    24000.00,
    0.00,
    0.00,
    24000.00,
    24000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    24000.00,
    '',
    1,
    40,
    '2026-01-30 16:24:24',
    '2026-01-30 16:24:24',
    'PANKAJ',
    '12 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    116,
    'GM9116',
    'Aamir Babba ',
    'MH04FU3734',
    '2026-01-30 16:25:55',
    1.00,
    12000.00,
    0.00,
    6000.00,
    6000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    13,
    '2026-01-30 16:25:56',
    '2026-01-30 16:25:56',
    'Mintu dada',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    117,
    'GM9117',
    'RAJU NA',
    'MH31DS1106',
    '2026-01-30 16:28:50',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    24,
    '2026-01-30 16:28:51',
    '2026-02-03 11:46:20',
    'AVINASH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    118,
    'GM9118',
    'Saddam Bhai',
    'MH29T0400',
    '2026-01-30 16:29:54',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    17,
    '2026-01-30 16:29:55',
    '2026-01-30 16:29:55',
    'Umesh',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    119,
    'GM9119',
    'DINESH KALE',
    'BR01GE7886',
    '2026-01-30 16:34:50',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    41,
    '2026-01-30 16:34:51',
    '2026-01-30 16:34:51',
    'PRAVIN',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    120,
    'GM9120',
    'WASIM PATHAN',
    'MH04GR9803',
    '2026-01-30 16:36:45',
    1.00,
    10000.00,
    0.00,
    0.00,
    10000.00,
    10000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    33,
    '2026-01-30 16:36:47',
    '2026-01-30 16:36:47',
    'Golu',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    121,
    'GM9121',
    'BANTY DESHMUKH',
    'MH40CM8462',
    '2026-01-30 17:03:41',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    32,
    '2026-01-30 17:03:43',
    '2026-01-30 17:03:43',
    'DHIRAJ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    122,
    'GM9122',
    'Pramod Press ',
    'MH31CQ8667',
    '2026-01-30 17:07:10',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    7,
    '2026-01-30 17:07:12',
    '2026-01-30 17:07:12',
    'SAHIL',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    123,
    'GM9123',
    'Pramod Press ',
    'MH29T1530',
    '2026-01-30 17:07:29',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    7,
    '2026-01-30 17:07:30',
    '2026-01-30 17:07:30',
    'Pawan',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    124,
    'GM9124',
    'SHEKHAR SARODE',
    'MH29BD5049',
    '2026-01-30 17:17:28',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'cash',
    0.00,
    'partner',
    11000.00,
    'REHAN',
    1,
    28,
    '2026-01-30 17:17:29',
    '2026-02-01 12:26:25',
    'NILESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    125,
    'GM9125',
    'Popat Seth ',
    'MH40Y1951',
    '2026-01-30 17:24:25',
    1.00,
    12000.00,
    0.00,
    12000.00,
    0.00,
    12000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    3,
    '2026-01-30 17:24:26',
    '2026-02-03 11:45:29',
    'Raju',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    126,
    'GM9126',
    'Sahil Sayyed ',
    'MH40L1629',
    '2026-01-30 17:26:09',
    1.00,
    10000.00,
    0.00,
    0.00,
    10000.00,
    10000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    5,
    '2026-01-30 17:26:10',
    '2026-01-30 17:26:10',
    'Mohan',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    127,
    'GM9127',
    'JIVNE BABU',
    'MH32F1990',
    '2026-01-30 17:29:39',
    1.00,
    12000.00,
    0.00,
    12000.00,
    0.00,
    12000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    29,
    '2026-01-30 17:29:40',
    '2026-01-30 17:29:40',
    'BABA',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    128,
    'GM9128',
    'JIVNE BABU',
    'MH02C8007',
    '2026-01-30 17:30:12',
    1.00,
    12000.00,
    0.00,
    12000.00,
    0.00,
    12000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    29,
    '2026-01-30 17:30:13',
    '2026-01-30 17:32:55',
    'BABA',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    129,
    'GM9129',
    'Raju Thakre ',
    'MH49BZ8473',
    '2026-01-30 17:38:40',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    1,
    '2026-01-30 17:38:41',
    '2026-01-30 17:38:41',
    'Pramod',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    130,
    'GM9130',
    'Raju Thakre ',
    'MH32AJ6475',
    '2026-01-30 17:39:10',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    1,
    '2026-01-30 17:39:11',
    '2026-01-30 17:39:11',
    'KARTIK',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    131,
    'GM9131',
    'Raju Thakre ',
    'MH35AJ0247',
    '2026-01-30 17:39:59',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    1,
    '2026-01-30 17:40:00',
    '2026-01-30 17:40:00',
    'Sandip',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    132,
    'GM9132',
    'GOLU KATKAAR',
    'MH49BZ7403',
    '2026-01-30 17:42:09',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    42,
    '2026-01-30 17:42:10',
    '2026-01-30 17:42:10',
    'DASHRAT',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    133,
    'GM9133',
    'Nikhil Dhote',
    'MH29AB7585',
    '2026-01-30 17:42:24',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    2,
    '2026-01-30 17:42:26',
    '2026-01-30 17:42:26',
    'Shubham ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    134,
    'GM9134',
    'NIKHIL BAWNE',
    'MH34AV2583',
    '2026-01-30 17:48:47',
    1.00,
    18000.00,
    0.00,
    18000.00,
    0.00,
    18000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    43,
    '2026-01-30 17:48:48',
    '2026-01-30 17:49:54',
    'JIVAN',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    135,
    'GM9135',
    'NIKHIL BAWNE',
    'MH34CM1616',
    '2026-01-30 17:49:35',
    1.00,
    24000.00,
    0.00,
    24000.00,
    0.00,
    24000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    24000.00,
    '',
    1,
    43,
    '2026-01-30 17:49:36',
    '2026-01-30 17:49:36',
    NULL,
    '12 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    136,
    'GM9136',
    'Vaibhav Randive',
    'MH05AM1468',
    '2026-01-30 17:55:27',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    23,
    '2026-01-30 17:55:28',
    '2026-01-30 17:55:28',
    'AASHISH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    137,
    'GM9137',
    'VISHAL PANDARPURE',
    'MH36F1695',
    '2026-01-30 17:58:12',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    38,
    '2026-01-30 17:58:13',
    '2026-01-30 17:58:13',
    'YOGESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    138,
    'GM9138',
    'Shahebaz Bhaiya',
    'MH32Q1248',
    '2026-01-30 18:01:04',
    1.00,
    18000.00,
    0.00,
    0.00,
    18000.00,
    18000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    10,
    '2026-01-30 18:01:05',
    '2026-01-30 18:01:05',
    '1',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    139,
    'GM9139',
    'Raju Tajne',
    'MH40Y8231',
    '2026-01-30 18:15:25',
    1.00,
    18000.00,
    0.00,
    18000.00,
    0.00,
    18000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    34,
    '2026-01-30 18:15:26',
    '2026-01-30 18:15:26',
    'Ravindra',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    140,
    'GM9140',
    'KIRAN MATE',
    'MH32AK4446',
    '2026-01-30 18:47:38',
    1.00,
    17000.00,
    0.00,
    17000.00,
    0.00,
    17000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    17000.00,
    '',
    1,
    35,
    '2026-01-30 18:47:40',
    '2026-02-03 11:45:07',
    'MAHADEO',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    141,
    'GM9141',
    'KIRAN MATE',
    'MH36F1820',
    '2026-01-30 18:49:05',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    35,
    '2026-01-30 18:49:06',
    '2026-02-03 11:45:07',
    'NIKHIL',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    142,
    'GM9142',
    'KIRAN MATE',
    'MH29BE9916',
    '2026-01-30 18:51:41',
    1.00,
    22000.00,
    0.00,
    22000.00,
    0.00,
    22000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    22000.00,
    '',
    1,
    35,
    '2026-01-30 18:51:42',
    '2026-02-03 11:45:07',
    'AAKASH',
    '12 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    143,
    'GM9143',
    'Ajay Golait',
    'MH27BF7924',
    '2026-01-30 19:05:55',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-01-30 19:05:56',
    '2026-02-03 17:41:51',
    'Salim',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    144,
    'GM9144',
    'SUMIT SHIRBHATE',
    'MH32Q5452',
    '2026-01-30 19:58:21',
    1.00,
    12000.00,
    0.00,
    3000.00,
    9000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    11999.00,
    '',
    1,
    30,
    '2026-01-30 19:58:23',
    '2026-01-30 20:36:01',
    'RAJKUMAR',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    145,
    'GM9145',
    'ASLAM NA',
    'MH29BE0585',
    '2026-01-30 19:59:42',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    31,
    '2026-01-30 19:59:44',
    '2026-01-30 19:59:44',
    'KALIM',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    146,
    'GM9146',
    'Ajay Golait',
    'MH29BE3577',
    '2026-01-30 20:04:01',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-01-30 20:04:03',
    '2026-02-03 17:41:51',
    'NOORA BHAI',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    147,
    'GM9147',
    'Shobu Bhai',
    'MH29BE9020',
    '2026-01-30 20:04:24',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    19,
    '2026-01-30 20:04:25',
    '2026-01-30 20:04:25',
    'Nadir',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    148,
    'GM9148',
    'SHAHEZAD JHON',
    'MH40N3037',
    '2026-01-30 20:05:51',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    26,
    '2026-01-30 20:05:53',
    '2026-02-03 11:46:41',
    'SALIM',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    149,
    'GM9149',
    'Tarik Sharik',
    'MH28B8929',
    '2026-01-30 20:06:14',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    16,
    '2026-01-30 20:06:15',
    '2026-01-30 20:06:15',
    'Dhanraj',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    150,
    'GM9150',
    'RAJU SAYYED',
    'MH04FP0309',
    '2026-01-30 20:17:14',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    44,
    '2026-01-30 20:17:15',
    '2026-01-30 20:17:15',
    'RAHUL',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    151,
    'GM9151',
    'RAJU NA',
    'MH40CM1344',
    '2026-01-30 20:36:59',
    1.00,
    18000.00,
    0.00,
    18000.00,
    0.00,
    18000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    24,
    '2026-01-30 20:37:01',
    '2026-02-03 11:46:20',
    'SHER KHAN',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    152,
    'GM9152',
    'KIRAN MATE',
    ' MH29T0781',
    '2026-01-30 20:38:09',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    35,
    '2026-01-30 20:38:10',
    '2026-02-03 11:45:07',
    'DINESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    153,
    'GM9153',
    'KIRAN MATE',
    'MH29BE8766',
    '2026-01-30 20:39:42',
    1.00,
    22000.00,
    0.00,
    22000.00,
    0.00,
    22000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    22000.00,
    '',
    1,
    35,
    '2026-01-30 20:39:43',
    '2026-02-03 11:45:07',
    'AKHIL',
    '12 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    154,
    'GM9154',
    'Popat Seth ',
    'MH40Y1951',
    '2026-01-30 20:41:11',
    1.00,
    12000.00,
    0.00,
    12000.00,
    0.00,
    12000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    3,
    '2026-01-30 20:41:12',
    '2026-02-03 11:45:29',
    'Raju',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    155,
    'GM9155',
    'Pramod Press ',
    'MH31CQ8667',
    '2026-01-30 20:42:01',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    7,
    '2026-01-30 20:42:03',
    '2026-01-30 20:42:03',
    'SAHIL',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    156,
    'GM9156',
    'Pramod Press ',
    'MH29T1530',
    '2026-01-30 20:43:20',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    7,
    '2026-01-30 20:43:21',
    '2026-01-30 20:43:21',
    'Pawan',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    157,
    'GM9157',
    'Shoaib Ner',
    'MH29BT0934',
    '2026-01-30 21:27:30',
    1.00,
    12000.00,
    0.00,
    6000.00,
    6000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    11,
    '2026-01-30 21:27:32',
    '2026-01-30 21:27:32',
    'Pappu',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    158,
    'GM9158',
    'Wasim Memon',
    'MH03CP1869',
    '2026-01-30 21:29:12',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'credit',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    18,
    '2026-01-30 21:29:13',
    '2026-02-01 12:44:52',
    'Kalim',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    159,
    'GM9159',
    'Nikhil Dhote',
    'MH29AB7585',
    '2026-01-30 21:31:38',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    2,
    '2026-01-30 21:31:39',
    '2026-02-04 21:22:51',
    'Shubham ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    160,
    'GM9160',
    'GOLU KATKAAR',
    'MH49BZ7403',
    '2026-01-30 22:42:12',
    1.00,
    10000.00,
    0.00,
    0.00,
    10000.00,
    10000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    42,
    '2026-01-30 22:42:13',
    '2026-01-30 22:42:13',
    'DASHRAT',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    161,
    'GM9161',
    'Ajay Golait',
    'MH05AM510',
    '2026-01-30 22:44:01',
    1.00,
    11000.00,
    0.00,
    2000.00,
    9000.00,
    11000.00,
    'partial',
    'cash',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-01-30 22:44:02',
    '2026-02-03 17:46:21',
    'SANTOSH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    162,
    'GM9162',
    'DINESH KALE',
    'BR01GE7886',
    '2026-01-30 22:57:16',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    41,
    '2026-01-30 22:57:18',
    '2026-01-30 22:57:18',
    'PRAVIN',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    163,
    'GM9163',
    'Ajay Golait',
    'MH40N6624',
    '2026-01-30 23:00:17',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'cash',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-01-30 23:00:18',
    '2026-02-03 17:45:59',
    'FIROZ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    164,
    'GM9164',
    'SUMIT SHIRBHATE',
    'MH40Y0075',
    '2026-01-30 23:02:58',
    1.00,
    11000.00,
    0.00,
    3000.00,
    8000.00,
    11000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    30,
    '2026-01-30 23:03:00',
    '2026-01-30 23:03:00',
    'KISHAN',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    165,
    'GM9165',
    'Ajay Golait',
    'MH06BD7171',
    '2026-01-30 23:05:44',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-01-30 23:05:45',
    '2026-02-03 17:45:51',
    'SHUBHAM',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    166,
    'GM9166',
    'BANTY DESHMUKH',
    'MH40CM8462',
    '2026-01-30 23:09:27',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    'ONLINE\n',
    1,
    32,
    '2026-01-30 23:09:28',
    '2026-01-30 23:10:24',
    'DHIRAJ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    167,
    'GM9167',
    'JIVNE BABU',
    'MH02C8007',
    '2026-01-30 23:18:34',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    29,
    '2026-01-30 23:18:35',
    '2026-01-30 23:18:35',
    'BABA',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    168,
    'GM9168',
    'JIVNE BABU',
    'MH32F1990',
    '2026-01-30 23:20:44',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    29,
    '2026-01-30 23:20:44',
    '2026-01-30 23:20:44',
    'BABA',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    169,
    'GM9169',
    'Ravi H',
    'MH40N7526',
    '2026-01-31 13:09:32',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    15,
    '2026-01-31 13:09:34',
    '2026-01-31 13:09:34',
    'Gajanan',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    170,
    'GM9170',
    'Ajay Golait',
    'MH27BF7924',
    '2026-01-31 13:11:50',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-01-31 13:11:52',
    '2026-02-03 17:45:42',
    'Salim',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    171,
    'GM9171',
    'Ajay Golait',
    'MH40N6624',
    '2026-01-31 13:12:38',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'cash',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-01-31 13:12:40',
    '2026-02-03 17:45:33',
    'FIROZ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    172,
    'GM9172',
    'Wasim Memon',
    'MH03CP1869',
    '2026-01-31 13:13:41',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'credit',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    18,
    '2026-01-31 13:13:43',
    '2026-02-01 12:44:31',
    'Kalim',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    173,
    'GM9173',
    'Shahezad Bhaya',
    'MH27BX5006',
    '2026-01-31 13:15:06',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    21,
    '2026-01-31 13:15:08',
    '2026-01-31 13:15:08',
    'SANTOSH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    174,
    'GM9174',
    'SHAHEZAD JHON',
    'MH40N3037',
    '2026-01-31 13:15:57',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    26,
    '2026-01-31 13:15:59',
    '2026-02-03 11:46:41',
    'SALIM',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    175,
    'GM9175',
    'Aamir Babba ',
    'MH04FU3734',
    '2026-01-31 13:16:55',
    1.00,
    12000.00,
    0.00,
    6000.00,
    6000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    13,
    '2026-01-31 13:16:57',
    '2026-01-31 13:16:57',
    'Mintu dada',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    176,
    'GM9176',
    'RAJU NA',
    'MH40CM1344',
    '2026-01-31 13:18:18',
    1.00,
    18000.00,
    0.00,
    18000.00,
    0.00,
    18000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    24,
    '2026-01-31 13:18:20',
    '2026-02-03 11:46:20',
    'SHER KHAN',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    177,
    'GM9177',
    'Ajay Golait',
    'MH29BE3577',
    '2026-01-31 13:19:39',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-01-31 13:19:41',
    '2026-02-03 17:43:16',
    'NOORA BHAI',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    178,
    'GM9178',
    'NARENDRA PATIL',
    'MH29T0976',
    '2026-01-31 13:20:40',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    25,
    '2026-01-31 13:20:42',
    '2026-01-31 13:20:42',
    'MAHADEO',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    179,
    'GM9179',
    'NARENDRA PATIL',
    'MH35K5049',
    '2026-01-31 13:21:55',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    25,
    '2026-01-31 13:21:56',
    '2026-01-31 13:21:56',
    'UMESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    180,
    'GM9180',
    'SAILESH BELEKAR',
    '8411949466',
    '2026-01-31 13:27:23',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    37,
    '2026-01-31 13:27:25',
    '2026-01-31 13:27:25',
    'DIPAK',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    181,
    'GM9181',
    'Shobu Bhai',
    'MH29BE9020',
    '2026-01-31 13:32:01',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    19,
    '2026-01-31 13:32:03',
    '2026-01-31 13:32:03',
    'Nadir',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    182,
    'GM9182',
    'Sahil Sayyed ',
    'MH40L1629',
    '2026-01-31 13:32:26',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'online',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    5,
    '2026-01-31 13:32:28',
    '2026-01-31 13:32:28',
    'Mohan',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    183,
    'GM9183',
    'Sohel Sayyed ',
    'MH29T1051',
    '2026-01-31 13:32:45',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'online',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    4,
    '2026-01-31 13:32:47',
    '2026-01-31 13:32:47',
    'Suraj',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    184,
    'GM9184',
    'Raju Thakre ',
    'MH32AJ6475',
    '2026-01-31 13:33:41',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    1,
    '2026-01-31 13:33:43',
    '2026-01-31 13:33:43',
    'KARTIK',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    185,
    'GM9185',
    'Popat Seth',
    'MH29T1667',
    '2026-01-31 13:34:45',
    1.00,
    12000.00,
    0.00,
    12000.00,
    0.00,
    12000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    3,
    '2026-01-31 13:34:46',
    '2026-02-03 11:45:29',
    NULL,
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    186,
    'GM9186',
    'Raju Thakre ',
    'MH49BZ8473',
    '2026-01-31 13:36:22',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    1,
    '2026-01-31 13:36:24',
    '2026-01-31 13:36:24',
    'Pramod',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    187,
    'GM9187',
    'Shahrukh Pathan',
    'MH40T0135',
    '2026-01-31 13:36:51',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    9,
    '2026-01-31 13:36:53',
    '2026-01-31 13:36:53',
    'SHANKAR',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    188,
    'GM9188',
    'Abbu Bhai',
    'MH49AT7175',
    '2026-01-31 13:37:18',
    1.00,
    18000.00,
    0.00,
    0.00,
    18000.00,
    18000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    12,
    '2026-01-31 13:37:19',
    '2026-01-31 13:37:19',
    'Mama',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    189,
    'GM9189',
    'Popat Seth ',
    'MH29BE4455',
    '2026-01-31 13:37:44',
    1.00,
    18000.00,
    0.00,
    18000.00,
    0.00,
    18000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    3,
    '2026-01-31 13:37:46',
    '2026-02-03 11:45:29',
    'Amol',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    190,
    'GM9190',
    'Masroor Bhai ',
    'MH31M5768',
    '2026-01-31 13:38:17',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    6,
    '2026-01-31 13:38:18',
    '2026-01-31 13:38:18',
    'Raju',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    191,
    'GM9191',
    'Abbu Bhai',
    'MH04N6917',
    '2026-01-31 13:41:21',
    1.00,
    12000.00,
    0.00,
    6000.00,
    6000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    12,
    '2026-01-31 13:41:22',
    '2026-01-31 19:18:48',
    'Ashpak',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    192,
    'GM9192',
    'PRASAD THAKRE',
    'MH35AJ0247',
    '2026-01-31 13:41:46',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    53,
    '2026-01-31 13:41:48',
    '2026-02-01 21:56:00',
    'Sandip',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    193,
    'GM9193',
    'WASIM PATHAN',
    'MH04GR9803',
    '2026-01-31 13:42:41',
    1.00,
    11000.00,
    0.00,
    10000.00,
    1000.00,
    11000.00,
    'partial',
    'cash',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    33,
    '2026-01-31 13:42:43',
    '2026-01-31 13:42:43',
    'Golu',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    194,
    'GM9194',
    'WASIM PATHAN',
    'MH29T0288',
    '2026-01-31 13:43:04',
    1.00,
    11000.00,
    0.00,
    3000.00,
    8000.00,
    11000.00,
    'partial',
    'cash',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    33,
    '2026-01-31 13:43:06',
    '2026-01-31 13:43:06',
    'Aakash',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    195,
    'GM9195',
    'BANTY DESHMUKH',
    'MH40CM8462',
    '2026-01-31 13:45:20',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    32,
    '2026-01-31 13:45:22',
    '2026-01-31 13:45:22',
    'DHIRAJ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    196,
    'GM9196',
    'Tarik Sharik',
    'MH28B8929',
    '2026-01-31 13:46:54',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    16,
    '2026-01-31 13:46:56',
    '2026-01-31 13:46:56',
    'Dhanraj',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    197,
    'GM9197',
    'GOLU KATKAAR',
    'MH49BZ7403',
    '2026-01-31 13:47:12',
    1.00,
    10000.00,
    0.00,
    0.00,
    10000.00,
    10000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    42,
    '2026-01-31 13:47:14',
    '2026-02-03 17:52:29',
    'DASHRAT',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    198,
    'GM9198',
    'ARBAZ BHAI',
    'MH40N7150',
    '2026-01-31 13:47:52',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    36,
    '2026-01-31 13:47:54',
    '2026-01-31 13:47:54',
    'ARBAZ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    199,
    'GM9199',
    'KIRAN MATE',
    'MH29BE5904',
    '2026-01-31 13:48:20',
    1.00,
    17000.00,
    0.00,
    17000.00,
    0.00,
    17000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    17000.00,
    '',
    1,
    35,
    '2026-01-31 13:48:22',
    '2026-02-03 11:45:07',
    'VILAS',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    200,
    'GM9200',
    'SUMIT SHIRBHATE',
    'MH32Q5452',
    '2026-01-31 13:51:12',
    1.00,
    2996.00,
    0.00,
    0.00,
    2996.00,
    2996.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    2996.00,
    '',
    1,
    30,
    '2026-01-31 13:51:14',
    '2026-01-31 13:51:14',
    'RAJKUMAR',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    201,
    'GM9201',
    'Vaibhav Randive',
    'MH31CB4968',
    '2026-01-31 13:52:52',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    23,
    '2026-01-31 13:52:53',
    '2026-01-31 13:52:53',
    'LAXMAN',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    202,
    'GM9202',
    'ASLAM NA',
    'MH29BE0585',
    '2026-01-31 13:55:28',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    31,
    '2026-01-31 13:55:30',
    '2026-01-31 13:55:30',
    'KALIM',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    203,
    'GM9203',
    'RAJU NA',
    'MH31DS1106',
    '2026-01-31 13:58:12',
    1.00,
    12000.00,
    0.00,
    12000.00,
    0.00,
    12000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    24,
    '2026-01-31 13:58:14',
    '2026-02-03 11:46:20',
    'AVINASH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    204,
    'GM9204',
    'NARENDRA PATIL',
    'MH29BE4276',
    '2026-01-31 14:00:04',
    1.00,
    17000.00,
    0.00,
    17000.00,
    0.00,
    17000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    17000.00,
    '',
    1,
    25,
    '2026-01-31 14:00:05',
    '2026-02-01 10:56:49',
    'BHARAT',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    205,
    'GM9205',
    'Saddam Bhai',
    'MH29T0400',
    '2026-01-31 14:05:26',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'online',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    17,
    '2026-01-31 14:05:28',
    '2026-01-31 14:05:28',
    'Umesh',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    206,
    'GM9206',
    'Shaz Ahemad',
    'MH49AT6089',
    '2026-01-31 14:25:51',
    1.00,
    18000.00,
    0.00,
    0.00,
    18000.00,
    18000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    14,
    '2026-01-31 14:25:52',
    '2026-01-31 14:25:52',
    'kALIM',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    207,
    'GM9207',
    'Vaibhav Randive',
    'MH05AM1468',
    '2026-01-31 14:33:18',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    23,
    '2026-01-31 14:33:19',
    '2026-01-31 14:33:19',
    'AASHISH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    208,
    'GM9208',
    'Masroor Bhai ',
    'MH31-2322',
    '2026-01-31 14:34:35',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'cash',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    6,
    '2026-01-31 14:34:35',
    '2026-01-31 19:19:41',
    'NYANESHWAR',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    209,
    'GM9209',
    'VISHAL PANDARPURE',
    'MH36F1695',
    '2026-01-31 14:35:54',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    38,
    '2026-01-31 14:35:54',
    '2026-01-31 14:35:54',
    'YOGESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    210,
    'GM9210',
    'BANTY DESHMUKH',
    'MH32Q7474',
    '2026-01-31 14:37:07',
    1.00,
    10000.00,
    0.00,
    0.00,
    10000.00,
    10000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    32,
    '2026-01-31 14:37:07',
    '2026-01-31 14:37:07',
    'golu',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    211,
    'GM9211',
    'Ajay Golait',
    'MH05AM510',
    '2026-01-31 14:39:00',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'cash',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-01-31 14:39:00',
    '2026-02-03 17:43:07',
    'SANTOSH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    212,
    'GM9212',
    'Ajay Golait',
    'MH06BD7171',
    '2026-01-31 14:41:20',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-01-31 14:41:20',
    '2026-02-03 17:42:55',
    'SHUBHAM',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    213,
    'GM9213',
    'MAHI DORLI',
    'MH27DT1140',
    '2026-01-31 14:52:46',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    27,
    '2026-01-31 14:52:46',
    '2026-01-31 14:52:46',
    'NILESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    214,
    'GM9214',
    'Bharat Kale',
    'MH29BE5768',
    '2026-01-31 14:53:40',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    8,
    '2026-01-31 14:53:40',
    '2026-02-03 17:49:36',
    'Hitesh',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    215,
    'GM9215',
    'Shahebaz Bhaiya',
    'MH32Q1248',
    '2026-01-31 14:56:41',
    1.00,
    18000.00,
    0.00,
    0.00,
    18000.00,
    18000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    10,
    '2026-01-31 14:56:41',
    '2026-01-31 14:56:41',
    'munna',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    216,
    'GM9216',
    'DINESH KALE',
    'MH35AJ2031',
    '2026-01-31 15:00:02',
    1.00,
    18000.00,
    0.00,
    18000.00,
    0.00,
    18000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    41,
    '2026-01-31 15:00:02',
    '2026-01-31 15:00:02',
    'KISHOR',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    217,
    'GM9217',
    'DINESH KALE',
    'MH29BE6635',
    '2026-01-31 15:03:14',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    41,
    '2026-01-31 15:03:15',
    '2026-01-31 15:03:15',
    'RAVI',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    218,
    'GM9218',
    'NARENDRA PATIL',
    'MH29BE9076',
    '2026-01-31 15:07:35',
    1.00,
    22000.00,
    0.00,
    22000.00,
    0.00,
    22000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    22000.00,
    '',
    1,
    25,
    '2026-01-31 15:07:35',
    '2026-01-31 15:07:35',
    'MANIK',
    '12 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    219,
    'GM9219',
    'SHEKHAR SARODE',
    'MH29BD5049',
    '2026-01-31 15:18:00',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'cash',
    0.00,
    'partner',
    11000.00,
    'rehan',
    1,
    28,
    '2026-01-31 15:18:00',
    '2026-02-01 12:26:18',
    'NILESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    220,
    'GM9220',
    'Nikhil Dhote',
    'MH29AB7585',
    '2026-01-31 15:22:14',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    2,
    '2026-01-31 15:22:15',
    '2026-01-31 19:16:36',
    'Shubham ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    221,
    'GM9221',
    'KIRAN MATE',
    'MH29BE8766',
    '2026-01-31 15:32:05',
    1.00,
    22000.00,
    0.00,
    22000.00,
    0.00,
    22000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    22000.00,
    '',
    1,
    35,
    '2026-01-31 15:32:05',
    '2026-02-03 11:45:07',
    'AKHIL',
    '12 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    222,
    'GM9222',
    'Vaibhav Randive',
    'MH40CM9654',
    '2026-01-31 16:21:26',
    1.00,
    18000.00,
    0.00,
    0.00,
    18000.00,
    18000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    23,
    '2026-01-31 16:21:26',
    '2026-01-31 16:21:26',
    'Gajanan',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    223,
    'GM9223',
    'RAJU SAYYED',
    'MH04FP0309',
    '2026-01-31 17:12:37',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'online',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    44,
    '2026-01-31 17:12:37',
    '2026-01-31 17:12:37',
    'RAHUL',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    224,
    'GM9224',
    'DINESH KALE',
    'BR01GE7886',
    '2026-01-31 17:13:39',
    1.00,
    11000.00,
    0.00,
    100.00,
    10900.00,
    11000.00,
    'partial',
    'online',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    41,
    '2026-01-31 17:13:38',
    '2026-01-31 17:13:38',
    'PRAVIN',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    225,
    'GM9225',
    'NIKHIL BAWNE',
    'MH34CM1616',
    '2026-01-31 17:19:09',
    1.00,
    24000.00,
    0.00,
    24000.00,
    0.00,
    24000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    24000.00,
    '',
    1,
    43,
    '2026-01-31 17:19:09',
    '2026-01-31 17:19:09',
    'Raju',
    '12 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    226,
    'GM9226',
    'RAJAT BHOYAR',
    'MH31BC7531',
    '2026-01-31 17:21:53',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'online',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    46,
    '2026-01-31 17:21:53',
    '2026-01-31 17:21:53',
    'SHATRU',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    227,
    'GM9227',
    'Aayan Bhai',
    'MH40-7077',
    '2026-01-31 17:25:32',
    1.00,
    12000.00,
    0.00,
    12000.00,
    0.00,
    12000.00,
    'paid',
    'online',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    20,
    '2026-01-31 17:25:32',
    '2026-02-03 11:44:47',
    'Farukh',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    228,
    'GM9228',
    'Shoaib Ner',
    'MH29BT0924',
    '2026-01-31 17:27:48',
    1.00,
    12000.00,
    0.00,
    6000.00,
    6000.00,
    12000.00,
    'partial',
    'online',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    11,
    '2026-01-31 17:27:48',
    '2026-01-31 17:27:48',
    'Pappu',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    229,
    'GM9229',
    'SHAHRUKH MAREGAON',
    'MH04EL6325',
    '2026-01-31 17:31:46',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    47,
    '2026-01-31 17:31:45',
    '2026-01-31 17:41:10',
    'AEJAZ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    230,
    'GM9230',
    'SHAHRUKH MAREGAON',
    'MH34BZ9339',
    '2026-01-31 17:39:45',
    1.00,
    22000.00,
    0.00,
    22000.00,
    0.00,
    22000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    22000.00,
    '',
    1,
    47,
    '2026-01-31 17:39:44',
    '2026-01-31 17:39:44',
    'AEJAZ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    231,
    'GM9231',
    'Popat Seth ',
    'MH40Y1951',
    '2026-01-31 18:00:16',
    1.00,
    12000.00,
    0.00,
    12000.00,
    0.00,
    12000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    3,
    '2026-01-31 18:00:16',
    '2026-02-03 11:45:29',
    'Raju',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    232,
    'GM9232',
    'Popat Seth ',
    'MH29BE4455',
    '2026-01-31 18:01:43',
    1.00,
    18000.00,
    0.00,
    18000.00,
    0.00,
    18000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    3,
    '2026-01-31 18:01:43',
    '2026-02-03 11:45:29',
    'Amol',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    233,
    'GM9233',
    'Popat Seth ',
    'MH29T1667',
    '2026-01-31 18:03:32',
    1.00,
    12000.00,
    0.00,
    12000.00,
    0.00,
    12000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    3,
    '2026-01-31 18:03:31',
    '2026-02-03 11:45:29',
    'golu',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    234,
    'GM9234',
    'GOLU KATKAAR',
    'MH49BZ7403',
    '2026-01-31 18:04:56',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    42,
    '2026-01-31 18:04:56',
    '2026-01-31 18:04:56',
    'DASHRAT',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    235,
    'GM9235',
    'Bharat Kale',
    'MH40N5437',
    '2026-01-31 18:07:12',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    8,
    '2026-01-31 18:07:11',
    '2026-02-03 17:50:06',
    'Khushal',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    236,
    'GM9236',
    'KIRAN MATE',
    'MH32AK4446',
    '2026-01-31 18:08:24',
    1.00,
    17000.00,
    0.00,
    17000.00,
    0.00,
    17000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    17000.00,
    '',
    1,
    35,
    '2026-01-31 18:08:24',
    '2026-02-03 11:45:08',
    'MAHADEO',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    237,
    'GM9237',
    'KIRAN MATE',
    'MH36F1820',
    '2026-01-31 18:09:11',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    35,
    '2026-01-31 18:09:11',
    '2026-02-03 11:45:08',
    'NIKHIL',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    238,
    'GM9238',
    'SHOAIB NER',
    'MH29T1519',
    '2026-01-31 18:32:30',
    1.00,
    11000.00,
    0.00,
    6000.00,
    5000.00,
    11000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    11,
    '2026-01-31 18:32:30',
    '2026-01-31 18:32:30',
    'SHUBHAM',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    239,
    'GM9239',
    'Masroor Bhai ',
    'MH31M5768',
    '2026-01-31 18:36:15',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    6,
    '2026-01-31 18:36:15',
    '2026-01-31 18:36:15',
    'Raju',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    240,
    'GM9240',
    'BANTY DESHMUKH',
    'MH40CM8462',
    '2026-01-31 19:10:25',
    1.00,
    10000.00,
    0.00,
    0.00,
    10000.00,
    10000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    32,
    '2026-01-31 19:10:26',
    '2026-01-31 19:10:26',
    'DHIRAJ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    241,
    'GM9241',
    'KIRAN MATE',
    ' MH29T0781',
    '2026-01-31 19:11:32',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    35,
    '2026-01-31 19:11:33',
    '2026-02-03 11:45:08',
    'DINESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    242,
    'GM9242',
    'KIRAN MATE',
    'MH29BE9916',
    '2026-01-31 19:11:52',
    1.00,
    22000.00,
    0.00,
    22000.00,
    0.00,
    22000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    22000.00,
    '',
    1,
    35,
    '2026-01-31 19:11:52',
    '2026-02-03 11:45:08',
    'AAKASH',
    '12 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    243,
    'GM9243',
    'SAILESH BELEKAR',
    '8411949466',
    '2026-01-31 19:12:38',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    37,
    '2026-01-31 19:12:39',
    '2026-01-31 19:12:39',
    'DIPAK',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    244,
    'GM9244',
    'KIRAN MATE',
    'MH29BE5904',
    '2026-01-31 19:14:22',
    1.00,
    17000.00,
    0.00,
    17000.00,
    0.00,
    17000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    17000.00,
    '',
    1,
    35,
    '2026-01-31 19:14:22',
    '2026-02-03 11:45:08',
    'VILAS',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    245,
    'GM9245',
    'Pramod Press ',
    'MH31CQ8667',
    '2026-01-31 19:17:00',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    7,
    '2026-01-31 19:17:01',
    '2026-01-31 19:17:01',
    'SAHIL',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    246,
    'GM9246',
    'Pramod Press ',
    'MH29T1530',
    '2026-01-31 19:17:16',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    7,
    '2026-01-31 19:17:17',
    '2026-01-31 19:17:17',
    'Pawan',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    247,
    'GM9247',
    'PRASAD THAKRE',
    'MH35AJ0247',
    '2026-01-31 19:20:01',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    53,
    '2026-01-31 19:20:01',
    '2026-02-01 21:55:23',
    'Sandip',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    248,
    'GM9248',
    'Sohel Sayyed ',
    'MH29T1051',
    '2026-01-31 19:21:44',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    4,
    '2026-01-31 19:21:44',
    '2026-01-31 19:21:44',
    'Suraj',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    249,
    'GM9249',
    'Raju Thakre ',
    'MH32AJ6475',
    '2026-01-31 19:24:38',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    1,
    '2026-01-31 19:24:38',
    '2026-01-31 19:24:38',
    'KARTIK',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    250,
    'GM9250',
    'Raju Thakre ',
    'MH49BZ8473',
    '2026-01-31 19:24:55',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    1,
    '2026-01-31 19:24:55',
    '2026-01-31 19:24:55',
    'Pramod',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    251,
    'GM9251',
    'Shahebaz Bhaiya',
    'MH32Q1248',
    '2026-01-31 19:29:38',
    1.00,
    18000.00,
    0.00,
    0.00,
    18000.00,
    18000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    10,
    '2026-01-31 19:29:38',
    '2026-01-31 19:29:38',
    'munna',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    252,
    'GM9252',
    'Wasim Memon',
    'MH03CP1869',
    '2026-01-31 20:04:57',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'credit',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    18,
    '2026-01-31 20:04:58',
    '2026-02-01 12:44:21',
    'Kalim',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    253,
    'GM9253',
    'Tarik Sharik',
    'MH28B8929',
    '2026-01-31 20:06:57',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    16,
    '2026-01-31 20:06:58',
    '2026-01-31 20:06:58',
    'Dhanraj',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    254,
    'GM9254',
    'NIKHIL BAWNE',
    'MH34CM1616',
    '2026-01-31 20:08:20',
    1.00,
    24000.00,
    0.00,
    24000.00,
    0.00,
    24000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    24000.00,
    '',
    1,
    43,
    '2026-01-31 20:08:20',
    '2026-01-31 20:08:20',
    'Raju',
    '12 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    255,
    'GM9255',
    'WASIM PATHAN',
    'MH04GR9803',
    '2026-01-31 20:12:33',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    33,
    '2026-01-31 20:12:34',
    '2026-01-31 20:12:34',
    'Golu',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    256,
    'GM9256',
    'Aamir Babba ',
    'MH04FU3734',
    '2026-01-31 20:22:24',
    1.00,
    12000.00,
    0.00,
    6000.00,
    6000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    13,
    '2026-01-31 20:22:25',
    '2026-01-31 20:22:25',
    'Mintu dada',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    257,
    'GM9257',
    'SHAHEZAD JHON',
    'MH40N3037',
    '2026-01-31 20:22:57',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    26,
    '2026-01-31 20:22:57',
    '2026-02-03 11:46:41',
    'SALIM',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    258,
    'GM9258',
    'Ajay Golait',
    'MH29BE3577',
    '2026-01-31 20:24:05',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'cash',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-01-31 20:24:05',
    '2026-02-03 17:42:44',
    'NOORA BHAI',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    259,
    'GM9259',
    'SHEKHAR SARODE',
    'MH29BD5049',
    '2026-01-31 20:29:29',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'cash',
    0.00,
    'partner',
    11000.00,
    'Rehan',
    1,
    28,
    '2026-01-31 20:29:30',
    '2026-02-01 12:26:11',
    'NILESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    260,
    'GM9260',
    'Shaz Ahemad',
    'MH49AT6089',
    '2026-01-31 20:45:21',
    1.00,
    18000.00,
    0.00,
    0.00,
    18000.00,
    18000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    14,
    '2026-01-31 20:45:22',
    '2026-01-31 20:45:22',
    'kALIM',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    261,
    'GM9261',
    'Shahrukh Pathan',
    'MH40T0135',
    '2026-01-31 20:52:30',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    9,
    '2026-01-31 20:52:31',
    '2026-01-31 20:52:31',
    'SHANKAR',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    262,
    'GM9262',
    'Sahil Sayyed ',
    'MH40L1629',
    '2026-01-31 20:52:52',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    5,
    '2026-01-31 20:52:52',
    '2026-01-31 20:52:52',
    'Mohan',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    263,
    'GM9263',
    'Bharat Kale',
    'MH29BE5768',
    '2026-01-31 20:53:51',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    8,
    '2026-01-31 20:53:52',
    '2026-02-03 17:50:14',
    'Hitesh',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    264,
    'GM9264',
    'Nikhil Dhote',
    'MH29AB7585',
    '2026-01-31 21:02:37',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'credit',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    2,
    '2026-01-31 21:02:38',
    '2026-02-04 21:22:47',
    'Shubham ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    265,
    'GM9265',
    'Ajay Golait',
    'MH05AM510',
    '2026-01-31 21:29:00',
    1.00,
    11000.00,
    0.00,
    8000.00,
    3000.00,
    11000.00,
    'partial',
    'cash',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-01-31 21:29:00',
    '2026-02-03 17:41:51',
    'SANTOSH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    266,
    'GM9266',
    'SUMIT SHIRBHATE',
    'MH40Y0075',
    '2026-01-31 21:29:21',
    1.00,
    11000.00,
    0.00,
    3000.00,
    8000.00,
    11000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    30,
    '2026-01-31 21:29:22',
    '2026-01-31 21:29:22',
    'KISHAN',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    267,
    'GM9267',
    'BANTY DESHMUKH',
    'MH32Q7474',
    '2026-01-31 21:29:42',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    32,
    '2026-01-31 21:29:42',
    '2026-01-31 21:29:42',
    'golu',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    268,
    'GM9268',
    'DINESH KALE',
    'BR01GE7886',
    '2026-01-31 22:21:33',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'online',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    41,
    '2026-01-31 22:21:33',
    '2026-01-31 22:21:33',
    'PRAVIN',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    269,
    'GM9269',
    'RAJU NA',
    'MH31DS1106',
    '2026-01-31 22:34:25',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'online',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    24,
    '2026-01-31 22:34:26',
    '2026-02-03 11:46:20',
    'AVINASH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    270,
    'GM9270',
    'Dinesh Landge',
    'MH29T0640',
    '2026-01-31 23:08:34',
    1.00,
    12000.00,
    0.00,
    10000.00,
    2000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    12000.00,
    'Rehan ko dega',
    1,
    48,
    '2026-01-31 23:08:35',
    '2026-01-31 23:08:35',
    'Avduth',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    271,
    'GM9271',
    'Bharat Kale',
    'MH40N5437',
    '2026-02-01 08:11:36',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    8,
    '2026-02-01 08:11:36',
    '2026-02-03 17:50:21',
    'Khushal',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    272,
    'GM9272',
    'Raju Thakre ',
    'MH32AJ6475',
    '2026-02-01 08:11:58',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    1,
    '2026-02-01 08:11:58',
    '2026-02-01 08:11:58',
    'KARTIK',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    273,
    'GM9273',
    'JIVNE BABU',
    'MH32F1990',
    '2026-02-01 08:12:53',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    29,
    '2026-02-01 08:12:53',
    '2026-02-01 08:12:53',
    'BABA',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    274,
    'GM9274',
    'JIVNE BABU',
    'MH02C8007',
    '2026-02-01 08:13:12',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    29,
    '2026-02-01 08:13:12',
    '2026-02-01 08:13:12',
    'BABA',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    275,
    'GM9275',
    'GOLU KATKAAR',
    'MH49BZ7403',
    '2026-02-01 08:14:15',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    42,
    '2026-02-01 08:14:16',
    '2026-02-01 08:14:16',
    'DASHRAT',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    276,
    'GM9276',
    'GOLU KATKAAR',
    'MH49BZ7403',
    '2026-02-01 08:14:46',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    42,
    '2026-02-01 08:14:46',
    '2026-02-01 08:14:46',
    'DASHRAT',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    277,
    'GM9277',
    'Sahil Sayyed ',
    'MH40L1629',
    '2026-02-01 18:56:14',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    5,
    '2026-02-01 18:56:16',
    '2026-02-01 18:56:16',
    'Mohan',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    278,
    'GM9278',
    'Popat Seth ',
    'MH29T1667',
    '2026-02-01 19:18:37',
    1.00,
    12000.00,
    0.00,
    12000.00,
    0.00,
    12000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    3,
    '2026-02-01 19:18:39',
    '2026-02-03 11:45:29',
    'golu',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    279,
    'GM9279',
    'Raju Thakre ',
    'MH49BZ8473',
    '2026-02-01 19:18:53',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    1,
    '2026-02-01 19:18:54',
    '2026-02-01 19:18:54',
    'Pramod',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    280,
    'GM9280',
    'Aamir Babba ',
    'MH04FU3734',
    '2026-02-01 19:38:31',
    1.00,
    12000.00,
    0.00,
    6000.00,
    6000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    13,
    '2026-02-01 19:38:33',
    '2026-02-01 19:38:33',
    'Mintu dada',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    281,
    'GM9281',
    'RAJU NA',
    'MH40CM1344',
    '2026-02-01 19:39:30',
    1.00,
    12000.00,
    0.00,
    6000.00,
    6000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    12000.00,
    '',
    0,
    24,
    '2026-02-01 19:39:32',
    '2026-02-01 22:10:51',
    'SHER KHAN',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    282,
    'GM9282',
    'RAJU NA',
    'MH40CM1344',
    '2026-02-01 19:39:31',
    1.00,
    18000.00,
    0.00,
    18000.00,
    0.00,
    18000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    24,
    '2026-02-01 19:39:33',
    '2026-02-03 11:46:20',
    'SHER KHAN',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    283,
    'GM9283',
    'Masroor Bhai ',
    'MH31M5768',
    '2026-02-01 19:41:34',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    6,
    '2026-02-01 19:41:36',
    '2026-02-01 19:41:36',
    'Raju',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    284,
    'GM9284',
    'Ravi H',
    'MH40N7526',
    '2026-02-01 19:42:36',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    15,
    '2026-02-01 19:42:38',
    '2026-02-01 19:42:38',
    'Gajanan',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    285,
    'GM9285',
    'Tarik Sharik',
    'MH28B8929',
    '2026-02-01 19:43:32',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    16,
    '2026-02-01 19:43:34',
    '2026-02-01 19:43:34',
    'Dhanraj',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    286,
    'GM9286',
    'RAJU NA',
    'MH31DS1106',
    '2026-02-01 19:45:39',
    1.00,
    12000.00,
    0.00,
    12000.00,
    0.00,
    12000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    24,
    '2026-02-01 19:45:40',
    '2026-02-03 11:46:20',
    'AVINASH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    287,
    'GM9287',
    'Wasim Memon',
    'MH03CP1869',
    '2026-02-01 19:47:28',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'credit',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    18,
    '2026-02-01 19:47:30',
    '2026-02-04 21:13:35',
    'Kalim',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    288,
    'GM9288',
    'Sohel Sayyed ',
    'MH29T1051',
    '2026-02-01 19:48:51',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'online',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    4,
    '2026-02-01 19:48:53',
    '2026-02-01 19:48:53',
    'Suraj',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    289,
    'GM9289',
    'SHAZ AHMAD',
    'TN91L8190',
    '2026-02-01 19:50:28',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    40,
    '2026-02-01 19:50:30',
    '2026-02-01 19:50:30',
    'PANKAJ',
    '12 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    290,
    'GM9290',
    'BANTY DESHMUKH',
    'MH32Q7474',
    '2026-02-01 19:51:53',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'online',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    32,
    '2026-02-01 19:51:54',
    '2026-02-01 19:51:54',
    'golu',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    291,
    'GM9291',
    'Pramod Press ',
    'MH31CQ8667',
    '2026-02-01 19:52:40',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    7,
    '2026-02-01 19:52:42',
    '2026-02-01 19:52:42',
    'SAHIL',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    292,
    'GM9292',
    'Raju Thakre ',
    'MH49BZ8473',
    '2026-02-01 19:53:59',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    1,
    '2026-02-01 19:54:01',
    '2026-02-01 19:54:01',
    'Pramod',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    293,
    'GM9293',
    'Raju Thakre ',
    'MH32AJ6475',
    '2026-02-01 19:54:49',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    1,
    '2026-02-01 19:54:50',
    '2026-02-01 19:54:50',
    'KARTIK',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    294,
    'GM9294',
    'KIRAN MATE',
    'MH29BE5904',
    '2026-02-01 19:57:31',
    1.00,
    17000.00,
    0.00,
    17000.00,
    0.00,
    17000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    17000.00,
    '',
    1,
    35,
    '2026-02-01 19:57:33',
    '2026-02-01 19:57:33',
    'VILAS',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    295,
    'GM9295',
    'GOLU KATKAAR',
    'MH49BZ7403',
    '2026-02-01 19:58:52',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    42,
    '2026-02-01 19:58:54',
    '2026-02-01 19:58:54',
    'DASHRAT',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    296,
    'GM9296',
    'RAZZAK BHAI',
    'MH 31CB 7531',
    '2026-02-01 20:01:30',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    49,
    '2026-02-01 20:01:31',
    '2026-02-01 20:01:31',
    NULL,
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    297,
    'GM9297',
    'Abbu Bhai',
    'MH49AT7175',
    '2026-02-01 20:03:05',
    1.00,
    18000.00,
    0.00,
    0.00,
    18000.00,
    18000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    12,
    '2026-02-01 20:03:07',
    '2026-02-01 20:04:32',
    'Mama',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    298,
    'GM9298',
    'Abbu Bhai',
    'MH29-3977',
    '2026-02-01 20:05:54',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    12,
    '2026-02-01 20:05:56',
    '2026-02-01 20:05:56',
    'Mama',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    299,
    'GM9299',
    'ROMU FUTANE',
    'MH 32 AJ 4276',
    '2026-02-01 20:10:13',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    50,
    '2026-02-01 20:10:15',
    '2026-02-01 20:10:15',
    NULL,
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    300,
    'GM9300',
    'SAILESH BELEKAR',
    '8411949466',
    '2026-02-01 20:11:26',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    37,
    '2026-02-01 20:11:28',
    '2026-02-01 20:11:28',
    'DIPAK',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    301,
    'GM9301',
    'VISHAL PANDARPURE',
    'MH36F1695',
    '2026-02-01 20:12:28',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    38,
    '2026-02-01 20:12:30',
    '2026-02-01 20:12:30',
    'YOGESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    302,
    'GM9302',
    'KIRAN MATE',
    'MH29BE8766',
    '2026-02-01 20:13:46',
    1.00,
    22000.00,
    0.00,
    22000.00,
    0.00,
    22000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    22000.00,
    '',
    1,
    35,
    '2026-02-01 20:13:48',
    '2026-02-01 20:13:48',
    'AKHIL',
    '12 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    303,
    'GM9303',
    'WASIM PATHAN',
    'MH04GR9803',
    '2026-02-01 20:15:10',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    33,
    '2026-02-01 20:15:12',
    '2026-02-01 20:15:12',
    'Golu',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    304,
    'GM9304',
    'MAHI DORLI',
    'MH27DT1140',
    '2026-02-01 20:16:18',
    1.00,
    12000.00,
    0.00,
    3000.00,
    9000.00,
    12000.00,
    'partial',
    'online',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    27,
    '2026-02-01 20:16:20',
    '2026-02-01 20:16:20',
    'NILESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    305,
    'GM9305',
    'Popat Seth ',
    'MH29T1667',
    '2026-02-01 20:17:15',
    1.00,
    12000.00,
    0.00,
    12000.00,
    0.00,
    12000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    3,
    '2026-02-01 20:17:17',
    '2026-02-03 11:45:29',
    'golu',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    306,
    'GM9306',
    'SHAHRUKH MAREGAON',
    'MH34BZ9339',
    '2026-02-01 20:19:03',
    1.00,
    22000.00,
    0.00,
    22000.00,
    0.00,
    22000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    20500.00,
    '',
    1,
    47,
    '2026-02-01 20:19:05',
    '2026-02-01 21:41:11',
    'AEJAZ',
    '12 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    307,
    'GM9307',
    'DINESH KALE',
    'MH29BE6635',
    '2026-02-01 20:20:07',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    41,
    '2026-02-01 20:20:09',
    '2026-02-01 20:20:09',
    'RAVI',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    308,
    'GM9308',
    'DINESH KALE',
    'MH29BE6635',
    '2026-02-01 20:20:07',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    0,
    41,
    '2026-02-01 20:20:09',
    '2026-02-01 22:17:23',
    'RAVI',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    309,
    'GM9309',
    'Popat Seth ',
    'MH40Y1951',
    '2026-02-01 20:21:04',
    1.00,
    12000.00,
    0.00,
    12000.00,
    0.00,
    12000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    11997.00,
    '',
    1,
    3,
    '2026-02-01 20:21:06',
    '2026-02-03 11:45:29',
    'Raju',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    310,
    'GM9310',
    'Popat Seth ',
    'MH29BE4455',
    '2026-02-01 20:22:59',
    1.00,
    18000.00,
    0.00,
    18000.00,
    0.00,
    18000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    3,
    '2026-02-01 20:23:01',
    '2026-02-03 11:45:29',
    'Amol',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    311,
    'GM9311',
    'Nikhil Dhote',
    'MH29AB7585',
    '2026-02-01 20:24:12',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'online',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    2,
    '2026-02-01 20:24:13',
    '2026-02-01 20:24:13',
    'Shubham ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    312,
    'GM9312',
    'PRASAD THAKRE',
    'MH35AJ0247',
    '2026-02-01 20:24:54',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    53,
    '2026-02-01 20:24:56',
    '2026-02-01 21:55:07',
    'Sandip',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    313,
    'GM9313',
    'SHAHRUKH MAREGAON',
    'MH04EL6325',
    '2026-02-01 20:27:27',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    47,
    '2026-02-01 20:27:29',
    '2026-02-01 20:27:29',
    'AEJAZ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    314,
    'GM9314',
    'JIVNE BABU',
    'MH32F1990',
    '2026-02-01 20:28:10',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    29,
    '2026-02-01 20:28:12',
    '2026-02-01 22:19:03',
    'BABA',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    315,
    'GM9315',
    'JIVNE BABU',
    'MH02C8007',
    '2026-02-01 20:28:57',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    29,
    '2026-02-01 20:28:58',
    '2026-02-01 22:19:23',
    'BABA',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    316,
    'GM9316',
    'KIRAN MATE',
    'MH36F1820',
    '2026-02-01 20:31:55',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    35,
    '2026-02-01 20:31:57',
    '2026-02-03 11:45:08',
    'NIKHIL',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    317,
    'GM9317',
    'KIRAN MATE',
    'MH32AK4446',
    '2026-02-01 20:33:00',
    1.00,
    17000.00,
    0.00,
    17000.00,
    0.00,
    17000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    17000.00,
    '',
    1,
    35,
    '2026-02-01 20:33:01',
    '2026-02-03 11:45:08',
    'MAHADEO',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    318,
    'GM9318',
    'DINESH KALE',
    'BR01GE7886',
    '2026-02-01 20:34:15',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    41,
    '2026-02-01 20:34:17',
    '2026-02-01 20:34:17',
    'PRAVIN',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    319,
    'GM9319',
    'KIRAN MATE',
    'MH29BE9916',
    '2026-02-01 20:35:16',
    1.00,
    22000.00,
    0.00,
    22000.00,
    0.00,
    22000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    22000.00,
    '',
    1,
    35,
    '2026-02-01 20:35:18',
    '2026-02-03 11:45:08',
    'AAKASH',
    '12 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    320,
    'GM9320',
    'Shahezad Bhaya',
    'MH27BX5006',
    '2026-02-01 20:36:04',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    21,
    '2026-02-01 20:36:05',
    '2026-02-01 20:36:05',
    'SANTOSH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    321,
    'GM9321',
    'BANTY DESHMUKH',
    'MH40CM8462',
    '2026-02-01 20:36:51',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'online',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    32,
    '2026-02-01 20:36:53',
    '2026-02-01 20:36:53',
    'DHIRAJ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    322,
    'GM9322',
    'Bharat Kale',
    'MH40N5437',
    '2026-02-01 20:37:33',
    1.00,
    11000.00,
    0.00,
    8000.00,
    3000.00,
    11000.00,
    'partial',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    8,
    '2026-02-01 20:37:35',
    '2026-02-03 17:50:48',
    'Khushal',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    323,
    'GM9323',
    'Shoaib Ner',
    'MH29BT0924',
    '2026-02-01 20:39:00',
    1.00,
    12000.00,
    0.00,
    6000.00,
    6000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    11,
    '2026-02-01 20:39:02',
    '2026-02-01 20:39:02',
    'Pappu',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    324,
    'GM9324',
    'SHEKHAR SARODE',
    'MH29BD5049',
    '2026-02-01 20:40:19',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    28,
    '2026-02-01 20:40:21',
    '2026-02-01 20:40:21',
    'NILESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    325,
    'GM9325',
    'KIRAN MATE',
    ' MH29T0781',
    '2026-02-01 20:41:34',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    35,
    '2026-02-01 20:41:35',
    '2026-02-02 15:06:42',
    'DINESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    326,
    'GM9326',
    'Pramod Press ',
    'MH29T1530',
    '2026-02-01 20:42:40',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    7,
    '2026-02-01 20:42:42',
    '2026-02-01 20:42:42',
    'Pawan',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    327,
    'GM9327',
    'GANESH SHIRSAGAR',
    'MH04EB7139',
    '2026-02-01 20:45:31',
    1.00,
    12000.00,
    0.00,
    10000.00,
    2000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    39,
    '2026-02-01 20:45:33',
    '2026-02-01 22:21:21',
    'SACHIIN',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    328,
    'GM9328',
    'Sahil Sayyed ',
    'MH40L1629',
    '2026-02-01 20:46:33',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    5,
    '2026-02-01 20:46:35',
    '2026-02-01 20:46:35',
    'Mohan',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    329,
    'GM9329',
    'RAJU SAYYED',
    'MH04FP0309',
    '2026-02-01 20:47:44',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    44,
    '2026-02-01 20:47:46',
    '2026-02-01 20:47:46',
    'RAHUL',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    330,
    'GM9330',
    'Shaz Ahemad',
    'MH49AT6089',
    '2026-02-01 20:49:11',
    1.00,
    18000.00,
    0.00,
    0.00,
    18000.00,
    18000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    14,
    '2026-02-01 20:49:13',
    '2026-02-01 20:49:13',
    'kALIM',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    331,
    'GM9331',
    'NILESH BELEKAR',
    'MH27X 5695',
    '2026-02-01 20:52:40',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'online',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    51,
    '2026-02-01 20:52:42',
    '2026-02-01 20:52:42',
    'DIPAK',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    332,
    'GM9332',
    'NILESH BELEKAR',
    'MH37J1383',
    '2026-02-01 20:55:50',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'online',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    51,
    '2026-02-01 20:55:52',
    '2026-02-01 20:55:52',
    'AAKASH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    333,
    'GM9333',
    'BANTY DESHMUKH',
    'MH32Q7474',
    '2026-02-01 20:56:31',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    32,
    '2026-02-01 20:56:33',
    '2026-02-01 20:56:33',
    'golu',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    334,
    'GM9334',
    'SANJAY KUBADE',
    'MH32AJ3314',
    '2026-02-01 20:59:26',
    1.00,
    12000.00,
    0.00,
    11000.00,
    1000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    52,
    '2026-02-01 20:59:28',
    '2026-02-02 13:33:27',
    'SANDIP',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    335,
    'GM9335',
    'SANJAY KUBADE',
    'MH32AJ3314',
    '2026-02-01 21:01:46',
    1.00,
    12000.00,
    0.00,
    1000.00,
    11000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    12000.00,
    '',
    0,
    52,
    '2026-02-01 21:01:47',
    '2026-02-02 12:58:03',
    'SANDIP',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    336,
    'GM9336',
    'Popat Seth ',
    'MH40Y1951',
    '2026-02-01 21:03:21',
    1.00,
    12000.00,
    0.00,
    12000.00,
    0.00,
    12000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    3,
    '2026-02-01 21:03:23',
    '2026-02-03 11:45:29',
    'Raju',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    337,
    'GM9337',
    'Popat Seth ',
    'MH40Y1951',
    '2026-02-01 21:05:07',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    0,
    3,
    '2026-02-01 21:05:09',
    '2026-02-02 12:57:40',
    'Raju',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    338,
    'GM9338',
    'Popat Seth ',
    'MH29T1667',
    '2026-02-01 21:06:06',
    1.00,
    12000.00,
    0.00,
    12000.00,
    0.00,
    12000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    3,
    '2026-02-01 21:06:08',
    '2026-02-03 11:45:29',
    'golu',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    339,
    'GM9339',
    'Popat Seth ',
    'MH29BE4455',
    '2026-02-01 21:07:30',
    1.00,
    18000.00,
    0.00,
    18000.00,
    0.00,
    18000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '10 TYRE HAI Sanjay ne Galti se 6 TYRE kiya',
    1,
    3,
    '2026-02-01 21:07:31',
    '2026-02-03 11:45:29',
    'Amol',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    340,
    'GM9340',
    'GOLU KATKAAR',
    'MH49BZ7403',
    '2026-02-01 21:08:18',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    42,
    '2026-02-01 21:08:20',
    '2026-02-01 21:08:20',
    'DASHRAT',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    341,
    'GM9341',
    'VISHAL PANDARPURE',
    'MH36F1695',
    '2026-02-01 21:09:04',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    38,
    '2026-02-01 21:09:06',
    '2026-02-01 21:09:06',
    'YOGESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    342,
    'GM9342',
    'Sohel Sayyed ',
    'MH29T1051',
    '2026-02-01 21:09:41',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    4,
    '2026-02-01 21:09:42',
    '2026-02-01 21:09:42',
    'Suraj',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    343,
    'GM9343',
    'RAJAT BHOYAR',
    'MH31BC7531',
    '2026-02-01 21:10:34',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    46,
    '2026-02-01 21:10:36',
    '2026-02-01 21:10:36',
    'SHATRU',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    344,
    'GM9344',
    'PRASAD THAKRE',
    'MH35AJ0247',
    '2026-02-01 21:11:25',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    53,
    '2026-02-01 21:11:27',
    '2026-02-01 21:55:00',
    'Sandip',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    345,
    'GM9345',
    'ROMU FUTANE',
    'MH 32 AJ 4276',
    '2026-02-01 21:12:26',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    50,
    '2026-02-01 21:12:28',
    '2026-02-01 22:33:01',
    'BHARAT',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    346,
    'GM9346',
    'Tarik Sharik',
    'MH28B8929',
    '2026-02-01 21:13:19',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    16,
    '2026-02-01 21:13:21',
    '2026-02-01 21:13:21',
    'Dhanraj',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    347,
    'GM9347',
    'Nikhil Dhote',
    'MH29AB7585',
    '2026-02-01 21:14:10',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    2,
    '2026-02-01 21:14:12',
    '2026-02-01 21:14:12',
    'Shubham ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    348,
    'GM9348',
    'Bharat Kale',
    'MH29BE5768',
    '2026-02-01 21:15:01',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    8,
    '2026-02-01 21:15:03',
    '2026-02-01 21:15:03',
    'Hitesh',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    349,
    'GM9349',
    'Ajay Golait',
    'MH05AM510',
    '2026-02-01 21:17:51',
    1.00,
    11000.00,
    0.00,
    3000.00,
    8000.00,
    11000.00,
    'partial',
    'cash',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-02-01 21:17:53',
    '2026-02-01 21:17:53',
    'SANTOSH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    350,
    'GM9350',
    'SAILESH BELEKAR',
    '8411949466',
    '2026-02-01 21:19:30',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    37,
    '2026-02-01 21:19:32',
    '2026-02-01 21:19:32',
    'DIPAK',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    351,
    'GM9351',
    'SAILESH BELEKAR',
    '8411949466',
    '2026-02-01 21:19:30',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    0,
    37,
    '2026-02-01 21:19:32',
    '2026-02-02 12:57:21',
    'DIPAK',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    352,
    'GM9352',
    'WASIM PATHAN',
    'MH04GR9803',
    '2026-02-01 21:20:35',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    33,
    '2026-02-01 21:20:37',
    '2026-02-01 21:20:37',
    'Golu',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    353,
    'GM9353',
    'JIVNE BABU',
    'MH32F1990',
    '2026-02-01 21:21:31',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    29,
    '2026-02-01 21:21:33',
    '2026-02-01 21:21:33',
    'BABA',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    354,
    'GM9354',
    'BANTY DESHMUKH',
    'MH32Q7474',
    '2026-02-01 21:22:16',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    32,
    '2026-02-01 21:22:18',
    '2026-02-01 21:22:18',
    'golu',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    355,
    'GM9355',
    'Raju Thakre ',
    'MH49BZ8473',
    '2026-02-01 21:23:05',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    1,
    '2026-02-01 21:23:07',
    '2026-02-01 21:23:07',
    'Pramod',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    356,
    'GM9356',
    'RAJU NA',
    'MH31DS1106',
    '2026-02-01 21:25:05',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    24,
    '2026-02-01 21:25:07',
    '2026-02-03 11:46:20',
    'AVINASH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    357,
    'GM9357',
    'Wasim Memon',
    'MH03CP1869',
    '2026-02-01 21:26:04',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'credit',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    18,
    '2026-02-01 21:26:06',
    '2026-02-04 21:13:38',
    'Kalim',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    358,
    'GM9358',
    'MAHI DORLI',
    'MH27DT1140',
    '2026-02-01 21:27:18',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    27,
    '2026-02-01 21:27:20',
    '2026-02-01 21:27:20',
    'NILESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    359,
    'GM9359',
    'DINESH KALE',
    'MH29BE6635',
    '2026-02-01 21:28:12',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    41,
    '2026-02-01 21:28:14',
    '2026-02-01 21:28:14',
    'RAVI',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    360,
    'GM9360',
    'Raju Thakre ',
    'MH32AJ6475',
    '2026-02-01 21:28:59',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    1,
    '2026-02-01 21:29:00',
    '2026-02-01 21:29:00',
    'KARTIK',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    361,
    'GM9361',
    'Pramod Press ',
    'MH29T1530',
    '2026-02-01 21:29:52',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    7,
    '2026-02-01 21:29:53',
    '2026-02-01 21:29:53',
    'Pawan',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    362,
    'GM9362',
    'JIVNE BABU',
    'MH02C8007',
    '2026-02-01 21:31:20',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    29,
    '2026-02-01 21:31:22',
    '2026-02-01 21:31:22',
    'BABA',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    363,
    'GM9363',
    'KIRAN MATE',
    'MH29BE9916',
    '2026-02-01 21:32:25',
    1.00,
    22000.00,
    0.00,
    22000.00,
    0.00,
    22000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    22000.00,
    '',
    1,
    35,
    '2026-02-01 21:32:27',
    '2026-02-03 11:45:08',
    'AAKASH',
    '12 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    364,
    'GM9364',
    'BANTY DESHMUKH',
    'MH40CM8462',
    '2026-02-01 21:33:34',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    32,
    '2026-02-01 21:33:36',
    '2026-02-01 21:33:36',
    'DHIRAJ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    365,
    'GM9365',
    'KIRAN MATE',
    'MH36F1820',
    '2026-02-01 21:35:11',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    35,
    '2026-02-01 21:35:13',
    '2026-02-03 11:45:08',
    'NIKHIL',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    366,
    'GM9366',
    'Popat Seth ',
    'MH40Y1951',
    '2026-02-01 21:37:11',
    1.00,
    12000.00,
    0.00,
    12000.00,
    0.00,
    12000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    3,
    '2026-02-01 21:37:13',
    '2026-02-03 11:45:29',
    'Raju',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    367,
    'GM9367',
    'Popat Seth ',
    'MH29BE4455',
    '2026-02-01 21:43:46',
    1.00,
    18000.00,
    0.00,
    18000.00,
    0.00,
    18000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    3,
    '2026-02-01 21:43:48',
    '2026-02-03 11:45:29',
    'Amol',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    368,
    'GM9368',
    'Popat Seth ',
    'MH29T1667',
    '2026-02-01 21:44:34',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '6 tyre 9000,10 Tyre 16000 ke hisab se paid 1/02/ 2026 tak nil 1 gadi ka check karna baki hai  Test',
    1,
    3,
    '2026-02-01 21:44:36',
    '2026-02-03 12:49:28',
    'golu',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    369,
    'GM9369',
    'Nikhil Dhote',
    'MH29AB7585',
    '2026-02-01 21:45:48',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    2,
    '2026-02-01 21:45:50',
    '2026-02-01 21:45:50',
    'Shubham ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    370,
    'GM9370',
    'KIRAN MATE',
    'MH32AK4446',
    '2026-02-01 21:48:20',
    1.00,
    17000.00,
    0.00,
    17000.00,
    0.00,
    17000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    17000.00,
    '',
    1,
    35,
    '2026-02-01 21:48:22',
    '2026-02-03 11:45:08',
    'MAHADEO',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    371,
    'GM9371',
    'SHAZ AHMAD',
    'TN91L8190',
    '2026-02-01 21:48:48',
    1.00,
    24000.00,
    0.00,
    0.00,
    24000.00,
    24000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    24000.00,
    '',
    1,
    40,
    '2026-02-01 21:48:50',
    '2026-02-01 21:48:50',
    'PANKAJ',
    '12 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    372,
    'GM9372',
    'ROMU FUTANE',
    'MH 32 AJ 4276',
    '2026-02-01 21:49:20',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    50,
    '2026-02-01 21:49:22',
    '2026-02-01 21:49:22',
    NULL,
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    373,
    'GM9373',
    'RAJAT BHOYAR',
    'MH31BC7531',
    '2026-02-01 21:49:44',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    46,
    '2026-02-01 21:49:45',
    '2026-02-01 21:49:45',
    'SHATRU',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    374,
    'GM9374',
    'SHAHRUKH MAREGAON',
    'MH34BZ9339',
    '2026-02-01 21:50:18',
    1.00,
    22000.00,
    0.00,
    22000.00,
    0.00,
    22000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    22000.00,
    '',
    1,
    47,
    '2026-02-01 21:50:20',
    '2026-02-01 21:50:20',
    'AEJAZ',
    '12 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    375,
    'GM9375',
    'VISHAL PANDARPURE',
    'MH36F1695',
    '2026-02-01 21:51:06',
    1.00,
    10000.00,
    0.00,
    0.00,
    10000.00,
    10000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    38,
    '2026-02-01 21:51:08',
    '2026-02-01 21:51:08',
    'YOGESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    376,
    'GM9376',
    'PRASAD THAKRE',
    'MH35AJ0247',
    '2026-02-01 21:54:11',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    53,
    '2026-02-01 21:54:13',
    '2026-02-01 21:54:13',
    'Sandip',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    377,
    'GM9377',
    'SHEKHAR SARODE',
    'MH29BD5049',
    '2026-02-01 22:38:13',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    28,
    '2026-02-01 22:38:15',
    '2026-02-01 22:38:15',
    'NILESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    378,
    'GM9378',
    'SHAHRUKH MAREGAON',
    'MH04EL6325',
    '2026-02-01 23:44:33',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    47,
    '2026-02-01 23:44:35',
    '2026-02-01 23:44:35',
    'AEJAZ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    379,
    'GM9379',
    'Ajay Golait',
    'MH05AM510',
    '2026-02-03 14:54:59',
    1.00,
    11000.00,
    0.00,
    3000.00,
    8000.00,
    11000.00,
    'partial',
    'cash',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-02-03 14:54:59',
    '2026-02-03 14:54:59',
    'SANTOSH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    380,
    'GM9380',
    'VILAS THAKRE',
    'MH49 0710',
    '2026-02-03 14:57:09',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    54,
    '2026-02-03 14:57:09',
    '2026-02-03 14:57:09',
    'KALIPNATH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    381,
    'GM9381',
    'Saddam Bhai',
    'MH29T0400',
    '2026-02-03 14:59:06',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'online',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    17,
    '2026-02-03 14:59:06',
    '2026-02-03 16:39:29',
    'Umesh',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    382,
    'GM9382',
    'RAJU NA',
    'MH31DS1106',
    '2026-02-03 14:59:43',
    1.00,
    10000.00,
    0.00,
    3000.00,
    7000.00,
    10000.00,
    'partial',
    'online',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    24,
    '2026-02-03 14:59:43',
    '2026-02-03 14:59:43',
    'AVINASH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    383,
    'GM9383',
    'Pramod Press ',
    'MH29T1530',
    '2026-02-03 15:00:08',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    7,
    '2026-02-03 15:00:08',
    '2026-02-03 15:00:08',
    'Pawan',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    384,
    'GM9384',
    'Pramod Press ',
    'MH31CQ8667',
    '2026-02-03 15:01:07',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    7,
    '2026-02-03 15:01:07',
    '2026-02-03 15:01:07',
    'SAHIL',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    385,
    'GM9385',
    'NARENDRA PATIL',
    'MH29T0976',
    '2026-02-03 15:02:31',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    25,
    '2026-02-03 15:02:31',
    '2026-02-03 15:02:31',
    'MAHADEO',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    386,
    'GM9386',
    'ASLAM NA',
    'MH29BE0585',
    '2026-02-03 15:02:53',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    31,
    '2026-02-03 15:02:53',
    '2026-02-03 15:02:53',
    'KALIM',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    387,
    'GM9387',
    'CHAND BHAI',
    'MH29T2322',
    '2026-02-03 15:03:51',
    1.00,
    12000.00,
    0.00,
    3000.00,
    9000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    55,
    '2026-02-03 15:03:51',
    '2026-02-03 15:03:51',
    'NYANESHWAR',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    388,
    'GM9388',
    'Ajay Golait',
    'MH06BD7171',
    '2026-02-03 15:04:07',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-02-03 15:04:07',
    '2026-02-03 15:04:07',
    'SHUBHAM',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    389,
    'GM9389',
    'NARENDRA PATIL',
    'MH29BE4276',
    '2026-02-03 15:04:48',
    1.00,
    17000.00,
    0.00,
    17000.00,
    0.00,
    17000.00,
    'paid',
    'credit',
    0.00,
    'regular',
    16998.00,
    '',
    1,
    25,
    '2026-02-03 15:04:48',
    '2026-02-03 16:40:13',
    'BHARAT',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    390,
    'GM9390',
    'WASIM PATHAN',
    'MH04GR9803',
    '2026-02-03 15:05:43',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'online',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    33,
    '2026-02-03 15:05:43',
    '2026-02-03 15:05:43',
    'Golu',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    391,
    'GM9391',
    'SHAHEZAD JHON',
    'MH40N3037',
    '2026-02-03 15:06:00',
    1.00,
    10000.00,
    0.00,
    3000.00,
    7000.00,
    10000.00,
    'partial',
    'online',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    26,
    '2026-02-03 15:06:00',
    '2026-02-03 15:06:00',
    'SALIM',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    392,
    'GM9392',
    'Raju Thakre ',
    'MH32AJ6475',
    '2026-02-03 15:06:40',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    1,
    '2026-02-03 15:06:40',
    '2026-02-03 15:06:40',
    'KARTIK',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    393,
    'GM9393',
    'Sohel Sayyed ',
    'MH29T1051',
    '2026-02-03 15:07:06',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'online',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    4,
    '2026-02-03 15:07:06',
    '2026-02-03 16:40:53',
    'Suraj',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    394,
    'GM9394',
    'Bharat Kale',
    'MH40N5437',
    '2026-02-03 15:07:25',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    8,
    '2026-02-03 15:07:25',
    '2026-02-03 15:07:25',
    'Khushal',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    395,
    'GM9395',
    'JIVNE BABU',
    'MH02C8007',
    '2026-02-03 15:07:52',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    29,
    '2026-02-03 15:07:52',
    '2026-02-03 15:07:52',
    'BABA',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    396,
    'GM9396',
    'WASIM PATHAN',
    'MH29T0288',
    '2026-02-03 15:08:20',
    1.00,
    10000.00,
    0.00,
    3000.00,
    7000.00,
    10000.00,
    'partial',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    33,
    '2026-02-03 15:08:20',
    '2026-02-03 15:08:20',
    'Aakash',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    397,
    'GM9397',
    'RAJAT BHOYAR',
    'MH31BC7531',
    '2026-02-03 15:09:47',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    46,
    '2026-02-03 15:09:47',
    '2026-02-03 15:09:47',
    'SHATRU',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    398,
    'GM9398',
    'Raju Thakre ',
    'MH49BZ8473',
    '2026-02-03 15:10:22',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    1,
    '2026-02-03 15:10:22',
    '2026-02-03 15:10:22',
    'Pramod',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    399,
    'GM9399',
    'NARENDRA PATIL',
    'MH35K5049',
    '2026-02-03 15:10:49',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    25,
    '2026-02-03 15:10:49',
    '2026-02-03 15:10:49',
    'UMESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    400,
    'GM9400',
    'Vaibhav Randive',
    'MH31CB4968',
    '2026-02-03 15:11:16',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    23,
    '2026-02-03 15:11:16',
    '2026-02-03 15:11:16',
    'LAXMAN',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    401,
    'GM9401',
    'ROMU FUTANE',
    'MH 32 AJ 4276',
    '2026-02-03 15:13:35',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    50,
    '2026-02-03 15:13:35',
    '2026-02-03 15:13:35',
    NULL,
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    402,
    'GM9402',
    'Popat Seth ',
    'MH29BE4455',
    '2026-02-03 15:15:18',
    1.00,
    16000.00,
    0.00,
    0.00,
    16000.00,
    16000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    16000.00,
    '',
    1,
    3,
    '2026-02-03 15:15:18',
    '2026-02-03 15:15:18',
    'Amol',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    403,
    'GM9403',
    'Popat Seth ',
    'MH40Y1951',
    '2026-02-03 15:16:52',
    1.00,
    9000.00,
    0.00,
    0.00,
    9000.00,
    9000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    9000.00,
    '',
    1,
    3,
    '2026-02-03 15:16:52',
    '2026-02-03 15:16:52',
    'Raju',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    404,
    'GM9404',
    'Shoaib Ner',
    'MH29BT0924',
    '2026-02-03 15:17:42',
    1.00,
    12000.00,
    0.00,
    6000.00,
    6000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    11,
    '2026-02-03 15:17:42',
    '2026-02-03 15:17:42',
    'Pappu',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    405,
    'GM9405',
    'Abbu Bhai',
    'MH49AT7175',
    '2026-02-03 15:18:35',
    1.00,
    18000.00,
    0.00,
    0.00,
    18000.00,
    18000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    12,
    '2026-02-03 15:18:34',
    '2026-02-03 16:42:10',
    'Mama',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    406,
    'GM9406',
    'Sahil Sayyed ',
    'MH40L1629',
    '2026-02-03 15:19:01',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'online',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    5,
    '2026-02-03 15:19:01',
    '2026-02-03 15:19:01',
    'Mohan',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    407,
    'GM9407',
    'KIRAN MATE',
    ' MH29T0781',
    '2026-02-03 15:22:31',
    1.00,
    10000.00,
    0.00,
    0.00,
    10000.00,
    10000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    35,
    '2026-02-03 15:22:31',
    '2026-02-03 15:22:31',
    'DINESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    408,
    'GM9408',
    'Bharat Kale',
    'MH29BE5768',
    '2026-02-03 15:22:55',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    8,
    '2026-02-03 15:22:55',
    '2026-02-03 15:22:55',
    'Hitesh',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    409,
    'GM9409',
    'Ajay Golait',
    'MH40N6624',
    '2026-02-03 15:24:31',
    1.00,
    11000.00,
    0.00,
    3000.00,
    8000.00,
    11000.00,
    'partial',
    'cash',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-02-03 15:24:31',
    '2026-02-03 15:24:31',
    'FIROZ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    410,
    'GM9410',
    'Ajay Golait',
    'MH27BF7924',
    '2026-02-03 15:51:08',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-02-03 15:51:07',
    '2026-02-03 15:51:07',
    'Salim',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    411,
    'GM9411',
    'Abbu Bhai',
    'MH04N6917',
    '2026-02-03 15:52:23',
    1.00,
    12000.00,
    0.00,
    6000.00,
    6000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    11998.00,
    '',
    1,
    12,
    '2026-02-03 15:52:23',
    '2026-02-03 15:52:41',
    'Ashpak',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    412,
    'GM9412',
    'SHEKHAR SARODE',
    'MH29BD5049',
    '2026-02-03 16:04:11',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    28,
    '2026-02-03 16:04:11',
    '2026-02-03 16:04:11',
    'NILESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    413,
    'GM9413',
    'Ajay Golait',
    'MH29BE3577',
    '2026-02-03 16:10:54',
    1.00,
    11000.00,
    0.00,
    3000.00,
    8000.00,
    11000.00,
    'partial',
    'cash',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-02-03 16:10:54',
    '2026-02-03 16:10:54',
    'NOORA BHAI',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    414,
    'GM9414',
    'Shobu Bhai',
    'MH29BE9020',
    '2026-02-03 16:43:22',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    19,
    '2026-02-03 16:43:22',
    '2026-02-03 16:43:22',
    'Nadir',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    415,
    'GM9415',
    'Wasim Memon',
    'MH03CP1869',
    '2026-02-03 18:15:20',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'credit',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    18,
    '2026-02-03 18:15:20',
    '2026-02-04 21:19:11',
    'Kalim',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    416,
    'GM9416',
    'GANESH SHIRSAGAR',
    'MH29BV1057',
    '2026-02-03 18:21:49',
    1.00,
    3000.00,
    0.00,
    3000.00,
    0.00,
    3000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    3000.00,
    '',
    1,
    39,
    '2026-02-03 18:21:49',
    '2026-02-03 18:21:49',
    'GANESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    417,
    'GM9417',
    'Tarik Sharik',
    'MH28B8929',
    '2026-02-03 19:11:39',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    16,
    '2026-02-03 19:11:39',
    '2026-02-03 19:11:39',
    'Dhanraj',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    418,
    'GM9418',
    'Masroor Bhai ',
    'MH31M5768',
    '2026-02-03 19:11:57',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    6,
    '2026-02-03 19:11:57',
    '2026-02-03 19:11:57',
    'Raju',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    419,
    'GM9419',
    'SHAZ AHMAD',
    'TN91L8190',
    '2026-02-03 19:12:18',
    1.00,
    24000.00,
    0.00,
    0.00,
    24000.00,
    24000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    24000.00,
    '',
    1,
    40,
    '2026-02-03 19:12:18',
    '2026-02-03 19:12:18',
    'PANKAJ',
    '12 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    420,
    'GM9420',
    'Shahebaz Bhaiya',
    'MH32Q1248',
    '2026-02-03 19:12:40',
    1.00,
    18000.00,
    0.00,
    0.00,
    18000.00,
    18000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    10,
    '2026-02-03 19:12:40',
    '2026-02-03 19:12:40',
    'munna',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    421,
    'GM9421',
    'KIRAN MATE',
    'MH29BE5904',
    '2026-02-03 19:47:21',
    1.00,
    17000.00,
    0.00,
    0.00,
    17000.00,
    17000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    17000.00,
    '',
    1,
    35,
    '2026-02-03 19:47:21',
    '2026-02-03 19:47:21',
    'VILAS',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    422,
    'GM9422',
    'KIRAN MATE',
    'MH29BE8766',
    '2026-02-03 19:48:11',
    1.00,
    22000.00,
    0.00,
    0.00,
    22000.00,
    22000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    21999.00,
    '',
    1,
    35,
    '2026-02-03 19:48:11',
    '2026-02-03 20:06:22',
    'AKHIL',
    '12 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    423,
    'GM9423',
    'Shahrukh Pathan',
    'MH40T0135',
    '2026-02-03 19:57:35',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    9,
    '2026-02-03 19:57:36',
    '2026-02-03 19:57:36',
    'SHANKAR',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    424,
    'GM9424',
    'Shaz Ahemad',
    'MH49AT6089',
    '2026-02-03 21:10:45',
    1.00,
    18000.00,
    0.00,
    0.00,
    18000.00,
    18000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    14,
    '2026-02-03 21:10:46',
    '2026-02-03 21:10:46',
    'kALIM',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    425,
    'GM9425',
    'WASIM PATHAN',
    'MH04GR9803',
    '2026-02-03 21:12:35',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    33,
    '2026-02-03 21:12:36',
    '2026-02-03 21:12:36',
    'Golu',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    426,
    'GM9426',
    'JIVNE BABU',
    'MH32F1990',
    '2026-02-03 21:16:02',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    29,
    '2026-02-03 21:16:03',
    '2026-02-03 21:16:03',
    'BABA',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    427,
    'GM9427',
    'Ajay Golait',
    'MH05AM510',
    '2026-02-03 21:20:35',
    1.00,
    11000.00,
    0.00,
    3000.00,
    8000.00,
    11000.00,
    'partial',
    'cash',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-02-03 21:20:35',
    '2026-02-03 21:20:35',
    'SANTOSH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    428,
    'GM9428',
    'AAMIR BOTHA',
    'MH29CH2588',
    '2026-02-03 21:24:12',
    1.00,
    17000.00,
    0.00,
    13000.00,
    4000.00,
    17000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    17000.00,
    '',
    1,
    56,
    '2026-02-03 21:24:13',
    '2026-02-03 21:24:13',
    'Khushal',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    429,
    'GM9429',
    'KIRAN MATE',
    'MH29BE9916',
    '2026-02-03 21:32:03',
    1.00,
    22000.00,
    0.00,
    0.00,
    22000.00,
    22000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    22000.00,
    '',
    1,
    35,
    '2026-02-03 21:32:03',
    '2026-02-03 21:32:03',
    'AAKASH',
    '12 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    430,
    'GM9430',
    'Bharat Kale',
    'MH40N5437',
    '2026-02-03 21:32:59',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    8,
    '2026-02-03 21:33:00',
    '2026-02-03 21:33:00',
    'Khushal',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    431,
    'GM9431',
    'SHEKHAR  SARODE',
    'MH29BD6458',
    '2026-02-03 21:33:41',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    57,
    '2026-02-03 21:33:42',
    '2026-02-03 21:33:42',
    'MAHESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    432,
    'GM9432',
    'GANESH SHIRSAGAR',
    'MH29BV1057',
    '2026-02-03 21:50:02',
    1.00,
    3000.00,
    0.00,
    3000.00,
    0.00,
    3000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    3000.00,
    '',
    1,
    39,
    '2026-02-03 21:50:03',
    '2026-02-03 21:50:03',
    'GANESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    433,
    'GM9433',
    'WASIM PATHAN',
    'MH29T0288',
    '2026-02-03 21:52:27',
    1.00,
    10000.00,
    0.00,
    3000.00,
    7000.00,
    10000.00,
    'partial',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    33,
    '2026-02-03 21:52:28',
    '2026-02-03 21:52:28',
    'Aakash',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    434,
    'GM9434',
    'GANESH SHIRSAGAR',
    'MH04EB7439',
    '2026-02-03 21:58:16',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    39,
    '2026-02-03 21:58:17',
    '2026-02-03 21:58:17',
    'SACHIIN',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    435,
    'GM9435',
    'SHEKHAR SARODE',
    'MH29BD5049',
    '2026-02-03 21:58:45',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    28,
    '2026-02-03 21:58:45',
    '2026-02-03 21:58:45',
    'NILESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    436,
    'GM9436',
    'KIRAN MATE',
    'MH32AK4446',
    '2026-02-03 22:49:01',
    1.00,
    17000.00,
    0.00,
    0.00,
    17000.00,
    17000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    17000.00,
    '',
    1,
    35,
    '2026-02-03 22:49:01',
    '2026-02-03 22:49:01',
    'MAHADEO',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    437,
    'GM9437',
    'KIRAN MATE',
    'MH36F1820',
    '2026-02-03 22:49:22',
    1.00,
    10000.00,
    0.00,
    0.00,
    10000.00,
    10000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    35,
    '2026-02-03 22:49:22',
    '2026-02-03 22:49:22',
    'NIKHIL',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    438,
    'GM9438',
    'Popat Seth ',
    'MH40Y1951',
    '2026-02-03 23:06:09',
    1.00,
    9000.00,
    0.00,
    0.00,
    9000.00,
    9000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    9000.00,
    '',
    1,
    3,
    '2026-02-03 23:06:09',
    '2026-02-03 23:06:09',
    'Raju',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    439,
    'GM9439',
    'Raju Thakre ',
    'MH32AJ6475',
    '2026-02-03 23:06:23',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    1,
    '2026-02-03 23:06:24',
    '2026-02-03 23:06:24',
    'KARTIK',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    440,
    'GM9440',
    'Popat Seth ',
    'MH29BE4455',
    '2026-02-03 23:07:08',
    1.00,
    16000.00,
    0.00,
    0.00,
    16000.00,
    16000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    16000.00,
    '',
    1,
    3,
    '2026-02-03 23:07:09',
    '2026-02-03 23:07:09',
    'Amol',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    441,
    'GM9441',
    'Raju Thakre ',
    'MH49BZ8473',
    '2026-02-03 23:07:27',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    1,
    '2026-02-03 23:07:27',
    '2026-02-03 23:07:27',
    'Pramod',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    442,
    'GM9442',
    'ROMU FUTANE',
    'MH 32 AJ 4276',
    '2026-02-03 23:08:28',
    1.00,
    10000.00,
    0.00,
    0.00,
    10000.00,
    10000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    50,
    '2026-02-03 23:08:28',
    '2026-02-03 23:08:28',
    'dadarao',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    443,
    'GM9443',
    'GANESH SHIRSAGAR',
    'MH04EB7439',
    '2026-02-04 00:48:26',
    1.00,
    3000.00,
    0.00,
    3000.00,
    0.00,
    3000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    3000.00,
    '',
    1,
    39,
    '2026-02-04 00:48:26',
    '2026-02-04 00:48:26',
    'SACHIIN',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    444,
    'GM9444',
    'JIVNE BABU',
    'MH02C8007',
    '2026-02-04 00:57:01',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    29,
    '2026-02-04 00:57:01',
    '2026-02-04 00:57:01',
    'BABA',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    445,
    'GM9445',
    'Ajay Golait',
    'MH29BE3577',
    '2026-02-04 20:02:10',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-02-04 20:02:10',
    '2026-02-04 20:02:10',
    'NOORA BHAI',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    446,
    'GM9446',
    'Ajay Golait',
    'MH27BF7924',
    '2026-02-04 20:02:28',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-02-04 20:02:29',
    '2026-02-04 20:02:29',
    'Salim',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    447,
    'GM9447',
    'NARENDRA PATIL',
    'MH29BE9076',
    '2026-02-04 20:02:58',
    1.00,
    22000.00,
    0.00,
    22000.00,
    0.00,
    22000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    22000.00,
    '',
    1,
    25,
    '2026-02-04 20:02:59',
    '2026-02-04 20:02:59',
    'MANIK',
    '12 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    448,
    'GM9448',
    'Ravi H',
    'MH40N7526',
    '2026-02-04 20:03:20',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    15,
    '2026-02-04 20:03:20',
    '2026-02-04 20:03:20',
    'Gajanan',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    449,
    'GM9449',
    'Shobu Bhai',
    'MH29BE9020',
    '2026-02-04 20:03:43',
    1.00,
    10000.00,
    0.00,
    0.00,
    10000.00,
    10000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    19,
    '2026-02-04 20:03:43',
    '2026-02-04 21:42:40',
    'Nadir',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    450,
    'GM9450',
    'SUMIT SHIRBHATE',
    'MH32Q5452',
    '2026-02-04 20:04:17',
    1.00,
    12000.00,
    0.00,
    3000.00,
    9000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    30,
    '2026-02-04 20:04:18',
    '2026-02-04 20:04:18',
    'RAJKUMAR',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    451,
    'GM9451',
    'Masroor Bhai ',
    'MH31M5768',
    '2026-02-04 20:04:52',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    6,
    '2026-02-04 20:04:52',
    '2026-02-04 20:04:52',
    'Raju',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    452,
    'GM9452',
    'SUMIT SHIRBHATE',
    'MH40Y0075',
    '2026-02-04 20:05:17',
    1.00,
    12000.00,
    0.00,
    3000.00,
    9000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    30,
    '2026-02-04 20:05:17',
    '2026-02-04 20:05:17',
    'KISHAN',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    453,
    'GM9453',
    'Aamir Babba ',
    'MH04FU3734',
    '2026-02-04 20:05:40',
    1.00,
    12000.00,
    0.00,
    5000.00,
    7000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    13,
    '2026-02-04 20:05:41',
    '2026-02-04 20:05:41',
    'Mintu dada',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    454,
    'GM9454',
    'Abbu Bhai',
    'MH04N6917',
    '2026-02-04 20:06:14',
    1.00,
    12000.00,
    0.00,
    6000.00,
    6000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    12,
    '2026-02-04 20:06:14',
    '2026-02-04 20:06:14',
    'Ashpak',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    455,
    'GM9455',
    'Ajay Golait',
    'MH40N6624',
    '2026-02-04 20:06:33',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-02-04 20:06:33',
    '2026-02-04 20:06:33',
    'FIROZ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    456,
    'GM9456',
    'RAJU NA',
    'MH40CM1344',
    '2026-02-04 20:06:53',
    1.00,
    18000.00,
    0.00,
    6000.00,
    12000.00,
    18000.00,
    'partial',
    'credit',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    24,
    '2026-02-04 20:06:54',
    '2026-02-04 21:44:17',
    'SHER KHAN',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    457,
    'GM9457',
    'RAVI H',
    'MH27BX4740',
    '2026-02-04 20:07:54',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    15,
    '2026-02-04 20:07:55',
    '2026-02-04 20:07:55',
    NULL,
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    458,
    'GM9458',
    'Shahrukh Pathan',
    'MH40T0135',
    '2026-02-04 20:08:11',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    9,
    '2026-02-04 20:08:11',
    '2026-02-04 20:08:11',
    'SHANKAR',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    459,
    'GM9459',
    'Popat Seth ',
    'MH29T1667',
    '2026-02-04 20:08:31',
    1.00,
    9000.00,
    0.00,
    0.00,
    9000.00,
    9000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    3,
    '2026-02-04 20:08:31',
    '2026-02-04 21:54:35',
    'golu',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    460,
    'GM9460',
    'Wasim Memon',
    'MH03CP1869',
    '2026-02-04 20:08:44',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'credit',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    18,
    '2026-02-04 20:08:45',
    '2026-02-04 21:19:11',
    'Kalim',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    461,
    'GM9461',
    'Shaz Ahemad',
    'MH49AT6089',
    '2026-02-04 20:09:08',
    1.00,
    18000.00,
    0.00,
    0.00,
    18000.00,
    18000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    14,
    '2026-02-04 20:09:08',
    '2026-02-04 20:09:08',
    'kALIM',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    462,
    'GM9462',
    'VISHAL PANDARPURE',
    'MH36F1695',
    '2026-02-04 20:09:34',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    38,
    '2026-02-04 20:09:35',
    '2026-02-04 20:09:35',
    'YOGESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    463,
    'GM9463',
    'SHAZ AHMAD',
    'TN91L8190',
    '2026-02-04 20:11:06',
    1.00,
    24000.00,
    0.00,
    0.00,
    24000.00,
    24000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    24000.00,
    '',
    1,
    40,
    '2026-02-04 20:11:07',
    '2026-02-04 20:11:07',
    'PANKAJ',
    '12 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    464,
    'GM9464',
    'Pramod Press ',
    'MH31CQ8667',
    '2026-02-04 20:11:18',
    1.00,
    8000.00,
    0.00,
    0.00,
    8000.00,
    8000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    7,
    '2026-02-04 20:11:19',
    '2026-02-04 21:57:43',
    'SAHIL',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    465,
    'GM9465',
    'Pramod Press ',
    'MH29T1530',
    '2026-02-04 20:11:37',
    1.00,
    8000.00,
    0.00,
    0.00,
    8000.00,
    8000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    7,
    '2026-02-04 20:11:37',
    '2026-02-04 21:57:14',
    'Pawan',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    466,
    'GM9466',
    'Popat Seth ',
    'MH40Y1951',
    '2026-02-04 20:12:17',
    1.00,
    9000.00,
    0.00,
    0.00,
    9000.00,
    9000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    3,
    '2026-02-04 20:12:17',
    '2026-02-04 21:41:35',
    'Raju',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    467,
    'GM9467',
    'Popat Seth ',
    'MH29BE4455',
    '2026-02-04 20:12:32',
    1.00,
    16000.00,
    0.00,
    0.00,
    16000.00,
    16000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    3,
    '2026-02-04 20:12:32',
    '2026-02-04 21:41:20',
    'Amol',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    468,
    'GM9468',
    'PRASAD THAKRE',
    'MH35AJ0247',
    '2026-02-04 20:13:19',
    1.00,
    8000.00,
    0.00,
    8000.00,
    0.00,
    8000.00,
    'paid',
    'online',
    0.00,
    'regular',
    8000.00,
    'SHAZ BHAI',
    1,
    53,
    '2026-02-04 20:13:19',
    '2026-02-04 20:13:19',
    'Sandip',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    469,
    'GM9469',
    'Raju Thakre ',
    'MH32AJ6475',
    '2026-02-04 20:13:47',
    1.00,
    7000.00,
    0.00,
    0.00,
    7000.00,
    7000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    1,
    '2026-02-04 20:13:48',
    '2026-02-04 21:40:46',
    'KARTIK',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    470,
    'GM9470',
    'Raju Thakre ',
    'MH49BZ8473',
    '2026-02-04 20:14:35',
    1.00,
    4000.00,
    0.00,
    0.00,
    4000.00,
    4000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    1,
    '2026-02-04 20:14:36',
    '2026-02-04 21:40:19',
    'Pramod',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    471,
    'GM9471',
    'ARBAZ BHAI',
    'MH40N7158',
    '2026-02-04 20:15:59',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'online',
    0.00,
    'regular',
    11000.00,
    '4000 CASH',
    1,
    36,
    '2026-02-04 20:16:00',
    '2026-02-04 20:16:00',
    'ARBAZ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    472,
    'GM9472',
    'Vaibhav Randive',
    'MH31CB4968',
    '2026-02-04 20:16:32',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    23,
    '2026-02-04 20:16:32',
    '2026-02-04 20:16:32',
    'LAXMAN',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    473,
    'GM9473',
    'Sohel Sayyed ',
    'MH29T1051',
    '2026-02-04 20:16:54',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'online',
    0.00,
    'partner',
    10000.00,
    'RIJJU',
    1,
    4,
    '2026-02-04 20:16:55',
    '2026-02-04 20:16:55',
    'Suraj',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    474,
    'GM9474',
    'NARENDRA PATIL',
    'MH29BE0019',
    '2026-02-04 20:17:18',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    25,
    '2026-02-04 20:17:19',
    '2026-02-04 20:17:19',
    'VINOD',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    475,
    'GM9475',
    'NARENDRA PATIL',
    'MH29T0976',
    '2026-02-04 20:17:38',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    25,
    '2026-02-04 20:17:38',
    '2026-02-04 20:17:38',
    'MAHADEO',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    476,
    'GM9476',
    'NARENDRA PATIL',
    'MH29BE4276',
    '2026-02-04 20:18:01',
    1.00,
    17000.00,
    0.00,
    17000.00,
    0.00,
    17000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    17000.00,
    '',
    1,
    25,
    '2026-02-04 20:18:01',
    '2026-02-04 20:18:01',
    'BHARAT',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    477,
    'GM9477',
    'SAILESH BELEKAR',
    '8855808250',
    '2026-02-04 20:19:45',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    37,
    '2026-02-04 20:19:45',
    '2026-02-04 20:19:45',
    'DHIRAJ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    478,
    'GM9478',
    'SAYYED BHAI',
    'MH04HD2555',
    '2026-02-04 20:21:21',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    58,
    '2026-02-04 20:21:22',
    '2026-02-04 20:21:22',
    'SANTOSH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    479,
    'GM9479',
    'Sahil Sayyed ',
    'MH40L1629',
    '2026-02-04 20:23:24',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'online',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    5,
    '2026-02-04 20:23:25',
    '2026-02-04 20:23:25',
    'Mohan',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    480,
    'GM9480',
    'Saddam Bhai',
    'MH29T0400',
    '2026-02-04 20:23:43',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'online',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    17,
    '2026-02-04 20:23:44',
    '2026-02-04 20:23:44',
    'Umesh',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    481,
    'GM9481',
    'ASLAM NA',
    'MH29BE0585',
    '2026-02-04 20:24:02',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'online',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    31,
    '2026-02-04 20:24:03',
    '2026-02-04 20:24:03',
    'KALIM',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    482,
    'GM9482',
    'CHAND BHAI',
    'MH29T2322',
    '2026-02-04 20:24:39',
    1.00,
    12000.00,
    0.00,
    3000.00,
    9000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    55,
    '2026-02-04 20:24:39',
    '2026-02-04 20:24:39',
    'NYANESHWAR',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    483,
    'GM9483',
    'SHAHEZAD JHON',
    'MH40N3037',
    '2026-02-04 20:25:21',
    1.00,
    10000.00,
    0.00,
    3000.00,
    7000.00,
    10000.00,
    'partial',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    26,
    '2026-02-04 20:25:21',
    '2026-02-04 20:25:21',
    'SALIM',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    484,
    'GM9484',
    'NOMAN BHAI',
    'MH40N1199',
    '2026-02-04 20:27:37',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    59,
    '2026-02-04 20:27:38',
    '2026-02-04 20:27:38',
    'TAUFIK',
    NULL
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    485,
    'GM9485',
    'Vaibhav Randive',
    'MH05AM1468',
    '2026-02-04 20:28:07',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    23,
    '2026-02-04 20:28:08',
    '2026-02-04 21:39:08',
    'AASHISH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    486,
    'GM9486',
    'VILAS THAKRE',
    'MH49 0710',
    '2026-02-04 20:29:03',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    54,
    '2026-02-04 20:29:04',
    '2026-02-04 20:29:04',
    'KALIPNATH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    487,
    'GM9487',
    'GANESH SHIRSAGAR',
    'MH04EB7439',
    '2026-02-04 20:31:34',
    1.00,
    3000.00,
    0.00,
    3000.00,
    0.00,
    3000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    3000.00,
    '',
    1,
    39,
    '2026-02-04 20:31:35',
    '2026-02-04 20:31:35',
    'SACHIIN',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    488,
    'GM9488',
    'Tarik Sharik',
    'MH28B8929',
    '2026-02-04 20:31:51',
    1.00,
    10000.00,
    0.00,
    0.00,
    10000.00,
    10000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    16,
    '2026-02-04 20:31:51',
    '2026-02-04 21:38:33',
    'Dhanraj',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    489,
    'GM9489',
    'Abbu Bhai',
    'MH49AT7175',
    '2026-02-04 20:32:37',
    1.00,
    18000.00,
    0.00,
    0.00,
    18000.00,
    18000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    12,
    '2026-02-04 20:32:37',
    '2026-02-04 20:32:37',
    'Mama',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    490,
    'GM9490',
    'KIRAN MATE',
    'MH29BE5904',
    '2026-02-04 20:32:58',
    1.00,
    17000.00,
    0.00,
    0.00,
    17000.00,
    17000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    17000.00,
    '',
    1,
    35,
    '2026-02-04 20:32:59',
    '2026-02-04 20:32:59',
    'VILAS',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    491,
    'GM9491',
    'SHEKHAR SARODE',
    'MH29BD5049',
    '2026-02-04 20:33:18',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    28,
    '2026-02-04 20:33:19',
    '2026-02-04 20:33:19',
    'NILESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    492,
    'GM9492',
    'SHEKHAR  SARODE',
    'MH29BD6458',
    '2026-02-04 20:34:17',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    57,
    '2026-02-04 20:34:17',
    '2026-02-04 20:34:17',
    'MAHESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    493,
    'GM9493',
    'ROMU FUTANE',
    'MH 32 AJ 4276',
    '2026-02-04 20:34:36',
    1.00,
    10000.00,
    0.00,
    0.00,
    10000.00,
    10000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    50,
    '2026-02-04 20:34:37',
    '2026-02-04 20:34:37',
    'dadarao',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    494,
    'GM9494',
    'SHEKHAR  SARODE',
    'MH29BD6458',
    '2026-02-04 20:34:57',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    57,
    '2026-02-04 20:34:57',
    '2026-02-04 20:34:57',
    'MAHESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    495,
    'GM9495',
    'AVEZ PATHAN',
    'MH31CB3322',
    '2026-02-04 20:35:48',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    11997.00,
    '',
    1,
    60,
    '2026-02-04 20:35:48',
    '2026-02-04 21:37:54',
    'LOKESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    496,
    'GM9496',
    'Bharat Kale',
    'MH40N5437',
    '2026-02-04 20:36:02',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    8,
    '2026-02-04 20:36:02',
    '2026-02-04 20:36:02',
    'Khushal',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    497,
    'GM9497',
    'RAJU NA',
    'MH31DS1106',
    '2026-02-04 20:36:29',
    1.00,
    10000.00,
    0.00,
    3000.00,
    7000.00,
    10000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    11999.00,
    '',
    1,
    24,
    '2026-02-04 20:36:29',
    '2026-02-04 21:37:30',
    'AVINASH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    498,
    'GM9498',
    'Popat Seth ',
    'MH29T1667',
    '2026-02-04 20:36:56',
    1.00,
    9000.00,
    0.00,
    0.00,
    9000.00,
    9000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    3,
    '2026-02-04 20:36:56',
    '2026-02-04 21:37:07',
    'golu',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    499,
    'GM9499',
    'KIRAN MATE',
    'MH36F1820',
    '2026-02-04 20:39:31',
    1.00,
    10000.00,
    0.00,
    0.00,
    10000.00,
    10000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    35,
    '2026-02-04 20:39:31',
    '2026-02-04 20:39:31',
    'NIKHIL',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    500,
    'GM9500',
    'Wasim Memon',
    'MH03CP1869',
    '2026-02-04 20:40:30',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'credit',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    18,
    '2026-02-04 20:40:31',
    '2026-02-04 21:19:11',
    'Kalim',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    501,
    'GM9501',
    'KIRAN MATE',
    'MH32AK4446',
    '2026-02-04 20:40:57',
    1.00,
    17000.00,
    0.00,
    0.00,
    17000.00,
    17000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    17000.00,
    '',
    1,
    35,
    '2026-02-04 20:40:57',
    '2026-02-04 20:40:57',
    'MAHADEO',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    502,
    'GM9502',
    'KIRAN MATE',
    'MH29BE8766',
    '2026-02-04 20:41:45',
    1.00,
    22000.00,
    0.00,
    0.00,
    22000.00,
    22000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    22000.00,
    '',
    1,
    35,
    '2026-02-04 20:41:45',
    '2026-02-04 20:41:45',
    'AKHIL',
    '12 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    503,
    'GM9503',
    'Bharat Kale',
    'MH29BE5768',
    '2026-02-04 20:42:17',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    8,
    '2026-02-04 20:42:18',
    '2026-02-04 20:42:18',
    'Hitesh',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    504,
    'GM9504',
    'SHAHRUKH MAREGAON',
    'MH04EL6325',
    '2026-02-04 20:43:03',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'online',
    0.00,
    'regular',
    11000.00,
    '5500 CASH',
    1,
    47,
    '2026-02-04 20:43:04',
    '2026-02-04 20:43:04',
    'AEJAZ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    505,
    'GM9505',
    'JIVNE BABU',
    'MH32F1990',
    '2026-02-04 20:43:54',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    29,
    '2026-02-04 20:43:55',
    '2026-02-04 20:43:55',
    'BABA',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    506,
    'GM9506',
    'JIVNE BABU',
    'MH02C8007',
    '2026-02-04 20:44:09',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    29,
    '2026-02-04 20:44:10',
    '2026-02-04 20:44:10',
    'BABA',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    507,
    'GM9507',
    'GANESH SHIRSAGAR',
    'MH04EB7139',
    '2026-02-04 20:45:12',
    1.00,
    3000.00,
    0.00,
    3000.00,
    0.00,
    3000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    3000.00,
    '',
    1,
    39,
    '2026-02-04 20:45:13',
    '2026-02-04 20:45:13',
    'SACHIIN',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    508,
    'GM9508',
    'Ajay Golait',
    'MH06BD7171',
    '2026-02-04 20:45:44',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-02-04 20:45:45',
    '2026-02-04 20:45:45',
    'SHUBHAM',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    509,
    'GM9509',
    'SANJAY KUBADE',
    'MH32AJ3314',
    '2026-02-04 20:46:09',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    52,
    '2026-02-04 20:46:09',
    '2026-02-04 20:46:09',
    'SANDIP',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    510,
    'GM9510',
    'Shahebaz Bhaiya',
    'MH32Q1248',
    '2026-02-04 20:47:01',
    1.00,
    18000.00,
    0.00,
    0.00,
    18000.00,
    18000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    10,
    '2026-02-04 20:47:01',
    '2026-02-04 20:47:01',
    'munna',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    511,
    'GM9511',
    'Shoaib Ner',
    'MH29BT0924',
    '2026-02-04 20:48:05',
    1.00,
    12000.00,
    0.00,
    6000.00,
    6000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    11,
    '2026-02-04 20:48:06',
    '2026-02-04 21:11:46',
    'Pappu',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    512,
    'GM9512',
    'VISHAL PANDARPURE',
    'MH36F1695',
    '2026-02-04 20:48:36',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    38,
    '2026-02-04 20:48:37',
    '2026-02-04 20:48:37',
    'YOGESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    513,
    'GM9513',
    'Shahrukh Pathan',
    'MH40T0135',
    '2026-02-04 20:49:30',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    9,
    '2026-02-04 20:49:31',
    '2026-02-04 20:49:31',
    'SHANKAR',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    514,
    'GM9514',
    'KIRAN MATE',
    ' MH29T0781',
    '2026-02-04 20:54:31',
    1.00,
    10000.00,
    0.00,
    0.00,
    10000.00,
    10000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    35,
    '2026-02-04 20:54:32',
    '2026-02-04 20:54:32',
    'DINESH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    515,
    'GM9515',
    'Ajay Golait',
    'MH29BE3577',
    '2026-02-04 21:03:40',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-02-04 21:03:40',
    '2026-02-04 21:03:40',
    'NOORA BHAI',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    516,
    'GM9516',
    'Mangesh Press',
    'MH29T1530',
    '2026-02-04 21:09:45',
    1.00,
    8000.00,
    0.00,
    0.00,
    8000.00,
    8000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    61,
    '2026-02-04 21:09:45',
    '2026-02-04 21:11:22',
    'Pawan',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    517,
    'GM9517',
    'Masroor Bhai ',
    'MH31M5768',
    '2026-02-04 22:22:27',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    12000.00,
    '',
    1,
    6,
    '2026-02-04 22:22:27',
    '2026-02-04 22:22:27',
    'Raju',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    518,
    'GM9518',
    'Ajay Golait',
    'MH27BF7924',
    '2026-02-04 22:46:37',
    1.00,
    11000.00,
    0.00,
    0.00,
    11000.00,
    11000.00,
    'unpaid',
    'credit',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-02-04 22:46:37',
    '2026-02-04 22:46:37',
    'Salim',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    519,
    'GM9519',
    'Shobu Bhai',
    'MH29BE9020',
    '2026-02-04 22:47:15',
    1.00,
    10000.00,
    0.00,
    0.00,
    10000.00,
    10000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    10000.00,
    '',
    1,
    19,
    '2026-02-04 22:47:15',
    '2026-02-04 22:47:15',
    'Nadir',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    520,
    'GM9520',
    'KIRAN MATE',
    'MH29BE9916',
    '2026-02-04 22:48:35',
    1.00,
    22000.00,
    0.00,
    0.00,
    22000.00,
    22000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    22000.00,
    '',
    1,
    35,
    '2026-02-04 22:48:35',
    '2026-02-04 22:48:35',
    'AAKASH',
    '12 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    521,
    'GM9521',
    'SAILESH BELEKAR',
    '8411949466',
    '2026-02-04 22:52:30',
    1.00,
    11000.00,
    0.00,
    11000.00,
    0.00,
    11000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    11000.00,
    '',
    1,
    37,
    '2026-02-04 22:52:31',
    '2026-02-04 22:52:31',
    'DIPAK',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    522,
    'GM9522',
    'Ravi H',
    'MH40N7526',
    '2026-02-04 23:01:41',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    15,
    '2026-02-04 23:01:41',
    '2026-02-04 23:01:41',
    'Gajanan',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    523,
    'GM9523',
    'Nikhil Dhote',
    'MH29AB7585',
    '2026-02-04 23:02:04',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'online',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    2,
    '2026-02-04 23:02:05',
    '2026-02-04 23:02:05',
    'Shubham ',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    524,
    'GM9524',
    'Ravi H',
    'MH27BX4740',
    '2026-02-04 23:04:03',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    15,
    '2026-02-04 23:04:04',
    '2026-02-04 23:04:04',
    NULL,
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    525,
    'GM9525',
    'SHAHRUKH MAREGAON',
    'MH34BZ9339',
    '2026-02-04 23:07:24',
    1.00,
    22000.00,
    0.00,
    22000.00,
    0.00,
    22000.00,
    'paid',
    'cash',
    0.00,
    'regular',
    22000.00,
    '',
    1,
    47,
    '2026-02-04 23:07:25',
    '2026-02-04 23:07:25',
    'AEJAZ',
    '12 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    526,
    'GM9526',
    'Ajay Golait',
    'MH05AM510',
    '2026-02-04 23:42:56',
    1.00,
    11000.00,
    0.00,
    3000.00,
    8000.00,
    11000.00,
    'partial',
    'cash',
    0.00,
    'partner',
    11000.00,
    '',
    1,
    22,
    '2026-02-04 23:42:56',
    '2026-02-04 23:42:56',
    'SANTOSH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    527,
    'GM9527',
    'VILAS THAKRE',
    'MH49 0710',
    '2026-02-04 23:43:54',
    1.00,
    12000.00,
    0.00,
    0.00,
    12000.00,
    12000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    54,
    '2026-02-04 23:43:54',
    '2026-02-04 23:43:54',
    'KALIPNATH',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    528,
    'GM9528',
    'Ketan Sur',
    'MH34BG9176',
    '2026-02-04 23:45:22',
    1.00,
    0.00,
    0.00,
    0.00,
    0.00,
    0.00,
    'unpaid',
    'cash',
    0.00,
    'regular',
    24000.00,
    'Tocken return 1147 number ',
    1,
    62,
    '2026-02-04 23:45:22',
    '2026-02-05 01:01:52',
    'Kunal',
    '12 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    529,
    'GM9529',
    'Shaz Ahemad',
    'MH49AT6089',
    '2026-02-04 23:45:38',
    1.00,
    18000.00,
    0.00,
    0.00,
    18000.00,
    18000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    18000.00,
    '',
    1,
    14,
    '2026-02-04 23:45:38',
    '2026-02-04 23:45:38',
    'kALIM',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    530,
    'GM9530',
    'Popat Seth ',
    'MH29BE4455',
    '2026-02-05 00:05:44',
    1.00,
    16000.00,
    0.00,
    0.00,
    16000.00,
    16000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    16000.00,
    '',
    1,
    3,
    '2026-02-05 00:05:45',
    '2026-02-05 00:05:45',
    'Amol',
    '10 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    531,
    'GM9531',
    'Popat Seth ',
    'MH40Y1951',
    '2026-02-05 00:06:10',
    1.00,
    9000.00,
    0.00,
    0.00,
    9000.00,
    9000.00,
    'unpaid',
    'credit',
    0.00,
    'regular',
    9000.00,
    '',
    1,
    3,
    '2026-02-05 00:06:10',
    '2026-02-05 00:06:10',
    'Raju',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    532,
    'GM9532',
    'Sahil Sayyed ',
    'MH40L1629',
    '2026-02-05 00:38:52',
    1.00,
    10000.00,
    0.00,
    10000.00,
    0.00,
    10000.00,
    'paid',
    'cash',
    0.00,
    'partner',
    10000.00,
    '',
    1,
    5,
    '2026-02-05 00:38:53',
    '2026-02-05 00:39:09',
    'Mohan',
    '6 Tyre'
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
    `updatedAt`,
    `driver_name`,
    `tyre_type`
  )
VALUES
  (
    533,
    'GM9533',
    'SUMIT SHIRBHATE',
    'MH32Q5452',
    '2026-02-05 00:39:35',
    1.00,
    12000.00,
    0.00,
    3000.00,
    9000.00,
    12000.00,
    'partial',
    'cash',
    0.00,
    'regular',
    12000.00,
    '',
    1,
    30,
    '2026-02-05 00:39:36',
    '2026-02-05 00:39:36',
    'RAJKUMAR',
    '6 Tyre'
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
    'auto_backup_enabled',
    'true',
    'backup',
    '2026-01-29 19:18:15',
    '2026-01-27 15:41:34',
    '2026-01-29 19:18:15'
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
    'auto_backup_last_run',
    '2026-02-05',
    'backup',
    '2026-02-05 07:00:17',
    '2026-01-28 07:00:26',
    '2026-02-05 07:00:17'
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
    '07:00',
    'backup',
    '2026-01-29 19:18:15',
    '2026-01-27 15:41:34',
    '2026-01-29 19:18:15'
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
    'contact_number',
    '7770008861',
    'general',
    '2026-01-29 19:18:15',
    '2026-01-29 14:28:30',
    '2026-01-29 19:18:15'
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
    '2026-01-29 19:18:15',
    '2026-01-29 06:41:45',
    '2026-01-29 19:18:15'
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
    '',
    'financial',
    '2026-01-29 19:18:15',
    '2026-01-27 10:49:35',
    '2026-01-29 19:18:15'
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
    '0',
    'financial',
    '2026-01-29 19:18:15',
    '2026-01-27 10:49:35',
    '2026-01-29 19:18:15'
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
    'footer_text',
    '',
    'general',
    '2026-01-29 19:18:15',
    '2026-01-27 15:41:34',
    '2026-01-29 19:18:15'
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
    '2026-01-29 19:18:15',
    '2026-01-27 10:49:35',
    '2026-01-29 19:18:15'
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
    'Yevti ',
    'company',
    '2026-01-29 19:18:15',
    '2026-01-27 16:02:26',
    '2026-01-29 19:18:15'
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
    'Revti Ralegaon ',
    'company',
    '2026-01-29 19:18:15',
    '2026-01-27 16:02:26',
    '2026-01-29 19:18:15'
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
    '2026-01-29 19:18:15',
    '2026-01-29 06:41:45',
    '2026-01-29 19:18:15'
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
    '9001',
    'receipt',
    '2026-01-29 19:18:15',
    '2026-01-29 06:41:45',
    '2026-01-29 19:18:15'
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
    'tax_rate',
    '0',
    'general',
    '2026-01-29 19:18:15',
    '2026-01-27 10:49:35',
    '2026-01-29 19:18:15'
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
    'Truck',
    'general',
    '2026-01-29 19:18:15',
    '2026-01-27 10:49:35',
    '2026-01-29 19:18:15'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    1,
    23,
    'vehicle_number',
    'MH40CM9654',
    'MH31CB4968',
    '2026-01-29 17:56:19',
    'admin',
    'Update via settings',
    '2026-01-29 17:56:19',
    '2026-01-29 17:56:19'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    2,
    33,
    'phone',
    '',
    '11000',
    '2026-01-29 21:12:16',
    'admin',
    'Update via settings',
    '2026-01-29 21:12:16',
    '2026-01-29 21:12:16'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    3,
    33,
    'address',
    '',
    '',
    '2026-01-29 21:12:16',
    'admin',
    'Update via settings',
    '2026-01-29 21:12:16',
    '2026-01-29 21:12:16'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    4,
    33,
    'partner_rate',
    '',
    '',
    '2026-01-29 21:12:16',
    'admin',
    'Update via settings',
    '2026-01-29 21:12:16',
    '2026-01-29 21:12:16'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    5,
    33,
    'phone',
    '11000',
    '',
    '2026-01-29 21:12:43',
    'admin',
    'Update via settings',
    '2026-01-29 21:12:43',
    '2026-01-29 21:12:43'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    6,
    33,
    'address',
    '',
    '',
    '2026-01-29 21:12:43',
    'admin',
    'Update via settings',
    '2026-01-29 21:12:43',
    '2026-01-29 21:12:43'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    7,
    33,
    'is_partner',
    '',
    '1',
    '2026-01-29 21:12:43',
    'admin',
    'Update via settings',
    '2026-01-29 21:12:43',
    '2026-01-29 21:12:43'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    8,
    33,
    'partner_rate',
    '',
    '11000',
    '2026-01-29 21:12:43',
    'admin',
    'Update via settings',
    '2026-01-29 21:12:43',
    '2026-01-29 21:12:43'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    9,
    18,
    'phone',
    '',
    '',
    '2026-01-29 21:14:17',
    'admin',
    'Update via settings',
    '2026-01-29 21:14:17',
    '2026-01-29 21:14:17'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    10,
    18,
    'address',
    '',
    '',
    '2026-01-29 21:14:17',
    'admin',
    'Update via settings',
    '2026-01-29 21:14:17',
    '2026-01-29 21:14:17'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    11,
    18,
    'is_partner',
    '',
    '1',
    '2026-01-29 21:14:17',
    'admin',
    'Update via settings',
    '2026-01-29 21:14:17',
    '2026-01-29 21:14:17'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    12,
    18,
    'partner_rate',
    '',
    '10000',
    '2026-01-29 21:14:17',
    'admin',
    'Update via settings',
    '2026-01-29 21:14:17',
    '2026-01-29 21:14:17'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    13,
    16,
    'phone',
    '',
    '',
    '2026-01-29 21:18:25',
    'admin',
    'Update via settings',
    '2026-01-29 21:18:25',
    '2026-01-29 21:18:25'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    14,
    16,
    'address',
    '',
    '',
    '2026-01-29 21:18:25',
    'admin',
    'Update via settings',
    '2026-01-29 21:18:25',
    '2026-01-29 21:18:25'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    15,
    16,
    'is_partner',
    '',
    '1',
    '2026-01-29 21:18:25',
    'admin',
    'Update via settings',
    '2026-01-29 21:18:25',
    '2026-01-29 21:18:25'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    16,
    16,
    'partner_rate',
    '',
    '12000',
    '2026-01-29 21:18:25',
    'admin',
    'Update via settings',
    '2026-01-29 21:18:25',
    '2026-01-29 21:18:25'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    17,
    5,
    'phone',
    '',
    '',
    '2026-01-29 21:27:03',
    'admin',
    'Update via settings',
    '2026-01-29 21:27:03',
    '2026-01-29 21:27:03'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    18,
    5,
    'address',
    '',
    '',
    '2026-01-29 21:27:03',
    'admin',
    'Update via settings',
    '2026-01-29 21:27:03',
    '2026-01-29 21:27:03'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    19,
    5,
    'is_partner',
    '',
    '1',
    '2026-01-29 21:27:03',
    'admin',
    'Update via settings',
    '2026-01-29 21:27:03',
    '2026-01-29 21:27:03'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    20,
    5,
    'partner_rate',
    '',
    '10000',
    '2026-01-29 21:27:03',
    'admin',
    'Update via settings',
    '2026-01-29 21:27:03',
    '2026-01-29 21:27:03'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    21,
    13,
    'phone',
    '',
    '',
    '2026-01-29 21:37:03',
    'admin',
    'Update via settings',
    '2026-01-29 21:37:03',
    '2026-01-29 21:37:03'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    22,
    13,
    'address',
    '',
    '',
    '2026-01-29 21:37:03',
    'admin',
    'Update via settings',
    '2026-01-29 21:37:03',
    '2026-01-29 21:37:03'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    23,
    13,
    'is_partner',
    '',
    '1',
    '2026-01-29 21:37:03',
    'admin',
    'Update via settings',
    '2026-01-29 21:37:03',
    '2026-01-29 21:37:03'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    24,
    13,
    'partner_rate',
    '',
    '12000',
    '2026-01-29 21:37:03',
    'admin',
    'Update via settings',
    '2026-01-29 21:37:03',
    '2026-01-29 21:37:03'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    25,
    20,
    'phone',
    '',
    '',
    '2026-01-29 21:37:13',
    'admin',
    'Update via settings',
    '2026-01-29 21:37:13',
    '2026-01-29 21:37:13'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    26,
    20,
    'address',
    '',
    '',
    '2026-01-29 21:37:13',
    'admin',
    'Update via settings',
    '2026-01-29 21:37:13',
    '2026-01-29 21:37:13'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    27,
    20,
    'is_partner',
    '',
    '1',
    '2026-01-29 21:37:13',
    'admin',
    'Update via settings',
    '2026-01-29 21:37:13',
    '2026-01-29 21:37:13'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    28,
    20,
    'partner_rate',
    '',
    '12000',
    '2026-01-29 21:37:13',
    'admin',
    'Update via settings',
    '2026-01-29 21:37:13',
    '2026-01-29 21:37:13'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    29,
    22,
    'phone',
    '',
    '',
    '2026-01-29 21:37:29',
    'admin',
    'Update via settings',
    '2026-01-29 21:37:29',
    '2026-01-29 21:37:29'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    30,
    22,
    'address',
    '',
    '',
    '2026-01-29 21:37:29',
    'admin',
    'Update via settings',
    '2026-01-29 21:37:29',
    '2026-01-29 21:37:29'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    31,
    22,
    'is_partner',
    '',
    '1',
    '2026-01-29 21:37:29',
    'admin',
    'Update via settings',
    '2026-01-29 21:37:29',
    '2026-01-29 21:37:29'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    32,
    22,
    'partner_rate',
    '',
    '11000',
    '2026-01-29 21:37:29',
    'admin',
    'Update via settings',
    '2026-01-29 21:37:29',
    '2026-01-29 21:37:29'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    33,
    32,
    'phone',
    '',
    '',
    '2026-01-29 21:37:38',
    'admin',
    'Update via settings',
    '2026-01-29 21:37:38',
    '2026-01-29 21:37:38'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    34,
    32,
    'address',
    '',
    '',
    '2026-01-29 21:37:38',
    'admin',
    'Update via settings',
    '2026-01-29 21:37:38',
    '2026-01-29 21:37:38'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    35,
    32,
    'is_partner',
    '',
    '1',
    '2026-01-29 21:37:38',
    'admin',
    'Update via settings',
    '2026-01-29 21:37:38',
    '2026-01-29 21:37:38'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    36,
    32,
    'partner_rate',
    '',
    '10000',
    '2026-01-29 21:37:38',
    'admin',
    'Update via settings',
    '2026-01-29 21:37:38',
    '2026-01-29 21:37:38'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    37,
    8,
    'phone',
    '',
    '',
    '2026-01-29 21:38:46',
    'admin',
    'Update via settings',
    '2026-01-29 21:38:46',
    '2026-01-29 21:38:46'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    38,
    8,
    'address',
    '',
    '',
    '2026-01-29 21:38:46',
    'admin',
    'Update via settings',
    '2026-01-29 21:38:46',
    '2026-01-29 21:38:46'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    39,
    8,
    'is_partner',
    '',
    '1',
    '2026-01-29 21:38:46',
    'admin',
    'Update via settings',
    '2026-01-29 21:38:46',
    '2026-01-29 21:38:46'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    40,
    8,
    'partner_rate',
    '',
    '11000',
    '2026-01-29 21:38:46',
    'admin',
    'Update via settings',
    '2026-01-29 21:38:46',
    '2026-01-29 21:38:46'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    41,
    6,
    'phone',
    '',
    '',
    '2026-01-29 21:39:12',
    'admin',
    'Update via settings',
    '2026-01-29 21:39:12',
    '2026-01-29 21:39:12'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    42,
    6,
    'address',
    '',
    '',
    '2026-01-29 21:39:12',
    'admin',
    'Update via settings',
    '2026-01-29 21:39:12',
    '2026-01-29 21:39:12'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    43,
    6,
    'is_partner',
    '',
    '1',
    '2026-01-29 21:39:12',
    'admin',
    'Update via settings',
    '2026-01-29 21:39:12',
    '2026-01-29 21:39:12'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    44,
    6,
    'partner_rate',
    '',
    '12000',
    '2026-01-29 21:39:12',
    'admin',
    'Update via settings',
    '2026-01-29 21:39:12',
    '2026-01-29 21:39:12'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    45,
    2,
    'phone',
    '',
    '',
    '2026-01-29 21:39:39',
    'admin',
    'Update via settings',
    '2026-01-29 21:39:39',
    '2026-01-29 21:39:39'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    46,
    2,
    'address',
    '',
    '',
    '2026-01-29 21:39:39',
    'admin',
    'Update via settings',
    '2026-01-29 21:39:39',
    '2026-01-29 21:39:39'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    47,
    2,
    'is_partner',
    '',
    '1',
    '2026-01-29 21:39:39',
    'admin',
    'Update via settings',
    '2026-01-29 21:39:39',
    '2026-01-29 21:39:39'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    48,
    2,
    'partner_rate',
    '',
    '11000',
    '2026-01-29 21:39:39',
    'admin',
    'Update via settings',
    '2026-01-29 21:39:39',
    '2026-01-29 21:39:39'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    49,
    7,
    'phone',
    '',
    '',
    '2026-01-29 21:40:23',
    'admin',
    'Update via settings',
    '2026-01-29 21:40:23',
    '2026-01-29 21:40:23'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    50,
    7,
    'address',
    '',
    '',
    '2026-01-29 21:40:23',
    'admin',
    'Update via settings',
    '2026-01-29 21:40:23',
    '2026-01-29 21:40:23'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    51,
    7,
    'is_partner',
    '',
    '1',
    '2026-01-29 21:40:23',
    'admin',
    'Update via settings',
    '2026-01-29 21:40:23',
    '2026-01-29 21:40:23'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    52,
    7,
    'partner_rate',
    '',
    '12000',
    '2026-01-29 21:40:23',
    'admin',
    'Update via settings',
    '2026-01-29 21:40:23',
    '2026-01-29 21:40:23'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    53,
    15,
    'phone',
    '',
    '',
    '2026-01-29 21:40:38',
    'admin',
    'Update via settings',
    '2026-01-29 21:40:38',
    '2026-01-29 21:40:38'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    54,
    15,
    'address',
    '',
    '',
    '2026-01-29 21:40:38',
    'admin',
    'Update via settings',
    '2026-01-29 21:40:38',
    '2026-01-29 21:40:38'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    55,
    15,
    'is_partner',
    '',
    '1',
    '2026-01-29 21:40:38',
    'admin',
    'Update via settings',
    '2026-01-29 21:40:38',
    '2026-01-29 21:40:38'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    56,
    15,
    'partner_rate',
    '',
    '12000',
    '2026-01-29 21:40:38',
    'admin',
    'Update via settings',
    '2026-01-29 21:40:38',
    '2026-01-29 21:40:38'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    57,
    17,
    'phone',
    '',
    '',
    '2026-01-29 21:40:47',
    'admin',
    'Update via settings',
    '2026-01-29 21:40:47',
    '2026-01-29 21:40:47'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    58,
    17,
    'address',
    '',
    '',
    '2026-01-29 21:40:47',
    'admin',
    'Update via settings',
    '2026-01-29 21:40:47',
    '2026-01-29 21:40:47'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    59,
    17,
    'is_partner',
    '',
    '1',
    '2026-01-29 21:40:47',
    'admin',
    'Update via settings',
    '2026-01-29 21:40:47',
    '2026-01-29 21:40:47'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    60,
    17,
    'partner_rate',
    '',
    '10000',
    '2026-01-29 21:40:47',
    'admin',
    'Update via settings',
    '2026-01-29 21:40:47',
    '2026-01-29 21:40:47'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    61,
    21,
    'phone',
    '',
    '',
    '2026-01-29 21:41:01',
    'admin',
    'Update via settings',
    '2026-01-29 21:41:01',
    '2026-01-29 21:41:01'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    62,
    21,
    'address',
    '',
    '',
    '2026-01-29 21:41:01',
    'admin',
    'Update via settings',
    '2026-01-29 21:41:01',
    '2026-01-29 21:41:01'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    63,
    21,
    'is_partner',
    '',
    '1',
    '2026-01-29 21:41:01',
    'admin',
    'Update via settings',
    '2026-01-29 21:41:01',
    '2026-01-29 21:41:01'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    64,
    21,
    'partner_rate',
    '',
    '12000',
    '2026-01-29 21:41:01',
    'admin',
    'Update via settings',
    '2026-01-29 21:41:01',
    '2026-01-29 21:41:01'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    65,
    26,
    'phone',
    '',
    '',
    '2026-01-29 21:41:08',
    'admin',
    'Update via settings',
    '2026-01-29 21:41:08',
    '2026-01-29 21:41:08'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    66,
    26,
    'address',
    '',
    '',
    '2026-01-29 21:41:08',
    'admin',
    'Update via settings',
    '2026-01-29 21:41:08',
    '2026-01-29 21:41:08'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    67,
    26,
    'is_partner',
    '',
    '1',
    '2026-01-29 21:41:08',
    'admin',
    'Update via settings',
    '2026-01-29 21:41:08',
    '2026-01-29 21:41:08'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    68,
    26,
    'partner_rate',
    '',
    '10000',
    '2026-01-29 21:41:08',
    'admin',
    'Update via settings',
    '2026-01-29 21:41:08',
    '2026-01-29 21:41:08'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    69,
    9,
    'phone',
    '',
    '',
    '2026-01-29 21:41:34',
    'admin',
    'Update via settings',
    '2026-01-29 21:41:34',
    '2026-01-29 21:41:34'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    70,
    9,
    'address',
    '',
    '',
    '2026-01-29 21:41:34',
    'admin',
    'Update via settings',
    '2026-01-29 21:41:34',
    '2026-01-29 21:41:34'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    71,
    9,
    'is_partner',
    '',
    '1',
    '2026-01-29 21:41:34',
    'admin',
    'Update via settings',
    '2026-01-29 21:41:34',
    '2026-01-29 21:41:34'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    72,
    9,
    'partner_rate',
    '',
    '10000',
    '2026-01-29 21:41:34',
    'admin',
    'Update via settings',
    '2026-01-29 21:41:34',
    '2026-01-29 21:41:34'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    73,
    28,
    'phone',
    '',
    '',
    '2026-01-29 21:41:44',
    'admin',
    'Update via settings',
    '2026-01-29 21:41:44',
    '2026-01-29 21:41:44'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    74,
    28,
    'address',
    '',
    '',
    '2026-01-29 21:41:44',
    'admin',
    'Update via settings',
    '2026-01-29 21:41:44',
    '2026-01-29 21:41:44'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    75,
    28,
    'is_partner',
    '',
    '1',
    '2026-01-29 21:41:44',
    'admin',
    'Update via settings',
    '2026-01-29 21:41:44',
    '2026-01-29 21:41:44'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    76,
    28,
    'partner_rate',
    '',
    '11000',
    '2026-01-29 21:41:44',
    'admin',
    'Update via settings',
    '2026-01-29 21:41:44',
    '2026-01-29 21:41:44'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    77,
    11,
    'phone',
    '',
    '',
    '2026-01-29 21:41:52',
    'admin',
    'Update via settings',
    '2026-01-29 21:41:52',
    '2026-01-29 21:41:52'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    78,
    11,
    'address',
    '',
    '',
    '2026-01-29 21:41:52',
    'admin',
    'Update via settings',
    '2026-01-29 21:41:52',
    '2026-01-29 21:41:52'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    79,
    11,
    'is_partner',
    '',
    '1',
    '2026-01-29 21:41:52',
    'admin',
    'Update via settings',
    '2026-01-29 21:41:52',
    '2026-01-29 21:41:52'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    80,
    11,
    'partner_rate',
    '',
    '12000',
    '2026-01-29 21:41:52',
    'admin',
    'Update via settings',
    '2026-01-29 21:41:52',
    '2026-01-29 21:41:52'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    81,
    4,
    'phone',
    '',
    '',
    '2026-01-29 21:42:08',
    'admin',
    'Update via settings',
    '2026-01-29 21:42:08',
    '2026-01-29 21:42:08'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    82,
    4,
    'address',
    '',
    '',
    '2026-01-29 21:42:08',
    'admin',
    'Update via settings',
    '2026-01-29 21:42:08',
    '2026-01-29 21:42:08'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    83,
    4,
    'is_partner',
    '',
    '1',
    '2026-01-29 21:42:08',
    'admin',
    'Update via settings',
    '2026-01-29 21:42:08',
    '2026-01-29 21:42:08'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    84,
    4,
    'partner_rate',
    '',
    '11000',
    '2026-01-29 21:42:08',
    'admin',
    'Update via settings',
    '2026-01-29 21:42:08',
    '2026-01-29 21:42:08'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    85,
    4,
    'phone',
    '',
    '',
    '2026-01-29 21:42:24',
    'admin',
    'Update via settings',
    '2026-01-29 21:42:24',
    '2026-01-29 21:42:24'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    86,
    4,
    'address',
    '',
    '',
    '2026-01-29 21:42:24',
    'admin',
    'Update via settings',
    '2026-01-29 21:42:24',
    '2026-01-29 21:42:24'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    87,
    4,
    'partner_rate',
    '11000',
    '10000',
    '2026-01-29 21:42:24',
    'admin',
    'Update via settings',
    '2026-01-29 21:42:24',
    '2026-01-29 21:42:24'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    88,
    3,
    'vehicle_number',
    'MH40Y1951',
    'MH29T1667',
    '2026-01-31 13:34:46',
    'Faizan',
    'Update via settings',
    '2026-01-31 13:34:46',
    '2026-01-31 13:34:46'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    89,
    11,
    'vehicle_number',
    'MH29BT0934',
    'MH29T1519',
    '2026-01-31 18:32:30',
    'Faizan',
    'Update via settings',
    '2026-01-31 18:32:30',
    '2026-01-31 18:32:30'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    90,
    11,
    'is_partner',
    '1',
    '',
    '2026-01-31 18:32:30',
    'Faizan',
    'Update via settings',
    '2026-01-31 18:32:30',
    '2026-01-31 18:32:30'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    91,
    1,
    'phone',
    '',
    '',
    '2026-02-01 19:02:25',
    'Faizan',
    'Update via settings',
    '2026-02-01 19:02:25',
    '2026-02-01 19:02:25'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    92,
    1,
    'address',
    '',
    '',
    '2026-02-01 19:02:25',
    'Faizan',
    'Update via settings',
    '2026-02-01 19:02:25',
    '2026-02-01 19:02:25'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    93,
    1,
    'is_partner',
    '',
    '1',
    '2026-02-01 19:02:25',
    'Faizan',
    'Update via settings',
    '2026-02-01 19:02:25',
    '2026-02-01 19:02:25'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    94,
    1,
    'partner_rate',
    '',
    '12000',
    '2026-02-01 19:02:25',
    'Faizan',
    'Update via settings',
    '2026-02-01 19:02:25',
    '2026-02-01 19:02:25'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    95,
    15,
    'vehicle_number',
    'MH40N7526',
    'MH27BX4740',
    '2026-02-04 20:07:55',
    'Faizan',
    'Update via settings',
    '2026-02-04 20:07:55',
    '2026-02-04 20:07:55'
  );
INSERT INTO
  `truck_owner_edit_histories` (
    `id`,
    `owner_id`,
    `field_name`,
    `old_value`,
    `new_value`,
    `change_date`,
    `changed_by`,
    `reason`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    96,
    15,
    'is_partner',
    '1',
    '',
    '2026-02-04 20:07:55',
    'Faizan',
    'Update via settings',
    '2026-02-04 20:07:55',
    '2026-02-04 20:07:55'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    1,
    'Raju Thakre ',
    NULL,
    NULL,
    0.00,
    'mixed',
    1,
    12000.00,
    0,
    0.00,
    'MH49BZ8473',
    1,
    '2026-01-29 13:51:57',
    '2026-02-01 19:02:25'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    2,
    'Nikhil Dhote',
    NULL,
    NULL,
    0.00,
    'cash',
    1,
    11000.00,
    0,
    0.00,
    'MH29AB7585',
    1,
    '2026-01-29 13:54:37',
    '2026-02-01 20:24:13'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    3,
    'Popat Seth ',
    NULL,
    NULL,
    0.00,
    'mixed',
    0,
    NULL,
    0,
    0.00,
    'MH29T1667',
    1,
    '2026-01-29 13:55:11',
    '2026-01-31 13:34:46'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    4,
    'Sohel Sayyed ',
    NULL,
    NULL,
    0.00,
    'cash',
    1,
    10000.00,
    0,
    0.00,
    'MH29T1051',
    1,
    '2026-01-29 14:02:05',
    '2026-02-04 20:16:55'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    5,
    'Sahil Sayyed ',
    NULL,
    NULL,
    0.00,
    'cash',
    1,
    10000.00,
    0,
    150.00,
    'MH40L1629',
    1,
    '2026-01-29 14:16:41',
    '2026-02-05 00:39:09'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    6,
    'Masroor Bhai ',
    NULL,
    NULL,
    0.00,
    'mixed',
    1,
    12000.00,
    0,
    0.00,
    'MH31M5768',
    1,
    '2026-01-29 14:47:29',
    '2026-01-29 21:39:12'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    7,
    'Pramod Press ',
    NULL,
    NULL,
    0.00,
    'mixed',
    1,
    12000.00,
    0,
    0.00,
    'MH29T1530',
    1,
    '2026-01-29 15:11:32',
    '2026-01-29 21:40:23'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    8,
    'Bharat Kale',
    NULL,
    NULL,
    0.00,
    'mixed',
    1,
    11000.00,
    0,
    0.00,
    'MH29BE5768',
    1,
    '2026-01-29 15:27:58',
    '2026-01-29 21:38:46'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    9,
    'Shahrukh Pathan',
    NULL,
    NULL,
    0.00,
    'cash',
    1,
    10000.00,
    0,
    0.00,
    'MH29T0288',
    1,
    '2026-01-29 15:37:02',
    '2026-01-31 13:36:53'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    10,
    'Shahebaz Bhaiya',
    NULL,
    NULL,
    0.00,
    'mixed',
    0,
    NULL,
    0,
    0.00,
    'MH32Q1248',
    1,
    '2026-01-29 15:49:49',
    '2026-01-29 15:49:49'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    11,
    'Shoaib Ner',
    NULL,
    NULL,
    0.00,
    'mixed',
    0,
    NULL,
    0,
    0.00,
    'MH29T1519',
    1,
    '2026-01-29 15:52:12',
    '2026-01-31 18:32:30'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    12,
    'Abbu Bhai',
    NULL,
    NULL,
    0.00,
    'mixed',
    0,
    NULL,
    0,
    0.00,
    'MH29-3977',
    1,
    '2026-01-29 15:55:41',
    '2026-01-29 15:55:41'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    13,
    'Aamir Babba ',
    NULL,
    NULL,
    0.00,
    'mixed',
    1,
    12000.00,
    0,
    0.00,
    'MH04FU3734',
    1,
    '2026-01-29 15:59:32',
    '2026-01-29 21:37:03'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    14,
    'Shaz Ahemad',
    NULL,
    NULL,
    0.00,
    'mixed',
    0,
    NULL,
    0,
    0.00,
    'MH49AT6089',
    1,
    '2026-01-29 16:01:53',
    '2026-01-29 16:02:07'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    15,
    'Ravi H',
    NULL,
    NULL,
    0.00,
    'mixed',
    0,
    NULL,
    0,
    0.00,
    'MH27BX4740',
    1,
    '2026-01-29 16:05:18',
    '2026-02-04 20:07:55'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    16,
    'Tarik Sharik',
    NULL,
    NULL,
    0.00,
    'mixed',
    1,
    12000.00,
    0,
    0.00,
    'MH28B8929',
    1,
    '2026-01-29 16:13:14',
    '2026-01-29 21:18:25'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    17,
    'Saddam Bhai',
    NULL,
    NULL,
    0.00,
    'cash',
    1,
    10000.00,
    0,
    0.00,
    'MH29T0400',
    1,
    '2026-01-29 16:29:05',
    '2026-02-04 20:23:44'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    18,
    'Wasim Memon',
    NULL,
    NULL,
    0.00,
    'mixed',
    1,
    10000.00,
    0,
    0.00,
    'MH03CP1869',
    1,
    '2026-01-29 16:33:11',
    '2026-02-01 12:47:47'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    19,
    'Shobu Bhai',
    NULL,
    NULL,
    0.00,
    'mixed',
    0,
    NULL,
    0,
    0.00,
    'MH29BE9020',
    1,
    '2026-01-29 17:26:01',
    '2026-01-29 17:26:01'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    20,
    'Aayan Bhai',
    NULL,
    NULL,
    0.00,
    'mixed',
    1,
    12000.00,
    0,
    0.00,
    'MH40-7077',
    1,
    '2026-01-29 17:31:46',
    '2026-01-29 21:37:13'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    21,
    'Shahezad Bhaya',
    NULL,
    NULL,
    0.00,
    'mixed',
    1,
    12000.00,
    0,
    0.00,
    'MH27BX5006',
    1,
    '2026-01-29 17:33:45',
    '2026-01-29 21:41:01'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    22,
    'Ajay Golait',
    NULL,
    NULL,
    0.00,
    'mixed',
    1,
    11000.00,
    0,
    0.00,
    'MH27BF7924',
    1,
    '2026-01-29 17:35:59',
    '2026-01-29 21:37:29'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    23,
    'Vaibhav Randive',
    NULL,
    NULL,
    0.00,
    'mixed',
    0,
    NULL,
    0,
    0.00,
    'MH31CB4968',
    1,
    '2026-01-29 17:47:08',
    '2026-01-29 17:56:19'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    24,
    'RAJU NA',
    NULL,
    NULL,
    0.00,
    'mixed',
    0,
    NULL,
    0,
    0.00,
    'MH40CM1340',
    1,
    '2026-01-29 17:53:43',
    '2026-01-29 17:53:43'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    25,
    'NARENDRA PATIL',
    NULL,
    NULL,
    0.00,
    'cash',
    0,
    NULL,
    0,
    0.00,
    'MH29T0976',
    1,
    '2026-01-29 18:05:08',
    '2026-02-03 15:10:49'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    26,
    'SHAHEZAD JHON',
    NULL,
    NULL,
    0.00,
    'mixed',
    1,
    10000.00,
    0,
    0.00,
    'MH40N3037',
    1,
    '2026-01-29 18:08:07',
    '2026-01-30 14:13:20'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    27,
    'MAHI DORLI',
    NULL,
    NULL,
    0.00,
    'mixed',
    0,
    NULL,
    0,
    0.00,
    'MH27DT1140',
    1,
    '2026-01-29 18:14:51',
    '2026-01-29 18:14:51'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    28,
    'SHEKHAR SARODE',
    NULL,
    NULL,
    0.00,
    'mixed',
    1,
    11000.00,
    0,
    0.00,
    'MH29BD5049',
    1,
    '2026-01-29 18:24:31',
    '2026-02-01 20:40:21'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    29,
    'JIVNE BABU',
    NULL,
    NULL,
    0.00,
    'cash',
    0,
    NULL,
    0,
    0.00,
    'MH32F1990',
    1,
    '2026-01-29 18:26:26',
    '2026-01-30 23:18:35'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    30,
    'SUMIT SHIRBHATE',
    NULL,
    NULL,
    0.00,
    'mixed',
    0,
    NULL,
    0,
    0.00,
    'MH32Q5452',
    1,
    '2026-01-29 18:31:17',
    '2026-01-29 18:31:17'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    31,
    'ASLAM NA',
    NULL,
    NULL,
    0.00,
    'mixed',
    0,
    NULL,
    0,
    0.00,
    'MH29BE0585',
    1,
    '2026-01-29 18:37:44',
    '2026-01-29 18:37:44'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    32,
    'BANTY DESHMUKH',
    NULL,
    NULL,
    0.00,
    'cash',
    1,
    10000.00,
    0,
    0.00,
    'MH40CM8462',
    1,
    '2026-01-29 20:16:11',
    '2026-01-31 21:29:42'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    33,
    'WASIM PATHAN',
    NULL,
    NULL,
    0.00,
    'mixed',
    1,
    11000.00,
    0,
    0.00,
    'MH29T0288',
    1,
    '2026-01-29 20:47:41',
    '2026-02-03 21:52:28'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    34,
    'Raju Tajne',
    NULL,
    NULL,
    0.00,
    'cash',
    0,
    NULL,
    0,
    0.00,
    'MH40Y8231',
    1,
    '2026-01-29 22:51:19',
    '2026-01-29 22:51:19'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    35,
    'KIRAN MATE',
    NULL,
    NULL,
    0.00,
    'mixed',
    0,
    NULL,
    0,
    0.00,
    'MH29BE5904',
    1,
    '2026-01-30 12:49:35',
    '2026-02-01 20:31:57'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    36,
    'ARBAZ BHAI',
    NULL,
    NULL,
    0.00,
    'cash',
    0,
    NULL,
    0,
    0.00,
    'MH40N7150',
    1,
    '2026-01-30 13:21:12',
    '2026-01-30 13:21:12'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    37,
    'SAILESH BELEKAR',
    NULL,
    NULL,
    0.00,
    'cash',
    0,
    NULL,
    0,
    2.00,
    '8411949466',
    1,
    '2026-01-30 13:57:24',
    '2026-01-30 14:54:10'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    38,
    'VISHAL PANDARPURE',
    NULL,
    NULL,
    0.00,
    'cash',
    0,
    NULL,
    0,
    0.00,
    'MH36F1695',
    1,
    '2026-01-30 14:09:35',
    '2026-02-04 20:09:35'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    39,
    'GANESH SHIRSAGAR',
    NULL,
    NULL,
    0.00,
    'cash',
    0,
    NULL,
    0,
    0.00,
    'MH04EB7139',
    1,
    '2026-01-30 14:12:46',
    '2026-02-03 18:21:49'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    40,
    'SHAZ AHMAD',
    NULL,
    NULL,
    0.00,
    'mixed',
    0,
    NULL,
    0,
    0.00,
    'TN91L8190',
    1,
    '2026-01-30 16:24:23',
    '2026-01-30 16:24:24'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    41,
    'DINESH KALE',
    NULL,
    NULL,
    0.00,
    'cash',
    0,
    NULL,
    0,
    0.00,
    'BR01GE7886',
    1,
    '2026-01-30 16:34:51',
    '2026-01-31 22:21:33'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    42,
    'GOLU KATKAAR',
    NULL,
    NULL,
    0.00,
    'cash',
    0,
    NULL,
    0,
    0.00,
    'MH49BZ7403',
    1,
    '2026-01-30 17:42:10',
    '2026-01-31 18:04:56'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    43,
    'NIKHIL BAWNE',
    NULL,
    NULL,
    0.00,
    'cash',
    0,
    NULL,
    0,
    0.00,
    'MH34AV2583',
    1,
    '2026-01-30 17:48:48',
    '2026-01-30 17:49:36'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    44,
    'RAJU SAYYED',
    NULL,
    NULL,
    0.00,
    'cash',
    0,
    NULL,
    0,
    0.00,
    'MH04FP0309',
    1,
    '2026-01-30 20:17:15',
    '2026-01-31 17:12:37'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    46,
    'RAJAT BHOYAR',
    NULL,
    NULL,
    0.00,
    'cash',
    0,
    NULL,
    0,
    0.00,
    'MH31BC7531',
    1,
    '2026-01-31 17:21:53',
    '2026-01-31 17:21:53'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    47,
    'SHAHRUKH MAREGAON',
    NULL,
    NULL,
    0.00,
    'cash',
    0,
    NULL,
    0,
    2500.00,
    'MH04EL6325',
    1,
    '2026-01-31 17:31:45',
    '2026-02-01 21:39:45'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    48,
    'Dinesh Landge',
    NULL,
    NULL,
    0.00,
    'mixed',
    0,
    NULL,
    0,
    0.00,
    'MH29T0640',
    1,
    '2026-01-31 23:08:35',
    '2026-01-31 23:08:35'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    49,
    'RAZZAK BHAI',
    NULL,
    NULL,
    0.00,
    'cash',
    0,
    NULL,
    0,
    0.00,
    'MH 31CB 7531',
    1,
    '2026-02-01 20:01:31',
    '2026-02-01 20:01:31'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    50,
    'ROMU FUTANE',
    NULL,
    NULL,
    0.00,
    'mixed',
    0,
    NULL,
    0,
    0.00,
    'MH 32 AJ 4276',
    1,
    '2026-02-01 20:10:15',
    '2026-02-03 23:08:28'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    51,
    'NILESH BELEKAR',
    NULL,
    NULL,
    0.00,
    'cash',
    0,
    NULL,
    0,
    0.00,
    'MH27X 5695',
    1,
    '2026-02-01 20:52:42',
    '2026-02-01 20:52:42'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    52,
    'SANJAY KUBADE',
    NULL,
    NULL,
    0.00,
    'cash',
    0,
    NULL,
    0,
    0.00,
    'MH32AJ3314',
    1,
    '2026-02-01 20:58:53',
    '2026-02-04 20:46:09'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    53,
    'PRASAD THAKRE',
    NULL,
    NULL,
    0.00,
    'cash',
    0,
    NULL,
    0,
    0.00,
    'MH35AJ0247',
    1,
    '2026-02-01 21:54:12',
    '2026-02-04 20:13:19'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    54,
    'VILAS THAKRE',
    NULL,
    NULL,
    0.00,
    'mixed',
    0,
    NULL,
    0,
    0.00,
    'MH49 0710',
    1,
    '2026-02-03 14:57:09',
    '2026-02-03 14:57:09'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    55,
    'CHAND BHAI',
    NULL,
    NULL,
    0.00,
    'mixed',
    0,
    NULL,
    0,
    0.00,
    'MH29T2322',
    1,
    '2026-02-03 15:03:51',
    '2026-02-03 15:03:51'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    56,
    'AAMIR BOTHA',
    NULL,
    NULL,
    0.00,
    'mixed',
    0,
    NULL,
    0,
    0.00,
    'MH29CH2588',
    1,
    '2026-02-03 21:24:13',
    '2026-02-03 21:24:13'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    57,
    'SHEKHAR  SARODE',
    NULL,
    NULL,
    0.00,
    'mixed',
    0,
    NULL,
    0,
    0.00,
    'MH29BD6458',
    1,
    '2026-02-03 21:33:41',
    '2026-02-03 21:33:42'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    58,
    'SAYYED BHAI',
    NULL,
    NULL,
    0.00,
    'mixed',
    0,
    NULL,
    0,
    0.00,
    'MH04HD2555',
    1,
    '2026-02-04 20:21:22',
    '2026-02-04 20:21:22'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    59,
    'NOMAN BHAI',
    NULL,
    NULL,
    0.00,
    'mixed',
    0,
    NULL,
    0,
    0.00,
    'MH40N1199',
    1,
    '2026-02-04 20:27:37',
    '2026-02-04 20:27:38'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    60,
    'AVEZ PATHAN',
    NULL,
    NULL,
    0.00,
    'mixed',
    0,
    NULL,
    0,
    0.00,
    'MH31CB3322',
    1,
    '2026-02-04 20:35:48',
    '2026-02-04 20:35:48'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    61,
    'Mangesh Press',
    NULL,
    NULL,
    0.00,
    'mixed',
    0,
    NULL,
    0,
    0.00,
    'MH29T1530',
    1,
    '2026-02-04 21:09:45',
    '2026-02-04 21:09:45'
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
    `is_gst_client`,
    `deposit_balance`,
    `vehicle_number`,
    `is_active`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    62,
    'Ketan Sur',
    NULL,
    NULL,
    0.00,
    'cash',
    0,
    NULL,
    0,
    0.00,
    'MH34BG9176',
    1,
    '2026-02-04 23:45:22',
    '2026-02-04 23:45:22'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    1,
    'MH49BZ8473',
    1,
    'Pramod',
    '6 Tyre',
    '2026-01-29 13:51:57',
    '2026-01-29 13:51:57'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    2,
    'MH29AB7585',
    2,
    'Shubham ',
    '6 Tyre',
    '2026-01-29 13:54:37',
    '2026-01-29 13:54:37'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    3,
    'MH40Y1951',
    3,
    'Raju',
    '6 Tyre',
    '2026-01-29 13:55:29',
    '2026-01-29 13:55:29'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    4,
    'MH29T1051',
    4,
    'Suraj',
    '6 Tyre',
    '2026-01-29 14:02:06',
    '2026-01-29 14:02:06'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    5,
    'MH29BE4455',
    3,
    'Amol',
    '10 Tyre',
    '2026-01-29 14:03:15',
    '2026-02-01 21:43:48'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    6,
    'MH35AJ0247',
    53,
    'Sandip',
    '6 Tyre',
    '2026-01-29 14:04:45',
    '2026-02-01 21:54:13'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    7,
    'MH40L1629',
    5,
    'Mohan',
    '6 Tyre',
    '2026-01-29 14:16:41',
    '2026-01-29 14:16:41'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    8,
    'MH31M5768',
    6,
    'Raju',
    '6 Tyre',
    '2026-01-29 14:47:29',
    '2026-01-29 14:47:29'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    9,
    'MH29T1530',
    61,
    'Pawan',
    '6 Tyre',
    '2026-01-29 15:11:32',
    '2026-02-04 21:09:45'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    10,
    'MH29BE5768',
    8,
    'Hitesh',
    '6 Tyre',
    '2026-01-29 15:27:58',
    '2026-01-29 15:27:58'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    11,
    'MH40N5437',
    8,
    'Khushal',
    '6 Tyre',
    '2026-01-29 15:29:52',
    '2026-01-29 15:29:52'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    12,
    'MH29T0288',
    33,
    'Aakash',
    '6 Tyre',
    '2026-01-29 15:37:02',
    '2026-01-29 20:47:41'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    13,
    'MH04GR9803',
    33,
    'Golu',
    '6 Tyre',
    '2026-01-29 15:38:50',
    '2026-01-29 20:48:35'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    14,
    'MH32Q1248',
    10,
    'munna',
    '10 Tyre',
    '2026-01-29 15:49:49',
    '2026-01-31 14:56:41'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    15,
    'MH29BT0934',
    11,
    'Pappu',
    '6 Tyre',
    '2026-01-29 15:52:12',
    '2026-01-29 15:52:12'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    16,
    'MH29-3977',
    12,
    'Mama',
    '6 Tyre',
    '2026-01-29 15:55:41',
    '2026-01-29 15:55:41'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    17,
    'MH40-4177',
    12,
    'MAMA',
    '6 Tyre',
    '2026-01-29 15:57:20',
    '2026-01-29 15:57:20'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    18,
    'MH04FU3734',
    13,
    'Mintu dada',
    '6 Tyre',
    '2026-01-29 15:59:47',
    '2026-01-29 15:59:47'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    19,
    'MH49AT6089',
    14,
    'kALIM',
    '10 Tyre',
    '2026-01-29 16:02:07',
    '2026-01-29 16:02:07'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    20,
    'MH40N7526',
    15,
    'Gajanan',
    '6 Tyre',
    '2026-01-29 16:05:18',
    '2026-01-29 16:05:18'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    21,
    'MH28B8929',
    16,
    'Dhanraj',
    '6 Tyre',
    '2026-01-29 16:13:14',
    '2026-01-29 16:13:14'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    22,
    'MH29T0400',
    17,
    'Umesh',
    '6 Tyre',
    '2026-01-29 16:29:05',
    '2026-01-29 16:29:05'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    23,
    'MH03CP1869',
    18,
    'Kalim',
    '6 Tyre',
    '2026-01-29 16:33:11',
    '2026-01-29 16:33:11'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    24,
    'MH29BE9020',
    19,
    'Nadir',
    '6 Tyre',
    '2026-01-29 17:26:01',
    '2026-01-29 17:26:01'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    25,
    'MH04N6917',
    12,
    'Ashpak',
    '6 Tyre',
    '2026-01-29 17:29:17',
    '2026-01-29 17:29:17'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    26,
    'MH40-7077',
    20,
    'Farukh',
    '6 Tyre',
    '2026-01-29 17:31:47',
    '2026-01-29 17:31:47'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    27,
    'MH27BX5006',
    21,
    'SANTOSH',
    '6 Tyre',
    '2026-01-29 17:33:45',
    '2026-01-29 20:52:19'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    28,
    'MH27BF7924',
    22,
    'Salim',
    '6 Tyre',
    '2026-01-29 17:36:00',
    '2026-01-29 17:36:00'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    29,
    'MH40N6624',
    22,
    'FIROZ',
    '6 Tyre',
    '2026-01-29 17:41:07',
    '2026-01-29 17:41:07'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    30,
    'MH40CM9654',
    23,
    'Gajanan',
    '10 Tyre',
    '2026-01-29 17:47:09',
    '2026-01-29 17:47:09'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    31,
    'MH29BE3577',
    22,
    'NOORA BHAI',
    '6 Tyre',
    '2026-01-29 17:51:22',
    '2026-01-29 17:51:22'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    32,
    'MH40CM1340',
    24,
    'SHER KHAN',
    '10 Tyre',
    '2026-01-29 17:53:43',
    '2026-01-29 17:53:43'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    33,
    'MH31-2322',
    6,
    'NYANESHWAR',
    '6 Tyre',
    '2026-01-29 17:55:31',
    '2026-01-29 17:55:31'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    34,
    'MH31CB4968',
    23,
    'LAXMAN',
    '6 Tyre',
    '2026-01-29 17:56:26',
    '2026-01-29 17:56:26'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    35,
    'NL01AJ5912',
    23,
    'ZAHIR',
    '10 Tyre',
    '2026-01-29 17:57:30',
    '2026-01-29 17:57:30'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    36,
    'MH06BD7171',
    22,
    'SHUBHAM',
    '6 Tyre',
    '2026-01-29 17:59:08',
    '2026-01-29 17:59:08'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    37,
    'MH05AM510',
    22,
    'SANTOSH',
    '6 Tyre',
    '2026-01-29 18:03:49',
    '2026-01-29 18:03:49'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    38,
    'MH29T0976',
    25,
    'MAHADEO',
    '6 Tyre',
    '2026-01-29 18:05:09',
    '2026-01-29 18:05:09'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    39,
    'MH31DS1106',
    24,
    'AVINASH',
    '6 Tyre',
    '2026-01-29 18:06:49',
    '2026-01-29 18:06:49'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    40,
    'MH40N3037',
    26,
    'SALIM',
    '6 Tyre',
    '2026-01-29 18:08:07',
    '2026-01-29 18:08:07'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    41,
    'MH27DT1140',
    27,
    'NILESH',
    '6 Tyre',
    '2026-01-29 18:14:51',
    '2026-01-29 18:14:51'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    42,
    'MH29BE4276',
    25,
    'BHARAT',
    '10 Tyre',
    '2026-01-29 18:16:04',
    '2026-02-03 15:04:48'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    43,
    'MH35K5049',
    25,
    'UMESH',
    '6 Tyre',
    '2026-01-29 18:17:32',
    '2026-01-29 18:17:32'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    44,
    'MH40T013',
    9,
    'SHANKAR',
    '6 Tyre',
    '2026-01-29 18:19:17',
    '2026-01-29 18:19:17'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    45,
    'MH29BD5049',
    28,
    'NILESH',
    '6 Tyre',
    '2026-01-29 18:24:31',
    '2026-01-29 18:24:31'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    46,
    'MH32F1990',
    29,
    'BABA',
    '6 Tyre',
    '2026-01-29 18:26:26',
    '2026-01-29 18:26:26'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    47,
    'MH02C8007',
    29,
    'BABA',
    '6 Tyre',
    '2026-01-29 18:27:10',
    '2026-01-29 18:27:10'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    48,
    'MH32Q5452',
    30,
    'RAJKUMAR',
    '6 Tyre',
    '2026-01-29 18:31:17',
    '2026-01-29 18:31:17'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    49,
    'MH40Y0075',
    30,
    'KISHAN',
    '6 Tyre',
    '2026-01-29 18:32:07',
    '2026-01-29 18:32:07'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    50,
    'MH05AN1468',
    23,
    'AASHISH',
    '6 Tyre',
    '2026-01-29 18:34:26',
    '2026-01-29 18:34:26'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    51,
    'MH29BE0585',
    31,
    'KALIM',
    '6 Tyre',
    '2026-01-29 18:37:44',
    '2026-01-29 18:37:44'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    52,
    'MH29BE0019',
    25,
    'VINOD',
    '6 Tyre',
    '2026-01-29 18:44:53',
    '2026-01-29 18:44:53'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    53,
    'MH29BE9076',
    25,
    'MANIK',
    '12 Tyre',
    '2026-01-29 18:45:53',
    '2026-01-29 18:45:53'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    54,
    'MH32AJ6475',
    1,
    'KARTIK',
    '6 Tyre',
    '2026-01-29 19:40:03',
    '2026-01-29 19:40:03'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    55,
    'MH40CM8462',
    32,
    'DHIRAJ',
    '6 Tyre',
    '2026-01-29 20:16:12',
    '2026-01-30 17:03:43'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    56,
    'MH40CM1344',
    24,
    'SHER KHAN',
    '10 Tyre',
    '2026-01-29 22:46:53',
    '2026-01-29 22:46:53'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    57,
    'MH40Y8231',
    34,
    'Ravindra',
    '10 Tyre',
    '2026-01-29 22:51:19',
    '2026-01-29 22:51:19'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    58,
    'MH31CQ8667',
    7,
    'SAHIL',
    '6 Tyre',
    '2026-01-30 12:42:19',
    '2026-01-30 12:42:19'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    59,
    'MH29BE5904',
    35,
    'VILAS',
    '10 Tyre',
    '2026-01-30 12:49:35',
    '2026-01-30 12:49:35'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    60,
    'MH40N7150',
    36,
    'ARBAZ',
    '6 Tyre',
    '2026-01-30 13:21:13',
    '2026-01-31 13:47:54'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    61,
    '8411949466',
    37,
    'DIPAK',
    '6 Tyre',
    '2026-01-30 13:57:24',
    '2026-01-30 13:57:24'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    62,
    'MH36F1695',
    38,
    'YOGESH',
    '6 Tyre',
    '2026-01-30 14:09:35',
    '2026-01-30 14:09:35'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    63,
    'MH04EB7139',
    39,
    'SACHIIN',
    '6 Tyre',
    '2026-01-30 14:12:46',
    '2026-01-30 14:12:46'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    64,
    'MH49AT7175',
    12,
    'Mama',
    '10 Tyre',
    '2026-01-30 14:49:18',
    '2026-01-30 14:49:18'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    65,
    'TN91L8190',
    40,
    'PANKAJ',
    '12 Tyre',
    '2026-01-30 16:24:24',
    '2026-01-30 16:24:24'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    66,
    'BR01GE7886',
    41,
    'PRAVIN',
    '6 Tyre',
    '2026-01-30 16:34:51',
    '2026-01-30 16:34:51'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    67,
    'MH49BZ7403',
    42,
    'DASHRAT',
    '6 Tyre',
    '2026-01-30 17:42:10',
    '2026-01-30 17:42:10'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    68,
    'MH34AV2583',
    43,
    'JIVAN',
    '10 Tyre',
    '2026-01-30 17:48:48',
    '2026-01-30 17:48:48'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    69,
    'MH34CM1616',
    43,
    'Raju',
    '12 Tyre',
    '2026-01-30 17:49:36',
    '2026-01-31 17:19:09'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    70,
    'MH05AM1468',
    23,
    'AASHISH',
    '6 Tyre',
    '2026-01-30 17:55:28',
    '2026-01-30 17:55:28'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    71,
    'MH32AK4446',
    35,
    'MAHADEO',
    '10 Tyre',
    '2026-01-30 18:47:40',
    '2026-01-30 18:47:40'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    72,
    'MH36F1820',
    35,
    'NIKHIL',
    '6 Tyre',
    '2026-01-30 18:49:06',
    '2026-01-30 18:49:06'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    73,
    'MH29BE9916',
    35,
    'AAKASH',
    '12 Tyre',
    '2026-01-30 18:51:42',
    '2026-01-30 18:51:42'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    74,
    'MH04FP0309',
    44,
    'RAHUL',
    '6 Tyre',
    '2026-01-30 20:17:15',
    '2026-01-30 20:17:15'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    75,
    ' MH29T0781',
    35,
    'DINESH',
    '6 Tyre',
    '2026-01-30 20:38:10',
    '2026-01-30 20:38:10'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    76,
    'MH29BE8766',
    35,
    'AKHIL',
    '12 Tyre',
    '2026-01-30 20:39:43',
    '2026-01-30 20:39:43'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    77,
    'MH29T1667',
    3,
    'golu',
    '6 Tyre',
    '2026-01-31 13:34:46',
    '2026-01-31 18:03:31'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    78,
    'MH40T0135',
    9,
    'SHANKAR',
    '6 Tyre',
    '2026-01-31 13:36:53',
    '2026-01-31 13:36:53'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    79,
    'MH32Q7474',
    32,
    'golu',
    '6 Tyre',
    '2026-01-31 14:37:07',
    '2026-01-31 14:37:07'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    80,
    'MH35AJ2031',
    41,
    'KISHOR',
    '10 Tyre',
    '2026-01-31 15:00:02',
    '2026-01-31 15:00:02'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    81,
    'MH29BE6635',
    41,
    'RAVI',
    '6 Tyre',
    '2026-01-31 15:03:15',
    '2026-01-31 15:03:15'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    82,
    'MH31BC7531',
    46,
    'SHATRU',
    '6 Tyre',
    '2026-01-31 17:21:53',
    '2026-01-31 17:21:53'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    83,
    'MH29BT0924',
    11,
    'Pappu',
    '6 Tyre',
    '2026-01-31 17:27:48',
    '2026-01-31 17:27:48'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    84,
    'MH04EL6325',
    47,
    'AEJAZ',
    '6 Tyre',
    '2026-01-31 17:31:45',
    '2026-01-31 17:31:45'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    85,
    'MH34BZ9339',
    47,
    'AEJAZ',
    '12 Tyre',
    '2026-01-31 17:39:44',
    '2026-02-01 20:19:05'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    86,
    'MH29T1519',
    11,
    'SHUBHAM',
    '6 Tyre',
    '2026-01-31 18:32:30',
    '2026-01-31 18:32:30'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    87,
    'MH29T0640',
    48,
    'Avduth',
    '6 Tyre',
    '2026-01-31 23:08:35',
    '2026-01-31 23:08:35'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    88,
    'MH 31CB 7531',
    49,
    NULL,
    '6 Tyre',
    '2026-02-01 20:01:31',
    '2026-02-01 20:01:31'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    89,
    'MH 32 AJ 4276',
    50,
    'dadarao',
    '6 Tyre',
    '2026-02-01 20:10:15',
    '2026-02-03 23:08:28'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    90,
    'MH27X 5695',
    51,
    'DIPAK',
    '6 Tyre',
    '2026-02-01 20:52:42',
    '2026-02-01 20:52:42'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    91,
    'MH37J1383',
    51,
    'AAKASH',
    '6 Tyre',
    '2026-02-01 20:55:52',
    '2026-02-01 20:55:52'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    92,
    'MH32AJ3314',
    52,
    'SANDIP',
    '6 Tyre',
    '2026-02-01 20:59:28',
    '2026-02-01 20:59:28'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    93,
    'MH49 0710',
    54,
    'KALIPNATH',
    '6 Tyre',
    '2026-02-03 14:57:09',
    '2026-02-03 14:57:09'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    94,
    'MH29T2322',
    55,
    'NYANESHWAR',
    '6 Tyre',
    '2026-02-03 15:03:51',
    '2026-02-03 15:03:51'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    95,
    'MH29BV1057',
    39,
    'GANESH',
    '6 Tyre',
    '2026-02-03 18:21:49',
    '2026-02-03 18:21:49'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    96,
    'MH29CH2588',
    56,
    'Khushal',
    '10 Tyre',
    '2026-02-03 21:24:13',
    '2026-02-03 21:24:13'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    97,
    'MH29BD6458',
    57,
    'MAHESH',
    '6 Tyre',
    '2026-02-03 21:33:42',
    '2026-02-03 21:33:42'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    98,
    'MH04EB7439',
    39,
    'SACHIIN',
    '6 Tyre',
    '2026-02-03 21:58:17',
    '2026-02-03 21:58:17'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    99,
    'MH27BX4740',
    15,
    NULL,
    '6 Tyre',
    '2026-02-04 20:07:55',
    '2026-02-04 20:07:55'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    100,
    'MH40N7158',
    36,
    'ARBAZ',
    '6 Tyre',
    '2026-02-04 20:16:00',
    '2026-02-04 20:16:00'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    101,
    '8855808250',
    37,
    'DHIRAJ',
    '6 Tyre',
    '2026-02-04 20:19:45',
    '2026-02-04 20:19:45'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    102,
    'MH04HD2555',
    58,
    'SANTOSH',
    '6 Tyre',
    '2026-02-04 20:21:22',
    '2026-02-04 20:21:22'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    103,
    'MH40N1199',
    59,
    'TAUFIK',
    NULL,
    '2026-02-04 20:27:38',
    '2026-02-04 20:27:38'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    104,
    'MH31CB3322',
    60,
    'LOKESH',
    '6 Tyre',
    '2026-02-04 20:35:48',
    '2026-02-04 20:35:48'
  );
INSERT INTO
  `truck_vehicles` (
    `id`,
    `vehicle_number`,
    `truck_owner_id`,
    `driver_name`,
    `tyre_type`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    105,
    'MH34BG9176',
    62,
    'Kunal',
    '12 Tyre',
    '2026-02-04 23:45:23',
    '2026-02-04 23:45:23'
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
    1,
    'admin',
    '$2b$10$Kb2Frq1GcEh6vWDoyNZAOOEbGOl05E7pMSvBskOT0eESRaP8vEyY2',
    'Administrator',
    'admin',
    0,
    '2025-12-12 03:56:40',
    '2026-01-29 22:07:11'
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
    '$2b$10$faU9ZDf2i67fOzfMkz1o1.unf6FVyn9.3YkIwA7XdhF.tCoKGN6wm',
    'Standard User',
    'user',
    1,
    '2025-12-12 03:56:40',
    '2026-01-27 15:26:37'
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
    3,
    'Faizan',
    '$2b$10$H6V27N0nfu/xN3ECicf4M.3LXrvDSEpfnQKFi7xPpfXRaiB6NgEK6',
    'Faizan',
    'admin',
    1,
    '2026-01-29 22:06:59',
    '2026-01-29 22:06:59'
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
    4,
    'Sanjay',
    '$2b$10$watlY3puJr8.Nqp7mkr2fO8ms/H1kkQLuZ5i81hnPGrEmTv70MRcq',
    'Sanjay Wakulkar',
    'user',
    1,
    '2026-02-01 18:52:56',
    '2026-02-01 18:52:56'
  );
INSERT INTO
  `vehicle_ownership_histories` (
    `id`,
    `vehicle_number`,
    `previous_owner_id`,
    `new_owner_id`,
    `change_date`,
    `changed_by`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    1,
    'MH29T0288',
    9,
    33,
    '2026-01-29 20:47:41',
    'admin',
    '2026-01-29 20:47:41',
    '2026-01-29 20:47:41'
  );
INSERT INTO
  `vehicle_ownership_histories` (
    `id`,
    `vehicle_number`,
    `previous_owner_id`,
    `new_owner_id`,
    `change_date`,
    `changed_by`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    2,
    'MH04GR9803',
    9,
    33,
    '2026-01-29 20:48:35',
    'admin',
    '2026-01-29 20:48:35',
    '2026-01-29 20:48:35'
  );
INSERT INTO
  `vehicle_ownership_histories` (
    `id`,
    `vehicle_number`,
    `previous_owner_id`,
    `new_owner_id`,
    `change_date`,
    `changed_by`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    3,
    'MH35AJ0247',
    1,
    53,
    '2026-02-01 21:54:13',
    'Faizan',
    '2026-02-01 21:54:13',
    '2026-02-01 21:54:13'
  );
INSERT INTO
  `vehicle_ownership_histories` (
    `id`,
    `vehicle_number`,
    `previous_owner_id`,
    `new_owner_id`,
    `change_date`,
    `changed_by`,
    `createdAt`,
    `updatedAt`
  )
VALUES
  (
    4,
    'MH29T1530',
    7,
    61,
    '2026-02-04 21:09:45',
    'Faizan',
    '2026-02-04 21:09:45',
    '2026-02-04 21:09:45'
  );

SET FOREIGN_KEY_CHECKS = 1;
