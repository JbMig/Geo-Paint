<header>
    <nav>
        <div class="tools">
		    <button class="btnTools"><img src="img/icons\texte.png" alt="T" /></button>
            <button class="btnTools" id="btn_erase"><img src="img/icons\la-gomme.png" alt="gomme" /></button>
            <button class="btnTools" id="btn_rect"><img src="img/icons\square.png" alt="square" /></button>
            <button class="btnTools" id="btn_tri"><img src="img/icons\triangle.png" alt="triangle" /></button>
            <button class="btnTools" id = "btn_elli"><img src="img/icons\cercle.png" alt="cercle" /></button>
        </div>
        <div class="middleTools">
            <button class="btnMiddleTools" id="btn_resize"><img src="img/icons\format.png" alt="format" /></button>
            <button class="btnMiddleTools" id="btn_hand"><img src="img/icons\hand.png" alt="hand" /></button>
            <button class="btnMiddleTools" id="open_form"><img src="img/icons\save-file.png" alt="save-file"></button>            
            <button class="btnMiddleTools" id="menu"><img src="img/icons\download.png" alt="downloads" /></button>
        </div>

       <!-- boutons de création png et pdf -->
        <div>  
            <button id="convertirPng">télécharger en png</button>
            <button id="convertirPdf">télécharger en pdf</button>
        </div>
        <!-- formulaire Adrien -->
        <div id="post_json" type="text">[]</div>
        <form id="form" method="post">
            <a href="#" class="cross">&times;</a>
            <label for="get_json">Nom du fichier</label>
            <input id="get_json" type="hidden" name="data">
            <input id="projectName" type="text" name="projectName" required>
            <button id="save" type="submit">Valider</button>
        </form>

        <div class="nameFile"><p id="textNameFile">Nom du ficher</p></div>
        <div><button class="quit" type="button" onclick="window.location.href = '/projet';">QUIT</button></div>
    </nav>
    <div class="draw">
        <canvas class="bigSquare" id="canvas" width=850 height=850></canvas>
        <div class="colorChoise">
			<div class="colors">
				<div>
					<input type="color" id="select_fill_color" value=#FFFFFF>Couleur de remplissage</input>
					<button id="confirm_fill_color">Confirmer</button>
				</div>
				<div>
					<input type="color" id="select_stroke_color">Couleur de contour</input>
					<button id="confirm_stroke_color">Confirmer</button>
				</div>
				<div>
					<input type="number" min="1" max="50" step="1" id="select_stroke_thickness">Épaisseur de contour</input>
					<button id="confirm_stroke_thickness">Confirmer</button>
				</div>
			</div>
        </div>
    </div>
</header>

<!-- Bibliothèque qui permet le téléchargement en pdf-->
<script src="//cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.3/jspdf.min.js"></script>
<script src="script/script.js?<?php echo time(); ?>"></script>