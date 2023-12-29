///////////////////////////
//     ADD THE CONTENT
///////////////////////////

let div = document.getElementById('main');
let divText = div.innerHTML;

console.log(divText);

let newPageHTML = `${pageTop}${divText}${pageBottom}`
document.body.innerHTML = newPageHTML  //apply the template

///////////////////////////
//     ADD THE LINKS
///////////////////////////


function escapeQuotes(value) {
    return value.replace(/["'&<>]/g, function (char) {
        switch (char) {
            case '"':
                return "&quot;";
            case "'":
                return "&#39;";
            case "&":
                return "&amp;";
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            default:
                return char;
        }
    });
}
console.log(blogs)
let linksDiv = document.getElementById("links")

let linksText = "<a href='blogs/all.html'>ALL POSTS</a>"

let dateObject
let month
let year

let oldMonth = "blibidy blob"
let oldYear = "bloopy aw"

for (let page = blogs.length - 1; page >= 0; page--) {
    dateObject = new Date(blogs[page][2])
    month = dateObject.toLocaleString('en-US', {month: 'long'});
    year = dateObject.getFullYear()
    const dayOfWeek = dateObject.toLocaleString('en-US', { weekday: 'long' }); // 'long' returns the full day name
    const dayOfMonth = dateObject.getDate(); 
    console.log(month, year, dayOfMonth, dayOfWeek)


    console.log(length)
   
    if (month != oldMonth) {
       linksText += (`<h4>${month} ${year}</h4>`) 
    }
 
    linksText += (`<li class="indent">• <a href='blogs/${page}.html'>${escapeQuotes(blogs[page][0])}</a> -- ${dayOfWeek} ${dayOfMonth}</li>`)
    
    oldYear = year
    oldMonth = month
}


document.getElementById("links").innerHTML = linksText;
