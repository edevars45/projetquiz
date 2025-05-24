// Vous mettrez ici le code de la classe Reine
import Fourmi from './Fourmi.js';

class Reine extends Fourmi {
    #nbOeufsPondus;

    constructor(age, taille, nbOeufsPondus) {
        super(age, taille);
        this.#nbOeufsPondus = nbOeufsPondus;
    }

    get nbOeufsPondus() {
        return this.#nbOeufsPondus;
    }

    set nbOeufsPondus(nouveauNb) {
        this.#nbOeufsPondus = nouveauNb;
    }

    pondre() {
        console.log("La reine pond un œuf.");
        this.#nbOeufsPondus++;
    }
}

export default Reine;