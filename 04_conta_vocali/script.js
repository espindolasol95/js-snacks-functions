/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function contatoreVocali(stringa) {
  const vocali = ['a', 'e', 'i', 'o', 'u'];
  let contatore = 0;
   

  for (let i =0; i<stringa.length; i++)
    if(vocali.includes (stringa [i]. toLowerCase())){
        contatore ++;  //incrementa il contatore ogni volta che trova una vocale (prova)

    }

    return contatore;
}


// Invoca la funzione qui e stampa il risultato in console




//Risultato atteso se si passa 'javascript': 3 (a, a, i)