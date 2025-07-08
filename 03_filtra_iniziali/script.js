/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function parolaFiltrata (parole, lettera ){
 const risultato= [];
 
 for (let i =0; i <parole.length; i++) {
    if (parole[i][0] === lettera){
    risultato.push(parole[i]);
    }
   }
   return risultato;
} 

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra*] 