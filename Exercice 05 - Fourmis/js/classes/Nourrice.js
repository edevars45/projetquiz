class Nourrice extends Ouvriere {
    constructor(age, taille, poste, listeLarves) {
        super(age, taille, poste);
        this.listeLarves = listeLarves;
    }

    nourrir(larve) {
        console.log("Méthode nourrir() de Nourrice");
    }
}