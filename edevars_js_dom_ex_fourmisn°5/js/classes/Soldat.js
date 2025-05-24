// Vous mettrez ici le code de la classe Soldat
import Femelle from './Femelle.js';

class Soldat extends Femelle {
    #endurance;

    constructor(age, taille, endurance) {
        super(age, taille);
        this.#endurance = endurance;
    }

    get endurance() {
        return this.#endurance;
    }

    set endurance(nouvelleEndurance) {
        this.#endurance = nouvelleEndurance;
    }

    attaquer() {
        console.log("Le soldat attaque!");
    }
}

export default Soldat;