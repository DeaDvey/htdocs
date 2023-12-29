//debugger;

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;
log(date); // "17-6-2022"

console.log("test")

function fullmap() {
    window.open("https://www.deadvey.xyz/wraithfate/fullmap.png");
}

document.body.style.color = 'darkgreen';
document.body.style.fontFamily = "Courier New,Charcoal,sans-serif";


console.log("pls do no not change this, devs only ._.")

const rock = 5;
const coal = 10;
const tin = 15;
const copper = 16;
const bronze = 19;
const iron = 25;
const diamond = 35;

const cooked_salmon = 6;
const cooked_cod = 11;
const cooked_dragon_blood_fish = 51;

const salmon = 5;
const cod = 10;
const dragon_blood_fish = 50;

const oak_log = 5;
const willow_log = 10;
const beach_log = 20;
const ivy_log = 30;
const palm_log = 40;
const redwood_log = 50;
const yew_log = 75;
const dragon_blood_log = 100;

const stone_sword = 5;
const iron_sword = 10;
const wooden_shield = 9;
const iron_shield = 4;
const stone_pick = 5;
const iron_pick = 10;
const stone_axe = 5;
const iron_axe = 10;

//bosses v
let Mr_Brightside = 0;
let Boulevard_of_Broken_Dreams = 0;
let Cemetary_Gates = 0;
let Under_Pressure= 0;
let Seven_Seas_of_Rhye= 0;
let Jump = 0;
let Kiki = 0;
let Bouba = 0;
let Pompeii = 0;
let Eternal_Flame = 0;


//bosses ^


let wheat_planted = 5;
let blueberry_planted = 5;

let name = "";
let age = "";
let input = "";

let state = 0;

let hp = 100;
let mining = 0;
let wc = 0;
let cardio = 0;
let fighting = 0;
let fishing = 0;
let cooking = 0;
let smelting = 0;
let smithing = 0;
let farming = 0;
let loc = "Sand mine";
let loc_type = "Mine"
let mon = 1000;
let inv = [" stone pickaxe"];

let equip_shield = undefined;
let equip_sword = undefined;
let equip_pick = undefined;
let equip_axe = undefined;
let equip_shield1 = 0;
let equip_sword1 = 0;
let equip_pick1 = 0;
let equip_axe1 = 0;

function xp_to_level(exp) {
  let level = Math.trunc(Math.cbrt(exp));
  return level;
}

function save() {
    localStorage.setItem("wheat_planted", wheat_planted);
    localStorage.setItem("blueberry_palnted", blueberry_planted);
    localStorage.setItem("state", state);
    localStorage.setItem("hp_level", hp);
    localStorage.setItem("mining_level", mining);
    localStorage.setItem("wc_level", wc);
    localStorage.setItem("cardio_level", cardio);
    localStorage.setItem("fighting_level", fighting);
    localStorage.setItem("fishing_level", fishing);
    localStorage.setItem("cooking_level", cooking);
    localStorage.setItem("smelting_level", smelting);
    localStorage.setItem("smithing_level", smithing);
    localStorage.setItem("farming_level", farming);
    localStorage.setItem("loc_level", loc); 
    localStorage.setItem("loc_type_level", loc_type); 
    localStorage.setItem("mon_level", mon);
    localStorage.setItem("inv_what", JSON.stringify(inv));
    localStorage.setItem("equip_shield_ls", equip_shield);
    localStorage.setItem("equip_sword_ls", equip_sword);
    localStorage.setItem("equip_pick_ls", equip_pick);
    localStorage.setItem("equip_shield_ls1", equip_shield1);
    localStorage.setItem("equip_sword_ls1", equip_sword1);
    localStorage.setItem("equip_pick_ls1", equip_pick1);
    localStorage.setItem("equip_axe_ls", equip_axe);
    localStorage.setItem("equip_axe_ls1", equip_axe1);
    localStorage.setItem("Mr_Brightside_ls", Mr_Brightside);
    localStorage.setItem("Username_ls", Username);
}

function load_int_from_local_storage(storage_name, default_value_if_unset) {
  let loaded_value = localStorage.getItem(storage_name);
  if (loaded_value !== null) {
    return parseInt(loaded_value);
  }
  return default_value_if_unset;
}

function load_string_from_local_storage(storage_name, default_value_if_unset) {
  let loaded_value = localStorage.getItem(storage_name);
  if (loaded_value !== null) {
    return loaded_value;
  }
  return default_value_if_unset;
}

