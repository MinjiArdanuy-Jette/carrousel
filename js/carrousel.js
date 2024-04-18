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

  let carrousel__figure = document.querySelector(".carrousel__figure");
  /*Création dynamique d'une image du carrousel*/
  let carrousel__img = document.createElement("img");
  carrousel__img.classList.add("carrousel__img");
  /*récupération de la première image*/
  let galerie__img = galerie.querySelector("img");
  console.log("première image de la galrie : " + galerie__img);
  carrousel__img.src = galerie__img.src;
  console.log("première image du carrousel: " + carrousel__img);
  carrousel__figure.appendChild(carrousel__img);
  console.log(carrousel__figure);

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
