<?php
// Tableau simple php pour test
$projets = [
    0 => [
        "nom" => "projet1",
        "date" => "16/07/2012",
    ],
    1 => [
        "nom" => "projet2",
        "date" => "16/07/2012",
    ],
    2 => [
        "nom" => "projet3",
        "date" => "16/07/2012",
    ],
    3 => [
        "nom" => "projet4",
        "date" => "16/07/2012",
    ]
    ,
    4 => [
        "nom" => "projet5",
        "date" => "16/07/2012",
    ]
];
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Page</title>
    <link rel="stylesheet" href="page-projet-css.css">
</head>
<body>
    
        <!-- création de la liste en HTML -->
    <?php foreach($projets as $projet): ?>
            <div id="button"><button  class="projet"><span id="name"><?= $projet["nom"]  ?></span><span id="date"><?=$projet["date"] ?></span></button>
            <button class="delete"><img src="/Geo-paint\bin.png" alt="BIN" id="bin"></button>
            </div>
            
    <?php endforeach; ?>
</body>
</html>