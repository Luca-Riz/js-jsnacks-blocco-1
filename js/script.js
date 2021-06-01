// ----- JSnack1 -----
// tempo 15 minuti
// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
// Se uguale lunghezza dire sono uguali e stamparle entrambe.

// var parola1 = prompt('inserisci parola 1')
// var parola2 = prompt('inserisci parola 2')

// if (parola1.length < parola2.length) {
//     document.getElementById('parole').innerHTML = parola1 + ', ' + parola2;
// }   else if (parola1.length > parola2.length) {
//     document.getElementById('parole').innerHTML = parola2 + ', ' + parola1;
// }   else {
//     document.getElementById('parole').innerHTML = 'Le parole sono lunghe uguali e sono: '+ parola1 + ', ' + parola2;
// }

// ----- fine JSnack1 -----

// ----- JSnack2 -----

// 25 minuti
// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.
// Variante: stampare solo i numeri pari (modificato) 

//soluzione con 'for'
var somma = 0;

for (var i=0; i<5; i++) {
    var numero = parseInt(prompt('inserisci un numero'))
    somma += numero;
    console.log(somma);
};

document.getElementById('somma').innerHTML = somma

// ----- fine JSnack2 -----

// ----- JSnack3 -----

// 20 minuti
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array


// ----- fine JSnack3 -----

// ----- JSnack4 -----

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.



// ----- fine JSnack4 -----