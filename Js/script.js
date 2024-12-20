
async function fetchCours() {
    try {
        
        const response = await fetch("http://localhost:3000/cours");
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }
        const cours = await response.json();

     
        const tableBody = document.getElementById("table-body");
        tableBody.innerHTML = ""; 

       
        cours.forEach((cour) => {
            const row = document.createElement("tr");
            row.className = "border-b border-gray-200  dark:border-gray-700 ";

            row.innerHTML = `
                <td class="py-3 px-6 text-left">${cour.dateCours}</td>
                <td class="py-3 px-6 text-left">${cour.idClasse}</td>
                <td class="py-3 px-6 text-left">${cour.idSemestre}</td>
                <td class="py-3 px-6 text-left">${cour.idProfesseur}</td>
                <td class="py-3 px-6 text-center">
                    <button onclick="openModal('${cour.dateCours}', '${cour.idProfesseur}')"
                        class="bg-blue-600 text-white font-medium px-3 py-1 rounded hover:bg-blue-700">
                        Voir Séances
                    </button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Erreur lors de la récupération des cours :", error);
        alert("Une erreur s'est produite lors du chargement des cours.");
    }
}

function openModal(dateCours, idProfesseur) {
    alert(`Date du cours : ${dateCours}\nID du professeur : ${idProfesseur}`);
}


fetchCours();


const seancesData = {
    "seances": [
        { "id": 1, "date": "2024-01-01", "heureDebut": "08:00", "heureFin": "10:00", "idCours": 1 },
        { "id": 2, "date": "2024-01-15", "heureDebut": "10:00", "heureFin": "12:00", "idCours": 2 },
        { "id": 3, "date": "2024-02-01", "heureDebut": "14:00", "heureFin": "16:00", "idCours": 3 },
        { "id": 4, "date": "2024-02-15", "heureDebut": "16:00", "heureFin": "18:00", "idCours": 4 },
        { "id": 5, "date": "2024-03-01", "heureDebut": "18:00", "heureFin": "20:00", "idCours": 5 }
    ]
};


function openModal() {
    
    document.getElementById('seance-modal').classList.remove('hidden');
    
  
    const seance1 = seancesData.seances.find(seance => seance.id === 1);
    
    
    const seanceContent = `
        <div class="mb-3" id="seance-${seance1.id1}">
            <h3>Séance ${seance1.id}</h3>
            <p><strong>Date:</strong> ${seance1.date}</p>
            <p><strong>Heure de début:</strong> ${seance1.heureDebut}</p>
            <p><strong>Heure de fin:</strong> ${seance1.heureFin}</p>
            <p><strong>ID Cours:</strong> ${seance1.idCours}</p>
            <hr class="my-2">
        </div>
    `;
    
    
    document.getElementById('seances-list').innerHTML = seanceContent;
}


function closeModal() {
    document.getElementById('seance-modal').classList.add('hidden');
}




const semestres = [
    { "nom": "semestre 1", "etat": "en cours" },
    {  "nom": "semestre 2", "etat": "terminé" },
    {  "nom": "semestre 3", "etat": "planifié" },
    {  "nom": "semestre 4", "etat": "en cours" }
];


function displaySemesters(semestres) {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = ""; 

    semestres.forEach(semester => {
        const row = document.createElement("tr");
        
        const idCell = document.createElement("td");
        idCell.textContent = semester.id;
        
        const nameCell = document.createElement("td");
        nameCell.textContent = semester.nom;
        
        const stateCell = document.createElement("td");
        stateCell.textContent = semester.etat;
        
        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(stateCell);
        
        tableBody.appendChild(row);
    });
}


function filterSemesters() {
    const filterValue = document.getElementById("semester-filter").value.trim().toLowerCase();
    const filteredSemesters = semestres.filter(semester => {
        return semester.etat === "en cours" && semester.nom.toLowerCase().includes(filterValue);
    });

    displaySemesters(filteredSemesters);
}


displaySemesters(semestres);


document.getElementById("filter-button").addEventListener("click", filterSemesters);





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