CREATE TABLE champs (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    entry_name VARCHAR(15),
    sec VARCHAR(10),
    big10 VARCHAR(10),
    pac10 VARCHAR(10)
);

CREATE TABLE entries (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(10),
    last_name VARCHAR(10),
    paid BOOLEAN
);
