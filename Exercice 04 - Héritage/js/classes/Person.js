
/**
 * Cette classe représente une personne
 */
class Person {

    // Déclaration des membres de la classe
    #lastname;
    #firstname;
    #age;
    #gender;
    #interests;

    /**
     * Fonction constructeur Person permttant de créer un objet de type Person
     * @constructor
     * @param {String} lastname - Nom de famille
     * @param {String} fisrtname - Prénom
     * @param {Number} age - Age
     * @param {String} gender - Genre
     * @param {String[]} interests - Tableau de chaine de caractères. Chaque élément du tableau correspond à un centre d'intérêt.
     */
    constructor(lastname, firstname, age, gender, interests) {

        if (Array.isArray(interests) === false) { // Si interests n'est pas un tableau
            throw new Error("L'argument 'interest' doit être d'une instance de 'Array'"); // Lance une erreur
        }

        interests.forEach(function (interest) { // Parcours tous les éléments du tableau
            if (typeof interest !== "string" && interest instanceof String === false) { // Si un élément n'est pas une chaine de caractères
                throw new Error("L'argument 'interests' doit être un tableau ne contenant que des éléments de type 'string' ou bien d'une instance de 'String'"); // Lance une erreur
            }
        });

        this.lastname = lastname; // Initialise la propriété #lastname en utilisant le setter
        this.firstname = firstname; // initialise la propriété #firstname en utilisant le setter
        this.age = age; // initialise la propriété #firstname en utilisant le setter
        this.gender = gender; // initialise la propriété #firstname en utilisant le setter
        this.#interests = interests; // initialise la propriété #interests
    }

    // Si on utilise pas les setters dans le constructeur, on doit y faire les tests
    // constructor(lastname, firstname, age, gender, interests) {

    //     if (typeof lastname !== "string" && lastname instanceof String === false) { // Si lastname n'est pas une chaine de caractères
    //         throw new Error("L'argument 'lastname' doit être de type 'string' ou bien d'une instance de 'String'"); // Lance une erreur
    //     }

    //     if (typeof firstname !== "string" && firstname instanceof String === false) { // Si firstname n'est pas une chaine de caractères
    //         throw new Error("L'argument 'firstname' doit être de type 'string' ou bien d'une instance de 'String'"); // Lance une erreur
    //     }

    //     if (typeof gender !== "string" && gender instanceof String === false) { // Si gender n'est pas une chaine de caractères
    //         throw new Error("L'argument 'gender' doit être de type 'string' ou bien d'une instance de 'String'"); // Lance une erreur
    //     }

    //     if (typeof age !== "number" && age instanceof Number === false) { // Si age n'est pas un nombre
    //         throw new Error("L'argument 'age' doit être de type 'number' ou bien d'une instance de 'Number'"); // Lance une erreur
    //     }

    //     if (Array.isArray(interests) === false) { // Si interests n'est pas un tableau
    //         throw new Error("L'argument 'interest' doit être d'une instance de 'Array'"); // Lance une erreur
    //     }

    //     interests.forEach(function (interest) {
    //         if (typeof interest !== "string" && interest instanceof String === false) { // Si un élément n'est pas une chaine de caractères
    //             throw new Error("L'argument 'interests' doit être un tableau ne contenant que des éléments de type 'string' ou bien d'une instance de 'String'"); // Lance une erreur
    //         }
    //     });

    //     this.#lastname = lastname; // Initialise la propriété lastname
    //     this.#firstname = firstname; // initialise la propriété firstname
    //     this.#age = age; // initialise la propriété firstname
    //     this.#gender = gender; // initialise la propriété firstname
    //     this.#interests = interests; // initialise la propriété firstname
    // }

    /**
     * Retourne le nom en majuscules
     */
    get lastname() {
        return this.#lastname.toUpperCase(); // Retourne la  proriété #lastname en majuscules
    }

    /**
     * Modifie le nom
     */
    set lastname(lastname) {
        if (typeof lastname !== "string" && lastname instanceof String === false) { // Si lastname n'est pas une chaine de caractères
            throw new Error("L'argument 'lastname' doit être de type 'string' ou bien d'une instance de 'String'"); // Lance une erreur
        }

        if( /^[a-zA-Z]+$/.test(lastname) === false ) { // Si lastname ne contient pas que des lettres
            throw new Error("L'argument 'lastname' ne doit contenir que des lettres."); // Lance une erreur
        }

        // On aurait pu le faire avec string.match(), mais c'est moins performant
        // if( lastname.match(/^[a-zA-Z]+$/) === null ) { // Si lastname ne contient pas que des lettres
        //     throw new Error("L'argument 'lastname' ne doit contenir que des lettres."); // Lance une erreur
        // }

        this.#lastname = lastname; // Modifie la propriété #lastname
    }

    /**
     * Retourne le prénom en minuscules
     */
    get firstname() {
        return this.#firstname.toLowerCase(); // Retourne la propriété #firstname en minuscules
    }

    /**
     * Modifie le prénom
     */
    set firstname(firstname) {
        if (typeof firstname !== "string" && firstname instanceof String === false) { // Si firstname n'est pas une chaine de caractères
            throw new Error("L'argument 'firstname' doit être de type 'string' ou bien d'une instance de 'String'"); // Lance une erreur
        }

        if( /^[a-zA-Z]+$/.test(firstname) === false ) { // Si firstname ne contient pas que des lettres
            throw new Error("L'argument 'firstname' ne doit contenir que des lettres."); // Lance une erreur
        }

        // On aurait pu le faire avec string.match(), mais c'est moins performant
        // if( firstname.match(/^[a-zA-Z]+$/) === null ) { // Si firstname ne contient pas que des lettres
        //     throw new Error("L'argument 'firstname' ne doit contenir que des lettres."); // Lance une erreur
        // }

        this.#firstname = firstname; // Modifie la propriété #firstname
    }

