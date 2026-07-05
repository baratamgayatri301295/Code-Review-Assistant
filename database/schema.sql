CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Code Submissions table
CREATE TABLE code_submissions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    code_content LONGTEXT NOT NULL,
    language VARCHAR(50) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id),
    INDEX idx_created_at (created_at)
);

-- Code Reviews table
CREATE TABLE code_reviews (
    id INT PRIMARY KEY AUTO_INCREMENT,
    submission_id INT NOT NULL,
    feedback TEXT NOT NULL,
    issues_found INT DEFAULT 0,
    improvements_suggested INT DEFAULT 0,
    overall_score INT DEFAULT 0,
    review_type VARCHAR(50) DEFAULT 'AUTOMATED',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (submission_id) REFERENCES code_submissions(id) ON DELETE CASCADE,
    UNIQUE INDEX idx_submission_id (submission_id),
    INDEX idx_created_at (created_at)
);

-- Insert sample user
INSERT INTO users (username, email) VALUES ('testuser', 'test@example.com');

-- Verify tables
SHOW TABLES;
DESC users;
DESC code_submissions;
DESC code_reviews;
