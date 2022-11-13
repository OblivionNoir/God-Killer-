

function Pierce_Evil(){
    let white_mage_mp = document.getElementById("l_mage_name_mp");
    //see above comment...
    if (white_mage_mp.value <6){
        p1.style.visibility = "visible";
        p1.value = "Not enough MP!"
        p1_timeout(2000)
    }else{ 
        white_mage_mp.value -= 6;
        //visibility image for 3 seconds, then turn it off
        i_menu.src = "" //Reset to blank prevent previous image from showing
        i_menu.src = "PierceEvil.jpg"
        i_menu.style.visibility = "visible"
        const PE = new Audio("pierceevil.wav");
        PE.play()
        PE.loop = false;
        setTimeout(()=>{
              Randomizer(500, 95, 106)
                let l_crit = Math.floor(Math.random() * 16);
                if (l_crit == 1){
                    hp.value -= ((final_dmg*white_mage_matk)*1.5)/phase_mdef;
                    p1.style.visibility = "visible";
                    p1.value = "Critical hit!"
                    p1_timeout(2000)
                }else{
                  console.log(final_dmg*white_mage_matk)/phase_mdef
                  hp.value -= (final_dmg*white_mage_matk)/phase_mdef;
                }  
            hide_i_and_end()
        }, 3000);
        

    };

};


function removeAllyTargets(){ 
  for(let i = 0; i < ally_targets.length; i++){
  ally_targets[i].removeEventListener("click", addAllyTargets)
}
}

//not sure if this list even needs to be created, but leave it until everything
function Angels_Grace(){ //moderate healing spell on one ally
  //make the list of targets
  makeAllyTargets();
  for (let i = 0; i < ally_targets.length; i++){
      //add the listener to each target
      ally_targets[i].addEventListener('click', addAllyTargets);
            //amt healed is 55% of the target's max. 
  }; 

};

//Need to add conditional to prevent targeting dead characters!
function addAllyTargets(){
  console.log(ally_targets)
  const selected_ally = ally_targets.indexOf(this);
  switch(selected_ally){
      case 0: //knight
      //THANK FUCKING GOD IT FINALLY WORKS
          amt_healed = 303;
          //ensure it doesn't go over max
          if (warrior_dead == true){
              DeadMessage()
          }
          else if (warrior_hp.value + amt_healed > 550){
              Angels_Grace_Part2()
              warrior_hp.value = 550;
              //create a seperate function for the imagery/mp subtraction
          }else{
              Angels_Grace_Part2()
              warrior_hp.value += amt_healed;
          };
      break;

      case 1: //dark mage
          amt_healed = 259;
          if (black_mage_dead == true){
              DeadMessage()
          }
          else if (black_mage_hp + amt_healed > 470){
              black_mage_hp.value = 470;
              Angels_Grace_Part2()
          }else{
              black_mage_hp.value += amt_healed;
              Angels_Grace_Part2()
          };
      break;

      case 2: //light mage
          amt_healed = 220;
          if (white_mage_dead == true){
              DeadMessage()
          }
          else if (white_mage_hp + amt_healed > 400){
              Angels_Grace_Part2()
              white_mage_hp.value = 400;
          }else{
              Angels_Grace_Part2()
              white_mage_hp.value += amt_healed;
          };
      break;
      
      case 3: //rmage
          amt_healed = 209;
          if (red_mage_dead == true){
              DeadMessage()
          }
          else if (red_mage_hp + amt_healed > 380){
              Angels_Grace_Part2()
              red_mage_hp.value = 380;
          }else{
              Angels_Grace_Part2()
              red_mage_hp.value += amt_healed;
          };
      default:
          console.log("heal switch - shits fucked")
      break;

  };
  ally_targets.forEach(removeAllyTargets)

};

var h2 = new Audio("heal2.mp3"); 
//all the usual visual stuff

//not sure how to balance healing yet

function Angels_Grace_Part2(){
  let white_mage_mp = document.getElementById("l_mage_name_mp");
  if (white_mage_mp.value < 20){
      p1.style.visibility = "visible";
      p1.value = "Not enough MP!"
      p1_timeout(2000)
  }else{
      white_mage_mp.value -= 20;
      i_menu.src = "" //Reset to blank prevent previous image from showing
      i_menu.src = "AngelsGrace.jpg"
      i_menu.style.visibility = "visible"
      h2.play()
      h2.loop = false;
      Timer(1000, hide_i_and_end)

  };
};
function stillAlive(){
  p1.style.visibility = "visible";
  p1.value = "That ally is still alive!"
  p1_timeout(2000)
}

//below here is rebirth stuff. Do not touch angel's grace

function removeReviveTargets(){
  for(let i = 0; i < ally_targets.length; i++){
  ally_targets[i].removeEventListener("click", addReviveTargets)
}
  
}

