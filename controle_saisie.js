document.getElementById("login").addEventListener("submit", function (e) {
    
    e.preventDefault();

    var myRegex = /^[a-zA-Z-\s]+$/;
    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");
    var idError = document.getElementById("idError");

    // Clear previous errors
    usernameError.innerHTML = "";
    passwordError.innerHTML = "";
    idError.innerHTML = "";

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var id = document.getElementById("id").value;

    if (!username) {
        usernameError.innerHTML = "Veuillez renseigner un Username";
    } else if (!myRegex.test(username) || /\d/.test(username)) {
        usernameError.innerHTML = "Le nom d'utilisateur ne doit pas contenir de chiffres";
    }

    if (!password) {
        passwordError.innerHTML = "Veuillez renseigner un mot de passe";
    }

    if (!id) {
        idError.innerHTML = "Veuillez renseigner un ID";
    } else if (id.length > 8) {
        idError.innerHTML = "La longueur maximale de l'ID est de 8 caractères";
    }

    if (usernameError.innerHTML || passwordError.innerHTML || idError.innerHTML) {
        // If there are specific errors, prevent the form submission
        return false;
    } else {
        alert('Formulaire envoyé !');
    }
});
