
class SelectionJoueur {
    constructor(nombreNumeros = 5, nombreEtoiles = 2) {
        this.nombreNumeros = nombreNumeros;
        this.nombreEtoiles = nombreEtoiles;
        this.champsNumerosContainer = document.getElementById('champs-numeros');
        this.champsEtoilesContainer = document.getElementById('champs-etoiles');
        this.genererChamps();
    }

    genererChamps() {
        for (let i = 0; i < this.nombreNumeros; i++) {
            const champNumero = document.createElement('div');
            champNumero.classList.add('champ-numero');
            champNumero.innerHTML = `<label for="numero-${i + 1}">N° ${i + 1}</label><input type="number" id="numero-${i + 1}" min="1" max="50" class="numero-joueur">`;
            this.champsNumerosContainer.appendChild(champNumero);
        }

        for (let i = 0; i < this.nombreEtoiles; i++) {
            const champEtoile = document.createElement('div');
            champEtoile.classList.add('champ-etoile');
            champEtoile.innerHTML = `<label for="etoile-${i + 1}">Étoile ${i + 1}</label><input type="number" id="etoile-${i + 1}" min="1" max="12" class="etoile-joueur">`;
            this.champsEtoilesContainer.appendChild(champEtoile);
        }
    }

    getNumerosChoisis() {
        return Array.from(this.champsNumerosContainer.querySelectorAll('input'))
            .map(input => parseInt(input.value, 10))
            .filter(value => !isNaN(value) && value >= 1 && value <= 50)
            .sort((a, b) => a - b)
            .slice(0, this.nombreNumeros);
    }

    getEtoilesChoisies() {
        return Array.from(this.champsEtoilesContainer.querySelectorAll('input'))
            .map(input => parseInt(input.value, 10))
            .filter(value => !isNaN(value) && value >= 1 && value <= 12)
            .sort((a, b) => a - b)
            .slice(0, this.nombreEtoiles);
    }
}
export default SelectionJoueur;