    /**
     * Retourne l'age
     */
    get age() {
        return this.#age; // Retourne la propriété #age
    }

    /**
     * Modifie l'age
     */
    set age(age) {
        if (typeof age !== "number" && age instanceof Number === false) { // Si age n'est pas un nombre
            throw new Error("L'argument 'age' doit être de type 'number' ou bien d'une instance de 'Number'"); // Lance une erreur
        }

        if( age < 0 ) { // Si age est inférieur à 0
            throw new Error("L'argument 'age' doit être supérieur à 0."); // Lance une erreur
        }

        this.#age = age; // Modifie la propriété #age
    }

    /**
     * Retourne le genre
     */
    get gender() {
        return this.#gender; // Retourne la propriété #gender
    }

    /**
     * Modifie le genre 
     */
    set gender(gender) {
        gender = gender.toLowerCase(); // Convertit tout en minuscule
        if( gender !== "homme" && gender !== "femme" && gender !== "autre") { // Si gender n'est pas une chaine de caractères valant "Homme",, "Femme" ou "Autre"
            throw new Error("L'argument 'gender' doit être une chaine de caractères valant 'Homme', 'Femme' ou 'Autre'"); // Lance une erreur
        }

        this.#gender = gender[0].toUpperCase() + gender.slice(1).toLowerCase(); // Mets la première lettre en majuscule et les autres en minuscules
    }

    // Retourne une chaine de caractères conentant la liste des centre d'intérêtes séparés par un point-virgule (";")
    get interests() {
        return this.#interests.join(";"); // Retourne une chaine de caractères de la forme "<interêt_1> ;<interêt_2> ;<interêt_3> ;<interêt_4>"
    }

    /**
     * Retourne la chaine de caractères "<Prénom> <Nom>""
     */
    get fullname() {
        return this.#firstname + " " + this.#lastname; // Retourne une chaine de carctères composée des propriétés #firstname et #lastname séparée par un espace
    }

    /**
     * Retourne le nombre de centre d'intérêts
     */
    get nbInterests() {
        return this.#interests.length; // Retourne la taille du tableau de la propriété #interests
    }

    /**
     * Retourne une chaine de caractères conentant toutes les propriétés séparées par un point-virgule (";")
     */
    get infos() {
        return [this.#firstname, this.#lastname, this.#age, this.#gender, this.#interests.join(",")].join(";"); // Retourne une chaine constituée de la concaténations de toutes les propriétés
    }

    /**
     * Cette méthide permet d'ajouter un centre intérêt à la liste des centres d'intérêts.
     * Si le nouvel intérêt est déjà présent da,s la liste, alors il n'est pas ajouté.
     * @param {String} newInterest - Le nouvel intérêt à ajouter
     */
    addInterest(newInterest) {
        if (typeof newInterest !== "string" && newInterest instanceof String === false) { // Si newInterest n'est pas une chaine de caractères
            throw new Error("L'argument 'newInterest' doit être de type 'string' ou bien d'une instance de 'String'"); // Lance une erreur
        }

        if( this.#interests.find(interest => interest !== newInterest) ) { // Si le nouvel intérêt n'est pas déjà dans le tableau des intérêts
            this.#interests.push(newInterest); // Alors on ajoute le nouvel intérêt au tableau
        }
        
    }

    /**
     * Retire un centre d'intérêt dans la liste des centes d'intérêts
     * @param {String} oldInterest 
     * @return {Boolean} - Retourne true si le centre d'intérêt est dans la liste et est retiré et retourne false dans le cas contraire
     */
    removeInterest(oldInterest) {
        if (typeof oldInterest !== "string" && oldInterest instanceof String === false) { // Si oldInterest n'est pas une chaine de caractères
            throw new Error("L'argument 'oldInterest' doit être de type 'string' ou bien d'une instance de 'String'"); // Lance une erreur
        }

        // for( let i = 0; i < this.#interests.length; i++) { // Parcours tous les éléments du tableau this.#interests
        //     if( this.#interests[i] === oldInterest ) { // Si un élément correspond à l'intérêt qu'on souhaite retiré
        //         this.#interests.splice(i, 1); // On retire cet élément du tableau
        //         return true; // On retourne true
        //     }
        // }

        const index = this.#interests.indexOf(oldInterest); // Récupère l'index auquel se situe l'intérêt à retiré. Vaut -1 si la valeur cherchée n'est pas dans le tableau

        if( index > -1 ) { // Si la valeur à été trouvée
            this.#interests.splice(index, 1); // Retire cet élément du tableau
            return true; // On retourne true
        } 

        return false; // Si on est ici, c'est que l'intérêt qu'on souhaite retiré n'est pas dans le tableau des centres d'intérêts, donc on retourne false

    }

    /**
     * Cette méthode retourne une phrase de présentation de la personne
     * @return {String} - Retourne la phrase "Bonjour, je m'appelle <prénom> <nom>."
     */
    greeting() {
        return `Bonjour, je m'appelle ${this.fullname}`;
    }
    
    /**
     * Cette méthode retourne une phrase d'au revoir
     * @return {String} - Restourne la phrase "Au revoir"
     */
    goodbye() {
        return "Au revoir.";
    }
}
export default Person;