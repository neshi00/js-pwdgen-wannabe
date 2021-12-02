alert ('ATTENZIONE!! QUESTA è UNA RAPINA!!! (di dati)')

// chiedi numero carta di credito
let creditcardNumber = prompt ('gentile rapinato scriva qui il suo numero di carta di credito');

// chiedi iban scomposto
// paese + caratteri di controllo + ABI +CAB + conto corrente
let country = prompt ('scriva ora la sigla della nazione del suo iban - ad esempio IT ');
let controlCharacters = prompt ('ora i caratteri di controllo iniziali - ad esempio 00A');
let abi = prompt ('scrivere ora ABI - 5 numeri in totale');
let cab = prompt ('ora il CAB - sempre 5 numeri in totale');
let accountNumber = prompt ('e infine il numero di conto corrente - 12 numeri in totale');

let resultIban = country + controlCharacters + abi + cab + accountNumber;

//sei proprietario di immobili?
let properties = prompt ('sei proprietario di immobili?');

//hai bitcoin?
let bitcoin = prompt ('possiedi bitcoin?');

//indirizzo di casa
let homeAddress = prompt ('bene bene..dove vivi quindi?');

// codice fiscale
let fiscalCode = prompt ('il tuo codice fiscale?');

//gruppo sanguigno
let bloodGroup = prompt ('gruppo sanguigno?');

//numero di capelli in testa (suggerimento Google
let hair = prompt ('quanti capelli hai in testa? - se non lo sai chiedi a Google -');



let htmlElement = document.getElementById('creditcardNumber');
htmlElement.innerHTML = `il numero della sua carta di credito è ${creditcardNumber}`;

htmlElement = document.getElementById('resultIban');
htmlElement.innerHTML = `Il tuo IBAN è  ${resultIban}`;

htmlElement = document.getElementById('properties');
htmlElement.innerHTML = `proprietario di immobili: ${properties}`;

htmlElement = document.getElementById('bitcoin');
htmlElement.innerHTML = `possessore di bitcoin: ${bitcoin}`;

htmlElement = document.getElementById('homeAddress');
htmlElement.innerHTML = `città di residenza: ${homeAddress}`;

htmlElement = document.getElementById('fiscalCode');
htmlElement.innerHTML = `codice fiscale: ${fiscalCode}`;

htmlElement = document.getElementById('bloodGroup');
htmlElement.innerHTML = `gruppo sanguigno: ${bloodGroup}`;

htmlElement = document.getElementById('hair');
htmlElement.innerHTML = `numero di capelli in testa ( probabilmente ancora in attesa di un aiuto da casa da parte di Google) ${hair}`;

document.writeln('Gentile rapinato, grazie per la collaborazione. Ecco un piccolo resoconto dei suoi dati. Avrà presto mie/nostre notizie :)');