function load() {
    wheat_planted = load_int_from_local_storage("wheat_planted", 5);
    blueberry_planted = load_int_from_local_storage("blueberry_planted", 5);
    hp = load_int_from_local_storage("hp_level", 100);
    mining = load_int_from_local_storage("mining_level", 0);
    wc = load_int_from_local_storage("wc_level", 0);
    cardio = load_int_from_local_storage("cardio_level", 0);
    fighting = load_int_from_local_storage("fighting_level", 0);
    fishing = load_int_from_local_storage("fishing_level", 0);
    cooking = load_int_from_local_storage("cooking_level", 0);
    smelting = load_int_from_local_storage("smelting_level", 0);
    smithing = load_int_from_local_storage("smithing_level", 0);
    farming = load_int_from_local_storage("farming_level", 0);
    loc = load_string_from_local_storage("loc_level", "Sand mine");
    
    mon = load_int_from_local_storage("mon_level", 1000);

    inv = [" stone pickaxe"];
    let inv_save = localStorage.getItem("inv_what");
    if (inv_save !== null) {
        inv = JSON.parse(inv_save);
    }

    equip_shield = load_string_from_local_storage("equip_shield_ls", undefined);
    equip_sword = load_string_from_local_storage("equip_sword_ls", undefined);
    equip_pick = load_string_from_local_storage("equip_pick_ls", undefined);
    equip_axe = load_string_from_local_storage("equip_axe_ls", undefined);
    equip_shield1 = load_int_from_local_storage("equip_shield_ls1", 0);
    equip_sword1 = load_int_from_local_storage("equip_sword_ls1", 0);
    equip_pick1 = load_int_from_local_storage("equip_pick_ls1", 0);
    equip_axe1 = load_int_from_local_storage("equip_axe_ls1", 0);
    Mr_Brightside = load_int_from_local_storage("Mr_Brightside_ls", 0);
    Username = load_int_from_local_storage("Username_ls", undefined);

    state = load_int_from_local_storage("state", 0);
}

// Now we try load their save
load();
if (state === 0) {
    log("What is your name?");
}
if (state === 2) {
    log("Game loaded");
    log("      ")
}




//selling
function remove_item_from_inv_and_save(item_name) {
    var index = inv.indexOf(item_name);
    if (index > -1) {
        inv.splice(index, 1);
    }
    save();
    return inv; // Return the new inv with one less item
}
//buying
function add_item_to_inv_and_save(item_name, cost) {

    inv.push(item_name);
    save();

    mon = mon - cost;
    save();

    log("you now have a(n) " + item_name + " and have " + cost + " less coins for a total of " + mon + " coins");

}

//idk
function log(text) {
    let our_div = document.querySelectorAll(".output-here")[0];
    our_div.innerHTML = our_div.innerHTML + text + "<br>";
}

/*function equip_item_and_assign_var(equip) {
    if(inv.includes(equip)) {
        equip_sword = equip;
        log("You equiped " + equip)
    }
}*/
//fighting
function fighting_enemy_and_taking_damage(enemy, sword, shield, e_hp, exp, drop, damage) {
    while (e_hp > 0) {
        hp = hp - parseInt(shield) + (xp_to_level(fighting) / 2);
        damage = damage + parseInt(sword) + parseInt(shield) + xp_to_level(fighting);
        fighting = fighting + parseInt(sword) + parseInt(shield);
        e_hp = e_hp - damage;
        log("You dealt total of " + damage + " damage to the " + enemy + " it now has " + e_hp + " hp you now have " + hp + " hp and now have " + fighting + " fighting exp");
    }
    inv.push(drop);
    log("The " + enemy + " dies and you receive a(n) " + drop + " and you now have " + fighting + " fighting exp");
    save();
}

//mining
function mining_certain_ores_and_collecting_material(pick, ore, ore_name) {
    mining = mining + ore + xp_to_level(mining);
    save();
    log('You hit some rocks, you now have ' + mining + ' mining exp and gain 1 ' + ore_name)

    if (ore_name === " rock") {
        inv.push(" rock");
    }
    if (ore_name === " coal") {
        inv.push(" coal");
    }
    if (ore_name === " iron") {
        inv.push(" iron");
    }
    if (ore_name === " diamond") {
        inv.push(" diamond")
    }
    save();
    display_image('jsmining.png', 80, 110, 'JavaScriptImage');
    
}

//smelting
function smelting_and_getting_certain_xp_depending_on_ore(ore, ore_name, ingot_name) {
    smelting = smelting + ore + xp_to_level(smelting);
    
    
        inv.push(ingot_name)
        save();
    
    var index = inv.indexOf(ore);
    if (index > -1) {
        inv.splice(index, 1);
    }
    var index = inv.indexOf(" coal");
    if (index > -1) {
        inv.splice(index, 1);
    }
    
    log("You smelted a(n) " + ore_name + " and now have " + smelting + " smelting exp")
    save();
}

