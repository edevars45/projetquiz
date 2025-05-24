
class AffichageResultat {
    afficherResultats(tirage, resultat, numerosTirageElement, etoilesTirageElement, numerosCorrectsElement, etoilesCorrectsElement, resultatsDiv) {
        numerosTirageElement.innerHTML = tirage.numeros.map(numero => `<span class="resultat-boule resultat-numero">${numero}</span>`).join(' ');
        etoilesTirageElement.innerHTML = tirage.etoiles.map(etoile => `<span class="resultat-boule resultat-etoile">${etoile}</span>`).join(' ');
        numerosCorrectsElement.textContent = resultat.numerosCorrects;
        etoilesCorrectsElement.textContent = resultat.etoilesCorrectes;
        resultatsDiv.classList.remove('hidden');
    }
}