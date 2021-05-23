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




function round(playerSelection, computerSelection){
    let ps = playerSelection.trim().toLowerCase();
    let cs = computerSelection.trim().toLowerCase();
    let pwin = false;
    if(ps === cs){
        return(`It's a tie! ${ps + " ties with " + cs}`)
    } else if(ps === "rock"){
        if(cs === "scissors"){
            pwin=true;
        }
    } else if(ps==="paper"){
        if(cs==="rock"){
            pwin=true;
        }
    } else if(ps==="scissors"){
        if(cs==="paper"){
            pwin=true;
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

    let pw = 0;
    let cw = 0;
    for(var i = 0; i < 5; i++){
        const playerSelection = window.prompt("What's your play?");
        const computerSelection = computerPlay();
        let msg = round(playerSelection,computerSelection);
        console.log(msg);
        if(msg.charAt(0)==='P'){
            pw+=1;
        } else if(msg.charAt(0)==='C'){
            cw+=1;
        }

    }
    if(pw>cw){
        console.log(`Player wins! They had ${pw +" wins while Computer had " + cw}`);
    } else if (cw>pw){
        console.log(`Computer wins! They had ${cw +" wins while Player had " + pw}`);
    }
}
game();