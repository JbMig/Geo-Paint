<?php
$engine = "mysql";
$host = "localhost";
$port = 8889;
$dbname = "neo_paint";
$username = "root";
$password = "root";
$pdo = new PDO("$engine:host=$host:$port;dbname=$dbname", $username, $password);
$maRequete = $pdo->prepare("SELECT * FROM `user`");
$maRequete->execute();
$users = $maRequete->fetchAll(PDO::FETCH_ASSOC);
?>
<!doctype html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>Neo_paint Users</title>
    </head>
    <body>
        <a href="../login.php">page login</a>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>mail</th>
                    <th>password</th>
                    <th>supprimer</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach($users as $user): ?>
                    <tr>
                        <td><?= $user["id"] ?></td>
                        <td> <?= $user["mail"] ?></td>
                        <td><?=$user["mdp"] ?></td>
                        <td>
                            <a href="supp.php?id=<?=$user["id"]?>" >
                                supprimer
                            </a>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </body>
</html>