//smithing
function smithing_and_getting_exp_based_on_ore(item, item_name, ore, ore_name, log_) {
    //log("test0")
    var index = inv.indexOf(item_name);
    if (index > -1) {
        inv.splice(index, 1);
    }
    var index = inv.indexOf(log_);
    if (index > -1) {
        inv.splice(index, 1);
    }
    smithing = smithing + item + xp_to_level(smithing)
    inv.push(item_name)
    //log("test1")
    log("Gained a " + item_name + " and now have " + smithing + " exp")
    save();
}

//woodcutting
function chop_tree_and_get_logs(axe, log_var, log_name) {

    wc = wc + xp_to_level(wc) + log_var;
    save();
    inv.push(log_name)
    save();

    log("You got a " + log_name + " and now have " + wc + " woodcutting exp")
}

//fishing
function fish_and_collect_item(fish, fish_name) {
    fishing = fishing + fish + xp_to_level(fishing);
    inv.push(fish_name);
    save();

    log("You got a " + fish_name + " and now have " + fishing + " fishing exp");
}

//cooking
function turning_food_into_cooked_version(fuel, fuel_name, before, before_name, after, after_name) {
    var index = inv.indexOf(fuel_name);
    if (index > -1) {
        inv.splice(index, 1);
    }
    var index = inv.indexOf(before_name);
    if (index > -1) {
        inv.splice(index, 1);
    }
    inv.push(after_name)
    
    cooking = cooking + before + xp_to_level(cooking);
    
    log(" You cooked a " + before_name + " with " + fuel_name + " and now have " + cooking + " cooking exp")
    save();
}

//farming
    //planting
function planting_and_receiving_exp_farming(seed_name, seed_exp, plant_name, plant_exp ) {
    var index = inv.indexOf(seed_name);
    if (index > -1) {
        inv.splice(index, 1);
    }
    farming = farming + seed_exp + plant_exp;
    log("you planted some " + plant_name + " and now have " + farming + " farming exp");
    wheat_planted++;
    save();
}

    //harvesting
function harvesting_wheat_or_blueberries(seed_name, seed_exp, plant_name, plant_exp) {
    inv.push(seed_name, seed_name, plant_name);
    farming = farming + seed_exp + plant_exp;
    log("You harvested some " + seed_name + " and now have " + farming + " farming exp");
    wheat_planted--;
    save();
    
    
}

/*function fight_brightside_boss(b_hp) {
    while (b_hp > 0) {
        b_hp = b_hp - parseInt(sword) - parseInt(shield);
        log(b_hp)
    }
}*/




//functions ^





