/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {
    // Récupération de la zone dans laquelle on va écrire le score
    let spanScore = document.querySelector(".zoneScore span");
    // Ecriture du texte
    let affichageScore = `${score} / ${nbMotsProposes}` ;
    // On place le texte à l'intérieur du span. 
    spanScore.innerText = affichageScore;
}

/**
 * Cette fonction affiche une proposition, que le joueur devra recopier, 
 * dans la zone "zoneProposition"
 * @param {string} proposition : la proposition à afficher
 */
function afficherProposition(proposition) {
    let zoneProposition = document.querySelector(".zoneProposition");
    zoneProposition.innerText = proposition;
}

/**
 * Cette fonction construit et affiche l'email. 
 * @param {string} nom : le nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : le score. 
 */
function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`;
    location.href = mailto;
}

/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * ici : deux caractères au minimum
 * Et lance une erreur si ce n'est pas le cas.
 * @param {string} nom 
 * @throws {Error}
 */
function validerNom(nom) {
    if (nom.length < 2) {
        throw new Error("Le nom est trop court. ");
    }
}

/**
 * Cette fonction prend un email en paramètre et valide qu'il est au bon format. 
 * Et lance une erreur si ce n'est pas le cas.
 * @param {string} email 
 * @throws {Error}
 */
function validerEmail(email) {
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
    if (!emailRegExp.test(email)) {
        throw new Error("L'email n'est pas valide.");
    }
}

/**
 * Cette fonction affiche le message d'erreur passé en paramètre. 
 * Si le span existe déjà, alors il est réutilisé pour ne pas multiplier
 * les messages d'erreurs. 
 * @param {string} message 
 */
function afficherMessageErreur(message) {
    
    // Récupère le span
    let spanErreurMessage = document.getElementById("erreurMessage")

    // Si le span n'existe pas encore
    if (spanErreurMessage === null) {
        // On récupère la popup
        let popup = document.querySelector(".popup");
        // On crée le span
        spanErreurMessage = document.createElement("span");
        spanErreurMessage.id = "erreurMessage";
        
        // On ajoute le span à la popup
        popup.append(spanErreurMessage);
    }
    
    // Définit le contenu textuel du span, càd le message d'erreur
    spanErreurMessage.innerText = message;
}

/**
 * Cette fonction permet de récupérer les informations dans le formulaire
 * de la popup de partage et d'appeler l'affichage de l'email avec les bons paramètres.
 * @param {string} scoreEmail 
 */
function gererFormulaire(scoreEmail) {
    try {
        // Récupère le nom
        let baliseNom = document.getElementById("nom");
        let nom = baliseNom.value;

        // Vérifie si le nom est valide
        validerNom(nom);
    
        // Récupère le mail
        let baliseEmail = document.getElementById("email");
        let email = baliseEmail.value;

        // Vérifie si le mail est valide
        validerEmail(email);
        // Efface le potentiel message d'erreur
        afficherMessageErreur("");
        // Prépare le mail
        afficherEmail(nom, email, scoreEmail);

    } catch(erreur) {
        // En cas d'erreur, affiche le message correspondant
        afficherMessageErreur(erreur.message);
    }
    
}

/**
 * Cette fonction lance le jeu. 
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu() {
    // Initialisations
    initAddEventListenerPopup();
    let score = 0;
    let i= 0;
    let listeProposition = listeMots;

    let btnValiderMot = document.getElementById("btnValiderMot");
    let inputEcriture = document.getElementById("inputEcriture");

    afficherProposition(listeProposition[i]);

    // Gestion de l'événement click sur le bouton "valider"
    btnValiderMot.addEventListener("click", () => {
        console.log(inputEcriture.value);
        // Si le mot saisi est identique au mot actuel de la liste
        if (inputEcriture.value === listeProposition[i]) {
            // Incrrémente le score
            score++;
        }
        // Incrémente le compteur de mot
        i++;
        // Affiche le résultat
        afficherResultat(score, i);
        // Vide la zone de saisie
        inputEcriture.value = '';
        // Si il n'y a plus de mots
        if (listeProposition[i] === undefined) {
            // Affiche un message indiquant le fin du jeu
            afficherProposition("Le jeu est fini");
            // On désactive le bouton de validation
            btnValiderMot.disabled = true;
        } else {
            // Affiche la proposition de mot
            afficherProposition(listeProposition[i]);
        }
    });

    // Gestion de l'événement change sur les boutons radios. 
    let listeBtnRadio = document.querySelectorAll(".optionSource input");
    for (let index = 0; index < listeBtnRadio.length; index++) {
        // Ajoute un écouteur sur chaque bouton radio
        listeBtnRadio[index].addEventListener("change", (event) => {
            // Si c'est le premier élément qui a été modifié, alors nous voulons
            // jouer avec la listeMots. 
            if (event.target.value === "1") {
                listeProposition = listeMots;
            } else {
                // Sinon nous voulons jouer avec la liste des phrases
                listeProposition = listePhrases;
            }
            // Et on modifie l'affichage en direct. 
            afficherProposition(listeProposition[i]);
        });
    }

    // Gestion de l'événement submit sur le formulaire de partage. 
    let form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
        event.preventDefault();
            let scoreEmail = `${score} / ${i}`;
            gererFormulaire(scoreEmail);
    });

    afficherResultat(score, i);
}