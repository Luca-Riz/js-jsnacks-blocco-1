// ----- JSnack1 -----
// tempo 15 minuti
// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
// Se uguale lunghezza dire sono uguali e stamparle entrambe.

// var parola1 = prompt('scrivi una parola');
// var parola2 = prompt('scrivi un\'altra parola');

// if (parola1.length < parola2.length) {
//     document.getElementById('parole').innerHTML = parola1 + ' ' + parola2;
// }   else if (parola1.length > parola2.length) {
//     document.getElementById('parole').innerHTML = parola2 + ' ' + parola1;
// } else {
//     document.getElementById('parole').innerHTML = 'le parole sono di lunghezza uguale ' + parola1 + ' ' + parola2;
// }

// ----- fine JSnack1 -----

// ----- JSnack2 -----

// 25 minuti
// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.
// Variante: stampare solo i numeri pari (modificato) 


//----- for
// var somma = 0;

// for (var i = 0; i < 5; i++) {    
//         numeri = parseInt(prompt('inserisci numero'))
//         // console.log(numeri);
//         somma = somma + numeri;
// }

// document.getElementById('numeri').innerHTML = somma;

//----- while
// var somma = 0;
// var i = 0;
// while (i < 5) {    
//         numeri = parseInt(prompt('inserisci numero'))
//         // console.log(numeri);
//         somma = somma + numeri;
//         i++
// }

// document.getElementById('numeri').innerHTML = somma;

//----- pari
// for(var i = 0; i < 5; i++){
//     numero = parseInt(prompt('inserisci il numero'));
//     if (numero % 2 == 0){
//         console.log(numero);
//     }
// }

// DA SISTEMARE QUI

// ----- fine JSnack2 -----

// ----- JSnack3 -----

// 20 minuti
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

var numArray = [];
var num;

for(var i = 0; i < 6; i++){
    num = prompt('inserisci un numero');
    if (num % 2 != 0){
        numArray.push(num)
    }    
}

document.getElementById('numArray').innerHTML = numArray;

// ----- fine JSnack3 -----