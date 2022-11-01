  //order of calculation is base damage, then multiply by character stats, divide by boss def, then check for crit
function cooldown(atk_time){
    //adjusts cooldown depending on the attack being used to prevent spamming, by disabling mouse click
}
//crit = 1.5x damage, adjust that for the existing spells
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
    //very quick cooldown, low mp cost

  }


  function defend(character){
    console.log(character + " made it") 
    //Lasts 20 seconds.
    //If defending, that character can't do anything else but their defense is raised 3x. 
    //Essential to survive Bleeding Sun at the end
  }

  //dark mage attacks

  function Radiant_Supernova(){ //her ult
      document.body.style.backgroundImage = "";
      document.body.style.backgroundImage = "url('blackhole.png')"
          //ultimas don't have a crit or mp value, and aren't affected by atk stats
          //visibility image for 3 seconds, then turn it off
          i_menu.src = "" //Reset to blank prevent previous image from showing
          i_menu.src = "RadiantSupernova.jpeg"
          i_menu.style.visibility = "visible"
          const DC = new Audio("DarkCreepy.mp3"); 
          DC.volume = 0.5;
          DC.play()
          DC.loop = false;
          setTimeout(()=>{
              changeBackground()
                                             
              DC.pause()
              Randomizer(5500, 98, 103)//Ultimas have a smaller randomizer so the percentage doesn't knock too much off
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
          p1_2sec()
      }else{ 
          black_mage_mp.value -= 22;
          i_menu.src = "" //Reset to blank prevent previous image from showing
          i_menu.src = "MirageBlade.jpg" //i_menu is the image template
          i_menu.style.visibility = "visible"
          PE.play()
          PE.loop = false;
          setTimeout(()=>{
                  Randomizer(1200, 95, 106)
                  let d_crit = Math.floor(Math.random() * 9); //higher crit rate
                  if (d_crit == 1){
                      hp.value -= ((final_dmg*black_mage_atk)*1.5)/phase_def;
                      p1.style.visibility = "visible";
                      p1.value = "Critical hit!"
                      timeout_ending()
                  }else{
                    console.log(final_dmg*black_mage_atk)/phase_def
                    hp.value -= (final_dmg*black_mage_atk)/phase_def
                  }   
      
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
        p1_2sec()
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
            ending3()
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
        p1_3sec()
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
                Randomizer(1000, 95, 106)
                let d_crit = Math.floor(Math.random() * 16);
                if (d_crit == 1){
                    hp.value -= ((final_dmg*black_mage_matk)*1.5)/phase_mdef;
                    p1.style.visibility = "visible";
                    p1.value = "Critical hit!"
                    setTimeout(()=>{
                        p1.style.visibility = "hidden"
                    }, 3000)
                }else{
                    console.log(final_dmg*black_mage_matk)/phase_mdef
                    hp.value -= (final_dmg*black_mage_matk)/phase_mdef;
                }  
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
        p1_2sec()
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
          p1_3sec()
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
                      p1_3sec()
                  }else{
                    console.log(final_dmg*white_mage_matk)/phase_mdef
                    hp.value -= (final_dmg*white_mage_matk)/phase_mdef;
                  }  
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
        p1_3sec()
    }else{
        white_mage_mp.value -= 20;
        i_menu.src = "" //Reset to blank prevent previous image from showing
        i_menu.src = "AngelsGrace.jpg"
        i_menu.style.visibility = "visible"
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
    p1_2sec()
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
        p1_3sec()
    }else{
        white_mage_mp.value -= 50;
        i_menu.src = "revival.png"
        i_menu.style.visibility = "visible"
        h2.play()
        h2.loop = false;
        //this can probably be a function
        setTimeout(()=>{                     
            i_menu.style.visibility = "hidden"
            ending3()
        }, 4000);
    };
  };

//costs 40% more than angel's grace. Slightly more efficient in terms of mp cost/total amt healed ratio
  function Chain_Heal(){ //heals all allies 25% of their max hp, but not if they're dead
    let white_mage_mp = document.getElementById("l_mage_name_mp");
    if (white_mage_mp.value < 28){
        p1.style.visibility = "visible";//this should be a function
        p1.value = "Not enough MP!"
        p1_3sec()

    }else{
        white_mage_mp.value -= 28;
        i_menu.src = "";
        i_menu.src = "chainheal.png"
        i_menu.style.visibility = "visible"
        h2.play()
        //h2.loop = false;
        timeout_i_menu()
        if (warrior_dead == false){
            warrior_hp.value += 138//it won't go over max by default so no need to check. Rare moment of simplicity
        }
        if (black_mage_dead == false){
            black_mage_hp.value += 118
        }
        if (white_mage_dead == false){
            white_mage_hp.value += 100
        }
        if (red_mage_dead == false){
            red_mage_hp.value += 95
        };
    };
  
  };

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
      document.getElementById("warrior_name_mp").value = 180;
      document.getElementById("d_mage_name_mp").value = 390;
      document.getElementById("l_mage_name_mp").value = 420;
      document.getElementById("r_mage_name_mp").value = 540;


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
/*
max hp = 380
Lets start with 1000 base dmg at max hp, then add a 1.01% multipler per 1 hp lost, so it scales at an increasing speed
So for example 





*/

//Aha! I have found a way to make the damage scale with hp lost! Praise my genius!
//remembber to cut out the decimals

  //red mage attacks
  //Kinda just ended up changing random numbers but it looks good to me
var SSList = [];
  function SScalculation(){
    //ult
    //lower hp = more damage. 
    var loop_margin = 1; //reset loop margin to prevent numbers getting all negative and fucked up
    for(let i = 0; i < red_mage_hp.value; i++){
        loop_margin *= 1.0055;  //links back to the base dmg of 1000 to increase the multiplier per hp lost
        let z = (9750 - (1000 * loop_margin))//Final damage based on hp
        SSList.push(z)
    }
    return SSList[SSList.length - 1];
    //store in an external list, then return the last value in the list
};
function Scarlet_Subversion(){  
    SS_Part2()
    console.log(SScalculation())
};

function SS_Part2(){
    document.body.style.backgroundImage = "";
    document.body.style.backgroundImage = "url('SSBG.png')"
        //ultimas don't have a crit or mp value
        //visibility image for 3 seconds, then turn it off
        i_menu.src = "" //Reset to blank prevent previous image from showing
        i_menu.src = "SS.png"
        i_menu.style.visibility = "visible"
        const boom = new Audio("boom.mp3"); 
        boom.play()
        setTimeout(()=>{
            changeBackground()
            i_menu.style.visibility = "hidden"
            ending3()
            RevertUltima()
            hp.value -= SScalculation()+1000 //not sure why this is only affecting it if she's at max hp, but hey, it works!
        }, 7000);
    


}
function Borderof_Life(){ //adjust for use by red mage
    //Cut defenses in exchange for much higher attack for 20 seconds
    //Can be paired with SS for an even more high risk high reward combo
    //will require creation of attack stats
    i_menu.src = ""
    i_menu.src = "BOL.png" 
    i_menu.style.visibility = "visible"
    PE.play()//find new sfx
    PE.loop = false;

    
};
  function Bloody_Vengeance(){
    //ignores def, works like a much stronger basic attack with a slightly higher
    //crit rate. Physical
    let red_mage_mp = document.getElementById("r_mage_name_mp");
    if (red_mage_mp.value <26){ 
        p1.style.visibility = "visible";
        p1.value = "Not enough MP!"
        p1_2sec()
    }else{ 
        red_mage_mp.value -= 26;
        i_menu.src = "" //Reset to blank prevent previous image from showing
        i_menu.src = "bloodyvengeance1.png" 
        i_menu.style.visibility = "visible"
        PE.play()
        PE.loop = false;
        setTimeout(()=>{
             Randomizer(1300, 95, 106)
                let r_crit = Math.floor(Math.random() * 13); 
                if (r_crit == 1){ 
                    hp.value -= (final_dmg*red_mage_atk)*1.5;
                    p1.style.visibility = "visible";
                    p1.value = "Critical hit!"
                    p1_3sec()
                }else{
                    console.log(final_dmg*red_mage_atk)
                    hp.value -= (final_dmg*red_mage_atk); //hp = boss hp
                }
            i_menu.style.visibility = "hidden"
            ending3()
        }, 3000);
    };
  };


var FinalCL = []//stores the final calculated damage of all 5 strikes for an accurate total. Clear the list when the function ends
function CLCalc(crit, hit_name){
    if (crit == 1){
        p1.style.visibility = "visible";
        hit_name *= 1.5
        console.log(hit_name)
        p1.value = "Critical hit! " + hit_name.toFixed(0) + " damage!"
        //Create seperate variable with the multiplied value THEN do the toFixed? 
        hp.value -= hit_name.toFixed(0);
        FinalCL.push(hit_name)//no toFixed yet to avoid a string
    }else{
        p1.style.visibility = "visible";
        p1.value =  hit_name.toFixed(0) + " damage!"
        //p1_2sec()
        hp.value -= hit_name.toFixed(0);
        FinalCL.push(hit_name)
    }
};
//Scale mp cost to 3750 dmg (this doesn't account for character stats)
var l_sfx = new Audio("LS.mp3")
  function Chain_Lightning(){ //This attack takes 14 seconds to execute. So it must be very powerful!
    let red_mage_mp = document.getElementById("r_mage_name_mp");
    if (red_mage_mp.value < 50){ 
        p1.style.visibility = "visible";
        p1.value = "Not enough MP!"
        p1_2sec()
    }else{
        red_mage_mp.value -= 50;
        l_sfx.play()
        l_sfx.loop = true;
          //hit 1
              let a = (Math.random() * ((163 - 113) + 113)*red_mage_atk)/phase_mdef//goes up 1.35x each hit. Exponential
              //Min is max -50
              let d1_crit = Math.floor(Math.random() * 14);
          //hit 2
              let b = ((Math.random() * (213 - 163) + 163)*red_mage_atk)/phase_mdef
              let d2_crit = Math.floor(Math.random() * 11);
          //hit 3
              let c = ((Math.random() * (279 - 229) + 229)*red_mage_atk)/phase_mdef
              let d3_crit = Math.floor(Math.random()* 8);
          //hit 4
              let d = ((Math.random() * (371 - 321) + 321)*red_mage_atk)/phase_mdef
              let d4_crit = Math.floor(Math.random()*5);
          //hit 5
              let e = (a + b + c + d) 
              let d5_crit = Math.floor(Math.random()*3);
      
              CLCalc(d1_crit, a)
              ShowLightning(1)
              timeout_lightning(200)
      
              setTimeout(()=>{ //could possibly make this into a function that takes in several arguments
                  CLCalc(d2_crit, b)
                  ShowLightning(1)
                  timeout_lightning(200)
              }, 2000)
              
              setTimeout(()=>{
                  CLCalc(d3_crit, c)
                  ShowLightning(1)
                  timeout_lightning(200)
              },4000)
      
              setTimeout(()=>{
                  CLCalc(d4_crit, d)
                  ShowLightning(1)
                  timeout_lightning(200)
              }, 6000)
      
              setTimeout(()=>{ //5th attack is the sum of all previous, not counting any additional critical damage. 
                //The 5th hit itself already has a high crit rate so that would be OP and too unpredictable even for this
                  CLCalc(d5_crit, e)
                  ShowLightning(2)
                  timeout_lightning(200)
                  l_sfx.loop = false;
              }, 8000)
      
              setTimeout(()=>{
                //console.log(FinalCL)
                //add values from the list for the total
                const sum = FinalCL.reduce((a, b) => {
                    return a + b
                }, 0);
                console.log(sum*2)
                  p1.value = "Total damage: " + sum.toFixed(0)*2 
                  p1_3sec()
                  FinalCL = [] //clear the list
                  timeout_i_menu()
                  ending3()
              }, 12000)

    }
  
    }

    function timeout_lightning(time){
        setTimeout(()=>{
            i_menu.style.visibility = "hidden" 
        }, time)
           
    }
    //use a more epic picture for 5th strike
    function ShowLightning(atk_num){
        if (atk_num == 1){//represents 1-4
            i_menu.style.visibility = "visible"
            i_menu.src = ""
            i_menu.src = "lightning.png"

        }else{//the 5th one
            i_menu.style.visibility = "visible"
            i_menu.src = ""
            i_menu.src = "chainlightning.png"
        }

    }



  function My_Turn(){
    //Reversal move that waits in the background and waits for her to be targeted. 
    //Only one active at a time 
    //Reflects attack back on the boss for 2x base damage. Doesn't trigger for Bleeding Sun. 
  }







