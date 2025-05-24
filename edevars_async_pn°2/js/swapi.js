import { log } from "./log.js"; // Importe la fonction 'log' depuis le fichier 'log.js'. Cette fonction est utilisée pour afficher des informations dans la console et/ou la page HTML.

log("Load"); // Affiche "Load" au chargement du script, indiquant que le script a commencé à s'exécuter.

const rootURL = "https://www.swapi.tech/api/"; // Définition de l'URL de base de l'API SWAPI (Star Wars API). Toutes les requêtes seront construites à partir de cette URL.
const elConsole = document.querySelector("#console"); // Sélectionne l'élément HTML avec l'ID 'console'.  C'est là que les résultats des requêtes seront affichés dans la page HTML.

/**
 * Récupère les informations de base de l'API (ressources disponibles).
 * @returns {Promise<object>} Une promesse qui se résout avec les données JSON contenant les ressources de l'API.
 */
async function getResources() {
    const url = new URL(rootURL); // Crée un nouvel objet URL à partir de l'URL de base.
    try {
        const response = await fetch(url); // Envoie une requête GET à l'URL de l'API.  'fetch' retourne une promesse.
        const data = await response.json(); // Attend que la réponse soit convertie en JSON. 'response.json()' retourne aussi une promesse.
        return data; // Retourne les données JSON.
    }
    catch (error) {
        console.log(error); // Affiche l'erreur dans la console en cas de problème lors de la requête ou de la conversion JSON.
    }
}

/**
 * Récupère les informations d'une personne spécifique de Star Wars par son ID.
 * @param {number} id - L'ID de la personne à récupérer.
 * @returns {Promise<object>} Une promesse qui se résout avec les données JSON de la personne.
 */
async function getPerson(id) {
    const url = new URL(rootURL + "people/" + id + "/"); // Construit l'URL pour récupérer une personne spécifique en ajoutant '/people/{id}/' à l'URL de base.
    try {
        const response = await fetch(url); // Envoie la requête GET.
        const data = await response.json(); // Convertit la réponse en JSON.
        return data; // Retourne les données.
    }
    catch (error) {
        console.log(error); // Gestion des erreurs.
    }
}

/**
 * Récupère une liste de personnes de Star Wars, avec possibilité de filtrer par des paramètres de requête.
 * @param {object} queryObject - Un objet contenant les paramètres de requête (par exemple, { page: 2 } pour récupérer la deuxième page).
 * @returns {Promise<object>} Une promesse qui se résout avec les données JSON de la liste des personnes.
 */
async function getPeople(queryObject) {
    const url = new URL(rootURL + "people"); // URL de base pour récupérer la liste des personnes.
    if (queryObject) { // Vérifie si un objet de paramètres de requête a été fourni.
        for (let key of Object.keys(queryObject)) { // Itère sur les clés de l'objet de paramètres.
            let value = queryObject[key]; // Récupère la valeur du paramètre.
            url.searchParams.append(key, value); // Ajoute le paramètre à l'URL.  Par exemple, si queryObject est { page: 2 }, cela ajoutera "page=2" à l'URL.
        }
    }
    try {
        const response = await fetch(url); // Envoie la requête GET avec les paramètres.
        const data = await response.json(); // Convertit la réponse en JSON.
        return data; // Retourne les données.
    }
    catch (error) {
        console.log(error); // Gestion des erreurs.
    }
}

// ----------------------
// Partie 2 - Récupérer les films
// ----------------------

/**
 * Récupère les informations d'un film Star Wars spécifique par son ID.
 * @param {number} id - L'ID du film à récupérer.
 * @returns {Promise<object>} Une promesse qui se résout avec les données du film sous forme d'objet JSON.
 */
async function getFilm(id) {
    const url = new URL(rootURL + "films/" + id + "/"); // Construit l'URL pour récupérer un film spécifique.
    try {
        const response = await fetch(url); // Envoie la requête GET.
        if (!response.ok) { // Vérifie si la réponse HTTP est OK (statut 200-299).
            throw new Error(`Erreur HTTP! status: ${response.status}`); // Si la réponse n'est pas OK, lance une erreur avec le statut HTTP.
        }
        const data = await response.json(); // Convertit la réponse en JSON.
        return data; // Retourne les données du film.
    } catch (error) {
        console.error("Erreur lors de la récupération du film:", error); // Affiche l'erreur dans la console.
        throw error; // Relance l'erreur pour que l'appelant puisse la gérer.
    }
}

/**
 * Récupère une liste de films Star Wars, avec des paramètres de requête optionnels.
 * @param {object} [objectQuery] - Un objet contenant des paramètres de requête (par exemple, { page: 2 }).
 * @returns {Promise<object>} Une promesse qui se résout avec les données de la liste des films sous forme d'objet JSON.
 */
async function getFilms(objectQuery) {
    const url = new URL(rootURL + "films"); // URL de base pour récupérer la liste des films.
    if (objectQuery) { // Vérifie si des paramètres de requête ont été fournis.
        for (const key of Object.keys(objectQuery)) { // Itère sur les clés des paramètres.
            const value = objectQuery[key]; // Récupère la valeur du paramètre.
            url.searchParams.append(key, value); // Ajoute le paramètre à l'URL.
        }
    }
    try {
        const response = await fetch(url); // Envoie la requête.
        if (!response.ok) {  // Vérifie si la réponse est OK.
            throw new Error(`Erreur HTTP! status: ${response.status}`); // Lance une erreur si ce n'est pas le cas.
        }
        const data = await response.json(); // Convertit en JSON.
        return data; // Retourne les données.
    } catch (error) {
        console.error("Erreur lors de la récupération des films:", error); // Affiche l'erreur.
        throw error; // Relance l'erreur.
    }
}

getResources().then(data => {
    log("Result of getResources", data); // Appelle 'getResources' et affiche le résultat avec la fonction 'log'.
});

getPeople().then(data => {
    log("Result of getPeople", data); // Appelle 'getPeople' et affiche le résultat.
});

getPeople({ page: 2 }).then(data => {
    log("Result of getPeople (page 2)", data); // Appelle 'getPeople' avec le paramètre 'page: 2' et affiche le résultat.
});

getPerson(1).then(data => {
    log("Result of getPerson/1", data); // Appelle 'getPerson' avec l'ID 1 et affiche le résultat.
});

// ----------------------
// Exemple d'utilisation (Partie 2)
// ----------------------

// Récupérer un seul film (par exemple, le film avec l'ID 1)
getFilm(1)
    .then(film => log("Film (ID 1):", film)) // Appelle 'getFilm' avec l'ID 1 et affiche le résultat si la promesse est résolue.
    .catch(error => log("Erreur lors de la récupération du film:", error));  // Gère les erreurs en affichant un message d'erreur.

// Récupérer la première page des films
getFilms({ page: 1 })
    .then(films => log("Films (page 1):", films)) // Appelle 'getFilms' avec le paramètre 'page: 1'.
    .catch(error => log("Erreur lors de la récupération des films:", error)); // Gère les erreurs.

// Récupérer tous les films
getFilms()
    .then(films => log("Tous les films:", films)) // Appelle 'getFilms' sans paramètres (récupère la première page par défaut).
    .catch(error => log("Erreur lors de la récupération de tous les films", error)); // Gère les erreurs.
