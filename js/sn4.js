// ----- JSnack4 -----

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var lista = ['Jay Gatsby', 'Nick Carraway', 'Daisy', 'Tom', 'Myrtle', 'Il meccanico'];

var nomeUtente = prompt('Inserisci il tuo nome');
var ok = false;

for(i = 0; i < lista.length; i++){
    if (lista[i] == nomeUtente){
        document.getElementById('gatsby').innerHTML = 'Il tuo nome è nella lista, puoi partecipare.';
        ok = true;
    }
}
if (ok == false){
    document.getElementById('gatsby').innerHTML = 'Il tuo nome non è nella lista, non puoi partecipare.';
}