var LastBossAttacks = []//remember to add to this
function SpheresofInsanity(){
    i_menu.src = "spheres.jpeg" //i_menu is the image template
    i_menu.style.visibility = "visible"
    PE.play()
    PE.loop = false;
    setTimeout(()=>{ //2 hits on random party members
        let num_hits = 1; //this will need to be linked to how many 
        //surviving party members there are, then pick randomly between them
        while (num_hits !=3){ //two hits
            let target = randNumber(0, 3);
            console.log(target)
            let dmg = randNumber(80, 101);
            switch(true){
                case(target == 0): //reformat to use list of non-dead
                    var final_dmg_w = dmg/warrior_def
                    warrior_hp.value -= final_dmg_w; 
                    num_hits +=1
                    timeout_i_menu()
                break;
                case(target == 1):
                    var final_dmg_d = dmg/black_mage_def
                    black_mage_hp.value -= final_dmg_d;
                    num_hits +=1
                    timeout_i_menu()
                break;
                case(target == 2):
                    var final_dmg_l = dmg/white_mage_def
                    white_mage_hp.value -= final_dmg_l;
                    num_hits +=1
                    timeout_i_menu()
                }
        }
        i_menu.style.visibility = "hidden"
        counter()
    }, 3000);
    
};
function Polarity(){
    document.getElementById("Polarity");
    counter()
};
//switches background back, according to current phase
function changeBackground(){
  if (phase3called == true){
      document.body.style.backgroundImage = "url('trueformbg.png')"
    }else{
      document.body.style.backgroundImage = "url('purveyorbg.png')"
    }

}


function Borderof_Life(){ //Knocks targeted to 1 HP. 50% instakill chance in phase 3 
    //does not work on dead party members. 
    //Heals boss by what you lost
    i_menu.src = "BOL.png" 
    i_menu.style.visibility = "visible"
    document.body.style.backgroundImage = "url('BOLbg.png')"


    PE.play()//find new sfx
    PE.loop = false;

    setTimeout(()=>{ //this can probably be optimized
        let fate = randNumber(0,3); //choose 1 target 
        console.log(fate)
        const DeadNotDead = Math.random()<0.5//random boolean 
        switch(fate){
            case(0)://warrior 
            //if phase 3, add chance of instakill
                if (phase3called == true){ //he already won't target dead people 
                    //or if they're at 1hp
                    hp.value += warrior_hp.value -1 //add to boss's HP
                    warrior_hp.value = 1; //then knock player down to 1
                    if (DeadNotDead == true){
                        warrior_hp.value = 0;//then check for deaths after the turn
                        //will not attack if at 1 or dead

                    };                                     
                }else{ //if not phase 3
                    console.log(hp.value)
                    hp.value += warrior_hp.value -1 
                    warrior_hp.value = 1; 
                };
                     
            case(1): //black mage
                if (phase3called == true){
                    hp.value += black_mage_hp.value -1
                    black_mage_hp.value = 1;
                    if (DeadNotDead == true){
                        black_mage_hp.value = 0;
                    };
                }else{
                    console.log(hp.value)
                    hp.value += black_mage_hp.value -1;
                    black_mage_hp.value = 1;

                };

            break;
            case(2): //white mage
                if (phase3called == true){
                    white_mage_hp.value = 1;
                    if (DeadNotDead == true){
                        white_mage_hp.value = 0;
                    };
                }else{
                    console.log(hp.value)
                    console.log(white_mage_hp.value)
                    hp.value += white_mage_hp.value -1
                    white_mage_hp.value = 1;
                };

            break;
            default: 
            console.log("shits fucked")    

            };//switch ends here

        counter()
        i_menu.style.visibility = "hidden"
        //change this based on phase later
        changeBackground()
        LastBossAttacks.push("BorderofLife")
    }, 7000);
};//function ends here


function Spacial_Rift(){

    counter()
};

//addin phase 2\\
function Tendrils_of_the_Night(){

    counter()
};

function Halls_of_Oblivion(){

}

//add in phase 3\\
function Nightmare_Nascent(){//


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