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

// età passeggero

/* #region click genera */
//click button genera al click 
const genera = document.getElementById('genera');
genera.addEventListener('click', function () {

    // nome del passeggero (quello che inserisce l'utente )
    const fullName = document.getElementById("full_name").value;
    document.getElementById("nome_passeggero").innerHTML = fullName;

    // età passeggero tra maggiorenne, minorenne e over 65
    let eta_passeggero = document.getElementById("eta");
    document.getElementById("sconto_applicato").value = eta.options[eta.selectedIndex].text;

    // numero della carrozza casuale da 1 a 20
    const carrozza = Math.floor(Math.random() * 21);
    document.getElementById('num_carrozza').innerHTML = carrozza;

    // numero cp casuale
    const codiceCp = Math.floor(Math.random() * 100000);
    document.getElementById('codice_cp').innerHTML = codiceCp;

    // km da percorrere
    const km_da_percorrere = document.getElementById("km_da_percorrere").value;

    // calcolo prezzo standard
    const prezzo_standard = km_da_percorrere * prezzo_al_km;
    //console.log(prezzo_standard);
    //calcolo prezzi scontati
    const prezzo_minorenni = prezzo_standard - (prezzo_standard * 0.2)
    const prezzo_over_65 = prezzo_standard - (prezzo_standard * 0.4)
    //console.log(prezzo_minorenni, prezzo_over_65);

    let scontoApplicato = document.getElementById('sconto_applicato');

    if (scontoApplicato.value == 'Minorenne' ) {
        //console.log(prezzo_minorenni);

        document.getElementById('costo_biglietto').innerHTML = `${prezzo_minorenni.toFixed(2)}€`;
    } else if (scontoApplicato.value == 'Over 65'){
        //console.log(prezzo_over_65);

        document.getElementById('costo_biglietto').innerHTML = `${prezzo_over_65.toFixed(2)}€`;
    } else{
        //console.log(prezzo_standard);

        document.getElementById('costo_biglietto').innerHTML = `${prezzo_standard.toFixed(2)}€`;
    }

});
/* #endregion click genera */


const annulla = document.getElementById('annulla');

annulla.addEventListener('click', function RefreshWindow() {
    window.location.reload(true);
});