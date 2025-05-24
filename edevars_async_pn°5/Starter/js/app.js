import { getVehicle, getVehicles } from "/js/swapi.js";

// Sélection des éléments HTML où afficher les données
const vehicleDetails4Div = document.querySelector("#vehicle-details-4");
const vehicleDetails8Div = document.querySelector("#vehicle-details-8");
const vehicleDetails6Div = document.querySelector("#vehicle-details-6");
const firstVehiclesListUl = document.querySelector("#first-vehicles-list");
const secondVehiclesListUl = document.querySelector("#second-vehicles-list");

// Fonction pour afficher les détails d'un véhicule
function displayVehicleDetails(vehicleId, element) {
    getVehicle(vehicleId) // Appel de la fonction pour récupérer les détails du véhicule
        .then(vehicle => {
            if (element) { // Vérifie si l'élément HTML existe
                element.innerHTML = `
                    <h2>${vehicle.name}</h2>
                    <p>Modèle: ${vehicle.model}</p>
                    <p>Constructeur: ${vehicle.manufacturer}</p>
                `; // Met à jour l'élément HTML avec les détails du véhicule
            }
        })
        .catch(error => {
            console.error(`Erreur lors de la récupération du véhicule ${vehicleId}:`, error); // Affiche l'erreur dans la console
            if (element) {
                element.innerHTML = `<p>Erreur lors du chargement des détails du véhicule ${vehicleId}.</p>`; // Met à jour l'élément HTML avec un message d'erreur
            }
        });
}

// Fonction pour afficher une liste de véhicules
function displayVehiclesList(page, element) {
    getVehicles({ page }) // Appel de la fonction pour récupérer la liste des véhicules
        .then(data => {
            if (element && data.results) { // Vérifie si l'élément HTML existe et si des résultats sont retournés
                element.innerHTML = ''; // Efface le contenu précédent de l'élément HTML
                data.results.forEach(vehicle => { // Parcourt les résultats (la liste des véhicules)
                    const listItem = document.createElement('li'); // Crée un élément <li> pour chaque véhicule
                    listItem.textContent = vehicle.name; // Définit le texte du <li> avec le nom du véhicule
                    element.appendChild(listItem); // Ajoute le <li> à la liste (<ul>)
                });
            }
        })
        .catch(error => {
            console.error(`Erreur lors de la récupération de la page ${page} des véhicules:`, error); // Affiche l'erreur dans la console
            if (element) {
                element.innerHTML = `<li>Erreur lors du chargement de la liste des véhicules.</li>`; // Met à jour l'élément HTML avec un message d'erreur
            }
        });
}

// Affichage des détails des véhicules
displayVehicleDetails(4, vehicleDetails4Div); // Affiche les détails du véhicule 4 dans l'élément HTML correspondant
displayVehicleDetails(8, vehicleDetails8Div); // Affiche les détails du véhicule 8 dans l'élément HTML correspondant
displayVehicleDetails(6, vehicleDetails6Div); // Affiche les détails du véhicule 6 dans l'élément HTML correspondant

// Affichage des listes de véhicules
displayVehiclesList(1, firstVehiclesListUl); // Affiche la liste des véhicules de la page 1 dans l'élément HTML correspondant
displayVehiclesList(2, secondVehiclesListUl); // Affiche la liste des véhicules de la page 2 dans l'élément HTML correspondant