function process_text() {
    let text = document.querySelectorAll(".input-here")[0].value;
    text = text.toLowerCase();
    document.querySelectorAll(".input-here")[0].value = ""; //clear the box
    if (state == 0) {
        log(">>" + text);
        log(text + " hmmm");
        Username = text; //store name for later (in theory)
        state = 1;
        log("Hello " + Username + ' in the world of Saecloe, you can level your skills, by fighting and other actions, want to play?')
        save();
        //log("How old are you?")

        //} else if (state == 1) {
        //log(">>" + text);
        //log("oh, so your age is: " + text);
        //age = text; //store age for later (in theory)
        //state = 2;


    } else if (state === 1) {
        if (text.toLowerCase() === "yes") {
            log(">>" + text);
            log('Great!');
            ans1 = text;
            state = 2;
            save();
            log('To begin, type \"mine rock" to mine :D')
        } else if (text.toLowerCase() === "no") {
            log("Well, cya...")
        }

    } else if (state === 2) {
        log(">>" + text)
        //inventory
        if (text.toLowerCase().includes("inv")) {
            log(inv.join(", "))
        }

        //training
        //if (text.toLowerCase().includes("train")) {

        //mining
        if (text.toLowerCase().includes("mine") && ! text.toLowerCase().includes("travel")) {
            if (loc === "Sand mine" || loc === "Talmon mine" || loc === "Gemeroth mine") {
                if (inv.includes(" stone pickaxe") || inv.includes(" iron pickaxe")) {

                    if (text.includes(" rock")) {
                        mining_certain_ores_and_collecting_material(equip_pick1, rock, " rock")
                        
                    }
                    if (text.includes(" coal")) {
                        if (xp_to_level(mining) >= 5) {
                            mining_certain_ores_and_collecting_material(equip_pick1, coal, " coal")
                        } else {
                            log("You do not have enough mining levels for this")
                        }
                    }
                    if (text.includes(" iron")) {
                        if (xp_to_level(mining) >= 10) {
                            mining_certain_ores_and_collecting_material(equip_pick1, iron, " iron")
                        } else {
                            log("You do not have enough mining levels for this")
                        }
                    }
                    

                }
                if (inv.includes(" iron pickaxe")) {
                    if (text.includes(" diamond")) {
                        if (xp_to_level(mining) >= 25) {
                            mining_certain_ores_and_collecting_material(equip_pick1, diamond, " diamond")
                        } else {
                            log("You do not have enough mining levels for this")
                        }
                    }
                }
                


            } 
            
            else {
                log('you do not meet the requirements, please check that your location is correct and that you have the correct equipment')
            }

        }
        

        //woodcutting
        if (text.includes("cut") || text.includes("chop")) {
            if (text.includes("oak") && (loc === ("Sand forest") || loc === ("Axeldom forest"))) {
                chop_tree_and_get_logs(equip_axe1, oak_log, " oak log");
            }
            if (text.includes("willow") && loc === ("Forest") && xp_to_level(wc) >= 5) {
                chop_tree_and_get_logs(equip_axe1, willow_log, " willow log");
            }

        }

        //cardio
        if (text.toLowerCase().includes("cardio")) {
            if (loc === "Lighthouse") {
                cardio = cardio + 10;
                save();
                log('you run up and down the stairs of the Lighthouse and now have ' + cardio + ' cardio exp')
            } 
            if (loc === "Ravine") {
                cardio = cardio + 20;
                save();
                log('you climb the cliff edges of the ravine and now have ' + cardio + ' cardio exp')
            } 
            if (loc === "Volcano") {
                cardio = cardio + 40;
                save();
                log('you treck the steep volcano and now have ' + cardio + ' cardio exp')
            }
            else {
                log('you do not meet the requirements, please check that your location is correct and that you have the correct equipment');
            }
        }

        //fighting
        if (text.toLowerCase().includes("fight")) {

            if (equip_sword === "stone sword" || equip_sword === "iron sword") {

                if (text.includes("orc") && loc === "Vermith") {
                    fighting_enemy_and_taking_damage(" orc", equip_sword1, equip_shield1, 30, 10, " orc flesh", 0);
                }
                if (text.includes("spider") && loc === "Ravine" /* && fighting >= 10*/ ) {
                    fighting_enemy_and_taking_damage(" Giant Spider", equip_sword1, equip_shield1, 60, 25, " venom duct", 0);
                }

            } else {
                log('you do not meet the requirements, please check that your location is correct and that you have the correct equipment 2')
            }
        }

        //fishing
        if (text.toLowerCase().includes("fish")) {
            if (inv.includes(" fishing pole") === true) {
                if (loc === "Beach" && text.includes("salmon")) {
                    fish_and_collect_item(salmon, " salmon")
                }
                if (loc === "Beach" && text.includes("cod")) {
                    fish_and_collect_item(cod, " cod")
                }
            } else {
                log('you do not meet the requirements, please check that your location is correct and that you have the correct equipment')
            }
        }

        //cooking
        if (text.toLowerCase().includes("cook")) {
            if (loc === "Ol Greth") {
                if (text.includes(" sal")) {
                    if (text.includes(" log") && inv.includes(" oak log")) {
                        turning_food_into_cooked_version(log, " log", salmon, " salmon", cooked_salmon, " cooked salmon")
                    }
                    if (text.includes(" coal") && inv.includes(" coal")) {
                        
                    }
                    else {
                        log('you do not meet the requirements, please check that your location is correct and that you have the correct equipment1')
                    }
                    
                }
            } else {
                log('you do not meet the requirements, please check that your location is correct and that you have the correct equipment2')
            }
        }

        //smelting
        if (text.toLowerCase().includes("smelt")) {
            
            if (loc === "Ol Greth") {
                if (inv.includes(" coal")) {

                    if (text.includes("iron")) {
                        smelting_and_getting_certain_xp_depending_on_ore(iron, " iron", " iron bar")
                    }

                }
            } else {
                log('you do not meet the requirements, please check that your location is correct and that you have the correct equipment')
            }
        }

        //smithing
        if (text.includes("smith")) {
            if (loc === "Ol Greth") {
                

                if (text.includes("iron")) {

                    if (text.includes("pickaxe") && inv.includes(" iron bar") && (inv.includes(" log") || (inv.includes(" oak log")))) {
                        smithing_and_getting_exp_based_on_ore(iron_pick, " iron pickaxe", iron, " iron bar", " log")
                    }
                    if (text.includes("sword") && inv.includes(" iron bar") && (inv.includes(" log") || (inv.includes(" oak log")))) {
                        smithing_and_getting_exp_based_on_ore(iron_sword, " iron sword", iron, " iron bar", " log")
                    }
                    if (text.includes("shield") && inv.includes(" iron bar")) {
                        smithing_and_getting_exp_based_on_ore(iron_shield, " iron shield", iron, " iron bar", " log")
                    }
                    if (text.includes(" axe") && inv.includes(" iron bar") && (inv.includes(" log") || (inv.includes(" oak log")))) {
                        smithing_and_getting_exp_based_on_ore(iron_axe, " iron axe", iron, " iron bar", " log")
                    } 
                    else {
                        log('you do not meet the requirements, please check that your location is correct and that you have the correct equipment1')
                    }
                } 
                else {
                    log('you do not meet the requirements, please check that your location is correct and that you have the correct equipment2')
                }

            } 
            else {
                log('you do not meet the requirements, please check that your location is correct and that you have the correct equipment3')
            }

        }
        
        
        //farming
            //planting
        if (text.includes("plant")) {
            if (text.includes("wheat")) {
                if (loc="Wheat farm" && inv.includes(" wheat seeds")) {
                    planting_and_receiving_exp_farming(" wheat seeds", 5, " wheat", 5)
                    
                }
                else {
                    log('you do not meet the requirements, please check that your location is correct and that you have the correct equipment')
                }
            }
            else {
                log('you do not meet the requirements, please check that your location is correct and that you have the correct equipment')
            }
        }
        
            //harvesting    
        if (text.includes("harvest")) {
            if(text.includes("wheat") && wheat_planted >= 1) {
                if(loc="Wheat farm") {
                    harvesting_wheat_or_blueberries(" wheat seeds", 5, " wheat", 5)
                }
                
            }
            else {
                log('you do not meet the requirements, please check that your location is correct and that you have the correct equipment')
            }
        }
        
        
        
        
        
        
        


        //traveling
        if (text.toLowerCase().includes("travel")) {
            //human towns
            if (text.toLowerCase().includes("ol greth")) {
                loc = "Ol Greth"
                loc_type = "City"
                save();
            }
            if (text.toLowerCase().includes("gemeroth")) {
                loc = "Gemeroth"
                loc_type = "City"
                save();
            }
            if (text.toLowerCase().includes("axeldom town")) {
                loc = "Axeldom Town"
                loc_type = "City"
                save();
            }
            if (text.toLowerCase().includes("contherium")) {
                loc = "Contherium"
                loc_type = "City"
                save();
            }
            
            //orc towns
            if (text.toLowerCase().includes("vermith")) {
                loc = "Vermith"
                loc_type = "City"
                save();
            }
            if (text.toLowerCase().includes("tysak")) {
                loc = "Tysak"
                loc_type = "City"
                save();
            }
            if (text.toLowerCase().includes("talmon")) {
                loc = "Talmon"
                loc_type = "City"
                save();
            }
            if (text.toLowerCase().includes("kiki")) {
                loc = "Kiki"
                loc_type = "City"
                save();
            }
            if (text.toLowerCase().includes("bouba")) {
                loc = "Bouba"
                loc_type = "City"
                save();
            }
            if (text.toLowerCase().includes("darlamium")) {
                loc = "Darlamium"
                loc_type = "City"
                save();
            }
            
            //others
            if (text.toLowerCase().includes("volcano")) {
                if (xp_to_level(cardio) >= 40) {
                    document.body.style.backgroundColor = "orange";
                    loc = "Volcano"
                    loc_type = "Cardio"
                    save();
                }
                else {
                    log("Get to level 40 cardio to enter this")
                }
                save();
            }
            if (text.toLowerCase().includes("lighthouse")) {
                loc = "Lighthouse"
                loc_type = "Agility"
                log("Boss: Mr. Brightside");
                save();
            }
            if (text.toLowerCase().includes("ice burg")) {
                if (inv.includes(" boat")) {
                    loc = "Ice burg"
                    loc_type = "loc"
                    save();
                }
                else {
                    log("Get a boat")
                }
                save();
            }
            if (text.toLowerCase().includes("boulevard")) {
                loc = "Boulevard"
                loc_type = "loc"
                save();
            }
            if (text.toLowerCase().includes("cemetary")) {
                loc = "Cemetary"
                loc_type = "loc"
                save();
            }
            if (text.toLowerCase().includes("ravine")) {
                if (xp_to_level(cardio) >= 10) {
                    loc = "Ravine"
                    loc_type = "loc"
                    save();
                }
                else {
                    log("reach level 10 cardio to enter this")
                }
                save();
            }
            if (text.toLowerCase().includes("sand beach")) {
                loc = "Sand beach"
                loc_type = "Beach"
                save();
            }
            if (text.toLowerCase().includes("west beach")) {
                loc = "West beach"
                loc_type = "Beach"
                save();
            }
            if (text.toLowerCase().includes("east beach")) {
                loc = "East beach"
                loc_type = "Beach"
                save();
            }
            if (text.toLowerCase().includes("sand mine")) {
                loc = "Sand mine"
                loc_type = "Mine"
                save();
            }
            if (text.toLowerCase().includes("talmon mine")) {
                loc = "Talmon mine"
                loc_type = "Mine"
                save();
            }
            if (text.toLowerCase().includes("gemeroth mine")) {
                loc = "Gemeroth mine"
                loc_type = "Mine"
                save();
            }
            if (text.toLowerCase().includes("sand forest")) {
                loc = "Sand forest"
                loc_type = "Forest"
                save();
            }
            if (text.toLowerCase().includes("axeldom forest")) {
                loc = "Axeldom forest"
                loc_type = "Forest"
                save();
            }
            if (text.toLowerCase().includes("wheat farm")) {
                loc = "Wheat farm"
                loc_type = "Farm"
                save();
            }
            if (text.toLowerCase().includes("blueberry farm")) {
                loc = "Blueberry farm"
                loc_type = "Farm"
                save();
            }
            
            
            
            
            /*if (loc === "Lighthouse") {
              log('Your location is now ' + loc + " place of the boss: Brightside")
            } */
            
            
              log('Your location is ' + loc + ' location type ' + loc_type)
            
            save();
        }

        //buying
        if (text.includes("buy") && loc === "Ol Greth") {
            //log("test")
            if (text.toLowerCase().includes(" stone axe") && mon >= 350) {
                add_item_to_inv_and_save(" stone axe", 350)
            }
            if (text.toLowerCase().includes("stone pickaxe") && mon >= 400) {
                add_item_to_inv_and_save(" stone pickaxe", 400)
            }
            if (text.toLowerCase().includes("pole") && mon >= 75) {
                add_item_to_inv_and_save(" fishing pole", 75)
            }
            if (text.toLowerCase().includes("stone sword") && mon >= 550) {
                add_item_to_inv_and_save(" stone sword", 550)
            }
            /*if (text.toLowerCase().includes(" stone") && localStorage.getItem("mon_level") >= 780) {
               add_item_to_inv_and_save(" iron sword", 780)

            }*/
            if (text.toLowerCase().includes("oak") && mon >= 15) {
                add_item_to_inv_and_save(" oak log", 15)
            }
            if (text.toLowerCase().includes("iron") && mon >= 60) {
                add_item_to_inv_and_save(" iron ore", 60)
            }
            if (text.toLowerCase().includes("salm") && mon >= 50) {
                add_item_to_inv_and_save(" salmon", 50)
            }
            if (text.toLowerCase().includes("orc") && mon >= 3) {
                add_item_to_inv_and_save(" orc flesh", 3)
            }
            if (text.toLowerCase().includes("wooden shield") && mon >= 500) {
                add_item_to_inv_and_save(" wooden shield", 500)
            }
            /*if (text.toLowerCase().includes("stone sword") && localStorage.getItem("mon_level") >= 900) {
               add_item_to_inv_and_save(" iron shield", 900)

            }*/
        }

        //selling
        if (text.toLowerCase().includes("sell") && loc === "Ol Greth") {
            if (text.toLowerCase().includes(" axe") && inv.includes(" axe")) {
                mon = mon + 350
                save();
                remove_item_from_inv_and_save(" axe");
                log('You sold an axe and gained 350 coins')
            }
            if (text.toLowerCase().includes("pickaxe") && inv.includes(" pickaxe")) {
                mon = mon + 400
                save();
                remove_item_from_inv_and_save(" pickaxe");
                log('You sold a pickaxe and gained 400 coins')
            }
            if (text.toLowerCase().includes("pole") && inv.includes(" fishing pole")) {
                mon = mon + 75
                save();
                remove_item_from_inv_and_save(" fishing pole");
                log('You sold a fishing pole and gained 75 coins')

            }
            if (text.toLowerCase().includes("stone sword") && inv.includes(" sword")) {
                mon = mon + 550
                save();
                remove_item_from_inv_and_save(" stone sword");
                log('You sold a stone sword and gained 550 coins')
            }
            if (text.toLowerCase().includes("oak") && inv.includes(" oak log")) {
                mon = mon + 15
                save();
                remove_item_from_inv_and_save(" oak log");
                log('You sold an oak log and gained 15 coins')
            }
            if (text.toLowerCase().includes("iron") && inv.includes(" iron ore")) {
                mon = mon + 60
                save();
                remove_item_from_inv_and_save(" iron ore");
                log('You sold an iron ore and gained 60 coins')
            }
            if (text.toLowerCase().includes("salm") && inv.includes(" salmon")) {
                mon = mon + 50
                save();
                remove_item_from_inv_and_save(" salmon");
                log('You sold a salmon and gained 50 coins')
            }
            if (text.toLowerCase().includes("orc") && inv.includes(" orc")) {
                mon = mon + 3
                save();
                remove_item_from_inv_and_save(" orc flesh");
                log('You sold an orc flesh and gained 3 coins')
            }
            if (text.toLowerCase().includes(" stone shield") && inv.includes(" shield")) {
                mon = mon + 500
                save();
                remove_item_from_inv_and_save(" wooden shield");
                log('You wooden sold a shield and gained 3 coins')
            }
            if (text.toLowerCase().includes(" iron shield") && inv.includes(" shield")) {
                mon = mon + 900
                save();
                remove_item_from_inv_and_save(" iron shield");
                log('You sold an iron shield and gained 3 coins')
            }
        }

        //equiping
        else if (text.includes("equip ")) {
            //sword
            if (text.includes("sword")) {
                if (text.includes("stone") && inv.includes(" stone sword")) {
                    equip_sword = "stone sword";
                    equip_sword1 = stone_sword;
                    log("Equiped stone sword")
                    save();
                }
                if (text.includes("iron") && inv.includes(" iron sword")) {
                    equip_sword = "iron sword";
                    equip_sword1 = iron_sword;
                    log("Equiped iron sword")
                    save();
                }
            }
            //shield
            if (text.includes("shield")) {
                if (text.includes("wood") && inv.includes(" wooden shield")) {
                    equip_shield = "wooden shield";
                    equip_shield1 = wooden_shield;
                    log("Equiped wooden shield")
                    save();
                }
                if (text.includes("iron") && inv.includes(" iron shield")) {
                    equip_shield = "iron shield";
                    equip_shield1 = iron_shield;
                    log("Equiped iron shield")
                    save();
                }
            }
            //pickaxe
            if (text.includes("pickaxe")) {
                if (text.includes("stone") && inv.includes(" stone pickaxe")) {
                    equip_pick = "stone pick";
                    equip_pick1 = stone_pick;
                    log("Equiped stone pickaxe")
                    save();
                }
                if (text.includes("iron") && inv.includes(" iron pickaxe")) {
                    equip_pick = "iron pick";
                    equip_pick1 = iron_pick;
                    log("Equiped iron pickaxe")
                    save();
                }
            }
            //axe
            if (text.includes("axe")) {
                if (text.includes("stone") && inv.includes(" stone axe")) {
                    equip_axe = "stone axe";
                    equip_axe1 = stone_axe;
                    log("Equiped stone axe")
                    save();
                }
                if (text.includes("iron") && inv.includes(" iron axe")) {
                    equip_axe = "iron axe";
                    equip_axe1 = iron_axe;
                    log("Equiped iron axe")
                    save();
                }
            }

        }
        
        
            let damage = 0
            let enemy_hp = 0
            
        
        //bossing!
        if (text.includes("brightside") && loc=="Lighthouse") {
            mr_brightside_boss_fight();
            function mr_brightside_boss_fight() {
                
                damage = equip_sword1 + xp_to_level(cardio) + xp_to_level(fighting)
                hp_minus = hp - 50 + equip_shield1
                
                hp = hp_minus
                enemy_hp = 110 - damage
                
                log(damage, enemy_hp, hp, hp_minus);
                
                if (enemy_hp > 0) {
                    mr_brightside_boss_fight();
                }
                if (enemy_hp <= 0) {
                    log("victory")
                }
                
                cardio = cardio + 60
                fighting = fighting + 70
                Mr_Brightside++;
                
                log(damage, enemy_hp, hp, hp_minus, Mr_Brightside)
                
                save();
            }
        }
        
        
        
        
        
        
        
        
        
        
        
        

        //seeing money
        else if (text.toLowerCase().includes("money")) {
            log(mon + " coins")
        }

        //seeing stats
        else if (text.toLowerCase().includes("stats")) {
            log(localStorage.getItem("Username_ls") + "'s stats")
            log("mining level " + xp_to_level(mining))
            log("woodcutting level " + xp_to_level(wc))
            log("cardio level " + xp_to_level(cardio))
            log("fighting level " + xp_to_level(fighting))
            log("fishing level " + xp_to_level(fishing))
            log("cooking level " + xp_to_level(cooking))
            log("smelting level " + xp_to_level(smelting))
            log("smithing level " + xp_to_level(smithing))
            log("farming level " + xp_to_level(farming))
            
            
            log(hp + " hp")
        }
        
        //plants planted
        if(text.includes("wheat") && ! text.includes("plant") && ! text.includes("harvest")) {
            log(wheat_planted)
        }
        
        //loc display
        if (text.includes("location")) {
            log(localStorage.getItem("loc_level") + ", " + localStorage.getItem("loc_type_level"))
            
        }
        
        
        
        
        
        
        //localStorage display
        if (text.includes("local") || text.includes("storage")) {
            log("local storage");
                for (i = 0; i < localStorage.length; i++)   {
                    log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
                }
        }
        

        //slicing
        if (text.toLowerCase().includes("splic")) {
            log(" ")
        }

        if (text.includes("equiped")) {
            log(equip_pick + ", " + equip_sword + ", " + equip_shield + ", " + equip_axe)
        }

       
    }
}


