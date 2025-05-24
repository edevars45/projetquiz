// Importe la classe GenerateurAleatoire depuis le fichier spécifié.
import GenerateurAleatoire from './js/classes/GenerateurAleatoire.js';



// Définit une classe nommée TirageEuromillions qui sera exportée par défaut.
export default class TirageEuromillions {
    // Définit le constructeur de la classe, appelé lors de la création d'une nouvelle instance.
    constructor() {
        this.generateur = new GenerateurAleatoire(); // Crée une nouvelle instance de la classe GenerateurAleatoire et l'assigne à la propriété generateur.
        this.nombreMaxNumeros = 50; // Définit le nombre maximum possible pour les numéros.
        this.nombreNumerosTirer = 5; // Définit le nombre de numéros à tirer.
        this.nombreMaxEtoiles = 12; // Définit le nombre maximum possible pour les étoiles.
        this.nombreEtoilesTirer = 2; // Définit le nombre d'étoiles à tirer.
        this.numerosTires = []; // Initialise un tableau vide pour stocker les numéros tirés.
        this.etoilesTirees = []; // Initialise un tableau vide pour stocker les étoiles tirées.
    }

    // Définit une méthode pour effectuer le tirage de l'Euromillions.
    effectuerTirage() {
        this.numerosTires = []; // Réinitialise le tableau des numéros tirés à chaque nouvel appel de la méthode.
        while (this.numerosTires.length < this.nombreNumerosTirer) {
            // Boucle tant que le nombre de numéros tirés est inférieur au nombre requis.
            this.numerosTires.push(this.generateur.genererNombreUnique(this.nombreMaxNumeros, this.numerosTires));
            // Génère un nombre unique en utilisant l'instance de GenerateurAleatoire et l'ajoute au tableau des numéros tirés.
        }
        this.etoilesTirees = []; // Réinitialise le tableau des étoiles tirées à chaque nouvel appel de la méthode.
        while (this.etoilesTirees.length < this.nombreEtoilesTirer) {
            // Boucle tant que le nombre d'étoiles tirées est inférieur au nombre requis.
            this.etoilesTirees.push(this.generateur.genererNombreUnique(this.nombreMaxEtoiles, this.etoilesTirees));
            // Génère une étoile unique en utilisant l'instance de GenerateurAleatoire et l'ajoute au tableau des étoiles tirées.
        }
        // Retourne un objet contenant les tableaux de numéros et d'étoiles tirés, triés par ordre croissant.
        return { numeros: this.numerosTires.sort((a, b) => a - b), etoiles: this.etoilesTirees.sort((a, b) => a - b) };
    }
}