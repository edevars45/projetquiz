<?php
// index.php
// Fichier principal de l'application "Ma Biographie - Beyond the Horizon"

// session_start(); // Si vous avez besoin des sessions pour d'autres fonctionnalités, décommentez cette ligne
// if (!isset($_SESSION['favoris'])) {
//     $_SESSION['favoris'] = [];
// }
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ma Biographie - Beyond the Horizon</title>
    <link rel="stylesheet" href="css/styles.css">
    <style>
        /* Styles CSS intégrés (à déplacer dans styles.css si vous le souhaitez) */
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 20px;
        }
        header {
            background: #35424a;
            color: #ffffff;
            padding: 20px 0;
            text-align: center;
        }
        h1 {
            margin: 0;
        }
        main {
            padding: 20px;
        }
        section {
            background: #ffffff;
            margin: 20px 0;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
            color: #35424a;
        }
        img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
        }
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
        }
        .gallery-item {
            background-color: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            padding: 10px;
        }
        .quote {
            font-style: italic;
            color: #555;
            margin-top: 10px;
        }
        footer {
            text-align: center;
            padding: 10px 0;
            background: #35424a;
            color: #ffffff;
            position: relative;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>
<body>

    <header>
        <h1>Ma Biographie - Beyond the Horizon</h1>
    </header>

    <main>
        <section id="conclusion">
            <h2>Conclusion : Un Voyage de Résilience et d'Espoir</h2>
            <p>Dans les pages de ce livre, j'ai partagé mon parcours tumultueux, un voyage à travers les ombres de l'enfance, les blessures profondes et les luttes quotidiennes...</p>
            <img src="images/image-conclusion.jpg" alt="Voyage de résilience" />
        </section>

        <section id="introduction">
            <h2>Introduction</h2>
            <p>Je m'appelle Devars Esther, et mon parcours est un voyage à travers l'adversité...</p>
            <img src="images/image-introduction.jpg" alt="Introduction à mon histoire" />
        </section>

        <section id="chapitre1">
            <h2>Chapitre 1 : Les Ombres de l’Enfance</h2>
            <p>Je suis Devars Esther, née dans un environnement complexe et souvent difficile...</p>
            <img src="images/image-ombre-enfance.jpg" alt="Ombres de l'enfance" />
        </section>

        <section id="chapitre2">
            <h2>Chapitre 2 : La Perte et la Solitude</h2>
            <p>Après la perte tragique de ma mère, survenue à l'âge de 17 ans, j'ai vécu chez mon oncle...</p>
            <img src="images/image-perte.jpg" alt="Perte et solitude" />
        </section>

        <section id="chapitre3">
            <h2>Chapitre 3 : Les Années de Lutte</h2>
            <p>Les années passées chez mon oncle ont été marquées par un mélange de douleur et de souvenirs...</p>
            <img src="images/image-lutte.jpg" alt="Années de lutte" />
        </section>

        <section id="chapitre4">
            <h2>Chapitre 4 : Le Combat contre la Maladie</h2>
            <p>En 2016, ma vie a basculé avec la maladie de Crohn, qui a bouleversé mon quotidien...</p>
            <img src="images/image-maladie.jpg" alt="Combat contre la maladie" />
        </section>

        <section id="chapitre5">
            <h2>Chapitre 5 : La Douleur de la Perte</h2>
            <p>En 2017, j'ai dû faire face à une autre perte dévastatrice : celle de ma grand-mère...</p>
            <img src="images/image-douleur.jpg" alt="Douleur de la perte" />
        </section>

        <section id="chapitre6">
            <h2>Chapitre 6 : La Réinvention de Soi</h2>
            <p>Lorsque je travaillais comme auxiliaire de vie à l'ADAPAGE, je me dévouais à mes patients...</p>
            <img src="images/image-reinvention.jpg" alt="Réinvention de soi" />
        </section>

        <section id="chapitre7">
            <h2>Chapitre 7 : Vers un Nouvel Horizon</h2>
            <p>Malgré ces épreuves, j'ai décidé de me battre...</p>
            <img src="images/image-nouvel-horizon.jpg" alt="Vers un nouvel horizon" />
        </section>

        <section id="chapitre8">
            <h2>Chapitre 8 : La Quête de Soi</h2>
            <p>Actuellement, je suis en formation de développeuse web, poursuivant mes objectifs...</p>
            <img src="images/image-quete-soi.jpg" alt="Quête de soi" />
        </section>

        <section id="galerie">
            <h2>Galerie - Beyond the Horizon</h2>
            <div class="gallery">
                <div class="gallery-item">
                    <img src="images/image1.jpg" alt="Petite fille avec un horizon">
                    <p class="quote">"Regarde toujours vers l'horizon, de belles choses t'attendent."</p>
                </div>
                <div class="gallery-item">
                    <img src="images/image2.jpg" alt="Petite fille de dos">
                    <p class="quote">"Chaque jour est une nouvelle chance de découvrir le monde."</p>
                </div>
                <div class="gallery-item">
                    <img src="images/image3.jpg" alt="Petite fille et oiseaux">
                    <p class="quote">"Les rêves prennent leur envol, il suffit d'y croire."</p>
                </div>
                </div>
        </section>

        <section id="finale">
            <h2>Conclusion : Un Chemin d'Espoir</h2>
            <p>Venez suivre mon aventure, découvrir mes luttes et mes victoires...</p>
            <img src="images/image-espoir.jpg" alt="Chemin d'espoir" />
        </section>
    </main>

    <footer>
        <p>&copy; 2023 Devars Esther. Tous droits réservés.</p>
    </footer>

    <script src="scripts/script.js"></script>
</body>
</html>