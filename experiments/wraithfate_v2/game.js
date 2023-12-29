let travelLocation = "Sand Mine";
let travelLocType = ["mine"];


let coins = 10;
let numOfDragonBloodTrees = 10;
let exPoints = 100;
let Num;
let hp = 100;
let fireStarterLives;
let haveShield;

const SCROLL_OF_GEMEROTH = {
    type: "QUEST"
}

const MAYOR_JACKSON_OF_OL_GRETH = {
    type: "NPC",
    name: "Mayor Jackson of Ol'Greth",
    age: 57,
    startingLocation: "Ol Greth",
    quests: SCROLL_OF_GEMEROTH,
    questsNumber: 1,
    likesYou: 15,
    does_buy: false,
    does_sell: false,
    does_quests: true
}

let arrayOfNPCs = [MAYOR_JACKSON_OF_OL_GRETH]

const anglerfish = {
	item: "anglerfish",
	itemName: "Angler Fish",
	number: 50,
	type: "fish",
	equipable: false
}
const bait = {
	item: "bait",
	itemName: "Bait",
	number: 5,
	type: "bait",
	equipable: false
}
const beechLog = {
	item: "beechLog",
	itemName: "Beech Log",
	number: 20,
	type: "log",
	equipable: false
}
const blowtorch = {
	item: "blowtorch",
	itemName: "Blowtorch",
	number: 5,
	type: "fireStarter",
	equipable: true
}
const boubaClub = {
    item: "boubaClub",
    itemName: "Bouba CLub",
    number: 40,
    type: "axe",
    equipable: true
}
const brightSword = {
    item: "brightSword",
    itemName: "Bright Sword",
    number: 30,
    type: "sword",
    equipable: true
}
const bronze = {
    item: "bronze",
    itemName: "Bronze",
    number: 19,
    type: "ore",
    equipable: false
}
const bronzeAxe = {
    item: "bronzeAxe",
    itemName: "Bronze Axe",
    number: 10,
    type: "axe",
    equipable: true 
}
const bronzePickaxe = {
    item: "bronzePickaxe",
    itemName: "Bronze Pickaxe",
    number: 10,
    type: "pickaxe",
    equipable: true
}
const charcoal = {
    item: "charcoal",
    itemName: "Charcoal",
    number: 10,
    type: "fuel",
    equipable: false 
}
const clownfish = {
    item: "clownfish",
    itemName: "Clown Fish",
    number: 15,
    type: "fish",
    equipable: false
}
const coal = {
    item: "coal",
    itemName: "Coal",
    number: 10,
    type: "fuel",
    equipable: false
}
const cod = {
    item: "cod",
    itemName: "Cod",
    number: 5,
    type: "fish",
    equipable: false
}
const cookedAnglerfish = {
    item: "cookedAnglerFish",
    itemName: "Cooked Anglerfish",
    number: 50,
    type: "food",
    equipable: false 
}
const cookedCod = {
    item: "cookedCod",
    itemName: "Cooked Cod",
    number: 5,
    type: "food",
    equipable: false
}
const cookedPiranah = {
    item: "cookedPiranah",
    itemName: "Cooked Piranah",
    number: 25,
    type: "food",
    equipable: false
}
const cookedSalmon = {
    item: "cookedSalmon",
    itemName: "Cooked Salmon",
    number: 10,
    type: "food",
    equipable: false
}
const copper = {
    item: "copper",
    itemName: "Copper",
    number: 5,
    type: "ore",
    equipable: false
}
const diamond = {
    item: "diamond",
    itemName: "Diamond",
    number: 35,
    type: "ore",
    equipable: false
}
const dragonBloodLog = {
    item: "dragonBloodLog",
    itemName: "Dragon Blood Log",
    number: 100,
    type: "log",
    equipable: false
}
const fishingRod = {
    item: "fishingRod",
    itemName: "Fishing Rod",
    number: 5,
    type: "fishingRod",
    equipable: true
}
const gasContainer = {
    item: "gasContainer",
    itemName: "Gas Container",
    number: 5,
    type: "fuel",
    equipable: false
}
const gold = {
    item: "gold",
    itemName: "Gold",
    number: 2,
    type: "ore",
    equipable: false
}
const goldCoin = {
    item: "goldCoin",
    itemName: "Gold Coin",
    number: 1,
    type: "coin",
    equipable: false
}
const graveSpade = {
    item: "graveSpade",
    itemName: "Grave Spade",
    number: 6,
    type: "spade",
    equipable: true
}
const iceShard = {
    item: "iceShard",
    itemName: "Ice Shard",
    number: 55,
    type: "sword",
    equipable: true
}
const iron = {
    item: "iron",
    itemName: "Iron",
    number: 24,
    type: "ore",
    equipable: false
}
const ironAxe = {
    item: "ironAxe",
    itemName: "Iron Axe",
    number: 15,
    type: "axe",
    equipable: true
}
const ironBar = {
    item: "ironBar",
    itemName: "Iron Bar",
    number: 24,
    type: "bar",
    equipable: false
}
const ironPickaxe = {
    item: "ironPickaxe",
    itemName: "Iron Pickaxe",
    number: 15,
    type: "pickaxe",
    equipable: true
}
const ivyLog = {
    item: "ivyLog",
    itemName: "Ivy Log",
    number: 30,
    type: "log",
    equipable: false
}
const kikiSpike = {
    item: "kikiSpike",
    itemName: "Kiki Spike",
    number: 40,
    type: "pickaxe",
    equipable: true
}
const lavaGlove = {
    item: "lavaGlove",
    itemName: "Lava Glove",
    number: 1,
    type: "glove",
    equipable: false
}
const lonelyRope = {
    item: "lonelyRope",
    itemName: "Lonely Rope",
    number: 8,
    type: "fishingRod",
    equipable: true
}
const neonFang = {
    item: "neonFang",
    itemName: "Neon Fang",
    number: 35,
    type: "sword",
    equipable: true
}
const oakLog = {
    item: "oakLog",
    itemName: "Oak Log",
    number: 5,
    type: "log",
    equipable: false
}
const orcFlesh = {
    item: "orcFlesh",
    itemName: "Orc Flesh",
    number: 5,
    type: "drop",
    equipable: false
}
const palmLog = {
    item: "palmLog",
    itemName: "Palm Log",
    number: 40,
    type: "log",
    equipable: false
}
const piranah = {
    item: "piranah",
    itemName: "Piranah",
    number: 25,
    type: "fish",
    equipable: false
}
const redwoodLog = {
    item: "redwoodLog",
    itemName: "Redwood Log",
    number: 50,
    type: "log",
    equipable: false
}
const rock = {
    item: "rock",
    itemName: "Rock",
    number: 5,
    type: "ore",
    equipable: false
}
const salmon = {
    item: "salmon",
    itemName: "Salmon",
    number: 10,
    type: "fish",
    equipable: false
}
const shield = {
    item: "shield",
    itemName: "Shield",
    number: 5,
    type: "shield",
    equipable: true
}
const stonePickaxe = {
    item: "stonePickaxe",
    itemName: "Stone Pickaxe",
    number: 5,
    type: "pickaxe",
	equipable: true
};
const stoneAxe = {
    item: "stoneAxe",
    itemName: "Stone Axe",
    number: 5,
    type: "axe",
	equipable: true
};
const stoneSword = {
    item: "stoneSword",
    itemName: "Stone Sword",
    number: 10,
    type: "sword",
    equipable: true
}
const stoneSythe = {
    item: "stoneSythe",
    itemName: "Stone Sythe",
    number: 10,
    type: "sythe",
    equipable: true
}
const tin = {
    item: "tin",
    itemName: "Tin",
    number: 15,
    type: "ore",
    equipable: false
}
/*const undefined = {
    item: "undefined",
    itemName: "undefinec",
    number: 10000,
    type: "undefined",
    equipable: true
}*/
const venomDuct = {
    item: "venomDuct",
    itemName: "Venom Duct",
    number: 10,
    type: "drop",
    equipable: false
}
const willowLog = {
    item: "willowLog",
    itemName: "Willow Log",
    number: 10,
    type: "log",
    equipable: false
}
const yewLog = {
    item: "yewLog",
    itemName: "Yew Log",
    number: 75,
    type: "log",
    equipable: false
}

let bankContent = [rock];

let brightsideKills = 0;
let boulevardKills = 0;
let neonTigerKills = 0;
let kikiKills = 0;
let boubaKills = 0;
let cemetaryGatesKills = 0;
let pompeiiKills = 0;
let frostbiteKills = 0;

let miningEXP = 0;
let wcEXP = 0;
let cardioEXP = 0;
let fightingEXP = 0;
let fishingEXP = 0;
let cookingEXP = 0;
let smeltEXP = 0;
let smithEXP = 0;
let farmEXP = 0;
let healthEXP = 0;
let defenceEXP = 0;

let equiped = 0;
let equipedName;
let equipedType;

const GRAVESPADE = 6;

const STONEPICKAXE = 5;
const BRONZEPICKAXE = 10;
const IRONPICKAXE = 15;
const KIKISPIKE = 40;

const STONEAXE = 5;
const BRONZEAXE = 10;
const IRONAXE = 15;
const BOUBACLUB = 40;

const STONESWORD = 10;
const BRONZESWORD = 15;
const IRONSWORD = 20;
const BRIGHTSWORD = 30;
const NEONFANG = 35;
const ICESHARD = 55;

const SYTHE = 5;
const STONESYTHE = 10;

const FISHINGROD = 5;
const LONELYROPE = 8;

const COD = 5;
const SALMON = 10;
const CLOWNFISH = 15;
const PIRANAH = 25;
const ANGLERFISH = 50;

