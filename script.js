/*Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input
 e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. 
 La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo
 un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina 
(il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).*/

console.log ('JS OK')

// PRENDO GLI ELEMENTI DAL DOM
const nameField = document.getElementById ('name');
const kmsField = document.getElementById ('kms');
const ageField = document.getElementById ('age');
const confirmButton = document.getElementById ('confirm-button');
const resetmButton = document.getElementById ('reset-button');
const ticketSection = document.getElementById ('ticket-section');
const passengerNameElement = document.getElementById ('passenger-name');
const rateElement = document.getElementById ('rate');
const coachElement = document.getElementById ('coach');
const pnrElement = document.getElementById ('pnr');
const priceElement = document.getElementById ('price');

// COLLEGO L'EVENT LISTENER AL BUTTON
confirmButton.addEventListener('click', function(){
    const nameValue = nameField.value.trim();
    const kmsValue = parseInt(kmsField.value.trim());
    const ageValue = ageField.value;

    //Validazione 
    if(!nameValue || isNaN(kmsValue) || kmsValue < 10){
        alert('Valori non validi!');
        return;
    } 

    //Calcolo prezzo
    let price = 0.21 * kmsValue;
    let rateName = 'Tariffa Ordinaria';

    if(ageValue === 'under') {
        price = price * 0.8;
        rateName = 'Tariffa Giovani';
    } else if(ageValue === 'over') {
        price = price * 0.6;
        rateName = 'Tariffa Anziani';
    }

    console.log(price, rateName);

    //Arrotondo
    price = price.toFixed(2) + '€';

    //Coach & PNR
    const coach = '9'
    const pnr = '261293'

    //Monto i dati nell html
    passengerNameElement.innerText = nameValue;
    rateElement.innerText = rateName;
    coachElement.innerText = coach;
    pnrElement.innerText = pnr;
    priceElement.innerText = price;

    //Tolgo il d-none alla ticket-section
    ticketSection.classList.remove('d-none');

    //Svuoto i campi dopo il click 
    nameField.value = '';
    kmsField.value = '10';
    ageField.value = '';



})


