-- Create table cities with foreign key state_id
CREATE TABLE IF NOT EXISTS cities (
    id INT UNIQUE AUTO_INCREMENT PRIMARY KEY, 
    state_id INT NOT NULL,
    name VARCHAR(256) NOT NULL,
    FOREIGN KEY (state_id) REFERENCES states(id)
);
