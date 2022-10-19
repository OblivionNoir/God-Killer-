//good idea to keep track of these for now
 turn_counter_value = 0;
 turn_counter = []
  function counter(){
      let UC = document.getElementById("ultima_charge");
      UC.value +=1;
      turn_counter_value +=1;
      black_mage_mp += 5;
      white_mage_mp += 5;
      warrior_mp += 5;
      turn_counter.push(turn_counter_value)
      return turn_counter
  }

  //1 turn = 20 seconds (average of boss attack time)


  var LastAttacks = [] //store last attacks used by player, some skills rely on it

//try event listener that adds +1 to value every time counter() is called
//make new thread for this



//Boss will not attack dead party members, remember to code that in!!!





      

  function randNumber(min, max) {
      return Math.floor(Math.random() * (max - min) ) + min;
    }
  function timeout_i_menu(){
      setTimeout(()=>{
          i_menu.style.visibility = "hidden"
      }, 2000)
  }
  //boss attacks
 

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
  function ending3(){ //call after every player attack
      counter() 
      TestPhase()
  }
  //dark mage attacks
  function basic(){


          let l_crit = Math.floor(Math.random() * 16);
          console.log("value" + l_crit)
          //crit
          if (l_crit == 1){
              rand_dmg = randNumber(100,140) ; 
              final_dmg = rand_dmg/phase_def;
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
      document.body.style.backgroundImage = "url('blackhole.png')"
          //ultimas don't have a crit or mp value
          //visibility image for 3 seconds, then turn it off
          
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
                  hp.value -= 1500/phase_mdef;
              i_menu.style.visibility = "hidden"
              ending3()
          }, 7000);
      
          
  };
  


  function Mirage_Blade(){ 
      let black_mage_mp = document.getElementById("d_mage_name_mp");
      //needs to be redefined every use or it references the OLD mp value and only works once
      if (black_mage_mp.value <50){ 
          p1.style.visibility = "visible";
          p1.value = "Not enough MP!"
          setTimeout(()=>{
              p1.style.visibility = "hidden"
          },2000)
      }else{ 
          black_mage_mp.value -= 50;
          i_menu.src = "MirageBlade.jpg" //i_menu is the image template
          i_menu.style.visibility = "visible"
          PE.play()
          PE.loop = false;
          setTimeout(()=>{
                  hp.value -= (3000/phase_def); //hp = boss hp
                  let d_crit = Math.floor(Math.random() * 9); //higher crit rate
                  if (d_crit == 8){
                      hp.value -= (1200/phase_def);
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
  function Entrapment(){ //Makes boss immobile for 2 turns
    let black_mage_mp = document.getElementById("d_mage_name_mp");
    if (black_mage_mp.value < 50){
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
        black_mage_mp.value -= 50;
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

  function Black_Fire(){ //moderate spell damage
    let black_mage_mp = document.getElementById("d_mage_name_mp");
    if (black_mage_mp.value <25){
        p1.style.visibility = "visible";
        p1.value = "Not enough MP!"
        setTimeout(()=>{
            p1.style.visibility = "hidden"
        }, 3000)
    }else{ 
        black_mage_mp.value -= 25;
        //visibility image for 3 seconds, then turn it off
        i_menu.src = "blackfire.png"
        i_menu.style.visibility = "visible"
        const PE = new Audio("pierceevil.wav"); //find new sfx
        PE.play()
        PE.loop = false;
        setTimeout(()=>{
                hp.value -= 400 - phase_mdef;
                let d_crit = Math.floor(Math.random() * 16);
                if (d_crit == 15){
                    hp.value -= 800 - phase_mdef;
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
    counter()
  }
var mirror;
  function Shattered_Mirror(){
        //Severely lower's bosses defenses for one turn
    let black_mage_mp = document.getElementById("d_mage_name_mp");
    if (black_mage_mp.value < 50){
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
        black_mage_mp.value -= 35;
        i_menu.src = "shatteredmirror.png"
        i_menu.style.visibility = "visible"
        //find sfx
        setTimeout(()=>{
            i_menu.style.visibility = "hidden"

        }, 3000);
        //change timer according to phase
        mirror = true;
        CounterSwitch()
        MirrorLower()
    } 
    counter()
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
function CounterSwitch(){
        switch(true){
            case(phase2called == true):
            if (mirror == true){//use the shorter version for Broken Mirror, one turn not 2 
                counter()
                countdown_1turn(20000)
            }else{
                counter()
                trapped_countdown(40000)
            }
        break;
            case(phase3called == true):
            if (mirror == true){
                counter()
                countdown_1turn(15000)
            }else{
                counter()
                trapped_countdown(30000)
            }      
        break;
            default://phase 1 
            if (mirror == true){
                counter()
                countdown_1turn(25000)
            }else{
                counter()
                trapped_countdown(50000)
            }
        break;
        }

    }; 
    //assign counter time according to phase

  function Pierce_Evil(){
      let white_mage_mp = document.getElementById("l_mage_name_mp");
      //see above comment...
      if (white_mage_mp.value <10){
          p1.style.visibility = "visible";
          p1.value = "Not enough MP!"
          setTimeout(()=>{
              p1.style.visibility = "hidden"
          }, 3000)
      }else{ 
          white_mage_mp.value -= 10;
          //visibility image for 3 seconds, then turn it off
          i_menu.src = "PierceEvil.jpg"
          i_menu.style.visibility = "visible"
          const PE = new Audio("pierceevil.wav");
          PE.play()
          PE.loop = false;
          setTimeout(()=>{
                  hp.value -= 200 - phase_mdef;
                  let l_crit = Math.floor(Math.random() * 16);
                  if (l_crit == 15){
                      hp.value -= 400 - phase_mdef;
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
  var ally_targets = []
  function makeAllyTargets(){
    let maketargets = document.getElementsByClassName('ally_img')
      for (let i = 0; i < maketargets.length; i++){
          ally_targets.push(maketargets[i])
          console.log(ally_targets)
      };
  }


var amt_healed;
  function Angels_Grace(){ //moderate healing spell on one ally
    //make the list of targets
    makeAllyTargets();
    for (let i = 0; i < ally_targets.length; i++){
        //add the listener to each target
        ally_targets[i].addEventListener('click', function addAllyTargets(){
              //amt healed is 55% of the target's max. 
            console.log(ally_targets)
            const selected_ally = ally_targets.indexOf(this);
            switch(selected_ally){
                case 0: //knight
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
                    ally_targets[i].removeEventListener('click', addAllyTargets)
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
                    ally_targets[i].removeEventListener('click', addAllyTargets)
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
                    ally_targets[i].removeEventListener('click', addAllyTargets)
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
                    ally_targets[i].removeEventListener('click', addAllyTargets)
                default:
                    console.log("heal switch - shits fucked")
                break;

            };
    })

    };
  };
  //all the usual visual stuff
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
        i_menu.src = "AngelsGrace.jpg"
        i_menu.style.visibility = "visible"
        const h2 = new Audio("heal2.mp3"); 
        h2.play()
        h2.loop = false;
        setTimeout(()=>{                      //this will change based on phase
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

  function Rebirth(){ //revive a fallen ally with 50% hp
    makeAllyTargets()
    for (let i = 0; i < ally_targets.length; i++){
        ally_targets[i].addEventListener('click', function addReviveTargets(){
            console.log(ally_targets)
            const selected_ally = ally_targets.indexOf(this);
            switch(selected_ally){
                case 0:
                    if (warrior_dead == true){
                        warrior_dead == false;
                        console.log("revived knight")
                        isAlive(wa)
                    }else{
                        stillAlive()
                    };
                    document.removeEventListener('click', addReviveTargets)
                break;
                case 1:
                    if (black_mage_dead == true){
                        black_mage_dead == false;
                        console.log("revived dark mage")
                        isAlive(dmi)
                    }else{
                        stillAlive()
                    }
                    document.removeEventListener('click', addReviveTargets)
                break;
                case 2:
                    if (white_mage_dead == true){
                        white_mage_dead == false;
                        console.log("revived light mage")
                        isAlive(lmi)
                    }else{
                        stillAlive()
                    }
                    document.removeEventListener('click', addReviveTargets)
                break;
                case 3: 
                if (red_mage_dead == true){
                    red_mage_dead == false;
                    console.log("revived red mage")
                    isAlive(rmi)
                }else{
                    stillAlive()
                }
                document.removeEventListener('click', addReviveTargets)
                break;
                default:
                    console.log("revive switch - shits fucked")
                break;
            }
        })
    }
  }

function RebirthPart2(){
    //graphical stuff
}

  function ChainHeal(){ //heals all allies a small amount
      

  }

  function Supreme_Altar(){ //her ult, fully restores party to default state
      //if anyone is dead, change their dead status to false
      document.body.style.backgroundImage = "url('altarbg.png')" //find sfx for this
//change this to call the alive function for each character

      if (warrior_dead == true){ //first revive any dead members
          warrior_dead = false;
      }
      if (black_mage_dead == true){
          black_mage_dead = false;
      }
      if (white_mage_dead == true){
          white_mage_dead = false;
      };
      if (red_mage_dead == true){
          red_mage_dead = false;
      }
      //then restore mp and hp
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
    //lowers boss rate of attack for 2 turns
  }







