//fichier 04_03_Return.html 

//alert('coucou');

function division(x,y){
    if (y == 0){
        return 'Division par 0 impossible';
    }else{
        return x / y;
        //ce code après return ne sera pas exécuté
        //alert('fin');
    } 
}

let nbr1 = prompt('Entrez un premier nombre à diviser');
let nbr2 = prompt('Entrez un second nombre qui divisera le premier');

let resultatDivision = division(nbr1, nbr2);
console.log(resultatDivision);

console.log(division(5,2));
document.getElementById('p1').innerHTML = nbr1 + ' divisé par '+ nbr2 +' ='+ resultatDivision;
console.log(typeof resultatDivision);

// remplacer le point par la virgule
console.log(typeof resultatDivision, resultatDivision);
//nelle variable pour contenir le passage de resultatDivision de number à string
let divisionString = resultatDivision.toString();// je change le number en string grâce à la fonction prédéfinie toString()
console.log(typeof divisionString, divisionString);//je fais un console log pour vérifier que cela marche 

let nellePhrase =  divisionString.replace('.',',');
document.getElementById('p2').innerHTML = nbr1 + ' divisé par ' + nbr2 + ' = ' + nellePhrase;

let divisionNumber = parseFloat(divisionString);
console.log(typeof divisionNumber, divisionNumber);





