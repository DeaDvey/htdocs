//function reload() {
    //location. reload()
//}
//setInterval(reload, 10000)



let inv2_save = localStorage.getItem("inv2_ls");
    if (inv2_save !== null) {
        inv2 = JSON.parse(inv2_save);
        
        
    }
    

    
locBasedImage("mine", "miningIcon")
locBasedImage("wc", "wcIcon")
locBasedImage("cardio", "cardioIcon")
locBasedImage("fighting", "fightingIcon")
locBasedImage("fishing", "fishingIcon")
locBasedImage("city", "cookingIcon")
locBasedImage("city", "smeltIcon")
locBasedImage("city", "smithIcon")
locBasedImage("farm", "farmIcon")
locBasedImage("brightside", "brightside")
locBasedImage("boulevard", "boulevard")
locBasedImage("neon tiger", "neonTiger")
locBasedImage("kiki", "kiki")
locBasedImage("bouba", "bouba")
locBasedImage("cemetaryGates", "cemetaryGates")
locBasedImage("pompeii", "pompeii")
locBasedImage("frostbite", "frostbite")
    
function locBasedImage(locTypeName, imgSrc) {

    if ((localStorage.getItem("travelLocType_ls")).includes(`${locTypeName}`)) {
        document.write(`<img width='100' src='itemSprites/${imgSrc}.png' />`)
    }
}

document.write("<div class='outerestContainer'>")

document.write("<div class='outerContainer'>")

document.write("<div class='outContainer'>")

document.write('<iframe width="1842" height="780" src="mainGame.html" title="description"></iframe> ')

document.write("<div class='container'>")



document.write("<table class='skillTable'>")
    document.write("<tr class='skillsRow'>")
        document.write("<td>")
            document.write(`<img class='imgInTable' src="itemSprites/miningIcon.png"/> Mining: ${xpToLevel(localStorage.getItem("miningEXP_ls"))}/99`);
        document.write("</td>")
        document.write("<td>")
            document.write(`<img class='imgInTable' src="itemSprites/wcIcon.png"/> Woodcutting: ${xpToLevel(localStorage.getItem("wcEXP_ls"))}/99`);
        document.write("</td>")
    document.write("</tr>")

    document.write("<tr class='skillsRow'>")
        document.write("<td>")
            document.write(`<img class='imgInTable' src="itemSprites/cardioIcon.png"/> Cardio: ${xpToLevel(localStorage.getItem("cardioEXP_ls"))}/99`);
        document.write("</td>")
        document.write("<td>")
            document.write(`<img class='imgInTable' src="itemSprites/fightingIcon.png"/> Fighting: ${xpToLevel(localStorage.getItem("fightingEXP_ls"))}/99`);
        document.write("</td>")
    document.write("</tr>")
    
    document.write("<tr class='skillsRow'>")
        document.write("<td>")
            document.write(`<img class='imgInTable' src="itemSprites/fishingIcon.png"/> Fishing: ${xpToLevel(localStorage.getItem("fishingEXP_ls"))}/99`);
        document.write("</td>")
        document.write("<td>")
            document.write(`<img class='imgInTable' src="itemSprites/cookingIcon.png"/> Cooking: ${xpToLevel(localStorage.getItem("cookingEXP_ls"))}/99`);
        document.write("</td>")
    document.write("</tr>")
    
    document.write("<tr class='skillsRow'>")
        document.write("<td>")
            document.write(`<img class='imgInTable' src="itemSprites/smeltIcon.png"/> Smelting: ${xpToLevel(localStorage.getItem("smeltEXP_ls"))}/99`);
        document.write("</td>")
        document.write("<td>")
            document.write(`<img class='imgInTable' src="itemSprites/smithIcon.png"/> Smithing: ${xpToLevel(localStorage.getItem("smithEXP_ls"))}/99`);
        document.write("</td>")
    document.write("</tr>")
    
    document.write("<tr class='skillsRow'>")
        document.write("<td>")
            document.write(`<img class='imgInTable' src="itemSprites/heartIcon.png"/> Health: ${xpToLevel(localStorage.getItem("healthEXP_ls"))}/99`);
        document.write("</td>")
        document.write("<td>")
            document.write(`<img class='imgInTable' src="itemSprites/defenceIcon.png"/> Defence: ${xpToLevel(localStorage.getItem("defenceEXP_ls"))}/99`);
        document.write("</td>")
    document.write("</tr>")
    
    document.write("<tr class='skillsRow'>")
        document.write("<td>")
            document.write(`<img class='imgInTable' src="itemSprites/farmIcon.png"/> Farming: ${xpToLevel(localStorage.getItem("farmEXP_ls"))}/99`);
        document.write("</td>")
        document.write("<td>")
            
        document.write("</td>")
    document.write("</tr>")
