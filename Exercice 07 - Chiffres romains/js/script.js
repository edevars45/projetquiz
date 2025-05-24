// Vous trouverez dans ce fichier 2 implémentation différentes de la fonction toRoman()

const formSubmit = document.querySelector(".form__submit"); // Référence sur le bouton de validation

formSubmit.addEventListener("click", showResult); // Ajoute l'event listener sur le bouton de validation

/**
 * Affiche le résulat dans la zone prévue à cet effet
 */
function showResult() {

    const number = document.querySelector("#form-number-1").valueAsNumber;
    const resultRoman = document.querySelector(".result__roman-numbers");

    let result = toRomanV2(number);

    resultRoman.textContent = (result === false) ? "Veuillez saisir un nombre !" : number + " en chiffres romains donne : " + result;
    
}

/**
 * Convertit un nombre décimal, compris entre 1 et 4999, en nombre romain
 * @param {number} num - Nombre décimal à convertir en nombre romain
 * @returns {string|boolean} - Le nombre en chiffres romain dans une chaine de caractères. La chaine est vide si le nombre n'est pas entre 1 et 4999. Retourne false si num n'est pas un nombre
 */
function toRoman(num) {

    // Vérifie si num est un nombre
    if(Number.isNaN(num)) {
        return false;
    }

    const romanNumbers   = ["M",  "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]; // Symboles des chiffres romains
    const decimalNumbers = [ 1000, 900, 500, 400,  100,  90,  50,   40,  10,   9,    5,   4,    1]; // Symboles des chiffres décimaux correspondant au chiffres romaoin

    let roman = ""; // contient la conversion en chiffre romain
    let index = 0; // indice pour le parcours des tableau
    let remainder = num; // variable qui permet de déterminer si on a fini la conversion. Elle initialisé avec le nombre que l'on veut convertir

    if( num <= 0 || num >= 5000 ) { // Si le nombre n'est pas compris entre 1 et 4999 inclus
        return ""; // retourne une chaine vide
    }

    while( remainder !== 0 ) { // tant que le reste est différent de 0
        if( remainder >= decimalNumbers[index] ) { // le reste est supérieur ou egale à la valeur courante
            roman += romanNumbers[index]; // on ajoute le symbole courant
            remainder -= decimalNumbers[index]; // on déduit la valeur courante
        }
        else { // le reste est inférieur à la valeur courante
            index++; // on passe au couple chifres romains/chiffres décimaux suivant
        }
    }

    return roman; // Retourne la chaine contenant le nombre romain
}

/**
 * Convertit un nombre décimal, compris entre 1 et 4999, en nombre romain
 * @param {number} num - Nombre décimal à convertir en nombre romain
 * @returns {string|boolean} - Le nombre en chiffres romain dans une chaine de caractères. La chaine est vide si le nombre n'est pas entre 1 et 4999. Retourne false si num n'est pas un nombre
 */
function toRomanV2(num) {

     // Vérifie si num est un nombre
    if(Number.isNaN(num)) {
        return false;
    }

    const roman = { // Tableau associatif (en JavaScript, c'est un objet)
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let str = ""; // Contient la chaine de caractères du nombre romain

    for (let key in roman) { // Parcours toutes les clefs du tableau (les clefs sont les caractères romains)
        let q = Math.floor(num / roman[key]); // Détermine le nombre de fois que le caractère actuel doit être écrit dans la chaine de caractère
        str += key.repeat(q); // Ajoute le caractère actuel le nombre de fois calculé la ligne au dessus
        num -= q * roman[key]; // Mets à jour "num" afin qu'il soit égale à la valeur qu'il reste à convertir
    }

    return str; // Retourne le nombre romain
}


// Tests
console.log("2021", "MMXXI", toRoman(2021));
console.log("1999", "MCMXCIX", toRoman(1999));
console.log("555", "DLV", toRoman(555));
console.log("1244", "MCCXLIV", toRoman(1244));
console/log("3411", "MMMCDXI", toRoman(3411));
