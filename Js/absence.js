async function fetchAbsences() {
    try {
        const response = await fetch("http://localhost:3000/absences");
        const absences = await response.json();

        const tableBody = document.getElementById("table-body");
        tableBody.innerHTML = ""; 

        absences.forEach((absence) => {
            const row = `
                <tr class="border-b border-gray-200 hover:bg-gray-100">
                    <td class="py-3 px-6 text-left">${absence.dateAbs}</td>
                    <td class="py-3 px-6 text-left">${absence.idEtudiant}</td>
                    <td class="py-3 px-6 text-left">${absence.idSeance}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    } catch (error) {
        console.error("Erreur lors de la récupération des absences:", error);
    }
}

fetchAbsences();



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
    sidebar.classList.toggle("reduced");

    toggleButton.textContent = sidebar.classList.contains("reduced") ? " ≡ " : "x";
});


let modal = document.getElementById("modal");
  let button = document.getElementById("button");
 

  button.addEventListener("click", function () {
   
    for (let i = 0; i < sidesArray.length; i++) {
      sidesArray[i].style.display = "none";
      
    }
  });
