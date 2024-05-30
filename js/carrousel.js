(function () {
  /*VARIABLES POUR L'OUVERTURE ET LA FERMETURE DU CARROUSEL*/
  let carrousel = document.querySelector(".carrousel");
  console.log("conteneur carrousel : " + carrousel.tagName);
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
    index = index + 1;
  }
  // Ajout des boutons radios après avoir ajouté toutes les images
  for (let i = 0; i < galerie__img.length; i++) {
    creer_radio_carrousel(i);
  }
  //Pouvoir afficher la première image dès l'ouverture du carrousel
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
    //Mettre la légende dans l'image de carrousel
    if (figcaption && figcaption.tagName === "FIGCAPTION") {
      let legende = document.createElement("figcaption");
      legende.classList.add("wp-element-caption");
      legende.textContent = figcaption.textContent; // Ajouter le texte de la légende
      legende.dataset.index = index; // Ajout de l'attribut data-index
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

      afficherImage(parseInt(carrousel__radio.dataset.index));
    });
  }

  /*SECTION OUVERTURE ET FERMETURE DU CARROUSEL*/

  /* Écouteur pour ouvrir la boîte modale lorsqu'on clique sur une image de la galerie*/
  let imagesGalerie = document.querySelectorAll(".wp-block-image img");
  console.log(imagesGalerie);
  let legendes = document.querySelectorAll(".wp-element-caption");
  console.log(legendes);
  let boutonsRadio = document.querySelectorAll(".carrousel__radio");

  // On récupère l'index de l'image dans le tableau
  imagesGalerie.forEach((img, index) => {
    img.dataset.index = index;
  });

  // On parcoure le tableau des images de la carte pour leur donner un écouteur d'événement qui permet d'ouvrir le carrousel
  for (let img of imagesGalerie) {
    img.addEventListener("click", function () {
      // On recupere l'index de l'image
      let index = parseInt(this.dataset.index);
      // console.log("l'index: " + index);

      // On affiche le carrousel
      carrousel.classList.add("carrousel--ouvrir");

      afficherImage(index);
      boutonsRadio[index].checked = true;
    });
  }

  /* Écouteur pour fermer la boîte modale */
  carrousel__x.addEventListener("mousedown", function () {
    carrousel.classList.remove("carrousel--ouvrir");
  });

  /*SECTION DÉFILEMENT IMAGES AVEC LES FLÈCHES DU CARROUSEL*/

  /*VARIABLES POUR LE DÉFILEMENT IMAGES AVEC LES FLÈCHES DU CARROUSEL*/

  let flecheSuivante = document.querySelector(".next-fleche");
  let flechePrecedente = document.querySelector(".prev-fleche");
  let images = document.querySelectorAll(".carrousel__img");
  let radios = document.querySelectorAll(".carrousel__radio");

  // Initialisation : mettre le premier bouton radio en tant que sélectionné
  radios[0].checked = true;

  //Ajout d'un écouteur d'événement pour pas que
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
    // Mettre à jour le bouton radio correspondant
    radios[index].checked = true;
    // Affichage de l'image correspondante
    afficherImage(index);
    console.log("Index de l'image sélectionnée : " + index);
    console.log("Index du bouton radio correspondant : " + index);
  });

  flechePrecedente.addEventListener("click", function () {
    // Décrémentation de l'index sans dépasser les limites du carrousel
    index = (index - 1 + images.length) % images.length;
    // Mettre à jour le bouton radio correspondant
    radios[index].checked = true;
    // Affichage de l'image correspondante
    afficherImage(index);
    console.log("Index de l'image sélectionnée : " + index);
    console.log("Index du bouton radio correspondant : " + index);
  });

  /* Fonction pour afficher l'image correspondant à l'index donné */
  function afficherImage(index) {
    let images = carrousel__figure.querySelectorAll(".carrousel__img");
    let captions = carrousel__figure.querySelectorAll(".wp-element-caption");

    // Réinitialisation de l'opacité de toutes les images à 0
    for (let i = 0; i < images.length; i++) {
      images[i].style.opacity = 0;
    }

    for (let caption of captions) {
      caption.style.display = "none";
    }

    // Définition de l'opacité de l'image sélectionnée à 1
    images[index].style.opacity = 1;

    // Vérification des légendes sélectionnées
    console.log("Nombre de légendes trouvées :", captions.length);
    for (let i = 0; i < captions.length; i++) {
      console.log("Index de la légende :", captions[i].dataset.index);
      if (captions[i].dataset.index == index) {
        console.log(
          "Légende trouvée pour l'image sélectionnée :",
          captions[i].textContent
        );
        captions[i].style.display = "flex";
        captions[i].style.justifyContent = "center"; // Centrer la légende
        captions[i].style.alignItems = "center"; // Centrer verticalement
      }
    }
  }

  //Ne pas voir toutes les légendes dès l'ouverture
  afficherImage(0);
})();
