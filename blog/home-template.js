///////////////////////////
//     ADD THE CONTENT
///////////////////////////

let div = document.getElementById('main');
let divText = div.innerHTML;

console.log(divText);

let newPageHTML = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8"/>
        <title>DeaDvey's Domain</title>
        <link rel="icon" href="../favicon.png">
        <link rel="stylesheet" type="text/css" href="../index.css">
    </head>
    <body>
        <div class="header main">
            <img class="header-image" /><br/><a href="http://deadvey.com">Home page</a> <a href="/blog/index.html">Blogs</a> <a href="/videos/index.html">Videos</a><hr/>
        </div>
        <div class="main">
            ${divText}
            <div id="links">
            </div>
        </div>
        <div class="footer">
        </div>
    </body>
</html>`

document.body.innerHTML = newPageHTML  //apply the template

///////////////////////////
//     ADD THE LINKS
///////////////////////////

function loadContent(page, content, header) {
    console.log(page)
    let blogText = content
    console.log(blogText)
    let newPageHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>DeaDvey's Domain</title>
            <link rel="icon" href="../favicon.png">
            <link rel="stylesheet" type="text/css" href="../index.css">
        </h ead>
        <body>
            <div class="header main">
                <img class="header-image" /><br/><a href="http://deadvey.com">Home page</a> <a href="/blog/index.html">Blogs</a> <a href="/videos/index.html">Videos</a><hr/>
            </div>
            <div class="main">
                <h1>${header}</h1>
                ${content}
                <div id="links">
                </div>
            </div>
            <div class="footer">
            </div>
        </body>
    </html>`
    document.body.innerHTML = newPageHTML
}

let linksDiv = document.getElementById("links")

let linksText

for (let length = blogs.length; length > 0; length--) {
    console.log(length)

    linksText += (`<li><a href='#' onclick='loadContent(${length}, "${blogs[length-1][1]}", "${blogs[length-1][0]}")'>${blogs[length-1][0]}</a></li>`)
}

linksText = linksText.slice(9) //Remove the "undefined" at the start of the string

document.getElementById("links").innerHTML = linksText;

