console.log("ScripV1");

const addButton = document.querySelector(".controls__add"); // Référence sur le bouton permettant d'ajouter un champs de saisie
const formSubmit = document.querySelector(".controls__submit"); // Référence sur le bouton de validation
let nbInputFields = document.querySelectorAll(".words__field").length; // Compteur du nombre de champs de saisie initialisé en fonction du nombres de champs déjà présents


addButton.addEventListener("click", addInput); // Ajoute un évènement "click" sur le bouton d'ajout d'un champs de saisie pour exécuter la fonction addInput au moment du clic
formSubmit.addEventListener("click", showResult); // Ajoute l'event listener sur le bouton de validation

document.querySelectorAll(".words__input")[0].focus(); // Donne le focus au premier champ de saisie

/**
 * Ajoute un champ de saisie pour saisir une valeur supplémentaire
 */
function addInput() {
    const wordsDiv = document.querySelector(".words"); // Référence sur la div contentant l'ensemble des champs de saisie

    let newWordsField = document.createElement("div"); // Créé une nouvelle div qui accueillera un label et un input
    let newLabel = document.createElement("label"); // Créé un nouveau label
    let newInputField = document.createElement("input"); // Créé nouvel un input

    nbInputFields++; // Incrémente le compteur du nombre de champs de saisie

    newWordsField.classList.add("words__field"); // Ajoute à la nouvelle div la classe "words_fields"
    wordsDiv.appendChild(newWordsField) // Ajoute la nouvelle div en enfant à la div contentant l'ensemble des champs de saisie

    newLabel.setAttribute("for", "word-" + nbInputFields); // Ajoute au nouveau label l'attribut "for" et lui donne comme valeur "word-[sa position]"
    newLabel.textContent = "Mot " + nbInputFields + " : "; // Ajoute au nouveau label le contenu textuel "Note [sa position] : "
    newWordsField.appendChild(newLabel); // Ajoute le nouveau label en enfant à la nouvelle div

    newInputField.classList.add("words__input"); // Ajoute au nouvel input la classe "word__input"
    newInputField.setAttribute("type", "text"); // Ajoute au nouvel input l'attribut "type" et lui donne comme valeur "number"
    newInputField.setAttribute("id", "word-" + nbInputFields); // Ajoute au nouvel input l'attribut "id" et lui donne comme valeur "word-[sa position]"
    newInputField.setAttribute("name", "word-" + nbInputFields); // Ajoute au nouvel input l'attribut "name" et lui donne comme valeur "word-[sa position]"
    newWordsField.appendChild(newInputField); // Ajoute le nouvel input en enfant à la nouvelle div
    newInputField.focus(); // Donne le focus au nouvel input
}

/**
 * Récupère les valeurs des champs de saisie (éléments de classe "words__input")
 * @returns {Array} - Valeurs des champs de saisies
 */
function getValues() {
    const elements = document.querySelectorAll(".words__input"); // Référence sur l'ensemble des champs de saisies

    let values = []; // Variables qui est un tableau servant à stocker les valeurs des champs de saisies

    for(let i = 0; i < elements.length; i++) { // Parcours tous les champs de saisie
        values.push(elements[i].value); // Ajoute la valeur du champs de saisie dans le tableau
    }

    return values; // Retourne le tableau
}

/**
 * Affiche le résulat dans la zone prévue à cet effet
 */
function showResult() {
    const words = getValues(); // Récupère les valeurs des champs de saisie (éléments de classe "words__input")
    const resultAnagram = document.querySelector(".result__anagrams"); // Référence sur l'éléemnt HTML qui contiendra la phrase indiquant le résultat

    if( isAnagrams(words) ) {
        resultAnagram.textContent = "Ce sont des anagrammes.";
    }
    else {
        resultAnagram.textContent = "Ce ne sont pas des anagrammes";
    }

}

/**
 * Vérifie si un ensemble de mots sont tous des anagrammes entre eux
 * @param {Array} words - Tableau contenant les chaines de caractères
 * @returns {boolean} - True si les chaines de caractères du tableau sont tous des angrammes entre eux et false dans la cas contraire
 */
