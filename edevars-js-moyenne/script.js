// Fonction pour calculer la moyenne des notes entrées par l'utilisateur
function calculerMoyenne() {
    // 1. Récupère la valeur du champ de saisie avec l'ID "notes"
    const notesInput = document.getElementById("notes").value;

    // 2. Divise la chaîne de caractères en un tableau de chaînes, en utilisant l'espace comme séparateur
    const notesArrayString = notesInput.split(" ");

    // 3. Convertit chaque chaîne en nombre décimal, en remplaçant la virgule par un point
    const notesArray = notesArrayString.map(noteString => parseFloat(noteString.replace(",", ".")));

    // 4. Appelle la fonction calculateAverage pour calculer la moyenne du tableau de nombres
    const moyenne = calculateAverage(notesArray);

    // 5. Met à jour le contenu du paragraphe avec l'ID "resultat" pour afficher la moyenne calculée
    document.getElementById("resultat").textContent = "La moyenne est : " + moyenne;
}

// Fonction pour calculer la moyenne d'un tableau de nombres
function calculateAverage(table) {
    // 1. Vérifie si le tableau est vide
    if (table.length === 0) {
        // 2. Si le tableau est vide, retourne 0 pour éviter une division par zéro
        return 0;
    }

    // 3. Utilise la méthode reduce pour calculer la somme des éléments du tableau
    //    - acc est l'accumulateur (la somme), val est la valeur courante
    //    - 0 est la valeur initiale de l'accumulateur
    const sum = table.reduce((acc, val) => acc + val, 0);

    // 4. Divise la somme par le nombre d'éléments pour obtenir la moyenne
    return sum / table.length;
}