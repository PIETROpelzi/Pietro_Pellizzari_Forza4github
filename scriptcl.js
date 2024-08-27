if (!localStorage.getItem('classifiche')) {
    localStorage.setItem('classifiche', JSON.stringify(classifiche));
}

function mostraClassifica() {
    let classifiche = {};

    if (localStorage.getItem('classifiche')) {
        classifiche = JSON.parse(localStorage.getItem('classifiche'));
    } else {
        console.error("Nessuna classifica trovata nel localStorage.");
        return;
    }

    let classificaOrdinata = Object.keys(classifiche).map(key => {
        return [key, classifiche[key]];
    }).sort((a, b) => b[1] - a[1]);

    let tbody = document.querySelector("#classificaTable tbody");
    tbody.innerHTML = ""; 

    classificaOrdinata.forEach((giocatore, index) => {
        let tr = document.createElement('tr');

        let tdPosizione = document.createElement('td');
        tdPosizione.textContent = index + 1;
        tr.appendChild(tdPosizione);

        let tdGiocatore = document.createElement('td');
        tdGiocatore.textContent = giocatore[0]; 
        tr.appendChild(tdGiocatore);

        let tdPunti = document.createElement('td');
        tdPunti.textContent = giocatore[1]; 
        tr.appendChild(tdPunti);

        tbody.appendChild(tr);
    });
}


window.onload = mostraClassifica;