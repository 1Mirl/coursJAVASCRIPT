//fichier 03_06_précédente.html 

//alert('coucou');

let auteur = 'victor Hugo';

let utilisateur = {//ici on a une variable objet
    //nom, email, adresses, age sont des propriétés de l'objet utilisateur
    //nom : ici nous avons des propriétés qui sont dans un tableau, un "array" qui commence à 0
    nom : ['Victor', 'Marie', 'Hugo'],//un array > indices : 0, 1, 2
    age : 2,
    email : 'totor@hugo.fr',
    adresse : 'Besançon',

    //une méthode qui est un peu comme une fonction
    bonjour: function() {
        alert('Bonjour J\'ai ' + this.age + ' ans et mon nom est ' + this.nom[0] + '' + this.nom[1] + '' + this.nom[2]);
    }
}

console.info(typeof utilisateur, utilisateur);
utilisateur.bonjour();