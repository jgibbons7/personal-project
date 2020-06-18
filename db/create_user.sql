  
INSERT INTO users (username, password)
VALUES ($1, $2);

INSERT INTO user_info (age)
VALUES ($3);

SELECT * FROM users
WHERE username = $1