document.querySelectorAll(".my-button")[0].addEventListener("click", process_text);
document.querySelectorAll(".input-here")[0].addEventListener("keypress", function(event) {
    if (event.code === 'Enter' || event.key === "Enter") {
        //they pressed enter
        process_text();
    }
    //If they pressed any other key just ignore it
});
/*function display_image(src, width, height, alt) {
    const img = document.createElement('img')
    img.src = "jsmining.png"
   
    game.append(img)
}
display_image('jsidle.png', 50, 110, 'JavaScriptImage');*/



/* to do list
add else things to say you can't do the thing
*/

/*$(function() {
        $('#commentform').submit(handleSubmit);
      });

      function handleSubmit() {
        var form = $(this);
        var data = {
          "comment_author": form.find('#comment_author').val(),
          "email": form.find('#email').val(),
          "comment": form.find('#comment').val(),
          "comment_post_ID": form.find('#comment_post_ID').val()
        };

        postComment(data);

        return false;
      }

      function postComment(data) {
        // send the data to the server
      }

      function postComment(data) {
        $.ajax({
          type: 'POST',
          url: 'post_comment.php',
          data: data,
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          },
          success: postSuccess,
          error: postError
        });
      }

      function postSuccess(data, textStatus, jqXHR) {
        // add comment to UI
      }

      function postError(jqXHR, textStatus, errorThrown) {
        // display error
      }

      function postSuccess(data, textStatus, jqXHR) {
        $('#commentform').get(0).reset();
        displayComment(data);
      }

      function displayComment(data) {
        var commentHtml = createComment(data);
        var commentEl = $(commentHtml);
        commentEl.hide();
        var postsList = $('#posts-list');
        postsList.addClass('has-comments');
        postsList.prepend(commentEl);
        commentEl.slideDown();
      }

      function createComment(data) {
        var html =
        '<li><article id="' + data.id + '" class="hentry">' +
          '<footer class="post-info">' +
            '<abbr class="published" title="' + data.date + '">' +
              parseDisplayDate(data.date) +
            '</abbr>' +
            '<address class="vcard author">' +
              'By <a class="url fn" href="#">' + data.comment_author + '</a>' +
            '</address>' +
          '</footer>' +
          '<div class="entry-content">' +
            '<p>' + data.comment + '</p>' +
          '</div>' +
        '</article></li>';

        return html;
      }

      function parseDisplayDate(date) {
        date = (date instanceof Date? date : new Date( Date.parse(date) ) );
        var display = date.getDate() + ' ' +
                      ['January', 'February', 'March',
                       'April', 'May', 'June', 'July',
                       'August', 'September', 'October',
                       'November', 'December'][date.getMonth()] + ' ' +
                      date.getFullYear();
        return display;
      }

      $(function() {

        $(document).keyup(function(e) {
          e = e || window.event;
          if(e.keyCode === 85){
            displayComment({
              "id": "comment_1",
              "comment_post_ID": 1,
              "date":"Tue, 21 Feb 2012 18:33:03 +0000",
              "comment": "The realtime Web rocks!",
              "comment_author": "Phil Leggetter"
            });
          }
        });

      });*/
