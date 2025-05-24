class JoueurEuromillions {
  constructor() {
    // Définit le constructeur de la classe.
    this.numerosChoisis = [];
    // Initialise un tableau vide pour stocker les numéros choisis par le joueur.
    this.etoilesChoisies = [];
    // Initialise un tableau vide pour stocker les étoiles choisies par le joueur.
  }

  choisirNumeros(numeros) {
    // Définit une méthode pour enregistrer les numéros choisis par le joueur.
    this.numerosChoisis = [...numeros].slice(0, 5).sort((a, b) => a - b);
    // Prend une copie du tableau de numéros, en sélectionne au maximum les 5 premiers et les trie par ordre croissant.
  }

  choisirEtoiles(etoiles) {
    // Définit une méthode pour enregistrer les étoiles choisies par le joueur.
    this.etoilesChoisies = [...etoiles].slice(0, 2).sort((a, b) => a - b);
    // Prend une copie du tableau d'étoiles, en sélectionne au maximum les 2 premières et les trie par ordre croissant.
  }

  obtenirChoix() {
    // Définit une méthode pour obtenir les numéros et étoiles choisis par le joueur.
    return { numeros: this.numerosChoisis, etoiles: this.etoilesChoisies };
    // Retourne un objet contenant les tableaux de numéros et d'étoiles choisis par le joueur.
  }
}
