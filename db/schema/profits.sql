DROP TABLE IF EXISTS profits;
CREATE TABLE IF NOT EXISTS profits (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT(11) NOT NULL,
    business_id INT(11) NOT NULL,
    actual_amount DECIMAL(13,2),
    expected_amount DECIMAL(13,2) NOT NULL,
    expected_at DATETIME NOT NULL,
    created_at DATETIME,
    updated_at DATETIME,
    INDEX (user_id, business_id)
) ENGINE = InnoDB;
