let outil = 'Aucun'

function outil_rectangle() {
    if (outil === 'Aucun') {
		outil = 'rectangle';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_rect").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'triangle') {
		outil = 'rectangle';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_rect").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'ellipse') {
		outil = 'rectangle';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_rect").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'hand') {
		outil = 'rectangle';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_rect").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'size') {
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_rect").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
		outil = 'rectangle';
	}
	else if (outil === 'text') {
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_rect").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
		outil = 'rectangle';
	}
	else {
		outil = 'Aucun';
		document.getElementById("btn_rect").style.border = "0px solid #000000";
	}
	console.log(outil) // pour vérifier que ça fonctionne
}
document.getElementById("btn_rect").onclick = outil_rectangle;




function outil_triangle() {
    if (outil === 'Aucun') {
		outil = 'triangle';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_tri").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'rectangle') {
		outil = 'triangle';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_tri").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'ellipse') {
		outil = 'triangle';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_tri").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'hand') {
		outil = 'triangle';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_tri").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'size') {
		outil = 'triangle';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_tri").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'text') {
		outil = 'triangle';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_tri").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else {
		outil = 'Aucun';
		document.getElementById("btn_tri").style.border = "0px solid #000000";
	}
	console.log(outil) // pour vérifier que ça fonctionne
}
document.getElementById("btn_tri").onclick = outil_triangle;




function outil_ellipse() {
    if (outil === 'Aucun') {
		outil = 'ellipse';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_elli").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'triangle') {
		outil = 'ellipse';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_elli").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'rectangle') {
		outil = 'ellipse';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_elli").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'hand') {
		outil = 'ellipse';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_elli").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'size') {
		outil = 'ellipse';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_elli").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'text') {
		outil = 'ellipse';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_elli").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else {
		outil = 'Aucun';
		document.getElementById("btn_elli").style.border = "0px solid #000000";
	}
	console.log(outil) // pour vérifier que ça fonctionne
}
document.getElementById("btn_elli").onclick = outil_ellipse;




function outil_main() {			// nécessite de sélectionner une figure
    if (outil === 'Aucun') {
		outil = 'hand';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_hand").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'triangle') {
		outil = 'hand';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_hand").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'rectangle') {
		outil = 'hand';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_hand").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'ellipse') {
		outil = 'hand';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_hand").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'size') {
		outil = 'hand';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_hand").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'text') {
		outil = 'hand';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_hand").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else {
		outil = 'Aucun';
		document.getElementById("btn_hand").style.border = "0px solid #000000";
	}
	console.log(outil) // pour vérifier que ça fonctionne
}
document.getElementById("btn_hand").onclick = outil_main;




function outil_deformer() {			// nécessite de sélectionner une figure
    if (outil === 'Aucun') {
		outil = 'size';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_resize").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'triangle') {
		outil = 'size';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_resize").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'rectangle') {
		outil = 'size';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_resize").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'ellipse') {
		outil = 'size';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_resize").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'hand') {
		outil = 'size';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_resize").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'text') {
		outil = 'size';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_resize").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else {
		outil = 'Aucun';
		document.getElementById("btn_resize").style.border = "0px solid #000000";
	}
	console.log(outil) // pour vérifier que ça fonctionne
}
document.getElementById("btn_resize").onclick = outil_deformer;



