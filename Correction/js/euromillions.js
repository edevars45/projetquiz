window.addEventListener('load', () => {
const resultat = document.getElementById("resultat");
    Numero.numbersRandomGenerator(50, 5).concat(Numero.numbersRandomGenerator(12, 2)).forEach((uniqueNumber, index) => {
        const newNum = new Numero(uniqueNumber, (index < 5) ? "boule" : "etoile", resultat);
        setTimeout(() => {
            newNum.setVisible();
        }, 1000 * index + 1000)
    });
});

