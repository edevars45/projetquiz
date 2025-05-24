class Reine extends Fourmi {
    constructor(age, taille){
        super(age, taille);
        this.nbOeufsPondus = 0;
    }
    pondre() {
        console.log("Méthode pondre() de Reine");
        this.nbOeufsPondus++;
    }
}