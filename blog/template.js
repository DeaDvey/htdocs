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
              <img class="header-image" /><br/><a href="http://deadvey.com">Home page</a> | <a href="index.html">Blogs</a> <a href="feed.xml"><img width="16" src="../feedIcon.png" /></a> | <a href="../videos/index.html">Videos</a>

        </div>
        <hr/>
        <div class="main">
            ${divText}
            <div id="links">
            </div>
        </div>
        <div class="footer">
            <hr/>
            <li>
                Internal:
                <li><a href="theunderlandcouk" >theunderland webpages (internal link)</a></li>
                <li><a href="experiments.html" >Experiments (internal link)</a></li>
                <br/>
                External:
                <li><a href="https://github.com/DeaDvey" >Github (external link)</a></li>
                <li><a href="https://gitlab.com/deadvey" >Gitlab (external link)</a></li>
                <li><a href="https://mastodon.social/@DeaDvey" >Mastadon.social (external link)</a></li>
            </li>
        </div>
    </body>
</html>`

document.body.innerHTML = newPageHTML  //apply the template

///////////////////////////
//     ADD THE LINKS
///////////////////////////

function loadContent(page, content, header, date) {
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
        </head>
        <body>
            <div class="header main">
                    <img class="header-image" /><br/><a href="http://deadvey.com">Home page</a> | <a href="index.html">Blogs</a> <a href="feed.xml"><img width="16" src="../feedIcon.png" /></a> | <a href="../videos/index.html">Videos</a>

            </div>
            <hr/>
            <div class="main">
                <h3 class="blog-date">${date}</h3>
                <h1 class="blog-title">${header}</h1>
                <p class="blog-content">${content}</p>
                <div id="links">
                </div>
            </div>
            <div class="footer">
                <hr/>
                <li>
                    Internal:
                    <li><a href="theunderlandcouk" >theunderland webpages (internal link)</a></li>
                    <li><a href="experiments.html" >Experiments (internal link)</a></li>
                    <br/>
                    External:
                    <li><a href="https://github.com/DeaDvey" >Github (external link)</a></li>
                    <li><a href="https://gitlab.com/deadvey" >Gitlab (external link)</a></li>
                    <li><a href="https://mastodon.social/@DeaDvey" >Mastadon.social (external link)</a></li>
                </li>
            </div>
        </body>
    </html>`
    document.body.innerHTML = newPageHTML
}

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

let length = blogs.length

for (let page = blogs.length - 1; page >= 0; page--) {
    console.log(length)

    linksText += (`<li><a href='blogs/${page}.html'>${escapeQuotes(blogs[page][0])}</a></li>`)
}


document.getElementById("links").innerHTML = linksText;
