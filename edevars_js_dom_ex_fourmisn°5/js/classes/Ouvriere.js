// Vous mettrez ici le code de la classe Ouvrière
import Femelle from './Femelle.js';

class Ouvriere extends Femelle {
    #poste;

    constructor(age, taille, poste) {
        super(age, taille);
        this.#poste = poste;
    }

    get poste() {
        return this.#poste;
    }

    set poste(nouveauPoste) {
        this.#poste = nouveauPoste;
    }

    creuserGalerie() {
        console.log("L'ouvrière creuse une galerie.");
    }

    nettoyerGalerie() {
        console.log("L'ouvrière nettoie la galerie.");
    }

    chercherNourriture() {
        console.log("L'ouvrière cherche de la nourriture.");
    }
}

export default Ouvriere;