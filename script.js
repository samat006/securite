document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Exemple de validation simple
    if (username === "" || password === "") {
      alert("Veuillez remplir tous les champs.");
    } else {
      fetch("http://localhost:3000/clicks", {
        method: "POST"
      })
        .then(res => res.json())
        .then(data => {
          console.log("Nombre total de clics :", data.clicks);
          alert("il ya pas de cooperation cest just pour voir le nombre d'etudaint qui tombe sur le piege. nombre d'etudiant : " + data.clicks);
        })
        .catch(err => console.error("Erreur côté client :", err));    }

    
  });
  


