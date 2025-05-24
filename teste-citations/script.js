// const confessionTextarea = document.getElementById('confessionText');
// const messageElement = document.getElementById('message');
// const burnButton = document.getElementById('burnBtn');

// function saveConfession() {
//     const confession = confessionTextarea.value.trim();
//     if (confession) {
//         // Ici, vous pourriez implémenter la logique pour sauvegarder la confession
//         messageElement.textContent = "Votre message a été conservé.";
//         showMessage();
//         confessionTextarea.value = ''; // Effacer le champ après sauvegarde
//     } else {
//         messageElement.textContent = "Veuillez écrire quelque chose avant de conserver.";
//         showMessage();
//     }
// }

// function burnConfession() {
//     burnButton.classList.add('burn-animation');
//     messageElement.textContent = "Votre message a été symboliquement brûlé.";
//     showMessage();
//     confessionTextarea.value = ''; // Effacer le champ après "brûlage"
//     // Retirer l'animation après un certain temps (pour qu'elle puisse être rejouée)
//     setTimeout(() => {
//         burnButton.classList.remove('burn-animation');
//     }, 1000); // Durée de l'animation
// }

// function showMessage() {
//     messageElement.style.display = 'block';
//     setTimeout(() => {
//         messageElement.style.display = 'none';
//     }, 3000); // Cacher le message après 3 secondes
// }