class Princesse extends Femelle {
    constructor(age, taille) {
        super(age, taille);
    }

    voler() {
        console.log("Méthode voler() de Princesse");
    }

    volNuptiale(partenaire) {
        console.log("Méthode volNuptiale() de Princesse");
    }
}