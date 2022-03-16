<section id="section_projet">
    <div class="newProjet">
    <button class="newProjetBtn"  type="button" onclick="window.location.href = '/new_project';"></btn>
        <span>Nouveau Projet</span>
    </button></div>

    <?php foreach($projets as $projet): ?>
        <div class="projet">
            <btn class="projetBtn">
                <span id="name"><?= $projet["project_name"]  ?></span>
                <span id="date"><?=$projet["date"] ?></span>
                <button class="delete"><img src="img/bin.png" alt="BIN" id="bin"></button>
            </div>
            
    
    <?php endforeach; ?>
</section>