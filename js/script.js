/*

DESCRIZIONE DEL GIOCO
Il computer deve generare 16 numeri casuali nello stesso range della difficltà prescelta: le bombe. 
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri 
uguali
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati abbiamo calpestato una bomba. 
La cella si colora di rosso e la partita termina. Altrimenti, la cella cliccata si colora di azzurro e l'utente può continuare  a 
cliccare sulle altre celle.
LA partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti 
(ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita, il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che 
non era una bomba
# MILESTONE 1 ok
Prepariamo "Qualcosa" per tenere il punteggio dell'utente. ok
Quando l'utente clicca su una cella, incrementiamo il punteggio. ok
Se riusciamo, facciamo anche in modo da non poter più cliccare sulla stessa cella ok
# MILESTONE 2
Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di caselle disponibili.
Generiamoli e stampiamo in console per essere certi che siano corretti
# MILESTONE 3
Quando l'utente clicca su una cella, verifichiamo se ha calpestato una bomba, controllando se il numero di cella è presente nell'array di bombe.
Se si, la cella diventa rossa (raccogliamo il punteggio e scriviamo in console che la patita termina) altrimenti diventa azzurra e dobbiamo 
incrementare il punteggio.
# MILESTONE 4
Quando l'utente clicca su una cella, e questa non è una bomba, dobbiamo controllare se il punteggio incrementato ha raggiunto 
il punteggio massimo, perchè in quel caso la partita termina. Raccogliamo quindi il punteggio e scriviamo un messaggio appropriato.
# MILESTONE 5
Quando la partita termina dobbiamo capire se è terminata perchè è stata cliccata una bomba o seperchè l'utente ha raggiunto 
il punteggio massimo(ossia ha vinto). Dobbiamo poi in ogni caso stampare lin pagina il punteggio raggiunto ed il messaggio adeguato in caso 
di vittoria o sconfitta.
# BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà 
(come le istruzioni di ieri se non già fatto)
# SUPERBONUS
Colorare tutte le celle bomba quando la partita finisce
Consigli del giorno
approcciate l'esercizio con serenità, e cercate di divertirvi!
Cercate di commentare e usare i console.log il più possibile
Fatevi sempre delle domande: sto ripetendo del codice? Questa funzione fa troppe cose? Il nome ha senso rispetto a quello che fa?
Buon divertimento e a domani!
*/

//DICHIARAZIONI FUNZIONI
// Fuznione per generare cella
function createCell (cellNumeber){
    // Creo la cella
    const cell = document.createElement('div');
    // Aggiungo la classe alla cella
    cell.className = 'cell';
    // Inserisco il numero progressivo nella cella
    cell.textContent = cellNumeber;
    return cell;

}


//FASE DI PREPARAZIONE
//richiamo gli elemnti dal dom
const grid = document.getElementById('grid')
const button = document.querySelector('button')
const select = document.getElementById('select')
const scoreElement = document.getElementById('score')


//FUNCTION CORE
const starGame = () => {
    // Pulisco la griglia prima di generare nuove celle
    grid.innerHTML = '';
    //Cambio il tsto del button
     button.innerText = 'Ricomincia';

    // Creo un ciclo per il numero di totalCell
    for (let i = 1; i <= totalCell; i++) {
        //Creo una cella
        const cell = createCell(i);

        //al clik aggiungo classe clicked
        cell.addEventListener('click', () =>{
        console.log(i)
        
        //se e gia stata cliccata
        if (cell.classList.contains('clicked')) return;
        

        cell.classList.add('clicked')

        //aumento score
        score++

        // Pulisco lo store prima di aggiungere risultato
        scoreElement.innerHTML = '';

        // inserisco in pagina
        scoreElement.innerText = score;

        /*Se riusciamo, facciamo anche in modo da non poter più cliccare 
        sulla stessa cella*/

        cell.classList.add('looked')

        

        })

        // Pulisco lo score prima di aggiungere risultato
        scoreElement.innerHTML = '';
       

        // Inserisco la cella nella griglia
        grid.appendChild(cell);
    }
};



//Elementi inizialai

const rows = 10;
const cols = 10;
const totalCell = rows * cols;
let score = 0;

// Reagiamo al click
button.addEventListener('click',starGame) 
// Quando l'utente clicca su una cella, incrementiamo il punteggio.