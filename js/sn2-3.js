//Variante: sommare solo i numeri pari
var somma = 0;

for (var i=0; i<5; i++) {
    var numero = parseInt(prompt('inserisci un numero'))
    if (numero % 2 == 0){
        somma += numero;
        console.log(somma);
    }
    document.getElementById('somma').innerHTML = 'La somma dei numeri pari è uguale a: ' + somma
};