document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = "http://localhost:3000/annees";  // Remplacez par l'URL appropriée
    const tableBody = document.getElementById('table-body');
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        tableBody.innerHTML = ''; // Supprimer les lignes existantes
  
        data.forEach(annee => {
          const row = `
            <tr>
              <td class="py-3 px-6 text-left">${annee.annee}</td>
              <td class="py-3 px-6 text-left">${annee.statut}</td>
              <td class="py-3 px-6 text-center">
                <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onclick="showDetails(${annee.id})">
                  Voir les détails
                </button>
              </td>
            </tr>
          `;
          tableBody.innerHTML += row;
        });
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
        tableBody.innerHTML = `
          <tr>
            <td colspan="3" class="text-center text-red-500">Impossible de charger les données.</td>
          </tr>
        `;
      });
  });
  
  // Fonction pour afficher les détails dans un modal
function showDetails(id) {
    // Remplacez cette partie par vos propres données, ou récupérez-les d'une autre manière
    const data = {
        details: {
            date_debut: '01/01/2024',
            date_fin: '31/12/2024',
            description: 'Année scolaire 2024'
        }
    };

    // Mise à jour des éléments du modal avec les données
    document.getElementById('modal-date-debut').textContent = `Date de début: ${data.details.date_debut}`;
    document.getElementById('modal-date-fin').textContent = `Date de fin: ${data.details.date_fin}`;
    document.getElementById('modal-description').textContent = `Description: ${data.details.description}`;
    
    // Affiche le modal
    document.getElementById('details-modal').classList.remove('hidden');
}

  // Fonction pour fermer le modal
  function closeModal() {
    // Masquer le modal
    document.getElementById('details-modal').classList.add('hidden');
  }

  // Exemple d'appel pour ouvrir le modal avec des détails d'une année
  // Cela pourrait être déclenché par un événement comme un clic sur un bouton ou une ligne de tableau
  document.querySelectorAll('.details-btn').forEach(button => {
    button.addEventListener('click', function() {
      const anneeDetails = {
        date_debut: '2023-09-01',
        date_fin: '2024-07-15',
        description: 'Année scolaire normale avec deux semestres.'
      };
      openModal(anneeDetails);
    });
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


let sides = document.querySelectorAll(".side");

let sidesArray = [...sides]
console.log(sidesArray);

const sidebar = document.getElementById("sidebar");
const toggleButton = document.getElementById("toggle-sidebar");

toggleButton.addEventListener("click", function () {
    // Ajoute ou retire la classe "reduced" pour réduire/restaurer le sidebar
    sidebar.classList.toggle("reduced");

    // Change le texte du bouton entre "x" et "≡" (ou icônes similaires)
    toggleButton.textContent = sidebar.classList.contains("reduced") ? " ≡ " : "x";
});


// Récupérer les éléments du DOM
const modal = document.getElementById('modal1');
const addYearButton = document.getElementById('add-year-button');
const closeModalButton = document.getElementById('close-modal');
const addYearForm = document.getElementById('add-year-form');

// Fonction pour afficher le modal
function openModal() {
    modal.classList.remove('hidden');
}

// Fonction pour fermer le modal
function closeModal() {
    modal.classList.add('hidden');
}

// Event listener pour ouvrir le modal lorsque le bouton est cliqué
addYearButton.addEventListener('click', openModal);

// Event listener pour fermer le modal lorsque le bouton "Annuler" est cliqué
closeModalButton.addEventListener('click', closeModal);

// Event listener pour soumettre le formulaire
addYearForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Empêcher la soumission normale du formulaire

    const yearInput = document.getElementById('year-input').value;
    const statusInput = document.getElementById('status-input').value;

    if (yearInput && statusInput) {
        // Vous pouvez ajouter ici le code pour envoyer les données au serveur ou ajouter la ligne dans le tableau
        console.log(`Année: ${yearInput}, Statut: ${statusInput}`);
        
        // Fermer le modal après l'enregistrement
        closeModal();
    } else {
        alert("Veuillez remplir tous les champs.");
    }
});



// Récupérer les éléments du DOM
const filterInput = document.getElementById('status-filter');
const filterButton = document.getElementById('filter-button');

// Fonction pour filtrer les lignes du tableau par statut
function filterItems() {
    const filterText = filterInput.value.toLowerCase(); // Récupérer le texte du champ de filtre et le mettre en minuscule

    // Sélectionner toutes les lignes du tableau (toutes les lignes sauf l'en-tête)
    const rows = document.querySelectorAll('tbody tr'); 

    rows.forEach(row => {
        // Récupérer la cellule contenant le statut (2ème colonne)
        const statutCell = row.cells[1]; 

        // Vérifier si le texte du filtre correspond au statut
        if (statutCell.textContent.toLowerCase().includes(filterText)) {
            row.style.display = ''; // Afficher la ligne si le statut correspond
        } else {
            row.style.display = 'none'; // Cacher la ligne si le statut ne correspond pas
        }
    });
}

// Event listener pour le bouton de filtre
filterButton.addEventListener('click', filterItems);

// Optionnel : déclencher la fonction de filtre à chaque fois que l'utilisateur tape dans le champ
filterInput.addEventListener('input', filterItems);



let currentPage = 1;
const rowsPerPage = 3; // Nombre de lignes par page

// Fonction pour changer de page (Précédent ou Suivant)
function changePage(direction) {
    currentPage += direction;
    if (currentPage < 1) currentPage = 1;
    if (currentPage > 3) currentPage = 3; // Assurez-vous d'avoir assez de pages
    showPage(currentPage);
}

// Fonction pour aller directement à une page spécifique
function goToPage(page) {
    currentPage = page;
    showPage(page);
}

// Fonction pour afficher la page correspondante
function showPage(page) {
    const rows = document.querySelectorAll('#data-table tbody tr');
    
    // Masquer toutes les lignes
    rows.forEach(row => {
        row.style.display = 'none';
    });

    // Calculer les indices des lignes à afficher
    const start = (page - 1) * rowsPerPage;
    const end = page * rowsPerPage;

    // Afficher les lignes pour la page courante
    const rowsToShow = Array.from(rows).slice(start, end);
    rowsToShow.forEach(row => {
        row.style.display = ''; // Afficher la ligne
    });

    // Mettre à jour l'état des boutons de pagination
    for (let i = 1; i <= 3; i++) {
        const pageButton = document.getElementById(`page-${i}`);
        if (i === page) {
            pageButton.classList.add('bg-blue-600', 'text-white');
            pageButton.classList.remove('hover:bg-gray-200');
        } else {
            pageButton.classList.remove('bg-blue-600', 'text-white');
            pageButton.classList.add('hover:bg-gray-200');
        }
    }
}

// Initialiser la première page
showPage(currentPage);
