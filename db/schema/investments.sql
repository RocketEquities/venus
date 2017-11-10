DROP TABLE IF EXISTS investments;
CREATE TABLE IF NOT EXISTS investments (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT(11) NOT NULL,
    business_id INT(11) NOT NULL,
    amount DECIMAL(13,2) NOT NULL,
    created_at DATETIME,
    updated_at DATETIME
) ENGINE = InnoDB;
