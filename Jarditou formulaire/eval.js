document.getElementById("formulaire").addEventListener("submit", function (e) {
    e.preventDefault();

    /// Variables pour les messages d'erreur
    var erreur1 = "";
    var erreur2 = "";
    var erreur3 = "";
    var erreur4 = "";
    var erreur5 = "";
    var erreur6 = "";
    var erreur7 = "";
    var erreur8 = "";
    var erreur9 = "";

    // Récupération des éléments du formulaire
    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
    var sexe_f = document.getElementsByTagName("sexe_f");
    var sexe_m = document.getElementById("sexe_m")
    var Date = document.getElementById("date");
    var cp = document.getElementById("cp");
    var sujet = document.getElementById("sujet");
    var question = document.getElementById("question");
    var check = document.getElementById("check");

    // Modèles pour le nom et prénom (lettres uniquement sans espaces)
    var nomPrenomPattern = /^[A-Za-z]+$/;

    // Modèle pour l'adresse e-mail
    var emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;


    // Vérification des champs obligatoires
    if (!check.checked) {
        erreur9 = "Veuillez accepter les conditions de traitement";
    }

    if (!question.value) {
        erreur8 = "Veuillez entrer votre question";
    }

    if (sujet.value === "") {
        erreur7 = "Veuillez sélectionner un sujet";
    }

    if (!email.value){
        erreur6 = "Veuillez entrez votre addresse mail"
    }else if (!email.value.match(emailPattern)) {
        erreur6 = "Veuillez entrer une adresse e-mail valide";}

    if (!/^\d{5}$/.test(cp.value)) {
        erreur5 = "Veuillez renseigner un code postal valide (5 chiffres)";
    }
    if (!Date.value){
        erreur4 = "Veuillez entrez votre date de naissance";
    }


    if (!sexe_f.checked && !sexe_m.checked){
        erreur3 = "Veuillez renseigner votre sexe";
    }
    
    if (!prenom.value) {
        erreur2 = "Veuillez renseigner votre prenom";
    } else if (!prenom.value.match(nomPrenomPattern)) {
        erreur1 = "Veuillez renseigner un prénom valide (lettres uniquement)";
    }
    if (!nom.value) {
        erreur1 = "Veuillez renseigner votre nom";
    } else if (!nom.value.match(nomPrenomPattern)) {
        erreur2 = "Veuillez renseigner un nom valide (lettres uniquement)";
    }
    // Affichage des messages d'erreur
    document.getElementById("erreur9").textContent = erreur9;
    document.getElementById("erreur8").textContent = erreur8;
    document.getElementById("erreur7").textContent = erreur7;
    document.getElementById("erreur6").textContent = erreur6;
    document.getElementById("erreur5").textContent = erreur5;
    document.getElementById("erreur4").textContent = erreur4;
    document.getElementById("erreur3").textContent = erreur3;
    document.getElementById("erreur2").textContent = erreur2;
    document.getElementById("erreur1").textContent = erreur1;

    // Soumission du formulaire si tout est valide
    if (!erreur1 && !erreur2 && !erreur3 && !erreur4 && !erreur5 && !erreur6 && !erreur7 && !erreur8 && !erreur9) {
        alert("Demande envoyée !");}
    }
    );