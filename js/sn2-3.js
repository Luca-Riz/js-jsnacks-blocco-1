// ----- JSnack2 -----

// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

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