function isAnagrams(words) {

    if( Array.isArray(words) === false ) { // Si on ne passe pas un tableau en paramètre
        return false; // on retourne false
    }

    words[0] = prepareString(words[0]); // / Retire les accents, ponctuation et converti en minuscule la première chaine
    let nbCharsRef = words[0].length; // Prends le nombre de caractère de la première chaine comme référence
    let charMapRef = getCharMap(words[0]); // Prends le nombre de chaque cactère dans la première chaine comme référence

    for(let i = 1; i < words.length; i++ ) { // Parcours toutes les chaines de caractères du tableau à partir de la deuxième
        words[i] = prepareString(words[i]); // Retire les accents, ponctuation et converti en minuscule

        if (words[i].length !== nbCharsRef) { // Si une chaine n'a pas la même le même nombre de caractère de référence
            return false; // Alors ce ne sont pas des anagrammes et retourne false
        }

        if(compareCharMap(charMapRef, getCharMap(words[i])) === false) { // Si il n'y a pas le même nombre d'occurence pour chaque caractère entre la référence et le mot courant
            return false; // Ce n'est donc pas un anagramme
        }
    }

    return true; // Les mots sont donc des anagrammes
}

/**
 * Créer un tableau indiquant le nombre d'occurences de chaque caractère dans une chaine de caractères donnée.
 * Exemple : pour la chaine "bonjour", retourne le tableau asociatif [ "b" : 1, "o" : 2, "n" : 1, "j" : 1, "u" : 1, "r" : 1]
 * @param {string} str - Une chaine de caractères pour laquelle les occurences de chaque caractère sont comptés
 * @returns {Array} - Un tableau associatif contenant le nombre d'occurences de chaque caractère de la chaine
 */
function getCharMap(str) {

    let charMap = []; // Contient un tableau associatif 

    for(let i = 0; i < str.length; i++) { // Parcours tous les caractères de la chaine str

        if(charMap[str[i]] === undefined) { // Si un élément ayant pour nom le caractère en cours n'est pas encore défini dans le tableau (c'est le premier caractère de ce genre dans la chaine)
            charMap[str[i]] = 1; // alors on ajoute cet élément à notre tableau et l'initalise à 1
        }
        else { // S'il y a déjà un élément du tableau ayant pour nom le caractère en cours est déjà défini (ce n'est pas le premier caractère de ce grend dans la chaine)
            charMap[str[i]] = charMap[str[i]] + 1; // on ajoute à au compteur
        }

        //charMap[str[i]] = charMap[str[i]] + 1 || 1; // Ceci est une autre façon d'ajouter et remplace le if...else précédent
    }

    return charMap; // Retourne le tableau associatif
}

/**
 * Compare deux tableaux associatifs <caractère> => <occurences>
 * @param {Array} charMap1 - Premier tableau associatif
 * @param {Array} charMap2 - Deuxième tableau associatif
 * @returns {boolean} - Retourne vrai si pour chaque caractère
 */
function compareCharMap(charMap1, charMap2) {

    for(let letter in charMap1) { // Pour element lettre contenu dans le tableau associatif
        if(charMap1[letter] !== charMap2[letter]) { // Si le nombre de correspodnant à l'élement (pour l'exercice ici une lettre) n'est pas identique dans les 2 tableaux
            return false; // Alors c'est qu'il n'y a pas la même valeur pour un élement donnée (pour l'exercice ici le nombre doo'ccurence pour une lettre) et on retourne false
        }
    }

    return true; // Si la boucle est terminée sans avoir quitter, c'est que les 2 tableaux associatifs sont identiques.
}

/**
 * Remplace les caractères accentuées par leur forme non accentuée
 * @param {string} str - Chaine de caractères à laquelle retirée les accents
 * @returns {string} - Chaine de caractères sans les accents
 */
function removeAccents(str) {
    // return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return str.normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

/**
 * Retire tous les caractères de ponctuation et espaces puis convertit la chaine en minuscule.
 * @param {string} str - la chaine de caractère à traiter
 * @returns - La chaine de caractères traitée
 */
function removePunctuation(str) {
    return str.replace(/[\s'!.?;"():`,–-]/g, "").toLowerCase();
}

/**
 * Remplace les caractères accentuées par leur forme non accentuée et retire tous ce qui n'est pas un caractère alphabétique
 * @param {string} str - Chaine de caractères à préparer
 * @returns - Chaine de caractères sans caractères spéciaux, sans accents et tout en minuscule
 */
function prepareString(str) {
    return removePunctuation(removeAccents(str));
}

//Tests
console.log('["rats", "star", "tsar"]', 'true', isAnagrams(["rats", "star", "tsar"]));
console.log('["rats", "star", "toto"]', 'false', isAnagrams(["rats", "star", "toto"]));
console.log('["anagramme", "gare maman"]', 'true', isAnagrams(["anagramme", "gare maman"]));