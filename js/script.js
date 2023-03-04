/*
    TESTO DELLA VERIFICA DI TPSIT
    Viene richiesto di modificare i file html e js in modo tale da:

    - visualizzare DINAMICAMENTE gli utenti nell'aside (barra laterale sinistra) 
        # ogni utente è un nuovo LI
        # ogni utente in base al genere dovrà essere raffigurato tramite l'icona corretta
        # sotto l'icona dovrà essere rafficurato il nome con l'iniziale maiuscola del nome e l'iniziale maiuscola del cognome
        # il cognome dovrà essere troncato e seguito da . (come si vede nel file originale)

    - aggiornare automaticamente l'header della sezione nel momento in cui clicco su un utente dell'aside
        # modificare l'icona
        # modificare il nome e cognome
        # aggiornare l'ora a proprio piacimento (PER IL MASSIMO DEL PUNTEGGIO: creare un array parallelo con le ore)
    
    - aggiungere DINAMICAMENTE I MESSAGGI
        #Non importa se si utilizza ut1 per l'utente 0 o ut2, l'importante è la coerenza

    - PER IL 10. Gestite il bottone di invio in basso 
        #se il campo di testo non è vuoto aggiungere il messaggio in coda agli altri del personaggio selezionato

*/

function utenti() {
    /* 
    primo tentativo 
     let li=``;
 
     for(let i in nomeUtenti){  
         if(i!=0){
 
             if(genereUt[i]=="m"){
                 li+=`<li><div class="material-symbols-outlined icone">
                 face
             </div>                      
             `+nomeUtenti[i]+` `+cognomeUtenti[i]`+</li>
             `;
             }else{
                 li+=`<li><div class="material-symbols-outlined icone">
                 face_3
             </div> 
             `+nomeUtenti[i]+` `+cognomeUtenti[i]+`</li>
             `;
             }                     
         }     
     }
 
     document.querySelector("aside").innerHTML = li;
    */

     //secondo tentativo
    let utente = " ";

    for (let i in nomeUtenti) {

        if (i != 0) {
            utente += creaut(nomeUtenti[i], cognomeUtenti[i], i);
        }
    }

    document.getElementById("listUtenti").innerHTML = utente;

}



function creaut(nomeUtenti, cognomeUtenti, i) {
    let genere = "";

    if (genereUt[i] == "m") {

        genere = "face";
    }
    else {
        genere = "face_3";
    }

    return `
        <li>
            <div onclick="cambiaHeader(i)" class="material-symbols-outlined icone">
                ${genere}
            </div>
            ${nomeUtenti + '.' + cognomeUtenti.substring(0, 1)}
        </li>
    `;
}


function cambiaHeader(){


    let header=``;
    let genere = "";


    if (genereUt[i] == "m") {

        genere = "face";
    }
    else {
        genere = "face_3";
    }

    header+=`
        <div class="material-symbols-outlined icone">
            `+genere+`
        </div>
        <div>
            <div id="divNome">`+nomeUtenti[i]+cognomeUtenti+`</div>
            <div id="divUltimoMes">Oggi alle 9:45</div>
        </div>
    `
    

}



