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