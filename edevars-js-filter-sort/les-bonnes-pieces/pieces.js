// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

function afficherPieces(listeDePieces) {
    const sectionFiches = document.querySelector(".fiches");
    sectionFiches.innerHTML = "";
    for (let i = 0; i < listeDePieces.length; i++) {
        const piece = listeDePieces[i];
        const pieceElement = document.createElement("article");
        const imageElement = document.createElement("img");
        imageElement.src = piece.image;
        const nomElement = document.createElement("h2");
        nomElement.innerText = piece.nom;
        const prixElement = document.createElement("p");
        prixElement.innerText = `Prix: ${piece.prix} € (${piece.prix < 35 ? "€" : "€€€"})`;
        const categorieElement = document.createElement("p");
        categorieElement.innerText = piece.categorie ?? "(aucune catégorie)";
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = piece.description ?? "Pas de description pour le moment.";
        const stockElement = document.createElement("p");
        stockElement.innerText = piece.disponibilite ? "En stock" : "Rupture de stock";

        sectionFiches.appendChild(pieceElement);
        pieceElement.appendChild(imageElement);
        pieceElement.appendChild(nomElement);
        pieceElement.appendChild(prixElement);
        pieceElement.appendChild(categorieElement);
        pieceElement.appendChild(descriptionElement);
        pieceElement.appendChild(stockElement);
    }
}

// Affichage initial des pièces
afficherPieces(pieces);

// Gestion du tri par prix croissant
const boutonTrierCroissant = document.querySelector(".btn-trier-croissant");
boutonTrierCroissant.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort((a, b) => a.prix - b.prix);
    console.log("Bouton 'Trier par prix croissant' cliqué :", piecesOrdonnees); // Ajout du console.log
    afficherPieces(piecesOrdonnees);
});

// Gestion du filtre des pièces non abordables
const boutonFiltrerNonAbordables = document.querySelector(".btn-filtrer-non-abordables");
boutonFiltrerNonAbordables.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(piece => piece.prix > 35);
    console.log("Bouton 'Filtrer les pièces non abordables' cliqué :", piecesFiltrees); // Ajout du console.log
    afficherPieces(piecesFiltrees);
});

// Gestion du filtre par description
const boutonFiltrerDescription = document.querySelector(".btn-filtrer-description");
boutonFiltrerDescription.addEventListener("click", function () {
    const piecesAvecDescription = pieces.filter(piece => piece.description);
    console.log("Bouton 'Filtrer (avec description)' cliqué :", piecesAvecDescription);
    afficherPieces(piecesAvecDescription);
});

// Gestion du tri par prix décroissant
const boutonTrierDecroissant = document.querySelector(".btn-trier-decroissant");
boutonTrierDecroissant.addEventListener("click", function () {
    const piecesOrdonneesDecroissant = Array.from(pieces);
    piecesOrdonneesDecroissant.sort((a, b) => b.prix - a.prix);
    console.log("Bouton 'Trier par prix décroissant' cliqué :", piecesOrdonneesDecroissant);
    afficherPieces(piecesOrdonneesDecroissant);
});