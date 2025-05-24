const rootURL = "https://www.swapi.tech/api/";
async function request(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erreur HTTP! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur lors de la requête:", error);
        throw error;
    }
}
async function getResources() {
    const url = new URL(rootURL);
    return request(url);
}

async function getPerson(id) {
    const url = new URL(rootURL + "people/" + id + "/");
    return request(url);
}

async function getPeople(queryObject) {
    const url = new URL(rootURL + "people/");
    if (queryObject) {
        for (let key of Object.keys(queryObject)) {
            let value = queryObject[key];
            url.searchParams.append(key, value);
        }
    }
    return request(url);
}

async function getFilm(id) {
    const url = new URL(rootURL + "films/" + id + "/");
    return request(url);
}

async function getFilms(queryObject) {
    const url = new URL(rootURL + "films/");
    if (queryObject) {
        for (let key of Object.keys(queryObject)) {
            let value = queryObject[key];
            url.searchParams.append(key, value);
        }
    }
    return request(url);
}

async function getStarship(id) {
    const url = new URL(rootURL + "starships/" + id + "/");
    return request(url);
}

async function getStarships(queryObject) {
    const url = new URL(rootURL + "starships/");
    if (queryObject) {
        for (let key of Object.keys(queryObject)) {
            let value = queryObject[key];
            url.searchParams.append(key, value);
        }
    }
    return request(url);
}
