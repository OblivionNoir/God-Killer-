//what if....Everything was ACTIVE turn based? 
//You each get an interval to attack
//use basic timers instead of turn counting
//so like, boss attacks every 20 seconds and you can do whatever in that time
//but you cannot attack while boss is attacking
//use setinterval 
//boss gets slightly more aggressive every stage 
//initial stats
//remember to add hover descriptions over the spells!!!


//hide elements that get used later
var worker = new Worker('timers_thread.js'); //worker thread for timers

var p1_img = document.getElementById("boss_img");
p1_img.style.visibility = "hidden";
p1_img.style.border.color = "rgb(130, 3, 3)"

var battle_menu = document.getElementById("battle_menu");
battle_menu.style.visibility = "hidden";

var progress_menu = document.getElementById("p_menu");
progress_menu.style.visibility = "hidden";

var hp = document.getElementById("HP_bar");
hp.style.visibility = "hidden";
var hp_label = document.getElementById("boss_hp_label");
hp_label.style.visibility = "hidden";
var bn = document.getElementById("boss_name");
bn.style.visibility = "hidden";

var p1 = document.getElementById("txt_"); //initial text box
p1.style.visibility= "hidden"; 
//p1.style.display = "none";
var p2 = document.getElementById("txt_2"); //secondary text box
p2.style.visibility = "hidden";

var b_menu = document.getElementById("menu_template")
b_menu.style.visibility = "hidden"
var i_menu = document.getElementById("img_template") //for spells
i_menu.style.visibility = "hidden"

//get hp values 
var warrior_hp = document.getElementById("warrior_name_hp")
var black_mage_hp = document.getElementById("d_mage_name_hp")
var white_mage_hp = document.getElementById("l_mage_name_hp")  
var red_mage_hp = document.getElementById("r_mage_name_hp")
//get mp values 
var warrior_mp = document.getElementById("warrior_name_mp")
var black_mage_mp = document.getElementById("d_mage_name_mp")
var white_mage_mp = document.getElementById("l_mage_name_mp")
var red_mage_mp = document.getElementById("r_mage_name_mp")

var wa = document.getElementById("knight_img");
var dmi = document.getElementById("d_mage_img")
var lmi = document.getElementById("l_mage_img");
var rmi = document.getElementById("r_mage_img");

var warrior_dead = false;
var black_mage_dead = false;
var white_mage_dead = false;
var red_mage_dead = false;

var combat_buttons = document.getElementsByClassName('btn')

var rain = document.getElementById("rainbg")
rain.loop = true;
document.getElementById("i_overlay").style.opacity = "0.20"


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
document.addEventListener('click', function startGame(event) {
        document.removeEventListener('click', startGame)
        console.log("Starting listener removed")
        p1_img.style.visibility = "visible";
     
        const storm_bg = new Audio('stormnoises.mp3');
        storm_bg.play();
        storm_bg.loop =true;
        storm_bg.volume = 0.3; 
    setTimeout(() =>{
        //window.alert("SHOWTIME!");
        phase1_theme = new Audio('epicaf_Em.mp3'); 
        phase1_theme.play();
        phase1_theme.loop =true;
        phase1_theme.volume = 0.7;//because the phase 3 theme is naturally a little louder
 //check every second for phase change

        del_box()
        startBoss()
    }, 5000);

});

function startBoss(){//this cannot be a constant interval. Causes boss to attack too fast
            //start boss attack rotation 
                switch(true){
                    case(phase2called):
                    boss_phase2()
                break;
                    case(phase3called):
                    boss_phase3()
                break;
                default: //still in phase 1
                    boss_phase1()
                break;
          };
    
}

//};

function del_box(){ //SHOWTIME. Delete initial box and make menu appear
    console.log("Intro box removed")
    //make these a class and for loop through them all 
    hp_label.style.visibility = "visible";
    battle_menu.style.visibility = "visible";
    progress_menu.style.visibility = "visible";
    hp.style.visibility = "visible";
    bn.style.visibility = "visible";

};

