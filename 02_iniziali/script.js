/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function iniziali(array) {
    return array.map(name => name[0] .toUpperCase()); // map per creare nuovo array, neme[0] prende il primo carattere

}



// Invoca la funzione qui e stampa il risultato in console

console.log(iniziali(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]