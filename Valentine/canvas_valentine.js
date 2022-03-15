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
var x1 = 150;
var y1 = 400;
var x2 = 300;
var y2 = 300;

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
var x1 = 100;
var y1 = 400;
var x2 = 400;
var y2 = 300;
var x3 = 350;
var y3 = 450;
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
var x0 = 500
var y0 = 250
var rayon = 70
ctx.fillStyle = 'rgb(155, 0, 255)';
ctx.strokeStyle = 'rgb(255, 255, 255)';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.arc(x0, y0, rayon, degToRad(0), degToRad(360), false);
ctx.fill();
ctx.stroke(); // cercle violet contour blanc

// et si on veut cliquer-glisser, il faut calculer le rayon en fonction de la distance entre
// le centre du cercle et la position finale de la souris :

var x0 = 500
var y0 = 350
var x_mouse = 520
var y_mouse = 370
var rayon = Math.sqrt((x_mouse - x0)**2 + (y_mouse - y0)**2)
ctx.fillStyle = 'rgb(155, 255, 0)';
ctx.beginPath();
ctx.arc(x0, y0, rayon, degToRad(0), degToRad(360), false);
ctx.fill(); // cercle vert


// ellipses

// https://developer.mozilla.org/fr/docs/Web/API/CanvasRenderingContext2D/ellipse
// ctx.ellipse(x, y, rayonX, rayonY, rotation, angleDébut, angleFin, antihoraire);

ctx.fillStyle = 'rgb(155, 255, 0)';
ctx.beginPath();
ctx.ellipse(600, 100, 50, 75, degToRad(0), degToRad(360), false); // angle1 < angle2 : l'ellipse est verticale
ctx.fill(); // ellipse verte

ctx.fillStyle = 'rgb(255, 155, 0)';
ctx.beginPath();
ctx.ellipse(600, 400, 80, 45, degToRad(0), degToRad(360), false); // angle1 > angle2 : l'ellipse est horizontale
ctx.fill(); // ellipse orange

// le 1er angle donné (3e paramètre) est le rayon horizontal, le 2e angle est le rayon vertical.
// dc si on inclue notre ellipse dans un rectangle, les coordonnées du rectangle seront :

// coin supérieur gauche : x1 = x0 - rayonX et y1 = y0 - rayonY
// coin inférieur droit : x2 = x0 + rayonX et y2 = y0 + rayonY
// (avec x0 et y0 les coord du centre de l'ellipse)

// et à l'inverse, à partir du rectangle :
// si on note (x1,y1) les coord du coin supérieur gauche et (x2,y2) celles du coin inférieur droit, on a :
// x0 = (x1 + x2)/2 et y0 = (y1 + y2)/2
// rayonX = x0 - Math.min(x1,x2) et rayonY = y0 - Math.min(y1,y2)
// les autres paramètres ne changent pas. Comme pour le cercle, ils servent uniquement à tracer des arc d'ellipses (façon pacman).










// Je construis des fonctions pour tout ce qui précède :

function rectangle_clavier(x, y, L, H, couleur_contour, couleur_remplissage, epaisseur_contour) {
	ctx.fillStyle = couleur_remplissage;
	ctx.fillRect(x,y,L,H);
	ctx.strokeStyle = couleur_contour;
	ctx.lineWidth = epaisseur_contour;
	ctx.strokeRect(x,y,L,H);
}

function rectangle_souris(x1, y1, x2, y2, couleur_contour, couleur_remplissage, epaisseur_contour){
	var Xmin = Math.min(x1,x2);
	var L = Math.max(x1,x2) - Xmin;
	var Ymin = Math.min(y1,y2);
	var H = Math.max(y1,y2) - Ymin;
	rectangle_clavier (Xmin, Ymin, L, H, couleur_contour, couleur_remplissage, epaisseur_contour)
}

function triangle_clavier(x1, y1, x2, y2, x3, y3, couleur_contour, couleur_remplissage, epaisseur_contour){
	ctx.fillStyle = couleur_remplissage;
	ctx.strokeStyle = couleur_contour;
	ctx.lineWidth = epaisseur_contour;
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.lineTo(x3, y3);
	ctx.lineTo(x1, y1);
	ctx.fill();
	ctx.stroke();
}

function triangle_souris(x1, y1, x2, y2, couleur_contour, couleur_remplissage, epaisseur_contour){
	var x3 = (x1 + x2)/2;
	var y3 = y2;
	var y2 = y1;
	triangle_clavier(x1, y1, x2, y2, x3, y3, couleur_contour, couleur_remplissage, epaisseur_contour)
} //triangle isocèle inscrit dans le rectangle avec une base horizontale

// function degToRad(degrees) {
//     return degrees * Math.PI / 180;
//   	};

function cercle_clavier(x0, y0, rayon, couleur_contour, couleur_remplissage, epaisseur_contour){
	ctx.fillStyle = couleur_remplissage;
	ctx.strokeStyle = couleur_contour;
	ctx.lineWidth = epaisseur_contour;
	ctx.beginPath();
	ctx.arc(x0, y0, rayon, degToRad(0), degToRad(360), false);
	ctx.fill();
	ctx.stroke();
	}

// je commente les fonctions cercle puisqu'on passera par l'ellipse.

// function cercle_souris(x1, y1, x2, y2, couleur_contour, couleur_remplissage, epaisseur_contour){
// 	var coté_carré = Math.min (x2-x1, y2-y1);
// 	var r = coté_carré/2;
// 	var x0 = Math.min(x1,x2) + r;
//     var y0 = Math.min(y1,y2) + r;
// 	cercle_clavier(x0, y0, r, couleur_contour, couleur_remplissage, epaisseur_contour);
// }

// // autre méthode (en partant du centre du cercle)
// function cercle_souris_v2(x0, y0, x_mouse, y_mouse, couleur_contour, couleur_remplissage, epaisseur_contour){
// 	var r = Math.sqrt((x_mouse - x0)**2 + (y_mouse - y0)**2);
// 	cercle_clavier(x0, y0, r, couleur_contour, couleur_remplissage, epaisseur_contour);
// }


function ellipse_clavier(x0, y0, rayonX, rayonY, couleur_contour, couleur_remplissage, epaisseur_contour){
	ctx.fillStyle = couleur_remplissage;
	ctx.strokeStyle = couleur_contour;
	ctx.lineWidth = epaisseur_contour;
	ctx.beginPath();
	ctx.ellipse(x0, y0, rayonX, rayonY, degToRad(0), degToRad(360), false);
	ctx.fill();
	ctx.stroke();
	}

function ellipse_souris(x1, y1, x2, y2, couleur_contour, couleur_remplissage, epaisseur_contour){
	var x0 = (x1 + x2)/2;
	var y0 = (y1 + y2)/2;
	var rayonX = x0 - Math.min(x1,x2);
	var rayonY = y0 - Math.min(y1,y2);
	ellipse_clavier(x0, y0, rayonX, rayonY, couleur_contour, couleur_remplissage, epaisseur_contour)
}









// maintenant les zones de texte
// https://developer.mozilla.org/fr/docs/Web/API/CanvasRenderingContext2D#dessiner_du_texte
