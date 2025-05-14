// ce fichier permettra de charger les questions depuis le fichier JSON, affichera les options sous forme de boutons radio et calculera le score une fois le quiz soumis 
const questions = await fetch ("dev.json");
const reponses = await 