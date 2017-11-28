DROP TABLE IF EXISTS businesses;
CREATE TABLE IF NOT EXISTS businesses (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    description VARCHAR(256),
    overview VARCHAR(1024),
    investment_period INT(3),
    payback_period INT(3),
    irr DECIMAL(5,2),
    created_at DATETIME,
    updated_at DATETIME
) ENGINE = InnoDB;
