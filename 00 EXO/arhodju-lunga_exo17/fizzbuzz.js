//   correction: cf: fizz buzz

console.log('***1***');

for (var i = 1; i <= 100; i++){
    // console.log(i);
    if((i % 3 === 0) && (i % 5 === 5)){// le nombre est divisible par 3 et 5
        console.log('Gralabu');
    }else if (i % 3 === 0){
        console.log('Gra');
    }else if (i % 5 === 0){
        console.log('Bu');
    }else{
        console.info(i);
    }
}//fin for

console.log('***5***');

for (var i = 1; i <= 100; i++){
    var message = '';
    if(i % 15 === 0){//le nombre est divisible par 15 c'est à dire par 3 et 5
        message += 'GralaBu';
    }
    if(i % 3 === 0){//le nombre est divisible par 3
        message += 'Grala';
    }
    if(i % 5 === 0){//le nombre est divisible par 5
        message += 'Bu';
    }
    if(message == ''){//sinon on affiche la valeur numérique de i
        message = i; //en même temps la variable va concaténer Grala + Bu si le nombre est un multiple de 3 et 5
    }
    console.log(message);
}//fin for

console.log('*****voir dans la page*****');

for ( var i = 1; i <= 100; i++ ) {
    // console.log(i);
    if ( (i % 3 === 0) && (i % 5 === 0) ) {// le nombre est divisible par 3 et 5 
        document.getElementById('p1').innerHTML += 'FizzBuzz<br>';
    } else if ( i % 3 === 0) {
        document.getElementById('p1').innerHTML += 'Fizz<br>';
    } else if ( i % 5 === 0) {
        document.getElementById('p1').innerHTML += 'Buzz<br>';
    } else {
        document.getElementById('p1').innerHTML += i + '<br>';
    }
}// fin for
