CREATE DATABASE burger_db;
Use burger_db;

CREATE TABLE burgers (
    id INT NOT NUL AUTO INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);