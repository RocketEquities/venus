-- businesses
INSERT INTO businesses (name, description, overview, investment_period, payback_period, irr, created_at, updated_at) VALUES ('Business 1', 'Business 1 description', 'Business 1 overview', 20, 15, 30.75, now(), now());
INSERT INTO businesses (name, description, overview, investment_period, payback_period, irr, created_at, updated_at) VALUES ('Business 2', 'Business 2 description', 'Business 2 overview', 15, 10, 23.8, now(), now());
INSERT INTO businesses (name, description, overview, investment_period, payback_period, irr, created_at, updated_at) VALUES ('Business 3', 'Business 3 description', 'Business 3 overview', 10, 5, 4.5, now(), now());

-- investments
INSERT INTO investments (user_id, business_id, amount, created_at, updated_at) VALUES (1, 1, 1000.00, now(), now());
INSERT INTO investments (user_id, business_id, amount, created_at, updated_at) VALUES (1, 1, 2000.00, now(), now());
INSERT INTO investments (user_id, business_id, amount, created_at, updated_at) VALUES (1, 2, 3000.00, now(), now());
INSERT INTO investments (user_id, business_id, amount, created_at, updated_at) VALUES (1, 2, 4000.00, now(), now());
INSERT INTO investments (user_id, business_id, amount, created_at, updated_at) VALUES (1, 3, 5000.00, now(), now());
INSERT INTO investments (user_id, business_id, amount, created_at, updated_at) VALUES (1, 3, 6000.00, now(), now());

-- projections
INSERT INTO projections (business_id, expected_profit, expected_at, created_at, updated_at) VALUES (1, 10000, '2017-12-31', now(), now());
INSERT INTO projections (business_id, expected_profit, expected_at, created_at, updated_at) VALUES (1, 20000, '2018-12-31', now(), now());
INSERT INTO projections (business_id, expected_profit, expected_at, created_at, updated_at) VALUES (1, 30000, '2019-12-31', now(), now());
INSERT INTO projections (business_id, expected_profit, expected_at, created_at, updated_at) VALUES (1, 40000, '2020-12-31', now(), now());
INSERT INTO projections (business_id, expected_profit, expected_at, created_at, updated_at) VALUES (1, 50000, '2021-12-31', now(), now());
INSERT INTO projections (business_id, expected_profit, expected_at, created_at, updated_at) VALUES (1, 60000, '2022-12-31', now(), now());
INSERT INTO projections (business_id, expected_profit, expected_at, created_at, updated_at) VALUES (1, 70000, '2023-12-31', now(), now());
INSERT INTO projections (business_id, expected_profit, expected_at, created_at, updated_at) VALUES (1, 80000, '2024-12-31', now(), now());
INSERT INTO projections (business_id, expected_profit, expected_at, created_at, updated_at) VALUES (1, 90000, '2025-12-31', now(), now());

INSERT INTO projections (business_id, expected_profit, expected_at, created_at, updated_at) VALUES (2, 100000, '2017-01-15', now(), now());
INSERT INTO projections (business_id, expected_profit, expected_at, created_at, updated_at) VALUES (2, 200000, '2018-01-15', now(), now());
INSERT INTO projections (business_id, expected_profit, expected_at, created_at, updated_at) VALUES (2, 300000, '2019-01-15', now(), now());
INSERT INTO projections (business_id, expected_profit, expected_at, created_at, updated_at) VALUES (2, 400000, '2020-01-15', now(), now());
INSERT INTO projections (business_id, expected_profit, expected_at, created_at, updated_at) VALUES (2, 500000, '2021-01-15', now(), now());

-- profits
INSERT INTO profits (user_id, business_id, actual_amount, expected_amount, expected_at, created_at, updated_at) VALUES (1, 1, 10000, 10000, '2017-12-31', now(), now());
INSERT INTO profits (user_id, business_id, actual_amount, expected_amount, expected_at, created_at, updated_at) VALUES (1, 1, 15000, 20000, '2018-12-31', now(), now());
INSERT INTO profits (user_id, business_id, actual_amount, expected_amount, expected_at, created_at, updated_at) VALUES (1, 1, 25000, 30000, '2019-12-31', now(), now());
INSERT INTO profits (user_id, business_id, actual_amount, expected_amount, expected_at, created_at, updated_at) VALUES (1, 1, 35000, 40000, '2020-12-31', now(), now());
INSERT INTO profits (user_id, business_id, actual_amount, expected_amount, expected_at, created_at, updated_at) VALUES (1, 1, 48000, 50000, '2021-12-31', now(), now());
INSERT INTO profits (user_id, business_id, actual_amount, expected_amount, expected_at, created_at, updated_at) VALUES (1, 1, NULL,  60000, '2022-12-31', now(), now());
INSERT INTO profits (user_id, business_id, actual_amount, expected_amount, expected_at, created_at, updated_at) VALUES (1, 1, NULL,  70000, '2023-12-31', now(), now());
INSERT INTO profits (user_id, business_id, actual_amount, expected_amount, expected_at, created_at, updated_at) VALUES (1, 1, NULL,  80000, '2024-12-31', now(), now());
INSERT INTO profits (user_id, business_id, actual_amount, expected_amount, expected_at, created_at, updated_at) VALUES (1, 1, NULL,  90000, '2025-12-31', now(), now());

INSERT INTO profits (user_id, business_id, actual_amount, expected_amount, expected_at, created_at, updated_at) VALUES (1, 2, 150000, 100000, '2017-01-15', now(), now());
INSERT INTO profits (user_id, business_id, actual_amount, expected_amount, expected_at, created_at, updated_at) VALUES (1, 2, 170000, 200000, '2018-01-15', now(), now());
INSERT INTO profits (user_id, business_id, actual_amount, expected_amount, expected_at, created_at, updated_at) VALUES (1, 2, 330000, 300000, '2019-01-15', now(), now());
INSERT INTO profits (user_id, business_id, actual_amount, expected_amount, expected_at, created_at, updated_at) VALUES (1, 2, 450000, 400000, '2020-01-15', now(), now());
INSERT INTO profits (user_id, business_id, actual_amount, expected_amount, expected_at, created_at, updated_at) VALUES (1, 2, NULL,   500000, '2021-01-15', now(), now());
