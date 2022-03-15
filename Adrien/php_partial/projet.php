<?php
ob_start();
require "../database/pdo.php";
$user_id = $_SESSION["user"]["id"];
$maRequete = $pdo->prepare("SELECT * FROM `projet` Where `user_id` = :user");
$maRequete->execute([
    ":user" => $user_id
]);
$projets = $maRequete->fetchAll(PDO::FETCH_ASSOC);
$title = "projets";

require_once __DIR__ . '/../html_partial/projet.php';

$content = ob_get_clean();
?>