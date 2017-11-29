DROP TABLE IF EXISTS projections;
CREATE TABLE IF NOT EXISTS projections (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    business_id INT(11) NOT NULL,
    expected_profit DECIMAL(13,2) NOT NULL,
    expected_at DATETIME NOT NULL,
    created_at DATETIME,
    updated_at DATETIME,
    INDEX (business_id)
) ENGINE = InnoDB;
