// array vuoto

let salmon = [ ]

const salmonId = document.querySelector("#salmon")
// dichiarate prompt
let promptUno = prompt("inserisci un numero");
let promptDue = prompt("inserisci un porcodue");
let promptTre = prompt("inserisci un numero");
let promptQuattro = prompt("inserisci un porcodue");
let promptCinque = prompt("inserisci un numero");
let promptSei = prompt("inserisci un porcodue");

numeri()

function numeri(){
    const numbers = [promptUno, promptDue, promptTre, promptQuattro, promptCinque, promptSei];
    for (const num of numbers) {
      if (num % 2 === 1) {
        salmon.push(num);
        salmonId.innerHTML = '<div> ' + salmon + '</div>'
        console.log(salmon,'questo è salmon compilato con i numeri dispari')
      }
    }
}
