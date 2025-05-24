class Swapi {
    #rootURL = "https://www.swapi.tech/api/";

}
const rootURL = "https://www.swapi.tech/api/";

async function request(url) {
    try {
        // console.log("request url : ", url.toString());
        const response = await fetch(url);
        // console.log("response :", response);
        const data = await response.json();
        // console.log("data :", data);
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

export async function getResources() { // Ajout de export
    const url = new URL(rootURL);
    return await request(url);
}


export async function getPerson(id) { // Ajout de export
    const url = new URL(rootURL + "people/" + id + "/");
    return await request(url);
}

// Ceci est une autre manière décrire la fonction
// async function getPerson(id) {
//     const url = new URL(rootURL + "people/" + id + "/");
//     const data = await request(url);
//     return data;
// }


export async function getPeople(queryObject) { // Ajout de export
    const url = new URL(rootURL + "people/");
    if (queryObject) {
        for (let key of Object.keys(queryObject)) {
            let value = queryObject[key];
            url.searchParams.append(key, value);
        }
    }
    return await request(url);
}

export async function getFilm(id) { // Ajout de export
    const url = new URL(rootURL + "films/" + id + "/");
    return await request(url);
}

export async function getFilms(queryObject) { // Ajout de export
    const url = new URL(rootURL + "films/");
    if (queryObject) {
        for (let key of Object.keys(queryObject)) {
            let value = queryObject[key];
            url.searchParams.append(key, value);
        }
    }
    return await request(url);
}

export async function getStarship(id) { // Ajout de export
    const url = new URL(rootURL + "starships/" + id + "/");
    return await request(url);
}

export async function getStarships(queryObject) { // Ajout de export
    const url = new URL(rootURL + "starships/");
    if (queryObject) {
        for (let key of Object.keys(queryObject)) {
            let value = queryObject[key];
            url.searchParams.append(key, value);
        }
    }
    return await request(url);
}

// **Exercice 5 - Les autres fonctions**

export async function getVehicle(id) { // Ajout de export
    const url = new URL(rootURL + "vehicles/" + id + "/");
    return await request(url);
}

export async function getVehicles(objectQuery) { // Ajout de export
    const url = new URL(rootURL + "vehicles/");
    if (objectQuery) {
        for (const key of Object.keys(objectQuery)) {
            const value = objectQuery[key];
            url.searchParams.append(key, value);
        }
    }
    return await request(url);
}

export async function getSpecies(id) { // Ajout de export
    const url = new URL(rootURL + "species/" + id + "/");
    return await request(url);
}

export async function getAllSpecies(objectQuery) { // Ajout de export
    const url = new URL(rootURL + "species/");
    if (objectQuery) {
        for (const key of Object.keys(objectQuery)) {
            const value = objectQuery[key];
            url.searchParams.append(key, value);
        }
    }
    return await request(url);
}

export async function getPlanet(id) { // Ajout de export
    const url = new URL(rootURL + "planets/" + id + "/");
    return await request(url);
}

export async function getPlanets(objectQuery) { // Ajout de export
    const url = new URL(rootURL + "planets/");
    if (objectQuery) {
        for (const key of Object.keys(objectQuery)) {
            const value = objectQuery[key];
            url.searchParams.append(key, value);
        }
    }
    return await request(url);
}

// **Pour tester les nouvelles fonctions (ajoute ces appels à la fin de ton fichier)**
getResources().then(data => console.log("Resources:", data));
getPeople({ page: 1 }).then(data => console.log("People (page 1):", data));
getPerson(1).then(data => console.log("Person (ID 1):", data));
getFilms({ page: 1 }).then(data => console.log("Films (page 1):", data));
getFilm(1).then(data => console.log("Film (ID 1):", data));
getStarships({ page: 1 }).then(data => console.log("Starships (page 1):", data));
getStarship(9).then(data => console.log("Starship (ID 9):", data));

getVehicle(4).then(data => console.log("Vehicle (ID 4):", data));
getVehicles({ page: 2 }).then(data => console.log("Vehicles (page 2):", data));
getSpecies(3).then(data => console.log("Species (ID 3):", data));
getAllSpecies({ page: 1 }).then(data => console.log("All Species (page 1):", data));
getPlanet(5).then(data => console.log("Planet (ID 5):", data));
getPlanets({ page: 3 }).then(data => console.log("Planets (page 3):", data));