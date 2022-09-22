
//initial stats
phase_1_hp = 3000; //global for now, tighten scope if it becomes problematic
phase_1_patk = 50;
phase1_matk = 50;
phase_1_def = .8; //divide by this number 
phase_1_mdef = .6;

warrior_hp = 2000;
warrior_mp = 70;
warrior_def = .9; 
warrior_mdef = .5;

black_mage_hp = 1400; 
black_mage_mp = 220;
black_mage_def = .6;
black_mage_mdef = .9;

white_mage_hp = 1200;
white_mage_mp = 220;
white_mage_def = .5;
white_mage_mdef = .8; 

//hide elements that get used later
var p1_img = document.getElementById("boss_img");
p1_img.style.visibility = "hidden";

var battle_menu = document.getElementById("battle_menu");
battle_menu.style.visibility = "hidden";

var hp = document.getElementById("HP_bar");
hp.style.visibility = "hidden";
var hp = document.getElementById("HP_bar");
hp.style.visibility = "hidden";
var bn = document.getElementById("boss_name");
bn.style.visibility = "hidden";
var p2 = document.getElementById("txt_2");
p2.style.display = "none";

var b_menu = document.getElementById("menu_template")
b_menu.style.display = "none"
//test hp bar 
/*document.addEventListener("click", function(){
    health = document.getElementById("HP_bar")
    health.value -= 700;

})*/
var clickCheck = true; //todo: add fade out of phase 1 with for loop
phase2 = document.addEventListener("click", function(){ //PHASE 2!
        //console.log(health)
        if (health.value <1501 && clickCheck == true){
            clickCheck = false;
            p2.style.display = "initial"; //add timeout
            p2.value = "Oh no...";
            setTimeout(() =>{
                let dotheroar = new Audio('dotheroar.mp3')
                dotheroar.play()
                dotheroar.loop = false;
            },2000);
            
            setTimeout(() =>{
                document.getElementById("rainbg").src = "redrain.mp4"
                p2.style.display = "none";
                document.getElementById("boss_img").src = "AKUMU2.0.jpeg";
                let hellnaw = new Audio("hellnaw.mp3");
                hellnaw.play()
                hellnaw.loop = false;
                phase1_theme.pause();
                phase2_theme = new Audio('phase2OST.mp3') //use hunter phase 2
                phase2_theme.play();
                phase2_theme.loop = true;
                let roar = new Audio("roar.wav");
                roar.play();
                roar.loop = false;
                document.getElementById("boss_name").innerHTML = "Akumu, Origin of the Nightmare";
                document.getElementById("ost_box").value = "Now playing: \n Bloodborne OST: The Hunter - Phase 2";
            }, 4000);
            setTimeout(() =>{
                let chv = new Audio('computerhasvirus.mp3')
                chv.play()
                chv.loop = false;
            },10000);
    
        }else if (health.value ==0){
            phase2_theme.pause()
            window.open('gigachad.html', "_self")
        }
})


 //buttons become visible when character is picked
 function removeButtons(){
    var btn = document.getElementsByClassName("btn"); //this produces a list, so need to loop to hide each item
        for(let i = 0; i <btn.length; i++){
            btn[i].style.visibility = "hidden";
            };       
 };
 removeButtons()

function addButtons(){
    var btn = document.getElementsByClassName("btn"); //this produces a list, so need to loop to hide each item
    for(let i = 0; i <btn.length; i++){
        btn[i].style.visibility = "visible";
        };       
};
//add listener to wait for initial enter to start game
var check = true;
document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter' && check == true) {
        check = false; //so it can only happen once. Prevents event order from getting thrown out of wack
        p1_img.style.visibility = "visible";
        let boom = new Audio('vineboom.mp3')
        boom.play()
        boom.loop = false;
        const storm_bg = new Audio('stormnoises.mp3');
        storm_bg.play();
        storm_bg.loop =true;
        storm_bg.volume = 0.3; 
        write_message()
    }
});

