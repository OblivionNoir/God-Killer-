//initial stats
phase_1_hp = 3000; //global for now, tighten scope if it becomes problematic
player_hp = 2000;
//add listener to wait for initial enter to start game
var check = true;
document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter' && check == true) {
        check = false; //so it can only happen once. Prevents event order from getting thrown out of wack
        write_message()
    }else{
        console.log("congratulations, you broke something");
    }
});




function write_message(){ //begin battle when enter is pressed. Write message and begin battle 
    var player_name = document.getElementById("txt_").value;
    player_name = player_name.toUpperCase()
    document.getElementById("txt_").value = `GREETINGS, PATHETIC MORTAL. WHAT WAS YOUR NAME AGAIN? ${player_name.replace('\n', '')}? WHATEVER. TIME TO DIE...`;
    setTimeout(() =>{
        window.alert("SHOWTIME!");
        const phase1_theme = new Audio('phase1.mp3')
        phase1_theme.play();
        phase1_theme.loop =true;
        del_box()
    }, 5000);

}

function del_box(){ //START PHASE 1. Delete initial box and make menu appear
    var init_box = document.getElementById("txt_");
    init_box.style.display = "none"; 

}