document.write("</table>")



//document.write("<hr/>")

document.write("<table class='othersTable'>")
    document.write("<tr class='othersRow'>")
        document.write("<td class='moneyData'>")
            document.write(`<div class="money"><img src='yellowSussyBakaCoin.png'/>${localStorage.getItem("coins_ls")}</div>`)
        document.write("</td>")
        document.write("<td class='hpData'>")
            document.write(`<div class="hp">${localStorage.getItem("hp_ls")}/${xpToLevel(localStorage.getItem("healthEXP_ls"))}<img src="itemSprites/heartIcon.png" /></div>`)
        document.write("</td>")
        document.write("<td class='equipedData'>")
            document.write(`<div class="hp"><img width="200" src="itemSprites/${localStorage.getItem("equipedName_ls")}.png" /></div>`)
        document.write("</td>")
    document.write("</tr>")
document.write("</table>")



document.write("<table>")

    document.write("<tr>")
        document.write("<td>")
            document.write(`<div>Brightside: ${localStorage.getItem("brightsideKills_ls")}</div>`)
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            document.write(`<div>Boulevard: ${localStorage.getItem("boulevardKills_ls")}</div>`)
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            document.write(`<div>Kiki: ${localStorage.getItem("kikiKills_ls")}</div>`)
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            document.write(`<div>Bouba: ${localStorage.getItem("boubaKills_ls")}</div>`)
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            document.write(`<div>Pompeii: ${localStorage.getItem("pompeiiKills_ls")}</div>`)
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            document.write(`<div>Frostbite: ${localStorage.getItem("frostbiteKills_ls")}</div>`)
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            document.write(`<div>Neon Tiger: ${localStorage.getItem("neonTigerKills_ls")}</div>`)
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            document.write(`<div>Cemetary Gates: ${localStorage.getItem("cemetaryGatesKills_ls")}</div>`)
        document.write("</td>")
    document.write("</tr>")
    
document.write("</table>")



document.write("</div>")



document.write("</div>")

//document.write('<iframe class="chatIframe" width="50" src="http://35.179.12.150/"></iframe>')

document.write("</div>")

document.write("<table class='invDiplay'>")


    document.write("<tr>")
        document.write("<th class='invHeader'>")
            document.write("Inventory&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp")
        document.write("</th>")
    document.write("</tr>")

    document.write("<tr>")
        document.write("<td>")
            if (inv2[0] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[0]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[1] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[1]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[2] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[2]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[3] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[3]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[4] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[4]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[5] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[5]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[6] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[6]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[7] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[7]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[8] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[8]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[9] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[9]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[10] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[10]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[11] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[11]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[12] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[12]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[13] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[13]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[14] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[14]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[15] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[15]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[16] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[16]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[17] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[17]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[18] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[18]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[19] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[19]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[20] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[20]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[21] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[21]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[22] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[22]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[23] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[23]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[24] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[24]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[25] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[25]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[26] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[26]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[27] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[27]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[28] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[28]);
            }
        document.write("</td>")
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>")
            if (inv2[29] === undefined) {
                document.write("&nbsp");
            }
            else {
                document.write(inv2[29]);
            }
        document.write("</td>")
    document.write("</tr>")
    
    
document.write("</table>")


//document.write(localStorage.getItem("inv2_ls"))

document.write("</div>")



    



function removeAndReplaceAll() {
    //debugger;
   
    
    document.body.innerHTML = ''
    document.write(`<img width="200" src="wraithfate.png" /><a href="../experiments.html"><img width="100" src="return.png" style="border: 1px solid black; box-shadow: 5px 5px 5px #999"/></a><script src="index.js"></script>`)
   
}

//<script src="index.js"></script>

function xpToLevel(exp) {
  let level = Math.trunc(Math.pow(exp, 1/4));
  if (level > 99) {
    return 99;
  }
  if (level <= 99) {
    return level;
  }
}


    
/*function functionToRemoveAll() {

    removeAll()
    setTimeout(functionToRemoveAll, 50000)
}

functionToRemoveAll()*/
