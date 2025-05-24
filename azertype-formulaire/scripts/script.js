/*********************************************************************************
 * * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {
    // Récupération de la zone dans laquelle on va écrire le score
    let spanScore = document.getElementById("score");
    // Ecriture du texte
    let affichageScore = `Votre score est de ${score} / ${nbMotsProposes}`;
    // On place le texte à l'intérieur du span. 
    spanScore.innerText = affichageScore;
}

/**
 * Cette fonction afficha dans la div "zoneProposition" le mot passé en argument.
 * @param {string} proposition 
 */
function afficherProposition(proposition) {
    let zoneProposition = document.querySelector(".zoneProposition");
    zoneProposition.innerText = proposition;
}

// Initialisations
let score = 0;
let i = 0;
let listeProposition = listeMots; // Initialisation par défaut avec listeMots

let btnValiderMot = document.getElementById("btnValiderMot");
let inputEcriture = document.getElementById("inputEcriture");
afficherProposition(listeProposition[i]);

btnValiderMot.addEventListener("click", () => {
    console.log(inputEcriture.value);
    // Si le mot saisi est identique au mot actuel de la liste
    if (inputEcriture.value === listeProposition[i]) {
        // Incrrémente le score
        score++;
    }
    // Incrémente le compteur de mot
    i++;
    // Affiche le résultat
    afficherResultat(score, i);
    // Vide la zone de saisie
    inputEcriture.value = '';
    // Si il n'y a plus de mots
    if (listeProposition[i] === undefined) {
        // Affiche un message indiquant le fin du jeu
        afficherProposition("Le jeu est fini");
        // On désactive le bouton de validation
        btnValiderMot.disabled = true;
    } else {
        // Affiche la proposition de mot
        afficherProposition(listeProposition[i]);
    }
});

afficherResultat(score, i);

// Gestion des boutons radio
let radioMots = document.getElementById("mots");
let radioPhrases = document.getElementById("phrases");

radioMots.addEventListener("change", () => {
    if (radioMots.checked) {
        listeProposition = listeMots;
        i = 0; // Réinitialiser l'index
        afficherProposition(listeProposition[i]);
    }
});

radioPhrases.addEventListener("change", () => {
    if (radioPhrases.checked) {
        listeProposition = listePhrases;
        i = 0; // Réinitialiser l'index
        afficherProposition(listeProposition[i]);
    }
});


//formulaire
const formulaire = document.getElementById('partageScoreForm');

formulaire.addEventListener('submit', (evenement) => {
    // Empêche le comportement par défaut de la soumission du formulaire,
    // permettant un traitement personnalisé des données.
    evenement.preventDefault();

    // Récupère les valeurs saisies par l'utilisateur dans les champs de formulaire.
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;

    // Affiche les données récupérées dans la console pour le débogage.
    // Dans une application réelle, ces données seraient envoyées à un serveur.
    console.log('Nom :', nom);
    console.log('Email :', email);

    // àfaire: Implémenter la logique d'envoi des données au serveur via AJAX,
    // ou afficher un message de confirmation à l'utilisateur.
});