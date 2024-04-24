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
  /*Création dynamique d'une image du carrousel*/
  // let carrousel__img = document.createElement("img");
  // carrousel__img.classList.add("carrousel__img");
  /*récupération de la première image*/
  /*let galerie__img = galerie.querySelector("img");
  console.log("première image de la galrie : " + galerie__img);
  carrousel__img.src = galerie__img.src;
  console.log("première image du carrousel: " + carrousel__img);
  carrousel__figure.appendChild(carrousel__img);
  console.log(carrousel__figure);*/

  /*Création dynamique d'une collection d'images dans le carrousel*/
  let galerie__img = galerie.querySelectorAll("img");
  console.log(galerie__img);
  for (const elm of galerie__img) {
    creer_image_carrousel(index, elm);
    index = index + 1;
  }

  /**
   * Créer l'image du carrousel à partir de la galerie
   * @param {*} index  le numéro de l'image
   * @param elm l'élément image de la galerie
   */
  function creer_image_carrousel(index, elm) {
    for (const elm of galerie__img) {
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
    function creer_radio_carroussel(index) {
      let carrousel__radio = document.createElement("input");
      //class
      //index
      //type
      //name
      //ajouter dans carrousel__form
    }
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
