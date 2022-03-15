<?php
if($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = filter_input(INPUT_POST, "mail");
    $mdp = filter_input(INPUT_POST, "mdp");
    include "php_partial/pdo.php";
    $maRequete = $pdo->prepare("INSERT INTO `user` (`mail`, `mdp`) VALUES(:mail, :mdp)");
    $maRequete->execute([
        ":mail" => $email,
        ":mdp" => $mdp
    ]);

    http_response_code(302);
    header('Location: back_office/database.php');
    exit();
}
$title = "sign in";
include "html_partial/head.php";
?>
<body>
    <main>
        <form method="POST">
            <input type="email" id="email" name="mail" placeholder="email">
            <input type="password" id="password" name="mdp" placeholder="Mot de passe">
            <input type="submit" value="Valider"/>
        </form>
    </main>

    <footer></footer>
</body>
</html>