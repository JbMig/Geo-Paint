<?php
ob_start();
$title = $_SESSION["projet"]["project_name"];

if ("POST" === $_SERVER["REQUEST_METHOD"]) {
    require "../database/pdo.php";
    $user_id = $_SESSION["user"]["id"];
    $data = filter_input(INPUT_POST, "data");
    $projectName = $_SESSION["projet"]["project_name"];

    $maRequete = $pdo->prepare("SELECT `id`, `project_name`, `data`, `user_id` FROM `projet` WHERE `project_name` = :projectName AND `user_id` = :userId;");
    $maRequete->execute([
        ":projectName" => $projectName,
        ":userId" => $user_id
    ]);

    $projet_server = $maRequete->fetch();
    
    if ($projet_server["project_name"] == $projectName) {
        $maRequete = $pdo->prepare("UPDATE `projet` SET `data`= :oneData, `date` = CURRENT_TIMESTAMP WHERE `project_name` = :projectName AND `user_id` = :userId;");
            $maRequete->execute([
                ":oneData" => $data,
                ":projectName" => $projectName,
                ":userId" => $user_id
            ]);
    }
    else {
        $maRequete = $pdo->prepare(
            "INSERT INTO `projet` (`project_name`, `user_id`, `data`)
            VALUES(:projectName, :userId, :oneData)");
            $maRequete->execute([
                ":projectName" => $projectName,
                ":userId" => $user_id,
                ":oneData" => $data
            ]);
    }
    $maRequete = $pdo->prepare("SELECT `id`, `project_name`, `data`, `user_id` FROM `projet` WHERE `project_name` = :projectName AND `user_id` = :userId;");
        $maRequete->execute([
            ":projectName" => $projectName,
            ":userId" => $user_id
        ]);
    
    $projet_server = $maRequete->fetch();
    
    $_SESSION["projet"] = $projet_server;
    http_response_code(302);
    header('Location: /load_project');
    exit();
}
require_once __DIR__ . '/../html_partial/load_project.php';

$content = ob_get_clean();

// for valentine 2