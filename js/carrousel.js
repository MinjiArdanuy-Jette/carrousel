(function () {
  console.log("vive Javascript !");
  let carrousel = document.querySelector(".carrousel");
  console.log("conteneur carrousel : " + carrousel.tagName);
  let bouton = document.querySelector(".bouton_ouvrir");
  console.log("conteneur carrousel : " + bouton.tagName);
  let carrousel__x = document.querySelector(".carrousel__x");
  console.log("conteneur carrousel : " + carrousel__x.tagName);

  /* Écouteur pour ouvrir la boîte modale */
  bouton.addEventListener("mousedown", function () {
    carrousel.classList.add("carrousel--ouvrir");
  });
  /* Écouteur pour fermer la boîte modale */
  carrousel__x.addEventListener("mousedown", function () {
    carrousel.classList.remove("carrousel--ouvrir");
  });
})();
