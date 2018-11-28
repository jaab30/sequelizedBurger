## SCHEMA
DROP DATABASE burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- CREATE TABLE burgers
-- (
-- 	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
-- 	burger_name varchar(255) NOT NULL,
-- 	devoured BOOLEAN DEFAULT false,
-- );

CREATE TABLE burgers
(
	id INT AUTO_INCREMENT NOT NULL,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY(id)
);