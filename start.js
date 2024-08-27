document.getElementById('startGame').addEventListener('click', function () {
    let player1 = document.getElementById('player1').value.trim();
    let player2 = document.getElementById('player2').value.trim();

    if (!player1 || !player2) {
        alert("Entrambi i giocatori devono inserire un nome.");
        return;
    }

    localStorage.setItem('player1', player1);
    localStorage.setItem('player2', player2);

    window.location.href = 'index.html';
});