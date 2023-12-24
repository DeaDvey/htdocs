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

let linksText = "<li><a href='blogs/all.html'>ALL POSTS</a></li><br/>"


for (let page = blogs.length - 1; page >= 0; page--) {
    console.log(length)

    linksText += (`<li><a href='blogs/${page}.html'>${escapeQuotes(blogs[page][0])}</a></li>`)
}


document.getElementById("links").innerHTML = linksText;
