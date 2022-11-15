//Functions used by multiple spells 
turn_counter_value = 0;
turn_counter = []
 function counter(){
     let UC = document.getElementById("ultima_charge");
     UC.value +=50;
     turn_counter_value +=1;
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
//replace all the setTimeouts with this 
function Timer(duration, action, arg){//action = what to do when it finishes, as a function name without the ()
    let CountTo = new Date().getTime() + duration;
    let TimerUpdate = setInterval(function(){
    let now = new Date().getTime();
    let distance = CountTo - now;

    if (distance <= 0){
        clearInterval(TimerUpdate);
        action(arg)
    }
    }, 1000);
}

function test(){
    console.log("working")
}
function hide_i_and_end(){
    i_menu.style.visibility = "hidden"
    ending3()
}
function randNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


function p1_timeout(time){//make this another timer?
    setTimeout(()=>{
        p1.style.visibility = "hidden"
    }, time)
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
    updateBossHP()
    updatePlayers()
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
    u_label.innerHTML = ultima_charge.value.toFixed(0) + "/100"; 
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
        document.body.style.backgroundImage = "url('phase3BGV3.jpeg')"
    }else{
        document.body.style.backgroundImage = "url('purveyorbgV3.jpeg')"
      }
  }

function notEnoughMP(){
    p1.style.visibility = "visible";
    p1.value = "Not enough MP!"
    p1_timeout(2000)
}

function spellStuff(character, price, img){
    character.value -= price;
    i_menu.src = ""
    i_menu.src = img//just pass this as a string
    i_menu.style.visibility = "visible"
}

function spellStuffUltima(img){//can't seem to get bg to work here
    i_menu.src = ""
    i_menu.src = img//just pass this as a string
    i_menu.style.visibility = "visible"

}

function critMessage(){
    p1.style.visibility = "visible";
    p1.value = "Critical hit!"
    p1_timeout(2000)
}

//get rid of the unique crit names and just use this, user = stat used for damage calc, chance = num to put into math.random
//def_stat = boss defense to use(phase_def or phase_mdef)
function DmgCalculator(user, chance, def_stat){
    let crit = Math.floor(Math.random() * chance); //higher crit rate
    if (crit == 1){
        hp.value -= ((final_dmg*user)*1.5)/def_stat;//turn this into a function
        critMessage()
    }else{
      console.log(final_dmg*user)/def_stat
      hp.value -= (final_dmg*user)/def_stat
    }   

}

    //order of calculation is base damage, then multiply by character stats, divide by boss def, then check for crit
function cooldown(atk_time){
    //adjusts cooldown depending on the attack being used to prevent spamming, by disabling mouse click
}