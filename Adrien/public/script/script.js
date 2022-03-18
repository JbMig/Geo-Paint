let outil = 'Aucun'
function outil_rectangle() {
    if (outil === 'Aucun') {
		outil = 'rectangle';
	}
	else if (outil === 'triangle') {
		outil = 'rectangle';
	}
	else if (outil === 'ellipse') {
		outil = 'rectangle';
	}
	else if (outil === 'hand') {
		outil = 'rectangle';
	}
	else if (outil === 'size') {
		outil = 'rectangle';
	}
	else {
		outil = 'Aucun';
	}
	console.log(outil) // pour vérifier que ça fonctionne
}
document.getElementById("btn_rect").onclick = outil_rectangle;

function outil_triangle() {
    if (outil === 'Aucun') {
		outil = 'triangle';
	}
	else if (outil === 'rectangle') {
		outil = 'triangle';
	}
	else if (outil === 'ellipse') {
		outil = 'triangle';
	}
	else if (outil === 'hand') {
		outil = 'triangle';
	}
	else if (outil === 'size') {
		outil = 'triangle';
	}
	else {
		outil = 'Aucun';
	}
	console.log(outil) // pour vérifier que ça fonctionne
}
document.getElementById("btn_tri").onclick = outil_triangle;


function outil_ellipse() {
    if (outil === 'Aucun') {
		outil = 'ellipse';
	}
	else if (outil === 'triangle') {
		outil = 'ellipse';
	}
	else if (outil === 'rectangle') {
		outil = 'ellipse';
	}
	else if (outil === 'hand') {
		outil = 'ellipse';
	}
	else if (outil === 'size') {
		outil = 'ellipse';
	}
	else {
		outil = 'Aucun';
	}
	console.log(outil) // pour vérifier que ça fonctionne
}
document.getElementById("btn_elli").onclick = outil_ellipse;

function outil_main() {			// sert à sélectionner une figure
    if (outil === 'Aucun') {
		outil = 'hand';
	}
	else if (outil === 'triangle') {
		outil = 'hand';
	}
	else if (outil === 'rectangle') {
		outil = 'hand';
	}
	else if (outil === 'ellipse') {
		outil = 'hand';
	}
	else if (outil === 'size') {
		outil = 'hand';
	}
	else {
		outil = 'Aucun';
	}
	console.log(outil) // pour vérifier que ça fonctionne
}
document.getElementById("btn_hand").onclick = outil_main;

function outil_deformer() {			// sert à sélectionner une figure
    if (outil === 'Aucun') {
		outil = 'size';
	}
	else if (outil === 'triangle') {
		outil = 'size';
	}
	else if (outil === 'rectangle') {
		outil = 'size';
	}
	else if (outil === 'ellipse') {
		outil = 'size';
	}
	else if (outil === 'hand') {
		outil = 'size';
	}
	else {
		outil = 'Aucun';
	}
	console.log(outil) // pour vérifier que ça fonctionne
}
document.getElementById("btn_resize").onclick = outil_deformer;

// get references to the canvas and context
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var stroke_color = 'rgb(0, 0, 0)';				// par défaut. Il faudra changer ça plus tard en fonction des choix de l'utilisateur.
var fill_color = 'rgb(255, 255, 255)';				// idem
var stroke_thickness = 2;						// idem

// style the context
ctx.strokeStyle = stroke_color;
ctx.lineWidth = stroke_thickness;

// calculate where the canvas is on the window
// (used to help calculate mouseX/mouseY)
var canvasOffset = canvas.getBoundingClientRect();
var offsetX = canvasOffset.left;
var offsetY = canvasOffset.top;

// this flag is true when the user is dragging the mouse
var isDown = false;

// these vars will hold the starting mouse position
var startX;
var startY;

// var x1 = null
// var x2 = null
// var y1 = null
// var y2 = null

let figures = []
var post_json = document.querySelector("#post_json").innerHTML;
figures = JSON.parse(post_json);

