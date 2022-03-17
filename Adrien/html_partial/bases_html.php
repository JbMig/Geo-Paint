<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?=$title?></title>
    <link rel="stylesheet" type="text/css" href="style/homePaints.css?<?php echo time();?>">
</head>
<body>
    <header></header>
    
    <?= $content ?>

    <footer>
        <!-- <script src="script/script.js?<?php echo time(); ?>"></script> -->
    </footer>
</body>
</html>