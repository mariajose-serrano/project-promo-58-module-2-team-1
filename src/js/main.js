"use strict";

console.log(">> Ready :)");

// QUERY SELECTOR:
// hemos llamado al evento flechas
const arrow1 = document.querySelector(".js_arrow1");
const arrow2 = document.querySelector(".js_arrow2");
const arrow3 = document.querySelector(".js_arrow3");

// hemos llamado al contenido que le afecta ese evento

const colorArticle = document.querySelector(".js_colorArticle");
const fillArticle = document.querySelector(".js_fillArticle");
const shareArticle = document.querySelector(".js_shareArticle");

// llamar al preview

const card = document.querySelector(".js_cardPreview"); // la tarjeta de preview que va a ir cambiando
const paletteRadios = document.querySelectorAll('input[name="palette"]'); // devuelve todos los radios que coinciden

// EVENTOS

//1.Eventos para toggle

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

//2.Preview colores

// Función con condicionales
function applyPalette(value) {
  card.classList.remove("palette-1", "palette-2", "palette-3"); // quitamos paletas anteriores
  if (value === "1") {
    card.classList.add("palette-1");
  } else if (value === "2") {
    card.classList.add("palette-2");
  } else if (value === "3") {
    card.classList.add("palette-3");
  }
}

paletteRadios.forEach((radio) => {
  radio.addEventListener("click", function () {
    applyPalette(this.value); // this.value es '1' | '2' | '3'
  });
});
