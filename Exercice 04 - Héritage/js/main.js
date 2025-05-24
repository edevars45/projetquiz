import Person from './classes/Person.js';
import Professor from './classes/Professor.js';
import Student from './classes/Student.js';

testPerson();
testProfessor();
testStudent();

// Fonction de test pour la classe Person
function testPerson() {
    console.log("----- Test de la classe Person -----");
    const person = new Person("Dark", "Joanna", 30, "Femme", ["Voitures", "Gadgets", "Voyages"]);
    console.log("Prénom:", person.firstname);
    console.log("Nom:", person.lastname);
    console.log("Nom complet:", person.fullname);
    console.log("Âge:", person.age);
    console.log("Genre:", person.gender);
    console.log("Intérêts:", person.interests);
    console.log("Nombre d'intérêts:", person.nbInterests);
    console.log("Infos:", person.infos);
    console.log("Salutation:", person.greeting());
    console.log("Au revoir:", person.goodbye());

    person.firstname = "Gaston";
    person.lastname = "Lagaffe";
    person.age = 35;
    person.gender = "homme";
    person.addInterest("Dormir");
    person.addInterest("Cuisiner");
    person.removeInterest("Voyages");

    console.log("\n----- Après modifications -----");
    console.log("Prénom:", person.firstname);
    console.log("Nom:", person.lastname);
    console.log("Nom complet:", person.fullname);
    console.log("Âge:", person.age);
    console.log("Genre:", person.gender);
    console.log("Intérêts:", person.interests);
    console.log("Nombre d'intérêts:", person.nbInterests);
    console.log("Infos:", person.infos);
    console.log("Salutation:", person.greeting());
    console.log("Au revoir:", person.goodbye());
    console.log("-------------------------------\n");
}

// Fonction de test pour la classe Professor
function testProfessor() {
    console.log("----- Test de la classe Professor -----");
    const professor = new Professor("Jones", "Indiana", 79, "Homme", ["Voyage", "Trésors", "Fouet"], "Archéologie");
    const student = new Student("Prescott", "Sydney", 17, "Femme", ["Cinema", "Lecture", "Musique"], "1994", 17.3);
    console.log("Prénom:", professor.firstname);
    console.log("Nom:", professor.lastname);
    console.log("Nom complet:", professor.fullname);
    console.log("Âge:", professor.age);
    console.log("Genre:", professor.gender);
    console.log("Matière:", professor.subject);
    console.log("Intérêts:", professor.interests);
    console.log("Nombre d'intérêts:", professor.nbInterests);
    console.log("Infos:", professor.infos);
    console.log("Salutation:", professor.greeting());
    console.log("Silence:", professor.askForSilence());
    console.log("Au revoir:", professor.goodbye());
    console.log("Moyenne de l'étudiant:", student.average);

    professor.firstname = "Lara";
    professor.lastname = "Croft";
    professor.age = 25;
    professor.gender = "femme";
    professor.subject = "Sport";
    professor.addInterest("Armes à feu");
    professor.addInterest("Natation");
    professor.removeInterest("Fouet");
    professor.evaluate(student, 15);

    console.log("\n----- Après modifications -----");
    console.log("Prénom:", professor.firstname);
    console.log("Nom:", professor.lastname);
    console.log("Nom complet:", professor.fullname);
    console.log("Âge:", professor.age);
    console.log("Genre:", professor.gender);
    console.log("Matière:", professor.subject);
    console.log("Intérêts:", professor.interests);
    console.log("Nombre d'intérêts:", professor.nbInterests);
    console.log("Infos:", professor.infos);
    console.log("Salutation:", professor.greeting());
    console.log("Silence:", professor.askForSilence());
    console.log("Au revoir:", professor.goodbye());
    console.log("Moyenne de l'étudiant après évaluation:", student.average);
    console.log("-----------------------------------\n");
}

// Fonction de test pour la classe Student
function testStudent() {
    console.log("----- Test de la classe Student -----");
    const student = new Student("Prescott", "Sydney", 17, "Femme", ["Cinema", "Lecture", "Musique"], "1994", 17.3);
    console.log("Prénom:", student.firstname);
    console.log("Nom:", student.lastname);
    console.log("Nom complet:", student.fullname);
    console.log("Âge:", student.age);
    console.log("Genre:", student.gender);
    console.log("Intérêts:", student.interests);
    console.log("Nombre d'intérêts:", student.nbInterests);
    console.log("Numéro:", student.number);
    console.log("Moyenne:", student.average);
    console.log("Infos:", student.infos);
    console.log("Salutation:", student.greeting());
    student.sign();
    console.log("Au revoir:", student.goodbye());

    student.firstname = "Daniel";
    student.lastname = "LaRusso";
    student.age = 16;
    student.gender = "homme";
    student.number = "1984";
    student.average = 12.5;
    student.addInterest("Bonsaï");
    student.addInterest("Karaté");
    student.removeInterest("Lecture");

    console.log("\n----- Après modifications -----");
    console.log("Prénom:", student.firstname);
    console.log("Nom:", student.lastname);
    console.log("Nom complet:", student.fullname);
    console.log("Âge:", student.age);
    console.log("Genre:", student.gender);
    console.log("Intérêts:", student.interests);
    console.log("Nombre d'intérêts:", student.nbInterests);
    console.log("Numéro:", student.number);
    console.log("Moyenne:", student.average);
    console.log("Infos:", student.infos);
    console.log("Salutation:", student.greeting());
    student.sign();
    console.log("Au revoir:", student.goodbye());
    console.log("-------------------------------\n");
}