for (var i = 0; i < figures.length; i++) {
	if(figures[i][5] != '') {
		if (figures[i][0] === 'rectangle') {
			rectangle_souris(figures[i][1], figures[i][2], figures[i][3], figures[i][4], figures[i][5], figures[i][6], figures[i][7]);
		}
		else if (figures[i][0] === 'triangle') {
			triangle_souris(figures[i][1], figures[i][2], figures[i][3], figures[i][4], figures[i][5], figures[i][6], figures[i][7]);
		}
		else if (figures[i][0] === 'ellipse') {
			ellipse_souris(figures[i][1], figures[i][2], figures[i][3], figures[i][4], figures[i][5], figures[i][6], figures[i][7]);
		}
		// else {
		// 	là, ce sera les fonctions de déplacement / redimmensionnement de figures.
		// }
	}
}

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
	rectangle_clavier (Xmin, Ymin, L, H, couleur_contour, couleur_remplissage, epaisseur_contour);
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
	triangle_clavier(x1, y1, x2, y2, x3, y3, couleur_contour, couleur_remplissage, epaisseur_contour);
} //triangle isocèle inscrit dans le rectangle avec une base horizontale

function degToRad(degrees) {
    return degrees * Math.PI / 180;
  	};

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
	ellipse_clavier(x0, y0, rayonX, rayonY, couleur_contour, couleur_remplissage, epaisseur_contour);
}


let forme_selectionnee = 'None'



function handleMouseDown(e) {
    // console.log('handleMouseDown');
    // console.log(e);
    e.preventDefault();
    e.stopPropagation();

    // save the starting x/y of the rectangle
    startX = parseInt(e.clientX - offsetX);
    startY = parseInt(e.clientY - offsetY);

    // set a flag indicating the drag has begun
    isDown = true;
	
	if (outil == 'rectangle' || outil == 'triangle' || outil == 'ellipse'){
		figures.push([outil,0,0,0,0,'','',0]);
	}
	else if (outil == 'hand' || outil == 'size'){
		// je récupère la position de la souris :
		mouseX = parseInt(e.clientX - offsetX);
		mouseY = parseInt(e.clientY - offsetY);
		// je parcours la liste à l'envers car, si je suis dans la zone de sélection de plusieurs formes, je dois prendre celle du dessus, qui est la dernière tracée.
		var l=figures.length;
		var i = l-1;
		while (i >= 0) {
			// j'ai besoin de connaitre les coordonnées de la figure, pour comparer avec la position de la souris.
			// rappel : figures[i] = [outil, startX, startY, mouseX, mouseY, stroke_color, fill_color, stroke_thickness]; 
			// je compare ces coordonnées à celles de la souris pour savoir si je suis dans la zone de sélection de la forme.
			if (((figures[i][1] < mouseX && mouseX < figures[i][3]) || (figures[i][3] < mouseX && mouseX < figures[i][1])) && ((figures[i][2] < mouseY && mouseY < figures[i][4]) || (figures[i][4] < mouseY && mouseY < figures[i][2]))) {
				forme_selectionnee = figures[i];
				i = -1; // pour sortir de la boucle
				console.log(forme_selectionnee); // pour le débuggage
			}
			else {
				i -= 1;
			}
		}	
	}
}


function handleMouseUp(e) {
    // console.log('handleMouseUp');
    // console.log(e);
    e.preventDefault();
    e.stopPropagation();

    // the drag is over, clear the dragging flag
    isDown = false;
    // console.log(x1, x2, y1, y2)
	var l=figures.length;
	if (figures[l-1][0] === 'rectangle') {
		rectangle_souris(figures[l-1][1], figures[l-1][2], figures[l-1][3], figures[l-1][4], figures[l-1][5], figures[l-1][6], figures[l-1][7]);
	}
	else if (figures[l-1][0] === 'triangle') {
		triangle_souris(figures[l-1][1], figures[l-1][2], figures[l-1][3], figures[l-1][4], figures[l-1][5], figures[l-1][6], figures[l-1][7]);
	}
	else if (figures[l-1][0] === 'ellipse') {
		ellipse_souris(figures[l-1][1], figures[l-1][2], figures[l-1][3], figures[l-1][4], figures[l-1][5], figures[l-1][6], figures[l-1][7]);
	}
	// else {
	// 	là, ce sera les fonctions de déplacement / redimmensionnement de figures.
	// }
	else if (outil == 'hand' || outil == 'size'){
		forme_selectionnee = 'None';
	}
}


