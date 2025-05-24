// Sélection de l'élément image.
const monImage = document.getElementById('monImage');

// Ajout d'un écouteur d'événement mouseenter.
monImage.addEventListener('mouseenter', function() {
    // Application des styles lorsque la souris entre dans l'image.
    monImage.style.border = '5px dotted red';
    monImage.style.borderRadius = '10px'; // Ajustez la valeur pour l'arrondi des coins.
});

// Ajout d'un écouteur d'événement mouseleave.
monImage.addEventListener('mouseleave', function() {
    // Suppression des styles lorsque la souris quitte l'image.
    monImage.style.border = '';
    monImage.style.borderRadius = '';
});