function DeadMessage(){
    p1.style.visibility = "visible";
    p1.innerHTML = "This person is dead! Pick another character."
    setTimeout(()=>{
        p1.style.visibility = "hidden";
    }, 2000)

}

var players_array = [];
var players = document.getElementsByClassName('clickable');
for (let i = 0; i < players.length; i++) {
    players_array.push(players[i]);
}

var active_added = false;

    for (let i = 0; i < players_array.length; i++){ 
        players_array[i].addEventListener('click', function selected(){
            console.log(players_array)
            console.log("listeners added to players")
            if (this.classList.contains('active')){ 
                for (let i = 0; i != players_array.length; i++){
                    players_array[i].classList.remove('active') //remove all, not just one
                    active_added = false;
                }//second for loop ends here    
            }else if (active_added == false ){
                this.classList.add('active')
                active_added = true;
                let list_index_players = players_array.indexOf(this);
                console.log(list_index_players)
                    switch(list_index_players){
                        case 0:
                            if (warrior_dead == true){
                                DeadMessage()
                            }else{
                                console.log("Warrior selected")
                                warrior_menu()
                            }
                        break;
                        case 1://mage is being recognized as 1, so why the fuck is it not working?
                            if (black_mage_dead == true){
                                DeadMessage()
                            }else{
                                //this is not being reached when she is revived
                                console.log("Dark Mage selected")
                                d_mage_menu()
                            }
                        break;
                        case 2:
                            if (white_mage_dead == true){
                                DeadMessage()
                            }else{
                                console.log("Light Mage selected")
                                l_mage_menu()
                            }
                        break;
                        case 3:
                            if (red_mage_dead == true){
                                DeadMessage()
                            }else{
                                console.log("Red Mage selected")
                                r_mage_menu()
                            }
                        break;
                        default:
                            console.log("switch 1 - shits fucked")
                    };
                //access current index, then pull up appropriate menu
            }else{
                console.log("wtf")
            };
        }//listener ends here
    )};//first for loop ends here






function menu_sfx(){
    const menusfx_ = new Audio("menuclick.wav");
    menusfx_.play()
    menusfx_.loop = false;
}



function warrior_menu(){ //0 //when this is reached, we know the warrior has been clicked //need to check if it has border or not
    //if red, show menu. If null, hide menu
    //active class = red
    console.log('made it -knight') 
    if (wa.classList.contains('active') && warrior_dead == false){
        menu_sfx()
        addButtons() 
            document.getElementById("btn_1").innerHTML = "Thousand Men"
            document.getElementById("btn_2").innerHTML = "Shadow Self"
            document.getElementById("btn_3").innerHTML = "Whims of Fate"
            document.getElementById("btn_4").innerHTML = "Rebellion"
            document.getElementById("btn_5").innerHTML = "Deathblow"  
            document.getElementById("btn_6").innerHTML = "Defend - knight"//change this to character name
            //from here move to the function that executes it

    }else{
        removeButtons()
    };    
};

//remove custom menus AFTER they are called, then add back as needed
function d_mage_menu(){ //1//need to check if it has border or not
    //if red, show menu. If null, hide menu
    //active class = red
    if (dmi.classList.contains('active') && black_mage_dead == false){
        menu_sfx()
        addButtons()
              document.getElementById("btn_1").innerHTML = "Radiant Supernova"
              document.getElementById("btn_2").innerHTML = "Mirage Blade"
              document.getElementById("btn_3").innerHTML = "Entrapment" 
              document.getElementById("btn_4").innerHTML = "Black Fire"
              document.getElementById("btn_5").innerHTML = "Shattered Mirror"   
              document.getElementById("btn_6").innerHTML = "Defend - dark mage"
    }else{ 
        console.log("removing buttons")
        removeButtons()

};

};

