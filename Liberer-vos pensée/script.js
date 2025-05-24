// script.js
// Fichier JavaScript pour l'interaction de l'application.

function toggleMenu() {
    const menu = document.getElementById('burger-menu');
    menu.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    const burnButton = document.querySelector('.burn-button');
    if (burnButton) {
        burnButton.addEventListener('click', function() {
            // Vous pouvez ajouter ici des effets visuels supplémentaires pour le clic sur "Brûler"
            burnButton.classList.add('flaming'); // Exemple d'ajout de classe pour un effet CSS
            setTimeout(() => {
                burnButton.classList.remove('flaming');
            }, 500); // Supprime la classe après un certain temps
        });
    }
});