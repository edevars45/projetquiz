// ce fichier permettra de charger les questions depuis le fichier JSON, affichera les options sous forme de boutons radio et calculera le score une fois le quiz soumis 
// import questions from './dev.json';
// import reponses from './dev.json';
// import bienveillance from './bienveillance.json';

let score = 0; // j'initialise le score à zéro 

const questions = await fetch ("dev.json");
console.dir(questions);
const reponses = await fetch ("dev.json");
console.log(reponses);
const bienveillance = await fetch ("bienveillance.json");
console.log(bienveillance);
const boutons = document.querySelector("#bouton");
console.log(boutons);

boutons.addEventListener("click", () => {
    
})