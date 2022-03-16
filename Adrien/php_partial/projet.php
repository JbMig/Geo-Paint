<?php
ob_start();
$title = "projets";
require "../database/pdo.php";
$user_id = $_SESSION["user"]["id"];
$maRequete = $pdo->prepare("SELECT * FROM `projet` Where `user_id` = :user");
$maRequete->execute([
    ":user" => $user_id
]);
$projets = $maRequete->fetchAll(PDO::FETCH_ASSOC);

if ("POST" === $_SERVER["REQUEST_METHOD"]) {
    $projet = filter_input(INPUT_POST, "project_name");
    $maRequete = $pdo->prepare("SELECT `id`, `project_name`, `data`, `user_id` FROM `projet` WHERE `project_name` = :projectName AND `user_id` = :userId;");
    $maRequete->execute([
        ":projectName" => $projet
    ]);

    $projet_server = $maRequete->fetch();
    $_SESSION["projet"] = $projet_server;
    header("Location: /load_project");
    exit();
}

require __DIR__ . '/../html_partial/projet.php';

$content = ob_get_clean();
?>