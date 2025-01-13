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


let modal = document.getElementById("modal");
  let button = document.getElementById("button");
  // let sidebar = document.getElementById("sidebar");
  // let toggleButton = document.getElementById("toggleButton");

  button.addEventListener("click", function () {
    // sidebar.style.display = "none";
    // toggleButton.style.display = "block";
    for (let i = 0; i < sidesArray.length; i++) {
      sidesArray[i].style.display = "none";
      
    }
  });


  

  