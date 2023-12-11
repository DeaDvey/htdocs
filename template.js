let div = document.getElementById('main');
let divText = div.innerHTML;

console.log(divText);

let newPageHTML = `
    <head>
        <meta charset="UTF-8"/>
        <title>DeaDvey's Domain</title>
        <icon src="deadvey-icon-circle.ico"></icon>
        <link rel="stylesheet" type="text/css" href="index.css">
    </head>
    <body>
        <div class="header main">
            <img class="header-image" /><br/><a href="https://deadvey.xyz">Home page</a> <a href="../blog">Blogs</a> <a href="../videos">Videos</a><hr/>
        </div>
        <div class="main">
            ${divText}
        </div>
        <div class="footer">
        </div>
    </body>`

document.body.innerHTML = newPageHTML
