class AffichageResultat {
    constructor(tirageNumerosId, tirageEtoilesId) {
        this.tirageNumerosElement = document.getElementById(tirageNumerosId);
        this.tirageEtoilesElement = document.getElementById(tirageEtoilesId);
    }

    afficherTirage(resultat) {
        this.tirageNumerosElement.innerHTML = resultat.getNumeros().map(numero => `<span class="resultat-boule resultat-numero">${numero}</span>`).join('');
        this.tirageEtoilesElement.innerHTML = resultat.getEtoiles().map(etoile => `<span class="resultat-boule resultat-etoile">${etoile}</span>`).join('');
    }

    afficherComparaison(joueurNumeros, joueurEtoiles, resultat) {
        const numerosTirage = resultat.getNumeros();
        const etoilesTirage = resultat.getEtoiles();

        const numerosCorrects = joueurNumeros.filter(numero => numerosTirage.includes(numero));
        const etoilesCorrectes = joueurEtoiles.filter(etoile => etoilesTirage.includes(etoile));

        document.getElementById('numeros-corrects').textContent = numerosCorrects.length;
        document.getElementById('etoiles-corrects').textContent = etoilesCorrectes.length;

        document.getElementById('resultats').classList.remove('hidden');
    }
}

export default AffichageResultat;