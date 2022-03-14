<?php
$engine = "mysql";
$host = "localhost";
$port = 8889;
$dbname = "neo_paint";
$username = "root";
$password = "root";
$pdo = new PDO("$engine:host=$host:$port;dbname=$dbname", $username, $password);
?>