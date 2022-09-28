
//initial stats
 //global for now, tighten scope if it becomes problematic
var phase_def = 1.2; //divide by this number 
var phase_mdef = 1.1;


var warrior_hp = 2000;
var warrior_mp = 70;
var warrior_def = 10; //edit these
var warrior_mdef = 6;

var black_mage_hp = 1400; 
var black_mage_mp = 220;
var black_mage_def = 7;
var black_mage_mdef = 16;

var white_mage_hp = 1200;
var white_mage_mp = 220;
var white_mage_def = 6;
var white_mage_mdef = 17; 

//hide elements that get used later
var p1_img = document.getElementById("boss_img");
p1_img.style.visibility = "hidden";

var battle_menu = document.getElementById("battle_menu");
battle_menu.style.visibility = "hidden";

var hp = document.getElementById("HP_bar");
hp.style.visibility = "hidden";
var bn = document.getElementById("boss_name");
bn.style.visibility = "hidden";

var p1 = document.getElementById("txt_"); //initial text box
//p1.style.display = "none";
var p2 = document.getElementById("txt_2"); //secondary text box
p2.style.display = "none";

var b_menu = document.getElementById("menu_template")
b_menu.style.display = "none"
var i_menu = document.getElementById("img_template") //for spells
i_menu.style.display = "none"

var ostbox = document.getElementById("ost_box")


//global sound effects 
var PE = new Audio("pierceevil.wav");


//test hp bar 
/*document.addEventListener("click", function(){
    hp = document.getElementById("HP_bar")
    hp.value -= 700;

})*/
 //todo: add fade out of phase 1 with for loop


 var btn = document.getElementsByClassName("btn"); //atk/spells/def
 //buttons become visible when character is picked
 function removeButtons(){
     //this produces a list, so need to loop to hide each item
        for(let i = 0; i <btn.length; i++){
            btn[i].style.visibility = "hidden";
            };       
 };
 removeButtons()

function addButtons(){//this produces a list, so need to loop to hide each item
    for(let i = 0; i <btn.length; i++){
        btn[i].style.visibility = "visible";
        };       
};
//add listener to wait for initial enter to start game
var phase1_theme;
document.addEventListener("keyup", function startGame(event) {
    if (event.code === 'Enter') {
        document.removeEventListener('keyup', startGame) //so it can only happen once. Prevents event order from getting thrown out of wack
        p1_img.style.visibility = "visible";
        const storm_bg = new Audio('stormnoises.mp3');
        storm_bg.play();
        storm_bg.loop =true;
        storm_bg.volume = 0.3; 
    }
    setTimeout(() =>{
        //window.alert("SHOWTIME!");
        phase1_theme = new Audio('phase1OST.mp3'); //user hunter phase 1
        phase1_theme.play();
        phase1_theme.loop =true;
        ostbox.value = "Now playing: \n Bloodborne OST: The Hunter - Phase 1";
        del_box()
    }, 5000);

});


//};

function del_box(){ //SHOWTIME. Delete initial box and make menu appear
    p1.style.display = "none"; 
    battle_menu.style.visibility = "visible";
    hp.style.visibility = "visible";
    bn.style.visibility = "visible";

};

