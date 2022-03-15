<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Commandes JS pour tracer les figures</h1>
    Je résume ici les formules à utiliser

    <h2>Rectangle</h2>
    <h3>Méthode 1</h3>
    <span>On donne les coordonnées de deux coins opposés du rectangle (soit en les entrant en dur, soit en faisant un cliquer-glisser avec la souris : à voir plus tard).
    La commande est alors :</span>
    <p>
        ctx.fillStyle = 'rgb(255, 0, 0)';           // couleur de remplissage </br>
        ctx.fillRect(x1, y1, x2-x1, y2-y1);         // remplissage du rectangle </br>
        ctx.strokeStyle = 'rgb(255, 255, 0)';       // couleur de contour </br>
        ctx.lineWidth = 2;                          // épaisseur du contour </br>
        ctx.strokeRect(x1, y1, x2-x1, y2-y1);       // contour du rectangle
    </p>
    <h3>Méthode 2</h3>
    <span>On peut aussi donner les coordonnées du coin supérieur gauche (par clic par exemple) et la hauteur et la largeur du rectangle :</span>
    <p>
        ctx.fillStyle = 'rgb(255, 0, 0)';           // couleur de remplissage </br>
        ctx.fillRect(x1, y1, l, h);                 // remplissage du rectangle </br>
        ctx.strokeStyle = 'rgb(255, 255, 0)';       // couleur de contour </br>
        ctx.lineWidth = 2;                          // épaisseur du contour </br>
        ctx.strokeRect(x1, y1, l, h);               // contour du rectangle
    </p>

    <h2>Triangle</h2>
    <h3>Méthode 1</h3>
    <span>On peut inscrire notre triangle dans un rectangle pour le créer par cliquer-glisser. C'est alors un triangle isocèle dont la base est horizontale.</span>
    <p>
        ctx.fillStyle = 'rgb(255, 255, 0)';         // couleur de remplissage </br>
        ctx.strokeStyle = 'rgb(255, 255, 255)';     // couleur de contour </br>
        ctx.lineWidth = 2;                          // épaisseur du contour </br>
        ctx.beginPath();                            // démarre le dessin </br>
        ctx.moveTo(x1, y1);                         // on se place aux première coordonnées (sans "poser le crayon" pour l'instant) </br>
        ctx.lineTo(x2, y1);                         // 1er côté du triangle : la base horizontale </br>
        ctx.lineTo((x1 + x2)/2, y2);                // 2e côté : on va vers le sommet </br>
        ctx.lineTo(x1, y1);                         // 3e côté : on retourne au point de départ </br>
        ctx.fill();                                 // remplissage du triangle </br>
        ctx.stroke();                               // contour du triangle
    </p>
    <h3>Méthode 2</h3>
    <span>On peut aussi donner les coordonnées des trois sommets du triangle :</span>
    <p>
        ctx.fillStyle = 'rgb(255, 255, 0)';         // couleur de remplissage </br>
        ctx.strokeStyle = 'rgb(0, 100, 250)';       // couleur de contour </br>
        ctx.lineWidth = 3;                          // épaisseur du contour </br>
        ctx.beginPath();                            // démarre le dessin </br>
        ctx.moveTo(x1, y1);                         // on se place aux première coordonnées (sans "poser le crayon" pour l'instant) </br>
        ctx.lineTo(x2, y2);                         // 1er côté du triangle </br>
        ctx.lineTo(x3, y3);                         // 2e côté </br>
        ctx.lineTo(x1, y1);                         // 3e côté : on retourne au point de départ </br>
        ctx.fill();                                 // remplissage du triangle </br>
        ctx.stroke();                               // contour du triangle
    </p>

    <h2>Cercle</h2>
    <span>On va avoir besoin d'une fonction qui convertit les degrés (que nous utilisons pour les angles) en radians (que le PC utilise) :</span>
    <p>
        function degToRad(degrees) {
            return degrees * Math.PI / 180;
        };
    </p>
    <h3>Méthode 1</h3>
    <span>On peut donner les coordonnées du centre et le rayon du cercle :</span>
    <p>
        ctx.fillStyle = 'rgb(155, 0, 255)';         // couleur de remplissage </br>
        ctx.strokeStyle = 'rgb(255, 255, 255)';     // couleur de contour </br>
        ctx.lineWidth = 2;                          // épaisseur du contour </br>
        ctx.beginPath();                            // démarre le dessin </br>
        ctx.arc(x0, y0, rayon, degToRad(0), degToRad(360), false); </br>
        ctx.fill();                                 // remplissage du cercle </br>
        ctx.stroke();                               // contour du cercle
    </p>
    <span>Les paramètres "degToRad(0)", "degToRad(360)" et "false" ne changeront jamais dans notre projet car ils servent uniquement à tracer des arcs de cercles ou de disques (façon pac-man).</span>
    <h3>Méthode 2</h3>
    <span>On peut ausi inscrire notre cercle dans un carré pour le créer par cliquer-glisser. Mais il est peu probable que l'on crée un carré parfait en glissant la souris. Il va donc falloir prendre la distance minimale (soit en x, soit en y) comme côté de notre carré.</span>
    <p>
        déplacement de la souris : (x1,y1) --> (x2,y2) </br>
        coté_carré = min (x2-x1, y2-y1) </br>
    </p>
    <span>Notre cercle a donc pour rayon :</span>
    <p>
        r = coté_carré/2
    </p>
    <span>et son centre a pour coordonnées :</span>
    <p>
        x0 = min(x1,x2) + r </br>
        y0 = min(y1,y2) + r
    </p>
    <span>ce qui nous donne le code :</span>
    <p>
        ctx.fillStyle = 'rgb(155, 0, 255)';         // couleur de remplissage </br>
        ctx.strokeStyle = 'rgb(255, 255, 255)';     // couleur de contour </br>
        ctx.lineWidth = 2;                          // épaisseur du contour </br>
        ctx.beginPath();                            // démarre le dessin </br>
        ctx.arc(min(x1,x2) + (min (x2-x1, y2-y1))/2, min(y1,y2) + (min (x2-x1, y2-y1))/2, (min (x2-x1, y2-y1))/2, degToRad(0), degToRad(360), false); </br>
        ctx.fill();                                 // remplissage du cercle </br>
        ctx.stroke();                               // contour du cercle
    </p>
    <h2>Ellipse</h2>
    <h3>Méthode 1</h3>
    <span>On peut donner les coordonnées du centre et les 2 rayons du cercle :</span>
    <p>
        ctx.fillStyle = 'rgb(155, 0, 255)';         // couleur de remplissage </br>
        ctx.strokeStyle = 'rgb(255, 255, 255)';     // couleur de contour </br>
        ctx.lineWidth = 2;                          // épaisseur du contour </br>
        ctx.beginPath();                            // démarre le dessin </br>
        ctx.ellipse(x0, y0, rayonX, rayonY, degToRad(0), degToRad(360), false); </br>
        ctx.fill();                                 // remplissage de l'ellipse </br>
        ctx.stroke();                               // contour de l'ellipse </br>
    </p>
    <span>Le 1er rayon donné (3e paramètre) est le rayon horizontal, le 2e angle est le rayon vertical donc si on inclue notre ellipse dans un rectangle, les coordonnées du rectangle seront :</span>
    <p>
        coin supérieur gauche : x1 = x0 - rayonX et y1 = y0 - rayonY </br>
        coin inférieur droit : x2 = x0 + rayonX et y2 = y0 + rayonY </br>
        (avec x0 et y0 les coordonnées du centre de l'ellipse)
    </p>
    <h3>Méthode 2</h3>
    <span>À l'inverse, à partir du rectangle, si on note (x1,y1) les coordonnées du coin de départ et (x2,y2) celles du coin d'arrivée, on a :</span>
    <p>
        x0 = (x1 + x2)/2 et y0 = (y1 + y2)/2 </br>
        rayonX = x0 - min(x1,x2) et rayonY = y0 - min(y1,y2)
    </p>
    <span>On obtient donc le code complet :</span>
    <p>
        ctx.fillStyle = 'rgb(155, 0, 255)';         // couleur de remplissage </br>
        ctx.strokeStyle = 'rgb(255, 255, 255)';     // couleur de contour </br>
        ctx.lineWidth = 2;                          // épaisseur du contour </br>
        ctx.beginPath();                            // démarre le dessin </br>
        ctx.ellipse((x1 + x2)/2, (y1 + y2)/2, x0 - min(x1,x2), y0 - min(y1,y2), degToRad(0), degToRad(360), false); </br>
        ctx.fill();                                 // remplissage de l'ellipse </br>
        ctx.stroke();                               // contour de l'ellipse </br>
    </p>
    <span>Comme pour le cercle, les autres paramètres ne changent pas.</span>
</body>
</html>

<!-- pour tester (val) : http://localhost/code_Projet_full_stack_14-20_mars\canvas_valentine_notes.php -->
