function Radiant_Supernova(){ //her ult
    document.body.style.backgroundImage = "";
    document.body.style.backgroundImage = "url('blackhole.png')"
        //ultimas don't have a crit or mp value, and aren't affected by atk stats
        //visibility image for 3 seconds, then turn it off
        spellStuffUltima("RadiantSupernova.jpeg")
        const DC = new Audio("DarkCreepy.mp3"); 
        DC.volume = 0.5;
        DC.play()
        DC.loop = false;
        setTimeout(()=>{
            changeBackground()       
            DC.pause()
            Randomizer(5500, 98, 103)//Ultimas have a smaller randomizer so the percentage doesn't knock too much off
                hp.value -= final_dmg/phase_mdef;
            hide_i_and_end()
            RevertUltima()
        }, 7000);
    
        
};


//This one is slighly more expensive because of the double crit rate
function Mirage_Blade(){ 
    let black_mage_mp = document.getElementById("d_mage_name_mp");
    //needs to be redefined every use or it references the OLD mp value and only works once
    if (black_mage_mp.value <22){ 
        notEnoughMP()
    }else{ 
        spellStuff(black_mage_mp, 22, "MirageBlade.jpg")
        PE.play()
        PE.loop = false;
        setTimeout(()=>{
                Randomizer(1200, 95, 106)
                let d_crit = Math.floor(Math.random() * 9); //higher crit rate
                if (d_crit == 1){
                    hp.value -= ((final_dmg*black_mage_atk)*1.5)/phase_def;
                    critMessage()
                }else{
                  console.log(final_dmg*black_mage_atk)/phase_def
                  hp.value -= (final_dmg*black_mage_atk)/phase_def
                }   
    
            hide_i_and_end()
        }, 3000);
        
    };

};

var trapped; //this can just be undefined for now, gets assigned boolean later
//this is actually incredibly powerful. Give it a very high MP cost 
function Entrapment(){ //Makes boss immobile for 2 turns
  let black_mage_mp = document.getElementById("d_mage_name_mp");
  if (black_mage_mp.value < 65){
      notEnoughMP()
      //ensure it isn't already in effect
  }if (trapped == true){
      //make this an actual window later
      console.log("already trapped")

  }else{ //execute spell
      black_mage_mp.value -= 65;
      spellStuff(black_mage_mp, 65, "Entrapment.jpg")
      //find sfx
      Timer(3000, hide_i_and_end)
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
       notEnoughMP()
  }else{ 
      spellStuff(black_mage_mp, 14, "blackfire.jpg")
      const PE = new Audio("pierceevil.wav"); //find new sfx
      PE.play()
      PE.loop = false;
      setTimeout(()=>{
              Randomizer(1000, 95, 106)
              let d_crit = Math.floor(Math.random() * 16);
              if (d_crit == 1){
                  hp.value -= ((final_dmg*black_mage_matk)*1.5)/phase_mdef;
                  critMessage()
              }else{
                  console.log(final_dmg*black_mage_matk)/phase_mdef
                  hp.value -= (final_dmg*black_mage_matk)/phase_mdef;
              }  
          hide_i_and_end()
      }, 3000);
      
  };
}
var mirror;
function Shattered_Mirror(){
      //Severely lower's bosses defenses for one turn, attacks do 2x
      //ultimas don't count
  let black_mage_mp = document.getElementById("d_mage_name_mp");
  if (black_mage_mp.value < 30){
      notEnoughMP()
      //ensure it isn't already in effect
  }if (mirror == true){
      //make this an actual window later
      console.log("mirror already in effect")

  }else{ //execute spell
      spellStuff(black_mage_mp, 30, "shatteredmirror.jpg")
      //find sfx
      Timer(3000, hide_i_and_end)
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
