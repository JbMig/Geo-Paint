<?php
//mise en tampon pour stockage dans une variable
ob_start();
//valeur pour la balisehtml <title>, récupère le nom du projet de la session
$title = $_SESSION["projet"]["project_name"];

// si on est en method POST, on reçoit les donnée du formulaire
// permet de sauvegarder les données d'un projet chargé
if ("POST" === $_SERVER["REQUEST_METHOD"]) {
    if(isset($_POST["data"])) {
        require "../database/pdo.php"; //je récupère le PDO
        $user_id = $_SESSION["user"]["id"]; // récupère l'id user de la session
        //récupère le json stockant les coordonées des figures du canvas
        $data = filter_input(INPUT_POST, "data");
        //récupère le nom du projet de la session (même que pour title mais je voulais séparer)
        $projectName = $_SESSION["projet"]["project_name"];
        //requete sql pour trouver dans la database le projet voulu
        $maRequete = $pdo->prepare("SELECT `id`, `project_name`, `data`, `user_id` FROM `projet` WHERE `project_name` = :projectName AND `user_id` = :userId;");
        $maRequete->execute([
            ":projectName" => $projectName,
            ":userId" => $user_id
        ]);
        //récupère le résultat de la requète
        $projet_server = $maRequete->fetch();
        //si le résultat trouvé est égal à la session alors je l'update
        if ($projet_server["project_name"] == $projectName) {
            $maRequete = $pdo->prepare("UPDATE `projet` SET `data`= :oneData, `date` = CURRENT_TIMESTAMP WHERE `project_name` = :projectName AND `user_id` = :userId;");
                $maRequete->execute([
                    ":oneData" => $data,
                    ":projectName" => $projectName,
                    ":userId" => $user_id
                ]);
        }
        else { //sinon je le créer (dans aucun cas dans ce fichier sauf éventuel bug)
            $maRequete = $pdo->prepare(
                "INSERT INTO `projet` (`project_name`, `user_id`, `data`)
                VALUES(:projectName, :userId, :oneData)");
                $maRequete->execute([
                    ":projectName" => $projectName,
                    ":userId" => $user_id,
                    ":oneData" => $data
                ]);
        }
        //requete sql pour trouver dans la database le projet voulu si il n'éxistait pas.
        $maRequete = $pdo->prepare("SELECT `id`, `project_name`, `data`, `user_id` FROM `projet` WHERE `project_name` = :projectName AND `user_id` = :userId;");
            $maRequete->execute([
                ":projectName" => $projectName,
                ":userId" => $user_id
            ]);
        
        $projet_server = $maRequete->fetch();
        //j'ajoute le projet à la session (il y est déjà normalement dans ce fichier sauf éventuel bug)
        $_SESSION["projet"] = $projet_server;
        http_response_code(302);
        header('Location: /load_project'); //je recharge la page courante pour etre en get
        exit();
    } else if (isset($_POST["convert"])) {
        echo "convert";
    }
}
//j'appelle l'html de cette page
require_once __DIR__ . '/../html_partial/load_project.php';

$content = ob_get_clean(); //je stock le tampon dans cette variable