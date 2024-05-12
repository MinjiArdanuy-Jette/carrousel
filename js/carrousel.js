(function () {
  console.log("vive Javascript !");

  /*VARIABLES POUR L'OUVERTURE ET LA FERMETURE DU CARROUSEL*/
  let carrousel = document.querySelector(".carrousel");
  console.log("conteneur carrousel : " + carrousel.tagName);
  let bouton = document.querySelector(".bouton_ouvrir");
  console.log("conteneur carrousel : " + bouton.tagName);
  let carrousel__x = document.querySelector(".carrousel__x");
  console.log("conteneur carrousel : " + carrousel__x.tagName);

  /*VARIABLES POUR AFFICHER LES IMAGES DE LA GALERIE DANS CARROUSEL*/
  let galerie = document.querySelector(".galerie");
  console.log("conteneur carrousel : " + galerie.tagName);
  let index = 0;

  let carrousel__figure = document.querySelector(".carrousel__figure");
  let carrousel__form = document.querySelector(".carrousel__form");

  /*Création dynamique d'une collection d'images dans le carrousel*/
  let galerie__img = galerie.querySelectorAll("img");
  console.log(galerie__img);
  for (const elm of galerie__img) {
    creer_image_carrousel(index, elm);
    // creer_radio_carrousel(index);
    index = index + 1;
  }
  // Ajout des boutons radios après avoir ajouté toutes les images
  for (let i = 0; i < galerie__img.length; i++) {
    creer_radio_carrousel(i);
  }
  //Pouvoir afficher la première image dàs l'ouverture du carrousel
  carrousel__figure.querySelector(".carrousel__img").style.opacity = 1;

  /**
   * Créer l'image du carrousel à partir de la galerie
   * @param {*} index  le numéro de l'image
   * @param elm l'élément image de la galerie
   */
  function creer_image_carrousel(index, elm) {
    let carrousel__img = document.createElement("img");
    carrousel__img.classList.add("carrousel__img");
    let figureEntoure = document.createElement("figure");
    let figcaption = elm.nextElementSibling; // Récupérer la légende de l'image

    carrousel__img.src = elm.src;
    /*Ajout d'un index pour chaque image*/
    carrousel__img.dataset.index = index;
    figureEntoure.appendChild(carrousel__img);

    if (figcaption && figcaption.tagName === "FIGCAPTION") {
      let legende = document.createElement("figcaption");
      legende.classList.add("wp-element-caption");
      legende.textContent = figcaption.textContent; // Ajouter le texte de la légende
      figureEntoure.appendChild(legende);
    }

    carrousel__figure.appendChild(figureEntoure);
  }

  /**
   * Création d'un radio bouton du carrousel
   * @param {*} index  le numéro du radio
   */
  function creer_radio_carrousel(index) {
    let carrousel__radio = document.createElement("input");
    // class
    carrousel__radio.classList.add("carrousel__radio");
    // index
    carrousel__radio.dataset.index = index;
    // type
    carrousel__radio.setAttribute("type", "radio");
    // name
    carrousel__radio.setAttribute("name", "carrousel__radio");
    // ajouter dans carrousel__form
    carrousel__form.appendChild(carrousel__radio);
    //Ajouter écouteur pour changer opacité de l'image
    carrousel__radio.addEventListener("click", function () {
      let indexChoisi = carrousel__radio.dataset.index;
      let images = document.querySelectorAll(".carrousel__img");

      // Réinitialiser l'opacité de toutes les images à 0
      for (let i = 0; i < images.length; i++) {
        images[i].style.opacity = 0;
      }

      // Définir l'opacité de l'image sélectionnée à 1
      images[indexChoisi].style.opacity = 1;
    });
  }

  /*SECTION OUVERTURE ET FERMETURE DU CARROUSEL*/

  /* Écouteur pour ouvrir la boîte modale */
  bouton.addEventListener("mousedown", function () {
    carrousel.classList.add("carrousel--ouvrir");
  });
  /* Écouteur pour fermer la boîte modale */
  carrousel__x.addEventListener("mousedown", function () {
    carrousel.classList.remove("carrousel--ouvrir");
  });
})();

/*SECTION DÉFILEMENT IMAGES AVEC LES FLÈCHES DU CARROUSEL*/

/*VARIABLES POUR LE DÉFILEMENT IMAGES AVEC LES FLÈCHES DU CARROUSEL*/

let flecheSuivante = document.querySelector(".next-fleche");
let flechePrecedente = document.querySelector(".prev-fleche");
let index = 0;
let images = document.querySelectorAll(".carrousel__img");
let radios = document.querySelectorAll(".carrousel__radio");

// Initialisation : mettre le premier bouton radio en tant que sélectionné
radios[0].checked = true;

//Ajout d'un écouteur d'évnement pour pas que
//l'image revienne en arrière si on alterne l'utilisation des boutons radios et des flèches afin de changer l'image
for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener("click", function () {
    // Mettre à jour l'index pour refléter le bouton radio sélectionné
    index = i;
    // Afficher l'image correspondante
    afficherImage(index);
  });
}

flecheSuivante.addEventListener("click", function () {
  // Incrémentation de l'index sans dépasser les limites du carrousel
  index = (index + 1) % images.length;
  // Affichage de l'image correspondante
  afficherImage(index);
  // Mettre à jour le bouton radio correspondant
  radios[index].checked = true;
});

flechePrecedente.addEventListener("click", function () {
  // Décrémentation de l'index sans dépasser les limites du carrousel
  index = (index - 1 + images.length) % images.length;
  // Affichage de l'image correspondante
  afficherImage(index);
  // Mettre à jour le bouton radio correspondant
  radios[index].checked = true;
});

/* Fonction pour afficher l'image correspondant à l'index donné */
function afficherImage(index) {
  let images = document.querySelectorAll(".carrousel__img");
  let captions = document.querySelectorAll(".wp-element-caption");

  // Réinitialisation de l'opacité de toutes les images à 0
  for (let i = 0; i < images.length; i++) {
    images[i].style.opacity = 0;
    captions[i].style.display = "none";
  }

  // Définition de l'opacité de l'image sélectionnée à 1
  images[index].style.opacity = 1;
  captions[index].style.display = "flex";
}
//Ne pas voir toutes les légendes dès l'ouverture
afficherImage(0);
