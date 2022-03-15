<?php
include "../php_partial/pdo.php";
$maRequete = $pdo->prepare("SELECT * FROM `user`");
$maRequete->execute();
$users = $maRequete->fetchAll(PDO::FETCH_ASSOC);
$title = "neo_paint db";
include "../html_partial/head.php";
?>
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