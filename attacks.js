

  //warrior attacks

  function Thousand_Men(){ //his ult

      counter()
  };
  function Shadow_Self(){

      counter()
  };
  function Whims_of_Fate(){

      counter()

  };
  function Rebellion(){
    //Raises everyone's mag/phys attack by 15% for 3 turns
    //can't be used if already in effect
  }

  function Deathblow(){
    //Like a normal attack but a guaranteed crit. 

  }

  //dark mage attacks
  function basic(){


          let l_crit = Math.floor(Math.random() * 16);
          console.log("value" + l_crit)
          //crit
          if (l_crit == 1){
              Randomizer(120)
              hp.value -= final_dmg;
              p1.style.visibility = "visible";
              p1.value = "Critical hit!"
              console.log(final_dmg)
              setTimeout(()=>{
                  p1.style.visibility = "hidden";
                  ending3()
            
              }, 2000)


          //no crit        
          }else{
              let rand_dmg = randNumber(50,70) ; //random value between 50 and 70
              let final_dmg = rand_dmg/phase_def;
              hp.value -= final_dmg;
              console.log(final_dmg)
              setTimeout(()=>{
                  p1.style.visibility = "hidden";
                  ending3()
              }, 2000)


          };    

};

  function Radiant_Supernova(){ //her ult
      document.body.style.backgroundImage = "";
      document.body.style.backgroundImage = "url('blackhole.png')"
          //ultimas don't have a crit or mp value
          //visibility image for 3 seconds, then turn it off
          i_menu.src = "" //Reset to blank prevent previous image from showing
          i_menu.src = "RadiantSupernova.jpeg"
          i_menu.style.visibility = "visible"
          const DC = new Audio("DarkCreepy.mp3"); //change this
          DC.volume = 0.5;
          DC.play()
          DC.loop = false;
          setTimeout(()=>{
              changeBackground()
                                              //this will change based on phase
              DC.pause()
              Randomizer(2500)
                  hp.value -= final_dmg/phase_mdef;
              i_menu.style.visibility = "hidden"
              ending3()
              RevertUltima()
          }, 7000);
      
          
  };
  

//This one is slighly more expensive because of the double crit rate
  function Mirage_Blade(){ 
      let black_mage_mp = document.getElementById("d_mage_name_mp");
      //needs to be redefined every use or it references the OLD mp value and only works once
      if (black_mage_mp.value <22){ 
          p1.style.visibility = "visible";
          p1.value = "Not enough MP!"
          setTimeout(()=>{
              p1.style.visibility = "hidden"
          },2000)
      }else{ 
          black_mage_mp.value -= 22;
          i_menu.src = "" //Reset to blank prevent previous image from showing
          i_menu.src = "MirageBlade.jpg" //i_menu is the image template
          i_menu.style.visibility = "visible"
          PE.play()
          PE.loop = false;
          setTimeout(()=>{
                  Randomizer(1200)
                  hp.value -= (final_dmg/phase_def); //hp = boss hp
                  let d_crit = Math.floor(Math.random() * 9); //higher crit rate
                  if (d_crit == 8){
                        Randomizer(1400)
                      hp.value -= (final_dmg/phase_def);
                      p1.style.visibility = "visible";
                      p1.value = "Critical hit!"
                      setTimeout(()=>{
                          p1.style.visibility = "hidden"
                      }, 3000) 
                  };    
      
              i_menu.style.visibility = "hidden"
              ending3()
          }, 3000);
          
      };
  
  };
  
  var trapped; //this can just be undefined for now, gets assigned boolean later
  //this is actually incredibly powerful. Give it a very high MP cost 
  function Entrapment(){ //Makes boss immobile for 2 turns
    let black_mage_mp = document.getElementById("d_mage_name_mp");
    if (black_mage_mp.value < 65){
        p1.style.visibility = "visible";
        p1.value = "Not enough MP!"
        setTimeout(()=>{
            p1.style.visibility = "hidden"
        },2000)
        //ensure it isn't already in effect
    }if (trapped == true){
        //make this an actual window later
        console.log("already trapped")

    }else{ //execute spell
        black_mage_mp.value -= 65;
        i_menu.src = "" //Reset to blank prevent previous image from showing
        i_menu.src = "Entrapment.jpg"
        i_menu.style.visibility = "visible"
        //find sfx
        setTimeout(()=>{
            i_menu.style.visibility = "hidden"

        }, 3000);
        //change timer according to phase
        trapped = true;
        CounterSwitch()

    } 
}//closes off the first else statement

