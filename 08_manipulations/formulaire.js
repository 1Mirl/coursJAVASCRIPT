//page js pour formulaire.html
//! JS pour les deux formulaires 

//alert('coucou');

// contrôle du formulaire d'inscription avec une fonction inscriptionForm()

// récupérer le form par son id dans une variable
let formInscrip = document.getElementById('formulaireInscription');
console.log(formInscrip);



// écoute de l'envoie du formulaire 
formInscrip.addEventListener('submit', inscriptionForm);

// création de la fonction

function inscriptionForm(event) {
    event.preventDefault();

    // récupération du contenu des champs du formulaire
    // on cible dans des variables les value de tous les champs du form
    let prenom = event.target.prenom.value,
        nom = event.target.nom.value,
        email = event.target.email.value,
        mdp2 = event.target.mdp2.value,
        confmdp2 = event.target.confmdp2.value;

    console.log(prenom, nom, email, mdp2, confmdp2);

    //expression réguliére
    //https://regrex101.com/

    let regex = /([a-z0-9](\.?|\_|\-))*@([a-z0-9]{2,})(\.[a-z]{2,}){1,}/;
    //avant le @ on a le droit de mettre de a à z de 0 à 9 un . et _ et -
    //aprés @ il faut au minimum 2 caractères puis un . et de a à z et au minimum 2 caractères
    //let regex = new RegExp("([a-z0-9](\.?|\_|\-))*@([a-z0-9]{2,})(\.[a-z]{2,}){1,}");
    console.log(regex);

    //condition 1 prenom et nom ne sont pas vides et on vérifie la longueur
    // classList représente toute les classes de l'élément event.target
    // add ajoute une class à l'élément event.target
    // console.log(event.target.prenom.classList);

    if (prenom !== '' || nom !== ''){
        if (prenom.length < 2){
            // console.log(event.target.prenom.classList);
            // console.log(event.target);
            event.target.prenom.classList.add("error");
            event.target.prenom.classList.remove("valide");
        } else {
            event.target.prenom.classList.add("valide");
            event.target.prenom.classList.remove("error");
        }
        
        if (nom.length < 4){
            event.target.nom.classList.add("error");
            event.target.nom.classList.remove("valide");
        } else {
            event.target.nom.classList.add("valide");
            event.target.nom.classList.remove("error"); 
        }
    }//fin condition sur le nom et le prénom
    
    //condition 2 l'utilisateur a-t-il saisi le même mot de passe
    let placeH1 = document.getElementById('placeholder1')

    if(confmdp2 !== mdp2){//si les mots de passe sont différents
        //event.target.mdp2.classList.add("error");
        //event.target.mdp2.classList.remove("valide"); 
        //event.target.confmdp2.classList.add("error");
        //event.target.confmdp2.classList.remove("valide"); 
        placeH1.innerHTML = "Vos mots de passe doivent être identiques";
        placeH1.classList.add("rouge");
        document.getElementById('placeholder2').innerHTML = "Vos mots de passe doivent être identiques";
        document.getElementById('placehoder2').classList.add("rouge");
    }else if (mdp2.length < 8 || confmdp2.length > 15){//sinon si le mot de passe est trop court ou trop long
       // event.target.mdp2.classList.add("error");
       // event.target.mdp2.classList.remove("valide"); 
       // event.target.confmdp2.classList.add("error");
       // event.target.confmdp2.classList.remove("valide");
        alert('votre mot de passe est trop court ou trop long');
    } else {//et finalement s'ils respectent les 2 conditions : tout est bon
        event.target.mdp2.classList.add("valide");
        event.target.mdp2.classList.remove("error"); 
        event.target.confmdp2.classList.add("valide");
        event.target.confmdp2.classList.remove("error");
    }
    //if ((confmdp2 !== mdp2) || (mdp2.length < 5 || mdp2.length > 15)){
       // alert('pas bon');
    //}else{
    //    alert('ok');
    //}

    //utilisation de l'expression régulière
    //vérification si les caractères de l'email sont autorisés par l'expression réguliére
    console.log(regex.test(email));

    if (regex.test(email) === false){
        event.target.email.classList.add("error");
        event.target.email.classList.remove("valide");
    } else {
        event.target.email.classList.remove("error");
        event.target.email.classList.add("valide");
    }

}//fin fonction 2

//une fonction sur le clique du bouton effacer pour vider les inputs

document.getElementById('resetForm').addEventListener('click', function(event){
    event.target.form.prenom.value ='';
    event.target.form.nom.value ='';
    event.target.form.email.value ='';
    event.target.form.mdp2.value ='';
    event.target.form.confmdp2.value ='';
});//fin fonction reset