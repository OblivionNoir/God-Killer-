if (d_clicked == true || l_clicked == true){ //checks for warrior
    k_c.style.border = null; 
    d_clicked = false;
    l_clicked = false;

}else{
    k_c.onclick = function(){ //turn red to indicate selection
        k_clicked = true;
        k_c.style.border = "solid #FF0000";

    };

};

if (k_clicked == true || l_clicked == true){ //checks for d mage
    d_c.style.border = null;
    k_clicked = false;
    l_clicked = false;

}else{
    d_c.onclick = function(){ 
        d_clicked = true;
        d_c.style.border = "solid #FF0000";
    };

};

if (d_clicked == true || k_clicked == true){ //checks for l mage
    l_c.style.border = null;
    d_clicked = false;
    k_clicked = false;


}else{
    l_c.onclick = function(){ 
        l_clicked = true;
        l_c.style.border = "solid #FF0000";
    };

};

}, 16);