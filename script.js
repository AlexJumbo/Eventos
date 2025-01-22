// Obtener referencias a los elementos
const togglePanelBtn = document.getElementById("toggle-panel");
const configPanel = document.getElementById("config-panel");
const titleInput = document.getElementById("title-input");
const pageTitle = document.getElementById("page-title");
const bgColorInput = document.getElementById("bg-color-input");
const commentsToggle = document.getElementById("comments-toggle");
const commentsArea = document.getElementById("comments-area");
const itemList = document.getElementById("item-list");

// Mostrar/Ocultar panel de configuración
togglePanelBtn.addEventListener("click", () => {
  const isHidden = configPanel.classList.toggle("hidden");
  togglePanelBtn.textContent = isHidden ? "Mostrar Panel" : "Ocultar Panel";
});

// Cambiar el título de la página
titleInput.addEventListener("input", (event) => {
  pageTitle.textContent = event.target.value || "Título de la Página";
});

// Cambiar el color de fondo
bgColorInput.addEventListener("input", (event) => {
  document.body.style.backgroundColor = event.target.value;
});

// Habilitar/Deshabilitar comentarios
commentsToggle.addEventListener("change", (event) => {
  commentsArea.disabled = !event.target.checked;
});

// Eliminar elementos de la lista
itemList.addEventListener("click", (event) => {
  if (event.target.classList.contains("list-item")) {
    event.target.remove();
  }
});