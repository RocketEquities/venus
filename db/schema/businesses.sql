DROP TABLE IF EXISTS businesses;
CREATE TABLE IF NOT EXISTS businesses (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    description VARCHAR(256),
    overview VARCHAR(1024),
    created_at DATETIME,
    updated_at DATETIME
) ENGINE = InnoDB;
