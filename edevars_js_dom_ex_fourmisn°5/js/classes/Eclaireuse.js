// Vous mettrez ici le code de la classe Eclaireuse
import Femelle from './Femelle.js';

class Eclaireuse extends Femelle {
    #rayonAction;

    constructor(age, taille, rayonAction) {
        super(age, taille);
        this.#rayonAction = rayonAction;
    }

    get rayonAction() {
        return this.#rayonAction;
    }

    set rayonAction(nouveauRayon) {
        this.#rayonAction = nouveauRayon;
    }

    explorer() {
        console.log(`L'éclaireuse explore un rayon de ${this.#rayonAction} unités.`);
    }
}

export default Eclaireuse;