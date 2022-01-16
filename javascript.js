let reload = document.querySelector('.reload');
let newGameButton = document.querySelector('.new-game-button');
let firstPlayer = document.querySelector('.firstPlayer');
let secondPlayer = document.querySelector('.secondPlayer');
let scoreFirstPlayer = document.querySelector('.global-score-1');
let scoreSecondPlayer = document.querySelector('.global-score-2');
let roundScoreFirst = document.querySelector('.round-score-first');
let roundScoreSecond = document.querySelector('.round-score-second');
let checkPlayer = null;
let roll = document.querySelector('.rolldisplay');
let hold = document.querySelector('.hold');
let firstScore = 0;
let firstRoundScore = 0;
let secondScore = 0;
let secondRoundScore = 0;
let dicePicture = document.querySelector('#dice');
let rollOption = document.querySelector('.rolldisplay');
let holdOption = document.querySelector('.hold');

function holding () {
    
    if(checkPlayer == true){
        checkPlayer = false;
        firstScore += firstRoundScore;
        scoreFirstPlayer.innerHTML = firstScore;
        firstRoundScore = 0;
        roundScoreFirst.innerHTML = firstRoundScore;
        findPlayer();
    } else {
        checkPlayer = true;
        secondScore += secondRoundScore;
        scoreSecondPlayer.innerHTML = secondScore;
        secondRoundScore = 0;
        roundScoreSecond.innerHTML = secondRoundScore;
        findPlayer();
    }
    }
    
    function findPlayer (){
        if(checkPlayer == true) {
            secondPlayer.classList.remove("playing");
            firstPlayer.className += " playing";
        } else {
            firstPlayer.classList.remove("playing");
            secondPlayer.className += " playing";
        }}
    
    function playDice (){
     
        reload.addEventListener('click', () => {
            location.reload();
        })
        rollOption.addEventListener('click', () => {
        dicePicture.classList.remove("animation-dice");
        dicePicture.className += " animation-dice";
        let randomResult = null;
    
        // Dice Result
        randomResult = Math.floor( Math.random() * 6 ) + 1;
        switch(randomResult) {
            case 1 :
            dicePicture.src = 'img/one.png';
            break;
            case 2 :
            dicePicture.src = 'img/two.png';
            break;
            case 3 :
            dicePicture.src = 'img/two.png';        
            break;
            case 4 :
            dicePicture.src = 'img/four.png';
            break;
            case 5 :
            dicePicture.src = 'img/five.png';
            break;
            case 6 :
            dicePicture.src = 'img/six.png';
            break;
            default :
            alert('Erreur. Veuillez de recharger la page.');
        }
        
        // Player 1
        if(checkPlayer == true) {
            firstRoundScore += randomResult; 
    
            roundScoreFirst.innerHTML = firstRoundScore;
    
            // Result is 1
            if(randomResult == 1){
                firstRoundScore = 0;
                roundScoreFirst.innerHTML = firstRoundScore;
                checkPlayer = false;
                findPlayer();
            }
    
            else {
                holdOption.addEventListener('click', ()=> {
                holding(); 
                if(firstScore >= 100) {
                    alert('BRAVO joueur 1 !'); 
                    firstScore = 0;
                    location.reload();
                }
                checkPlayer = false;
                dicePicture.src = 'img/play.png'
                findPlayer();
                })
                
        
        }}
    
    // Player 2
     else if(checkPlayer == false) {
        console.log(secondScore + ' / ' + randomResult)
            secondRoundScore += randomResult; 
            roundScoreSecond.innerHTML = secondRoundScore;
    
        // Result is 1
        if(randomResult == 1){
            secondRoundScore = 0;
            roundScoreSecond.innerHTML = secondRoundScore;
            checkPlayer = true;
            randomResult = 0;
            findPlayer();
        }
    
        else {
    
            holdOption.addEventListener('click', ()=> {
            holding(); 
            if(secondScore >= 100) {
                alert('BRAVO joueur 2')
                secondScore = 0;
                location.reload();
            }
            checkPlayer = true;
            dicePicture.src = 'img/play.png'
            findPlayer();
            })
            
        
    
    }}
    
    
    })}
    
    
    
        // Start new game - check for 1st Player + scores on 0
    function launchNewGame () {
    newGameButton.addEventListener('click', () => {
    checkPlayer = true;
    firstScore = 0;
    secondScore = 0;
    roll.style.display = "block";
    hold.style.display = "block";
    findPlayer();
    playDice();
    }) }
    
    launchNewGame();