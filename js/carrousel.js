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

  /**
   * Créer l'image du carrousel à partir de la galerie
   * @param {*} index  le numéro de l'image
   * @param elm l'élément image de la galerie
   */
  function creer_image_carrousel(index, elm) {
    let carrousel__img = document.createElement("img");
    carrousel__img.classList.add("carrousel__img");
    carrousel__img.src = elm.src;
    /*Ajout d'un index pour chaque image*/
    carrousel__img.dataset.index = index;
    carrousel__figure.appendChild(carrousel__img);
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
