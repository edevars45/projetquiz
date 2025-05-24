const rootURL = "https://www.swapi.tech/api/";

async function getResources() {
    const url = new URL(rootURL);
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

async function getPerson(id) {
    const url = new URL(rootURL + "people/" + id + "/");
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    } 
}

async function getPeople(queryObject) {
    const url = new URL(rootURL + "people/");
    if (queryObject) {
        for (let key of Object.keys(queryObject)) {
            let value = queryObject[key];
            url.searchParams.append(key, value);
        }
    }
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

async function getFilm(id) {
    const url = new URL(rootURL + "films/" + id + "/");
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    } 
}

async function getFilms(queryObject) {
    const url = new URL(rootURL + "films/");
    if (queryObject) {
        for (let key of Object.keys(queryObject)) {
            let value = queryObject[key];
            url.searchParams.append(key, value);
        }
    }
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}