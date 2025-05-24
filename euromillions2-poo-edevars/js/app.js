// Dans js/app.js
// Importe les classes nécessaires depuis leurs fichiers respectifs
import GenerateurAleatoire from "./classes/GenerateurAleatoire.js";
import ResultatEuromillions from "./classes/ResultatEuromillions.js";
import TirageEuromillions from "./classes/TirageEuromillions.js";
import AffichageResultat from "./classes/AffichageResultat.js";
import SelectionJoueur from "./classes/SelectionJoueur.js";

// Écoute l'événement 'DOMContentLoaded', qui se déclenche lorsque le document HTML est complètement chargé
document.addEventListener("DOMContentLoaded", () => {
    // Sélectionne tous les éléments div avec la classe 'champ-numero' dans la section 'champs-numeros'
    const champsNumerosSaisie = document.querySelectorAll(
        "#champs-numeros .champ-numero"
    );
    // Sélectionne tous les éléments div avec la classe 'champ-etoile' dans la section 'champs-etoiles'
    const champsEtoilesSaisie = document.querySelectorAll(
        "#champs-etoiles .champ-etoile"
    );
    // Sélectionne l'élément div avec l'ID 'numeros-tirage' où afficher les numéros de la sélection du joueur
    const numerosTirageElement = document.getElementById("numeros-tirage");
    // Sélectionne l'élément div avec l'ID 'etoiles-tirage' où afficher les étoiles de la sélection du joueur
    const etoilesTirageElement = document.getElementById("etoiles-tirage");
    // Crée une instance de la classe SelectionJoueur pour gérer les numéros et étoiles choisis par l'utilisateur
    const selectionJoueurInstance = new SelectionJoueur();
    // Crée une instance de la classe TirageEuromillions pour effectuer le tirage aléatoire
    const tirage = new TirageEuromillions();
    // Crée une instance de la classe AffichageResultat pour afficher les résultats du tirage et la comparaison
    const affichageResultat = new AffichageResultat(
        "numeros-tirage", // ID de l'élément où afficher les numéros tirés (sera réutilisé pour la sélection)
        "etoiles-tirage" // ID de l'élément où afficher les étoiles tirées (sera réutilisé pour la sélection)
    );
    // Sélectionne le bouton "Valider et Tirer"
    const genererButton = document.querySelector("button");

    // Fonction pour afficher la sélection du joueur dans la section des résultats (avant le tirage)
    const afficherSelectionJoueur = (numeros, etoiles) => {
        // Efface le contenu précédent de l'élément pour les numéros
        numerosTirageElement.innerHTML = '';
        // Efface le contenu précédent de l'élément pour les étoiles
        etoilesTirageElement.innerHTML = '';

        // Filtre les numéros non nuls et pour chacun...
        numeros.filter(n => n !== null).forEach(numero => {
            // Crée un élément span pour représenter la boule
            const boule = document.createElement("span");
            // Ajoute les classes CSS pour le style de la boule de numéro
            boule.classList.add("resultat-boule", "resultat-numero");
            // Définit le contenu texte de la boule avec le numéro
            boule.textContent = numero;
            // Ajoute la boule à l'élément d'affichage des numéros
            numerosTirageElement.appendChild(boule);
        });

        // Filtre les étoiles non nulles et pour chacune...
        etoiles.filter(e => e !== null).forEach(etoile => {
            // Crée un élément span pour représenter l'étoile
            const etoileElem = document.createElement("span");
            // Ajoute les classes CSS pour le style de l'étoile
            etoileElem.classList.add("resultat-boule", "resultat-etoile");
            // Définit le contenu texte de l'étoile
            etoileElem.textContent = etoile;
            // Ajoute l'étoile à l'élément d'affichage des étoiles
            etoilesTirageElement.appendChild(etoileElem);
        });
    };

    // Fonction pour gérer le changement de valeur (input) dans les champs de numéros et d'étoiles
    const gererChangementInput = function(event, index, isNumero) {
        // Récupère la valeur entrée par l'utilisateur
        let valeur = event.target.textContent;
        // Supprime tous les caractères qui ne sont pas des chiffres
        valeur = valeur.replace(/[^0-9]/g, '');
        // Limite la longueur de la valeur à deux chiffres
        if (valeur.length > 2) {
            valeur = valeur.slice(0, 2);
        }
        // Convertit la valeur en un nombre entier
        const nombre = parseInt(valeur);
        // Récupère l'élément de champ actuel
        const champElement = event.target;
        // Définit la fonction pour enregistrer la sélection (numéro ou étoile) en utilisant 'this' lié à l'instance de SelectionJoueur
        const setter = isNumero ? this.setNumeroChoisi : this.setEtoileChoisie;
        // Définit la fonction pour récupérer la sélection actuelle (numéro ou étoile)
        const getter = isNumero ? this.getNumerosChoisis : this.getEtoilesChoisies;
        // Définit les limites minimales et maximales pour les numéros et les étoiles
        const min = isNumero ? 1 : 1;
        const max = isNumero ? 50 : 12;

        // Vérifie si la conversion en nombre a réussi
        if (!isNaN(nombre)) {
            // Vérifie si le nombre est dans la plage valide
            if (nombre >= min && nombre <= max) {
                // Met à jour le contenu texte de la div
                champElement.textContent = valeur;
                // Met à jour l'attribut data-value pour l'affichage initial
                champElement.setAttribute("data-value", valeur);
                // Appelle la fonction setter pour enregistrer la sélection dans l'instance de SelectionJoueur
                setter.call(this, index, nombre);
            } else if (valeur === '') {
                // Si le champ est vide, met à jour le contenu et l'attribut data-value, et réinitialise la sélection
                champElement.textContent = '';
                champElement.setAttribute("data-value", '');
                setter.call(this, index, null);
            } else {
                // Si la valeur est invalide, rétablit la valeur précédente et met à jour l'attribut data-value
                champElement.textContent = getter.call(this)[index] || '';
                champElement.setAttribute("data-value", champElement.textContent);
            }
        } else if (valeur === '') {
            // Si la valeur n'est pas un nombre et est vide, réinitialise la sélection et met à jour l'attribut data-value
            setter.call(this, index, null);
            champElement.textContent = '';
            champElement.setAttribute("data-value", '');
        } else {
            // Si la valeur n'est pas un nombre et n'est pas vide, rétablit la valeur précédente et met à jour l'attribut data-value
            champElement.textContent = getter.call(this)[index] || '';
            champElement.setAttribute("data-value", champElement.textContent);
        }
    };

    // Pour chaque champ de numéro...
    champsNumerosSaisie.forEach((champ, index) => {
        // Rend la div éditable par l'utilisateur
        champ.setAttribute("contenteditable", "true");
        // Ajoute un écouteur d'événement 'input' qui appelle la fonction gererChangementInput avec le contexte (this) lié à selectionJoueurInstance
        champ.addEventListener("input", (event) => gererChangementInput.bind(selectionJoueurInstance)(event, index, true));
        // Initialise l'attribut data-value pour l'affichage initial vide
        champ.setAttribute("data-value", '');
    });

    // Pour chaque champ d'étoile...
    champsEtoilesSaisie.forEach((champ, index) => {
        // Rend la div éditable par l'utilisateur
        champ.setAttribute("contenteditable", "true");
        // Ajoute un écouteur d'événement 'input' qui appelle la fonction gererChangementInput avec le contexte (this) lié à selectionJoueurInstance
        champ.addEventListener("input", (event) => gererChangementInput.bind(selectionJoueurInstance)(event, index, false));
        // Initialise l'attribut data-value pour l'affichage initial vide
        champ.setAttribute("data-value", '');
    });

    // Ajoute un écouteur d'événement 'click' au bouton "Valider et Tirer"
    genererButton.addEventListener("click", () => {
        // Récupère les numéros choisis par le joueur depuis l'instance de SelectionJoueur
        const joueurNumeros = selectionJoueurInstance.getNumerosChoisis();
        // Récupère les étoiles choisies par le joueur depuis l'instance de SelectionJoueur
        const joueurEtoiles = selectionJoueurInstance.getEtoilesChoisies();

        // Affiche la sélection du joueur dans la section des résultats
        afficherSelectionJoueur(joueurNumeros, joueurEtoiles);

        // Vérifie si le joueur a sélectionné 5 numéros et 2 étoiles valides (non nuls)
        if (joueurNumeros.filter(n => n !== null).length === 5 && joueurEtoiles.filter(e => e !== null).length === 2) {
            // Effectue le tirage aléatoire
            const resultatTirage = tirage.effectuerTirage();
            // Affiche les numéros et étoiles tirés dans la section des résultats
            affichageResultat.afficherTirage(resultatTirage);
            // Affiche la comparaison entre la sélection du joueur et le résultat du tirage
            affichageResultat.afficherComparaison(
                joueurNumeros,
                joueurEtoiles,
                resultatTirage
            );
            // Affiche la section des résultats en supprimant la classe 'hidden'
            document.getElementById("resultats").classList.remove("hidden");
        } else {
            // Si la sélection n'est pas valide, affiche une alerte
            alert("Veuillez sélectionner 5 numéros et 2 étoiles valides.");
            // Cache la section des résultats en ajoutant la classe 'hidden'
            document.getElementById("resultats").classList.add("hidden");
        }
    });
});