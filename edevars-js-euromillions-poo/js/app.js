// Instanciation des classes, création d'objets à partir des classes.
import TirageEuromillions from './js/classes/TirageEuromillions.js';
import JoueurEuromillions from './js/JoueurEuromillions.js';
import ResultatEuromillions from './js/classes/ResultatEuromillions.js';
import AffichageResultat from './js/classes/AffichageResultat.js';

const tirage = new TirageEuromillions();
const joueur = new JoueurEuromillions();
const resultat = new ResultatEuromillions();
const affichage = new AffichageResultat();

// Récupération des éléments HTML du document.
const numeroInputs = document.querySelectorAll('#selection-joueur input[id^="numero"]');
const etoileInputs = document.querySelectorAll('#selection-joueur input[id^="etoile"]');
const boutonJouer = document.getElementById('jouer');
const resultatsDiv = document.getElementById('resultats');
const numerosTirageElement = document.getElementById('numeros-tirage');
const etoilesTirageElement = document.getElementById('etoiles-tirage');
const numerosCorrectsElement = document.getElementById('numeros-corrects');
const etoilesCorrectsElement = document.getElementById('etoiles-corrects');

// Fonction pour récupérer les numéros et étoiles choisis par le joueur.
function recupererChoixJoueur() {
    const numerosChoisis = Array.from(numeroInputs)
        .map(input => parseInt(input.value))
        .filter(nombre => !isNaN(nombre) && nombre >= 1 && nombre <= 50);

    const etoilesChoisies = Array.from(etoileInputs)
        .map(input => parseInt(input.value))
        .filter(nombre => !isNaN(nombre) && nombre >= 1 && nombre <= 12);

    return { numeros: numerosChoisis, etoiles: etoilesChoisies };
}

// Ajoute un écouteur d'événements au clic du bouton "Valider mes numéros".
boutonJouer.addEventListener('click', () => {
    const choixJoueur = recupererChoixJoueur();

    if (choixJoueur.numeros.length === 5 && choixJoueur.etoiles.length === 2) {
        joueur.choisirNumeros(choixJoueur.numeros);
        joueur.choisirEtoiles(choixJoueur.etoiles);

        const tirageResultat = tirage.effectuerTirage();
        const comparaisonResultat = resultat.comparerTirage(tirageResultat, joueur.obtenirChoix());

        // afficher les informations dans la console
        console.log("Tirage Resultat:", tirageResultat);
        console.log("Comparaison Resultat:", comparaisonResultat);
        console.log("Resultats Div:", resultatsDiv);

        affichage.afficherResultats(tirageResultat, comparaisonResultat, numerosTirageElement, etoilesTirageElement, numerosCorrectsElement, etoilesCorrectsElement, resultatsDiv);
    } else {
        alert("Veuillez sélectionner 5 numéros et 2 étoiles valides.");
    }
});

// Afficher un tirage initial au chargement de la page (optionnel).
const tirageInitial = tirage.effectuerTirage();
numerosTirageElement.textContent = tirageInitial.numeros.join(' - ');
etoilesTirageElement.textContent = tirageInitial.etoiles.join(' - ');