document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = "http://localhost:3000/etudiants"; // Remplacez par l'URL appropriée
    const tableBody = document.getElementById('table-body');
    const searchInput = document.getElementById('search');
    const searchBtn = document.getElementById('search-btn');
    const filterClassSelect = document.getElementById('filter-class');
    const filterFieldSelect = document.getElementById('filter-field');
    const filterClassBtn = document.getElementById('filter-class-btn');
    const filterFieldBtn = document.getElementById('filter-field-btn');
    const addStudentButton = document.getElementById('add-year-button');

    // Fonction pour afficher la liste des étudiants
    function renderTable(etudiants) {
        tableBody.innerHTML = ''; // Clear the table body
        etudiants.forEach(etudiant => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="py-3 px-6 border-r">${etudiant.nom}</td>
                <td class="py-3 px-6 border-r">${etudiant.prenom}</td>
                <td class="py-3 px-6 border-r">${etudiant.classe}</td>
                <td class="py-3 px-6 border-r">${etudiant.filiere}</td>
                <td class="py-3 px-6 text-center">
                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg">Voir détails</button>
                    
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Fonction pour récupérer les étudiants depuis l'API
    function fetchEtudiants() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => renderTable(data))
            .catch(error => console.error('Erreur lors de la récupération des Etudiants:', error));
    }

    // Fonction pour rechercher un étudiant
    function searchEtudiant() {
        const query = searchInput.value.trim();
        fetch(`${apiUrl}?nom=${query}`)
            .then(response => response.json())
            .then(data => renderTable(data))
            .catch(error => console.error('Erreur lors de la recherche de l\'étudiant:', error));
    }

    // Fonction pour filtrer les étudiants par classe
    function filterByClass() {
        const selectedClass = filterClassSelect.value;
        fetch(`${apiUrl}?classe=${selectedClass}`)
            .then(response => response.json())
            .then(data => renderTable(data))
            .catch(error => console.error('Erreur lors du filtrage par classe:', error));
    }

    // Fonction pour filtrer les étudiants par filière
    function filterByField() {
        const selectedField = filterFieldSelect.value;
        fetch(`${apiUrl}?filiere=${selectedField}`)
            .then(response => response.json())
            .then(data => renderTable(data))
            .catch(error => console.error('Erreur lors du filtrage par filière:', error));
    }

    // Ajouter un étudiant (ici vous pouvez ajouter une logique pour ouvrir un formulaire d'ajout)
    function addStudent() {
        window.location.href = '/chemin/vers/ajouter/etudiant'; // Remplacez par l'URL d'ajout
    }

    // Écouteur d'événements pour la recherche
    searchBtn.addEventListener('click', searchEtudiant);

    // Écouteur d'événements pour les filtres
    filterClassBtn.addEventListener('click', filterByClass);
    filterFieldBtn.addEventListener('click', filterByField);

    // Écouteur d'événements pour ajouter un étudiant
    addStudentButton.addEventListener('click', addStudent);

    // Initialiser l'affichage des étudiants lors du chargement de la page
    fetchEtudiants();
});



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
