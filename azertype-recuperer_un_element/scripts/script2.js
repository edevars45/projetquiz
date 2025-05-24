// console.log("coucou!");

// const bouton = document.getElementById("monBouton");

// console.log(bouton);

// bouton.addEventListener("click", function(event) { 
//     console.log("ma fonction anonyme: clic");
//     console.log(event);
//     console.log(event.target);
// });


// bouton.addEventListener("click", e =>  { 
//     console.log("ma fonction anonyme: clic");
//     console.log(e);
//     console.log(e.target);
// });

// const para =document.createElement("p");
// para.textContent = "blabla";
// document.querySelector('body').appendChild(para);

// para.addEventListener("dblclick", e => { 
//     e.target.style.color = "red";
// });

// function maFonction() {
//     console.log("bonjour");
// }

// let maFonctionAnonyme = function() {
//     console.log("fin du script");
// };
console.log("Coucou !");
 
const bouton = document.getElementById("monBouton");
 
console.log(bouton);
 
bouton.addEventListener("click", function (event) {

    console.log("Ma fonction anonyme : clic");

    console.log(event);

    console.log(event.target);

});
 
bouton.addEventListener("click", e => {

    console.log("Ma fonction fléchée : clic");

    console.log(e);

    console.log(e.target);
 
 
    const para = document.createElement("p");

    para.textContent = "balbalabla";

    document.querySelector('body').appendChild(para);
 
    const newLocal = "dblclick";
    para.addEventListener(newLocal, e => {

        e.target.style.color = "red";

    });
 
});
 

// let fonctionAnonyme = function() {
//   console.log("ma fonction anonyme");
// }
//inserer  un élément et lui indiquer si c'est avant apre avant la cible (cible l'element de départ)
// const nouvPara = document.createElement("p");
// nouvPara.textContent = "nouveau paragraphe";

// const div = document.querySelector("div");

// div.appendChild(nouvPara);

// let paragraphe = document.querySelectorAll('div p');


// paragraphe[1].parentNode.insertBefore(nouvPara, paragraphe[1])
//adjacent = a cote de


// paragraphe[0].insertAdjacentElement('afterend', nouvPara);
// paragraphe[1].insertAdjacentElement('afterbegin', nouvPara);

// const paragraphe = document.querySelector('.salutation: last-child');

// paragraphe.innerHTML = "<strong> blablabla </strong>";
// //modifier les attribut qui on html  des classes autant u'ont veut
// paragraphe.id = "monDeuxièmeparagraphe";

// paragraphe.class = "maclasse";

// console.log(paragraphe)



