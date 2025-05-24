import Person from './Person.js';
import Student from './Student.js';
/**
 * Cette classe représente un professeur. Elle hérite de la classe Person.
 * @extends Person - Person représente une personne
 */
class Professor extends Person {

    // Déclaration des membres de la classe
    #subject;

    /**
     * Fonction constructeur permettant de construire un objet de type Professor
     * @constructor
     * @extends Person
     * @param {String} lastname - Nom de famille
     * @param {String} fisrtname - Prénom
     * @param {Number} age - Age
     * @param {String} gender - Genre
     * @param {String[]} interests - Tableau de chaines de caractères contenant les centres d'intérêts
     * @param {String} subject - Matière enseignée
     */
    constructor(lastname, firstname, age, gender, interests, subject) {
        super(lastname, firstname, age, gender, interests);  // Fait appel au constructeur de la classe parent, c'est-à-dire la classe Perso

        this.subject = subject; // initialise la propriété subject de la classe
    }
d
    // Si on utilise pas les setters dans le constructeur, on doit y faire les tests
    // constructor(lastname, firstname, age, gender, interests, subject) {
    //     super(lastname, firstname, age, gender, interests);  // Fait appel au constructeur de la classe parent, c'est-à-dire la classe Perso

    //     if (typeof subject !== "string" && subject instanceof String === false) { // Si subject n'est pas une chaine de caractères
    //         throw new Error("L'argument 'subject' doit être de type 'string' ou bien d'une instance de 'String'"); // Lance une erreur
    //     }

    //     this.#subject = subject; // initialise la propriété subject de la classe
    // }

    /**
     * Retourne la matière enseignée
     */
    get subject() {
        return this.#subject; // Retourne la propriété #subject
    }

    /**
     * Modifie la matière enseignée
     */
    set subject(subject) {
        if (typeof subject !== "string" && subject instanceof String === false) { // Si subject n'est pas une chaine de caractères
            throw new Error("L'argument 'subject' doit être de type 'string' ou bien d'une instance de 'String'"); // Lance une erreur
        }

        this.#subject = subject; // Modifie la propriété #subject
    }

    /**
     * Retourne une chaine de caractères conentant toutes les propriétés séparées par un point-virgule (";")
     */
    get infos() {
        return [this.firstname, this.lastname, this.age, this.gender, this.subject, this.interests.replace(/;/g, ",")].join(";"); // Retourne une chaine constituée de la concaténations de toutes les propriétés
    }

    /**
     * Cette méthode retourne une phrase de présentation du professeur. Elle remplace la méthode greeting() de Person dont hérite Professor.
     * @return {String} - Retourne la phrase "Bonjour, je m'appelle <prénom> <nom de famille> et je serai votre professeur de <matière>."
     */
    greeting() {
        return `Bonjour, je m'appelle ${this.fullname} et je serai votre professeur de ${this.subject}.`;
    }

    /**
     * Cette méthode retourne une phrase demandant le silence. Cette méthode est propre à la classe Professor.
     * @return {String} - Retourne la phrase "Un peu de silence !!!"
     */
    askForSilence() {
        return "Un peu de silence !!!";
    }

    /**
     * Cette fonction permet de modifier la moyenne d'un étudiant
     * @param {Student} student - Etudiant dont on souhaite modifier la moyenne
     * @param {Number} average - La moyenne à assigné à l'étudiant
     */
    evaluate(student, average) {
        if (student instanceof Student === false) { // Si student n'est pas une instance de Student
            throw new Error("L'argument 'student' doit être un objet d'instance de la classe 'Student'."); // Lance une erreur
        }

        if (typeof average !== "number" && average instanceof Number === false) { // Si average n'est pas un nombre
            throw new Error("L'argument 'average' doit être de type 'number' ou bien d'une instance de 'Number'"); // Lance une erreur
        }

        student.average = average; // Modifie la moyenne de l'étudiant
    }
}
export default Professor;