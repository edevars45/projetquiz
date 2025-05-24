// Fonction pour vérifier si une date est valide
function checkDate(day, month, year) {
    const months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]; // Tableau des mois
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Tableau du nombre de jours par mois
  
    // Vérifie si l'année est bissextile pour février
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      daysInMonth[1] = 29; // Si bissextile, février a 29 jours
    }
  
    // Vérifie si le mois est valide
    const monthIndex = months.indexOf(month.toLowerCase()); // Trouve l'index du mois (insensible à la casse)
    if (monthIndex === -1) {
      return false; // Si le mois n'est pas trouvé, la date est invalide
    }
  
    // Vérifie si le jour est valide pour le mois donné
    if (day < 1 || day > daysInMonth[monthIndex]) {
      return false; // Si le jour est hors limites, la date est invalide
    }
  
    return true; // Si toutes les vérifications passent, la date est valide
  }
  
  // Fonction pour effectuer des tests automatisés de la fonction checkDate()
  function testCheckDate() {
    console.log("Tests checkDate :");
    console.log("01 janvier 2023 :", checkDate(1, "janvier", 2023) === true);
    console.log("29 février 2024 (bissextile) :", checkDate(29, "février", 2024) === true);
    console.log("29 février 2023 (non bissextile) :", checkDate(29, "février", 2023) === false);
    console.log("31 avril 2023 :", checkDate(31, "avril", 2023) === false);
    console.log("15 invalid 2023 :", checkDate(15, "invalid", 2023) === false);
    console.log("32 janvier 2023 :", checkDate(32, "janvier", 2023) === false);
  }
  
  testCheckDate(); // Exécute les tests au chargement de la page
  
  // Fonction appelée lors du clic sur le bouton "Vérifier"
  function validateDate() {
    const day = parseInt(document.getElementById("day").value); // Récupère le jour saisi et le convertit en nombre
    const month = document.getElementById("month").value; // Récupère le mois saisi
    const year = parseInt(document.getElementById("year").value); // Récupère l'année saisie et la convertit en nombre
    const result = checkDate(day, month, year); // Appelle la fonction checkDate() pour vérifier la date
    document.getElementById("result").textContent = result ? "Date valide" : "Date invalide"; // Affiche le résultat dans le paragraphe "result"
  }