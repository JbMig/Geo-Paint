CREATE DATABASE IF NOT EXISTS `neo_paint`
CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE `neo_paint`;

CREATE TABLE IF NOT EXISTS `user` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `mail` VARCHAR(255) NOT NULL,
    `mdp` VARCHAR(256) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `projet` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `project_name` VARCHAR(255) NOT NULL,
    `data` JSON,
    `date` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `user_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `user`(`id`)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `colors` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `color_name` VARCHAR(255) NOT NULL,
    `hex`VARCHAR(255) NOT NULL,
    `user_id` INT NOT NULL,
    `project_id`INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `user`(`id`),
    FOREIGN KEY (`project_id`) REFERENCES `projet`(`id`)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `font` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `font_name` VARCHAR(255) NOT NULL,
    `user_id` INT NOT NULL,
    `project_id`INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `user`(`id`),
    FOREIGN KEY (`project_id`) REFERENCES `projet`(`id`)
) ENGINE=InnoDB;

INSERT INTO `user` (`mail`, `mdp`)
values
("toto", "10e06b990d44de0091a2113fd95c92fc905166af147aa7632639c41aa7f26b1620c47443813c605b924c05591c161ecc35944fc69c4433a49d10fc6b04a33611");

INSERT INTO `projet` (`project_name`, `user_id`)
VALUES
("projet1", 19),
("projet2", 19),
("projet3", 19),
("projet4", 19);