function l_mage_menu(){ //2//need to check if it has border or not
        //if red, show menu. If null, hide menu
        //active class = red
    if (lmi.classList.contains('active') && white_mage_dead == false){
        menu_sfx()
        addButtons()
              document.getElementById("btn_1").innerHTML = "Supreme Altar"
              document.getElementById("btn_2").innerHTML = "Pierce Evil"
              document.getElementById("btn_3").innerHTML = "Angel's Grace"
              document.getElementById("btn_4").innerHTML = "Rebirth"
              document.getElementById("btn_5").innerHTML = "Chain Heal"  
              document.getElementById("btn_6").innerHTML = "Defend - light mage"

    }else{
        console.log("removing buttons")
        removeButtons()
    };
    
    };
//todo: add hovers
function r_mage_menu(){ //3 //need to check if it has border or not
    //if red, show menu. If null, hide menu
    //active class = red
    if (rmi.classList.contains('active') && red_mage_dead == false){
    menu_sfx()
    addButtons()
          document.getElementById("btn_1").innerHTML = "Scarlet Subversion"
          document.getElementById("btn_2").innerHTML = "Border of Life"
          document.getElementById("btn_3").innerHTML = "Bloody Vengeance"
          document.getElementById("btn_4").innerHTML = "Chain Lightning"
          document.getElementById("btn_5").innerHTML = "My Turn"  
          document.getElementById("btn_6").innerHTML = "Defend - red mage"

}else{
    console.log("removing buttons")
    removeButtons()
};


};

var defend_active =false;

    //here we need to loop through the battle options, much like the character selection
