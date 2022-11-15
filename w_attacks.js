
  //warrior attacks

  function Thousand_Men(){ //<!--his ultimate, deals heavy damage for several turns-->

  };
  function Shadow_Self(){ //Two quick low/moderate attacks
//low mp cost, quick cooldown
  
  };
  function Whims_of_Fate(){//low accuracy, but if it lands deals heavy damage (let's say 3800 base) and lowers boss def by 25% for 2 minutes
    //defense reduction happens AFTER the damage
    let k_mp = document.getElementById("warrior_name_mp")
    //determine if it will hit, 40% chance

    x = (3800*warrior_atk)/phase_def
    hp.value -= x
    console.log(x)
    ending3()
  };
  function Iron_Heart(){
    //addIcons(knight)
    //Raises everyone's defenses by 20% for 2 minutes
    let k_mp = document.getElementById("warrior_name_mp")
    if(k_mp.value < 20){
      notEnoughMP()
    }else{
      i_menu.classList.add("fade")
      spellStuff(k_mp, 20, "rebellion.png")
      setTimeout(()=>{
        i_menu.classList.remove("fade")
        hide_i_and_end()
      }, 3000)
      RaiseDefs()//action happens AFTER the image, remember that
    }
  };


  function RaiseDefs(){
    for([key, def_val] of defs){
      defs.set(key, (def_val*1.2).toFixed(2))
      console.log(defs.get(key, def_val))
    }
    for([key, m_def_val] of m_defs){
      m_defs.set(key, (m_def_val*1.2).toFixed(2))
      console.log(m_defs.get(key, m_def_val))
    }
    Timer(120000, RevertDefs)
  };
  function RevertDefs(){//Not sure why I'm getting trailing decimals, but it's not a big deal
    for([key, def_val] of defs){
      defs.set(key, (def_val/1.2).toFixed(2))
      console.log(defs.get(key, def_val))
    }
    for([key, m_def_val] of m_defs){
      m_defs.set(key, (m_def_val/1.2).toFixed(2))
      console.log(m_defs.get(key, m_def_val))
    }
  }

  function Deathblow(){
    //Slow and heavy, 2 turn attack, 5000 base

  }




  //dark mage attacks

 
    //assign counter time according to phase

  
/*
max hp = 380
Lets start with 1000 base dmg at max hp, then add a 1.01% multipler per 1 hp lost, so it scales at an increasing speed
So for example 





*/







