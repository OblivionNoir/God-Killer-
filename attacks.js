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
var LastBossAttacks = []//remember to add to this






      

  function randNumber(min, max) {
      return Math.floor(Math.random() * (max - min) ) + min;
    }
  function timeout_i_menu(){
      setTimeout(()=>{
          i_menu.style.visibility = "hidden"
      }, 2000)
  }
  //boss attacks
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
          CheckDeadStatus()
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
          
          document.getElementById("img_template").src = "RadiantSupernova.jpeg"
          i_menu.style.visibility = "visible"
          const DC = new Audio("DarkCreepy.mp3"); //change this
          DC.volume = 0.5;
          DC.play()
          DC.loop = false;
          setTimeout(()=>{
              document.body.style.backgroundImage = "url('purveryorbg.png')"
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
  //Works, but for some reason boss is spamming attacks when it ends...
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
      var white_mage_mp = document.getElementById("l_mage_name_mp");
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

  function Angels_Grace(){ //moderate healing spell
      document.getElementById("AngelsGrace");
      

  };

  function Rebirth(){ //revive a fallen ally with 50% hp
      

  }

  function ChainHeal(){ //heals all allies a small amount
      

  }

  function Supreme_Altar(){ //her ult, fully restores party to default state
      //if anyone is dead, change their dead status to false
      document.body.style.backgroundImage = "url('altarbg.png')" //find sfx for this
      if (warrior_dead == true){ //first revive any dead members
          warrior_dead = false;
      }
      if (black_mage_dead == true){
          black_mage_dead = false;
      }
      if (white_mage_dead == true){
          white_mage_dead = false;
      };
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

      document.getElementById("img_template").src = "SupremeAltar.jpg"
          i_menu.style.visibility = "visible"
        
          setTimeout(()=>{
              document.body.style.backgroundImage = "url('purveryorbg.png')"//this will change based on phase
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







