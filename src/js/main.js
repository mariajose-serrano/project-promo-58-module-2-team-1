"use strict";

console.log(">> Ready :)");

// QUERY SELECTOR:
// hemos llamado a las secciones
const designHide = document.querySelector(".js_designHide");
const fillHide = document.querySelector(".js_fillHide");
const shareHide = document.querySelector(".js_shareHide");

const colorArticle = document.querySelector(".js_colorArticle");
const fillArticle = document.querySelector(".js_fillArticle");
const shareArticle = document.querySelector(".js_shareArticle");

// QUERY SELECTOR - Formulario
const form = document.getElementById("profile-form");
const nameInput = document.getElementById("name");
const jobInput = document.getElementById("job");
const photoInput = document.getElementById("photo");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const linkedinInput = document.getElementById("linkedin");
const githubInput = document.getElementById("github");

// QUERY SELECTOR - Preview
const card = document.querySelector(".js_cardPreview"); // la tarjeta de preview que va a ir cambiando
const previewName = document.querySelector(".preview .nombre");
const paletteRadios = document.querySelectorAll('input[name="palette"]');
const previewJob = document.querySelector(".preview .rol");
const previewPhoto = document.querySelector(".preview .profile-img");
const previewPhone = document.querySelector(".preview .icons a:nth-child(1)");
const previewEmail = document.querySelector(".preview .icons a:nth-child(2)");
const previewLinkedin = document.querySelector(
  ".preview .icons a:nth-child(3)"
);
const previewGithub = document.querySelector(".preview .icons a:nth-child(4)");

// Objeto para almacenar los datos del usuario
let userData = {
  name: "",
  job: "",
  photo: "images/tech-girl-profile-photo-example.jpg",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  palette: "1",
};

// Función para actualizar la preview
function updatePreview() {
  // Actualizar nombre
  if (previewName) {
    if (userData.name) {
      previewName.textContent = userData.name;
    } else {
      previewName.textContent = "Nombre Apellido";
    }
  }

  // Actualizar puesto
  if (previewJob) {
    if (userData.job) {
      previewJob.textContent = userData.job;
    } else {
      previewJob.textContent = "Front-end developer";
    }
  }

  // Actualizar foto
  if (previewPhoto && userData.photo) {
    previewPhoto.src = userData.photo;
  }

  // Actualizar email
  if (previewEmail) {
    if (userData.email) {
      previewEmail.href = `mailto:${userData.email}`;
    } else {
      previewEmail.href = "#";
    }
  }

  // Actualizar teléfono
  if (previewPhone) {
    if (userData.phone) {
      previewPhone.href = `tel:${userData.phone}`;
    } else {
      previewPhone.href = "#";
    }
  }

  // Actualizar LinkedIn
  if (previewLinkedin) {
    if (userData.linkedin) {
      previewLinkedin.href = userData.linkedin;
    } else {
      previewLinkedin.href = "#";
    }
  }

  // Actualizar GitHub
  if (previewGithub) {
    if (userData.github) {
      previewGithub.href = userData.github;
    } else {
      previewGithub.href = "#";
    }
  }
}

// Función para cambiar la paleta de colores
function updatePalette() {
  if (!profileCard) return;

  // Remover todas las clases de paleta anteriores
  profileCard.classList.remove("palette-1", "palette-2", "palette-3");

  // Aplicar la nueva paleta
  profileCard.classList.add(`palette-${userData.palette}`);
}

// Función para leer archivos de imagen
function handlePhotoUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      userData.photo = e.target.result;
      updatePreview();
    };
    reader.readAsDataURL(file);
  }
}

// EVENTOS - Flechas (acordeón)
designHide.addEventListener("click", (ev) => {
  //hemos ocultado la primera seccion

  shareArticle.classList.add("collapsed");
  fillArticle.classList.add("collapsed");
  colorArticle.classList.remove("collapsed");
});

fillHide.addEventListener("click", (ev) => {
  //hemos ocultado la primera seccion
  colorArticle.classList.add("collapsed");
  shareArticle.classList.add("collapsed");
  fillArticle.classList.remove("collapsed");
});

shareHide.addEventListener("click", (ev) => {
  //hemos ocultado la primera seccion
  fillArticle.classList.add("collapsed");
  colorArticle.classList.add("collapsed");
  shareArticle.classList.remove("collapsed");
});

// EVENTOS - Formulario (actualización en tiempo real)
if (nameInput) {
  nameInput.addEventListener("keyup", (ev) => {
    userData.name = ev.target.value;
    updatePreview();
  });
}

if (jobInput) {
  jobInput.addEventListener("keyup", (ev) => {
    userData.job = ev.target.value;
    updatePreview();
  });
}

if (photoInput) {
  photoInput.addEventListener("change", handlePhotoUpload);
}

if (emailInput) {
  emailInput.addEventListener("keyup", (ev) => {
    userData.email = ev.target.value;
    updatePreview();
  });
}

if (phoneInput) {
  phoneInput.addEventListener("keyup", (ev) => {
    userData.phone = ev.target.value;
    updatePreview();
  });
}

if (linkedinInput) {
  linkedinInput.addEventListener("keyup", (ev) => {
    userData.linkedin = ev.target.value;
    updatePreview();
  });
}

if (githubInput) {
  githubInput.addEventListener("keyup", (ev) => {
    userData.github = ev.target.value;
    updatePreview();
  });
}

// QUERY SELECTOR - Paletas
const paletteInputs = document.querySelectorAll("input[name='palette']");

// QUERY SELECTOR - Botón Reset
const resetButton = document.querySelector(".reset-btn");

// QUERY SELECTOR - Elementos de la tarjeta para cambiar paleta
const profileCard = document.querySelector(".profile-card");

// Función para resetear el formulario y la preview
function resetForm() {
  userData = {
    name: "",
    job: "",
    photo: "images/tech-girl-profile-photo-example.jpg",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    palette: "1",
  };

  // Limpiar los inputs del formulario
  if (nameInput) nameInput.value = "";
  if (jobInput) jobInput.value = "";
  if (photoInput) photoInput.value = "";
  if (emailInput) emailInput.value = "";
  if (phoneInput) phoneInput.value = "";
  if (linkedinInput) linkedinInput.value = "";
  if (githubInput) githubInput.value = "";

  // Resetear paleta a 1 (por defecto)
  if (paletteInputs && paletteInputs[0]) {
    paletteInputs[0].checked = true;
  }

  // Actualizar la preview
  updatePreview();
  updatePalette();
}

// EVENTO - Cambio de paleta
paletteInputs.forEach((input) => {
  input.addEventListener("change", (ev) => {
    userData.palette = ev.target.value;
    updatePalette();
  });
});

// EVENTO - Botón Reset
if (resetButton) {
  resetButton.addEventListener("click", resetForm);
}

// Inicializar la preview
updatePreview();
updatePalette();

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
