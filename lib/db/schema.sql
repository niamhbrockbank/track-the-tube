DROP TABLE stations IF EXISTS;
DROP TABLE lines IF EXISTS;
DROP TABLE stations_on_lines IF EXISTS;
DROP TABLE user_data IF EXISTS;

CREATE TABLE stations (
    station_id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE lines (
    line_id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    colour VARCHAR(50)
);

CREATE TABLE stations_on_lines (
    line_id VARCHAR(255) REFERENCES lines(line_id),
    station_id VARCHAR(255) REFERENCES stations(station_id),
    PRIMARY KEY (line_id, station_id)
);

CREATE TYPE status AS ENUM ('visited', 'passed through', 'changed', 'none');

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  user_name VARCHAR(255)
);

CREATE TABLE user_data (
    user_id INT REFERENCES users(user_id),
    station_id VARCHAR(255) REFERENCES stations(station_id),
    status status,
    rating INT,
    date_of_visit TIMESTAMP,
    purpose_of_visit VARCHAR(255),

    CONSTRAINT rating CHECK (rating >= 1 AND rating <= 5)
);









