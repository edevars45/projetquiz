class Ouvriere extends Femelle {
    constructor(age, taille, poste) {
        super(age, taille);
        this.poste = poste;
    }

    creuserGalerie() {
        console.log("Méthode creuserGalerie() de Ouvriere");
    }

    nettoyerGalerie() {
        console.log("Méthode nettoyerGalerie() de Ouvriere");
    }

    chercherNourriture() {
        console.log("Méthode chercherNourriture() de Ouvriere");
    }
}
