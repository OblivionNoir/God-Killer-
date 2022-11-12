
  //warrior attacks

  function Thousand_Men(){ //<!--his ultimate, deals heavy damage for several turns-->

  };
  function Shadow_Self(){ //Triples evasion for a set period

  
  };
  function Whims_of_Fate(){//50% chance of missing, 3 50% chances at a critical if no miss. 12.5% chance of triple crit

  };
  function Iron_Heart(){
    //Raises everyone's defenses by 25% for 1 minute
    let k_mp = document.getElementById("warrior_name_mp")
    if(k_mp.value < 20){
      p1.style.visibility = "visible";
      p1.value = "Not enough MP!"
      p1_timeout(2000)
    }else{
      k_mp.value -= 20
      i_menu.src = "" 
      i_menu.src = "rebellion.png"
      i_menu.style.visibility = "visible"
      RaiseStats()
      Timer(3000, hide_i_and_end)
    }
  }

  function RaiseStats(){
    for([key, value] of defs){
      value *= 1.25
      console.log(key, value)
    }
    for([key, value] of m_defs){
      value *= 1.25
      console.log(key, value)
    }
  };
  function RevertStats(){

  }

  function Deathblow(){
    //Like a normal attack but a guaranteed crit. 
    //very quick cooldown, low mp cost

  }




  //dark mage attacks

 
    //assign counter time according to phase

  
/*
max hp = 380
Lets start with 1000 base dmg at max hp, then add a 1.01% multipler per 1 hp lost, so it scales at an increasing speed
So for example 





*/







