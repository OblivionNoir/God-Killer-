

var LastBossAttacks = []//remember to add to this
function SpheresofInsanity(){
    i_menu.src = "spheres.jpeg" 
    i_menu.style.visibility = "visible"
    PE.play()
    PE.loop = false;
    console.log(生活して修正)//test
     //2 hits on random party members
    //go through list of alive characters to add targets
    //for simplicities sake, target the character name, not the list index of AliveUpdate
};
function Polarity(){ //attemps to lower all defense stats, with a ~40% hit rate on each. Wears off on its own
    counter()//not sure if I need counter or ending3, check that
};



function Death_Claw(){ //heavy phys damage to one party member

    counter()

}

function Tendrils_of_the_Night(){ //Moderate damage to one ally, heals boss by 2.5x(?) that ammount

    counter()
};

//addin phase 2\\
function Halls_of_Oblivion(){ //randomly removes 1 of your party members temporarily and returns them with 1 hp

}

function Crimson_Rain(){//light damage to all party members, a modified version of this is always active in phase 3 where you constantly get lightly damaged until you win. 

    counter()
};
 
//add in phase 3\\

function Crimson_Rain_P3(){
    let blood_dmg = Math.floor(Math.random() * 10) + 5;
    warrior_hp.value -= blood_dmg;
    black_mage_hp.value -= blood_dmg;
    white_mage_hp.value -= blood_dmg;
    red_mage_hp.value -= blood_dmg;
    updatePlayers()
    setTimeout(Crimson_Rain_P3, 10000)
}

function Spirit_Crusher(){//extremely heavy damage to one party member and removes any buffs

}

function Nightmare_Nascent(){//Heavy damage to all party members
    //combo phys/magic attack, defenses are calculated 50/50


}
function Bleeding_Sun1(){ //turn 1 charge

    counter()
};
function Bleeding_Sun2(){ //Defend is required to survive.
  //900 base m damage, r mage will just barely survive with defend. 
  //no defend = everyone dies

    counter()
};