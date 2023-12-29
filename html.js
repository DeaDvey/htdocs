let pageTop = `<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8"/>
        <title>DeaDvey's Domain</title>
        <link rel="icon" href="/images/favicon.png">
        <link rel="stylesheet" type="text/css" href="/index.css">
    </head>
    <body>
        <div class="header main">
              <img class="header-image" /><br/>
              <a href="/" onclick="history.back()"><img src="/images/return.png" width="20" />Return</a> | 
<a href="/index.html">Home page</a> | <a href="/blog/index.html">Blogs</a> <a href="feed.xml"><img width="16" src="/images/feedIcon.png" class="feedicon"/></a> | <a href="/videos/index.html">Videos</a>

        </div>
        <hr/>
        <div class="main">
`

let pageBottom = `</div>
        <div class="footer">
            <hr/>
            <li>
                Internal pages:
                <li><a href="/theunderlandcouk" >theunderland webpages</a></li>
                <li><a href="/experiments" >Experiments</a></li>
                <li><a href="/isthistheyearofthelinuxdesktop" >Is this the year of the Linux Desktop?</a></li>
                <br/>
                External sites:
                <li><a href="https://github.com/DeaDvey" >Github</a></li>
                <li><a href="https://gitlab.com/deadvey" >Gitlab</a></li>
                <li><a href="https://mastodon.social/@DeaDvey" >Mastadon(.social)</a><a href="https://mastodon.social/@DeaDvey.rss"><img src="/images/feedIcon.png" /></a></li>
                <li><a href="https://letterboxd.com/DeaDvey/" >Letterboxd (film reviews)</a><a href="https://letterboxd.com/deadvey/rss/"><img src="/images/feedIcon.png" /></a></li>
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


