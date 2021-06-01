//soluzione con 'while'
var somma = 0;
var i = 0;

while (i<5) {
    var numero = parseInt(prompt('inserisci un numero'))
    somma += numero;
    console.log(somma);
    i++
};

document.getElementById('somma').innerHTML = somma