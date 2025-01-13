document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('table-body');
    const filterInput = document.getElementById('moduler-filter'); // Champ de filtre
    const filterButton = document.getElementById('filter-button'); // Bouton OK
    const addYearButton = document.getElementById('add-year-button'); // Bouton Ajouter un module
    

    const apiUrl = 'http://localhost:3000/Modules'; // URL pour récupérer les modules
    let modules = [];
    const itemsPerPage = 3; // Nombre d'éléments par page
    let currentPage = 1;

    // Fonction pour charger les modules depuis db.json
    const loadModules = async () => {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Erreur : ${response.statusText}`);
            }
            modules = await response.json();
            renderTable(modules);
        } catch (error) {
            console.error("Erreur lors du chargement des modules :", error);
        }
    };

    // Fonction pour afficher les modules dans le tableau
    const renderTable = (data) => {
        tableBody.innerHTML = ''; // Vider le tableau avant de le remplir
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        const paginatedData = data.slice(startIndex, endIndex);

        paginatedData.forEach((module) => {
            const row = document.createElement('tr');
            row.classList.add('border-b', 'hover:bg-gray-100');
            row.innerHTML = `
                <td class="py-3 px-6 text-left border-r">${module.libelle}</td>
                <td class="py-3 px-6 text-center">
                    <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Modifier
                    </button>
                    <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                        Supprimer
                    </button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    };

    // Fonction pour changer la page
    const changePage = (direction) => {
        const totalPages = Math.ceil(modules.length / itemsPerPage);
        currentPage = Math.max(1, Math.min(currentPage + direction, totalPages));
        renderTable(modules);
    };

    // Aller à une page spécifique
    const goToPage = (page) => {
        const totalPages = Math.ceil(modules.length / itemsPerPage);
        currentPage = Math.max(1, Math.min(page, totalPages));
        renderTable(modules);
    };

    // Fonction pour filtrer les modules
    const filterModules = (filterText) => {
        const filteredModules = modules.filter((module) =>
            module.libelle.toLowerCase().includes(filterText.toLowerCase())
        );
        currentPage = 1; // Réinitialiser à la première page
        renderTable(filteredModules);
    };

    // Gestionnaire d'événement pour le bouton de filtre
    filterButton.addEventListener('click', () => {
        const filterText = filterInput.value.trim();
        filterModules(filterText);
    });

    // Gestionnaire d'événement pour le bouton Ajouter un module
    addYearButton.addEventListener('click', async () => {
        const newModule = prompt("Entrez le libellé du nouveau module :");
        if (newModule) {
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ libelle: newModule }),
                });
                if (response.ok) {
                    loadModules(); // Recharger les modules après ajout
                } else {
                    console.error("Erreur lors de l'ajout du module :", response.statusText);
                }
            } catch (error) {
                console.error("Erreur lors de l'ajout du module :", error);
            }
        }
    });

    // Initialiser l'affichage
    loadModules();

    // Gestionnaire pour les boutons de pagination
    window.changePage = changePage;
    window.goToPage = goToPage;
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
