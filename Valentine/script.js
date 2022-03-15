// get references to the canvas and context
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// style the context
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;

// calculate where the canvas is on the window
// (used to help calculate mouseX/mouseY)
var canvasOffset = canvas.getBoundingClientRect();
var offsetX = canvasOffset.left;
var offsetY = canvasOffset.top;

// this flage is true when the user is dragging the mouse
var isDown = false;

// these vars will hold the starting mouse position
var startX;
var startY;

// var x1 = null
// var x2 = null
// var y1 = null
// var y2 = null

let figures = []

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

function handleMouseDown(e) {
    console.log('handleMouseDown')
    console.log(e)
    e.preventDefault();
    e.stopPropagation();

    // save the starting x/y of the rectangle
    startX = parseInt(e.clientX - offsetX);
    startY = parseInt(e.clientY - offsetY);

    // set a flag indicating the drag has begun
    isDown = true;
	figures.push([]);
}

function handleMouseUp(e) {
    console.log('handleMouseUp')
    console.log(e)
    e.preventDefault();
    e.stopPropagation();

    // the drag is over, clear the dragging flag
    isDown = false;
    // console.log(x1, x2, y1, y2)
	var l=figures.length
	rectangle_souris(figures[l-1][0], figures[l-1][1], figures[l-1][2], figures[l-1][3], 'rgb(0, 0, 255)', 'rgb(255, 255, 0)', 2)
}

function handleMouseOut(e) {
    console.log('handleMouseOut')
    console.log(e)
    e.preventDefault();
    e.stopPropagation();

    // the drag is over, clear the dragging flag
    isDown = false; 
	var l=figures.length
	rectangle_souris(figures[l-1][0], figures[l-1][1], figures[l-1][2], figures[l-1][3], 'rgb(0, 0, 255)', 'rgb(255, 255, 0)', 2)
}

function handleMouseMove(e) {
    console.log('handleMouseMove')
    console.log(e)
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
	for (var i = 0; i < figures.length - 1; i++) {
		rectangle_souris(figures[i][0], figures[i][1], figures[i][2], figures[i][3], 'rgb(0, 0, 255)', 'rgb(255, 255, 0)', 2)
	}
	console.log(figures) // pour le débuggage

    // calculate the rectangle width/height based
    // on starting vs current mouse position
    var width = mouseX - startX;
    var height = mouseY - startY;

    // draw a new rect from the start position 
    // to the current mouse position
    ctx.strokeRect(startX, startY, width, height);
	
	var l = figures.length
	figures[l-1] = [startX, startY, mouseX, mouseY];
	}

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