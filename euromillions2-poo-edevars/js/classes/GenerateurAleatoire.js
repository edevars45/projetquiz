class GenerateurAleatoire {
    genererNombreUnique(min, max, nombresExclus) {
        let nombre;
        do {
            nombre = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (nombresExclus.includes(nombre));
        return nombre;
    }

    genererNombresUniques(min, max, count) {
        const nombres = [];
        while (nombres.length < count) {
            const nombre = this.genererNombreUnique(min, max, nombres);
            nombres.push(nombre);
        }
        return nombres.sort((a, b) => a - b);
    }
}
export default GenerateurAleatoire;