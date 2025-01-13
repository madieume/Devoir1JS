document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById("table-body");
    const jsonUrl = "http://localhost:3000/classes"; // Remplacez par l'URL de votre JSON Server
  
    // Fonction pour récupérer les données
    async function fetchClasses() {
      try {
        const response = await fetch(jsonUrl);
        if (!response.ok) throw new Error("Erreur lors de la récupération des données.");
        const classes = await response.json();
  
        // Effacer le contenu actuel de la table
        tableBody.innerHTML = "";
  
        // Parcourir et ajouter chaque classe dans la table
        classes.forEach((classe) => {
          const row = document.createElement("tr");
  
          row.innerHTML = `
            <td class="py-3 px-6 border-b">${classe.id}</td>
            <td class="py-3 px-6 border-b">${classe.nom}</td>
            <td class="py-3 px-6 border-b">${classe.idNiveau}</td>
            <td class="py-3 px-6 border-b text-center">
              <button class="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600" onclick="viewDetails(${classe.id})">
                Voir
              </button>
              <button class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600" onclick="editClass(${classe.id})">
                Modifier
              </button>
              <button class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600" onclick="deleteClass(${classe.id})">
                Supprimer
              </button>
            </td>
          `;
  
          tableBody.appendChild(row);
        });
      } catch (error) {
        console.error("Erreur:", error);
        tableBody.innerHTML = `<tr><td colspan="4" class="text-center text-red-500">Erreur de chargement des données.</td></tr>`;
      }
    }
  
    // Exemple de fonction pour afficher les détails (vous pouvez adapter selon vos besoins)
    window.viewDetails = function (id) {
      alert(`Afficher les détails de la classe avec ID: ${id}`);
    };
  
    // Exemple de fonction pour modifier une classe
    window.editClass = function (id) {
      alert(`Modifier la classe avec ID: ${id}`);
    };
  
    // Exemple de fonction pour supprimer une classe
    window.deleteClass = function (id) {
      if (confirm("Voulez-vous vraiment supprimer cette classe ?")) {
        fetch(`${jsonUrl}/${id}`, { method: "DELETE" })
          .then((response) => {
            if (!response.ok) throw new Error("Erreur lors de la suppression.");
            alert("Classe supprimée avec succès !");
            fetchClasses(); // Recharger les données après suppression
          })
          .catch((error) => console.error("Erreur de suppression:", error));
      }
    };
  
    // Charger les données au démarrage
    fetchClasses();
  });
  


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



const user = {
  id: 1,
  matricule: "etu001",
  nomComplet: "Aminata Fall",
  adresse: "dakar",
  login: "afall",
  mdp: "mdp123",
  idClasse: 1
};

document.getElementById('user-name').textContent = user.nomComplet;
document.getElementById('user-name-display').textContent = user.nomComplet;
document.getElementById('user-matricule').textContent = `Matricule: ${user.matricule}`;
document.getElementById('user-address').textContent = `Adresse: ${user.adresse}`;
document.getElementById('user-login').textContent = `Login: ${user.login}`;


function toggleProfileMenu() {
  const menu = document.getElementById('profile-menu');
  menu.classList.toggle('hidden');
}


function logout() {
 
  window.location.href = "connexion.html";
}