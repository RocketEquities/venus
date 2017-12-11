DROP TABLE IF EXISTS inquiries;
CREATE TABLE IF NOT EXISTS inquiries (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT(11) NOT NULL,
    business_id INT(11) NOT NULL,
    amount DECIMAL(13,2) NOT NULL,
    message VARCHAR(256),
    created_at DATETIME,
    updated_at DATETIME,
    INDEX (business_id)
) ENGINE = InnoDB;