function Rebirth(){ //revive a fallen ally with 50% hp
  makeAllyTargets()
  for (let i = 0; i < ally_targets.length; i++){
      ally_targets[i].addEventListener('click', addReviveTargets);
  };

};
  function addReviveTargets(){
      console.log(ally_targets)
      const revived_ally = ally_targets.indexOf(this);
      switch(revived_ally){
          case 0:
              if (warrior_dead == true){
                  warrior_dead == false;
                  RebirthPart2()
                  console.log("revived knight")
                  isAlive(wa)
              }else{
                  stillAlive()
              };
          break;
          case 1:
              if (black_mage_dead == true){
                  black_mage_dead == false;
                  RebirthPart2()
                  console.log("revived dark mage")
                  isAlive(dmi)
              }else{
                  stillAlive()
              }
          break;
          case 2:
              if (white_mage_dead == true){
                  white_mage_dead == false;
                  RebirthPart2()
                  console.log("revived light mage")
                  isAlive(lmi)
              }else{
                  stillAlive()
              }
          break;
          case 3: 
          if (red_mage_dead == true){
              red_mage_dead == false;
              RebirthPart2()
              console.log("revived red mage")
              isAlive(rmi)
          }else{
              stillAlive()
          }
          break;
          default:
              console.log("revive switch - shits fucked")
          break;
      };
   
      ally_targets.forEach(removeReviveTargets)

  };


//graphical stuff, mp cost, etc
function RebirthPart2(){
  let white_mage_mp = document.getElementById("l_mage_name_mp");
  if (white_mage_mp.value < 50){
      p1.style.visibility = "visible";
      p1.value = "Not enough MP!"
      p1_timeout(2000)
  }else{
      white_mage_mp.value -= 50;
      i_menu.src = "revival.png"
      i_menu.style.visibility = "visible"
      const h2 = new Audio("heal2.mp3"); 
      h2.play()
      h2.loop = false;
      //this can probably be a function
      Timer(4000, hide_i_and_end)
  };
};

//costs 40$ more than angel's grace. Slighly more efficient in terms of mp cost/total amt healed ratio

//this still needs a visual! 
function Chain_Heal(){ //heals all allies 25% of their max hp, but not if they're dead
  if (warrior_dead === false){
      warrior_hp.value += 138//it won't go over max by default so no need to check. Rare moment of simplicity
  }
  if (black_mage_dead === false){
      black_mage_hp.value += 117
  }
  if (white_mage_dead === false){
      white_mage_hp.value += 100
  }
  if (red_mage_dead === false){
      red_mage_hp.value += 95
  }
  ending3()
}

function Supreme_Altar(){ //her ult, fully restores party to default state
    //if anyone is dead, change their dead status to false
    document.body.style.backgroundImage = "url('altarbg.png')" //find sfx for this
      isAlive(wa)
      isAlive(dmi)
      isAlive(lmi)
      isAlive(rmi)
    //then fully restore mp and hp
    document.getElementById("warrior_name_hp").value = 550;//going to leave this alone, because the hp values are hardcoded in the html. 
    //Easier that way because of the progress bars
    //Messing with maps here is a disaster waiting to happen
    document.getElementById("d_mage_name_hp").value = 470;
    document.getElementById("l_mage_name_hp").value = 400;
    document.getElementById("r_mage_name_hp").value = 380;
    document.getElementById("warrior_name_mp").value = 180;
    document.getElementById("d_mage_name_mp").value = 390;
    document.getElementById("l_mage_name_mp").value = 420;
    document.getElementById("r_mage_name_mp").value = 540;


    //fix any debuffs, but don't lower it if the value is currently raised
    if (defs.get('warrior')<1.7){
        defs.set('warrior', 1.7)
    }
    if (m_defs.get('warrior')<1.4){
        m_defs.set('warrior', 1.4)
    }
    if (phys_atks.get('warrior')<1.4){
        phys_atks.set('warrior', 1.4)
    }
    if (m_atks.get('warrior')<1.1){
        m_atks.set('warrior', 1.1)
    }
    if (evs.get('warrior')>0.05){
        evs.set('warrior', 0.05)
    };

    if (defs.get('black_mage')<1.3){
        defs.set('black_mage', 1.3)
    }
    if (m_defs.get('black_mage')<1.6){
        m_defs.set('black_mage', 1.6)
    }
    if (phys_atks.get('black_mage')<1.2){
        phys_atks.set('black_mage', 1.2)
    }
    if (m_atks.get('black_mage')<1.4){
        m_atks.set('black_mage', 1.4)
    }
    if (evs.get('black_mage')> 0.1){
        evs.set('black_mage', 0.1)
    };
    
    if (defs.get('white_mage')<1.2){
        defs.set('white_mage', 1.2)
    }
    if (m_defs.get('white_mage')<1.4){
        m_defs.set('white_mage', 1.4)
    }
    if (phys_atks.get('white_mage')<1){
        phys_atks.set('white_mage', 1)
    }
    if (m_atks.get('white_mage')<1.4){
        m_atks.set('white_mage', 1.4)
    }
    if (evs.get('white_mage')>0.10){
        evs.set('white_mage', 0.10)
    };

    if (defs.get('red_mage')<0.9){
        defs.set('red_mage', 0.9)
    }
    if (m_defs.get('red_mage')<0.9){
        m_defs.set('red_mage', 0.9)
    }
    if (phys_atks.get('red_mage')<1.5){
        phys_atks.set('red_mage', 1.5)
    }
    if (m_atks.get('red_mage')<1.5){
        m_atks.set('red_mage', 1.5)
    }
    if (evs.get('red_mage')>0.2){
        evs.set('red_mage', 0.2)
    };//yanderedev would be proud of this
    i_menu.src = "SupremeAltar.jpg"
    i_menu.style.visibility = "visible"
    RevertUltima()
        setTimeout(()=>{
            changeBackground()
            hide_i_and_end()
        }, 7000);

};