CREATE TABLE users (
    ID int IDENTITY(1,1) PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE saved (
    ID int,
    watched BIT,
    saved BIT,
    FOREIGN KEY (ID) REFERENCES users(ID)
);