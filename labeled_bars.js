var k_hp = document.getElementById("k_hp")
var k_mp = document.getElementById("k_mp")

var b_hp = document.getElementById("b_hp")
var b_mp = document.getElementById("b_mp")

var w_hp = document.getElementById("w_hp")
var w_mp = document.getElementById("w_mp")

var r_hp = document.getElementById("r_hp")
var r_mp = document.getElementById("r_mp")

var u_label = document.getElementById("u_label")
function updatePlayers(){
    k_hp.innerHTML = "HP: " + warrior_name_hp.value.toFixed(0) + "/550";
   k_mp.innerHTML = "MP: " + warrior_name_mp.value.toFixed(0) + "/180";
    b_hp.innerHTML = "HP: " + d_mage_name_hp.value.toFixed(0) + "/470";
    b_mp.innerHTML = "MP: " + d_mage_name_mp.value.toFixed(0) + "/390";
    w_hp.innerHTML = "HP: " + l_mage_name_hp.value.toFixed(0) + "/400";
    w_mp.innerHTML = "MP: " + l_mage_name_mp.value.toFixed(0) + "/420";
    r_hp.innerHTML = "HP: " + r_mage_name_hp.value.toFixed(0) + "/380";
    r_mp.innerHTML = "MP: " + r_mage_name_mp.value.toFixed(0) + "/540";
    u_label.innerHTML = ultima_charge.value.toFixed(0) + "/100"; 
    CheckDeadStatus()
}



function updateBossHP(){
    document.getElementById("boss_hp_label").innerHTML = hp.value.toFixed(0) + "/75000";
}