var buttons_array = [];
var button = document.getElementsByClassName('btn');
    //change this to a for loop
    for(let i = 0; i < button.length; i++){
        buttons_array.push(button[i])
        console.log(buttons_array)
    }
    var active2_added = false;
    
    for (let i = 0; i < buttons_array.length; i++){
        buttons_array[i].addEventListener('click', function buttonMenu(){
            console.log("listeners added to combat buttons")
            if (this.classList.contains('active2')){ 
                for (let i = 0; i < buttons_array.length; i++){
                    b_menu.style.visibility = "visible";
                    buttons_array[i].classList.remove('active2')
                    active2_added = false;
                }//second for loop ends here    
          
            }else if (active2_added == false){
                this.classList.add('active2')
                active2_added = true;
                let list_index_buttons = buttons_array.indexOf(this);
                switch(list_index_buttons){
                    case 0:
                        console.log("Items selected")
                        Items()
                    break;
                    case 1:
                        console.log("Spells selected")
                        b_menu.style.visibility = "visible";
                        spellsMenu()
                   
                    break;
                    default:
                        console.log("buttons switch - shits fucked")
                };
            }else{
                console.log("wtf")
            };
        }//listener ends here
    )};//first for loop ends here
    

    function ultimaNotCharged(){
        p1.style.visibility = "visible";
        p1.value = "Ultima not charged!"
        setTimeout(()=>{
            p1.style.visibility = "hidden"
        },2000)
    }

    var ultima = document.getElementById('ultima_charge');

    var spells_array = []
    var makespells = document.getElementsByClassName('spellbutton')
    //make array to check through
    for (let i = 0; i < makespells.length; i++){
        spells_array.push(makespells[i])
        console.log(spells_array)
    }
    //spells_array.push(spells0, spells1, spells2, spells3, spells4)

    //this one doens't need on off state, it's just one click
    //can't use class or I'd get 0-8 instead of 0-2

    function spellsMenu(){ 
        console.log("spells menu called")
        for (let i = 0; i < spells_array.length; i++){

            spells_array[i].addEventListener('click', function(){
                console.log("listeners added to spells buttons")

                    let list_index_spells = spells_array.indexOf(this);
                    switch(list_index_spells){
                        case 0: //this is working! 
                            console.log("spell button 0 selected") 
                            switch(true){
                                case ultima.value!== 100:
                                    ultimaNotCharged()
                                break;

                                case spells_array[0].innerHTML == "Thousand Men":
                                    Thousand_Men()
                                break;

                                case spells_array[0].innerHTML == "Radiant Supernova":
                                    Radiant_Supernova()
                                break;

                                case spells_array[0].innerHTML == "Supreme Altar":
                                    Supreme_Altar()
                                break;

                                case spells_array[0].innerHTML == "Scarlet Subversion":
                                    Scarlet_Subversion()
                                break;
                            };
                        break;

                        case 1: //so this is the second spell button...
                            console.log("spell button 1 selected")
                            switch(true){
                                case spells_array[1].innerHTML == "Shadow Self":
                                    Shadow_Self()
                                break;

                                case spells_array[1].innerHTML == "Mirage Blade":
                                    Mirage_Blade()
                                break;

                                case spells_array[1].innerHTML == "Pierce Evil":
                                    Pierce_Evil()
                                break;

                                case spells_array[1].innerHTML == "Border of Life":
                                    Borderof_Life()
                                break;
                            };
                        break;

                        case 2: //this is the 3rd and so forth
                            console.log("spell button 2 selected")
                            switch(true){
                                case spells_array[2].innerHTML == "Whims of Fate":
                                    Whims_of_Fate()
                                break;

                                case spells_array[2].innerHTML == "Entrapment":
                                    Entrapment()
                                break;

                                case spells_array[2].innerHTML == "Angel's Grace":
                                    Angels_Grace()
                                break;

                                case spells_array[2].innerHTML == "Bloody Vengeance":
                                    Bloody_Vengeance()
                                break;
                            };
    
                        break;

                        case 3:
                            switch(true){
                                case spells_array[3].innerHTML == "Rebellion":
                                    Rebellion()
                                break;

                                case spells_array[3].innerHTML == "Black Fire":
                                    Black_Fire()
                                break;

                                case spells_array[3].innerHTML == "Rebirth":
                                    Rebirth()
                                break;

                                case spells_array[3].innerHTML == "Chain Lightning":
                                    Chain_Lightning()
                                break;
                            };
        
                        break;
                        case 4:
                            console.log("spell button 4 selected")
                            switch(true){
                                case spells_array[4].innerHTML == "Deathblow":
                                    Deathblow()
                                break;

                                case spells_array[4].innerHTML == "Shattered Mirror":
                                    Shattered_Mirror()
                                break;

                                case spells_array[4].innerHTML == "Chain Heal":
                                    Chain_Heal()
                                break;

                                case spells_array[4].innerHTML == "My Turn":
                                    My_Turn()
                                break;
                            };

                        break;
                        case 5://defend 
                            console.log("spell button 5 selected")
                            switch(true){
                                case spells_array[5].innerHTML == "Defend - knight":
                                    defend(0)
                                break;

                                case spells_array[5].innerHTML == "Defend - dark mage":
                                    defend(1)
                                break;

                                case spells_array[5].innerHTML == "Defend - light mage":
                                    defend(2)
                                break;

                                case spells_array[5].innerHTML == "Defend - red mage":
                                    defend(3)
                                break;
                            }
                        break;
                        default:
                            console.log("switch2 - shits fucked")
                    };
             
            }//listener ends here
        )};
 
};



    //convert to array items 0,1,2


    //check for dead status
    //only want this to check whenever the boss attacks
function timeout(){
    setTimeout(()=>{ 
        p1.style.visibility = "hidden"
    }, 2000);
}


//spell menu should dissapear and reset while boss is attacking, so it shouldn't be a concern here
//need to loop through the alive members if someone dies so the buttons work again. Functions?
//Easiest way is probably a constant refresh in the background, but that's a lot of processing power
 function CheckDeadStatus(){ //call after every boss attack
            //adding to 0,1,2, which are the players
            switch(true){
                case(warrior_hp.value <=0):  //first revert to 0 if negative
                    warrior_hp.value ==0;
                    warrior_dead = true; //add message 
                    p1.style.visibility= "visible";
                    p1.value = "Warrior has fallen!"
                    isDead(wa)
                    timeout()
                    break; //do stuff so they can't be attacked or selected while dead
                case(black_mage_hp.value <=0):
                    black_mage_hp.value ==0;
                    black_mage_dead = true;
                    p1.style.visibility = "visible";
                    p1.value = "Dark mage has fallen!"
                    isDead(dmi)
                    timeout()
                    break;
                case(white_mage_hp.value <=0):
                    white_mage_hp.value ==0;
                    white_mage_dead = true;
                    p1.style.visibility = "visible";
                    p1.value = "Light mage has fallen!"
                    isDead(lmi)
                    timeout()
                    break;
                case(red_mage_hp.value <=0):
                    red_mage_hp.value ==0;
                    red_mage_dead = true;
                    p1.style.visibility = "visible";
                    p1.value = "Red mage has fallen!"
                    isDead(rmi)
                    timeout()
                    break;
                default:
                    console.log("nobody is dead")
    
            };
    };
    //apply the limitations of the dead status
