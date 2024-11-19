let bowling = { 'players': 
    [ 
        {'name': 'Nicola', scores: []},
        {'name': 'Luca', scores: []},
        {'name': 'Matteo', scores: []},
    ],
        'ottieniPunteggio' : function(){
            for (let tiro = 0; tiro <= 10; tiro++) {
                this.players.forEach(player => {
                    let punteggio= Math.floor(Math.random() * 10) + 1;
                    if(punteggio == 10){
                        alert('HAI FATTO IL STRIKE');
                        punteggio += 5;
                        player.scores.push(punteggio);
                        tiro++;
                    } else {
                        alert(`Hai totalizzato: ${punteggio}`)
                        player.scores.push(punteggio);
                        tiro++;
                    }
                });
            }
        }}

        let btnGame = document.querySelector('#btnGame');

        btnGame.addEventListener('click', ()=> {
            bowling.ottieniPunteggio(player);
            alert(scores);
        });



        