//dynamically toggle this off and on as needed
document.addEventListener("keyup", function CharacterSelect(event) { 
    if (event.code === 'Enter'){ 
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
                        const current_index = LIndex;
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
}}); //use similar algo for battle menus, using stored index values. 
var lastClick = 0; //fixes bounce glitch
var delay = 20;
function menu_sfx(){
    const menusfx_ = new Audio("menuclick.wav");
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
        menu_sfx()
        addButtons()
          //add listener for click on spells 
          let show_s_d = document.getElementById("spells_b"); //needs on and off state
          
          show_s_d.addEventListener("click", function d_custom(){ //use math to check for every second click.
           
              document.getElementById("btn_1").innerHTML = "Radiant Supernova"
              document.getElementById("btn_2").innerHTML = "Mirage Blade (50MP)"
              document.getElementById("btn_3").innerHTML = "Entrapment"

              if (lastClick >= (Date.now() - delay)) //fixes bounce
              return; 
              lastClick = Date.now(); 
                  var b_menu = document.getElementById("menu_template") 
                  b_menu.style.display = "initial";

                  }
                )
    }else{ 
        console.log("removing buttons")
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
        console.log("removing buttons")
        removeButtons()
    };
    
    };
    //Some kind of general "click" listener is the culprit

    //Everything is being called multiple. This can probably be put in a function and 
    //called as needed
    function ultimaNotCharged(){
        p1.style.display = "initial";
        p1.value = "Ultima not charged!"
        setTimeout(()=>{
            p1.style.display = "none"
        },2000)
    }

    var ultima = document.getElementById('ultima_charge');
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
                            //moving onto the buttons themselves...
                            switch(current_index2){ 
                                case(0): //basic attack. 
                                basic()
                                break;
                                case(1): //this one is spells
                                //use listener to execute the matching spell
                                let btn1 = document.getElementById("btn_1")
                                btn1.addEventListener("click", function(){
                                    if(btn1.innerHTML == "Supreme Altar"){
                                        if (ultima.value != 100){ 
                                            ultimaNotCharged()
                                        }else{
                                            SupremeAltar()
                                            
                                        }
                                    }
                                    else if (btn1.innerHTML == "Radiant Supernova"){
                                        if (ultima.value != 100){
                                            ultimaNotCharged()
                                        }else{
                                            RadiantSupernova()
                                        }
                                    }else if (btn1.innerHTML == "Thousand Men"){;
                                        if (ultima.value != 100){
                                           ultimaNotCharged()
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
    }); 



 //increment with each action taken
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
    var turn_counter = 0;
    function counter(){
        UC = document.getElementById("ultima_charge");
        UC.value +=5;
        turn_counter +=1;
        console.log(turn_counter)
    }

    function randNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }

    //boss attacks
    function SpheresofInsanity(){
        const SpheresofInsanity = document.getElementById("SpheresofInsanity");
        counter()
    };
    function Polarity(){
        const Polarity = document.getElementById("Polarity");
        counter()
    };
    function HellsGate(){
        const HellsGate = document.getElementById("HellsGate");
        counter()
    };
    function SpacialRift(){
        const SpacialRift = document.getElementById("SpacialRift")
        counter()
    };
    //only in phase 2\\
    function TendrilsoftheNight(){
        const TendrilsoftheNight = document.getElementById("TendrilsoftheNight");
        counter()
    };
    function BleedingSun1(){ //turn 1 charge
        const bSun1 = document.getElementById("bSun1");
        counter()
    };
    function BleedingSun2(){ //massive damage to all, defend is borderline required
        const bSun2 = document.getElementById("bSun2");
        const NANI = new Audio("omaewa.mp3");
        NANI.play()
        NANI.loop = false;
        counter()
    };

    //warrior attacks
    function basic_w(){ //basic attack, no mp used
        counter()

    };
    function ThousandMen(){ //his ult
        const ThousandMen = document.getElementById("ThousandMen");
        counter()
    };
    function ShadowSelf(){
        const ShadowSelf = document.getElementById("ShadowSelf");
        counter()
    };
    function WhimsofFate(){
        const WhimsofFate = document.getElementById("WhimsofFate");
        counter()

    };

    //dark mage attacks
    function basic(){
        p1.style.display = "initial";
        setTimeout(()=>{
           let rand_dmg = randNumber(50,70) ; //random value between 50 and 70
           let final_dmg = rand_dmg/phase_def;
            hp.value -= final_dmg;

            let l_crit = Math.floor(Math.random() * 16);
            if (l_crit == 15){
                rand_dmg = randNumber(60,80) ; //adds second attack
                final_dmg = rand_dmg/phase_def;
                hp.value -= final_dmg;
                p1.style.display = "initial";
                p1.value = "Critical hit! Extra attack!"
                setTimeout(2000)
                p1.value = `Your second attack did ${final_dmg.toFixed(1)} damage.`;
             
                
            };    
            p1.style.display = "none";
        p1.value = `You attacked the monster. Did ${final_dmg.toFixed(1)} damage.`;
        counter()
    }, 2000);

};

    function RadiantSupernova(){ //her ult
        document.getElementById("RadiantSupernova");
        document.body.style.backgroundImage = "url('blackhole.png')"
        document.body.style.backgroundSize = "contain";
            //ultimas don't have a crit or mp value
            //display image for 3 seconds, then turn it off
            
            document.getElementById("img_template").src = "RadiantSupernova.jpeg"
            i_menu.style.display = "initial"
            const DC = new Audio("DarkCreepy.mp3"); //change this
            DC.volume = 0.5;
            DC.play()
            DC.loop = false;
            setTimeout(()=>{
                document.body.style.backgroundImage = "url('hellscape.png')"
                document.body.style.backgroundSize = "contain";//this will change based on phase
                DC.pause()
                    hp.value -= 1500 - phase_mdef;
                document.getElementById("ultima_charge").value = -5;
                i_menu.style.display = "none"
                counter()
            }, 7000);
            
    };
    
        counter()

    function MirageBlade(){
        console.log("in function");
        document.getElementById("MirageBlade");
        let d_mp = document.getElementById("d_mage_name_mp")
        if (d_mp <50){ //these values need to be updated
            
            p1.style.display = "initial";
            p1.value = "Not enough MP!"
            setTimeout(()=>{
                p1.style.display = "none"
            },2000)
        }else{ 
            //display image for 3 seconds, then turn it off
            
            i_menu.src = "MirageBlade.jpg" //i_menu is the image template
            i_menu.style.display = "initial"
            PE.play()
            PE.loop = false;
            setTimeout(()=>{
                    hp.value -= (600/phase_def); //hp = boss hp
                    let d_crit = Math.floor(Math.random() * 9); //higher crit rate
                    if (d_crit == 8){
                        hp.value -= (1200/phase_def);
                        p1.style.display = "initial";
                        p1.value = "Critical hit!"
                        setTimeout(()=>{
                            p1.style.display = "none"
                        }, 3000) //note that this is NOT running 3 times. 
                    };    
                black_mage_mp -= 10;
                document.getElementById("d_mage_name_mp").value -=50;
                i_menu.style.display = "none"
                counter()
            }, 3000);
            

        };
    
    };
    

    
    function Entrapment(){ //this will wait till turn system is in place
        var Entrapment = document.getElementById("Entrapment");
        counter() 
        

    };

    //light mage attacks
    //
    
    function PierceEvil(){
        document.getElementById("PierceEvil");
        let l_mp = document.getElementById("l_mage_name_mp")
        if (l_mp <10){
            p1.style.display = "initial";
            p1.value = "Not enough MP!"
            setTimeout(()=>{
                p1.style.display = "none"
            }, 3000)
        }else{ 
            //display image for 3 seconds, then turn it off
            
            i_menu.src = "PierceEvil.jpg"
            i_menu.style.display = "initial"
            const PE = new Audio("pierceevil.wav");
            PE.play()
            PE.loop = false;
            setTimeout(()=>{
                    hp.value -= 200 - phase_mdef;
                    let l_crit = Math.floor(Math.random() * 16);
                    if (l_crit == 15){
                        hp.value -= 400 - phase_mdef;
                        p1.style.display = "initial";
                        p1.value = "Critical hit!"
                        setTimeout(()=>{
                            p1.style.display = "none"
                        }, 3000)
                    };    
                white_mage_mp -= 10;
                document.getElementById("l_mage_name_mp").value -=10;
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

    //phase changes
    var phase2_tr;
    document.addEventListener("click", function phase2(){ //PHASE 2!
        //console.log(hp)
        if (hp.value <10000 && hp.value > 5001){
            document.removeEventListener('click', phase2) //disable here
            p2.style.display = "initial"; //add timeout
            p2.value = "Oh no...";
            phase2_tr = true; //trigger to reference phase 2 later on
            phase_def = 1.3; //update stats for phase 2
            phase_mdef = 1.2;
            setTimeout(() =>{
                const dotheroar = new Audio('dotheroar.mp3')
                dotheroar.play()
                dotheroar.loop = false;
            },2000);
            
            setTimeout(() =>{
                document.getElementById("rainbg").src = "redrain.mp4"
                p2.style.display = "none";
                document.getElementById("boss_img").src = "AKUMU2.0.jpeg";
                const hellnaw = new Audio("hellnaw.mp3");
                hellnaw.play()
                hellnaw.loop = false;
                phase1_theme.pause();
                const phase2_theme = new Audio('phase2OST.mp3') //use hunter phase 2
                phase2_theme.play();
                phase2_theme.loop = true;
                const roar = new Audio("roar.wav");
                roar.play();
                roar.loop = false;
                document.getElementById("boss_name").innerHTML = "Akumu, Origin of the Nightmare";
        
                ostbox.value = "Now playing: \n Bloodborne OST: The Hunter - Phase 2";
            }, 4000);
            setTimeout(()=>{
                const xtraThunder = new Audio("xtrathunder.mp3")
                xtraThunder.play();
                xtraThunder.loop = true;
            }, 5000);

    
        }
})
 //change these to proper on/off
var roar = new Audio("roar.wav");
var phase3_theme = new Audio('phase3ost.mp3') //global so it's usable in the else 
document.addEventListener("click", function phase3(){ //PHASE 3!
        if (hp.value <5001){
            document.removeEventListener('click', phase3)
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
                phase3_theme.play();
                phase3_theme.loop = true;
                roar.play();
                roar.loop = false;
                document.body.style.backgroundImage = "url('firegate.jpg')"
                document.body.style.backgroundSize = "contain";
                ostbox.value = "Now playing: \n Dark Souls 3 OST: Yhorm the Giant";
            }, 4000);
            roar.play();
            roar.loop = false;
         
        }else if (hp.value ==0){
            phase3_theme.pause()
           //display victory window
        }
})
 //these will work by retrieving the character's list index and matching it 
 //listener to check if any of them are clicked 


//warrior is 0, dmage is 1, lmage is 2 