//some math: 
//First phase of the boss consists of 15k hp, or 18k phys and 16.5k mag with stats taken into account
//phase 2: 15k hp, 21k phys, 19.5k mag
//phase 3: 15k hp, 22.5k phys, 24k mag
//That equals a total of 45k hp, 61.5k phys, 60k mag
//There are more magic attacks, so lets say a 70% magic and 30% physical ratio
//That means ~60450 total damage to win, or 60 moderate spells. 
//Across 4 characters, that's 15 spells each.
//With a mp/power ratio of 1:50, that's 750 mp total to kill the boss.
//But one character is focused on healing, so let's subtract that from the total mp pool of 1020
//This leaves me with 740 mp to work with across all 3 characters...not enough. 
//With a 1:75 mp/power ratio, that gives me a 1125 mp pool to work with, not counting the healer. 
//Taking the expensive spells like Entrapment into account, I think this is a good start. 
  function Black_Fire(){ //moderate spell damage
    let black_mage_mp = document.getElementById("d_mage_name_mp");
    if (black_mage_mp.value <14){
        p1.style.visibility = "visible";
        p1.value = "Not enough MP!"
        setTimeout(()=>{
            p1.style.visibility = "hidden"
        }, 3000)
    }else{ 
        black_mage_mp.value -= 14;
        //visibility image for 3 seconds, then turn it off
        i_menu.src = "" //Reset to blank prevent previous image from showing
        i_menu.src = "blackfire.png"
        i_menu.style.visibility = "visible"
        const PE = new Audio("pierceevil.wav"); //find new sfx
        PE.play()
        PE.loop = false;
        setTimeout(()=>{
                Randomizer(1000)
                hp.value -= final_dmg - phase_mdef;
                let d_crit = Math.floor(Math.random() * 16);
                if (d_crit == 15){
                    hp.value -= 1200 - phase_mdef;
                    p1.style.visibility = "visible";
                    p1.value = "Critical hit!"
                    setTimeout(()=>{
                        p1.style.visibility = "hidden"
                    }, 3000)
                };    
            i_menu.style.visibility = "hidden"
            ending3()
        }, 3000);
        
    };
  }
var mirror;
  function Shattered_Mirror(){
        //Severely lower's bosses defenses for one turn, attacks do 2x
        //ultimas don't count
    let black_mage_mp = document.getElementById("d_mage_name_mp");
    if (black_mage_mp.value < 30){
        p1.style.visibility = "visible";
        p1.value = "Not enough MP!"
        setTimeout(()=>{
            p1.style.visibility = "hidden"
        },2000)
        //ensure it isn't already in effect
    }if (mirror == true){
        //make this an actual window later
        console.log("mirror already in effect")

    }else{ //execute spell
        black_mage_mp.value -= 30;
        i_menu.src = "" //Reset to blank prevent previous image from showing
        i_menu.src = "shatteredmirror.png"
        i_menu.style.visibility = "visible"
        //find sfx
        setTimeout(()=>{
            i_menu.style.visibility = "hidden"
            ending3()

        }, 3000);
        //change timer according to phase
        mirror = true;
        CounterSwitch()
        MirrorLower()
    } 

  }
  //light mage attacks
