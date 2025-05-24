// Vous mettrez ici le code de la classe Femelle
import Fourmi from './Fourmi.js';

class Femelle extends Fourmi {
    constructor(age, taille) {
        super(age, taille);
    }

    chercherNourriture() {
        console.log("La femelle cherche de la nourriture.");
    }
}

export default Femelle;