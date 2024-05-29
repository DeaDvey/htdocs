let div = document.getElementById("comments");
let divText = div.innerHTML
let length = div.className

console.log(divText,length)
newPageHTML=""

for (let comment = 0; comment<comments[length].length; comment++) {                            
        newPageHTML+=`<b>${comments[length][comment][0]}</b>: <i>${comments[length][comment][1]}</i><b\
r/>`                                                                                               
    }
div.innerHTML = newPageHTML
