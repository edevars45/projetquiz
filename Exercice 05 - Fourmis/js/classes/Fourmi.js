class Fourmi {
    constructor(age, taille) {
        this.age = age;
        this.taille = taille;
    }

    dormir() {
        console.log("Méthode dormir() de Fourmi");
    }

    manger(nourriture) {
        console.log("Méthode manger() de Fourmi");
        console.log("nourriture = " + nourriture);
    }
}