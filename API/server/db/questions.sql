DROP TABLE IF EXISTS questions;

CREATE TABLE questions (
    question_id INT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(100) NOT NULL,
    capital VARCHAR(100) NOT NULL,
    population INT NOT NULL,
    languages VARCHAR(100) NOT NULL,
    fun_fact VARCHAR(255),
    map_image_url VARCHAR(255),
    PRIMARY KEY (country_id)
);