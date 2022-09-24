
//initial stats
 //global for now, tighten scope if it becomes problematic
phase_def = 1.2; //divide by this number 
phase_mdef = 1.1;


warrior_hp = 2000;
warrior_mp = 70;
warrior_def = 10; //edit these
warrior_mdef = 6;

black_mage_hp = 1400; 
black_mage_mp = 220;
black_mage_def = 7;
black_mage_mdef = 16;

white_mage_hp = 1200;
white_mage_mp = 220;
white_mage_def = 6;
white_mage_mdef = 17; 

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
var i_menu = document.getElementById("img_template")
i_menu.style.display = "none"
//test hp bar 
/*document.addEventListener("click", function(){
    health = document.getElementById("HP_bar")
    health.value -= 700;

})*/
var clickCheck = true; //todo: add fade out of phase 1 with for loop
document.addEventListener("click", function phase2(){ //PHASE 2!
        //console.log(health)
        if (health.value <10000 && health.value > 5001 && clickCheck == true){
            clickCheck = false;
            p2.style.display = "initial"; //add timeout
            p2.value = "Oh no...";
            phase2 = true; //trigger to reference phase 2 later on
            phase_def = 1.3; //update stats for phase 2
            phase_mdef = 1.2;
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
                let ostbox = document.getElementById("ost_box")
                ostbox.value = "Now playing: \n Bloodborne OST: The Hunter - Phase 2";
            }, 4000);
            setTimeout(()=>{
                let xtraThunder = new Audio("xtrathunder.mp3")
                xtraThunder.play();
                xtraThunder.loop = true;
                p2.value = ""
            }, 5000);
    
        }else if (health.value ==0){
            phase2_theme.pause()
           //display victory window
        }
})
var clickCheck2 = true; 
document.addEventListener("click", function phase3(){ //PHASE 3!
        if (health.value <5001 && clickCheck2 == true){
            clickCheck2 = false;
            p2.style.display = "initial"; //add timeout
            setTimeout(()=>{
                phase2_theme.pause();
                p2.value = "...";
            },5000)
            setTimeout(() =>{
                p2.value = "...\n...";
            },5000)
            phase3_ = true; //trigger to reference phase 3 later on
            phase_def = 1.3; //update stats for phase 3
            phase_mdef = 1.5;
     
            document.getElementById("boss_name").innerHTML = "Purveyor of Nascency";
            setTimeout(() =>{
                document.getElementById("rainbg").src = "redrain3.mp4"
                p2.style.display = "none";
                document.getElementById("boss_img").src = "phase3.jpg";
                phase3_theme = new Audio('phase3ost.mp3') //use hunter phase 2
                phase3_theme.play();
                phase3_theme.loop = true;
                let roar = new Audio("roar.wav");
                roar.play();
                roar.loop = false;
                document.body.style.backgroundImage = "url('firegate.jpg')"
                document.body.style.backgroundSize = "contain";
                let ostbox = document.getElementById("ost_box")
                ostbox.value = "Now playing: \n Dark Souls 3 OST: Yhorm the Giant";
            }, 4000);

            let roar = new Audio("roar.wav");
            roar.play();
            roar.loop = false;
         
        }else if (health.value ==0){
            phase3_theme.pause()
           //display victory window
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
        const storm_bg = new Audio('stormnoises.mp3');
        storm_bg.play();
        storm_bg.loop =true;
        storm_bg.volume = 0.3; 
        write_message()
    }
});
//todo: swap all window alerts for text boxes
function write_message(){ //Trigger when enter is pressed. Write custom message and begin battle 
   
    let warrior_name = window.prompt("What is your (male) warrior's name?"); 
    if (warrior_name.length >8 || warrior_name.length === 0){
        let txt = document.getElementById("txt_")
        txt.style.display = "initial";
        txt.value = "Name cannot be longer than 8 characters or empty, sorry";
        setTimeout(()=>{
            write_message()
        }, 2000)
        txt.style.display = "none"
    }
    warrior_name = warrior_name.toUpperCase();


    //only move onto this if warrior is confirmed to be correct
    dmage_name = window.prompt("What is your (female) dark mage's name?");
    if (dmage_name.length >8 || dmage_name.length === 0){
        window.alert("Name cannot be longer than 8 characters or empty, sorry");
        dmage_name = window.prompt("What is your (female) dark mage's name?");
    }
    dmage_name = dmage_name.toUpperCase();


    lmage_name = window.prompt("What is your (female) light mage's name?");
    if (lmage_name.length >8 || lmage_name.length === 0){
        window.alert("Name cannot be longer than 8 characters or empty, sorry");
        lmage_name = window.prompt("What is your (female) light mage's name?");
    }
    lmage_name = lmage_name.toUpperCase();
}



    
    
    //hide buttons until character is selected 
    //document.getElementById("warrior_name").value = warrior_name + " " + "HP: "+ warrior_hp + "\n" +"MP: "+warrior_mp;
    //document.getElementById("d_mage_name").value = dmage_name +  " " + "HP: " + black_mage_hp + "\n" +"MP: "+black_mage_mp;
    //document.getElementById("l_mage_name").value = lmage_name +  " " + "HP: " + white_mage_hp + "\n" +"MP: "+white_mage_mp;

    //document.getElementById("txt_").value = `GREETINGS, PATHETIC MORTALS. WHAT ARE YOUR NAMES AGAIN? ${warrior_name.replace('\n', '')}, ${dmage_name.replace('\n', '')}, and ${lmage_name.replace('\n', '')}? WHATEVER. TIME TO DIE...`;

    setTimeout(() =>{
        //window.alert("SHOWTIME!");
        phase1_theme = new Audio('phase1OST.mp3'); //user hunter phase 1
        phase1_theme.play();
        phase1_theme.loop =true;
        let ostbox = document.getElementById("ost_box")
        ostbox.value = "Now playing: \n Bloodborne OST: The Hunter - Phase 1";
        del_box()
    }, 5000);

