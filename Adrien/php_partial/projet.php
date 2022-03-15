<?php
ob_start();
require "../database/pdo.php";
$maRequete = $pdo->prepare("SELECT * FROM `projet`");
$maRequete->execute();
$projets = $maRequete->fetchAll(PDO::FETCH_ASSOC);
$title = "neo_paint db";

require_once __DIR__ . '/../html_partial/projet.php';

$content = ob_get_clean();