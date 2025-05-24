/**
 * Ce script reprend le code de la V1 mais organisé en fonction afin de facilité la maintenabilité
 * tout rendant chaque partie réutilisable.
 * Si vous souhaitez tester ce script, n'oubliez pas de modifier le lien dans le fichier HTML.
 */
console.log("ScriptV2");

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
    sentence = prepareString(sentence);

    if( sentence === "" || sentence !== reverseString(sentence)) {
        return false;
    }

    return true;
}

/**
 * Remplace les caractères accentuées par leur forme non accentuée
 * @param {string} str - Chaine de caractères à laquelle retirée les accents
 * @returns {string} - Chaine de caractères sans les accents
 */
function removeAccents(str) {

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

    str = str.split(""); // Convertit la chaine en tableau. Une chaine de caractères est immuable en JS, en la convertissant en tableau on peut modifier un caractère à la fois

    for( let i = 0; i < str.length; i++) { // Parcours tous les caractères de la chaine

        let index = accentsList.indexOf(str[i]); // Si un accent est présent, récupère sa position dans la liste sinon -1

        if( index !== -1 ) { // Si différent de -1, alors c'est un accent
            str[i] = noAccentsList[index]; // Remplace le caractère accentué par son équivalent non accentué
        }
    }

    str = str.join(""); // Reconvertit le tableau en chaine

    return str; // Retourne la chaine sans accent
}

/**
 * Retire tous les caractères de ponctuation et espaces puis convertit la chaine en minuscule.
 * @param {string} str - la chaine de caractère à traiter
 * @returns - La chaine de caractères traitée
 */
function removePunctuation(str) {

    const punctuationChars = ['\'', '"', ',', ';', ':', '.', '!', '?', '-', '(', ')', '`', '–', ' ']; // Contient les caractères de ponctuation

    let i = 0;

    while(i < str.length) { // Parcours tous les caractères de la chaine
        let index = punctuationChars.indexOf(str[i]); // Si un caractère de ponctuation est présent, récupère sa position dans la liste sinon -1

        if( index !== -1 ) { // Si différent de -1, alors c'est un caractère de ponctuation
            str = str.slice(0, i) + str.slice(i+1); // Récupère toute la partie avant le caractère de ponctuation et toute la partie après la caractère de ponctuation
        }
        else {
            i++; // On passe au caractère suivant que lorsque le caractère courant n'est pas un caractère de ponctuation. 
                 // En effet si le caractère courant est un caractère de ponctuation, on le retire de la chaine, 
                 // ce qui fait que la chaine est plus courte. La compteur "i" correspond donc au prochain caractère.
        }
    }

    str = str.toLowerCase(); // Convertit la chaine en minuscules

    return str;
}

/**
 * Remplace les caractères accentuées par leur forme non accentuée et retire tous les caractères de ponctuation
 * @param {string} str - Chaine de caractères à préparer
 * @returns - Chaine de caractères sans caractères spéciaux, sans accents et tout en minuscule
 */
function prepareString(str) {
    str = removeAccents(str); // Retire les accents de la chaine
    str = removePunctuation(str); // Retire la ponctuation de la chaine
    return str; // Retourne la chaine préparée
}

/**
 * Inverse une chaine de caractères
 * @param {string} str - La chaine de caractères à inverser
 * @returns {string} - La chaine de caractères inversée
 */
function reverseString(str) {

    let reversed = ""; // Chaine qui contiendra les caractères de str en ordre inverse
    
    for(let i = str.length - 1; i >= 0; i--) { // Parcours la chaine str en partant de la fin
        reversed += str[i]; // Ajoute le caractère courant à la chaie inversée
    }

    return reversed; // Retourne la chaine inversée
}


// Tests
console.log("\"J'ai mangé une pomme\"", "false", isPalindrome("J'ai Mangé"));
console.log("\"kayak\"", "true", isPalindrome("kayak"));
console.log("\"La mariée ira mal\"", "true", isPalindrome("La mariée ira mal"));
console.log("\"Engage le jeu que je le gagne\"", "true", isPalindrome("Engage le jeu que je le gagne"));
console.log("\"J'ai ia'j\"", "true", isPalindrome("J'ai ia'j"));
console.log("\"\"", "false", isPalindrome(""));
