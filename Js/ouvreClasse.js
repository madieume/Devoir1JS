// URL de l'API
const apiUrl = 'http://localhost:3000/ouvreClasse';

// Références aux éléments DOM
const tableBody = document.getElementById('table-body');
const addYearButton = document.getElementById('add-year-button');
const addModuleModal = document.getElementById('add-module-modal');
const addModuleForm = document.getElementById('add-module-form');
const filterInput = document.getElementById('moduler-filter');
const filterButton = document.getElementById('filter-button');
const cancelButton = document.getElementById('cancel-button');

// Charger les classes depuis l'API
const loadClasses = async () => {
    try {
        const response = await fetch(apiUrl);
        const classes = await response.json();
        displayClasses(classes);
    } catch (error) {
        console.error('Erreur lors du chargement des classes :', error);
    }
};

// Afficher les classes dans le tableau
const displayClasses = (classes) => {
    tableBody.innerHTML = ''; // Efface les lignes existantes
    classes.forEach((classe) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="py-3 px-6 text-left border-r">${classe.nom}</td>
            <td class="py-3 px-6 text-left border-r">${classe.idNiveau}</td>
            <td class="py-3 px-6 text-center">
                <button class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600" onclick="listStudents(${classe.id})">
                    Lister Étudiants
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
};

// Filtrer les classes
filterButton.addEventListener('click', async () => {
    const filterValue = filterInput.value.toLowerCase();
    try {
        const response = await fetch(apiUrl);
        const classes = await response.json();
        const filteredClasses = classes.filter((classe) =>
            classe.nom.toLowerCase().includes(filterValue)
        );
        displayClasses(filteredClasses);
    } catch (error) {
        console.error('Erreur lors du filtrage des classes :', error);
    }
});

// Ouvrir le modal pour ajouter une classe
addYearButton.addEventListener('click', () => {
    addModuleModal.classList.remove('hidden');
});

// Annuler et cacher le modal
cancelButton.addEventListener('click', () => {
    addModuleModal.classList.add('hidden');
    addModuleForm.reset();
});

// Ajouter une nouvelle classe
addModuleForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newClass = {
        nom: document.getElementById('nom').value,
        idNiveau: document.getElementById('btnAdd').value,
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newClass),
        });

        if (response.ok) {
            loadClasses(); // Recharge les classes
            addModuleModal.classList.add('hidden');
            addModuleForm.reset();
        } else {
            console.error('Erreur lors de l’ajout de la classe :', response.statusText);
        }
    } catch (error) {
        console.error('Erreur lors de l’ajout de la classe :', error);
    }
});

// Fonction "Lister Étudiants"
const listStudents = (classId) => {
    alert(`Liste des étudiants pour la classe ID : ${classId}`);
    // Implémentez ici l'appel pour charger les étudiants d'une classe spécifique
};

// Charger les classes au démarrage
loadClasses();


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
