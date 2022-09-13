
//add listener to wait for initial enter to start game
var check = true;
document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter' && check == true) {
        check = false; //so it can only happen once. Prevents event order from getting thrown out of wack
        write_message()
    }
});




function write_message(){ //begin battle when enter is pressed. Write message, delete initial box and make menu appear
    var player_name = document.getElementById("txt_").value;
    document.getElementById("txt_").value = `GREETINGS, PATHETIC MORTAL. WHAT WAS YOUR NAME AGAIN? ${player_name.toUpperCase()}? WHATEVER. TIME TO DIE...`;
    setTimeout(() =>{
        window.alert("SHOWTIME!");
        const phase1_theme = new Audio('phase1.mp3')
        phase1_theme.play();
        phase1_theme.loop =true;
        del_box()
    }, 5000);

}

function del_box(){ //START PHASE 1
    var init_box = document.getElementById("txt_");
    init_box.style.display = "none"; 

}