

function Pierce_Evil(){
    let white_mage_mp = document.getElementById("l_mage_name_mp");
    //see above comment...
    if (white_mage_mp.value <6){
        notEnoughMP()
    }else{ 
        i_menu.classList.add("fade_quick");
        spellStuff(white_mage_mp, 6, "PierceEvil.jpg")
        const PE = new Audio("pierceevil.wav");
        PE.play()
        PE.loop = false;
        setTimeout(()=>{
              Randomizer(500, 95, 106)
               DmgCalculator(m_atks.get("white_mage"), 16, phase_mdef)//needs to follow the map, not the var version
               i_menu.classList.remove("fade_quick");
            hide_i_and_end()
        }, 2000);
        

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

//heals 66% of the target's max hp
function addAllyTargets(){
  console.log(ally_targets)
  const selected_ally = ally_targets.indexOf(this);
  switch(selected_ally){
      case 0: //knight
      //THANK FUCKING GOD IT FINALLY WORKS
          amt_healed = 363;
          //ensure it doesn't go over max
          if (warrior_dead == true){
              DeadMessage()
          }
          else if (warrior_hp.value + amt_healed > 550){//no need to check this, remove it
              Angels_Grace_Part2()
              warrior_hp.value = 550;
              //create a seperate function for the imagery/mp subtraction
          }else{
              Angels_Grace_Part2()
              warrior_hp.value += amt_healed;
          };
      break;

      case 1: //dark mage
          amt_healed = 310;
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
          amt_healed = 264;
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
          amt_healed = 248;
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


//all the usual visual stuff

//not sure how to balance healing yet

function Angels_Grace_Part2(){
  let white_mage_mp = document.getElementById("l_mage_name_mp");
  if (white_mage_mp.value < 33){
      notEnoughMP()
  }else{
      i_menu.classList.add("fade_fastest");
      spellStuff(white_mage_mp, 33, "AngelsGrace.jpg")
      h2.play()
      h2.loop = false;
      Timer(1000, hide_i_and_end)
      setTimeout(()=>{
            i_menu.classList.remove("fade_fastest");
      }, 1000)

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
  function addReviveTargets(){//could reformat to be used by boss as well, but not worth the mental suffering
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
      notEnoughMP()
  }else{
    i_menu.classList.add("fade");
      spellStuff(white_mage_mp, 50, "revival.png")
      const h2 = new Audio("heal2.mp3"); 
      h2.play()
      h2.loop = false;
      Timer(3000, hide_i_and_end)
      setTimeout(()=>{
            i_menu.classList.remove("fade");
      }, 3000)
  };
};




function Chain_Heal(){ //heals all allies 33% of their max hp, but not if they're dead
let white_mage_mp = document.getElementById("l_mage_name_mp");
if (white_mage_mp.value < 50){
    notEnoughMP()
}else{
    i_menu.classList.add("fade");
    spellStuff(white_mage_mp, 50, "chainheal.png")
    h2.play()
    h2.loop = true;
    
        setTimeout(()=>{
            i_menu.classList.remove("fade");
            h2.pause()
            hide_i_and_end()
                //hide_i_and_end()
            if (warrior_dead === false){
                warrior_hp.value += 182
                }
            if (black_mage_dead === false){
                black_mage_hp.value += 155
                }
            if (white_mage_dead === false){
                white_mage_hp.value += 132
                }
            if (red_mage_dead === false){
                red_mage_hp.value += 124
            };
            updatePlayers()
        }, 4500);
    
    }
}

function Supreme_Altar(){ //her ult, fully restores party to default state
    //if anyone is dead, change their dead status to false
    document.body.style.backgroundImage = ""
    document.body.style.backgroundImage = "url('altarbg.png')" //find sfx for this
    spellStuffUltima("SupremeAltar.jpg")
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
    RevertUltima()
        setTimeout(()=>{
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
          document.getElementById("r_mage_name_hp").value = 375;
          document.getElementById("warrior_name_mp").value = 180;
          document.getElementById("d_mage_name_mp").value = 390;
          document.getElementById("l_mage_name_mp").value = 420;
          document.getElementById("r_mage_name_mp").value = 540;
            changeBackground()
            hide_i_and_end()
        }, 7000);

};