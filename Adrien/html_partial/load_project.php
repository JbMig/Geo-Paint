<header>
    <nav>
        <div class="tools">
            <button class="btnTools" id="btn_txt"><img src="img/icons\texte.png" alt="T" /></button>
            <button class="btnTools" id="btn_rect"><img src="img/icons\square.png" alt="square" /></button>
            <button class="btnTools" id="btn_erase"><img src="img/icons\la-gomme.png" alt="gomme" /></button>
            <button class="btnTools" id="btn_img"><img src="img/icons\addImage.png" alt="addImage" /></button>
            <button class="btnTools" id="btn_tri"><img src="img/icons\triangle.png" alt="triangle" /></button>
            <button class="btnTools" id="btn_elli"><img src="img/icons\cercle.png" alt="cercle" /></button>
        </div>
        <div class="middleTools">
            <button class="btnMiddleTools"><img src="img/icons\format.png" alt="format" /></button>
            <button class="btnMiddleTools"><img src="img/icons\hand.png" alt="hand" /></button>
            <button class="btnMiddleTools"><img src="img/icons\save-file.png" alt="save-file"></button>
            <button class="btnMiddleTools"><img src="img/icons\download.png" alt="downloads" /></button>
        </div>
        <div class="nameFile"><p id="textNameFile"><?=$title?></p></div>
        <div><button class="quit" type="button" onclick="window.location.href = '/projet';">QUIT</button></div>
    </nav>
    <div class="draw">
        <canvas class="bigSquare" id="canvas" width=850 height=850></canvas>
        <div class="colorChoise">
            <div class="colors"></div>
        </div>
    </div>
</header>