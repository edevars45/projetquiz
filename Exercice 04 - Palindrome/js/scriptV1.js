/**
 * Dans ce script, toute la logique est comprise dans une seule fonction. 
 * Seules des fonctions qu'on à déjà vu sont utilisées. Il est bien entendu possible de s'y prendre différement.
 * Une deuxième version et troisième version sont disponibles.
 */
console.log("ScriptV1");

const formSubmit = document.querySelector(".form__submit"); // Référence sur le bouton de validation

formSubmit.addEventListener("click", showResult); // Ajoute l'event listener sur le bouton de validation

/**
 * Affiche le résulat dans la zone prévue à cet effet
 */
function showResult() {
    const sentence = document.querySelector(".form__sentence").value;
    const resultPalindrome = document.querySelector(".result__palindrome");

    if( isPalindrome(sentence) ) {
        resultPalindrome.textContent = "C'est un palindrome";
    }
    else {
        resultPalindrome.textContent = "Ce n'est pas un palindrome";
    }

}

/**
 * Vérifie si un mot ou une phrase est un palindrome. Les accents, la ponctuation et les espaces ne sont pas pris en compte.
 * @param {string} sentence - La phrase à tester
 * @returns {boolean} - True si la phrase est un palindrome et faux dans le cas contraire ou que la chaine ne contient pas de caractères alphabétiques
 */
function isPalindrome(sentence) {
    /*------------------------------------------+
    |  Déclaration des variables et constantes  |
    +------------------------------------------*/
    const accentsList = [ // Contient les caractères accentués (tous ne sont pas listés, se serait trop long ^^)
        'À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ',
        'à', 'á', 'â', 'ã', 'ä', 'å', 'æ',
        'Ç',
        'ç',
        'È', 'É', 'Ê', 'Ë',
        'è', 'é', 'ê', 'ë',
        'Ì', 'Í', 'Î', 'Ï',
        'ì', 'í', 'î', 'ï',
        'Ð',
        'ð',
        'Ñ',
        'ñ',
        'Ò', 'Ó', 'Ô', 'Õ', 'Ö',
        'ò', 'ó', 'ô', 'õ', 'ö',
        'Ù', 'Ú', 'Û', 'Ü',
        'ù', 'ú', 'û', 'ü',
        'Ý',
        'ý', 'ÿ'
    ];

    const noAccentsList = [ // Contient les équivalents non accentués des caractères accentué du tableau précédent
        'A', 'A', 'A', 'A', 'A', 'A', 'A',
        'a', 'a', 'a', 'a', 'a', 'a', 'a',
        'C',
        'c',
        'E', 'E', 'E', 'E',
        'e', 'e', 'e', 'e',
        'I', 'I', 'I', 'I',
        'i', 'i', 'i', 'i', 
        'D',
        'd',
        'N',
        'n',
        'O', 'O', 'O', 'O', 'O',
        'o', 'o', 'o', 'o', 'o',
        'U', 'U', 'U', 'U',
        'u', 'u', 'u', 'u',
        'Y',
        'y', 'y'
    ];

    const punctuationChars = ['\'', '"', ',', ';', ':', '.', '!', '?', '-', '(', ')', '`', '–', ' ']; // Contient les caractères de ponctuation

    let i = 0; // Utilisée pour les boucles
    let index = 0; // Utilisée pour positionné des caractères dans la chaine
    let reversed = ""; // Contiendra la chaine à l'inverse
    let palindrome = false; // Utilisée pour déterminer si la chaine est un palindrome ou non

    /*---------------------+
    |  Retire les accents  |
    +----------------------*/
    sentence = sentence.split(""); // Convertit la chaine en tableau. Une chaine de caractères est immuable en JS, en la convertissant en tableau on peut modifier un caractère à la fois

    for(i = 0; i < sentence.length; i++) { // Parcours tous les caractères de la chaine

        index = accentsList.indexOf(sentence[i]); // Si un accent est présent, récupère sa position dans la liste sinon -1

        if( index !== -1 ) { // Si différent de -1, alors c'est un accent
            sentence[i] = noAccentsList[index]; // Remplace le caractère accentué par son équivalent non accentué
        }
    }

    sentence = sentence.join(""); // Reconvertit le tableau en chaine


    /*------------------------+
    |  Retire la ponctuation  |
    +------------------------*/
    i = 0;
    while(i < sentence.length) { // Parcours tous les caractères de la chaine
        index = punctuationChars.indexOf(sentence[i]); // Si un caractère de ponctuation est présent, récupère sa position dans la liste sinon -1

        if( index !== -1 ) { // Si différent de -1, alors c'est un caractère de ponctuation
            sentence = sentence.slice(0, i) + sentence.slice(i+1); // Récupère toute la partie avant le caractère de ponctuation et toute la partie après la caractère de ponctuation
        }
        else {
            i++; // On passe au caractère suivant que lorsque le caractère courant n'est pas un caractère de ponctuation. 
                 // En effet si le caractère courant est un caractère de ponctuation, on le retire de la chaine, 
                 // ce qui fait que la chaine est plus courte. La compteur "i" correspond donc au prochain caractère.
        }
    }

    sentence = sentence.toLowerCase(); // Convertit la chaine en minuscules

    /*----------------------------+
    |  Créer une chaine inversée  |
    +----------------------------*/
    for(i = sentence.length - 1; i >= 0; i--) { // Parcours la chaine sentence en partant de la fin
        reversed += sentence[i]; // Ajoute le caractère courant à la chaie inversée
    }


    /*------------------------------+
    |  Test si c'est un palindrome  |
    +------------------------------*/
    if( sentence === "" || sentence !== reversed) { // Si la chaine est vide ou si ce n'est pas un palindrome
        return false; // Retourne false
    }

    return true; // Retourne true
}


// Tests
console.log("\"J'ai mangé une pomme\"", "false", isPalindrome("J'ai Mangé"));
console.log("\"kayak\"", "true", isPalindrome("kayak"));
console.log("\"La mariée ira mal\"", "true", isPalindrome("La mariée ira mal"));
console.log("\"Engage le jeu que je le gagne\"", "true", isPalindrome("Engage le jeu que je le gagne"));
console.log("\"J'ai ia'j\"", "true", isPalindrome("J'ai ia'j"));
console.log("\"\"", "false", isPalindrome(""));
