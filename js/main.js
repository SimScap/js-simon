/*
Descrizione:

Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. 
*/



//Creo una variabile che mi generi 5 numeri random da 1 a 100 che implementerò poi nella timing function per 30sec
//Creo una costante dove metterò i numeri scelti con un push e li paragonerò con i numeri generati per vedere quanti corrispondono 
let randomNumbers = [];
let fixedValue=5;
let chosenNumbers = [];


//Funzione che mi crea 5 numeri random (devo aggiungere una condizione che verifichi che non siano doppi)
document.getElementById('start').addEventListener('click', function(){   
    for ( let i = 0; i < 5; i++){
        randomNumbers =  Math.floor((Math.random() * 100) + 1);
        document.getElementById('text').innerHTML= randomNumbers;
        console.log(randomNumbers); 
        
        setTimeout(function(){
            document.getElementById("text").innerHTML = '';
        }, 30000);
}
})




/**
    Devo creare una funzione che chieda all'utente 5 numeri  quali fossero i numeri apparsi in precedenza tramite un prompt
    usando un ciclo while? i < 5 i++ 
    ,

 */