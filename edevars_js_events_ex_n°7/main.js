// Sélection des éléments nécessaires
const elementADeplacer = document.getElementById('draggable');
const dropzone = document.getElementById('dropzone');

// Gestion de l'événement de début du glissement
elementADeplacer.addEventListener('dragstart', (event) => {
    // Stockage de l'ID de l'élément déplacé
    event.dataTransfer.setData('text/plain', event.target.id);
});

// Gestion de l'événement de survol de la zone de dépôt
dropzone.addEventListener('dragover', (event) => {
    // Autorisation du dépôt
    event.preventDefault();
});

// Gestion de l'événement de dépôt
dropzone.addEventListener('drop', (event) => {
    // Récupération de l'ID de l'élément déplacé
    const id = event.dataTransfer.getData('text/plain');
    const element = document.getElementById(id);

    // Ajout de l'élément à la zone de dépôt
    dropzone.appendChild(element);

    // Désactivation du glissement de l'élément
    element.draggable = false;
});