CREATE TABLE IF NOT EXISTS user_options(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    option_name VARCHAR(50),
    option_value VARCHAR(255)
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_user_options_option_name
ON user_options (option_name);

INSERT OR IGNORE INTO user_options(id, option_name, option_value) VALUES (null, "language", "IT");