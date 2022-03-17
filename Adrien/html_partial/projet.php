<div id=#title><H1 id="yourProjet">VOS PROJETS</H1></div>
<section id="section_projet">
    <div class="newProjet">
        <button class="newProjetBtn" id="" type="button" onclick="window.location.href = '/new_project';"></btn>
            <span>Nouveau Projet</span>
        </button>
        <img id="addProjet" src="img/Icons/plus.png" alt="+">
    </div>

    <?php foreach($projets as $projet): ?>
        <div class="projet">
            <form class="projetBtn" method="post">
                <button class="projetBtn" id="" type="submit">
                    <span id="name" ><?= $projet["project_name"]?></span>
                    <span id="date"><?=$projet["date"] ?></span>
                    <input type="hidden" id="project_name" name="project_name" value="<?= $projet["project_name"]?>">
                </button>
            </form>
            <button class="delete" id=""><img id="dash"src="img/bin.png" alt="BIN" ></button>
        </div>
    <?php endforeach; ?>
</section>