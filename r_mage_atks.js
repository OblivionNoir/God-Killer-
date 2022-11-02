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
//will need an active state to prevent reuse while it's still active, this'll go along with adding the color filters over the portraits once everything is working
//atk, matk, ev
BL_adjusted = []
//2 sec execution time, lasts 25 seconds
//Can easily get her killed, but opens a window to deal massive damage
//A martyr attack, of sorts. Hence the name and the spider lilies 
function Borderof_Life(){ //adjust for use by red mage
    //-75% defenses, +50% attacks and evasion
    let red_mage_mp = document.getElementById("r_mage_name_mp");
    if (red_mage_mp.value <40){ 
        p1.style.visibility = "visible";
        p1.value = "Not enough MP!"
        p1_2sec()
    }else{ 
        red_mage_mp.value -= 40;
        i_menu.src = ""
        i_menu.src = "BOL.png" 
        i_menu.style.visibility = "visible"
        PE.play()//find new sfx
        PE.loop = false;
        red_mage_def *= 0.25.toFixed(1) //for loop wants to be bitchy so we're doing it this way
        red_mage_mdef *= 0.25.toFixed(1)
        red_mage_ev *= 1.5.toFixed(0)
        red_mage_atk *= 1.5.toFixed(0)
        red_mage_matk *= 1.5.toFixed(0)
        timeout_i_menu()
        BL_adjusted.push(red_mage_def, red_mage_mdef, red_mage_ev, red_mage_atk, red_mage_matk)
        console.log(BL_adjusted)
        //timer will go in other thread
        BLExpire()
    }
};//function ends here
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


var MT_active = false;
  function My_Turn(){
    //Reversal move that waits in the background and waits for her to be targeted. 
    //Only one active at a time 
    //will add a little symbol next to her name to indicate that it's active
    //Reflects attack back on the boss for 2x base damage. Doesn't trigger for Bleeding Sun. 
    let red_mage_mp = document.getElementById("r_mage_name_mp");
    if (red_mage_mp.value < 60){
        p1.style.visibility = "visible";
        p1.value = "Not enough MP!"
        p1_2sec()
    }else{
        MT_active = true;
        //can't finish this until boss is set up. It'll use a listener to detect hits on her and disable it.
    }
  }

