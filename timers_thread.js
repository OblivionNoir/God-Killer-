//Timer management


//use a timer for this instead, boss will be blocked from attacking by value being true, which will be set to false after the timer expires
//deal with that after boss can attack back so I can test it properly
function trapped_countdown(time){ //2 turn countdown
    //attacks are already disabled by setting trapped to true
    setTimeout(()=>{
        trapped = false;
        console.log("no longer trapped")
    }, time)
}

function countdown_p2(){

}
function countdown_p3(){

}

function Timer(duration, action, arg){//action = what to do when it finishes, as a function name without the ()
    let CountTo = new Date().getTime() + duration;
    let TimerUpdate = setInterval(function(){
    let now = new Date().getTime();
    let distance = CountTo - now;

    if (distance <= 0){
        clearInterval(TimerUpdate);
        action(arg)
    }
    }, 1000);
}
function p1_timeout(time){//not sure if this is being used, just leave it for now
    setTimeout(()=>{
        p1.style.visibility = "hidden"
    }, time)
}

function timeout_ending(){
    setTimeout(()=>{
        p1.style.visibility = "hidden";
        ending3()
    }, 2000)
}

function BLExpire(){
        console.log("BL no longer active")
        red_mage_def = 0.9;//use her map for this
        red_mage_mdef = 0.9;
        red_mage_atk = 1.5;
        red_mage_matk = 1.5;
        //then remove the color filter

}
