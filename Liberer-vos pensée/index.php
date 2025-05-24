<?php
// index.php
// Fichier principal de l'application "Beyond the Avenir".
// Contient la structure HTML et les points d'insertion pour le contenu dynamique PHP.

session_start();
if (!isset($_SESSION['favoris'])) {
    $_SESSION['favoris'] = [];
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Beyond the Avenir</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header>
        <div class="logo-container">
            <img src="logo.png" alt="Votre Logo" id="logo">
            <div class="header-info">
                <h1>Développeuse Web</h1>
                <p class="emplacement">Montargis, France</p>
            </div>
        </div>
        <div class="menu-icon" onclick="toggleMenu()">&#9776;</div>
    </header>

    <nav id="burger-menu" class="hidden">
        <ul>
            <li><a href="#home">Accueil</a></li>
            <li><a href="#un">Un</a></li>
            <li><a href="#deux">Deux</a></li>
            <li><a href="#biography">Biography</a></li>
            <li><a href="#cv">CV</a></li>
            <li><a href="#favoris">Favoris</a></li>
        </ul>
    </nav>

    <main>
        <section id="home" class="home-section">
            <h2>Libérez vos Pensées</h2>
            <p class="accroche">Écrivez vos pensées afin qu'elles soient libérées ou optimisées.</p>
            <div class="thought-actions-container">
                <form method="POST" action="php/traitement.php" class="thought-form">
                    <div class="input-with-icons">
                        <input type="text" id="thought-input" name="thought" placeholder="Votre pensée ici...">
                        <div class="action-icons">
                            <img src="joyeux.png" alt="Optimiser" class="action-icon-inline optimize-icon" title="Optimiser">
                            <img src="bruler.png" alt="Brûler" class="action-icon-inline burn-icon" title="Brûler">
                        </div>
                    </div>
                    <div class="buttons-container">
                        <button type="submit" name="action" value="optimiser" class="action-button optimize-button">
                            <span class="button-text">Optimiser</span>
                        </button>
                        <button type="submit" name="action" value="bruler" class="action-button burn-button">
                            <span class="button-text">Brûler</span>
                        </button>
                    </div>
                </form>
            </div>
            <div id="thought-display">
                <?php
                // Inclusion du fichier traitement.php pour afficher le résultat
                include 'php/traitement.php';
                if (isset($message_resultat)) {
                    echo $message_resultat;
                }
                ?>
            </div>
        </section>

        <section id="un">
            <h2>Un</h2>
            <p>Contenu de la section "Un".</p>
        </section>

        <section id="deux">
            <h2>Deux</h2>
            <p>Contenu de la section "Deux".</p>
        </section>

        <section id="biography">
            <h2>Biography</h2>
            <p>Votre biographie ici. Remplissez cette section avec des informations sur vous.</p>
        </section>

        <section id="cv">
            <h2>CV</h2>
            <img src="votre-photo.jpg" alt="Votre Photo" class="profile-photo">
            <p>Détails de votre CV ici. Ajoutez ici des informations sur votre expérience, vos compétences, etc.</p>
        </section>

        <section id="favoris">
            <h2>Vos Pensées Favorites</h2>
            <?php if (!empty($_SESSION['favoris'])) : ?>
                <ul>
                    <?php foreach ($_SESSION['favoris'] as $fav) : ?>
                        <li>
                            <span class="pensee-fav"><?php echo htmlspecialchars($fav['pensee']); ?></span> -
                            <span class="action-fav"><?php echo ($fav['action'] === 'optimiser') ? 'Optimisée 😊' : 'Brûlée 🔥'; ?></span>
                            <span class="date-fav"><?php echo date('d/m/Y H:i', $fav['timestamp']); ?></span>
                        </li>
                    <?php endforeach; ?>
                </ul>
            <?php else : ?>
                <p>Votre liste de favoris est vide pour le moment.</p>
            <?php endif; ?>
        </section>

        <aside class="citation-jour">
            <?php
            // Inclusion du fichier traitement.php pour obtenir la citation du jour
            include 'php/traitement.php';
            if (isset($citation_du_jour)) {
                echo '<img src="' . $citation_du_jour['image'] . '" alt="Citation Positive" class="citation-image">';
                echo '<p class="citation-texte">"' . $citation_du_jour['texte'] . '"</p>';
            }
            ?>
        </aside>
    </main>

    <footer>
        <p>&copy; 2023 Beyond the Avenir</p>
        <div class="socials">
            <a href="https://www.instagram.com/" target="_blank">Instagram</a>
            <a href="https://www.tiktok.com/" target="_blank">TikTok</a>
            <a href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
        </div>
    </footer>

    <script src="scripts/script.js"></script>
</body>
</html>