<?php
//mise en tampon pour stockage dans une variable
ob_start();
//valeur pour la balisehtml <title>
$title = "nouveau projet";
//je vide la session à l'index projet car nouveau projet
unset($_SESSION["projet"]);

// si on est en method POST, on reçoit les donnée du formulaire
// permet de sauvegarder les données d'un nouveau projet
if ("POST" === $_SERVER["REQUEST_METHOD"]) {
    if(isset($_POST["data"])) {
        require "../database/pdo.php"; //je récupère le PDO
        $user_id = $_SESSION["user"]["id"]; // récupère l'id user de la session
        //récupère le json stockant les coordonées des figures du canvas
        $data = filter_input(INPUT_POST, "data"); 
        //récupère le nom du projet du formulaire
        $projectName = filter_input(INPUT_POST, "projectName");
        //requete sql pour trouver dans la database si un projet existe à ce nom
        $maRequete = $pdo->prepare("SELECT `id`, `project_name`, `data`, `user_id` FROM `projet` WHERE `project_name` = :projectName AND `user_id` = :userId;");
            $maRequete->execute([
                ":projectName" => $projectName,
                ":userId" => $user_id
            ]);
        //récupère le résultat de la requète
        $projet_server = $maRequete->fetch();
        
        //si le nom du projet existe, on écrase les anciennes valeurs 
        if ($projet_server["project_name"] == $projectName) {
            $maRequete = $pdo->prepare("UPDATE `projet` SET `data`= :oneData, `date` = CURRENT_TIMESTAMP WHERE `project_name` = :projectName AND `user_id` = :userId;");
                $maRequete->execute([
                    ":oneData" => $data,
                    ":projectName" => $projectName,
                    ":userId" => $user_id
                ]);
        }
        else { //sinon on créer un projet avec les valeurs du formulaire
            // on utilise le user_id de la session
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
        //j'ajoute le projet à la session
        $_SESSION["projet"] = $projet_server;
        http_response_code(302);
        header('Location: /load_project'); //je vais à la page projet chargé
        exit();
    } else if (isset($_POST["convert"])) {
        // require('fpdf/fpdf.php');
        $img = filter_input(INPUT_POST, "convert");
        print_r($img);
        // $pdf = new FPDF();
        // $pdf->AddPage();
        // $pdf->Image($img,20,40,170,170);
        // $pdf->Output();
        // require('fpdf.php');

        // $pdf = new FPDF();
        // $pdf->AddPage();
        // $pdf->SetFont('Arial','B',16);
        // $pdf->Cell(40,10,'Hello World !');
        // $pdf->Output();
    }
}

require_once __DIR__ . '/../html_partial/new_project.php';

$content = ob_get_clean(); //je stock le tampon dans cette variable
