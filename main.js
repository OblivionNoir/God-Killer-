
//initial stats
 //global for now, tighten scope if it becomes problematic
var phase_def = 1.2; //divide by this number 
var phase_mdef = 1.1;


var warrior_def = 1.6; //edit these
var warrior_mdef = 1.4;



var black_mage_def = 1.3;
var black_mage_mdef = 1.7;


var white_mage_def = 1.2;
var white_mage_mdef = 1.8; 

var warrior_dead = false;
var black_mage_dead = false;
var l_mage_dead = false;

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

//get hp values 
var warrior_hp = document.getElementById("warrior_name_hp")
var black_mage_hp = document.getElementById("d_mage_name_hp")
var white_mage_hp = document.getElementById("l_mage_name_hp")    
//get mp values 
var warrior_mp = document.getElementById("warrior_name_mp")
var black_mage_mp = document.getElementById("d_mage_name_mp")
var white_mage_mp = document.getElementById("l_mage_name_mp")
var combat_buttons = document.getElementsByClassName('btn')
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
document.addEventListener('keyup', function startGame(event) {
    if (event.code === 'Enter') {
        document.removeEventListener('keyup', startGame)
        console.log("Starting listener removed")
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
    console.log("Intro box removed")
    p1.style.display = "none"; 
    battle_menu.style.visibility = "visible";
    hp.style.visibility = "visible";
    bn.style.visibility = "visible";

};



var players_array = [];
var players = document.getElementsByClassName('clickable');
players_array.push(players[0], players[1], players[2]);
var active_added = false;
//Character selection, working beautifully<3
for (let i = 0; i < players_array.length; i++){
    players_array[i].addEventListener('click', function selected(){
        console.log("listeners added to players")
        if (this.classList.contains('active')){ 
            for (let i = 0; i < players_array.length; i++){
                players_array[i].classList.remove('active') //remove all, not just one
                active_added = false;
                document.getElementById('atk_b').style.visibility = "hidden";
                document.getElementById('spells_b').style.visibility = "hidden";
                document.getElementById('def_b').style.visibility = "hidden";

            }//second for loop ends here    
      
        }else if (active_added == false){
            this.classList.add('active')
            active_added = true;
            document.getElementById('atk_b').style.visibility = "visible";
            document.getElementById('spells_b').style.visibility = "visible";
            document.getElementById('def_b').style.visibility = "visible";
            let list_index_players = players_array.indexOf(this);
                switch(list_index_players){
                    case 0:
                        console.log("Warrior selected")
                        warrior_menu()
                    break;
                    case 1:
                        console.log("Dark Mage selected")
                        d_mage_menu()
                    break;
                    case 2:
                        console.log("Light Mage selected")
                        l_mage_menu()
                    break;
                    default:
                        console.log("switch - what the fuck")
                };
            //access current index here, then pull up appropriate menu
        }else{
            console.log("what the fuck")
        };
    }//listener ends here
)};//first for loop ends here

 //use similar algo for battle menus, using stored index values. 
var lastClick = 0; //fixes bounce glitch
var delay = 20;
function menu_sfx(){
    const menusfx_ = new Audio("menuclick.wav");
    menusfx_.play()
    menusfx_.loop = false;
}





function warrior_menu(){ //0 //when this is reached, we know the warrior has been clicked
    var ki = document.getElementById("knight_img"); //need to check if it has border or not
    //if red, show menu. If null, hide menu
    //active class = red
    console.log('made it -knight') 
    if (ki.classList.contains('active')){
        menu_sfx()
        addButtons() 
            document.getElementById("btn_1").innerHTML = "Thousand Men"
            document.getElementById("btn_2").innerHTML = "Shadow Self"
            document.getElementById("btn_3").innerHTML = "Whims of Fate"
            //from here move to the function that executes it

    }else{
        removeButtons()
    };    
};

//remove custom menus AFTER they are called, then add back as needed
function d_mage_menu(){ //1
    di = document.getElementById("d_mage_img"); //need to check if it has border or not
    //if red, show menu. If null, hide menu
    //active class = red
    if (di.classList.contains('active')){
        menu_sfx()
        addButtons()
              document.getElementById("btn_1").innerHTML = "Radiant Supernova"
              document.getElementById("btn_2").innerHTML = "Mirage Blade"
              document.getElementById("btn_3").innerHTML = "Entrapment"    
    }else{ 
        console.log("removing buttons")
        removeButtons()

};

};

function l_mage_menu(){ //2
    li = document.getElementById("l_mage_img"); //need to check if it has border or not
        //if red, show menu. If null, hide menu
        //active class = red
    if (li.classList.contains('active')){
        menu_sfx()
        addButtons()
              document.getElementById("btn_1").innerHTML = "Supreme Altar"
              document.getElementById("btn_2").innerHTML = "Pierce Evil"
              document.getElementById("btn_3").innerHTML = "Angel's Grace"

    }else{
        console.log("removing buttons")
        removeButtons()
    };
    
    };


    //here we need to loop through the battle options, much like the character selection
    var buttons_array = [];
    var button = document.getElementsByClassName('btn');
    buttons_array.push(button[0], button[1], button[2]);
    var active2_added = false;
    
    for (let i = 0; i < buttons_array.length; i++){
        buttons_array[i].addEventListener('click', function buttonMenu(){
            console.log("listeners added to combat buttons")
            if (this.classList.contains('active2')){ 
                for (let i = 0; i < buttons_array.length; i++){
                    b_menu.style.display = "none";
                    buttons_array[i].classList.remove('active2')
                    active2_added = false;
                }//second for loop ends here    
          
            }else if (active2_added == false){
                this.classList.add('active2')
                active2_added = true;
                let list_index_buttons = buttons_array.indexOf(this);
                switch(list_index_buttons){
                    case 0:
                        console.log("Attack selected")
                    break;
                    case 1:
                        console.log("Spells selected")
                        b_menu.style.display = "initial";
                        spellsMenu()
                   
                    break;
                    case 2:
                        console.log("Defend selected")

                   
                    break;
                    default:
                        console.log("switch - what the fuck")
                };
            }else{
                console.log("what the fuck")
            };
        }//listener ends here
    )};//first for loop ends here
    

    function ultimaNotCharged(){
        p1.style.display = "initial";
        p1.value = "Ultima not charged!"
        setTimeout(()=>{
            p1.style.display = "none"
        },2000)
    }

    var ultima = document.getElementById('ultima_charge');

    var spells1 = document.getElementById("btn_1") //0
    var spells2 = document.getElementById("btn_2") //1
    var spells3 = document.getElementById("btn_3")  //2
    var spells_array = []
    spells_array.push(spells1, spells2, spells3)

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
                            if (ultima.value !== 100){
                                ultimaNotCharged()
                                
                            }else if (spells1.innerHTML == "Thousand Men"){
                                ThousandMen()
                            }
                        break;
                        case 1:
                            console.log("spell button 1 selected")
                            if (spells2.innerHTML == "Shadow Self"){
                                ShadowSelf()
                            }else if (spells2.innerHTML == "Mirage Blade"){
                                Mirage_Blade()
                            }else if (spells2.innerHTML == "Pierce Evil"){
                                Pierce_Evil()
                            }
                       
                        break;
                        case 2:
                            console.log("spell button 2 selected")
    
                        break;
                        default:
                            console.log("switch2 - what the fuck")
                    };
             
            }//listener ends here
        )};
 
};



    //convert to array items 0,1,2
    var players_array = [];
    players_array.push(players[0], players[1], players[2]);
    console.log(players_array)

    //check for dead status
    //only want this to check whenever the boss attacks, not every click. No yandev code!
    players_array.forEach(function addDeadStatus(){
            addEventListener('click', function(){ //adding to 0,1,2, which are the players
            switch(true){
                case(warrior_hp.value <=0):  //first revert to 0 if negative
                    warrior_hp.value ==0;
                    warrior_dead = true; //add message 
                    p1.style.display = "initial";
                    p1.value = "Warrior has fallen!"
                    setTimeout(()=>{ //refactor this into a function
                        p1.style.display = "none"
                    }, 2000);
                    break;
                case(black_mage_hp.value <=0):
                    black_mage_hp.value ==0;
                    black_mage_dead = true;
                    p1.style.display = "initial";
                    p1.value = "Dark mage has fallen!"
                    setTimeout(()=>{
                        p1.style.display = "none"
                    }, 2000);
                    break;
                case(white_mage_hp.value <=0):
                    white_mage_hp.value ==0;
                    l_mage_dead = true;
                    p1.style.display = "initial";
                    p1.value = "Light mage has fallen!"
                    setTimeout(()=>{
                        p1.style.display = "none"
                    }, 2000);
                    break;
                default:
                    console.log("nobody is dead")
    
            };
    
        });
        
    });
   



   



    //going to need to keep track of turns in a list for some attacks to work 
    var turn_counter = [];
    var turn_counter_value = 0;
    function counter(){
        UC = document.getElementById("ultima_charge");
        UC.value +=5;
        turn_counter_value +=1;
        black_mage_mp += 5;
        white_mage_mp += 5;
        warrior_mp += 5;
        turn_counter.push(turn_counter_value)
        console.log(turn_counter_value)
    }

    var LastAttacks = [] //store last attacks used by player, some skills rely on it

    //this needs a different condition, not triggering correctly
    document.addEventListener("click", function (){
        if (turn_counter_value % 2 !==0 && turn_counter_value !== 0){
                //window.alert("MY TURN BITCH")
                Borderof_Life()
                /*switch(true){
                    case(phase2_tr):
                        boss_phase2()
                    break;
                    case(phase3_tr):
                        boss_phase3()
                    break;
                    default:
                        boss_phase1()
                    break;
                };*/
       
        };

    });
    var LastBossAttacks = []
    function boss_phase1(){
        let boss_choice = randNumber(1,11)
//might be a better way of setting percent chance.
        if (boss_choice == 1 | boss_choice ==2 | boss_choice ==3) //30% chance
            SpheresofInsanity()
        else if(boss_choice ==10 | boss_choice ==9 && LastBossAttacks[-1] != "BorderofLife" 
        && LastBossAttacks[-2] != "BorderofLife" && hp.value <12500){
            BorderofLife()
        }


    }

    function boss_phase2(){

    }

    function boss_phase3(){



    }
                        //~~~~Below here is all movesets~~~\\


    function randNumber(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }

    //boss attacks
    function SpheresofInsanity(){
        i_menu.src = "spheres.jpeg" //i_menu is the image template
        i_menu.style.display = "initial"
        PE.play()
        PE.loop = false;
        setTimeout(()=>{ //2 hits on random party members
            let num_hits = 1;
            while (num_hits !=3){ //two hits
                let target = randNumber(0, 3);
                console.log(target)
                let dmg = randNumber(80, 101);
                switch(true){
                    case(target == 0):
                        var final_dmg_w = dmg/warrior_def
                        warrior_hp.value -= final_dmg_w; 
                        num_hits +=1
                        setTimeout(()=>{
                            i_menu.style.display = "none"
                        }, 2000)
                    break;
                    case(target == 1):
                        var final_dmg_d = dmg/black_mage_def
                        black_mage_hp.value -= final_dmg_d;
                        num_hits +=1
                        setTimeout(()=>{
                            i_menu.style.display = "none"
                        }, 2000)
                    break;
                    case(target == 2):
                        var final_dmg_l = dmg/white_mage_def
                        white_mage_hp.value -= final_dmg_l;
                        num_hits +=1
                        setTimeout(()=>{
                            i_menu.style.display = "none"
                        }, 2000)
                    }
                p1.style.display = "initial";
            }
            i_menu.style.display = "none"
            counter()
        }, 3000);
        
    };
    function Polarity(){
        document.getElementById("Polarity");
        counter()
    };

    function SwapHP(){ 
        switch(true){ 
            case(phase2_tr):
                hp.value += (newHp*2)
            break;
            case(phase3_tr):
                hp.value += (newHp*3)
            break;
            default:
                hp.value += newHp;
            break;
            };
    }
    function atkFailed(){
        p1.style.display = "initial";
        p1.value = "The beast's attack failed!"
        setTimeout(()=>{
            p1.style.display = "none"
        }, 2000)
    }
    var newHp = null; 
    function Borderof_Life(){ //swaps a party member's hp with 1/120th of boss's current hp. 
        //does not work on dead party members. 
        //Heals boss by what you lost, or 2x in p2 and 3x in p3
        //seems to be not targeting those it would kill?
        i_menu.src = "s_lycoris-removebg.png" 
        i_menu.style.display = "initial"
        PE.play()//find new sfx
        PE.loop = false;
    
        setTimeout(()=>{
            let fate = randNumber(0,3); //choose 1 target 
            console.log(fate)
            switch(true){
                case(fate == 0):
                    if (warrior_dead == false){ 
                        var newHp = (hp.value.toFixed(0)/120)//perform the swap
                        warrior_hp.value = newHp.toFixed(0);
          
                        SwapHP()
                    }else{
                        atkFailed()
                    };
             
                break;            
                case(fate ==1):
                    if (black_mage_dead == false){
                        var newHp = (hp.value.toFixed(0)/120)
                        black_mage_hp.value = newHp.toFixed(0);
        
                        SwapHP()
                    }else{
                        atkFailed()
                    };
    
                break;
                case(fate ==2):
                    if (l_mage_dead == false){
                        var newHp = (hp.value.toFixed(0)/120)
                        white_mage_hp.value = newHp.toFixed(0);

            
                        SwapHP()
                    }else{
                        atkFailed()
                    };

                break;
                default: 
                console.log("what the fuck")    
    
                };//switch ends here

            counter()
            i_menu.style.display = "none"
        }, 7000);
    };//function ends here

    function SpacialRift(){
        document.getElementById("SpacialRift")
        counter()
    };

    //addin phase 2\\
    function TendrilsoftheNight(){
        document.getElementById("TendrilsoftheNight");
        counter()
    };

    function HallsofOblivion(){

    }

    //add in phase 3\\
    function NightmareNascent(){//


    }
    function BleedingSun1(){ //turn 1 charge
        document.getElementById("bSun1");
        counter()
    };
    function BleedingSun2(){ //massive damage to all, defend is borderline required
        document.getElementById("bSun2");
        const NANI = new Audio("omaewa.mp3");
        NANI.play()
        NANI.loop = false;
        counter()
    };

    //warrior attacks
  
    function ThousandMen(){ //his ult
        document.getElementById("ThousandMen");
        counter()
    };
    function ShadowSelf(){
        document.getElementById("ShadowSelf");
        counter()
    };
    function WhimsofFate(){
        document.getElementById("WhimsofFate");
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
        p1.value = `You attacked the monster. Did ${final_dmg.toFixed(1)} damage.`;
        counter()
    }, 2000);
    p1.style.display = "none";

};

    function RadiantSupernova(){ //her ult
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
                    hp.value -= 1500/phase_mdef;
                document.getElementById("ultima_charge").value = -5;
                i_menu.style.display = "none"
                counter()
            }, 7000);
            
    };
    


    function Mirage_Blade(){

        if (black_mage_mp <50){ //these values need to be updated
            
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
                black_mage_mp -= 50;
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
    
    function Pierce_Evil(){
        if (white_mage_mp <10){
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
    var phase2_theme;
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

var roar = new Audio("roar.wav");
var phase3_theme = new Audio('phase3ost.mp3') //global so it's usable in the else 
var phase3_tr;
document.addEventListener("click", function phase3(){ //PHASE 3!
        if (hp.value <5001){
            document.removeEventListener('click', phase3)
            p2.style.display = "initial"; //add timeout
            setTimeout(()=>{
                phase2_theme.pause();//fix this
                p2.value = "...";
            },5000)
            setTimeout(() =>{
                p2.value = "...\n...";
            },5000)
            phase3_tr = true; //trigger to reference phase 3 later on
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