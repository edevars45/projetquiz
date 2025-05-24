// Vous mettrez ici le code de la classe Princesse
import Femelle from './Femelle.js';

class Princesse extends Femelle {
    #partenaireMale;

    constructor(age, taille, partenaireMale = null) {
        super(age, taille);
        this.#partenaireMale = partenaireMale;
    }

    get partenaireMale() {
        return this.#partenaireMale;
    }

    set partenaireMale(nouveauPartenaire) {
        this.#partenaireMale = nouveauPartenaire;
    }

    voler() {
        console.log("La princesse s'envole pour l'essaimage.");
    }

    volNuptial(male) {
        console.log("La princesse effectue son vol nuptial avec le mâle.");
        this.#partenaireMale = male;
    }
}

export default Princesse;