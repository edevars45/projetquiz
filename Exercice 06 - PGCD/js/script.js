const formSubmit = document.querySelector(".form__submit"); // Référence sur le bouton de validation

formSubmit.addEventListener("click", showResult); // Ajoute l'event listener sur le bouton de validation

/**
 * Affiche le résulat dans la zone prévue à cet effet
 */
function showResult() {
    
    const number1 = document.querySelector("#form-number-1").valueAsNumber;
    const number2 = document.querySelector("#form-number-2").valueAsNumber;
    const resultPGCD = document.querySelector(".result__pgcd");

    let result = pgcd(number1, number2);

    resultPGCD.textContent = (result === false) ? "Veillez saisir seulement des nombres !" : "Le PGCD est de : " + result;

}

/**
 * Calcul le PGCD de deux nombres
 * @param {number} x - Premier nombre
 * @param {number} y - Deuxième nombre
 * @returns {number|boolean} - La PGCD des deux nombres ou false si x ou y ne sont pas des nombres
 */
function pgcd(x, y) {

    // Si x ou y ne sont pas des nombres
    if(Number.isNaN(x) || Number.isNaN(y)) {
        return false;
    }

    let r; // variable qui recevra le reste des divisions euclidiennes

    // On traite les cas ou x et/ou y valent 0 pour éviter une division par 0 ce qui ferait planter l'algo
    if( x === 0 && y === 0 ) { // Si un des deux nombres est 0
        return 0; // Le PGCD est 0
    }

    if( y === 0 ) { // Si y égale 0
        return Math.abs(x); // alors x est le PGCD
    }

    if( x === 0 ) { // Si x égale 0
        return Math.abs(y); // alors y est le PGCD
    }

    do {
        r = x % y; // on calcule le reste de la division euclidienne x/y
        x = y; // on remplace x par y
        y = r; // on remplace y par r
    } while( r != 0 ); // on recommence tant que le reste est diddérent de 0

    return Math.abs(x); // Retourne x qui vaut le PGCD. Le choix de retourner la valeur absolue est pour éviter d'avoir une valeur négative, ce qui ne change rien au calcul d'un PGCD.

}

// Tests
console.log("150, 140", "10", pgcd(150, 140));
console.log("32, 24", "8", pgcd(32, 24));
console.log("-32, 24", "8", pgcd(-32, 24));
console.log("1, 7", "1", pgcd(1, 7));
console.log("0, 36", "36", pgcd(0, 36));
console.log("73, 0", "73", pgcd(73, 0));
console.log("0, 0", "0", pgcd(0, 0));
