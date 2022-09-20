
//initial stats
phase_1_hp = 3000; //global for now, tighten scope if it becomes problematic
phase_1_patk = 50;
phase1_matk = 50;
phase_1_def = 100;
phase_1_mdef = 80;

warrior_hp = 2000;
warrior_mp = 70;
warrior_def = 18; //remove boss attacks file
warrior_mdef = 9;

black_mage_hp = 1400; 
black_mage_mp = 220;
black_mage_def = 10;
black_mage_mdef = 25;

white_mage_hp = 1200;
white_mage_mp = 220;
white_mage_def = 9;
white_mage_mdef = 26; 


//hide elements that get used later
var p1_img = document.getElementById("boss_img");
p1_img.style.visibility = "hidden";

var battle_menu = document.getElementById("battle_menu");
battle_menu.style.visibility = "hidden";

var hp = document.getElementById("HP_bar");
hp.style.visibility = "hidden";



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



function write_message(){ //Trigger when enter is pressed. Write custom message and begin battle 
   
    var warrior_name = window.prompt("What is your (male) warrior's name?"); 
    if (warrior_name.length >8 || warrior_name.length ===0){
        window.alert("Name cannot be longer than 8 characters or empty, sorry"); 
        var warrior_name = window.prompt("What is your (male) warrior's name?");
    };
    warrior_name = warrior_name.toUpperCase();
    


    var dmage_name = window.prompt("What is your (female) dark mage's name?");
    if (dmage_name.length >8 || dmage_name.length === 0 ){
        window.alert("Name cannot be longer than 8 characters or empty, sorry");
        var dmage_name = window.prompt("What is your (female) dark mage's name?");
    };
    dmage_name = dmage_name.toUpperCase();
    


    var lmage_name = window.prompt("What is your (female) light mage's name?");
    if (lmage_name.length >8 || lmage_name.length === 0){
        window.alert("Name cannot be longer than 8 characters or empty, sorry");
        var lmage_name = window.prompt("What is your (female) light mage's name?");
    }
    lmage_name = lmage_name.toUpperCase();
    


    document.getElementById("warrior_name").value = warrior_name + " " + "HP: "+ warrior_hp + "\n" +"MP: "+warrior_mp;
    document.getElementById("d_mage_name").value = dmage_name +  " " + "HP: " + black_mage_hp + "\n" +"MP: "+black_mage_mp;
    document.getElementById("l_mage_name").value = lmage_name +  " " + "HP: " + white_mage_hp + "\n" +"MP: "+white_mage_mp;

    document.getElementById("txt_").value = `GREETINGS, PATHETIC MORTALS. WHAT ARE YOUR NAMES AGAIN? ${warrior_name.replace('\n', '')}, ${dmage_name.replace('\n', '')}, and ${lmage_name.replace('\n', '')}? WHATEVER. TIME TO DIE...`;
    setTimeout(() =>{
        //window.alert("SHOWTIME!");
        const phase1_theme = new Audio('phase1.mp3');
        phase1_theme.play();
        phase1_theme.loop =true;
        document.getElementById("ost_box").value = "Now playing: \n Bloodborne OST - Cleric Beast";
        del_box()
    }, 5000);

};

function del_box(){ //SHOWTIME. Delete initial box and make menu appear
    var init_box = document.getElementById("txt_");
    init_box.style.display = "none"; 
    battle_menu.style.visibility = "visible";
    hp.style.visibility = "visible";
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
                        switch(current_index){ //get list index pertaining to character (0,1,2) and act accordingly
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

//disable buttons by default then active when a character is chosen

function warrior_menu(){ //0
    if (lastClick >= (Date.now() - delay)) //need to check if at least one is clicked
    return;
    lastClick = Date.now(); //note that any alert I put here gets run a million times...
    }

        
        
   


function d_mage_menu(){ //1
    if (lastClick >= (Date.now() - delay))
    return;
    lastClick = Date.now()
    }


function l_mage_menu(){ //2
    if (lastClick >= (Date.now() - delay))
    return;
    lastClick = Date.now()
    }





//warrior is 0, dmage is 1, lmage is 2 