function handleMouseOut(e) {
    // console.log('handleMouseOut');
    // console.log(e);
    e.preventDefault();
    e.stopPropagation();

    // the drag is over, clear the dragging flag
    isDown = false; 
	var l=figures.length;
	if (figures[l-1][0] === 'rectangle') {
		rectangle_souris(figures[l-1][1], figures[l-1][2], figures[l-1][3], figures[l-1][4], figures[l-1][5], figures[l-1][6], figures[l-1][7]);
	}
	else if (figures[l-1][0] === 'triangle') {
		triangle_souris(figures[l-1][1], figures[l-1][2], figures[l-1][3], figures[l-1][4], figures[l-1][5], figures[l-1][6], figures[l-1][7]);
	}
	else if (figures[l-1][0] === 'ellipse') {
		ellipse_souris(figures[l-1][1], figures[l-1][2], figures[l-1][3], figures[l-1][4], figures[l-1][5], figures[l-1][6], figures[l-1][7]);
	}
	// else {
	// 	là, ce sera les fonctions de déplacement / redimmensionnement de figures.
	// }
}

function handleMouseMove(e) {
    // console.log('handleMouseMove');
    // console.log(e);
    e.preventDefault();
    e.stopPropagation();
    // if we're not dragging, just return
    if (!isDown) {
        return;
    }

    // get the current mouse position
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);

    // Put your mousemove stuff here

    // clear the canvas
    
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	for (var i = 0; i < figures.length; i++) {
		if(figures[i][5] != '') {
			if (figures[i][0] === 'rectangle') {
				rectangle_souris(figures[i][1], figures[i][2], figures[i][3], figures[i][4], figures[i][5], figures[i][6], figures[i][7]);
			}
			else if (figures[i][0] === 'triangle') {
				triangle_souris(figures[i][1], figures[i][2], figures[i][3], figures[i][4], figures[i][5], figures[i][6], figures[i][7]);
			}
			else if (figures[i][0] === 'ellipse') {
				ellipse_souris(figures[i][1], figures[i][2], figures[i][3], figures[i][4], figures[i][5], figures[i][6], figures[i][7]);
			}
			// else {
			// 	là, ce sera les fonctions de déplacement / redimmensionnement de figures.
			// }
		}
	}
	console.log(figures); // pour le débuggage

    // calculate the rectangle width/height based
    // on starting vs current mouse position
    var width = mouseX - startX;
    var height = mouseY - startY;

    // draw a new rect from the start position 
    // to the current mouse position
    if (outil == 'rectangle' || outil == 'triangle' || outil == 'ellipse'){
		ctx.strokeRect(startX, startY, width, height);
	}
	
	
	var l = figures.length;
	if (outil == 'rectangle' || outil == 'triangle' || outil == 'ellipse'){
		figures[l-1] = [outil, startX, startY, mouseX, mouseY, stroke_color, fill_color, stroke_thickness]; 
	}
	
	
	// console.log(figures[l-1]); // pour le débuggage
	// console.log(stroke_color);

	}
	

function outil_gomme() {		// efface complètement le canvas
	alert("Toutes les figures du canvas vont être effacées.");
	figures = [];
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}
document.getElementById("btn_erase").onclick = outil_gomme;


function KeyPress(e) {			// CTRL + Z pour annuler la dernière construction
    var evtobj = window.event? event : e
    if (evtobj.keyCode == 90 && evtobj.ctrlKey){
        figures.splice(-1);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //Fonction pour afficher
		for (var i = 0; i < figures.length; i++) {
			if(figures[i][5] != '') {
				if (figures[i][0] === 'rectangle') {
					rectangle_souris(figures[i][1], figures[i][2], figures[i][3], figures[i][4], figures[i][5], figures[i][6], figures[i][7]);
				}
				else if (figures[i][0] === 'triangle') {
					triangle_souris(figures[i][1], figures[i][2], figures[i][3], figures[i][4], figures[i][5], figures[i][6], figures[i][7]);
				}
				else if (figures[i][0] === 'ellipse') {
					ellipse_souris(figures[i][1], figures[i][2], figures[i][3], figures[i][4], figures[i][5], figures[i][6], figures[i][7]);
				}
				// else {
				// 	là, ce sera les fonctions de déplacement / redimmensionnement de figures.
				// }
			}
		}
	}
}
document.onkeydown = KeyPress;

// console.log(document.getElementById("select_fill_color"));

function changer_couleur_remplissage() {
	let new_color = document.getElementById("select_fill_color").value;
	fill_color = new_color;
}
document.getElementById("confirm_fill_color").onclick = changer_couleur_remplissage;

function changer_couleur_contour() {
	let new_color = document.getElementById("select_stroke_color").value;
	stroke_color = new_color;
}
document.getElementById("confirm_stroke_color").onclick = changer_couleur_contour;