function outil_texte() {			// nécessite de sélectionner une figure
    if (outil === 'Aucun') {
		outil = 'text';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_txt").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
	}
	else if (outil === 'triangle') {
		outil = 'text';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_txt").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
	}
	else if (outil === 'rectangle') {
		outil = 'text';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_txt").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
	}
	else if (outil === 'ellipse') {
		outil = 'text';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_txt").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
	}
	else if (outil === 'hand') {
		outil = 'text';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_txt").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
	}
	else if (outil === 'size') {
		outil = 'text';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_txt").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
	}
	else {
		outil = 'Aucun';
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	console.log(outil) // pour vérifier que ça fonctionne
}
document.getElementById("btn_txt").onclick = outil_texte;

















// construction du canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// couleurs et polices par défaut
var stroke_color = 'rgb(0, 0, 0)';				// par défaut. Il faudra changer ça plus tard en fonction des choix de l'utilisateur.
var fill_color = 'rgb(255, 255, 255)';			// idem
var text_color = stroke_color;					// idem
var stroke_thickness = 2;						// idem
var font_size = "48";							// la taille de police ne change pas. >_<
var font_type = "";								// la police ne change pas --> si on ne la met pas, voir ce qu'on peut mettre à sa place dans les données de sauvegarde

// var pixel = document.getElementById("pixel")
//     ctx.font = pixel + 'px serif';
//     ctx.fillText(document.getElementById("text").value,event.clientX,event.clientY);

// style de canvas
ctx.strokeStyle = stroke_color;
ctx.lineWidth = stroke_thickness;

// initialisation du curseur de la souris (par rapport au canvas)
var canvasOffset = canvas.getBoundingClientRect();
var offsetX = canvasOffset.left;
var offsetY = canvasOffset.top;


// cette variable sera vraie lorsque le bouton de la souris est enfoncé
var isDown = false;

// ces variables contiendront la position initiale du curseur de la souris (dans le cas d'un déplacement).
var startX;
var startY;

// var x1 = null
// var x2 = null
// var y1 = null
// var y2 = null













let figures = [];	// variable dans laquelle toutes les informations relatives aux différentes figures seront stockées.

function draw() {
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
			else if (figures[i][0] === 'text') {
				// mode de sauvegarde : figures[l-1] = [outil, startX, startY, text, max_width, text_color, font_type, font_size]; 
				zone_texte_souris(figures[i][1], figures[i][2], figures[i][3], figures[i][4], figures[i][5], figures[i][6], figures[i][7])
			}
	else {
		return
	}
		
			}
		}
	}






// Chargement de la sauvegarde éventuelle
var post_json = document.querySelector("#post_json").innerHTML;
figures = JSON.parse(post_json);
draw();













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

function zone_texte_souris(X, Y, texte, largeur_max, couleur_texte, type_police, taille_police) {
	if (texte == '') {
		alert('Veuillez entrer un texte dans la zone de droite et réessayer.')
	}
	else {
		// ctx.fillStyle = couleur_texte;
		// ctx.font = taille_police . type_police;
		// // console.log(ctx.font);
		// ctx.fillText(texte, X, Y, largeur_max);

		var pixel = font_size
    	ctx.font = pixel + 'px cursive';
    	ctx.fillText(texte, X, Y, largeur_max);
	}
}









let forme_selectionnee = 'None'
let indice_selection = -2;

let old1 = 0;
let old2 = 0;
let old3 = 0;
let old4 = 0;

