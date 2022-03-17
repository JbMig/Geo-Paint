<?php
//mise en tampon pour stockage dans une variable
ob_start();
//valeur pour la balisehtml <title>
$title = "projets";

require "../database/pdo.php"; //je récupère le PDO
$user_id = $_SESSION["user"]["id"]; // récupère l'id user de la session
//requete sql pour récupérer tous les projets de l'utilisateur qui est dans la session
//permet l'affichage des projets dans une boucle html pour les afficher
$maRequete = $pdo->prepare("SELECT * FROM `projet` Where `user_id` = :user");
$maRequete->execute([
    ":user" => $user_id
]);
//on récupère les résultats de la requete
$projets = $maRequete->fetchAll(PDO::FETCH_ASSOC);

// si on est en method POST, on reçoit les donnée du formulaire
// permet de charger un projet en récupèrent ses données dans la data base
if ("POST" === $_SERVER["REQUEST_METHOD"]) {
    //récupère le nom du projet
    $projet = filter_input(INPUT_POST, "project_name");
    //requete sql pour trouver dans la database le projet voulu
    //on utilise le nom du projet et l'id utilisateur
    $maRequete = $pdo->prepare("SELECT `id`, `project_name`, `data`, `user_id` FROM `projet` WHERE `project_name` = :projectName AND `user_id` = :userId;");
    $maRequete->execute([
        ":projectName" => $projet,
        ":userId" => $user_id
    ]);
    //récupère le résultat de la requète
    $projet_server = $maRequete->fetch();
    //j'ajoute le projet à la session
    $_SESSION["projet"] = $projet_server;
    header("Location: /load_project"); //je vais à la page projet chargé
    exit();
}

//j'appelle l'html de cette page
require __DIR__ . '/../html_partial/projet.php';

$content = ob_get_clean(); //je stock le tampon dans cette variable
?>