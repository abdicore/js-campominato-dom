/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
# MILESTONE 1 ok
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.
#MILESTONE 2 ok
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
#MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!
*/


/*
#MILESTONE 2 ok
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, 
vengono generate 100 celle in 10 righe da 10 celle ciascuna.
*/

//Dichiarazioni funzioni

function createCell (){

}


//Fase di preparazione


//richiamo gli elemnti dal dom
const grid = document.getElementById('grid')
const button = document.querySelector('button')
const select = document.getElementById('select')

//Elementi inizialai

const rows = 10;
const cols = 10;
const totalCell = rows * cols;

// Reagiamo al click
button.addEventListener('click', function() {
  

    // Pulisco la griglia prima di generare nuove celle
    grid.innerHTML = '';

    // Creo un ciclo per il numero di totalCell
    for (let i = 1; i <= totalCell; i++) {
        // Creo la cella
        const cell = document.createElement('div');
        // Aggiungo la classe alla cella
        cell.className = 'cell';
        // Inserisco il numero progressivo nella cella
        cell.textContent = i;

        // Inserisco la cella nella griglia
        grid.appendChild(cell);
    }
});
