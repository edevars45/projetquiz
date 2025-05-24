/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu. 
 * 
 *********************************************************************************/
//  lancerJeu() 
 // Initialisations
//     let score = 0;
//     let i = 0;
//     let listeProposition = listeMots; // Initialisation par défaut avec listeMots

//     let btnValiderMot = document.getElementById("btnValiderMot");
//     let inputEcriture = document.getElementById("inputEcriture");
//     afficherProposition(listeProposition[i]);

//     btnValiderMot.addEventListener("click", () => {
//         console.log(inputEcriture.value);
//         // Si le mot saisi est identique au mot actuel de la liste
//         if (inputEcriture.value === listeProposition[i]) {
//             // Incrémente le score
//             score++;
//         }
//         // Incrémente le compteur de mot
//         i++;
//         // Affiche le résultat
//         afficherResultat(score, i);
//         // Vide la zone de saisie
//         inputEcriture.value = '';
//         // Si il n'y a plus de mots
//         if (listeProposition[i] === undefined) {
//             // Affiche un message indiquant le fin du jeu
//             afficherProposition("Le jeu est fini");
//             // On désactive le bouton de validation
//             btnValiderMot.disabled = true;
//         } else {
//             // Affiche la proposition de mot
//             afficherProposition(listeProposition[i]);
//         }
//     });

//     afficherResultat(score, i);

//     // Gestion des boutons radio
//     let radioMots = document.getElementById("mots");
//     let radioPhrases = document.getElementById("phrases");

//     radioMots.addEventListener("change", () => {
//         if (radioMots.checked) {
//             listeProposition = listeMots;
//             i = 0; // Réinitialiser l'index
//             afficherProposition(listeProposition[i]);
//         }
//     });

//     radioPhrases.addEventListener("change", () => {
//         if (radioPhrases.checked) {
//             listeProposition = listePhrases;
//             i = 0; // Réinitialiser l'index
//             afficherProposition(listeProposition[i]);
//         }
//     });
// }

lancerJeu();


// J'ai mis ce code en commentaire, nous pourrons le récupérer lorsque nous en auront besoin :

// let inputEcriture = document.getElementById("inputEcriture");
// console.log(inputEcriture);

// let btnValiderMot = document.getElementById("btnValiderMot");
// console.log(btnValiderMot);

// let zoneProposition = document.querySelector(".zoneProposition");
// console.log(zoneProposition);

// let spanScore = document.querySelector(".zoneScore span");
// console.log(spanScore);

// let listeBtnRadio = document.querySelectorAll(".optionSource input");
// console.log(listeBtnRadio);