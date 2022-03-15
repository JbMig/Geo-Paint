<?php foreach($projets as $projet): ?>
    <div id="button"><button  class="projet"><span id="name"><?= $projet["nom"]  ?></span><span id="date"><?=$projet["date"] ?></span></button>
    <button class="delete"><img src="/Geo-paint\bin.png" alt="BIN" id="bin"></button>
    </div>
<?php endforeach; ?>