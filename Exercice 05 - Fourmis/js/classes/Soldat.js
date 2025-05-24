class Soldat extends Femelle {
    constructor(age, taille, endurance) {
        super(age, taille);
        this.endurance = endurance;
    }

    attaquer() {
        console.log("Méthode attaquer() de Soldat");
    }
}