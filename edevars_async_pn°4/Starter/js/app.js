import { log } from "./log.js";

log("Load");

getResources().then( data => {
    log("Result of getResources", data);
});

getPeople().then(data => {
    log("Result of getPeople", data);
});

getPeople({page: 2}).then( data => {
    log("Result of getPeople (page 2)", data);
});

getPerson(1).then( data => {
    log("Result of getPerson/1", data);
});

getFilms().then( data => {
    log("Result of getFilms", data);
});

getFilms({page: 1}).then( data => {
    log("Result of getFilms (page 1)", data);
});

getFilm(1).then(data => {
    log("Result of getFilm/1", data);
});

getStarships().then( data => {
    log("Result of getStarships", data);
});

getStarships({page: 2}).then( data => {
    log("Result of getStarships (page 2)", data);
});

