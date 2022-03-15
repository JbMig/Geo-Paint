<?php
ob_start();
if($_SERVER["REQUEST_METHOD"] === "POST") {
    $mail = filter_input(INPUT_POST, "mail");
    $mdp = hash("sha512", filter_input(INPUT_POST, "mdp"));
    require_once __DIR__ . "/../database/pdo.php";
    $maRequete = $pdo->prepare("INSERT INTO `user` (`mail`, `mdp`) VALUES(:mail, :mdp)");
    $maRequete->execute([
        ":mail" => $mail,
        ":mdp" => $mdp
    ]);

    http_response_code(302);
    header('Location: /login');
    exit();
}

require_once __DIR__ . '/../html_partial/sign_in.php';

$content = ob_get_clean();