//};

function del_box(){ //SHOWTIME. Delete initial box and make menu appear
    var init_box = document.getElementById("txt_");
    init_box.style.display = "none"; 
    battle_menu.style.visibility = "visible";
    hp.style.visibility = "visible";
    bn.style.visibility = "visible";

};

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
                            break;
                            case(1):
                            d_mage_menu()
                            break;
                            case(2):
                            l_mage_menu();
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
let click_counter = 0;
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
        show_s_k.addEventListener("click", function k_custom(){ //use math to check for every second click.
            //every second click (2,4,6 etc)will turn it off
            document.getElementById("btn_1").innerHTML = "Thousand Men"
            document.getElementById("btn_2").innerHTML = "Shadow Self"
            document.getElementById("btn_3").innerHTML = "Whims of Fate"

            if (lastClick >= (Date.now() - delay)) //fixes bounce
            return; 
            lastClick = Date.now(); 
                var b_menu = document.getElementById("menu_template")
                b_menu.style.display = "initial"
      
        }
    )
     
    }else{
        console.log("what")
        removeButtons()

    };
    
};

//remove custom menus AFTER they are called, then add back as needed
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
          
          show_s_d.addEventListener("click", function d_custom(){ //use math to check for every second click.
           
              document.getElementById("btn_1").innerHTML = "Radiant Supernova"
              document.getElementById("btn_2").innerHTML = "Mirage Blade"
              document.getElementById("btn_3").innerHTML = "Entrapment"

              if (lastClick >= (Date.now() - delay)) //fixes bounce
              return; 
              lastClick = Date.now(); 
                  var b_menu = document.getElementById("menu_template") 
                  b_menu.style.display = "initial";

                  }
                )
            
            
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
          show_s_l.addEventListener("click", function l_custom(){ //use math to check for every second click.
              //every second click (2,4,6 etc)will turn it off
              document.getElementById("btn_1").innerHTML = "Supreme Altar"
              document.getElementById("btn_2").innerHTML = "Pierce Evil"
              document.getElementById("btn_3").innerHTML = "Angel's Grace"
                if (lastClick >= (Date.now() - delay)) //fixes bounce
                    return; 
                lastClick = Date.now(); 
                var b_menu = document.getElementById("menu_template")
                b_menu.style.display = "initial";
          }
        )
 //TURN THIS LISTENER OFF AFTER IT IS USED, THEN BACK ON AS NECESSARY
    
    }else{
        console.log("what")
        removeButtons()
    };
    
    };
    //Some kind of general "click" listener is the culprit

    //Everything is being called multiple
    document.addEventListener("DOMContentLoaded", function(event) { 
        var buttons = document.querySelectorAll('.btn');//this acts like an array
            if (buttons){ //if it exists
                buttons.forEach(function getIndex(curVal2, LIndex2){ //current value and index in the list, add event listener to each
                    curVal2.addEventListener('click', function() {
                    //console.log(lIndex);
                    curVal2.classList.toggle("active2");
                    buttons.forEach(function(x, sL2){ 
                        if(LIndex2 !== sL2) { //if list index is NOT equal to the selected list element, aka one has already been picked
                            x.classList.remove('active2');
                            };
                            current_index2 = LIndex2;
                            console.log(current_index2) //stores current index

                            switch(current_index2){ 
                                case(0): //basic attack. 
                                basic()
                                break;

                                case(1): //this one is spells
                                //use listener to execute the matching spell
                                let btn1 = document.getElementById("btn_1")
                                btn1.addEventListener("click", function(){
                                    if(btn1.innerHTML == "Supreme Altar"){
                                        let ultima = document.getElementById('ultima_charge');
                                        if (ultima.value != 100){
                                            window.alert("Ultima not charged!");
                                        }else{
                                            SupremeAltar()
                                        }
                                    }
                                    else if (btn1.innerHTML == "Radiant Supernova"){
                                        let ultima = document.getElementById('ultima_charge');
                                        if (ultima.value != 100){
                                            window.alert("Ultima not charged!"); //we have a bounce error here
                                        }else{
                                            RadiantSupernova()
                                        }
                                    }else if (btn1.innerHTML == "Thousand Men"){
                                        let ultima = document.getElementById('ultima_charge');
                                        if (ultima.value != 100){
                                            window.alert("Ultima not charged!");
                                        }else{
                                            ThousandMen()
                                        };

                                    };
                                }) 
                                let btn2 = document.getElementById("btn_2")
                                btn2.addEventListener("click", function(){
                                    if(btn2.innerHTML == "Mirage Blade"){
                                        MirageBlade();
                                    }
                                    else if (btn2.innerHTML == "Pierce Evil"){
                                        PierceEvil();
                                    }
                                    else if (btn2.innerHTML == "Shadow Self"){
                                        ShadowSelf();
                                    };
                                });
                                let btn3 = document.getElementById("btn_3")
                                btn3.addEventListener("click", function(){
                                    if(btn3.innerHTML == "Angel's Grace"){
                                        AngelsGrace();
                                    }
                                    else if(btn3.innerHTML == "Entrapment"){
                                        Entrapment();
                                    }
                                    else if (btn3.innerHTML == "Whims of Fate"){
                                        WhimsofFate();

                                    }

                                })
                                break;

                                case(2): //defend
                                console.log('you defended')
                                break;
                            };
                     });
    
                 });//move to picking menu based on character
                 //console.log(LIndex)
            
            });
        };
    }); //use similar algo for battle menus, using stored index v

    health = document.getElementById("HP_bar")

    turn_counter = 0; //increment with each action taken
    //add event listener for odd turn numbers to trigger boss attacks
    /*document.addEventListener("click", function (){
        if (turn_counter % 2 !==0){
            setTimeout(()=>{
                window.alert("MY TURN BITCH")
            }, 2000)
        }

    })*/
                        //~~~~Below here is all movesets~~~\\
    //going to need to keep track of turns in a list for some attacks to work 
    function counter(){
        UC = document.getElementById("ultima_charge");
        UC.value +=5;
        turn_counter +=1;
    }

    function randNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }

    //boss attacks
    function SpheresofInsanity(){
        var SpheresofInsanity = document.getElementById("SpheresofInsanity");
        counter()
    };
    function Polarity(){
        var Polarity = document.getElementById("Polarity");
        counter()
    };
    function HellsGate(){
        var HellsGate = document.getElementById("HellsGate");
        counter()
    };
    function SpacialRift(){
        var SpacialRift = document.getElementById("SpacialRift")
        counter()
    };
    //only in phase 2\\
    function TendrilsoftheNight(){
        var TendrilsoftheNight = document.getElementById("TendrilsoftheNight");
        counter()
    };
    function BleedingSun1(){ //turn 1 charge
        var bSun1 = document.getElementById("bSun1");
        counter()
    };
    function BleedingSun2(){ //massive damage to all, defend is borderline required
        var bSun2 = document.getElementById("bSun2");
        let NANI = new Audio("omaewa.mp3");
        NANI.play()
        NANI.loop = false;
        counter()
    };

    //warrior attacks
    function basic_w(){ //basic attack, no mp used
        counter()

    };
    function ThousandMen(){ //his ult
        var ThousandMen = document.getElementById("ThousandMen");
        counter()
    };
    function ShadowSelf(){
        var ShadowSelf = document.getElementById("ShadowSelf");
        counter()
    };
    function WhimsofFate(){
        var WhimsofFate = document.getElementById("WhimsofFate");
        counter()

    };

    //dark mage attacks
    function basic(){
        let txt = document.getElementById("txt_")
        txt.style.display = "initial";
        setTimeout(()=>{
           let rand_dmg = randNumber(50,70) ; //random value between 50 and 70
           let final_dmg = rand_dmg/phase_def;
            health.value -= final_dmg;

            let l_crit = Math.floor(Math.random() * 16);
            if (l_crit == 15){
                let rand_dmg = randNumber(60,80) ; //adds second attack
                let final_dmg = rand_dmg/phase_def;
                health.value -= final_dmg;
                txt.style.display = "initial";
                txt.value = "Critical hit! Extra attack!"
                setTimeout(2000)
                txt.value = `Your second attack did ${final_dmg.toFixed(1)} damage.`;
             
                
            };    
            txt.style.display = "none";
        turn_counter +=1;
        txt.value = `You attacked the monster. Did ${final_dmg.toFixed(1)} damage.`;
        console.log(turn_counter)
        counter()
    }, 2000);

};

    function RadiantSupernova(){ //her ult
        var RadiantSupernova = document.getElementById("RadiantSupernova");
        counter()

    };
    function MirageBlade(){
        console.log("in function");
        document.getElementById("MirageBlade");
        if (black_mage_mp <50){
            window.alert("Not enough mp!")
        }else{ 
            //display image for 3 seconds, then turn it off
            
            document.getElementById("img_template").src = "MirageBlade.jpg"
            i_menu.style.display = "initial"
            let PE = new Audio("pierceevil.wav");
            PE.play()
            PE.loop = false;
            setTimeout(()=>{
                    health.value -= 600/phase_def;
                    let d_crit = Math.floor(Math.random() * 9); //higher crit rate
                    if (d_crit == 8){
                        health.value -= 1200/phase_def;
                        window.alert("Critical hit!") //note that this is NOT running 3 times. 
                    };    
                black_mage_mp -= 10;
                document.getElementById("d_mage_name_mp").value -=50;
                turn_counter +=1;
                console.log(turn_counter)
                i_menu.style.display = "none"
                counter()
            }, 3000);
            

        };
    
    };

    
    function Entrapment(){
        var Entrapment = document.getElementById("Entrapment");
        counter()

    };

    //light mage attacks
    
    function PierceEvil(){
        document.getElementById("PierceEvil");
        if (white_mage_mp <10){
            window.alert("Not enough mp!")
        }else{ 
            //display image for 3 seconds, then turn it off
            
            document.getElementById("img_template").src = "PierceEvil.jpg"
            i_menu.style.display = "initial"
            let PE = new Audio("pierceevil.wav");
            PE.play()
            PE.loop = false;
            setTimeout(()=>{
                    health.value -= 200 - phase_mdef;
                    let l_crit = Math.floor(Math.random() * 16);
                    if (l_crit == 15){
                        health.value -= 400 - phase_mdef;
                        window.alert("Critical hit!")
                    };    
                white_mage_mp -= 10;
                document.getElementById("l_mage_name_mp").value -=10;
                turn_counter +=1;
                console.log(turn_counter)
                i_menu.style.display = "none"
                counter()
            }, 3000);
            

        };
    
    };

    function AngelsGrace(){
        document.getElementById("AngelsGrace");
        turn_counter +=1;

    };
    function SupremeAltar(){ //her ult
        document.getElementById("SupremeAltar");
        turn_counter +=1;

    };

 //these will work by retrieving the character's list index and matching it 
 //listener to check if any of them are clicked 


//warrior is 0, dmage is 1, lmage is 2 