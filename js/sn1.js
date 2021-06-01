// ----- JSnack1 -----
// tempo 15 minuti
// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
// Se uguale lunghezza dire sono uguali e stamparle entrambe.

var parola1 = prompt('inserisci parola 1')
var parola2 = prompt('inserisci parola 2')

if (parola1.length < parola2.length) {
    document.getElementById('parole').innerHTML = parola1 + ', ' + parola2;
}   else if (parola1.length > parola2.length) {
    document.getElementById('parole').innerHTML = parola2 + ', ' + parola1;
}   else {
    document.getElementById('parole').innerHTML = 'Le parole sono lunghe uguali e sono: '+ parola1 + ', ' + parola2;
}