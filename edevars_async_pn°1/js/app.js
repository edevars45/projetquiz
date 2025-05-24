import { log } from "./log.js"; // Importe la fonction 'log' depuis le fichier 'log.js'.

log("Load"); // Affiche "Load" au chargement du script.

const rootURL = "https://www.swapi.tech/api/"; // Définition de l'URL de base de l'API.

// Fonction asynchrone pour récupérer les informations de base de l'API (ressources).
async function getResources() {
    const url = new URL(rootURL);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur lors de la récupération des ressources :", error);
    }
}

// Fonction asynchrone pour récupérer une personne spécifique par son ID.
async function getPerson(id) {
    const url = new URL(rootURL + "people/" + id + "/");
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur lors de la récupération de la personne :", error);
    }
}

// Fonction asynchrone pour récupérer une liste de personnes. Peut prendre un objet 'queryObject' pour les paramètres.
async function getPeople(queryObject) {
    const url = new URL(rootURL + "people");
    if (queryObject) {
        for (const key in queryObject) {
            if (queryObject.hasOwnProperty(key)) {
                url.searchParams.append(key, queryObject[key]);
            }
        }
    }
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur lors de la récupération des personnes :", error);
    }
}

getResources().then(data => {
    log("Result of getResources", data);
});

getPeople().then(data => {
    log("Result of getPeople", data);
});

getPeople({ page: 2 }).then(data => {
    log("Result of getPeople (page 2)", data);
});

getPerson(1).then(data => {
    log("Result of getPerson/1", data);
});