function handleMouseDown(e) {
	// initialisation du curseur de la souris
	var canvasOffset = canvas.getBoundingClientRect();
	var offsetX = canvasOffset.left;
	var offsetY = canvasOffset.top;
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

	else if (outil == 'text') {
		// on récupère le texte du formulaire
		texte_formulaire = document.getElementById("your_text").value;
		if (texte_formulaire == '') {
			alert('Veuillez entrer du texte dans la zone prévue à cet effet dans le menu de droite, puis réessayer.')
		}
		else {
			max_width = canvas.width - startX;
			text_color = stroke_color;
			// sauvegarde pour les zones de texte :
			figures.push([outil, startX, startY, texte_formulaire, max_width, text_color, font_type, font_size]);
			console.log(figures);
			// on efface le canvas et on redessine les figures, pour valider la création de la zone.
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			draw();
		}
	}



	// déplacement de figures
	else if (outil == 'hand'){
		// on récupère la position de la souris :
		mouseX = parseInt(e.clientX - offsetX);
		mouseY = parseInt(e.clientY - offsetY);
		// on parcourt la liste à l'envers car, si on est dans la zone de sélection de plusieurs formes, on doit prendre celle du dessus, qui est la dernière tracée.
		var l=figures.length;
		var i = l-1;
		while (i >= 0) {
			// on a besoin de connaitre les coordonnées de la figure, pour comparer avec la position de la souris.
			// rappel : figures[i] = [outil, startX, startY, mouseX, mouseY, stroke_color, fill_color, stroke_thickness]; 
			// on compare ces coordonnées à celles de la souris pour savoir si on est dans la zone de sélection de la forme.
			if (((figures[i][1] < mouseX && mouseX < figures[i][3]) || (figures[i][3] < mouseX && mouseX < figures[i][1])) && ((figures[i][2] < mouseY && mouseY < figures[i][4]) || (figures[i][4] < mouseY && mouseY < figures[i][2]))) {
				// si une forme est déjà sélectionnée, on remet l'épaisseur de son contour à sa valeur d'origine. (Si forme_selectionnee = 'None', ça signifie que la forme a été supprimée.) Dans le cas des zones de texte, c'est la police qui est modifiée.
				if (forme_selectionnee != 'None') {
					// rappel : figures[i] = [outil, startX, startY, mouseX, mouseY, stroke_color, fill_color, stroke_thickness]; 
					forme_selectionnee[7] -= 2;
				}
				forme_selectionnee = figures[i];
				indice_selection = i;
				// il faut sortir de la boucle.
				i = -1;
				// on augmente l'épaisseur du contour (ou la taille de police) de la forme sélectionnée pour montrer qu'elle est sélectionnée.
				// rappel : figures[i] = [outil, startX, startY, mouseX, mouseY, stroke_color, fill_color, stroke_thickness]; 
				forme_selectionnee[7] += 2;
			}
			else {
				// si une forme est sélectionnée, on remet l'épaisseur de son contour (ou la taille de police) à sa valeur d'origine. (Si forme_selectionnee = 'None', ça signifie que la forme a été supprimée.)
				if (forme_selectionnee != 'None') {
					// rappel : figures[i] = [outil, startX, startY, mouseX, mouseY, stroke_color, fill_color, stroke_thickness]; 
					forme_selectionnee[7] -= 2;
				}
				// on réinitialise les données de sélection pour ne pas garder la dernière forme sélectionnée.
				forme_selectionnee = 'None';
				indice_selection = -2;
				i -= 1;
			}
		}
		if (forme_selectionnee != 'None') {
			old1 = forme_selectionnee[1];
			old2 = forme_selectionnee[2];
			old3 = forme_selectionnee[3];
			old4 = forme_selectionnee[4];
		}
	}
	// redimmensionnement de figures
	// else if (outil == 'size'){
	// 	pass;
	// }
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
		// on efface le canvas et on redessine les figures, pour effacer le carré de dessin.
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		draw();
	}
	else if (figures[l-1][0] === 'triangle') {
		triangle_souris(figures[l-1][1], figures[l-1][2], figures[l-1][3], figures[l-1][4], figures[l-1][5], figures[l-1][6], figures[l-1][7]);
		// on efface le canvas et on redessine les figures, pour effacer le carré de dessin.
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		draw();
	}
	else if (figures[l-1][0] === 'ellipse') {
		ellipse_souris(figures[l-1][1], figures[l-1][2], figures[l-1][3], figures[l-1][4], figures[l-1][5], figures[l-1][6], figures[l-1][7]);
		// on efface le canvas et on redessine les figures, pour effacer le carré de dessin.
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		draw();
	}
	// else if (figures[l-1][0] === 'text') {
	// 	zone_texte_souris(figures[l-1][1], figures[l-1][2], figures[l-1][3], figures[l-1][4], figures[l-1][5], figures[l-1][6], figures[l-1][7]);
	// 	// on efface le canvas et on redessine les figures, par sécurité.
	// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// 	draw();
	// }

	// déplacement de figures

	else if (outil == 'hand'){
		console.log(forme_selectionnee); // pour le débuggage
		// on efface le canvas et on redessine les figures, pour valider les changements.
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		draw();
		// on garde la forme sélectionnée en mémoire pour pouvoir changer ses couleurs.
	}

	// redimmensionnement de figures
	// else if (outil == 'size'){
	// 	pass;
	// }
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
		// on efface le canvas et on redessine les figures, pour effacer le rectangle de dessin.
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		draw();
	}
	else if (figures[l-1][0] === 'triangle') {
		triangle_souris(figures[l-1][1], figures[l-1][2], figures[l-1][3], figures[l-1][4], figures[l-1][5], figures[l-1][6], figures[l-1][7]);
		// on efface le canvas et on redessine les figures, pour effacer le rectangle de dessin.
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		draw();
	}
	else if (figures[l-1][0] === 'ellipse') {
		ellipse_souris(figures[l-1][1], figures[l-1][2], figures[l-1][3], figures[l-1][4], figures[l-1][5], figures[l-1][6], figures[l-1][7]);
		// on efface le canvas et on redessine les figures, pour effacer le rectangle de dessin.
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		draw();
	}

	// déplacement de figures
	else if (outil == 'hand'){
		console.log(forme_selectionnee); // pour le débuggage
		// on efface le canvas et on redessine les figures, pour valider les changements.
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		draw();
		// on garde la forme sélectionnée en mémoire pour pouvoir changer ses couleurs.
	}

	// else if (figures[l-1][0] === 'text') {
	// 	zone_texte_souris(figures[l-1][1], figures[l-1][2], figures[l-1][3], figures[l-1][4], figures[l-1][5], figures[l-1][6], figures[l-1][7]);
	// 	// on efface le canvas et on redessine les figures, par sécurité.
	// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// 	draw();
	// }
	
	// redimmensionnement de figures
	// else if (outil == 'size'){
	// 	pass;
	// }


}

