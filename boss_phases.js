//file to manage boss actions(attacks are seperate) 


//use format similar to healing spells for targeting
//this file includes both his attacks ands the attack algorithms

//boss attack alrgorithm
async function 自動的ボス(){
    let val_in_range= arbritraryRange(15000, 22000)
     //make timer that uses the above value(val_in_range) as the duration
      let countTo = new Date().getTime() + val_in_range;
      let count_seconds = setInterval(function(){
      let now = new Date().getTime();
      let distance = countTo - now;
      if (distance <= 0){
          clearInterval(count_seconds);
          時期スイッチ()
      }
  }, 1000);
};
//determine which phase we're in and call the appropriate function
function 時期スイッチ(){
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
};


var p1_interval; 
function boss_phase1(){
    trapped = false;//temp for testing
    if(trapped == true){
        //do nothing
        console.log("trapped")
    }else if (trapped == false){
        
}else{
    console.log("error"+ trapped)
}
};


function boss_phase2(){

  };


function boss_phase3(){

  };