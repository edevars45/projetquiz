import Person from './Person.js';

/**
 * Cette classe représente un étudiant. Elle hérite de la classe Person.
 * @extends Person - Person représente une personne
 */
class Student extends Person {

    // Déclaration des membres de la classe
    #number;
    #average;

    /**
     * Fonction constructeur Student permettant de créer un objet de type Student.
     * @constructor
     * @param {String} lastname - Nom de famille
     * @param {String} firstname - Prénom
     * @param {Number} age - Age
     * @param {String} gender - Genre
     * @param {String[]} interests - Tableau de chaines de caractères contenant les centres d'intérêts
     * @param {String} number - Numéro de l'étudiant
     * @param {Number} average - Moyenne de l'élève
     */
    constructor(lastname, firstname, age, gender, interests, number, average) {
        super(lastname, firstname, age, gender, interests); // Fait appel au constructeur de la classe parent, c'est-à-dire la classe Person

        if (typeof number !== "string" && number instanceof String === false) { // Si number n'est pas une chaine de caractères
            throw new Error("L'argument 'number' doit être de type 'string' ou bien d'une instance de 'String'"); // Lance une erreur
        }

        if (typeof average !== "number" && average instanceof Number === false) { // Si average n'est pas un nombre
            throw new Error("L'argument 'average' doit être de type 'number' ou bien d'une instance de 'Number'"); // Lance une erreur
        }

        this.number = number; // initialise la propriété number de la classe
        this.average = average; // initialise la propriété average de la classe
    }

    /**
     * Retourne le numéro
     */
    get number() {
        return this.#number; // Retourne la propriété #number
    }

    /**
     * Modifie le numéro
     */
    set number(number) {
        if (typeof number !== "string" && number instanceof String === false) { // Si number n'est pas une chaine de caractères
            throw new Error("L'argument 'number' doit être de type 'string' ou bien d'une instance de 'String'"); // Lance une erreur
        }

        this.#number = number; // Modifie la propriété #number
    }

    /**
     * Retourne la moyenne
     */
    get average() {
        return this.#average; // Retourne la propriété #average
    }

    /**
     * Modifie la moyenne
     */
    set average(average) {
        if (typeof average !== "number" && average instanceof Number === false) { // Si average n'est pas un nombre
            throw new Error("L'argument 'average' doit être de type 'number' ou bien d'une instance de 'Number'"); // Lance une erreur
        }

        this.#average = average; // Modifie la propriété #average
    }

    /**
     * Retourne une chaine de caractères conentant toutes les propriétés séparées par un point-virgule (";")
     */
    get infos() {
        return [this.firstname, this.lastname, this.age, this.gender, this.interests.replace(/;/g, ","), this.number, this.average].join(";"); // Retourne une chaine constituée de la concaténations de toutes les propriétés
    }

    /**
     * Cette méthode retourne une phrase de présentation de l'étudiant
     * @return {String} - Retourne la phrase "Salut! Moi c'est <prénom>! J'ai <age> ans."
     */
    greeting() {
        return `Salut! Moi c'est ${this.firstname}! J'ai ${this.age} ans.`;
    }

    /**
     * Cette méthode simule la signature de l'étudiant.
     */
    sign() {
        console.log("Signature de " + this.firstname);
    }

    /**
     * Méthode héritée de Person (exemple)
     */
    goodbye() {
        return `Ciao, à bientôt!`;
    }
}
export default Student;