function handleMouseMove(e) {
	// initialisation du curseur de la souris
	var canvasOffset = canvas.getBoundingClientRect();
	var offsetX = canvasOffset.left;
	var offsetY = canvasOffset.top;
    // console.log('handleMouseMove');
    // console.log(e);
    e.preventDefault();
    e.stopPropagation();
    // met fin à la fonction si on relache le bouton de la souris sans avoir opéré de déplacement.
    if (!isDown) {
        return;
    }

    // on a besoin de connaitre en continu la position du curseur de la souris.
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);

    // on efface le canvas et on redessine les figure en permanence, pour afficher un aperçu de la figure que l'on trace, sans que des dizines de figures quasi-identiques n'apparaissent.
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	draw();
	console.log(figures); // pour le débuggage

    // on calcule la hauteur et la largeur du rectangle de tracé en fonction de la position du curseur par rapport à sa position de départ.
    var width = mouseX - startX;
    var height = mouseY - startY;

    // on dessine un rectangle de tracé
    if (outil == 'rectangle' || outil == 'triangle' || outil == 'ellipse'){
		ctx.strokeRect(startX, startY, width, height);
	}
	
	
	// on met à jour les données de la figure en continu.
	var l = figures.length;
	if (outil == 'rectangle' || outil == 'triangle' || outil == 'ellipse'){
		figures[l-1] = [outil, startX, startY, mouseX, mouseY, stroke_color, fill_color, stroke_thickness]; 
	}

	// déplacement de figures
	else if (outil == 'hand'){	
		console.log(forme_selectionnee); // pour le débuggage
		if (indice_selection != -2) {
			moveX = mouseX - startX;
			moveY = mouseY - startY;
			if (forme_selectionnee[0] != 'text') {
				// rappel : figures[i] = [outil, startX, startY, mouseX, mouseY, stroke_color, fill_color, stroke_thickness];
				forme_selectionnee[1] = old1 + moveX;
				forme_selectionnee[2] = old2 + moveY;
				forme_selectionnee[3] = old3 + moveX;
				forme_selectionnee[4] = old4 + moveY;
				console.log(forme_selectionnee[1], forme_selectionnee[2], forme_selectionnee[3],forme_selectionnee[4]) //pour le débuggage
			}
			else {
				// rappel pour les zones de texte : figures[i] = [outil, X, Y, texte, largeur_max, couleur_texte, type_police, taille_police]
				forme_selectionnee[1] = old1 + moveX;
				forme_selectionnee[2] = old2 + moveY;
				forme_selectionnee[4] = old4 - moveX; // si on augmente l'abscisse X, on déplace la zone vers la droite. Donc la largeur max diminue.
				console.log(forme_selectionnee[1], forme_selectionnee[2], forme_selectionnee[3],forme_selectionnee[4]) //pour le débuggage
			}
		}
	}
	
	
	// redimmensionnement de figures
	// else if (outil == 'size'){
	// 	pass;
	// }

	// console.log(figures[l-1]); // pour le débuggage
	// console.log(stroke_color);

}

