function computerPlay(){
    let play = Math.floor(Math.random()*3);
    if(play === 0){
        return ("Rock");
    } else if (play === 1){
        return ("Paper");
    } else {
        return ("Scissors");
    }
}


let pp = 0;
let cp = 0;

function round(playerSelection, computerSelection){
    let ps = playerSelection.trim().toLowerCase();
    let cs = computerSelection.trim().toLowerCase();
    let pwin = false;
    if(ps === cs){
        return(`It's a tie! ${ps + " ties with " + cs}`)
    } else if(ps === "rock"){
        if(cs === "scissors"){
            pwin=true;
            pp++;
            console.log("Player wins, rock beats scissors")
        }else {
            cp++;
        }
    } else if(ps==="paper"){
        if(cs==="rock"){
            pwin=true;
            pp++;
        } else {
            cp++;
        }
    } else if(ps==="scissors"){
        if(cs==="paper"){
            pwin=true;
            pp++
        } else {
            cp++;
        }
    } else {
        return "ps was WRONG";
    }
    if(pwin){
        return(`Player wins! ${ps + " beats " + cs}`);
    } else {
        return(`Computer wins! ${cs + " beats " + ps}`);
    }
}

function game(){
    const buttons = document.querySelectorAll('button');

    let pw = 0;
    let cw = 0;
    for(var i = 0; i < 5; i++){
        let playerSelection = "";
        const computerSelection = computerPlay();

        buttons.forEach((button)=>{
            button.addEventListener('click', () => {
                playerSelection = button.className;
                round(playerSelection,computerSelection);
            });
        });
    }
    if(pp==5){
        console.log(`Player wins! They had ${pw +" wins while Computer had " + cw}`);
    } else if (cp==5){
        console.log(`Computer wins! They had ${cw +" wins while Player had " + pw}`);
    }
}
game();