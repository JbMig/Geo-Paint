<?php
$id = filter_input(INPUT_GET, "id", FILTER_VALIDATE_INT);
if($id) {
    require "../../database/pdo.php";
    $maRequete = $pdo->prepare("DELETE FROM `projet` WHERE `id` = :id");
    $maRequete->execute([
        ":id" => $id
    ]);
    http_response_code(302);
    header('Location: /projet');
    exit();
}
?>