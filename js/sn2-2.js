// ----- JSnack2 -----

// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while

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