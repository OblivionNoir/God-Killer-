

var p1_interval;
function boss_phase1(){
    if(trapped == true){
        //do nothing
        console.log("trapped")
    }else{
    p1_interval = setInterval(()=>{
        console.log("made it to interval")
        Borderof_Life()
        let boss_choice = randNumber(1,11)
        //might be a better way of setting percent chance.
            if (boss_choice == 1 | boss_choice ==2 | boss_choice ==3) //30% chance
                SpheresofInsanity()  //change this so it checks if ANY party members are <=1/dead
            else if(boss_choice ==10 | boss_choice ==9 && LastBossAttacks[-1] != "BorderofLife" 
            && LastBossAttacks[-2] != "BorderofLife" && hp.value <12500 && (!(warrior_hp.value<=1))){
                Borderof_Life()
            }
    }, 25000)//gets 5 seconds faster each phase, add a slight randomization 
}//else ends here
};

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
    for (let i = 0; i < defenses.length; i++){{
        defenses[i] /=2; 
        console.log(defenses[i])
 };

};
};
  //2 turn timer
function defend_timer(){
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
function countdown_p1(){
    setTimeout(()=>{
        trapped = false;
        console.log("no longer trapped")
    }, 50000)
    

 
}

function countdown_p2(){

}
function countdown_p3(){

}