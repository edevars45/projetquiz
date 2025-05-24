class Eclaireuse extends Femelle {
    constructor(age, taille, rayon) {
        super(age, taille);
        this.rayonAction = rayon;
    }

    explorer() {
        console.log("Méthode explorer() de Eclaireuse");
    }
}