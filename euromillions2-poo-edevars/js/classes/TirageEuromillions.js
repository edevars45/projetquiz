import GenerateurAleatoire from './GenerateurAleatoire.js';
import ResultatEuromillions from './ResultatEuromillions.js';

class TirageEuromillions {
    constructor() {
        this.generateur = new GenerateurAleatoire();
        this.minNumero = 1;
        this.maxNumero = 50;
        this.countNumero = 5;
        this.minEtoile = 1;
        this.maxEtoile = 12;
        this.countEtoile = 2;
    }

    effectuerTirage() {
        const numeros = this.generateur.genererNombresUniques(this.minNumero, this.maxNumero, this.countNumero);
        const etoiles = this.generateur.genererNombresUniques(this.minEtoile, this.maxEtoile, this.countEtoile);
        return new ResultatEuromillions(numeros, etoiles);
    }
}
export default TirageEuromillions; 