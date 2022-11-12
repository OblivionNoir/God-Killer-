var phase_def = 1.2; //divide by this number 
var phase_mdef = 1.1;

var warrior_def = 1.7; 
var warrior_mdef = 1.4;
var warrior_atk = 1.4;
var warrior_matk = 1.1;
var warrior_ev = 0.05;//5%

var warrior_stats = new Map([
    ["def", warrior_def],
    ["mdef", warrior_mdef],
    ["atk", warrior_atk],
    ["matk", warrior_matk],
    ["ev", warrior_ev]
]);

var black_mage_def = 1.3;
var black_mage_mdef = 1.6;
var black_mage_atk = 1.2;
var black_mage_matk = 1.4;
var black_mage_ev = 0.1;//10%

var black_mage_stats = new Map([
    ['def', black_mage_def],
    ['mdef', black_mage_mdef],
    ['atk', black_mage_atk],
    ['matk', black_mage_matk],
    ['ev', black_mage_ev]
]);

var white_mage_def = 1.2;
var white_mage_mdef = 1.4; 
var white_mage_atk = 1;
var white_mage_matk = 1.4;
var white_mage_ev = 0.10;//10%

var white_mage_stats = new Map([
    ['def', white_mage_def],
    ['mdef', white_mage_mdef],
    ['atk', white_mage_atk],
    ['matk', white_mage_matk],
    ['ev', white_mage_ev]
]);

var red_mage_def = 0.9;
var red_mage_mdef = 0.9;
var red_mage_atk = 1.5;
var red_mage_matk = 1.5;
var red_mage_ev = 0.2;//20%

var red_mage_stats = new Map([
    ['def', red_mage_def],
    ['mdef', red_mage_mdef],
    ['atk', red_mage_atk],
    ['matk', red_mage_matk],
    ['ev', red_mage_ev]
])



var defenses = [warrior_def, warrior_mdef, black_mage_def, black_mage_mdef, 
    white_mage_def, white_mage_mdef, red_mage_def, red_mage_mdef];