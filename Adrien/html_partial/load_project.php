<header>
    <nav>
        <div class="tools">
            <button class="btnTools" id="btn_txt"><img src="img/icons\texte.png" alt="T" /></button>
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
        <div id="convertir">
            <button id="convertirPng" class="btnConv">télécharger en png</button>
            <button id="convertirPdf" class="btnConv">télécharger en pdf</button>
        </div>

        <!-- formulaire sauvegarde -->
        <div id="post_json" type="text"><?= $_SESSION["projet"]["data"];?></div>

        <form id="form" method="post">
            <a href="#" class="cross">&times;</a>
            <label for="get_json">Sauvegarder</label>
            <input id="get_json" type="hidden" name="data">
            <button id="save" type="submit">Valider</button>
        </form>

        <div class="nameFile"><p id="textNameFile"><?=$title?></p></div>
        <div><button class="quit" type="button" onclick="window.location.href = '/projet';">QUIT</button></div>
    </nav>
    <div class="draw">
        <canvas class="bigSquare" id="canvas" width=850 height=1150></canvas>
        <div class="colorChoice">
            <div class="colors">
				<div class="colorSelection">
                    <p class="textColor">Couleur de remplissage :</p>
					<input type="color" id="select_fill_color" value=#FFFFFF class="selectColor"></input>
					<button id="confirm_fill_color" class="confirmBtn">Confirmer</button>
				</div>
				<div class="colorSelection">
                    <p class="textColor">Couleur de contour :</p>
					<input type="color" id="select_stroke_color" class="selectColor"></input>
					<button id="confirm_stroke_color" class="confirmBtn">Confirmer</button>
				</div>
				<div class="colorSelection">
                    <p class="textColor">Épaisseur de contour :</p>
					<input type="number" min="1" max="50" step="1" id="select_stroke_thickness" class="selectColor"></input>
					<button id="confirm_stroke_thickness" class="confirmBtn">Confirmer</button>
				</div>
				<div class="colorSelection">
					<button id="figure_front" class="confirmBtn">Avancer la figure</button>
					<button id="figure_back" class="confirmBtn">Reculer la figure</button>
				</div>
			</div>
            <div class="font">
                <p class="textColor">Entrez votre texte :</p>
                <input id="your_text" type="text">
				<p class="textColor">Type de police :</p>
                <select class="font_select" id="select_font_type">
                    <option value="serif">Serif</option>
                    <option value="sans-serif">Sans-serif</option>
                    <option value="cursive">Cursive</option>
                </select>
				<p class="textColor">Taille de police :</p>
				<input type="number" min="10" max="100" step="2" class="font_select" id="select_font_size"></input>
                <button id="confirm_text" class="confirmBtn">Confirmer</button>
            </div>
		</div>
    </div>
</header>

<!-- Bibliothèque qui permet le téléchargement en pdf-->
<script src="//cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.3/jspdf.min.js"></script>
<script src="script/script.js?<?php echo time(); ?>"></script>