DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(128) UNIQUE,
    password VARCHAR(128) NOT NULL,
    first_name VARCHAR(64),
    last_name VARCHAR(64),
    picture VARCHAR(256),
    created_at DATETIME,
    updated_at DATETIME
) ENGINE = InnoDB;
