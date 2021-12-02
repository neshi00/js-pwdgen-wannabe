// chiedi nome con prompt (username)
let userName = prompt ('inserisci qui il tuo nome');

// chiedi cognome con prompt (userlastname)
let userLastname = prompt ('inserisci qui il tuo cognome');

// chiedi colore preferito con prompt (favourite color)
let favouriteColor = prompt ('inserisci qui il tuo colore preferito');

//definisci stringa "21"
let numberPssw = '21';

// concatena stringa "21" a variabili precenti
let password = userName + userLastname + favouriteColor + numberPssw;

// scrivi in DOM attraverso id #passwgen -> nomecognomecolorepreferito21

// document.getElementById('passwgen').innerHTML = password
let htmlElement = document.getElementById('passwgen');
htmlElement.innerHTML = `questa è la tua nuova password (AUGURI!!) ---> ${password}`