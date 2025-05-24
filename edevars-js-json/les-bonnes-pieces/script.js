const sectionFiches = document.querySelector('.fiches');

function creerFichePiece(piece) {
  const article = document.createElement('article');
  const nomElement = document.createElement('h2');
  nomElement.innerText = piece.nom;

  const prixElement = document.createElement('p');
  prixElement.innerText = `Prix : ${piece.prix} €`;

  const categorieElement = document.createElement('p');
  categorieElement.innerText = `Catégorie : ${piece.categorie}`;

  const descriptionElement = document.createElement('p');
  descriptionElement.innerText = piece.description || 'Pas de description.';

  const disponibiliteElement = document.createElement('p');
  disponibiliteElement.innerText = piece.disponibilite ? 'Disponible' : 'Non disponible';

  article.appendChild(nomElement);
  article.appendChild(prixElement);
  article.appendChild(categorieElement);
  article.appendChild(descriptionElement);
  article.appendChild(disponibiliteElement);

  return article;
}

fetch('pieces-autos.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(piece => {
      const ficheElement = creerFichePiece(piece);
      sectionFiches.appendChild(ficheElement);
    });
  })
  .catch(error => {
    console.error('Erreur lors de la récupération du JSON:', error);
  });