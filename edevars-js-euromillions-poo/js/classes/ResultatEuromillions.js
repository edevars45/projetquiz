export default class ResultatEuromillions {
    comparerTirage(tirage, choixJoueur) {
        const numerosCorrects = tirage.numeros.filter(numero => choixJoueur.numeros.includes(numero)).length;
        const etoilesCorrectes = tirage.etoiles.filter(etoile => choixJoueur.etoiles.includes(etoile)).length;
        return { numerosCorrects, etoilesCorrectes };
    }
}