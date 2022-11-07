var LastBossAttacks = []//remember to add to this
function SpheresofInsanity(){
    i_menu.src = "spheres.jpeg" //i_menu is the image template
    i_menu.style.visibility = "visible"
    PE.play()
    PE.loop = false;
    setTimeout(()=>{ //2 hits on random party members
        let num_hits = 0; //this will need to be linked to how many 
        //surviving party members there are, then pick randomly between them
        while (num_hits !=3){ //two hits
            let target = randNumber(0, 3);
            console.log(target)
            Randomizer(105)
            switch(true){
                case(target == 0): //reformat to use list of non-dead
                    var final_dmg_w = final_dmg/warrior_def
                    warrior_hp.value -= final_dmg_w; 
                    num_hits +=1
                    timeout_i_menu()
                break;
                case(target == 1):
                    var final_dmg_d = final_dmg/black_mage_def
                    black_mage_hp.value -= final_dmg_d;
                    num_hits +=1
                    timeout_i_menu()
                break;
                case(target == 2):
                    var final_dmg_l = final_dmg/white_mage_def
                    white_mage_hp.value -= final_dmg_l;
                    num_hits +=1
                    timeout_i_menu()
                }
        }
        i_menu.style.visibility = "hidden"
        counter()
    }, 3000);
    
};
function Polarity(){ //attemps to lower all defense stats, with a ~40% hit rate on each. Wears off on its own
    counter()//not sure if I need counter or ending3, check that
};



function Crimson_Rain(){//light damage to all party members

    counter()
};


function Death_Claw(){ //heavy phys damage to one party member

    counter()

}
//addin phase 2\\
function Tendrils_of_the_Night(){ //Moderate damage to one ally, heals boss by 2.5x(?) that ammount

    counter()
};

function Halls_of_Oblivion(){ //randomly removes 1 of your party members temporarily and returns them with 1 hp

}

//add in phase 3\\
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

    const NANI = new Audio("omaewa.mp3");
    NANI.play()
    NANI.loop = false;
    counter()
};