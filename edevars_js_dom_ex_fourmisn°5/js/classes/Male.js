// Vous mettrez ici le code de la classe Male
import Fourmi from './Fourmi.js';

class Male extends Fourmi {
    constructor(age, taille) {
        super(age, taille);
    }

    feconderReine(reine) {
        console.log("Le mâle féconde la reine.");
    }

    voler() {
        console.log("Le mâle s'envole.");
    }
}

export default Male;