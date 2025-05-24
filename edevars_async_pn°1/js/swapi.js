/**
 * C'est mon fichier JavaScript pour interagir avec l'API SWAPI (Star Wars API). Je vais récupérer des infos
 * sur les différentes ressources, les personnes et même une personne en particulier. Pour ça, j'utilise des fonctions
 * asynchrones (avec `async/await`) pour faire mes requêtes HTTP et je vais afficher les résultats dans la console.
 */
import { log } from "./log.js"; // Ici, j'importe la fonction 'log' depuis mon fichier 'log.js'. Je pense que ça va m'aider à afficher des messages.

// Définition de l'URL de base de l'API SWAPI. Je la mets ici au début, comme ça je suis sûr de l'avoir quand j'en aurai besoin.
const rootURL = "https://www.swapi.tech/api/";

log("Load"); // Bon, là, j'utilise ma fonction 'log' pour afficher "Load" dès que le script commence à se charger.

getResources().then(data => { // Ici, j'appelle ma fonction 'getResources'. Elle est 'async', donc elle va me retourner une promesse. Avec '.then()', je dis : "Quand t'as fini et que t'as les données, fais ça..."
    log("Result of getResources", data); // ...et ce que je veux faire, c'est afficher le résultat (les 'data') de 'getResources' en utilisant ma fonction 'log'.
});

getPeople().then(data => { // Pareil ici, j'appelle 'getPeople' (sans argument cette fois) et quand j'ai les données...
    log("Result of getPeople", data); // ...je les affiche avec 'log'. Ça doit être la liste de toutes les personnes, je suppose.
});

getPeople({ page: 2 }).then(data => { // Là, j'appelle encore 'getPeople', mais je lui donne un objet `{ page: 2 }`. Je pense que ça va me donner la deuxième page des résultats de personnes. Et quand j'ai la réponse...
    log("Result of getPeople (page 2)", data); // ...je l'affiche en indiquant que c'est la page 2.
});

getPerson(1).then(data => { // Ici, j'appelle 'getPerson' avec l'ID 1. Je m'attends à avoir les infos de la première personne. Et une fois que j'ai les données...
    log("Result of getPerson/1", data); // ...je les affiche aussi, en précisant que c'est pour la personne avec l'ID 1.
});

// Voici ma fonction asynchrone pour récupérer les infos de base de l'API. Ça doit me dire quelles sont les différentes catégories de données disponibles (films, personnes, etc.).
async function getResources() {
    const url = new URL(rootURL); // Je crée une nouvelle URL en utilisant l'URL de base de l'API.
    try {
        const response = await fetch(url); // Là, je fais mon appel HTTP GET à l'URL. Le mot 'await' fait que mon code s'arrête ici et attend que la réponse arrive.
        const data = await response.json(); // Une fois que j'ai la réponse, je la convertis en JSON. 'await' attend que ça soit fait.
        return data; // Et je retourne les données JSON que j'ai récupérées.
    } catch (error) {
        console.log(error); // S'il y a une erreur pendant tout ça (la requête ou la conversion en JSON), je l'affiche dans la console.
    }
}

// Ma fonction pour récupérer les informations d'une personne spécifique en utilisant son ID.
async function getPerson(id) {
    const url = new URL(rootURL + "people/" + id + "/"); // Je construis l'URL spécifique pour la personne avec l'ID que j'ai donné.
    try {
        const response = await fetch(url); // Je fais ma requête HTTP GET.
        const data = await response.json(); // Je convertis la réponse en JSON.
        return data; // Je retourne les données de la personne.
    } catch (error) {
        console.log(error); // Je gère les erreurs si jamais il y en a.
    }
}

// Et enfin, ma fonction pour récupérer une liste de personnes. Elle peut prendre un 'queryObject' pour ajouter des paramètres à l'URL, par exemple pour demander une page spécifique.
async function getPeople(queryObject) {
    const url = new URL(rootURL + "people"); // Je commence par l'URL de base pour les personnes.
    if (queryObject) { // Si on m'a donné un objet de requête...
        for (let key of Object.keys(queryObject)) { // ...je parcours toutes les clés de cet objet.
            let value = queryObject[key]; // Je récupère la valeur associée à chaque clé.
            url.searchParams.append(key, value); // Et j'ajoute ça comme un paramètre dans l'URL (par exemple, 'page=2').
        }
    }
    try {
        const response = await fetch(url); // Je fais ma requête HTTP GET à l'URL (avec ou sans les paramètres).
        const data = await response.json(); // Je convertis la réponse en JSON.
        return data; // Je retourne la liste des personnes.
    } catch (error) {
        console.log(error); // Je n'oublie pas de gérer les erreurs au cas où.
    }
}