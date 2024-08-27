 let val_c1 = 1;
 let val_c2 = 1;
 let val_c3 = 1;
 let val_c4 = 1;
 let val_c5 = 1;
 let val_c6 = 1;
 let val_c7 = 1;
 let turno = 1;
 let player1 = "";
 let player2 = "";
 let classifiche = {};

 document.addEventListener('DOMContentLoaded', function() {
     player1 = localStorage.getItem('player1');
     player2 = localStorage.getItem('player2');

     if (!player1 || !player2) {
         alert("Nomi dei giocatori non trovati. Ritorna alla pagina di avvio.");
         window.location.href = 'index.html';
         return;
     }

     if (localStorage.getItem('classifiche')) {
         classifiche = JSON.parse(localStorage.getItem('classifiche'));
     }

     if (!classifiche[player1]) classifiche[player1] = 0;
     if (!classifiche[player2]) classifiche[player2] = 0;

     document.getElementById("whosturn").innerText = `Turno di ${player1} (Rosso)`;
 });

 function controlla(giocatore) {
     setTimeout(() => {
         for (let i = 1; i <= 7; i++) {
             for (let j = 1; j <= 3; j++) {
                 if (document.getElementById(`c${i}r${j}`).style.backgroundColor === giocatore &&
                     document.getElementById(`c${i}r${j + 1}`).style.backgroundColor === giocatore &&
                     document.getElementById(`c${i}r${j + 2}`).style.backgroundColor === giocatore &&
                     document.getElementById(`c${i}r${j + 3}`).style.backgroundColor === giocatore) {
                     alert(`${giocatore === 'red' ? player1 : player2} vince`);
                     aggiornaClassifica(giocatore);
                     resettaGioco();
                     return; 
                 }
             }
         }

         for (let i = 1; i <= 6; i++) {
             for (let j = 1; j <= 4; j++) {
                 if (document.getElementById(`c${j}r${i}`).style.backgroundColor === giocatore &&
                     document.getElementById(`c${j + 1}r${i}`).style.backgroundColor === giocatore &&
                     document.getElementById(`c${j + 2}r${i}`).style.backgroundColor === giocatore &&
                     document.getElementById(`c${j + 3}r${i}`).style.backgroundColor === giocatore) {
                     alert(`${giocatore === 'red' ? player1 : player2} vince`);
                     aggiornaClassifica(giocatore);
                     resettaGioco();
                     return; 
                 }
             }
         }

        
         for (let i = 1; i <= 4; i++) {
             for (let j = 1; j <= 3; j++) {
                 if (document.getElementById(`c${i}r${j}`).style.backgroundColor === giocatore &&
                     document.getElementById(`c${i + 1}r${j + 1}`).style.backgroundColor === giocatore &&
                     document.getElementById(`c${i + 2}r${j + 2}`).style.backgroundColor === giocatore &&
                     document.getElementById(`c${i + 3}r${j + 3}`).style.backgroundColor === giocatore) {
                     alert(`${giocatore === 'red' ? player1 : player2} vince`);
                     aggiornaClassifica(giocatore);
                     resettaGioco();
                     return; 
                 }
             }
         }

         for (let i = 1; i <= 4; i++) {
             for (let j = 6; j >= 4; j--) {
                 if (document.getElementById(`c${i}r${j}`).style.backgroundColor === giocatore &&
                     document.getElementById(`c${i + 1}r${j - 1}`).style.backgroundColor === giocatore &&
                     document.getElementById(`c${i + 2}r${j - 2}`).style.backgroundColor === giocatore &&
                     document.getElementById(`c${i + 3}r${j - 3}`).style.backgroundColor === giocatore) {
                     alert(`${giocatore === 'red' ? player1 : player2} vince`);
                     aggiornaClassifica(giocatore);
                     resettaGioco();
                     return; 
                 }
             }
         }
     }, 200);
 }

 
 function aggiornaClassifica(giocatore) {
     let vincitore = giocatore === 'red' ? player1 : player2;
     classifiche[vincitore] += 1;
     localStorage.setItem('classifiche', JSON.stringify(classifiche));
 }

 
 function resettaGioco() {
     val_c1 = 1;
     val_c2 = 1;
     val_c3 = 1;
     val_c4 = 1;
     val_c5 = 1;
     val_c6 = 1;
     val_c7 = 1;
     turno = 1;

    
     for (let i = 1; i <= 7; i++) {
         for (let j = 1; j <= 6; j++) {
             document.getElementById(`c${i}r${j}`).style.backgroundColor = "";
         }
     }

     
     document.getElementById("whosturn").innerText = `Turno di ${player1} (Rosso)`;
 }


 document.querySelectorAll(".column").forEach((e) => {
     e.addEventListener("click", () => {
         let somma = eval(`val_${e.id}`);
         eval(`val_${e.id}++`);

         if (somma <= 6 && turno % 2 !== 0) {
             document.getElementById(`${e.id}r${somma}`).style.backgroundColor = "red";
             turno++;
             controlla('red');
             document.getElementById("whosturn").innerText = `Turno di ${player2} (Giallo)`;
         } else if (somma <= 6 && turno % 2 === 0) {
             document.getElementById(`${e.id}r${somma}`).style.backgroundColor = "yellow";
             turno++;
             controlla('yellow');
             document.getElementById("whosturn").innerText = `Turno di ${player1} (Rosso)`;
         }
     });
 });

 
 document.getElementById('Finisci').addEventListener('click', function(event) {
     event.preventDefault();
     localStorage.setItem('classifiche', JSON.stringify(classifiche));
     window.location.href = 'indexclassif.html';
 });