function write_message(){ //Trigger when enter is pressed. Write custom message and begin battle 
   
    var warrior_name = window.prompt("What is your (male) warrior's name?"); 
    if (warrior_name.length >8 || warrior_name.length ===0){
        window.alert("Name cannot be longer than 8 characters or empty, sorry"); 
        var warrior_name = window.prompt("What is your (male) warrior's name?");
    };
    warrior_name = warrior_name.toUpperCase();//todo: prevent "cancel". cancel = null
    
    var dmage_name = window.prompt("What is your (female) dark mage's name?");
    if (dmage_name.length >8 || dmage_name.length === 0 ){
        window.alert("Name cannot be longer than 8 characters or empty, sorry");
        var dmage_name = window.prompt("What is your (female) dark mage's name?");
    };
    dmage_name = dmage_name.toUpperCase();
    
    lmage_name = window.prompt("What is your (female) light mage's name?");
    if (lmage_name.length >8 || lmage_name.length === 0){
        window.alert("Name cannot be longer than 8 characters or empty, sorry");
        lmage_name = window.prompt("What is your (female) light mage's name?");
    }
    lmage_name = lmage_name.toUpperCase();
    
    //hide buttons until character is selected 
    document.getElementById("warrior_name").value = warrior_name + " " + "HP: "+ warrior_hp + "\n" +"MP: "+warrior_mp;
    document.getElementById("d_mage_name").value = dmage_name +  " " + "HP: " + black_mage_hp + "\n" +"MP: "+black_mage_mp;
    document.getElementById("l_mage_name").value = lmage_name +  " " + "HP: " + white_mage_hp + "\n" +"MP: "+white_mage_mp;

    document.getElementById("txt_").value = `GREETINGS, PATHETIC MORTALS. WHAT ARE YOUR NAMES AGAIN? ${warrior_name.replace('\n', '')}, ${dmage_name.replace('\n', '')}, and ${lmage_name.replace('\n', '')}? WHATEVER. TIME TO DIE...`;
    setTimeout(() =>{
        let bruh = new Audio('bruh.mp3')
        bruh.play()
        bruh.loop = false;
    }, 3000);
    setTimeout(() =>{
        //window.alert("SHOWTIME!");
        phase1_theme = new Audio('phase1OST.mp3'); //user hunter phase 1
        phase1_theme.play();
        phase1_theme.loop =true;
        document.getElementById("ost_box").value = "Now playing: \n Bloodborne OST: The Hunter - Phase 1";
        del_box()
    }, 5000);

};

function del_box(){ //SHOWTIME. Delete initial box and make menu appear
    var init_box = document.getElementById("txt_");
    init_box.style.display = "none"; 
    battle_menu.style.visibility = "visible";
    hp.style.visibility = "visible";
    bn.style.visibility = "visible";

};
party_list = []//store for later usage
//Character selection. DO NOT TOUCH 
document.addEventListener("DOMContentLoaded", function(event) { //this algorithm is disgusting but guess what it works
    var element = document.querySelectorAll('.clickable');//this acts like an array
        if (element){ //if it exists
            element.forEach(function getIndex(curVal, LIndex){ //current value and index in the list, add event listener to each
                curVal.addEventListener('click', function() {
                //console.log(lIndex);
                curVal.classList.toggle("active");
                element.forEach(function(x, sL){ 
                    if(LIndex !== sL) { //if list index is NOT equal to the selected list element, aka one has already been picked
                        x.classList.remove('active');
                        };
                        current_index = LIndex;
                        console.log(current_index) //stores current index
                        switch(current_index){ 
                            case(0): 
                            warrior_menu()
                            party_list.push(0);
                            break;
                            case(1):
                            d_mage_menu()
                            party_list.push(1);
                            break;
                            case(2):
                            l_mage_menu();
                            party_list.push(2);
                            break;
                        };
                 });

             });//move to picking menu based on character
             //console.log(LIndex)
        
        });
    };
}); //use similar algo for battle menus, using stored index values. 
var lastClick = 0; //fixes bounce glitch
var delay = 20;
function menu_sfx(){
    let menusfx_ = new Audio("menuclick.wav");
    menusfx_.play()
    menusfx_.loop = false;
}
function warrior_menu(){ //0 //when this is reached, we know the warrior has been clicked
    if (lastClick >= (Date.now() - delay)) //need to check if clicked
    return; //returns undefined, false because it's a boolean
    lastClick = Date.now(); 
    ki = document.getElementById("knight_img"); //need to check if it has border or not
    //if red, show menu. If null, hide menu
    //active class = red
    if (ki.classList.contains('active')){
        console.log('made it -knight')
        menu_sfx()
        addButtons() //consider refactoring the below

        //add listener for click on spells 
        let show_s_k = document.getElementById("spells_b"); //needs on and off state
        click_counter = 1;
        show_s_k.addEventListener("click", function(){ //use math to check for every second click.
            //every second click (2,4,6 etc)will turn it off
            document.getElementById("btn_1").innerHTML = "Thousand Men"
            document.getElementById("btn_2").innerHTML = "Shadow Self"
            document.getElementById("btn_3").innerHTML = "Whims of Fate"

            if (lastClick >= (Date.now() - delay)) //fixes bounce
            return; 
            lastClick = Date.now(); 
            if (click_counter % 2 !==0){ //make menu appear if odd
                //odd number
                console.log("odd number");
                click_counter +=1;
                console.log(click_counter)
                var b_menu = document.getElementById("menu_template")
                b_menu.style.display = "initial"
            }else{
                console.log("even number");
                click_counter +=1
                var b_menu = document.getElementById("menu_template")
                b_menu.style.display = "none"
            }
      
        })
     
    }else{
        console.log("what")
        removeButtons()

    };
    
};