function changer_epaisseur_contour() {
	let number = document.getElementById("select_stroke_thickness").value;
	stroke_thickness = number;
}
document.getElementById("confirm_stroke_thickness").onclick = changer_epaisseur_contour;


document.getElementById('canvas').addEventListener('mousedown', function(e) {
  handleMouseDown(e);
});
document.getElementById('canvas').addEventListener('mousemove', function(e) {
  handleMouseMove(e);
});
document.getElementById('canvas').addEventListener('mouseup', function(e) {
  handleMouseUp(e);
});
document.getElementById('canvas').addEventListener('mouseout', function(e) {
  handleMouseOut(e);
});


// function onclick(e) {
// 	// je récupère la position de la souris
// 	mouseX = parseInt(e.clientX - offsetX);
//     mouseY = parseInt(e.clientY - offsetY);
// 	var l=figures.length;
// 	i = l;
// 	while (i > 0){		// je parcours la liste à l'envers pour sélectionner la dernière figure construite.
// 		if (figures[i][0] < mouseX && mouseX < figures[i][2]){
// 			console.log('figure ' + i + ' sélectionnée');
// 			i = 0; 		// j'ai trouvé une figure donc je sors de la boucle.
// 		}
// 		else {
// 			i-=1;
// 		}
// 	}
// } //ça ne marche pas...





// tout ce qui suit appartient à la propriété intéléctuel de Adrien (dsl pour les fautes, il est tard)
// mes variables
var save = document.querySelector("#save");
var get_json = document.querySelector("#get_json");
var open_form = document.querySelector("#open_form");
var the_form = document.querySelector("#form")

// test variables
// console.log(array_json);

// mes fonctions

function switch_hidden() { //fait apparaitre le formulaire
  the_form.style.visibility = "visible";
}
function save_it() { //récupère le json dans le input
    var data = [...figures];
    let array_json = JSON.stringify(data); //transform data en json
    get_json.value = array_json;
}

// mes events
open_form.addEventListener("click", switch_hidden)
save.addEventListener("click", save_it);


// télécharger en png et pdf

//permet de cacher les menus
function hide(){
    document.getElementById('png').parentNode.removeChild(document.querySelector('#png'))
    changementPng.style.visibility="hidden";
    changementPdf.style.visibility="hidden";
    
}


//permet de télécharger le canvas en png


function changePng(){
	// if (document.querySelector("png")==true){
	// 	document.getElementById('png').parentNode.removeChild(document.querySelector('#png'));
	// }
    var URL = document.querySelector("#canvas").toDataURL("image/png");
    var a = document.createElement('a');
    // var titre=document.querySelector($titre);
    a.download = "Nouveau_fichier.png";
    a.href = URL;
    var link = document.createTextNode("Télécharger");  
    a.appendChild(link); 
	var conversion = document.querySelector("#convertir")
	conversion.appendChild(a)
    // document.body.appendChild(a);
    a.id="png";
    var download=document.querySelector('#png');
    // changementPng.style.visibility="collapse";
    download.addEventListener("click",hide);
}

function changePDF(){
    var dataURL = canvas.toDataURL('image/jpeg');
    let pdf = new jsPDF();
    pdf.addImage(dataURL, 'JPEG', 0, 0);
    pdf.save("nouveau_fichier.pdf");
    changementPng.style.visibility="hidden";
    changementPdf.style.visibility="hidden";
    menu.style.visibility="initial";
}

function change(){
    let changementPng = document.querySelector("#convertirPng");
    let changementPdf = document.querySelector("#convertirPdf");
    changementPng.style.visibility="initial";
    changementPdf.style.visibility="initial";
    changementPng.addEventListener("click",changePng);
    changementPdf.addEventListener("click",changePDF);
}

let changementPng = document.querySelector("#convertirPng");
let changementPdf = document.querySelector("#convertirPdf");
changementPng.style.visibility="hidden";
changementPdf.style.visibility="hidden";
var canvas = document.querySelector('canvas');
var accepte = document.querySelector('#menu');
accepte.addEventListener("click",change);

// // Théo //
function switchVisible(){
	the_form.style.visibility = "hidden";
}
// let body_var = document.querySelector("body").onclick = function(e) {
// 	if(e.target != )
// }

let cross = document.querySelector(".cross")
cross.addEventListener("click", switchVisible)