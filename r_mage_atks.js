//Aha! I have found a way to make the damage scale with hp lost! Praise my genius!
//remembber to cut out the decimals

  //red mage attacks
  //Kinda just ended up changing random numbers but it looks good to me
  var SSList = [];
  function SScalculation(){
    //ult
    //lower hp = more damage. 

//DON'T. TOUCH. THIS. CODE.
    var loop_margin = 1; //reset loop margin to prevent numbers getting all negative and fucked up
    for(let i = 0; i < red_mage_hp.value; i++){
        loop_margin *= 1.0055;  //lowering this actually increases the number. Why? No fuckin clue. 
        let z = (11500  - (1300 * loop_margin))//Final damage based on hp
        if (red_mage_hp.value == 1){
            SSList.push(z+1061)//because the intermediate values are off by 1061, and 1hp is the baseline for calculation
        }else{
            SSList.push(z-1061)
        }
    }
    return SSList[SSList.length - 1];
    //store in an external list, then return the last value in the list
};
function Scarlet_Subversion(){  
    phase1_theme.volume = 0.2//switch theme according to phase
    if (red_mage_hp.value ==1){//you get the omae wa mou shindeiru if her hp is at 1
        omae.play()
        setTimeout(()=>{
            NANI.play()
        }, 3000)
        setTimeout(()=>{
            SS_Part2()
        }, 6000)
    }else{
        SS_Part2()
    }
};

function SS_Part2(){
   
    document.body.style.backgroundImage = "";
    document.body.style.backgroundImage = "url('SSBG.png')"
        //ultimas don't have a crit or mp value
        //visibility image for 3 seconds, then turn it off
        spellStuffUltima("SS.png")
        const boom = new Audio("boom.mp3"); 
        boom.play()
        i_menu.classList.add("fade_long")
        setTimeout(()=>{
            i_menu.classList.remove("fade_long")
            changeBackground()
            hide_i_and_end()
            RevertUltima()
     
            hp.value -= SScalculation() //no defense for this atk because it scales with the damage and weakens the higher values too much
            console.log(SScalculation())
            document.getElementById("boss_hp_label").innerHTML = hp.value.toFixed(0) + "/75000";//won't work as a function, some weird timing issue I assume
            phase1_theme.volume = 0.7//make a function for this like the background switch, every ultima will need it
        }, 7000);
    
    


}
//will need an active state to prevent reuse while it's still active, this'll go along with adding the color filters over the portraits once everything is working
//atk, matk, ev
BL_adjusted = []
//2 sec execution time, lasts 25 seconds
//Can easily get her killed, but opens a window to deal massive damage
//A martyr attack, of sorts. Hence the name and the spider lilies 
function Borderof_Life(){ //adjust for use by red mage
    //-50% defenses, +50% attacks
    let red_mage_mp = document.getElementById("r_mage_name_mp");
    if (red_mage_mp.value <80){ 
        notEnoughMP()
    }else{  
        i_menu.classList.add("fade_quick")
        spellStuff(red_mage_mp, 80, "BOL.png")
        PE.play()//find new sfx
        PE.loop = false;
        defs.set('red_mage', red_mage_def*0.5)
        m_defs.set('red_mage', red_mage_mdef*0.5)
        phys_atks.set('red_mage', red_mage_atk*1.5)
        m_atks.set('red_mage', red_mage_matk*1.5)

        BL_adjusted.push(
            defs.get('red_mage'),
            m_defs.get('red_mage'), 
            phys_atks.get('red_mage'), 
            m_atks.get('red_mage')
         )
        console.log(BL_adjusted)
        //timer will go in other thread
        Timer(2000, hide_i_and_end)
        setTimeout(()=>{//this one's weird, needs a little buffer for the ani to work but it's not a problem
            i_menu.classList.remove("fade_quick")
        }, 2000)
       
        BLExpire()
    }
};//function ends here
  function Bloody_Vengeance(){
    //ignores def, works like a much stronger basic attack with a slightly higher
    //crit rate. Physical
    let red_mage_mp = document.getElementById("r_mage_name_mp");
    if (red_mage_mp.value <26){ 
        notEnoughMP()
    }else{ 
        i_menu.classList.add("fade")
        spellStuff(red_mage_mp, 26, "bloodyvengeance1.png")
        PE.play()
        PE.loop = false;
        setTimeout(()=>{
             Randomizer(1300, 95, 106)
                i_menu.classList.remove("fade")
                DmgCalculator(phys_atks.get("red_mage"), 13, phase_def)
            hide_i_and_end()//no timer needed here, already in one
        }, 3000);
    };
  };


var FinalCL = []//stores the final calculated damage of all 5 strikes for an accurate total. Clear the list when the function ends
function CLCalc(crit, hit_name){
    if (crit === 1){
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
    updateBossHP()
};
//Scale mp cost to 3750 dmg (this doesn't account for character stats)
var l_sfx = new Audio("LS.mp3")
  function Chain_Lightning(){ //This attack takes 14 seconds to execute. So it must be very powerful!
    let red_mage_mp = document.getElementById("r_mage_name_mp");
    if (red_mage_mp.value < 50){ 
        notEnoughMP()
    }else{
        red_mage_mp.value -= 50;
        l_sfx.play()
        l_sfx.loop = true;//Not sure why the numbers are way out of the set ranges, but it works, so...yay?
          //hit 1
              let a = (Math.random() * ((353 - 313) + 313)*red_mage_matk)/phase_mdef//goes up 1.35x each hit. Exponential
              //Min is max -50
              let d1_crit = Math.floor(Math.random() * 14);
          //hit 2
              let b = ((Math.random() * (403 - 363) + 363)*red_mage_matk)/phase_mdef
              let d2_crit = Math.floor(Math.random() * 11);
          //hit 3
              let c = ((Math.random() * (469 - 429) + 429)*red_mage_matk)/phase_mdef
              let d3_crit = Math.floor(Math.random()* 8);
          //hit 4
              let d = ((Math.random() * (561 - 521) + 521)*red_mage_matk)/phase_mdef
              let d4_crit = Math.floor(Math.random()*5);
          //hit 5
              let e = (a + b + c + d) 
              let d5_crit = Math.floor(Math.random()*3);
      
              CLCalc(d1_crit, a)
              ShowLightning(1)
              timeout_lightning(200)
      
              setTimeout(()=>{
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
      
              setTimeout(()=>{ //5th attack is the sum of all previous, not counting any crits
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
                console.log(sum)
                  p1.value = "Total damage: " + sum.toFixed(0)
                  p1_timeout(3000)
                  FinalCL = [] //clear the list
                  Timer(2000, hide_i_and_end)
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


var MT_active = false;
  function My_Turn(){  //maybe use promise for this?
    //Reversal move that waits in the background and waits for her to be targeted. 
    //Only one active at a time 
    //will add a little symbol next to her name to indicate that it's active
    //Reflects attack back on the boss for 2x base damage. Doesn't trigger for Bleeding Sun. 
    let red_mage_mp = document.getElementById("r_mage_name_mp");
    if (red_mage_mp.value < 60){
        notEnoughMP()
    }else{
        MT_active = true;
        //can't finish this until boss is set up. It'll use a listener to detect hits on her and disable it.
    }
  }