function d_mage_menu(){ //1
    if (lastClick >= (Date.now() - delay))
    return;
    lastClick = Date.now()
    di = document.getElementById("d_mage_img"); //need to check if it has border or not
    //if red, show menu. If null, hide menu
    //active class = red
    if (di.classList.contains('active')){
        console.log('made it - dmage')
        menu_sfx()
        addButtons()
          //add listener for click on spells 
          let show_s_d = document.getElementById("spells_b"); //needs on and off state
          click_counter_d = 1;
          show_s_d.addEventListener("click", function(){ //use math to check for every second click.
              //every second click (2,4,6 etc)will turn it off
              let btn1 = document.getElementById("btn_1").innerHTML = "Radiant Supernova"
              btn1.innerHTML = "Radiant Supernova"
              let btn2 = document.getElementById("btn_2")
              btn2.innerHTML = "Mirage Blade"
              let btn3 = document.getElementById("btn_3")
              btn3.innerHTML = "Entrapment"
  
              if (lastClick >= (Date.now() - delay)) //fixes bounce
              return; 
              lastClick = Date.now(); 
              if (click_counter_d % 2 !==0){ //make menu appear if odd
                  //odd number
                  console.log("odd number");
                  click_counter_d +=1;
                  console.log(click_counter_d)
                  var b_menu = document.getElementById("menu_template")
                  b_menu.style.display = "initial"
              }else{
                  console.log("even number");
                  click_counter_d +=1
                  var b_menu = document.getElementById("menu_template")
                  b_menu.style.display = "none"
              }
        
          })
    }else{ 
        console.log("what")
        removeButtons()

    };

    };

