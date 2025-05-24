class Larve extends Fourmi {
    constructor(age, taille, type) {
        super(age, taille);
        this.type = type;
    }

    metamorphose() {
        console.log("Méthode metamorphose() de Larve");
    }
}