
//this whole file is a mess that needs refactoring

var p1_interval; 
function boss_phase1(){
    trapped = false;//temp for testing
    if(trapped == true){
        //do nothing
        console.log("trapped")
    }else if (trapped == false){
    p1_interval = setInterval(()=>{
        console.log("made it to interval")
        //Borderof_Life()
        console.log("boss test")
        bosstest()
        CheckDeadStatus()
        let boss_choice = randNumber(1,11)
        //might be a better way of setting percent chance.
        //the way this is setup allows multiple attacks. Fix! 
            /*if (boss_choice == 1 | boss_choice ==2 | boss_choice ==3) //30% chance
                SpheresofInsanity()  //change this so it checks if ANY party members are <=1/dead
            else if(boss_choice ==10 | boss_choice ==9 && LastBossAttacks[-1] != "BorderofLife" 
            && LastBossAttacks[-2] != "BorderofLife" && hp.value <12500 && (!(warrior_hp.value<=1))){
                Borderof_Life()
            }*/
    }, 25000)//gets 5 seconds faster each phase, add a slight randomization 
}else{
    console.log("error"+ trapped)
}
};
function bosstest(){
    black_mage_hp.value = 0;
}
var p_2_interval; 
function boss_phase2(){
    clearInterval(p1_interval)//disable the first interval
    p_2_interval = setInterval(()=>{



    }, 20000)
  };

//phase 3 is never reverted so there's no need to set a stop for it 
function boss_phase3(){
    clearInterval(p_2_interval)
    setInterval(()=>{


    }, 15000)
  };
function revert_defense(){
    //change back to normal
    for (let i = 0; i < defenses.length; i++){{
        defenses[i] /=2; 
        console.log(defenses[i])
 };

};
};
  //2 turn timer
function defend_timer(){
       counter()
       defend_active = true; //then back to false when the timer expires
       //double everyone's defenses
       console.log("defend timer started")
       for (let i = 0; i < defenses.length; i++){
              defenses[i] *=2; 
              console.log(defenses[i])
       };

        switch(true){
            case (phase2):
            
            break;
            case (phase3):
            
            break;
            default: //phase 1 time
            
                setTimeout(()=>{
                    defend_active = false;
                    revert_defense();
                    //expires when the timeout finished
                }, 50000) //2 turns +10 sec, which varies by phase so account for that
                //extra 10 sec so it doesn't expire right before the attack hits 
              
            break; 
        };
    
};
    //phase 1 = 50sec
    //phase 2 = 40sec
    //phase 3 = 30sec
function trapped_countdown(time){ //2 turn countdown
    //attacks are already disabled by setting trapped to true
    setTimeout(()=>{
        trapped = false;
        console.log("no longer trapped")
    }, time)
}

function countdown_p2(){

}
function countdown_p3(){

}

function countdown_1turn(time_1turn){
    setTimeout(()=>{
        mirror = false;
        MirrorRevert()
        console.log("mirror no longer active")
    }, time_1turn)

}
function BLExpire(){
    setTimeout(()=>{
        BOL_active = false;
        console.log("BL no longer active")
        red_mage_def = 0.9;
        red_mage_mdef = 0.9;
        red_mage_atk = 1.5;
        red_mage_matk = 1.5;
        red_mage_ev = 0.2;//20%
        //then remove the color filter
    }, 25000)
}
