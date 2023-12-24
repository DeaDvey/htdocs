let pageTop = `<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8"/>
        <title>DeaDvey's Domain</title>
        <link rel="icon" href="/favicon.png">
        <link rel="stylesheet" type="text/css" href="/index.css">
    </head>
    <body>
        <div class="header main">
              <img class="header-image" /><br/><a href="/index.html">Home page</a> | <a href="/blog/index.html">Blogs</a> <a href="feed.xml"><img width="16" src="/feedIcon.png" class="feedicon"/></a> | <a href="/videos/index.html">Videos</a>

        </div>
        <hr/>
        <div class="main">
`

let pageBottom = `</div>
        <div class="footer">
            <hr/>
            <li>
                Internal:
                <li><a href="/theunderlandcouk" >theunderland webpages (internal link)</a></li>
                <li><a href="/experiments" >Experiments (internal link)</a></li>
                <br/>
                External:
                <li><a href="https://github.com/DeaDvey" >Github (external link)</a></li>
                <li><a href="https://gitlab.com/deadvey" >Gitlab (external link)</a></li>
                <li><a href="https://mastodon.social/@DeaDvey" >Mastadon.social (external link)</a></li>
            </li>
        </div>
    </body>
</html>`

if (typeof module !== 'undefined' && module.exports) {
	module.exports = {
		pageTop,
		pageBottom
	}
}


