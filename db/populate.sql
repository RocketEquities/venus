INSERT INTO businesses (name, description, overview, investment_period, payback_period, irr, created_at, updated_at) VALUES ("Business 1", "Business 1 description", "Business 1 overview", 20, 15, 30.75, now(), now());
INSERT INTO businesses (name, description, overview, investment_period, payback_period, irr, created_at, updated_at) VALUES ("Business 2", "Business 2 description", "Business 2 overview", 15, 10, 23.8, now(), now());
INSERT INTO businesses (name, description, overview, investment_period, payback_period, irr, created_at, updated_at) VALUES ("Business 3", "Business 3 description", "Business 3 overview", 10, 5, 4.5, now(), now());

INSERT INTO investments (user_id, business_id, amount, created_at, updated_at) VALUES (1, 1, 1000.00, now(), now());
INSERT INTO investments (user_id, business_id, amount, created_at, updated_at) VALUES (1, 1, 2000.00, now(), now());
INSERT INTO investments (user_id, business_id, amount, created_at, updated_at) VALUES (1, 2, 3000.00, now(), now());
INSERT INTO investments (user_id, business_id, amount, created_at, updated_at) VALUES (1, 2, 4000.00, now(), now());
INSERT INTO investments (user_id, business_id, amount, created_at, updated_at) VALUES (1, 3, 5000.00, now(), now());
INSERT INTO investments (user_id, business_id, amount, created_at, updated_at) VALUES (1, 3, 6000.00, now(), now());