// function handleclick(e) {
// 	console.log("fonction handleclick")
// 	if (outil == 'text') {
// 		// on récupère le texte du formulaire
// 		texte_formulaire = document.getElementById("your_text").value;
// 		// initialisation du curseur de la souris
// 		var canvasOffset = canvas.getBoundingClientRect();
// 		var offsetX = canvasOffset.left;
// 		var offsetY = canvasOffset.top;
// 		// on a besoin de connaitre la position du curseur de la souris.
// 		mouseX = parseInt(e.clientX - offsetX);
// 		mouseY = parseInt(e.clientY - offsetY);
// 		max_width = canvas.width - mouseX
// 		text_color = fill_color;
// 		// sauvegarde pour les zones de texte :
// 		figures.push([outil, mouseX, mouseY, texte_formulaire, max_width, font_type, text_color, font_size])
// 		// on efface le canvas et on redessine les figures, pour valider la création de la zone.
// 		ctx.clearRect(0, 0, canvas.width, canvas.height);
// 		draw();
// 	}
// }











function outil_gomme() {
	if (forme_selectionnee != 'None' || indice_selection != -2) {
		// on déplace les données de la figure sélectionnée à la fin de la liste figures.
		const troisième_variable = forme_selectionnee;
		var i = indice_selection
		var l = figures.length;
		while (i < l-1) {
			figures[i] = figures[i+1];
			i += 1;
		}
		figures[-1] = troisième_variable;
		// on supprime la figure sélectionnée (qui est donc maintenant en dernière position).
		figures.splice(-1);
		// on réinitialise les données de sélection.
		forme_selectionnee = 'None';
		indice_selection = -2;
		// on efface le canvas et on redessine les figures, pour valider les changements.
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		draw();
	}
	else {
		// si aucune forme n'est sélectionnée, on efface complètement le canvas.
		alert("Toutes les figures du canvas vont être effacées.");
		figures = [];
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
}
document.getElementById("btn_erase").onclick = outil_gomme;


function KeyPress(e) {			// CTRL + Z pour annuler la dernière construction
    var evtobj = window.event? event : e
    if (evtobj.keyCode == 90 && evtobj.ctrlKey){
        figures.splice(-1);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //Fonction pour afficher
		draw();
	}
}
document.onkeydown = KeyPress;

// console.log(document.getElementById("select_fill_color"));


// function zone_texte_souris() {
// 	// mode de sauvegarde : figures[l-1] = [outil, startX, startY, text, max_width, text_color, font_size, font_type]; 
// 	if (outil = 'text') {
// 		texte = document.getElementById("your_text").value;
// 		// initialisation du curseur de la souris
// 		var canvasOffset = canvas.getBoundingClientRect();
// 		var offsetX = canvasOffset.left;
// 		var offsetY = canvasOffset.top;
// 		// on a besoin de connaitre la position du curseur de la souris.
// 		mouseX = parseInt(e.clientX - offsetX);
// 		mouseY = parseInt(e.clientY - offsetY);
// 		text_color = fill_color;
// 		ctx.fillStyle = text_color;
// 		ctx.font = font_size . font_type;
// 		max_width = canvas.width - mouseX
// 		ctx.fillText(texte, mouseX, mouseY, max_width);
// 	}
// 	else {
// 		return
// 	}
// }





function changer_couleur_remplissage() {
	let new_color = document.getElementById("select_fill_color").value;
	if (indice_selection != -2) {
		// une forme est sélectionnée donc on change sa couleur.
		// rappel : figures[i] = [outil, startX, startY, mouseX, mouseY, stroke_color, fill_color, stroke_thickness];
		forme_selectionnee[6] = new_color;
		// on efface le canvas et on redessine les figures, pour valider les changements.
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		draw();
	}
	// les cases à droite restent dans la couleur choisie donc on garde cette couleur pour les prochaines figures.
	fill_color = new_color;
}
document.getElementById("confirm_fill_color").onclick = changer_couleur_remplissage;

function changer_couleur_contour() {
	let new_color = document.getElementById("select_stroke_color").value;
	if (indice_selection != -2) {
		if (forme_selectionnee[0] != 'text') { // la coordonnée 6 de la zone de texte n'est pas une couleur et n'est pas modifiable.
			// une forme est sélectionnée donc on change sa couleur.
			// rappel : figures[i] = [outil, startX, startY, mouseX, mouseY, stroke_color, fill_color, stroke_thickness];
			forme_selectionnee[5] = new_color;
			// on efface le canvas et on redessine les figures, pour valider les changements.
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			draw();
		}
	}
	// les cases à droite restent dans la couleur choisie donc on garde cette couleur pour les prochaines figures.
	stroke_color = new_color;
}

document.getElementById("confirm_stroke_color").onclick = changer_couleur_contour;

function changer_epaisseur_contour() { // ça doit changer la taille de police pour les zones de texte
	let number = document.getElementById("select_stroke_thickness").value;
	if (indice_selection != -2) {
		// une forme est sélectionnée donc on change sa couleur.
		// rappel : figures[i] = [outil, startX, startY, mouseX, mouseY, stroke_color, fill_color, stroke_thickness];
		forme_selectionnee[7] = number;
		// on efface le canvas et on redessine les figures, pour valider les changements.
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		draw();
	}
	// les cases à droite restent dans la couleur choisie donc on garde cette couleur pour les prochaines figures.
	stroke_thickness = number;
}
document.getElementById("confirm_stroke_thickness").onclick = changer_epaisseur_contour;


function avancer_figure() {
	console.log(forme_selectionnee); // pour le débuggage
	if (indice_selection != -2) {
		alert("Vous devez d'abord sélectionner une figure avec l'outil main.");
	}
	else {
		troisième_variable = figures[indice_selection-1];
		figures[indice_selection-1] = forme_selectionnee;
		forme_selectionnee = troisième_variable;
		indice_selection -= 1;
		// on efface le canvas et on redessine les figures, pour valider les changements.
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		draw();
	}
}
document.getElementById("figure_front").onclick = avancer_figure;



function reculer_figure() {
	console.log(forme_selectionnee); // pour le débuggage	
	if (indice_selection != -2) {
		alert("Vous devez d'abord sélectionner une figure avec l'outil main.");
	}
	else {
		troisième_variable = figures[indice_selection+1];
		figures[indice_selection+1] = forme_selectionnee;
		forme_selectionnee = troisième_variable;
		indice_selection += 1;
		// on efface le canvas et on redessine les figures, pour valider les changements.
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		draw();
	}
}
document.getElementById("figure_back").onclick = reculer_figure;



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
// document.getElementById('canvas').addEventListener('onclick', function(e) {
// 	handleclick(e);
// });














// tout ce qui suit est la propriété intellectuelle d'Adrien 
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