// https://developer.mozilla.org/fr/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics

var canvas = document.querySelector('.myCanvas');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);

ctx.fillStyle = 'rgb(255, 0, 0)';
ctx.fillRect(50, 50, 100, 150); // rectangle plein rouge

ctx.fillStyle = 'rgb(0, 255, 0)';
ctx.fillRect(75, 75, 100, 100);  // rectangle plein vert

ctx.fillStyle = 'rgba(255, 0, 255, 0.75)';
ctx.fillRect(25, 100, 175, 50);  // rectangle plein rose + transparence

ctx.strokeStyle = 'rgb(255, 255, 255)';
ctx.lineWidth = 5;
ctx.strokeRect(25, 25, 175, 200);  // rectangle vide blanc

// essai de rectangle + contour :
ctx.fillStyle = 'rgb(255, 0, 0)';
ctx.fillRect(250, 50, 50, 50);
ctx.strokeStyle = 'rgb(255, 255, 0)';
ctx.lineWidth = 5;
ctx.strokeRect(250, 50, 50, 50);  // carré rouge contour jaune

//triangle !
function degToRad(degrees) {
    return degrees * Math.PI / 180;
  };
ctx.fillStyle = 'rgb(0, 255, 255)';
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
var triHeight = 50 * Math.tan(degToRad(60));
ctx.lineTo(100, 50+triHeight);
ctx.lineTo(50, 50);
ctx.fill(); // triangle turquoise

//j'essaie de faire mon propre triangle
//imaginons que ce sont les coordonnées du cliquer-glisser de la souris :
x1 = 150;
y1 = 400;
x2 = 300;
y2 = 300;

//maintenant je trace mon triangle
ctx.fillStyle = 'rgb(255, 255, 0)';
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y1);
ctx.lineTo((x1 + x2)/2, y2);
ctx.lineTo(x1, y1);
ctx.fill(); // triangle jaune

//et pour le contour
ctx.strokeStyle = 'rgb(255, 0, 0)';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y1);
ctx.lineTo((x1 + x2)/2, y2);
ctx.lineTo(x1, y1);
ctx.stroke(); //contour rouge

// notre triangle est inscrit ds un rectangle donc, si on veut juste cliquer et qu'il nous
// en trace un automatiquement, il suffit de mettre x1 et y1 aux coordonnées du clic et de faire
// x2=x1+100 et y2=y1+100
ctx.strokeStyle = 'rgb(255, 255, 255)';
ctx.lineWidth = 1;
ctx.strokeRect(x1, y1, x2-x1, y2-y1); //rectangle blanc autour d'un triangle

// si on demande les coordonnées des 3 sommets du triangle :
x1 = 100;
y1 = 400;
x2 = 400;
y2 = 300;
x3 = 350;
y3 = 450;
ctx.strokeStyle = 'rgb(0, 100, 250)';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.lineTo(x3, y3);
ctx.lineTo(x1, y1);
ctx.stroke(); //triangle vide bleu

// cercle
ctx.fillStyle = 'rgb(0, 0, 255)';
ctx.beginPath();
ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
ctx.fill(); // cercle bleu

// on ne peut pas l'inscrire dans un rectangle comme avant, puisqu'on part du centre
// et c'est forcément un vrai cercle, pas une ellipse.
// donc on pourra seulement définir le centre et le rayon :
x0 = 500
y0 = 250
rayon = 70
ctx.fillStyle = 'rgb(155, 0, 255)';
ctx.strokeStyle = 'rgb(255, 255, 255)';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.arc(x0, y0, rayon, degToRad(0), degToRad(360), false);
ctx.fill();
ctx.stroke(); // cercle violet contour blanc

// et si on veut cliquer-glisser, il faut calculer le rayon en fonction de la distance entre
// le centre du cercle et la position finale de la souris :

x0 = 500
y0 = 350
x_mouse = 520
y_mouse = 370
rayon = Math.sqrt((x_mouse - x0)**2 + (y_mouse - y0)**2)
ctx.fillStyle = 'rgb(155, 255, 0)';
ctx.beginPath();
ctx.arc(x0, y0, rayon, degToRad(0), degToRad(360), false);
ctx.fill(); // cercle vert


// à chercher plus tard :
ctx.ellipse(100, 100, 50, 75, 45 * Math.PI/180, 0, 2 * Math.PI);
// https://developer.mozilla.org/fr/docs/Web/API/CanvasRenderingContext2D/ellipse