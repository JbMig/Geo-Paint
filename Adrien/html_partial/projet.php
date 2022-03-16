<section id="section_projet">
    <div id="button">
        <button class="projet" id="NewFile" type="button" onclick="window.location.href = '/new_project';">
            <span>Nouveau Projet</span>
        </button>
    </div>
    <?php foreach($projets as $projet): ?>
        <div id="button">
            <button  class="projet">
                <span id="name"><?= $projet["project_name"]  ?></span>
                <span id="date"><?=$projet["date"] ?></span>
            </button>
            <button class="delete"><img src="img/bin.png" alt="BIN" id="bin"></button>
        </div>
    <?php endforeach; ?>
</section>