//change the loop to go through 5
function MirrorLower(){
    //lower boss stats
    phase_def /= 2;
    phase_mdef /= 2;
    console.log(phase_def, phase_mdef)

}
function MirrorRevert(){
    //revert them back
    phase_def *= 2;
    phase_mdef *= 2;
    console.log(phase_def, phase_mdef)
}

    //assign counter time according to phase

  function Pierce_Evil(){
      let white_mage_mp = document.getElementById("l_mage_name_mp");
      //see above comment...
      if (white_mage_mp.value <6){
          p1.style.visibility = "visible";
          p1.value = "Not enough MP!"
          setTimeout(()=>{
              p1.style.visibility = "hidden"
          }, 3000)
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
                Randomizer(500)
                  hp.value -= final_dmg - phase_mdef;
                  let l_crit = Math.floor(Math.random() * 16);
                  if (l_crit == 15){
                      hp.value -= 700 - phase_mdef;
                      p1.style.visibility = "visible";
                      p1.value = "Critical hit!"
                      setTimeout(()=>{
                          p1.style.visibility = "hidden"
                      }, 3000)
                  };    
              i_menu.style.visibility = "hidden"
              ending3()
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

function addAllyTargets(){
    console.log(ally_targets)
    const selected_ally = ally_targets.indexOf(this);
    switch(selected_ally){
        case 0: //knight
        //THANK FUCKING GOD IT FINALLY WORKS
            console.log("healed knight")
            amt_healed = 303;
            //ensure it doesn't go over max
            if (warrior_hp.value + amt_healed > 550){
                Angels_Grace_Part2()
                warrior_hp.value = 550;
                //create a seperate function for the imagery/mp subtraction
            }else{
                Angels_Grace_Part2()
                warrior_hp.value += amt_healed;
            };
            //remove the listener
           
        break;
        case 1: //dark mage

            console.log("healed dark mage")
            amt_healed = 259;
            if (black_mage_hp + amt_healed > 470){
                black_mage_hp.value = 470;
                Angels_Grace_Part2()
            }else{
                black_mage_hp.value += amt_healed;
                Angels_Grace_Part2()
            };
        break;
        case 2: //light mage
            console.log("healed light mage")
            amt_healed = 220;
            if (white_mage_hp + amt_healed > 400){
                Angels_Grace_Part2()
                white_mage_hp.value = 400;
            }else{
                Angels_Grace_Part2()
                white_mage_hp.value += amt_healed;
            };
        break;
        case 3: //rmage
            console.log("healed red mage")
            amt_healed = 209;
            if (red_mage_hp + amt_healed > 380){
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
    if (white_mage_mp.value < 20){
        p1.style.visibility = "visible";
        p1.value = "Not enough MP!"
        setTimeout(()=>{
            p1.style.visibility = "hidden"
        }, 3000)
    }else{
        white_mage_mp.value -= 20;
        i_menu.src = "" //Reset to blank prevent previous image from showing
        i_menu.src = "AngelsGrace.jpg"
        i_menu.style.visibility = "visible"
        const h2 = new Audio("heal2.mp3"); 
        h2.play()
        h2.loop = false;
        setTimeout(()=>{                     
            i_menu.style.visibility = "hidden"
            ending3()
        }, 1000);
    };
  };
function stillAlive(){
    p1.style.visibility = "visible";
    p1.value = "That ally is still alive!"
    setTimeout(()=>{
        p1.style.visibility = "hidden"
    }, 2000)
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
        setTimeout(()=>{
            p1.style.visibility = "hidden"
        }, 3000)
    }else{
        white_mage_mp.value -= 50;
        i_menu.src = "revival.png"
        i_menu.style.visibility = "visible"
        const h2 = new Audio("heal2.mp3"); //find new sfx
        h2.play()
        h2.loop = false;
        //this can probably be a function
        setTimeout(()=>{                     
            i_menu.style.visibility = "hidden"
            ending3()
        }, 3000);
    };
  };


  function ChainHeal(){ //heals all allies a small amount
      

  }

  function Supreme_Altar(){ //her ult, fully restores party to default state
      //if anyone is dead, change their dead status to false
      document.body.style.backgroundImage = "url('altarbg.png')" //find sfx for this
        isAlive(wa)
        isAlive(dmi)
        isAlive(lmi)
        isAlive(rmi)
      //then fully restore mp and hp
      document.getElementById("warrior_name_hp").value = 550;
      document.getElementById("d_mage_name_hp").value = 470;
      document.getElementById("l_mage_name_hp").value = 400;
      document.getElementById("r_mage_name_hp").value = 380;
      document.getElementById("warrior_name_mp").value = 120;
      document.getElementById("d_mage_name_mp").value = 260;
      document.getElementById("l_mage_name_mp").value = 280;
      document.getElementById("r_mage_name_mp").value = 360;


      //fix any debuffs 
      warrior_def = 1.6;
      warrior_mdef = 1.4;
      black_mage_def = 1.3;
      black_mage_mdef = 1.7;
      white_mage_def = 1.2;
      white_mage_mdef = 1.8;
      warrior_ev = 0.05;
      black_mage_ev = 0.1;
      white_mage_ev = 0.15;
      red_mage_def = 1.1;
      red_mage_mdef = 1.2;
      red_mage_ev = 0.2;

      i_menu.src = "SupremeAltar.jpg"
      i_menu.style.visibility = "visible"
      RevertUltima()
          setTimeout(()=>{
              changeBackground()
              i_menu.style.visibility = "hidden"
              ending3()
          }, 7000);

  };


  //red mage attacks

  function Scarlet_Subversion(){
    //ult
    //lower hp = more damage. 
    //Base damage at 1hp is 4000 and it subtracts 10 for each hp after that 
  }
  function Dance_of_Death(){
    //Lower self defenses and ev to 0 for 3 turns, but gain very high crit chance and a 1.5x damage multiplier
    //Smaller multiplier on ult, something like 1.2x
  }

  function Bloody_Vengeance(){
    //ignores def, works like a much stronger basic attack with a slightly higher
    //crit rate. Physical
  }

  function Chain_Lightning(){
    //hits 4 times, each with a slight damage randomizer, 
    //then the 5th is all the previous combined
    //so something like 60, 65, 63, 70, 258 for 516 total 
  }

  function My_Turn(){
    //Reversal move that waits in the background and waits for her to be targeted. 
    //Only one active at a time 
    //Reflects attack back on the boss for 2x base damage. Doesn't trigger for Bleeding Sun. 
  }







