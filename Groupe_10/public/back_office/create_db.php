<?php
$engine = "mysql";
$host = "localhost";
$port = 3306;
$dbname = "neo_paint";
$username = "root";
$password = "root";
$pdo = new PDO("$engine:host=$host:$port;", $username, $password);

$maRequete = $pdo->prepare("CREATE DATABASE IF NOT EXISTS `neo_paint`
CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;");
    $maRequete->execute();

$pdo = new PDO("$engine:host=$host:$port;dbname=$dbname", $username, $password);
$maRequete = $pdo->prepare(
    "CREATE TABLE IF NOT EXISTS `user` (
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
    ");
    $maRequete->execute();
    
    echo "la database a été créé."
?>