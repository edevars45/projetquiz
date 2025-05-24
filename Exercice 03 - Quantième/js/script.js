const formSubmit = document.querySelector(".form__submit");

formSubmit.addEventListener("click", showResult);


/**
 * Affiche le résulat dans la zone prévue à cet effet
 */
function showResult() {
    const day = document.querySelector(".form__day").value;
    const month = document.querySelector(".form__month").value;
    const year = document.querySelector(".form__year").value;
    const resultNumberDay = document.querySelector(".result__number-day");

    let result = getNumberDay(Number(day), month, Number(year));

    if( day === "" || month === "" || year === "" || result === -1) {
        resultNumberDay.textContent = "Veillez saisir une date correcte !";
    }
    else {
        resultNumberDay.textContent = "Le quantième du " + day + " " + month + " " + year + " est : " + result;
    }
}

/**
 * Calcul le quntième d'un jour pour une date donnée
 * @param {number} day - Le numéro du jour compris entre 0 et 31
 * @param {string} month - Le mois (Janvier, Février, Mars, Avril, Mai, Juin, Juillet, Aout, Septembre, Octobre, Novembre ou Décembre)
 * @param {number} year - Une année >= 0
 * @returns {number} - Le quantième ou -1 si la date , n'est pas correcte
 */
function getNumberDay(day, month, year) {
    const daysMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const namesMonth = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];

    let numberDay = -1;

    if(checkDate(day, month, year)) {

        if( isLeapYearV2(year) ) {
            daysMonth[1] = 29;
        }

        numberDay = 0;

        for(let i = 0; namesMonth[i] !== month; i++) {
            numberDay += daysMonth[i];
        }

        numberDay += day;
    }

    return numberDay;
}

/**
 * Détermine si une date est correcte
 * @param {number} day - Le numéro du jour compris entre 0 et 31
 * @param {string} month - Le mois (Janvier, Février, Mars, Avril, Mai, Juin, Juillet, Aout, Septembre, Octobre, Novembre ou Décembre)
 * @param {number} year - Une année >= 0
 * @returns {boolean} - True si la date est correcte et false dans le cac contraire
 */
function checkDate(day, month, year) {

    const daysMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const namesMonth = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];

    let numberMonth = namesMonth.indexOf(month);

    if( isLeapYearV2(year) ) {
        daysMonth[1] = 29;
    }

    return numberMonth !== -1 && year >= 0 && day > 0 && day <= daysMonth[numberMonth] && !(year === 1582 && numberMonth === 9 && day >= 5 && day <=14)

}

/**
 * Détermine si une année est bissxtile ou pas (version 2)
 * @param {number} year - Une année
 * @returns {(boolean|number)} - True si l'année est bissextile dans le cas contraire false et -1 si ce n'est pas une année passée en paramètre. 
 */
function isLeapYearV2(year) {

    if( isNaN(year) || Number.isInteger(year) === false ) {
        return -1;
    }

    return (year >= 0) && ( (year <= 1582 && year % 4 === 0) || ( (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ) );

}


// Tests
console.log("1 Janvier -204", "-1", getNumberDay(1, "Janvier", -204));
console.log("-8 Janvier 0", "-1", getNumberDay(-8, "Janvier", 0));
console.log("0 Janvier 0", "-1", getNumberDay(0, "Janvier", 0));
console.log("1 Janvier 0", "1", getNumberDay(1, "Janvier", 0));
console.log("29 Février 0", "60", getNumberDay(29, "Février", 0));
console.log("31 Décembre 1", "365", getNumberDay(31, "Décembre", 1));
console.log("29 Février 100", "60", getNumberDay(29, "Février", 100));
console.log("29 Février 400", "60", getNumberDay(29, "Février", 400));
console.log("30 Février 400", "-1", getNumberDay(30, "Février", 400));
console.log("31 Décembre 400", "366", getNumberDay(31, "Décembre", 400));
console.log("4 Septembre 1582", "247", getNumberDay(4, "Septembre", 1582));
console.log("4 Octobre 1582", "277", getNumberDay(4, "Octobre", 1582));
console.log("5 Octobre 1582", "-1", getNumberDay(5, "Octobre", 1582));
console.log("10 Octobre 1582", "-1", getNumberDay(10, "Octobre", 1582));
console.log("14 Octobre 1582", "-1", getNumberDay(14, "Octobre", 1582));
console.log("15 Octobre 1582", "288", getNumberDay(15, "Octobre", 1582));
console.log("30 Novembre 1582", "334", getNumberDay(30, "Novembre", 1582));
console.log("11 Mars 1596", "71", getNumberDay(11, "Mars", 1596));
console.log("29 Février 1900", "-1", getNumberDay(29, "Février", 1900));
console.log("29 Février 2000", "60", getNumberDay(29, "Février", 2000));
console.log("4 Avril 2001", "94", getNumberDay(4, "Avril", 2001));
console.log("15 Mai 2011", "135", getNumberDay(15, "Mai", 2011));
console.log("23 Juin 2016", "175", getNumberDay(23, "Juin", 2016));
console.log("31 Juillet 2018", "212", getNumberDay(31, "Juillet", 2018));
console.log("15 Aout 2020", "228", getNumberDay(15, "Aout", 2020));
console.log("31 Septembre 2020", "-1", getNumberDay(31, "Septembre", 2020));
console.log("31 Octobre 2032", "305", getNumberDay(31, "Octobre", 2032));
console.log("32 Mars 2021", "-1", getNumberDay(32, "Mars", 2021));
console.log("1 Septmbre 2021", "-1", getNumberDay(1, "Septmbre", 2021));
