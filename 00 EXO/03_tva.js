//page pour 03_tva.html

//alert('coucou');

let prixHT = prompt('Le prix HT');
console.log(prixHT);

let prixTTC = prixHT * 1.20;
console.log(prixTTC);

alert('Le prix TTC est '+ prixTTC +'');

//let prixTTC = prompt('le prix TTC');
//console.log(calcul);

//alert('calcul');

document.getElementById('p1').innerHTML = 'résultat: Prix '+ prixHT +' HT pour un total de '+ prixTTC +' TTC';