var phase_def = 1.3; //divide by this number 
var phase_mdef = 1.2;

var warrior_def = 1.7; 
var warrior_mdef = 1.4;
var warrior_atk = 1.4;
var warrior_matk = 1.1;
var warrior_ev = 0.05;//5%

var black_mage_def = 1.3;
var black_mage_mdef = 1.6;
var black_mage_atk = 1.2;
var black_mage_matk = 1.4;
var black_mage_ev = 0.1;//10%


var white_mage_def = 1.2;
var white_mage_mdef = 1.4; 
var white_mage_atk = 1;
var white_mage_matk = 1.4;
var white_mage_ev = 0.10;//10%


var red_mage_def = 0.9;
var red_mage_mdef = 0.9;
var red_mage_atk = 1.5;
var red_mage_matk = 1.5;
var red_mage_ev = 0.2;//20%

var defs = new Map([
    ["warrior", warrior_def],
    ["black_mage", black_mage_def],
    ["white_mage", white_mage_def],
    ["red_mage", red_mage_def]
]);
var m_defs = new Map([
    ['warrior', warrior_mdef],
    ['black_mage', black_mage_mdef],
    ['white_mage', white_mage_mdef],
    ['red_mage', red_mage_mdef]
]);
var m_atks = new Map([
    ['warrior', warrior_matk],
    ['black_mage', black_mage_matk],
    ['white_mage', white_mage_matk],
    ['red_mage', red_mage_matk]
]);
var phys_atks = new Map([
    ['warrior', warrior_atk],
    ['black_mage', black_mage_atk],
    ['white_mage', white_mage_atk],
    ['red_mage', red_mage_atk],
]);
var evs = new Map([
    ['warrior', warrior_ev],
    ['black_mage', black_mage_ev],
    ['white_mage', white_mage_ev],
    ['red_mage', red_mage_ev],
]);
