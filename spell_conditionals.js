//Functions used by multiple spells 
turn_counter_value = 0;
turn_counter = []
 function counter(){
     let UC = document.getElementById("ultima_charge");
     UC.value +=2;
     turn_counter_value +=1;
     black_mage_mp += 5;
     white_mage_mp += 5;
     warrior_mp += 5;
     turn_counter.push(turn_counter_value)
     //return turn_counter
 }
 var LastAttacks = [] //store last attacks used by player, some skills rely on it

//determines appropriate counter to be used 
function CounterSwitch(){
    switch(true){
        case(phase2called == true):
        if (mirror == true){//use the shorter version for Shattered Mirror
            counter()
            countdown_mirror(30000)
        }else{
            counter()
            trapped_countdown(40000)
        }
    break;
        case(phase3called == true):
        if (mirror == true){
            counter()
            countdown_mirror(22500)
        }else{
            counter()
            trapped_countdown(30000)
        }      
    break;
        default://phase 1 
        if (mirror == true){
            counter()
            countdown_1turn(37500)
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
function p1_3sec(){
    setTimeout(()=>{ 
        p1.style.visibility = "hidden"
    }, 3000)
}
function p1_2sec(){ //should actually have these take in a value instead of creating a new function for each
    setTimeout(()=>{ 
        p1.style.visibility = "hidden"
    },2000)
}
function timeout_ending(){
    setTimeout(()=>{
        p1.style.visibility = "hidden";
        ending3()
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
    if (ultima.value ==100){
        AddUltima()
    }
    
}

function AddUltima(){
    u_button.classList.add("rainbowglow")//add rainbow glow to the button
    console.log ("added")
};

var u_button = document.getElementById("btn_1")
function RevertUltima(){
    u_button.classList.remove("rainbowglow");
    ultima.value = 0;
    console.log("removed glow");

  }
var final_dmg_pre;
var final_dmg;
//96/106 is the default but lower it for super strong attacks
function Randomizer(base_power, min, max){
    let add_on = (Math.random() * (max - min) + min)
    final_dmg_pre = add_on*base_power/100
    final_dmg = final_dmg_pre;//Breaks without the toFixed! Infinite decimals go brrrr
    console.log(final_dmg)
    //adds a 1-5% pos/neg randomizer to each attack that's used
    //return final_dmg
}

function defend(character){
    console.log(character + " made it") 
    //Lasts 20 seconds.
    //If defending, that character can't do anything else but their defense is raised 3x. 
    //Essential to survive Bleeding Sun at the end
  }

  //switches background back, according to current phase
function changeBackground(){
    if (phase3called == true){
        document.body.style.backgroundImage = "url('trueformbg.png')"
      }else{
        document.body.style.backgroundImage = "url('purveyorbg.png')"
      }
  
  }