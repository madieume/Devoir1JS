// Sélectionnez le corps de la table
const tableBody = document.getElementById('table-body');
const searchBar = document.getElementById('search-bar');

let allEtudiants = [];

// Fonction pour charger les étudiants depuis le serveur
async function fetchEtudiants() {
    try {
        const response = await fetch('http://localhost:3000/etudiants');
        if (!response.ok) {
            throw new Error('Erreur lors du chargement des étudiants');
        }
        allEtudiants = await response.json();

        // Appelle la fonction pour afficher les étudiants
        afficherEtudiants(allEtudiants);
    } catch (error) {
        console.error(error);
    }
}

// Fonction pour afficher les étudiants dans le tableau
function afficherEtudiants(etudiants) {
    // Vider le contenu précédent du tableau
    tableBody.innerHTML = '';

    // Boucler sur les étudiants et créer les lignes
    etudiants.forEach((etudiant) => {
        const row = document.createElement('tr');
        row.className = 'border-b hover:bg-gray-100';

        row.innerHTML = `
            <td class="py-3 px-6 border-r">${etudiant.id}</td>
            <td class="py-3 px-6 border-r">${etudiant.nom}</td>
            <td class="py-3 px-6 border-r">${etudiant.prenom}</td>
            <td class="py-3 px-6 border-r">${etudiant.classe}</td>
            <td class="py-3 px-6 border-r">${etudiant.filiere}</td>
            <td class="py-3 px-6 text-center">
                <button class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700">Modifier</button>
                <button class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700" onclick="supprimerEtudiant(${etudiant.id})">Supprimer</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}




// Charger les étudiants au démarrage
document.addEventListener('DOMContentLoaded', fetchEtudiants);


function rechercherEtudiants(event) {
    const query = event.target.value.toLowerCase();

    // Filtrer les étudiants en fonction de la recherche
    const resultats = allEtudiants.filter((etudiant) => {
        return (
            etudiant.nom.toLowerCase().includes(query) ||
            etudiant.prenom.toLowerCase().includes(query) ||
            etudiant.classe.toLowerCase().includes(query) ||
            etudiant.filiere.toLowerCase().includes(query)
        );
    });

    // Afficher les résultats filtrés
    afficherEtudiants(resultats);
}

// Ajouter un écouteur pour la barre de recherche
searchBar.addEventListener('input', rechercherEtudiants);




document.addEventListener('DOMContentLoaded', () => {

    // Sélection des éléments
const addStudentBtn = document.getElementById('add-student-btn');
const modal = document.getElementById('add-student-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const addStudentForm = document.getElementById('add-student-form');

// Ouvrir le modal
addStudentBtn.addEventListener('click', () => {
alert('ok');
});



  
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