function l_mage_menu(){ //2
    if (lastClick >= (Date.now() - delay))
    return;
    lastClick = Date.now()
    li = document.getElementById("l_mage_img"); //need to check if it has border or not
        //if red, show menu. If null, hide menu
        //active class = red
    if (li.classList.contains('active')){
        console.log('made it- lmage')
        menu_sfx()
        addButtons()
          //add listener for click on spells 
          let show_s_l = document.getElementById("spells_b"); //needs on and off state
          click_counter_l = 1;
          show_s_l.addEventListener("click", function(){ //use math to check for every second click.
              //every second click (2,4,6 etc)will turn it off
              let btn1 = document.getElementById("btn_1")
              btn1.innerHTML = "Pierce Evil"
              let btn2 = document.getElementById("btn_2")
              btn2.innerHTML = "Angel's Grace"
              let btn3 = document.getElementById("btn_3")
              btn3.innerHTML = "Supreme Altar"
  
              if (lastClick >= (Date.now() - delay)) //fixes bounce
              return; 
              lastClick = Date.now(); 
              if (click_counter_l % 2 !==0){ //make menu appear if odd
                  //odd number
                  console.log("odd number");
                  click_counter_l +=1;
                  console.log(click_counter_l)
                  var b_menu = document.getElementById("menu_template")
                  b_menu.style.display = "initial";

                  btn1.addEventListener("click", function (){
                    PierceEvil()
                  })

              }else{
                  console.log("even number");
                  click_counter_l +=1
                  var b_menu = document.getElementById("menu_template")
                  b_menu.style.display = "none";
              }
        
          })
    
    }else{
        console.log("what")
        removeButtons()
    
    };
    
    };
    health = document.getElementById("HP_bar")

    
    turn_counter = 0; //increment with each action taken
    //add event listener for odd turn numbers to trigger boss attacks
    document.addEventListener("click", function (){
        if (turn_counter % 2 !==0){
            setTimeout(()=>{
                window.alert("MY TURN BITCH")
            }, 2000)
        }

    })
                        //~~~~Below here is all movesets~~~\\
    function Critical(){ //adds 5% chance of 2x damage for party moves
        crit = Math.floor(Math.random() * 11);
        if (crit == 10){
            window.alert("Critical hit!")
            dmg = dmg*1.5; //deal 50% more
        }
    }
    //going to need to keep track of turns in a list for some attacks to work 

    //boss attacks
    function basic_b(){
        turn_counter +=1;

    }
    function SpheresofInsanity(){
        var SpheresofInsanity = document.getElementById("SpheresofInsanity");
        turn_counter +=1;
    }
    function Polarity(){
        var Polarity = document.getElementById("Polarity");
        turn_counter +=1;
    }
    function HellsGate(){
        var HellsGate = document.getElementById("HellsGate");
        turn_counter +=1;
    }
    function SpacialRift(){
        var SpacialRift = document.getElementById("SpacialRift")
        turn_counter +=1;
    }
    //only in phase 2\\
    function TendrilsoftheNight(){
        var TendrilsoftheNight = document.getElementById("TendrilsoftheNight");
        turn_counter +=1;
    }
    function BleedingSun1(){ //turn 1 charge
        var bSun1 = document.getElementById("bSun1");
        turn_counter +=1;
    }
    function BleedingSun2(){ //massive damage to all, defend is borderline required
        var bSun2 = document.getElementById("bSun2");
        let NANI = new Audio("omaewa.mp3");
        NANI.play()
        NANI.loop = false;
        turn_counter +=1;
    }

    //warrior attacks
    function basic_w(){ //basic attack, no mp used
        turn_counter +=1;

    }
    function ThousandMen(){ //his ult
        var ThousandMen = document.getElementById("ThousandMen");
        turn_counter +=1;
    }
    function ShadowSelf(){
        var ShadowSelf = document.getElementById("ShadowSelf");
        turn_counter +=1;
    }
    function WhimsofFate(){
        var WhimsofFate = document.getElementById("WhimsofFate");
        turn_counter +=1;

    }

    //dark mage attacks
    function basic_d(){
 
    }
    function RadiantSupernova(){ //her ult
        var RadiantSupernova = document.getElementById("RadiantSupernova");
        turn_counter +=1;

    }
    function MirageBlade(){
        var MirageBlade = document.getElementById("MirageBlade");
        turn_counter +=1;

    }
    function Entrapment(){
        var Entrapment = document.getElementById("Entrapment");
        turn_counter +=1;

    }

    //light mage attacks
    function basic_l(){
        turn_counter +=1;

    }
    function PierceEvil(){
        document.getElementById("PierceEvil");
        if (white_mage_mp <10){
            window.alert("Not enough mp!")
        }else{ //assuming phase 1 for now
            health.value -= 80/phase_1_def;
            let l_crit = Math.floor(Math.random() * 16);
            if (l_crit == 15){
                health.value -= 160/phase_1_def;
            }
            white_mage_mp -= 10;
            document.getElementById('l_mage_name').value = lmage_name + " " + "HP: " + white_mage_hp + "\n" +"MP: "+white_mage_mp;
            turn_counter +=1;
            console.log(turn_counter)

        }
    
    }
    
       

    
    function AngelsGrace(){
        var AngelsGrace = document.getElementById("AngelsGrace");
        turn_counter +=1;

    }
    function SupremeAltar(){ //her ult
        var SupremeAltar = document.getElementById("SupremeAltar");
        turn_counter +=1;

    }

 //these will work by retrieving the character's list index and matching it 
 //listener to check if any of them are clicked 


//warrior is 0, dmage is 1, lmage is 2 