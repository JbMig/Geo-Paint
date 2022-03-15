<?php
// Ouvre un tampon qui va stocker tout ce qui va être afficher
ob_start();

if ("POST" === $_SERVER["REQUEST_METHOD"]) {
    require_once __DIR__ . "/../database/pdo.php";
    $mail = filter_input(INPUT_POST, "mail");
    $mdp = hash("sha512", filter_input(INPUT_POST, "mdp"));

    $maRequete = $pdo->prepare("SELECT `id`, `mail`, `mdp` FROM `user` WHERE `mail` = :mail;");
    $maRequete->execute([
        ":mail" => $mail
    ]);

    $user = $maRequete->fetch();
    if (!$user || $user["mdp"] !== $mdp) {
        $variant = "danger";
        $message = "Utilisateur invalide";
        http_response_code(403);
        require_once __DIR__ . "/../html_partial/alerts/baniere.php";
    } else {
        $_SESSION["user"] = $user;
        header("Location: /projet");
        exit();
    }
}

require_once __DIR__ . "/../html_partial/login.php";

// Renvoie tout le contenu du tampon et vide le tampon (dans $content)
$content = ob_get_clean();