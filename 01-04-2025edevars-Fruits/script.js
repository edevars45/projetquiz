const mainImage = document.getElementById('main-image');
const menuItems = document.querySelectorAll('.menu li');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Cacher l'image "all-fruits.jpg"
        mainImage.style.display = 'none';

        // Changer la source de l'image pour afficher le fruit sélectionné
        mainImage.src = item.dataset.image;

        // Réafficher l'image
        mainImage.style.display = 'block';
    });
});