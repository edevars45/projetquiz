const listeApprenants = [
    "Sophie FONFEK",
    "Guy TARE",
    "Jessica SEROLLE",
    "Beth TIOLE",
    "Maude ZARELLA",
    "Debby SCOTT",
    "Lara LEUZE",
    "Oussama LAIRBON",
    "Elie COPTAIRE",
    "Alonso BISTRAU",
    "Aude JAVELLE",
    "Gérard MENSOIF"
];

const card = document.getElementById("card");
const boutonAEffacer = document.getElementById("ButtonToDelete");

boutonAEffacer.addEventListener("click", function( event ) {
    card.classList.toggle('flip');
});