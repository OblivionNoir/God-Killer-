//Functions used by multiple spells 
turn_counter_value = 0;
turn_counter = []
 function counter(){
     let UC = document.getElementById("ultima_charge");
     UC.value +=1;
     turn_counter_value +=1;
     black_mage_mp += 5;
     white_mage_mp += 5;
     warrior_mp += 5;
     turn_counter.push(turn_counter_value)
     return turn_counter
 }
 var LastAttacks = [] //store last attacks used by player, some skills rely on it

//determines appropriate counter to be used 
function CounterSwitch(){
    switch(true){
        case(phase2called == true):
        if (mirror == true){//use the shorter version for Shattered Mirror, one turn not 2 
            counter()
            countdown_1turn(20000)
        }else{
            counter()
            trapped_countdown(40000)
        }
    break;
        case(phase3called == true):
        if (mirror == true){
            counter()
            countdown_1turn(15000)
        }else{
            counter()
            trapped_countdown(30000)
        }      
    break;
        default://phase 1 
        if (mirror == true){
            counter()
            countdown_1turn(25000)
        }else{
            counter()
            trapped_countdown(50000)
        }
    break;
    }

}; 

function randNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
function timeout_i_menu(){
    setTimeout(()=>{
        i_menu.style.visibility = "hidden"
    }, 2000)
}

//Used for turning the character images into targets for spells
var ally_targets = []
function makeAllyTargets(){
  let maketargets = document.getElementsByClassName('ally_img')
    for (let i = 0; i < maketargets.length; i++){
        ally_targets.push(maketargets[i])
        console.log(ally_targets)
    };
}

function ending3(){ //call after every player attack
    counter() 
    TestPhase()
}

function RevertUltima(){
    u_button.classList.remove("rainbowglow");
    ultima.value = 0;
    console.log("removed glow");

  }