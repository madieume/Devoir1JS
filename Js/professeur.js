document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = "http://localhost:3000/professeurs";  // Remplacez par l'URL appropriée
    const tableBody = document.getElementById('table-body');
    
    // Fonction pour récupérer les professeurs depuis l'API
    const fetchProfesseurs = async () => {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des professeurs');
            }
            const professeurs = await response.json();
            renderTable(professeurs);
        } catch (error) {
            console.error(error);
            tableBody.innerHTML = "<tr><td colspan='5' class='text-center text-red-500'>Erreur de chargement des données</td></tr>";
        }
    };

    // Fonction pour afficher les données dans le tableau
    const renderTable = (professeurs) => {
        tableBody.innerHTML = '';  // Vider le tableau avant de le remplir
        professeurs.forEach(prof => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="py-3 px-6 border-r">${prof.nom}</td>
                <td class="py-3 px-6 border-r">${prof.prenom}</td>
                <td class="py-3 px-6 border-r">${prof.specialite}</td>
                <td class="py-3 px-6 border-r">${prof.grade}</td>
                <td class="py-3 px-6 text-center">
                    <button class="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">Modifier</button>
                    <button class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 ml-2">Supprimer</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    };

    // Appeler la fonction pour charger les données
    fetchProfesseurs();
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
