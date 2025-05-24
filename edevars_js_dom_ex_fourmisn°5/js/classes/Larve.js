// Vous mettrez ici le code de la classe Larve
class Larve {
    #type;

    constructor(type) {
        this.#type = type;
    }

    get type() {
        return this.#type;
    }

    set type(nouveauType) {
        this.#type = nouveauType;
    }

    metamorphose() {
        console.log(`La larve de type ${this.#type} se métamorphose.`);
    }
}

export default Larve;