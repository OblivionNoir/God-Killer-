var phase_def = 1.30; //divide by this number 
var phase_mdef = 1.20;

var warrior_def = 1.70; 
var warrior_mdef = 1.40;
var warrior_atk = 1.53;
var warrior_matk = 1.0;//he doesn't use magic, so it's kinda just for show
var warrior_ev = 0.05;//5%

var black_mage_def = 1.30;
var black_mage_mdef = 1.50;
var black_mage_atk = 1.34;
var black_mage_matk = 1.40;
var black_mage_ev = 0.10;//10%


var white_mage_def = 1.18;
var white_mage_mdef = 1.40; 
var white_mage_atk = 1.0;
var white_mage_matk = 1.35;
var white_mage_ev = 0.10;//10%


var red_mage_def = 0.90;
var red_mage_mdef = 0.90;
var red_mage_atk = 1.52;
var red_mage_matk = 1.52;
var red_mage_ev = 0.20;//20%

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
