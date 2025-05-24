document.addEventListener("DOMContentLoaded", () => {
    // Sélection des éléments du DOM
    const tirerBtn = document.getElementById("tirerBtn");
    const numerosContainer = document.getElementById("numeros");
    const etoilesContainer = document.getElementById("etoiles");
    const verifierBtn = document.getElementById("verifierBtn");
    const messageDiv = document.getElementById("message");

    // Fonction pour créer un élément span avec une classe donnée
    function creerElement(className) {
        const element = document.createElement("span");
        element.className = className;
        return element;
    }

    // Fonction pour tirer des nombres uniques dans une plage donnée
    function tirerNombreUnique(nombre, max) {
        const resultats = [];
        while (resultats.length < nombre) {
            const nouveauNombre = Math.ceil(Math.random() * max);
            if (!resultats.includes(nouveauNombre)) {
                resultats.push(nouveauNombre);
            }
        }
        return resultats.sort((a, b) => a - b);
    }

    // Fonction pour tirer les numéros et les étoiles du tirage
    function tirerResultats() {
        const numerosTires = tirerNombreUnique(5, 50);
        const etoilesTirees = tirerNombreUnique(2, 12);
        return { numerosTires, etoilesTirees };
    }

    // Fonction pour afficher les résultats du tirage avec animation
    function afficherResultats(numeros, etoiles) {
        numerosContainer.innerHTML = "";
        etoilesContainer.innerHTML = "";

        // Affichage des numéros avec animation progressive
        numeros.forEach((numero, index) => {
            setTimeout(() => {
                const numeroElement = creerElement("numero");
                numeroElement.textContent = numero;
                numeroElement.classList.add("animate");
                numerosContainer.appendChild(numeroElement);
            }, index * 200);
        });

        // Affichage des étoiles avec animation progressive (décalée après les numéros)
        etoiles.forEach((etoile, index) => {
            setTimeout(() => {
                const etoileElement = creerElement("etoile");
                etoileElement.textContent = etoile;
                etoileElement.classList.add("animate");
                etoilesContainer.appendChild(etoileElement);
            }, (index + 5) * 200);
        });
    }

    // Fonction pour créer les champs de saisie pour les numéros et étoiles de l'utilisateur
    function creerChampsSaisie() {
        const userNumbersDiv = document.querySelector(".user-numbers");
        userNumbersDiv.innerHTML = ""; // Efface les champs existants
        for (let i = 1; i <= 5; i++) {
            userNumbersDiv.appendChild(creerChampSaisie(`numero${i}`, `N${i}`));
        }
        for (let i = 1; i <= 2; i++) {
            userNumbersDiv.appendChild(creerChampSaisie(`etoile${i}`, `E${i}`));
        }
    }

    // Fonction utilitaire pour créer un champ de saisie
    function creerChampSaisie(id, placeholder) {
        const input = document.createElement("input");
        input.type = "number";
        input.id = id;
        input.placeholder = placeholder;
        return input;
    }

    // Fonction pour vérifier les résultats de l'utilisateur par rapport au tirage
    function verifierResultats(numerosTires, etoilesTirees) {
        const numerosUtilisateur = [];
        const etoilesUtilisateur = [];

        // Récupération des numéros et étoiles saisis par l'utilisateur
        for (let i = 1; i <= 5; i++) {
            const numeroInput = document.getElementById(`numero${i}`);
            if (numeroInput && numeroInput.value) {
                numerosUtilisateur.push(parseInt(numeroInput.value));
            } else {
                messageDiv.innerHTML = "<div class='error'>Veuillez saisir 5 numéros valides.</div>";
                return;
            }
        }
        for (let i = 1; i <= 2; i++) {
            const etoileInput = document.getElementById(`etoile${i}`);
            if (etoileInput && etoileInput.value) {
                etoilesUtilisateur.push(parseInt(etoileInput.value));
            } else {
                messageDiv.innerHTML = "<div class='error'>Veuillez saisir 2 étoiles valides.</div>";
                return;
            }
        }

        // Comptage des numéros et étoiles gagnants
        const numerosGagnants = numerosUtilisateur.filter((numero) => numerosTires.includes(numero));
        const etoilesGagnantes = etoilesUtilisateur.filter((etoile) => etoilesTirees.includes(etoile));

        // Affichage du message de résultat
        if (numerosGagnants.length === 5 && etoilesGagnantes.length === 2) {
            messageDiv.innerHTML = `<div class="fireworks"> Vous avez gagné le tirage de l'Euromillions du ${new Date().toLocaleDateString()} ! </div>`;
        } else {
            messageDiv.innerHTML = `<div class="sad"> Désolé, c'est pas pour cette fois... retente ta chance ! </div>`;
        }
    }

    // Gestionnaires d'événements
    tirerBtn.addEventListener("click", () => {
        const { numerosTires, etoilesTirees } = tirerResultats();
        afficherResultats(numerosTires, etoilesTirees);
    });

    verifierBtn.addEventListener("click", () => {
        const numerosTires = Array.from(numerosContainer.querySelectorAll(".numero")).map((span) => parseInt(span.textContent));
        const etoilesTirees = Array.from(etoilesContainer.querySelectorAll(".etoile")).map((span) => parseInt(span.textContent));
        verifierResultats(numerosTires, etoilesTirees);
    });

    // Initialisation
    creerChampsSaisie();

    // Logique du jeu (tirage de numéros uniques)
    const uniqueNumbers = [];
    while (uniqueNumbers.length < 5) {
        let newNumber = Math.ceil(Math.random() * 50);
        if (uniqueNumbers.indexOf(newNumber) === -1) {
            uniqueNumbers.push(newNumber);
        }
    }
    console.log(uniqueNumbers);
});