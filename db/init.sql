CREATE TABLE hobbies (
  id SERIAL PRIMARY KEY,
  hobby VARCHAR(50),
  description VARCHAR(600)
);

CREATE TABLE favorites (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  type VARCHAR(30)
);

CREATE TABLE user_info (
  id SERIAL PRIMARY KEY,
  age INT,
  aboutMe VARCHAR(500),
  gender VARCHAR(10),
  politics VARCHAR(0),
  religion VARCHAR(0)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(30),
  password VARCHAR(500),
  profileImage text,
  hobbies INT REFERENCES hobbies(id),
  favorites INT REFERENCES favorites(id),
  user_info INT REFERENCES user_info(id)
)