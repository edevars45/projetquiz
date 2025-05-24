/**
 * Ce script est organisé de la même manière que la V2 sauf que des fonctions avancées de JavaScript sont utilisées.
 * On remarquera que le code est beaucoup plus léger.
 * Si vous souhaitez tester ce script, n'oubliez pas de modifier le lien dans le fichier HTML.
 */
console.log("ScriptV3");

const formSubmit = document.querySelector(".form__submit");

formSubmit.addEventListener("click", showResult);

/**
 * Affiche le résulat dans la zone prévue à cet effet
 */
function showResult() {
    const sentence = document.querySelector(".form__sentence").value;
    const resultPalindrome = document.querySelector(".result__palindrome");

    resultPalindrome.textContent = isPalindrome(sentence) ? "C'est un palindrome" : "Ce n'est pas un palindrome";

}

/**
 * Vérifie si un mot ou une phrase est un palindrome. Les accents, la ponctuation et les espaces ne sont pas pris en compte.
 * @param {string} sentence - La phrase à tester
 * @returns {boolean} - True si la phrase est un palindrome et faux dans le cas contraire ou que la chaine ne contient pas de caractères alphabétiques
 */
function isPalindrome(sentence) {
    sentence = prepareString(sentence);
    return sentence !== "" && sentence === reverseString(sentence);
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

/**
 * Inverse une chaine de caractères
 * @param {string} str - La chaine de caractères à inverser
 * @returns {string} - La chaine de caractères inversée
 */
function reverseString(str) {
    return [...str].reverse().join("");
}


// Tests
console.log("\"J'ai mangé une pomme\"", "false", isPalindrome("J'ai Mangé"));
console.log("\"kayak\"", "true", isPalindrome("kayak"));
console.log("\"La mariée ira mal\"", "true", isPalindrome("La mariée ira mal"));
console.log("\"Engage le jeu que je le gagne\"", "true", isPalindrome("Engage le jeu que je le gagne"));
console.log("\"J'ai ia'j\"", "true", isPalindrome("J'ai ia'j"));
console.log("\"\"", "false", isPalindrome(""));
