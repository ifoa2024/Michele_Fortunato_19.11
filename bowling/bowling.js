let bowling = {
    players: [
        { name: 'Nicola', scores: [] },
        { name: 'Luca', scores: [] },
        { name: 'Matteo', scores: [] },
    ],
    ottieniPunteggio: () => {
        bowling.players.forEach(player => { 
            for (let tiro = 1; tiro <= 10; tiro++) {
                let punteggio = Math.floor(Math.random() * 10) + 1;
                if (punteggio === 10) {
                    alert(`${player.name} ha fatto uno STRIKE!`);
                    punteggio += 5;
                } else {
                    alert(`${player.name} ha totalizzato: ${punteggio}`);
                }
                player.scores.push(punteggio);
            }
        });

        // Mostra i punteggi finali
        bowling.players.forEach(player => {
            console.log(`${player.name} - Punteggi: ${player.scores.join(', ')}`);
        });
    }
};

// Associazione del bottone
let btnGame = document.querySelector('#btnGame');
btnGame.addEventListener('click', () => {
    bowling.ottieniPunteggio();
});
   


        