

 class GenerateurAleatoire {
    // Définit une classe nommée GenerateurAleatoire qui sera exportée par défaut.
    genererNombreUnique(max, exclus) {
        // Définit une méthode nommée genererNombreUnique qui prend un maximum et un tableau de nombres à exclure.
        let nombreAleatoire;
        // Déclare une variable pour stocker le nombre aléatoire généré.
        do {
            // Boucle do...while qui s'exécute au moins une fois et continue tant que la condition est vraie.
            nombreAleatoire = Math.floor(Math.random() * max) + 1;
            // Génère un nombre aléatoire entier entre 1 (inclus) et max (inclus).
        } while (exclus.includes(nombreAleatoire));
        // La boucle continue tant que le nombre aléatoire généré est présent dans le tableau des nombres exclus.
        return nombreAleatoire;
        // Retourne le nombre aléatoire unique généré.
    }
}