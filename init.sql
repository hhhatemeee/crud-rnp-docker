create TABLE Books(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255),
    releaseDate date,
    genre VARCHAR(255),
    price NUMERIC(6)
);
