//initial stats
phase_1_hp = 3000; //global for now, tighten scope if it becomes problematic
warrior_hp = 2000;
warrior_mp = 70;
black_mage_hp = 1400; 
black_mage_mp = 220;
white_mage_hp = 1200;
white_mage_mp = 220;
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
        write_message()
    }
});




function write_message(){ //Trigger when enter is pressed. Write custom message and begin battle 
   
    var warrior_name = window.prompt("What is your (male) warrior's name?"); //todo: value cannot be empty! Breaks logic chain! Also add character limits
    warrior_name = warrior_name.toUpperCase()
    var dmage_name = window.prompt("What is your (female) dark mage's name?");
    dmage_name = dmage_name.toUpperCase()
    var lmage_name = window.prompt("What is your (female) light mage's name?");
    lmage_name = lmage_name.toUpperCase()
    document.getElementById("warrior_name").value = warrior_name + " " + "HP: "+ warrior_hp;
    document.getElementById("d_mage_name").value = dmage_name +  " " + "HP: " + black_mage_hp;
    document.getElementById("l_mage_name").value = lmage_name +  " " + "HP: " + white_mage_hp;

    document.getElementById("txt_").value = `GREETINGS, PATHETIC MORTALS. WHAT ARE YOUR NAMES AGAIN? ${warrior_name.replace('\n', '')}, ${dmage_name.replace('\n', '')}, and ${lmage_name.replace('\n', '')}? WHATEVER. TIME TO DIE...`;
    setTimeout(() =>{
        window.alert("SHOWTIME!");
        const phase1_theme = new Audio('phase1.mp3');
        phase1_theme.play();
        phase1_theme.loop =true;
        document.getElementById("ost_box").value = "Now playing: \n Bloodborne OST - Cleric Beast";
        del_box()
    }, 5000);

};

function del_box(){ //START PHASE 1. Delete initial box and make menu appear
    var init_box = document.getElementById("txt_");
    init_box.style.display = "none"; 
    battle_menu.style.visibility = "visible";
    hp.style.visibility = "visible";

};