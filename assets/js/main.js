/* 
Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).
 */


let prezzo_finale, messaggio;
const prezzo_al_km = 0.21;
//immagazzinare dati utente
const full_name = document.getElementById('full_name').value;


// km da percorrere
const km_da_percorrere = document.getElementById("km_da_percorrere").value;

// età passeggero
const eta_passeggero = document.getElementById('sconti').value;

    //console.log(km_da_percorrere, eta_passeggero);

//utilità button genera
const genera = document.getElementById('genera');
genera.addEventListener('click', function () {

document.getElementById("nome_passeggero").innerHTML = 'full_name';

/*     // calcolo prezzo standard
    const prezzo_standard = km_da_percorrere * prezzo_al_km;
    //console.log(prezzo_standard);

    //calcolo sconti
    const prezzo_minorenni = prezzo_standard - (prezzo_standard * 0.2)
    const prezzo_over_65 = prezzo_standard - (prezzo_standard * 0.4)
    //console.log(prezzo_minorenni, prezzo_over_65);

    if (eta_passeggero == 'Minorenne') {
        //   messaggio = 'Sei minorenne hai diritto al prezzo scontato del 20%';
        prezzo_finale = prezzo_minorenni;

    } else if (eta_passeggero == 'Over 65') {
        // messaggio = 'Sei un over 65 hai diritto al prezzo scontato del 40%';
        prezzo_finale = prezzo_over_65
    } else {
        // messaggio = '😢 Sorry! prezzo pieno';
        prezzo_finale = prezzo_standard
    }
    console.log(prezzo_finale); */
});







// L'output del prezzo finale va scritto in forma umana
//console.log(`${messaggio}, prezzo biglietto: Euro ${prezzo_finale.toFixed(2)} `);
/* console.log(prezzo_finale); */
/* if (isNaN(prezzo_finale)) {
    document.getElementById('prezzo_biglietto').innerHTML = `😱 Riprova, hai inserito dei dati sbagliati`

} else {

    document.getElementById('prezzo_biglietto').innerHTML = `prezzo biglietto: Euro ${prezzo_finale.toFixed(2)} `
}
  */