document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Exemple de validation simple
    if (username === "" || password === "") {
      alert("Veuillez remplir tous les champs.");
    } else {
      alert("Connexion réussie !");
      // Vous pouvez envoyer les informations à un serveur ici
    }
  });
  