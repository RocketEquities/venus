ALTER TABLE businesses ADD investment_period INT(3) AFTER overview;
ALTER TABLE businesses ADD payback_period INT(3) AFTER investment_period;
ALTER TABLE businesses ADD irr DECIMAL(5,2) AFTER payback_period;
