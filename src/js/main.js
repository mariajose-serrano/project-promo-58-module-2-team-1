"use strict";

console.log(">> Ready :)");

// QUERY SELECTOR:
// hemos llamado al evento felchas
const arrow1 = document.querySelector(".js_arrow1");
const arrow2 = document.querySelector(".js_arrow2");
const arrow3 = document.querySelector(".js_arrow3");

// hemos llamado al contenido que le afecta ese evento

const colorArticle = document.querySelector(".js_colorArticle");
const fillArticle = document.querySelector(".js_fillArticle");
const shareArticle = document.querySelector(".js_shareArticle");

// EVENTOS

arrow1.addEventListener("click", (ev) => {
  console.log("Holis!");
  //hemos ocultado la primera seccion
  colorArticle.classList.toggle("collapsed");
});

arrow2.addEventListener("click", (ev) => {
  //hemos ocultado la primera seccion
  fillArticle.classList.toggle("collapsed");
});

arrow3.addEventListener("click", (ev) => {
  //hemos ocultado la primera seccion
  shareArticle.classList.toggle("collapsed");
});
