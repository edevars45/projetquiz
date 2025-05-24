// Vous mettrez ici le code de la classe Nourrice
import Ouvriere from './Ouvriere.js';
import Larve from './Larve.js'; // Import Larve as Nourrice interacts with it

class Nourrice extends Ouvriere {
    #listeLarves = [];

    constructor(age, taille, poste = "Nourrice") {
        super(age, taille, poste);
    }

    get listeLarves() {
        return [...this.#listeLarves];
    }

    nourrirLarve(larve) {
        if (larve instanceof Larve) {
            console.log("La nourrice nourrit la larve.");
            this.#listeLarves.push(larve);
        } else {
            console.log("Erreur: Seules les larves peuvent être nourries.");
        }
    }
}

export default Nourrice;