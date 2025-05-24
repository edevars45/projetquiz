// Code permettant de tester vos classes
import Reine from './classes/Reine.js'; // Importe la classe Reine depuis le fichier Reine.js dans le dossier classes.
import Male from './classes/Male.js'; // Importe la classe Male depuis le fichier Male.js dans le dossier classes.
import Princesse from './classes/Princesse.js'; // Importe la classe Princesse depuis le fichier Princesse.js dans le dossier classes.
import Eclaireuse from './classes/Eclaireuse.js'; // Importe la classe Eclaireuse depuis le fichier Eclaireuse.js dans le dossier classes.
import Soldat from './classes/Soldat.js'; // Importe la classe Soldat depuis le fichier Soldat.js dans le dossier classes.
import Larve from './classes/Larve.js'; // Importe la classe Larve depuis le fichier Larve.js dans le dossier classes.
import Ouvriere from './classes/Ouvriere.js'; // Importe la classe Ouvriere depuis le fichier Ouvriere.js dans le dossier classes.
import Nourrice from './classes/Nourrice.js'; // Importe la classe Nourrice depuis le fichier Nourrice.js dans le dossier classes.

//  Code permettant de tester les classes
const reine = new Reine(5, 1.5, 10); // Crée une nouvelle instance de la classe Reine avec un âge de 5, une taille de 1.5 et 10 œufs pondus.
const male = new Male(2, 1); // Crée une nouvelle instance de la classe Male avec un âge de 2 et une taille de 1.
const princesse = new Princesse(3, 1.2); // Crée une nouvelle instance de la classe Princesse avec un âge de 3 et une taille de 1.2 (le partenaire mâle est initialement null).
const eclaireuse = new Eclaireuse(1, 0.8, 5); // Crée une nouvelle instance de la classe Eclaireuse avec un âge de 1, une taille de 0.8 et un rayon d'action de 5.
const soldat = new Soldat(2, 1.3, 8); // Crée une nouvelle instance de la classe Soldat avec un âge de 2, une taille de 1.3 et une endurance de 8.
const larve = new Larve("ouvrière"); // Crée une nouvelle instance de la classe Larve de type "ouvrière".
const ouvriere = new Ouvriere(1, 0.9, "construction"); // Crée une nouvelle instance de la classe Ouvriere avec un âge de 1, une taille de 0.9 et un poste de "construction".
const nourrice = new Nourrice(1.5, 1); // Crée une nouvelle instance de la classe Nourrice avec un âge de 1.5 et une taille de 1 (son poste est "Nourrice" par défaut).

reine.pondre(); // Appelle la méthode pondre sur l'objet reine, simulant la ponte d'un œuf.
male.voler(); // Appelle la méthode voler sur l'objet male, simulant son envol.
princesse.volNuptial(male); // Appelle la méthode volNuptial sur l'objet princesse, simulant son vol nuptial avec l'objet male.
eclaireuse.explorer(); // Appelle la méthode explorer sur l'objet eclaireuse, simulant son exploration.
soldat.attaquer(); // Appelle la méthode attaquer sur l'objet soldat, simulant une attaque.
larve.metamorphose(); // Appelle la méthode metamorphose sur l'objet larve, simulant sa transformation.
ouvriere.creuserGalerie(); // Appelle la méthode creuserGalerie sur l'objet ouvriere, simulant le creusement d'une galerie.
nourrice.nourrirLarve(larve); // Appelle la méthode nourrirLarve sur l'objet nourrice, simulant le nourrissage de l'objet larve.

console.log("Âge de la reine:", reine.age); // Affiche dans la console l'âge actuel de l'objet reine en accédant à sa propriété 'age' via le getter.
reine.age = 6; // Modifie l'âge de l'objet reine à 6 en utilisant le setter de la propriété 'age'.
console.log("Nouvel âge de la reine:", reine.age); // Affiche dans la console le nouvel âge de l'objet reine après la modification.
console.log("Nombre d'oeufs pondus par la reine:", reine.nbOeufsPondus); // Affiche dans la console le nombre d'œufs pondus par l'objet reine en accédant à sa propriété 'nbOeufsPondus' via le getter.
console.log("Partenaire de la princesse:", princesse.partenaireMale ? "Oui" : "Non"); // Affiche dans la console "Oui" si l'objet princesse a un partenaire mâle (la propriété 'partenaireMale' n'est pas null), sinon affiche "Non".
if (princesse.partenaireMale) { // Vérifie si l'objet princesse a un partenaire mâle.
    console.log("Partenaire mâle:", princesse.partenaireMale); // Si elle en a un, affiche dans la console l'objet représentant le partenaire mâle.
}
console.log("Larves nourries par la nourrice:", nourrice.listeLarves.length); // Affiche dans la console le nombre de larves dans le tableau 'listeLarves' de l'objet nourrice, indiquant le nombre de larves qu'elle a nourries.
import Fourmi from './classes/Fourmi.js'; // Importe la classe Fourmi 
const maFourmi = new Fourmi(1, 0.5); // Crée une nouvelle instance de la classe Fourmi (la classe de base) avec un âge de 1 et une taille de 0.5.
console.log(maFourmi.age); // Affiche dans la console l'âge de l'objet maFourmi en accédant à sa propriété 'age' via le getter.
maFourmi.age = 2; // Modifie l'âge de l'objet maFourmi à 2 en utilisant le setter de la propriété 'age'.
console.log(maFourmi.age); // Affiche dans la console le nouvel âge de l'objet maFourmi après la modification.