// Code pour le menu de la barre latérale et les modals
  let sides = document.querySelectorAll(".side");
  let sidesArray = [...sides];
  console.log(sidesArray);
  
  const sidebar = document.getElementById("sidebar");
  const toggleButton = document.getElementById("toggle-sidebar");
  
  toggleButton.addEventListener("click", function () {
    // Ajoute ou retire la classe "reduced" pour réduire/restaurer le sidebar
    sidebar.classList.toggle("reduced");
  
    // Change le texte du bouton entre "x" et "≡" (ou icônes similaires)
    toggleButton.textContent = sidebar.classList.contains("reduced") ? " ≡ " : "x";
  });
  
  let modal = document.getElementById("modal");
  let button = document.getElementById("button");
  
  button.addEventListener("click", function () {
    // Cache les éléments de la sidebar
    for (let i = 0; i < sidesArray.length; i++) {
      sidesArray[i].style.display = "none";
    }
  });
  