function isDead(partyMember){
    //partyMember.style.zIndex = "-1"
    //remove any active status on the dead party member
   //partyMember.classList.remove("active")
    active_added = false;
    partyMember.style.opacity = "0.1"//There will be checks in the character selection to make sure they can't be selected
    b_menu.style.visibility = "hidden"
    //hide the buttons too
}
function isAlive(partyMember){
    partyMember.style.opacity = "1"
    //revert hp according to who is being revived
    switch(partyMember){
        case wa:
            warrior_dead = false;
            warrior_hp.value = 275;
            warrior_menu() //for some fucking reason that only God knows, this is the only way to get the menu to show up again
        break;
        case dmi:
            black_mage_dead = false;
            black_mage_hp.value = 235;
            d_mage_menu()
        break;
        case lmi:
            white_mage_dead = false;
            white_mage_hp.value = 200;
            l_mage_menu()
        break;
        case rmi:
            red_mage_dead = false;
            red_mage_hp.value = 190;
            r_mage_menu()
        break;
        default:
            console.log("isAlive - shits fucked")
        break;


    }
}
 

    //phase changes
    var roar = new Audio("roar.wav");
    //test conditions for phases
    phase2called = false;
    phase3called = false;
function TestPhase(){
        if (hp.value <=0){
            Victory()
        }else if (hp.value <30000 && hp.value > 15001 && phase2called == false){
            phase2called = true;
            phase2()
            
        }else if (hp.value <15001 && phase3called == false){
            phase3called = true;
            phase3()
        }else{
            console.log("still in phase 1")
            
        }
    }

    function Victory(){
        //stuff when you win
    }

  function phase2(){ 
            console.log("phase 2 triggered")
            phase_def = 1.4; //update stats for phase 2
            phase_mdef = 1.3;  
            roar.play();
            roar.loop = false;
            setTimeout(()=>{
                const xtraThunder = new Audio("xtrathunder.mp3")
                xtraThunder.play();
                xtraThunder.loop = true;
            }, 2000);
        }
     



var phase3_theme = new Audio('phase3ost.mp3') //global so it's usable in the else 

 function phase3(){ //PHASE 3
            phase_def = 1.5; //update stats for phase 3
            phase_mdef = 1.6;
            let hellnaw = new Audio("hellnaw.mp3")
            hellnaw.play();
            roar.play();
            let phase3theme = new Audio('yhormdrop.wav')
            phase1_theme.pause()
            phase3theme.play()
            phase3theme.loop = true;
            p1_img.style.boxShadow= "1.5vh 1.5vh 1.5h 1.5vh  rgb(130, 3, 3)"
            //roar.loop = false;
            const growl = new Audio('growl.mp3')
            document.body.style.backgroundImage = "url('trueformbg.png')"   
            p1_img.src = "trueform.png"
            bn.innerHTML = "True Form of the Abomination" 
            document.getElementById("i_overlay").style.opacity = "0.25"//make it bloodier
            //sound effect intervals
            setInterval(()=>{
                roar.play();
            },30000)  
            setInterval(()=>{
                growl.play();
                growl.volume = 0.8;
            },40000) 
};
//check for ultima status and change appearance accordingly
//attacks, which raise the bar, are done with clicks so this should check every time by default
//use promises for this instead?


//warrior is 0, dmage is 1, lmage is 2 



