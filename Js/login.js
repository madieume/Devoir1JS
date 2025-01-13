
    document.addEventListener("DOMContentLoaded", function () {
      
        const form = document.querySelector("form");
      
        form.addEventListener("submit", function (e) {
            e.preventDefault(); 

           
            const login = document.getElementById("login").value.trim();
            const password = document.getElementById("password").value.trim();

           
            if (!login || !password) {
                alert("Veuillez remplir tous les champs !");
                return;
            }

        
            window.location.href = "annee.html"; 
        });
    });

