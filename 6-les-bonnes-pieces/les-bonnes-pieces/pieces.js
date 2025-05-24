// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();
// Création des balises 
const article = pieces[0];
const imageElement = document.createElement("img");
imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
const descriptionElements =  document.createElement("p");
descriptionElements.innerText = article.description ?? "pas de description pour le moment";
const texteArticle = document.createElement('p');
console.log(article.disponibilite)
texteArticle.innerText = article.disponibilite ? "En stock" : "Rupture de stock";

if (article.disponibilite === true) {
article.disponibilite = "En stock"  
} else {
    article.disponibilite = "En rupture de stock"
};


//Rattachement de nos balises au DOM
const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(descriptionElements);
sectionFiches.appendChild(texteArticle);