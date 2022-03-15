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
VALUES
("toto@toto.com", "628c02a5aaa0783dcac5fc80f1dbf9f49556fc0a955bf12ead18ce1b76cf02d568cfd83944b1e78c4f23f16270ab5af5c15fbd7560fb4cdd1add35328ab12366");

