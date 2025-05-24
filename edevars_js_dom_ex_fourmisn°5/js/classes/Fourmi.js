class Fourmi {
    #age; // Attribut privé pour l'âge de la fourmi.
    #taille; // Attribut privé pour la taille de la fourmi.

    constructor(age, taille) {
        this.#age = age; // Initialisation de l'âge de la fourmi lors de la création de l'objet.
        this.#taille = taille; // Initialisation de la taille de la fourmi lors de la création de l'objet.
    }

    get age() { // Getter public pour accéder à l'âge de la fourmi.
        return this.#age; // Retourne la valeur de l'attribut privé #age.
    }

    set age(nouvelAge) { // Setter public pour modifier l'âge de la fourmi.
        this.#age = nouvelAge; // Met à jour la valeur de l'attribut privé #age avec la nouvelle valeur.
    }

    get taille() { // Getter public pour accéder à la taille de la fourmi.
        return this.#taille; // Retourne la valeur de l'attribut privé #taille.
    }

    set taille(nouvelleTaille) { // Setter public pour modifier la taille de la fourmi.
        this.#taille = nouvelleTaille; // Met à jour la valeur de l'attribut privé #taille avec la nouvelle valeur.
    }

    dormir() { // Méthode publique simulant l'action de dormir.
        console.log("La fourmi dort.");
    }

    manger() { // Méthode publique simulant l'action de manger.
        console.log("La fourmi mange.");
    }
}

export default Fourmi; // Exportation de la classe Fourmi pour pouvoir l'importer dans d'autres fichiers.