let div = document.getElementById('main');
let divText = div.textContent || div.innerText;

console.log(divText);

let newPageHTML = `<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8"/>
        <title>DeaDvey's Domain</title>
        <icon src="deadvey-icon-circle.ico"></icon>
        <link rel="stylesheet" type="text/css" href="index.css">
    </head>
    <body>
        <div class="header">
            <img class="header-image" width="400px" src="header-image.png"></img>
        </div>
        <div class="main">
            ${divText}
        </div>
        <div class="footer">
        </div>
    </body>
</html>`

document.body.innerHTML = newPageHTML