const ROCK = 5;
const COAL = 10;
const TIN = 15;
const COPPER = 16;
const GOLD = 2;
const BRONZE = 19;
const IRON = 24;
const DIAMOND = 35;

const OAKLOG = 5;
const WILLOWLOG = 10;
const BEECHLOG = 20;
const IVYLOG = 30;
const PALMLOG = 40;
const REDWOODLOG = 50;
const YEWLOG = 75;
const DRAGONBLOODLOG = 100;

const LIGHTHOUSE = 5;
const RAVINE = 15;
const VOLCANO = 55;

const ORC = 5;
const BRAWLER = 6;
const MUGGER = 4;
const SPIDER = 10;
const GIANTSPIDER = 20;
const GHOSTS = 25;
const GRAVEROBBER = 22;
const MINORFIRESPIRIT = 30;
const MAJORFIRESPIRIT = 40;


const SHIELD = 5;

const BRIGHTSIDE = 20;
const BRIGHTSIDEHEALTH = 30;
const BOULEVARD = 35;
const BOULEVARDHEALTH = 50;
const NEONTIGER = 40;
const NEONTIGERHEALTH = 55;
const KIKI = 45;
const KIKIHEALTH = 63;
const BOUBA = 45;
const BOUBAHEALTH = 63;
const CEMETARYGATES = 55;
const CEMETARYGATESHEALTH = 70;
const POMPEII = 70;
const POMPEIIHEALTH = 100;
const FROSTBITE = 70;
const FROSTBITEHEALTH = 100;

const BLOWTORCH = 5;

let inv2 = [stonePickaxe, stoneAxe];



load();
showInvInTable();
//functions V
function log(text) {
    let our_div = document.querySelectorAll(".output-here")[0];
    our_div.innerHTML = our_div.innerHTML + text + "<br>";
    eraseLogBook()
}

function xpToLevel(exp) {
  let level = Math.trunc(Math.pow(exp, 1/4));
  if (level > 99) {
    return 99;
  }
  if (level <= 99) {
    return level;
  }
}

function xpToNextLevel(exp) {
    //debugger;
    let level = Math.trunc(Math.pow(exp, 1/4));

    let nextLevel = level + 1;
    let expNextLevel = Math.round(nextLevel*nextLevel*nextLevel*nextLevel)
    let pointsRequired = expNextLevel - exp;
    document.write("required exp: " + pointsRequired)
}



