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
        <link rel="stylesheet" type="text/css" href="http://deadvey.com/index.css">
    </head>
    <body>
        <div class="header main">
            <img class="header-image" /><br/><a href="http://deadvey.com">Home page</a> <a href="blog/index.html">Blogs</a> <a href="videos/index.html">Videos</a><hr/>
        </div>
        <div class="main">
            ${divText}
        </div>
        <div class="footer">
        </div>
    </body>
</html>`

document.body.innerHTML = newPageHTML
