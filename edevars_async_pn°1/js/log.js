export function log(message, data) {
    const consoleDiv = document.getElementById('console'); // Récupère l'élément div avec l'ID 'console'.
    if (consoleDiv) { // Vérifie si l'élément a été trouvé.
        const preElement = document.createElement('pre'); // Crée un élément <pre> pour préserver le format du JSON.
        preElement.textContent = message + (data !== undefined ? ' ' + JSON.stringify(data, null, 2) : ''); // Crée le texte à afficher.  'JSON.stringify(data, null, 2)' formate le JSON pour une meilleure lisibilité.
        consoleDiv.appendChild(preElement); // Ajoute l'élément <pre> au div 'console'.
    } else {
        console.log(message, data); // Si le div 'console' n'est pas trouvé, affiche dans la console.
    }
}