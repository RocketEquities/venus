CREATE DATABASE IF NOT EXISTS venus;

GRANT ALL ON venus.* TO 'venus'@'localhost' IDENTIFIED BY 'venus';
GRANT ALL ON venus.* TO 'venus'@'%' IDENTIFIED BY 'venus';
