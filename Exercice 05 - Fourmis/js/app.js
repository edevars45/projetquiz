/*********/
/* Tests */
/*********/
console.log("Test Fourmi");
let uneFourmi = new Fourmi(1, 3.5);
console.log("age = " + uneFourmi.age + " | taille = " + uneFourmi.taille);
uneFourmi.dormir();
uneFourmi.manger("feuille");

console.log("\nTest Reine");
let uneReine = new Reine(2, 6);
console.log("age = " + uneReine.age + " | taille = " + uneReine.taille + " | oeufs = " + uneReine.nbOeufsPondus);
uneReine.pondre();
uneReine.pondre();
console.log("oeufs = " + uneReine.nbOeufsPondus);
uneReine.dormir();
uneReine.manger("fraise");

console.log("\nTest Male");
let unMale = new Male(3, 3.9);
console.log("age = " + unMale.age + " | taille = " + unMale.taille);
unMale.feconder();
unMale.voler();
unMale.dormir();
unMale.manger("pomme de pin");

console.log("\nTest Larve");
let uneLarve = new Larve(4, 2, "Male");
console.log("age = " + uneLarve.age + " | taille = " + uneLarve.taille + " | type = " + uneLarve.type);
uneLarve.metamorphose();
uneLarve.dormir();
uneLarve.manger("framboise");

console.log("\nTest Femelle");
let uneFemelle = new Femelle(5, 3.6);
console.log("age = " + uneFemelle.age + " | taille = " + uneFemelle.taille);
uneFemelle.chercherNourriture();
uneFemelle.dormir();
uneFemelle.manger("nuggets");

console.log("\nTest Princesse");
let unePrincesse = new Princesse(6, 3.3);
console.log("age = " + unePrincesse.age + " | taille = " + unePrincesse.taille);
unePrincesse.voler();
unePrincesse.volNuptiale();
unePrincesse.chercherNourriture();
unePrincesse.dormir();
unePrincesse.manger("croquette");

console.log("\nTest Eclaireuse");
let uneEclaireuse = new Eclaireuse(7, 3.8);
console.log("age = " + uneEclaireuse.age + " | taille = " + uneEclaireuse.taille + " | rayon = " + uneEclaireuse.rayonAction);
uneEclaireuse.explorer();
uneEclaireuse.chercherNourriture();
uneEclaireuse.dormir();
uneEclaireuse.manger("mouche");

console.log("\nTest Soldat");
let unSoldat = new Soldat(8, 4, 100);
console.log("age = " + unSoldat.age + " | taille = " + unSoldat.taille + " | endurance = " + unSoldat.endurance);
unSoldat.attaquer();
unSoldat.chercherNourriture();
unSoldat.dormir();
unSoldat.manger("riz");

console.log("\nTest Ouvriere");
let uneOuvriere = new Ouvriere(9, 3.7, "entrée");
console.log("age = " + uneOuvriere.age + " | taille = " + uneOuvriere.taille + " | poste = " + uneOuvriere.poste);
uneOuvriere.creuserGalerie();
uneOuvriere.nettoyerGalerie();
uneOuvriere.chercherNourriture();
uneOuvriere.dormir();
uneOuvriere.manger("blé");

console.log("\nTest Nourrice");
let uneDeuxiemeLarve = new Larve(4.5, 2.1);
let uneNourrice = new Nourrice(10, 3.3, "nounou", [uneLarve, uneDeuxiemeLarve]);
console.log("age = " + uneOuvriere.age + " | taille = " + uneNourrice.taille + " | poste = " + uneOuvriere.poste);
console.log("Première larve : age = " + uneNourrice.listeLarves[0].age + " | taille = " + uneNourrice.listeLarves[0].taille);
console.log("Deuxième larve : age = " + uneNourrice.listeLarves[1].age + " | taille = " + uneNourrice.listeLarves[1].taille);
uneNourrice.creuserGalerie();
uneNourrice.nettoyerGalerie();
uneNourrice.chercherNourriture();
uneNourrice.dormir();
uneNourrice.manger("riz");
console.log("Méthodes de la première larve");
uneNourrice.listeLarves[0].metamorphose();
uneNourrice.listeLarves[0].dormir();
uneNourrice.listeLarves[0].manger("chocolat");
console.log("Méthodes de la deuxième larve");
uneNourrice.listeLarves[1].metamorphose();
uneNourrice.listeLarves[1].dormir();
uneNourrice.listeLarves[1].manger("bonbon");
