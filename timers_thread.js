var p1_interval;
function boss_phase1(){
    p1_interval = setInterval(()=>{
        console.log("made it to interval")
        let boss_choice = randNumber(1,11)
        //might be a better way of setting percent chance.
            if (boss_choice == 1 | boss_choice ==2 | boss_choice ==3) //30% chance
                SpheresofInsanity()  //change this so it checks if ANY party members are <=1/dead
            else if(boss_choice ==10 | boss_choice ==9 && LastBossAttacks[-1] != "BorderofLife" 
            && LastBossAttacks[-2] != "BorderofLife" && hp.value <12500 && (!(warrior_hp.value<=1))){
                Borderof_Life()
            }
    }, 25000)//gets 5 seconds faster each phase
};

var p_2_interval;
function boss_phase2(){
    clearInterval(p1_interval)//disable the first intrval
    p_2_interval = setInterval(()=>{




    }, 20000)
  };

//phase 3 is never reverted so there's no need to set a stop for it 
function boss_phase3(){
    clearInterval(p_2_interval)
    setInterval(()=>{


    }, 15000)
  };

function defend_timer(){
    setTimeout(()=>{
        //expires when the timeout finished
    }, 50000) //2 turns, 50 seconds
  }