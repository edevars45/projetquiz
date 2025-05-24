class Numero {
    constructor(number, cssToAdd, resultat) {
        this.number = number;
        this.cssType = cssToAdd;
        this.html = document.createElement("div");
        this.html.textContent = this.number;
        this.html.classList.add("zone", this.cssType);
        resultat.append(this.html);
    }

    setVisible() {
        this.html.classList.add("show");
    }

    static numbersRandomGenerator(maxNumber, elementNumber) {
        const arrayNumbers = [];
        while (arrayNumbers.length < elementNumber) {
            let newNumber = Math.ceil(Math.random() * maxNumber);
            (arrayNumbers.indexOf(newNumber) == -1) ? arrayNumbers.push(newNumber) : null;
        }
        return arrayNumbers;
    }
    
}