function save() {
    localStorage.setItem("travelLocation_ls", travelLocation);
    localStorage.setItem("travelLocType_ls", JSON.stringify(travelLocType));
    localStorage.setItem("inv2_ls", JSON.stringify(inv2));
    localStorage.setItem("bankContent_ls", JSON.stringify(bankContent));
    localStorage.setItem("equiped_ls", equiped);
    localStorage.setItem("equipedName_ls", equipedName);
    localStorage.setItem("equipedType_ls", equipedType);
    localStorage.setItem("coins_ls", coins);
    localStorage.setItem("numOfDragonBloodTrees_ls", numOfDragonBloodTrees);
    localStorage.setItem("exPoints_ls", exPoints);
    localStorage.setItem("hp_ls", hp);
    localStorage.setItem("fireStarterLives_ls", fireStarterLives);

    localStorage.setItem("miningEXP_ls", miningEXP);
    localStorage.setItem("wcEXP_ls", wcEXP);
    localStorage.setItem("cardioEXP_ls", cardioEXP);
    localStorage.setItem("fightingEXP_ls", fightingEXP);
    localStorage.setItem("fishingEXP_ls", fishingEXP);
    localStorage.setItem("cookingEXP_ls", cookingEXP);
    localStorage.setItem("smeltEXP_ls", smeltEXP);
    localStorage.setItem("smithEXP_ls", smithEXP);
    localStorage.setItem("farmEXP_ls", farmEXP);
    localStorage.setItem("healthEXP_ls", healthEXP);
    localStorage.setItem("defenceEXP_ls", defenceEXP);

    localStorage.setItem("brightsideKills_ls", brightsideKills);
    localStorage.setItem("boulevardKills_ls", boulevardKills);
    localStorage.setItem("neonTigerKills_ls", neonTigerKills);
    localStorage.setItem("kikiKills_ls", kikiKills);
    localStorage.setItem("boubaKills_ls", boubaKills);
    localStorage.setItem("cemetaryGatesKills_ls", cemetaryGatesKills);
    localStorage.setItem("pompeiiKills_ls", pompeiiKills);
    localStorage.setItem("frostbiteKills_ls", frostbiteKills);
}
function load() {
    travelLocation = load_string_from_local_storage("travelLocation_ls", "Sand Mine");
    //travelLocType = load_string_from_local_storage("travelLocType_ls", "mine");
    equiped = load_int_from_local_storage("equiped_ls", 0);
    equipedName = load_string_from_local_storage("equipedName_ls", "");
    equipedType = load_string_from_local_storage("equipedType_ls", "");
    coins = load_int_from_local_storage("coins_ls", 10);
    numOfDragonBloodTrees = load_int_from_local_storage("numOfDragonBloodTrees_ls", 10);
    exPoints = load_int_from_local_storage("exPoints_ls", 100);
    hp = load_int_from_local_storage("hp_ls", 10);
    fireStarterLives = load_int_from_local_storage("fireStarterLives_ls", 0);

    let inv2_save = localStorage.getItem("inv2_ls");
    if (inv2_save !== null) {
        inv2 = JSON.parse(inv2_save);
    }
    let bankContent_save = localStorage.getItem("bankContent_ls");
    if (bankContent_save !== null) {
        bankContent = JSON.parse(bankContent_save);
    }
    let travelLocType_save = localStorage.getItem("travelLocType_ls");
    if (travelLocType_save !== null) {
        travelLocType = JSON.parse(travelLocType_save);
    }

    miningEXP = load_int_from_local_storage("miningEXP_ls", 0);
    wcEXP = load_int_from_local_storage("wcEXP_ls", 0);
    cardioEXP = load_int_from_local_storage("cardioEXP_ls", 0);
    fightingEXP = load_int_from_local_storage("fightingEXP_ls", 0);
    fishingEXP = load_int_from_local_storage("fishingEXP_ls", 0);
    cookingEXP = load_int_from_local_storage("cookingEXP_ls", 0);
    smeltEXP = load_int_from_local_storage("smeltEXP_ls", 0);
    smithEXP = load_int_from_local_storage("smithEXP_ls", 0);
    farmEXP = load_int_from_local_storage("farmEXP_ls", 0);
    healthEXP = load_int_from_local_storage("healthEXP_ls", 10000);
    defenceEXP = load_int_from_local_storage("defenceEXP_ls", 0);

    brightsideKills = load_int_from_local_storage("brightsideKills_ls", 0);
    boulevardKills = load_int_from_local_storage("boulevardKills_ls", 0);
    neonTigerKills = load_int_from_local_storage("neonTigerKills_ls", 0);
    kikiKills = load_int_from_local_storage("kikiKills_ls", 0);
    boubaKills = load_int_from_local_storage("boubaKills_ls", 0);
    cemetaryGatesKills = load_int_from_local_storage("cemetaryGatesKills_ls", 0);
    pompeiiKills = load_int_from_local_storage("pompeiiKills_ls", 0);
    frostbiteKills = load_int_from_local_storage("frostbiteKills_ls", 0);

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
//function ^

/*let inv = [" stone pickaxe"];
localStorage.setItem("inv_what", JSON.stringify(inv));
inv = [" stone pickaxe"];
    let inv_save = localStorage.getItem("inv_what");
    if (inv_save !== null) {
        inv = JSON.parse(inv_save);
    }*/

timerForExPoints();

function timerForDragonBloodTrees() {
    setTimeout(addDragonBloodTrees, 60000)
}

function timerForExPoints() {
    setTimeout(addExPoints, 100000, 'funky');
}1

play();

function gameStart() {
    timerForExPoints()
    document.write("<br/>");
    document.write("<button onclick='removeAll(); play()'>Play</button>");
    document.write("<button onclick='leave()'>Leave</button>");
    document.write("<button onclick='leaveToFullMap()'>Full Map</button>")
}

function play() {

    $(".playButton").hide()


    timerForExPoints()
    /*document.write("<link rel='stylesheet' type='text/css' href='./game.css' />")
    //document.write("<hr/>")
    document.write("<br/>")*/
    $(".travelButton").show()    //done
    $(".skillButton").show()     //done
    if ((equipedType === "sword") || (equipedName === "shield")) {
        $(".bossButton").show()   //done
    }
    //$(".viewInventoryButton").show()
    //document.write("<button onclick='displayMoney()'>Money</button>")
    //$(".levelStatsButton").show()
    if (travelLocType.includes("city")) {
        $(".generalShopButton").show()
        $(".bankButton").show()
    }
    if (travelLocation === "Darlamium") {
        $(".boatButton").show()
    }
    $(".dropButton").show()
    //document.write("<button onclick='displayHealth();'>Health</button>")
    $(".eatButton").show()
    if (equipedType === "fireStarter" && travelLocType.includes("wc")) {
        $(".burnDownTreeButton").show()
    }
    if (equipedType === "fireStarter" && inv2.includes("gasContainer")) {

        $(".fillFireStarterButton").show()
    }
    if (equipedName.includes("Spade")) {
        $(".digForWormsButton").show()
    }
    $(".npcButton").show()

    showEXPInTable();
    showEquipedItem();
    showInvInTable();
    displayLocationBasedImages();
    save();


}

function fillFireStarter() {
    removeFromInvArray("gasContainer")
    fireStarterLives = equiped
    removeAll()
    play()
}

function useFireStarter() {
    if (fireStarterLives > 0) {
        addToInvArray(coal)
        fireStarterLives--;

        document.write("Burnt down tree")
    }
    else {
        document.write("<br/>You need more gas")
    }
    save();
}

function generalShop_buyOrSell() {
    document.write("<hr/>")
    document.write("<button onclick='generalShopBuy();'>General Shop Buy</button>");
    document.write("<button onclick='generalShopSell();'>General Shop Sell</button>");
}
function bank_outOrIn() {
    $(".generalBR").show()
    $(".bankOut").show()
    $(".bankIn").show()
}

function getOnBoat() {
    if (coins >= 10) {
        coins = coins - 10
        travelLocation = "Sea"
        travelLocType = ["unclassified"]
        document.write("<br/>On the Sea")
    }
    if (coins < 10) {
        document.write("You need more money for this!")
    }
}

function drop() {
    
    let counterAt0 = 0;
    let counterAt1 = 1;
    let invLength = inv2.length
    
    //debugger;
    while (invLength > 0) {
	$(`.invSlot${counterAt1}Button`).prop("onclick", null).off("click");
	
	let invItem = inv2[counterAt0]
	let invItem1 = inv2[counterAt1]
        //debugger;
        $(`.invSlot${counterAt1}`).html("drop:")
        $(`.invSlot${counterAt1}Button`).html(`<img width="50" src="itemSprites/${invItem.item}.png"></img>`)
	    //debugger;
        
        $(`.invSlot${counterAt1}Button`).click(function() {
	    removeFromInvArray(invItem);           //adds function where onclick you drop item
	    location.reload();
	    
	});
        
        if (inv2[counterAt0] === undefined) {
            $(`.invSlot${counterAt1}`).html("&nbsp")
        }
        counterAt0++
        counterAt1++
		invLength--
    } 
}

function resetWithDropOpen() {
    removeAll();
    play();
    drop();
}

function bank(inOrOut) {
    if (inOrOut === "In") {
	let counterAt0 = 0;
    let counterAt1 = 1;
    let invLength = inv2.length
    
    //debugger;
    while (invLength > 0) {
	$(`.invSlot${counterAt1}Button`).prop("onclick", null).off("click");
	
	let invItem = inv2[counterAt0]
	let invItem1 = inv2[counterAt1]
        //debugger;
        $(`.invSlot${counterAt1}`).html("into bank:")
        $(`.invSlot${counterAt1}Button`).html(`<img width="50" src="itemSprites/${invItem.item}.png"></img>`)
	    //debugger;
        
        $(`.invSlot${counterAt1}Button`).click(function() {
	    removeFromInvArray(invItem);           //adds function where onclick you drop item
	    addToBankArray(invItem);
	    location.reload();
	    
	});
        
        if (inv2[counterAt0] === undefined) {
            $(`.invSlot${counterAt1}`).html("&nbsp")
        }
        counterAt0++
        counterAt1++
	invLength--
        } 
    }
    if (inOrOut === "Out") {
	$(".listBankItems").empty()
	$(".listBankItems").show()
    let counterAt0 = 0;
    let counterAt1 = 1;
	let bankLength = bankContent.length
	log("opened bank")
    
    //debugger;
    while (bankLength > 0) {
	//$(`.invSlot${counterAt1}Button`).prop("onclick", null).off("click");
	
	let bankItem = bankContent[counterAt0]
	let bankItem1 = bankContent[counterAt1]
	let previousBankItems = document.getElementById("listBankItems")
	
	
        //debugger;
	previousBankItems.innerHTML +=`<button class="bankContentButton" onclick="removeFromBankArray(${bankItem.item}); addToInvArray(${bankItem.item}); save(); play();"><img src="itemSprites/${bankItem.item}.png" /></button>` + bankItem.itemName + "<br/>"
        //$(`.invSlot${counterAt1}Button`).html(`<img width="50" src="itemSprites/${invItem.item}.png"></img>`)
	    //debugger;
        
        $(`.invSlot${counterAt1}Button`).click(function() {
	    removeFromInvArray(invItem);           //adds function where onclick you drop item
	    addToBankArray(invItem);
	    location.reload();
	    
	});
        
        if (inv2[counterAt0] === undefined) {
            $(`.invSlot${counterAt1}`).html("&nbsp")
        }
        counterAt0++
        counterAt1++
	bankLength--
        } 
    }
}

function resetWithBankOpen(outOrIn) {
    //debugger;
    removeAll()
    play();
    if (outOrIn === ("In")) {
        bank("In")
    }if (outOrIn === ("Out")) {
        bank("Out")
    }

}

function leaveToFullMap() {
    save();
    window.open("https://deadvey.xyz/wraithfate_v2/fullmap.html");
}


function leave() {
    save();
    window.location.replace("https://deadvey.xyz/experiments.html");
}

function removeAll() {
    //debugger;
    $(".travelScreenButton").hide();
    $(".skillScreenButton").hide();
    $(".bossScreenButton").hide();
    $(".hideThis").hide();
    play();

    //$(".output-here").hide();
}

function travel() {
    //removeAll()
	log("Hit Travel Key")
    if (exPoints >= 1) {
        $(".travelScreenButton").show()

        if (travelLocation === "Darmamium") {
            $(".seaButton").show()
        }
        play()
    }

    save();


}

function addExPoints() {
    if (exPoints < 100) {
        exPoints++
    }
    save();
}

function addDragonBloodTrees() {
    if (numOfDragonBloodTrees < 10) {
        numOfDragonBloodTrees++
    }
    save();
}

function travelTo(Loca) {

    
    if (Loca === "Volcano") {
        if (xpToLevel(cardioEXP) >= 30) {
            travelLocation = "Volcano";
            removeAll();
            log("You traveled to the Volcano")
            travelLocType = ['cardio', 'wc', 'boss', 'pompeii', `fighting`]
        }
        else if (xpToLevel(cardioEXP) < 30) {
            removeAll();
            log("You need to have a higher cardio level in order to travel here");
        }
    }
    else if (Loca === ("Ravine")) {
        if (xpToLevel(cardioEXP) >= 10) {
            travelLocation = "Ravine";
            removeAll();
            log("You traveled to the Ravine")
            travelLocType = ['cardio', 'fighting']
        }
        else {
            removeAll();
            log("You need to have a higher cardio level in order to travel here");
        }
    }
}

function displayMoney() {
    document.write("<hr/>");
    document.write("<img width='15' src='sussyBakaCoin.png' /> " + coins);

}

function generalShopBuy() {


    document.write("<br/>")
    document.write("<button onclick='addToInvArray(stonePickaxe);     save();    removeGoldFromInvArray(0); removeAll(); log(`Bought Stone Pickaxe`);   play();'>Stone Pickaxe - Free</button>")
    document.write("<br/>")
    document.write("<button onclick='addToInvArray(stoneAxe);         save();    removeGoldFromInvArray(0); removeAll(); log(`Bought Stone Axe`);       play();'>Stone Axe - Free</button>")
    document.write("<br/>")
    if (coins >= 1) {
        document.write("<button onclick='addToInvArray(bait); addToInvArray(bait); addToInvArray(bait);       save();    removeGoldFromInvArray(1); removeAll(); log(`Bought Bait`);     play();'>Bait - <img class'greenToPurple' width='10' src='sussyBakaCoin.png'/> 1</button>")
    }
     document.write("<br/>")
    if (coins >= 3) {
        document.write("<button onclick='addToInvArray(fishingRod);       save();    removeGoldFromInvArray(5); removeAll(); log(`Bought Fishing Rod`);     play();'>Fishing Rod - <img class'greenToPurple' width='10' src='sussyBakaCoin.png'/> 3</button>")
    }

    document.write("<br/>")
    if (coins >= 5) {
        document.write("<button onclick='addToInvArray(stoneSword);       save();    removeGoldFromInvArray(3); removeAll(); log(`Bought Stone Sword`);     play();'>Stone Sword - <img class'greenToPurple' width='10' src='sussyBakaCoin.png'/> 5</button>")
    }
    save();
}

function generalShopSell() {



    document.write("<br/>")
    document.write("<button onclick='removeFromInvArray(`stonePickaxe`);     save();      addGoldToInvArray(0);    removeAll(); log(`Sold Stone Pickaxe`);       play();'>Stone Pickaxe - Free</button>")
    document.write("<br/>")
    document.write("<button onclick='removeFromInvArray(`stoneAxe`);         save();      addGoldToInvArray(0);    removeAll(); log(`Sold Stone Axe`);           play();'>Stone Axe - Free</button>")
    document.write("<br/>")
    if (inv2.includes("cookedCod")) {
        document.write("<button onclick='removeFromInvArray(`cookedCod`);       save();      addGoldToInvArray(2);    removeAll(); log(`Sold Cooked Cod`);         play();'>Cooked Cod - <img class='greenToPurple' width='10' src='sussyBakaCoin.png'/> 2</button>")
    }
    document.write("<br/>")
    if (inv2.includes("cookedSalmon")) {
        document.write("<button onclick='removeFromInvArray(`cookedSalmon`);       save();      addGoldToInvArray(2);    removeAll(); log(`Sold Cooked Salmon`);         play();'>Cooked Salmon - <img class='greenToPurple' width='10' src='sussyBakaCoin.png'/> 2</button>")
    }
    document.write("<br/>")
    if (inv2.includes("fishingRod")) {
        document.write("<button onclick='removeFromInvArray(`fishingRod`);       save();      addGoldToInvArray(3);    removeAll(); log(`Sold Fishing Rod`);         play();'>Fishing Rod - <img class='greenToPurple' width='10' src='sussyBakaCoin.png'/> 2</button>")
    }
    document.write("<br/>")
    if (inv2.includes("cookedPiranah")) {
        document.write("<button onclick='removeFromInvArray(`cookedPiranah`);       save();      addGoldToInvArray(4);    removeAll(); log(`Sold Cooked Piranah`);         play();'>Cooked Piranah - <img class='greenToPurple' width='10' src='sussyBakaCoin.png'/> 4</button>")
    }

    document.write("<br/>")
    if (inv2.includes("stoneSword")) {
        document.write("<button onclick='removeFromInvArray(`stoneSword`);       save();      addGoldToInvArray(4);    removeAll(); log(`Sold Stone Sword`);         play();'>Stone Sword - <img class='greenToPurple' width='10' src='sussyBakaCoin.png'/> 4</button>")
    }

    document.write("<br/>")
    if (inv2.includes("cookedAnglerfish")) {
        document.write("<button onclick='removeFromInvArray(`cookedAnglerfish`);       save();      addGoldToInvArray(8);    removeAll(); log(`Sold Cooked Anglerfish`);         play();'>Cooked Anglerfish - <img class='greenToPurple' width='10' src='sussyBakaCoin.png'/> 8</button>")
    }


}

function addToInvArray(item) {
    
    if (inv2.length < 30) {
        inv2.push(item);
        save();
    }else if (inv2.length >= 30) {
        log("Free up some inventory space")
    }
    play();
}
function removeFromInvArray(item) {
    var index = inv2.indexOf(item);
    if (index > -1) {
        inv2.splice(index, 1);
    }
    save();
    play();
}

function chanceAddToInvArray(item, chance) {
    //debugger;
    let random;
    random = Math.floor(Math.random() * (chance - 1 + 1)) + 1

    if (random === chance) {
        log(`You got a ${item}`)
        inv2.push(item)
    }
}

function addToBankArray(item) {
    bankContent.push(item)
    save();
}
function removeFromBankArray(item) {
    debugger;
    let index = bankContent.indexOf(item);
    if (index > -1) {
        bankContent.splice(index, 1);
    }
    save();
    
}
function removeGoldFromInvArray(amountOfGold) {
    while (amountOfGold > 0) {

        coins--;
        amountOfGold--;
    }
}
function addGoldToInvArray(amountOfGold) {
    while (amountOfGold > 0) {

        coins++;
        amountOfGold--;
    }
}
function addRandomAmountOfGold(min, max) {
    let add;

    add = Math.floor(Math.random() * (max - min + 1)) + min
    coins = coins + add
}

function addEXP(whatToLevel, oreVar) {
    //debugger;
    if (whatToLevel === "mining") {
        miningEXP = miningEXP + oreVar + equiped;
    }
    if (whatToLevel === "wc") {
        wcEXP = wcEXP + oreVar + equiped;
    }
    if (whatToLevel === "smelting") {
        smeltEXP = smeltEXP + oreVar;
    }
    if (whatToLevel === "smithing") {
        smithEXP = smithEXP + (Math.trunc(oreVar/2));
    }
    if (whatToLevel === "fishing") {
        fishingEXP = fishingEXP + oreVar + equiped;
    }
    if (whatToLevel === "cardio") {
        cardioEXP = cardioEXP + oreVar + (Math.trunc(exPoints/4));
    }
    if (whatToLevel === "cooking") {
        cookingEXP = cookingEXP + oreVar + COAL;
    }
    if (whatToLevel === "fighting") {
        fightingEXP = fightingEXP + oreVar - Math.round((10 - hp)/6)
        healthEXP = healthEXP + oreVar
    }
    if (whatToLevel === "defence") {
        defenceEXP = defenceEXP + oreVar - Math.round((10 - hp)/6)
        healthEXP = healthEXP + oreVar - 1
    }
    if (whatToLevel === "brightside") {
        fightingEXP = fightingEXP + oreVar + 2
        defenceEXP = defenceEXP + oreVar + 2
        cardioEXP = cardioEXP + 5
        healthEXP = healthEXP + 10
    }
    if (whatToLevel === "boulevard") {
        fightingEXP = fightingEXP + oreVar + 3
        defenceEXP = defenceEXP + oreVar + 3
        cardioEXP = cardioEXP + 7
        healthEXP = healthEXP + 12
    }
    if (whatToLevel === "neonTiger") {
        fightingEXP = fightingEXP + oreVar + 4
        defenceEXP = defenceEXP + oreVar + 4
        cardioEXP = cardioEXP + 8
        healthEXP = healthEXP + 13
    }if (whatToLevel === "kiki" || whatToLevel === "bouba") {
        fightingEXP = fightingEXP + oreVar + 5
        defenceEXP = defenceEXP + oreVar + 5
        cardioEXP = cardioEXP + 9
        healthEXP = healthEXP + 14
    }if (whatToLevel === "cemetaryGates") {
        fightingEXP = fightingEXP + oreVar + 6
        defenceEXP = defenceEXP + oreVar + 6
        cardioEXP = cardioEXP + 10
        healthEXP = healthEXP + 15
    }if (whatToLevel === "pompeii") {
        fightingEXP = fightingEXP + oreVar + 7
        defenceEXP = defenceEXP + oreVar + 7
        cardioEXP = cardioEXP + 11
        healthEXP = healthEXP + 16
    }if (whatToLevel === "frostbite") {
        fightingEXP = fightingEXP + oreVar + 8
        defenceEXP = defenceEXP + oreVar + 8
        cardioEXP = cardioEXP + 11
        healthEXP = healthEXP + 16
    }
    log("Gained EXP")
    showEXPInTable();
    save();
}

function specialRemoveHealth(baseDMG, shield_yesOrNo, bossConst, winItem, chance) {
    //debugger;
    let healthMinus
    if (shield_yesOrNo = true) {
        healthMinus = Math.round(Math.random() * (baseDMG))
    }
    if (shield_yesOrNo = false) {
        healthMinus = Math.round(Math.random() * (baseDMG/6))
    }

    hp = hp - healthMinus;
    log(`Took ${healthMinus} damage`)

    if (hp <= 0) {
        const random = Math.floor(Math.random() * inv2.length);
        const el = inv2.splice(random, 1)[0];
        console.log(el);
        log("You fainted, and lost a random item! You managed to get back to Contherium")
        travelLocation = 'Contherium';
        travelLocType = 'humanCity';
        hp = xpToLevel(healthEXP)
        play();
        save();
    }else {
        doDamageToBoss(equiped, bossConst, baseDMG, shield_yesOrNo, winItem, chance);
    }
    save();
}

function removeHealth(shield_yesOrNo, baseDMG) {
    let healthMinus;
    //debugger;
    if (shield_yesOrNo === false) {
        healthMinus = Math.round(Math.random() * 2 + (baseDMG) - xpToLevel(defenceEXP/4))
    }
    if (shield_yesOrNo === true) {
        healthMinus = 0
    }
    hp = hp - healthMinus;

    if (hp <= 0) {
        const random = Math.floor(Math.random() * array.length);
        const el = inv2.splice(random, 1)[0];
        console.log(el);
        log("You fainted, and lost a random item! You managed to get back to Contherium")
        travelLocation = Contherium;
        travelLocType = ["humanCity", "city"]
        hp = xpToLevel(healthEXP)
        play();
    }
    save();
}

function displayHealth() {
    document.write("<br/>")
    document.write(hp, `/${xpToLevel(healthEXP)} hp`)
}

function displayEat() {
    document.write("<br/>")
    if (inv2.includes("cookedCod")) {
        document.write("<button onclick='eat(COD, `cookedCod`)'>Cooked Cod</button>")
    }
    if (inv2.includes("cookedSalmon")) {
        document.write("<button onclick='eat(SALMON, `cookedSalmon`)'>Cooked Salmon</button>")
    }
    if (inv2.includes("cookedPiranah")) {
        document.write("<button onclick='eat(PIRANAH, `cookedPiranah`)'>Cooked Piranah</button>")
    }
    if (inv2.includes("cookedAnglerfish")) {
        document.write("<button onclick='eat(ANGLERFISH, `cookedAnglerfish`)'>Cooked Anglerfish</button>")
    }
}

function eat(num, item) {

    let hpToHeal;
    hpToHeal = Math.round(num/4)
    while(hpToHeal > 0) {
        if (hp < (xpToLevel(healthEXP))) {
            hp++;
            document.write("<br/>")
            document.write("You restored health")
        }
        removeFromInvArray(item)
        hpToHeal--
    }
    removeAll();
    play();
    displayEat();
}

function doDamageToBoss(weaponDMG, bossHealth, baseDMG, shield_yesOrNo, winItem, chance) {
    //debugger;
    let damage;
    let health = bossHealth

    damage = Math.round(Math.random() * (weaponDMG * 2))

    health = health - damage;
    log(`dealt ${damage} damage`)

    if (health <= 0) {
        log("You won!")
        chanceAddToInvArray(winItem, chance);
        play();
    }

    if (health > 0) {
        specialRemoveHealth(baseDMG, shield_yesOrNo, health, winItem, chance)
    }
}

function incBossCounter(boss) {
    //debugger;
    if (boss === "brightside") {
        brightsideKills++
    }else if (boss === "boulevard") {
        boulevardKills++
    }else if (boss === "neonTiger") {
        neonTigerKills++
    }else if (boss === "kiki") {
        kikiKills++
    }else if (boss === "bouba") {
        boubaKills++
    }else if (boss === "cemetaryGates") {
        cemetaryGatesKills++
    }else if (boss === "pompeii") {
        pompeiiKills++
    }else if (boss === "frostbite") {
        frostbiteKills++
    }
    save();

}

function boss() {
    //debugger;
    if (equipedType === "sword") {
        haveShield = false;
    }
    if (equipedName.includes("shield")) {
        haveShield = true;
    }
    if (travelLocation === "Lighthouse") {
        //debugger;
        //document.write("<br/>")
        //debugger;
        $(".brightsideButton").show()
    }
    if (travelLocation === "Boulevard") {
        //debugger;
        $(".boulevardButton").show()
    }
    if (travelLocation === "Axeldom Forest") {
        //debugger;
        $(".neonTigerButton").show()
    }
    if (travelLocation === "Kiki") {
        //debugger;
        $(".kikiButton").show()
    }
    if (travelLocation === "Bouba") {
        //debugger;
        $(".boubaButton").show()
    }
    if (travelLocation === "Cemetary") {
        //debugger;
        $(".cemetaryGatesButton").show()
    }
    if (travelLocation === "Volcano") {
        //debugger;
        $(".pompeiiButton").show()
    }
    if (travelLocation === "Ice Burg") {
        //debugger;
        $(".frostbiteButton").show()
    }

}



















function defenceType() {
    document.write("<br/>")

    //base level ones
    if (xpToLevel(fightingEXP) >= 0 && travelLocType.includes("orcCity")) {
        document.write(`<button onclick='removeAll(); removeHealth(true, 2); addEXP("defence", ORC); log("You killed an orc and have ${hp} hp"); play(); save()'>Orc</button>`)
        document.write("<div class='output-here'></div>")
    }
    if (xpToLevel(fightingEXP) >= 0 && travelLocType.includes("humanCity")) {
        document.write(`<button onclick='removeAll(); removeHealth(true, 4); addEXP("defence", BRAWLER); log("You killed a brawler and have ${hp} hp"); play(); save()'>Brawler</button>`)
        document.write("<div class='output-here'></div>")
    }
    if (xpToLevel(fightingEXP) >= 0 && travelLocType.includes("humanCity")) {
        document.write(`<button onclick='removeAll(); removeHealth(true, 2); addEXP("defence", MUGGER); addRandomAmountOfGold(0, 2); log("You killed a mugger and have ${hp} hp"); play(); save()'>Mugger</button>`)
        document.write("<div class='output-here'></div>")
    }



    //levelled ones
    if (xpToLevel(fightingEXP) >= 5 && travelLocation === "Ravine") {
        document.write(`<button onclick='removeAll(); removeHealth(true, 4); addEXP("defence", SPIDER); log("You killed a spider and have ${hp} hp"); play(); save()'>Spider</button>`)
        document.write("<div class='output-here'></div>")
    }
    if (xpToLevel(fightingEXP) >= 10 && travelLocation === "Ravine") {
        document.write(`<button onclick='removeAll(); removeHealth(true, 7); addEXP("defence", GIANTSPIDER); log("You killed a giant spider and have ${hp} hp"); play(); save()'>Giant Spider</button>`)
        document.write("<div class='output-here'></div>")
    }

    //cemetary
    if (xpToLevel(fightingEXP) >= 12 && travelLocation === "Cemetary") {
        document.write(`<button onclick='removeAll(); removeHealth(true, 9); addEXP("defence", GRAVEROBBER); log("You killed a grave robber and have ${hp} hp"); play(); save()'>Grave Robber</button>`)
        document.write("<div class='output-here'></div>")
    }
    if (xpToLevel(fightingEXP) >= 20 && travelLocation === "Cemetary") {
        document.write(`<button onclick='removeAll(); removeHealth(true, 14); addEXP("defence", GHOST); log("You 'killed'? a ghost and have ${hp} hp"); play(); save()'>Ghost</button>`)
        document.write("<div class='output-here'></div>")
    }

    //volcano
    if (xpToLevel(fightingEXP) >= 25 && travelLocation === "Volcano") {
        document.write(`<button onclick='removeAll(); removeHealth(true, 19); addEXP("defence", MINORFIRESPIRIT); log("You killed a minor fire spirit and have ${hp} hp"); play(); save()'>Minor Fire Spirit</button>`)
        document.write("<div class='output-here'></div>")
    }
    if (xpToLevel(fightingEXP) >= 40 && travelLocation === "Volcano") {
        document.write(`<button onclick='removeAll(); removeHealth(true, 29); addEXP("defence", MAJORFIRESPIRIT); log("You killed a major fire spirit and have ${hp} hp"); play(); save()'>Major Fire Spirit</button>`)
        document.write("<div class='output-here'></div>")
    }


}
function fightingType() {
    document.write("<br/>")

    //base level ones
    if (xpToLevel(fightingEXP) >= 0 && travelLocType.includes("orcCity")) {
        document.write(`<button onclick='removeAll(); removeHealth(false, 3); addEXP("fighting", ORC); addToInvArray(orcFlesh); log("You killed an orc and have ${hp} hp"); play(); save()'>Orc</button>`)
        document.write("<div class='output-here'></div>")
    }
    if (xpToLevel(fightingEXP) >= 0 && travelLocType.includes("humanCity")) {
        document.write(`<button onclick='removeAll(); removeHealth(false, 5); addEXP("fighting", BRAWLER); addToInvArray(stoneSword); log("You killed a brawler and have ${hp} hp"); play(); save()'>Brawler</button>`)
        document.write("<div class='output-here'></div>")
    }
    if (xpToLevel(fightingEXP) >= 0 && travelLocType.includes("humanCity")) {
        document.write(`<button onclick='removeAll(); removeHealth(false, 3); addEXP("fighting", MUGGER); addRandomAmountOfGold(1, 4); log("You killed a mugger and have ${hp} hp"); play(); save()'>Mugger</button>`)
        document.write("<div class='output-here'></div>")
    }



    //leveled ones
    if (xpToLevel(fightingEXP) >= 5 && travelLocation === "Ravine") {
        document.write(`<button onclick='removeAll(); removeHealth(false, 5); addEXP("fighting", SPIDER); addToInvArray(venomDuct); log("You killed a spider and have ${hp} hp"); play(); save()'>Spider</button>`)
        document.write("<div class='output-here'></div>")
    }
    if (xpToLevel(fightingEXP) >= 10 && travelLocation === "Ravine") {
        document.write(`<button onclick='removeAll(); removeHealth(false, 8); addEXP("fighting", GIANTSPIDER); addToInvArray(venomDuct); log("You killed a giant spider and have ${hp} hp"); play(); save()'>Giant Spider</button>`)
        document.write("<div class='output-here'></div>")
    }

    //cemetary
    if (xpToLevel(fightingEXP) >= 12 && travelLocation === "Cemetary") {
        document.write(`<button onclick='removeAll(); removeHealth(true, 10); addEXP("defence", GRAVEROBBER); addToInvArray(graveSpade); log("You killed a grave robber and have ${hp} hp"); play(); save()'>Grave Robber</button>`)
        document.write("<div class='output-here'></div>")
    }
    if (xpToLevel(fightingEXP) >= 20 && travelLocation === "Cemetary") {
        document.write(`<button onclick='removeAll(); removeHealth(true, 15); addEXP("defence", GHOST + 5); log("You 'killed'? a ghost and have ${hp} hp"); play(); save()'>Ghost</button>`)
        document.write("<div class='output-here'></div>")
    }

    //volcano
    if (xpToLevel(fightingEXP) >= 25 && travelLocation === "Volcano") {
        document.write(`<button onclick='removeAll(); removeHealth(true, 20); addEXP("defence", MINORFIRESPIRIT); addToInvArray(blowtorch); log("You killed a minor fire spirit and have ${hp} hp"); play(); save()'>Minor Fire Spirit</button>`)
        document.write("<div class='output-here'></div>")
    }
    if (xpToLevel(fightingEXP) >= 40 && travelLocation === "Volcano") {
        document.write(`<button onclick='removeAll(); removeHealth(true, 30); addEXP("defence", MAJORFIRESPIRIT); addToInvArray(gasContainer); log("You killed a major fire spirit and have ${hp} hp"); play(); save()'>Major Fire Spirit</button>`)
        document.write("<div class='output-here'></div>")
    }

}








//mining
function mineType() {
    //debugger;
    //document.write("<br/>")
    $(".miningScreenBR").show()

    if (xpToLevel(miningEXP) >= 0) {
        //debugger;
        $(".rockButton").show()
    }
    if (xpToLevel(miningEXP) >= 5) {
        $(".coalButton").show()
    }
    if (xpToLevel(miningEXP) >= 10) {
        $(".tinButton").show()
    }
    if (xpToLevel(miningEXP) >= 11) {
        $(".copperButton").show()
    }
    if (xpToLevel(miningEXP) >= 15 && (equipedType === ("bronzePickaxe") || equipedType === ("ironPickaxe") || equipedType === ("diamondPickaxe")) && travelLocation === ("Sand Mine")) {
        $(".ironButton").show()
    }
    if (xpToLevel(miningEXP) >= 30 && (equipedType === ("ironPickaxe") || equipedType === ("diamondPickaxe")) && travelLocation === ("Gemeroth Mine")) {
        $(".diamondButton").show()
    }

    //gold
    if (xpToLevel(miningEXP) >= 11 && (equipedType === ("bronzePickaxe") || equipedType === ("ironPickaxe") || equipedType === ("diamondPickaxe")) && travelLocation === ("Talmon Mine")) {
        $(".goldButton").show()
    }

}
//woodcutting
function wcType() {
    
    $(".wcScreenBR").show()
    if (xpToLevel(wcEXP) >= 0 && ! travelLocType.includes("cardio")) {
        $(".oakButton").show()
    }
    if (xpToLevel(wcEXP) >= 5 && ! travelLocType.includes("cardio")) {
        $(".willowButton").show()
    }
    if (xpToLevel(wcEXP) >= 10 && ! travelLocType.includes("cardio")) {
        $(".beechButton").show()
    }
    if (xpToLevel(wcEXP) >= 18 && ! travelLocType.includes("cardio")) {
        $(".ivyButton").show()
    }
    if (xpToLevel(wcEXP) >= 25 && ! travelLocType.includes("cardio")) {
        $(".palmButton").show()
    }
    if (xpToLevel(wcEXP) >= 36 && ! travelLocType.includes("cardio")) {
        $(".redwoodButton").show()
    }
    if (xpToLevel(wcEXP) >= 47 && ! travelLocType.includes("cardio")) {
        $(".yewButton").show()
    }


    if (xpToLevel(wcEXP) >= 60 && travelLocation === ("Volcano")) {
        $(".redwoodButton").show()
        numOfDragonBloodTrees--;
        save();
    }

}
function cardio() {
    $(".cardioScreenBR").show()
    if (travelLocation === "Lighthouse") {
        $(".lighthouseButton").show()
        exPoints--;
    }
    if (travelLocation === "Ravine") {
        $(".ravineButton").show()
        exPoints--;
    }
    if (travelLocation === "Volcano") {
        $(".volcanoButton").show()
        exPoints--;
    }
}



function fishingType() {
    //debugger;
    document.write("<br/>")


    if (inv2.includes(lavaGlove)) {

        if (xpToLevel(fishingEXP) >= 0 && equipedType === ("fishingRod") && inv2.includes(bait)) {
            document.write("<button onclick='removeAll(); addEXP(`fishing`, COD); addToInvArray(cookedCod); removeFromInvArray(bait); save(); log(`You caught a cod`); play();'>Cod</button>")
            document.write("<div class='output-here'></div>")
        }
        if (xpToLevel(fishingEXP) >= 5 && equipedType === ("fishingRod") && inv2.includes(bait)) {
            document.write("<button onclick='removeAll(); addEXP(`fishing`, SALMON); addToInvArray(cookedSalmon); removeFromInvArray(bait); save(); log(`You caught a salmon`); play();'>Salmon</button>")
            document.write("<div class='output-here'></div>")
        }
        if (xpToLevel(fishingEXP) >= 11 && equipedType === ("fishingRod") && inv2.includes(bait) && travelLocation === ("West Beach")) {
            document.write("<button onclick=removeAll(); 'addEXP(`fishing`, CLOWNFISH); addToInvArray(clownfish); removeFromInvArray(bait); save(); log(`You caught a cod`); play();'>Clown Fish</button>")
            document.write("<div class='output-here'></div>")
        }
        if (xpToLevel(fishingEXP) >= 19 && equipedType === ("fishingRod") && inv2.includes(bait) && travelLocation === ("Sand Beach")) {
            document.write("<button onclick='removeAll(); addEXP(`fishing`, PIRANAH); addToInvArray(cookedPiranah); removeFromInvArray(bait); save(); log(`You caught a piranah`); play();'>Piranah</button>")
            document.write("<div class='output-here'></div>")
        }
        if (xpToLevel(fishingEXP) >= 30 && equipedType === ("fishingRod") && inv2.includes(bait) && travelLocation === ("East Beach")) {
            document.write("<button onclick='removeAll(); addEXP(`fishing`, ANGLERFISH); addToInvArray(cookedAnglerfish); removeFromInvArray(bait); save(); log(`You caught an angler fish`); play();'>Angler Fish</button>")
            document.write("<div class='output-here'></div>")
        }
    }

    else {

        if (xpToLevel(fishingEXP) >= 0 && equipedType === ("fishingRod") && inv2.includes(bait)) {
            document.write("<button onclick='removeAll(); addEXP(`fishing`, COD); addToInvArray(cod); removeFromInvArray(bait); save(); log(`You caught a cooked cod`); play();'>Cod</button>")
            document.write("<div class='output-here'></div>")
        }
        if (xpToLevel(fishingEXP) >= 5 && equipedType === ("fishingRod") && inv2.includes(bait)) {
            document.write("<button onclick='removeAll(); addEXP(`fishing`, SALMON); addToInvArray(salmon); removeFromInvArray(bait); save(); log(`You caught a cooked salmon`); play();'>Salmon</button>")
            document.write("<div class='output-here'></div>")
        }
        if (xpToLevel(fishingEXP) >= 11 && equipedType === ("fishingRod") && inv2.includes(bait) && travelLocation === ("West Beach")) {
            document.write("<button onclick=removeAll(); 'addEXP(`fishing`, CLOWNFISH); addToInvArray(clownfish); removeFromInvArray(bait); save(); log(`You caught a clownfish`); play();'>Clown Fish</button>")
            document.write("<div class='output-here'></div>")
        }
        if (xpToLevel(fishingEXP) >= 19 && equipedType === ("fishingRod") && inv2.includes(bait) && travelLocation === ("Sand Beach")) {
            document.write("<button onclick='removeAll(); addEXP(`fishing`, PIRANAH); addToInvArray(piranah); removeFromInvArray(bait); save(); log(`You caught a cooked piranah`); play();'>Piranah</button>")
            document.write("<div class='output-here'></div>")
        }
        if (xpToLevel(fishingEXP) >= 30 && equipedType === ("fishingRod") && inv2.includes(bait) && travelLocation === ("East Beach")) {
            document.write("<button onclick='removeAll(); addEXP(`fishing`, ANGLERFISH); addToInvArray(anglerfish); removeFromInvArray(bait); save(); log(`You caught an cooked anglerfish`); play();'>Angler Fish</button>")
            document.write("<div class='output-here'></div>")
        }
    }
}
function cookingType() {
    document.write("<br/>") //add cooked cod image
    if (inv2.includes(coal)){
        if (xpToLevel(cookingEXP) >= 0 && inv2.includes("cod")) {
            document.write("<button onclick='removeAll(); addEXP(`cooking`, COD); addToInvArray(cookedCod); removeFromInvArray(cod); removeFromInvArray(coal); log(`You cooked a cod`); save(); play()'>Cod</button>")
            document.write("<div class='output-here'></div>")
        }
        if (xpToLevel(cookingEXP) >= 0 && inv2.includes("salmon")) {
            document.write("<button onclick='removeAll(); addEXP(`cooking`, SALMON); addToInvArray(cookedSalmon); removeFromInvArray(salmon); removeFromInvArray(coal); log(`You cooked a Salmon`); save(); play()'>Salmon</button>")
            document.write("<div class='output-here'></div>")
        }
        if (xpToLevel(cookingEXP) >= 0 && inv2.includes("piranah")) {
            document.write("<button onclick='removeAll(); addEXP(`cooking`, PIRANAH); addToInvArray(cookedPiranah); removeFromInvArray(piranah); removeFromInvArray(coal); log(`You cooked a Piranah`); save(); play()'>Piranah</button>")
            document.write("<div class='output-here'></div>")
        }
        if (xpToLevel(cookingEXP) >= 0 && inv2.includes("anglerfish")) {
            document.write("<button onclick='removeAll(); addEXP(`cooking`, ANGLERFISH); addToInvArray(cookedAnglerfish); removeFromInvArray(anglerfish); removeFromInvArray(coal); log(`You cooked an Anglerfish`); save(); play()'>Anglerfish</button>")
            document.write("<div class='output-here'></div>")
        }
    }
}
function smeltType() {
    document.write("<br/>")
    if (inv2.includes("coal")) {
        if (xpToLevel(smeltEXP) >= 0 && inv2.includes("tin") && inv2.includes("copper")) {
            document.write("<button onclick='addEXP(`smelting`, BRONZE); addToInvArray(bronze); removeFromInvArray(coal); removeFromInvArray(tin); removeFromInvArray(copper); save(); removeAll(); log(`You smelted Bronze`); play();'>Bronze</button>")
            document.write("<div class='output-here'></div>")
        }
        if (xpToLevel(smeltEXP) >= 10 && inv2.includes("iron")) {
            document.write("<button onclick='addEXP(`smelting`, IRON); addToInvArray(ironBar);  removeFromInvArray(coal); removeFromInvArray(iron); save(); removeAll(); log(`You smelted Iron Bar`); play();'>Iron Bar</button>")
            document.write("<div class='output-here'></div>")
        }

        //gold
        if (xpToLevel(smeltEXP) >= 10 && inv2.includes("gold")) {
             document.write("<button onclick='addEXP(`smelting`, GOLD); coins++;  removeFromInvArray(coal); removeFromInvArray(gold); save(); removeAll(); log(`You smelted Gold Coin`); play();'>Gold Coin</button>")
            document.write("<div class='output-here'></div>")
        }
    }
}
function smithType() {
    //pcikaxes
    document.write("<br/>")
    if (xpToLevel(smithEXP) >= 0 && inv2.includes("bronze") && inv2.includes("oakLog")) {
        document.write("<button onclick='addEXP(`smithing`, BRONZEPICKAXE); addToInvArray(bronzePickaxe); removeFromInvArray(`bronze`); removeFromInvArray(`oakLog`); save(); removeAll(); log(`You smithed a bronze pickaxe`); play();'>Bronze Pickaxe</button>")
        document.write("<div class='output-here'></div>")
    }
    if (xpToLevel(smithEXP) >= 10 && inv2.includes("ironBar") && inv2.includes("oakLog")) {
        document.write("<button onclick='addEXP(`smithing`, IRONPICKAXE); addToInvArray(ironPickaxe); removeFromInvArray(`ironBar`); removeFromInvArray(`oakLog`); save(); removeAll(); log(`You smithed a iron pickaxe`); play();'>Iron Pickaxe</button>")
        document.write("<div class='output-here'></div>")
    }

    //axes
    if (xpToLevel(smithEXP) >= 15 && inv2.includes("bronze") && inv2.includes("oakLog")) {
        document.write("<button onclick='addEXP(`smithing`, BRONZEAXE); addToInvArray(bronzeAxe); removeFromInvArray(`bronze`); removeFromInvArray(`oakLog`); save(); removeAll(); log(`You smithed a bronze axe`); play();'>Bronze Axe</button>")
        document.write("<div class='output-here'></div>")
    }
    if (xpToLevel(smithEXP) >= 20 && inv2.includes("ironBar") && inv2.includes("oakLog")) {
        document.write("<button onclick='addEXP(`smithing`, IRONAXE); addToInvArray(ironAxe); removeFromInvArray(`ironBar`); removeFromInvArray(`oakLog`); save(); removeAll(); log(`You smithed a iron axe`); play();'>Iron Axe</button>")
        document.write("<div class='output-here'></div>")
    }

     //swords
     if (xpToLevel(smithEXP) >= 5 && inv2.includes("bronze") && inv2.includes("oakLog")) {
        document.write("<button onclick='addEXP(`smithing`, BRONZESWORD); addToInvArray(bronzeSword); removeFromInvArray(`bronze`); removeFromInvArray(`oakLog`); save(); removeAll(); log(`You smithed a bronze sword`); play();'>Bronze Sword</button>")
        document.write("<div class='output-here'></div>")
    }
    if (xpToLevel(smithEXP) >= 15 && inv2.includes("ironBar") && inv2.includes("oakLog")) {
        document.write("<button onclick='addEXP(`smithing`, IRONSWORD); addToInvArray(ironSword); removeFromInvArray(`ironBar`); removeFromInvArray(`oakLog`); save(); removeAll(); log(`You smithed a iron sword`); play();'>Iron Sword</button>")
        document.write("<div class='output-here'></div>")
    }

    //shield
    if (xpToLevel(smithEXP) >= 5 && inv2.includes("oakLog") && inv2.includes("ironBar")) {
        document.write("<button onclick='removeAll(); addEXP(`smithing`, SHIELD); addToInvArray(shield); removeFromInvArray(`ironBar`); removeFromInvArray(`oakLog`); save(); log(`You smithed a shield`); play();'>Shield</button>")
        document.write("<div class='output-here'></div>")
    }
}





















save();
function skill() {
    $(".hideThis").hide()
    $(".skillScreenButton").hide()
    //debugger;
	log("Hit Skill Key")
    if (travelLocType.includes("mine") && equipedType === "pickaxe") {
        //debugger;
        $(".miningButton").show()
    }
    if (travelLocType.includes("wc") && equipedType === "axe") {
        $(".wcButton").show()
    }
    if (travelLocType.includes("cardio")) {
        $(".cardioButton").show()
    }
    if (equipedName.includes("Sword")) {
        $(".fightingButton").show()         //to be designed!
    }
    if (travelLocType.includes("fishing") && equipedType === "fishingRod") {
        $(".fishingButton").show()
    }
    if (travelLocType.includes("city")) {
        $(".cookingButton").show()
    }
    if (travelLocType.includes("city")) {
        $(".smeltingButton").show()
    }
    if (travelLocType.includes("city")) {
        $(".smithingButton").show()
    }
    if (travelLocType.includes("farm")) {
        $(".farmingButton").show()
    }
    /*if (travelLocation === ("Volcano")) {
        $(".wcButton").show()
    }*/
    if (equipedName.includes("shield")) {
        $(".defenceButton").show()           //to be designed!
    }
    /*else if (travelLocType === "unclassified") {

        document.write("Not in suitable location for skilling")
    }
    else {
        document.write("<br/>Try equiping the right equipment.")
    }*/
    save();
}

function displayAllEXP() {
    //debugger;
    document.write("<br/>")
    document.write("Total Level: ", xpToLevel(miningEXP) + xpToLevel(wcEXP) + xpToLevel(fightingEXP) + xpToLevel(fishingEXP) + xpToLevel(cookingEXP) + xpToLevel(smeltEXP) + xpToLevel(smithEXP) + xpToLevel(healthEXP) + xpToLevel(defenceEXP))
    document.write("<br/>")
    document.write("Total EXP: ", parseInt(miningEXP) + parseInt(wcEXP) + parseInt(fightingEXP) + parseInt(fishingEXP) + cookingEXP + smeltEXP + smithEXP + healthEXP + defenceEXP)
    //document.write("<br/> cba to make this rn")
}

function stats() {
    removeAll();
    play();
    document.write("<br/>")
    document.write("<div class='output-here'></div>")

    document.write(`<button class='statsButton' onclick='displayEXP(miningEXP)'><img src='itemSprites/miningIcon.png'/> ${xpToLevel(miningEXP)}/99</button>`);
    document.write(`<button class='statsButton' onclick='displayEXP(wcEXP)'><img src='itemSprites/wcIcon.png'/> ${xpToLevel(wcEXP)}/99</button>`);
    document.write(`<button class='statsButton' onclick='displayEXP(cardioEXP)'><img src='itemSprites/cardioIcon.png'/> ${xpToLevel(cardioEXP)}/99</button>`);
    document.write("<br/>")
    document.write(`<button class='statsButton' onclick='displayEXP(fightingEXP)'><img src='itemSprites/fightingIcon.png'/> ${xpToLevel(fightingEXP)}/99</button>`);
    document.write(`<button class='statsButton' onclick='displayEXP(fishingEXP)'><img src='itemSprites/fishingIcon.png'/> ${xpToLevel(fishingEXP)}/99</button>`);
    document.write(`<button class='statsButton' onclick='displayEXP(cookingEXP)'><img src='itemSprites/cookingIcon.png'/> ${xpToLevel(cookingEXP)}/99</button>`);
    document.write("<br/>")
    document.write(`<button class='statsButton' onclick='displayEXP(smeltEXP)'><img src='itemSprites/smeltIcon.png'/> ${xpToLevel(smeltEXP)}/99</button>`);
    document.write(`<button class='statsButton' onclick='displayEXP(smithEXP)'><img src='itemSprites/smithIcon.png'/> ${xpToLevel(smithEXP)}/99</button>`);
    document.write(`<button class='statsButton' onclick='displayEXP(healthEXP)'><img src='itemSprites/heartIcon.png'/> ${xpToLevel(healthEXP)}/99</button>`);
    document.write("<br/>")
    document.write(`<button class='statsButton' onclick='displayEXP(defenceEXP)'><img src='itemSprites/defenceIcon.png'/> ${xpToLevel(defenceEXP)}/99</button>`);


    document.write(`<button onclick='displayAllEXP()' class="statsButton"><img  width="30" src='wraithfate.png'/> ${xpToLevel(miningEXP) + xpToLevel(wcEXP) + xpToLevel(fightingEXP) + xpToLevel(fishingEXP) + xpToLevel(cookingEXP) + xpToLevel(smeltEXP) + xpToLevel(smithEXP) + xpToLevel(healthEXP) + xpToLevel(defenceEXP)}/990</button>`)



    /*document.write("<button class='statsButton'>Total Level <script>document.write(Math.trunc(Math.cbrt                                                                              (localStorage.getItem('smithEXP_ls')) + (Math.trunc(Math.cbrt(localStorage.getItem('smeltEXP_ls')) + (Math.trunc(Math.cbrt(localStorage.getItem('cookingEXP_ls')) + (Math.trunc(Math.cbrt(localStorage.getItem('fishingEXP_ls')) + (Math.trunc(Math.cbrt(localStorage.getItem('fishingEXP_ls')) + (Math.trunc(Math.cbrt(localStorage.getItem('fightingEXP_ls')) + (Math.trunc(Math.cbrt(localStorage.getItem('cardioEXP_ls')) + (Math.trunc(Math.cbrt(localStorage.getItem('wcEXP_ls')) + (Math.trunc(Math.cbrt(localStorage.getItem('miningEXP_ls')))</script>/792</button>");
    log("mining level " + xpToLevel(miningEXP)
    log("woodcutting level " + xpToLevel(wcEXP))
    log("cardio level " + xpToLevel(cardioEXP))
    log("fighting level " + xpToLevel(fightingEXP))
    log("fishing level " + xpToLevel(fishingEXP))
    log("cooking level " + xpToLevel(cookingEXP))
    log("smelting level " + xpToLevel(smeltEXP))
    log("smithing level " + xpToLevel(smithEXP))
    log("farming level " + xpToLevel(farmEXP))*/
    //log("total level " + xpToLevel(farmEXP)+xpToLevel(smithEXP))
}
save();

function displayEXP(skill) {
    document.write("<br/>");
    document.write("level: " + xpToLevel(skill));
    document.write("<br/>");
    document.write("exp: " + skill);
    document.write("<br/>");
    document.write("Next level at: " + Math.round(Math.pow((xpToLevel(skill) + 1), 4)));
    document.write("<br/>");
    xpToNextLevel(skill)
}

function equip(item, itemName, itemType) {
    //debugger;
    equiped = item;
    equipedName = itemName;
    equipedType = itemType;
    if (equipedType === "fireStarter") {
        fireStarterLives = item;
    }
    save();
    removeAll();
    log(`Equiped ` + itemName);
    showEquipedItem()
    play();
}
function invDisplay() {
    document.write("<br/>")
    arrayTextToImage();
    document.write("<br/>Total items: " + inv2.length)
    if (inv2.length >= 30) {
        document.write("<br/>Free up some inventory space")
    }
    document.write("<hr/>")

}

function arrayTextToImage() {


    //image with equipment
    imageWithEquipment("stonePickaxe", "Stone Pickaxe", STONEPICKAXE, "pickaxe");
    imageWithEquipment("stoneAxe", "Stone Axe", STONEAXE, "axe");
    imageWithEquipment("stoneSword", "Stone Sword", STONESWORD, "sword");
    imageWithEquipment("brightSword", "Bright Sword", BRIGHTSWORD, "sword")
    imageWithEquipment("bronzePickaxe", "Bronze Pickaxe", BRONZEPICKAXE, "pickaxe");
    imageWithEquipment("bronzeAxe", "Bronze Axe", BRONZEAXE, "axe");
    imageWithEquipment("ironAxe", "Iron Axe", IRONAXE, "axe")
    imageWithEquipment("bronzeSword", "Bronze Sword", BRONZESWORD, "sword");
    imageWithEquipment("fishingRod", "Fishing Rod", FISHINGROD, "fishingRod");
    imageWithEquipment("shield", "Shield", SHIELD, "shield")
    imageWithEquipment("lonelyRope", "Lonely Rope", FISHINGROD, "fishingRod")
    imageWithEquipment("graveSpade", "Grave Spade", GRAVESPADE, "spade")
    imageWithEquipment("blowtorch", "Blowtorch", BLOWTORCH, "fireStarter")
    imageWithEquipment("neonFang", "Neon Fang", NEONFANG, "sword")
    imageWithEquipment("kikiSpike", "Kiki Spike", KIKISPIKE, "pickaxe")
    imageWithEquipment("boubaClub", "Bouba Club", BOUBACLUB, "axe")
    imageWithEquipment("sythe", "Sythe", SYTHE, "sythe")
    imageWithEquipment("stoneSythe", "Stone Sythe", STONESYTHE, "sythe")
    imageWithEquipment("iceShard", "Ice Shard", ICESHARD, "sword")

  

    function imageWithEquipment(itemVarName1, itemName1, constVar1, itemType1) {
        //debugger;
        if (inv2.includes(itemVarName1)) {
            let itemVarName = itemVarName1
            let itemName = itemName1
            let constVar = constVar1
            let itemType = itemType1

            $(".invScreenButton").show()
            $(".invButton").show()

            let number = 0;
            let Num = inv2.filter(item => item === itemVarName).length

            while (Num >= 1) {
                number++
                Num--
            }

            $(".invNumberSpan").html(number);
            $(".invNameSpan").html("  " + itemName);
        }
    }

    function image(itemVarName, itemName) {
        if (inv2.includes(itemVarName)) {
            document.write("<br/>");
            document.write(`<button class='invButton' ><img width='50' src='itemSprites/${itemVarName}.png' onhover='Equip' /></button>`)

            let number = 0;
            let Num = inv2.filter(item => item === itemVarName).length

            while (Num >= 1) {
                number++
                Num--
            }

            document.write(number);
            document.write(" " + itemName)
        }
    }

}









function showInvInTable() {
    let counterAt0 = 0;
    let counterAt1 = 1;
	let invLength = inv2.length
    
    //debugger;
    while (invLength > 0) {
		let invItem = inv2[counterAt0]
		let invItem1 = inv2[counterAt1]
        //debugger;
        $(`.invSlot${counterAt1}`).html(invItem.itemName)
        $(`.invSlot${counterAt1}Button`).html(`<img width="50" src="itemSprites/${invItem.item}.png"></img>`)
	    //debugger;
        if ((invItem).equipable === true) {
			//debugger;
            $(`.invSlot${counterAt1}Button`).click(function() {
				equip(invItem.number, invItem.item, invItem.type)
			});
        }
        if (inv2[counterAt0] === undefined) {
            $(`.invSlot${counterAt1}`).html("&nbsp")
        }
        counterAt0++
        counterAt1++
		invLength--
    }
    
    
}

function consoleLog(text) {
    console.log(text)
}




function defineAllItems() {
	debugger
	
}

function showEXPInTable() {
    //debugger;
    $(`.miningStatTable`).html(xpToLevel(miningEXP));
    $(`.wcStatTable`).html(xpToLevel(wcEXP));
    $(`.cardioStatTable`).html(xpToLevel(cardioEXP));
    $(`.fightingStatTable`).html(xpToLevel(fightingEXP));
    $(`.fishingStatTable`).html(xpToLevel(fishingEXP));
    $(`.cookingStatTable`).html(xpToLevel(cookingEXP));
    $(`.smeltStatTable`).html(xpToLevel(smeltEXP));
    $(`.smithStatTable`).html(xpToLevel(smithEXP));
    $(`.healthStatTable`).html(xpToLevel(healthEXP));
    $(`.defenceStatTable`).html(xpToLevel(defenceEXP));


}

function showEquipedItem() {
    if (equipedName != "") {
	$(".equipedItemBox").attr("src", `itemSprites/${equipedName}.png`);
    }
}


function displayLocationBasedImages() {

    $(".locationImageBox").attr("src", "itemSprites/undefined.png")



    //skill images that show in the first 10 slots :)
    if (travelLocType.includes("mine")) {
	$(".miningImage").attr("src", "itemSprites/miningIcon.png")
    }
    if (travelLocType.includes("wc")) {
	$(".wcImage").attr("src", "itemSprites/wcIcon.png")
    }
    if (travelLocType.includes("cardio")) {
	$(".cardioImage").attr("src", "itemSprites/cardioIcon.png")
    }
    if (travelLocType.includes("fighting")) {
	$(".fightingImage").attr("src", "itemSprites/fightingIcon.png")
    }
    if (travelLocType.includes("fishing")) {
	$(".fishingImage").attr("src", "itemSprites/fishingIcon.png")
    }
    if (travelLocType.includes("city")) {
	$(".miningImage").attr("src", "itemSprites/cookingIcon.png")
    }
    if (travelLocType.includes("city")) {
	$(".miningImage").attr("src", "itemSprites/smeltIcon.png")
    }
    if (travelLocType.includes("city")) {
	$(".miningImage").attr("src", "itemSprites/smithIcon.png")
    }
    if (travelLocType.includes("fighting")) {
	$(".healthImage").attr("src", "itemSprites/heartIcon.png")
    }
    if (travelLocType.includes("fighting")) {
	$(".defenceImage").attr("src", "itemSprites/defenceIcon.png")
    }



    //Boss images and city ones, for the latter ten slots :)
    if (travelLocType.includes("bouba")) {
	$(".boubaImage").attr("src", "itemSprites/bouba.png")
    }
    if (travelLocType.includes("boulevard")) {
	$(".boulevardImage").attr("src", "itemSprites/boulevard.png")
    }
    if (travelLocType.includes("brightside")) {
	$(".brightsideImage").attr("src", "itemSprites/brightside.png")
    }
    if (travelLocType.includes("cemetaryGates")) {
	$(".cemetaryGatesImage").attr("src", "itemSprites/cemetaryGates.png")
    }
    if (travelLocType.includes("frostbite")) {
	$(".frostbiteImage").attr("src", "itemSprites/frostbite.png")
    }
    if (travelLocType.includes("kiki")) {
	$(".kikiImage").attr("src", "itemSprites/kiki.png")
    }
    if (travelLocType.includes("neonTiger")) {
	$(".neonTigerImage").attr("src", "itemSprites/neonTiger.png")
    }
    if (travelLocType.includes("pompeii")) {
	$(".pompeiiImage").attr("src", "itemSprites/pompeii.png")
    }
    if (travelLocType.includes("humanCity")) {
	$(".humanCityImage").attr("src", "itemSprites/placeHolder.png")
    }
    if (travelLocType.includes("orcCity")) {
	$(".orcCityImage").attr("src", "itemSprites/placeHolder.png")
    }

}

function eraseLogBook() {
    //see if the amount of text inside log book ecsedes 200 and if so it deletes them.
    console.log($(".output-here").text().length)

    if (($(".output-here").text().length) > 200) //<--- well this used to be 200, might not be now XD
    $(".output-here").html("")
   

}

function chatNPC() {
    let lengthOfNPCArray = arrayOfNPCs.length

    for (let counter_for_items_in_npc_array_starting_at_0 = 0; counter_for_items_in_npc_array_starting_at_0 < lengthOfNPCArray; counter_for_items_in_npc_array_starting_at_0++) {
	//console.log(arrayOfNPCs[counter_for_items_in_npc_array_starting_at_0]) //just fr testing will delete.

	//debugger;
	if (arrayOfNPCs[counter_for_items_in_npc_array_starting_at_0].startingLocation === travelLocation) { //if the NPC is in the same location as you it does the below stuff with it
	    npc_name = arrayOfNPCs[counter_for_items_in_npc_array_starting_at_0].name
	    //console.log(arrayOfNPCs[counter_for_items_in_npc_array_starting_at_0].name)
	    $(".NPCButtons").show()
	    $(".NPCButtons").html("")
	    $(".NPCButtons").html($(".NPCButtons").html() + `<button onclick="NPC_functions(${npc_name})">${npc_name}</button>`)
	    
	}
    }
}

//This function displays all the available tyhings you can do with NPCs like quests and chatting and buying
function NPC_functions(npc_name) {
    
}

