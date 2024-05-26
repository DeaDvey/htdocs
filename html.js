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
<a href="/">Home page</a> | <a href="/blog/index.html">Blogs</a> <a href="/blog/feed.xml"><img width="16" src="/images/feedIcon.png" class="feedicon" alt="Feed image"/></a> | <a href="/video/index.html">Videos</a> | <a href="/comics/index.html">Comics</a> <a href="/comics/feed.xml"><img width="16" src="/images/feedIcon.png" class="feedicon" alt="Feed image"/></a> | <a href="/project/index.html">Projects</a> | <a href="https://github.com/DeaDvey/htdocs"><img height="15" src="/images/github.png" alt="Link to github page"/></a> <a href="https://gitlab.com/deadvey/htdocs"><img height="15" src="/images/gitlab.png" alt="Link to gitlab page"/></a> | <input type="text" id="clickableInput" onclick="goToLink('/search')" placeholder="Click to search">

        </div>
        <hr/>
        <div class="main">
`

let pageBottom = `</div>
        <hr/>
        <div class="footer main">
            <ul>
                Internal pages:
                <li>• <a href="/experiments" >Experiments <img height="30" src="/images/experience-green-liquid.gif" /></a></li>
                <li>• <a href="/isthistheyearofthelinuxdesktop" >Is this the year of the Linux Desktop? <img src="/images/penguin-dance-pengu.gif" height="20" alt="penguin dancing" /></a></li>
                <li>• <a href="/theunderland" >theunderland wiki <img src="/images/flashlight.gif" alt="torch scanning" height="30" /></a></li>
                <br/>
                External sites:
                <li>• <a href="https://github.com/DeaDvey" >Github</a></li>
                <li>• <a href="https://gitlab.com/deadvey" >Gitlab</a></li>
                <li>• <a href="https://mastodon.social/@DeaDvey" >Mastadon(.social)</a><a href="https://mastodon.social/@DeaDvey.rss"><img src="/images/feedIcon.png" /></a></li>
                <li>• <a href="https://letterboxd.com/DeaDvey/" >Letterboxd (film reviews)</a><a href="https://letterboxd.com/deadvey/rss/"><img src="/images/feedIcon.png" /></a></li>
            </ul><br/>
            <small width="300px">© DeaDvey 2023 - 2024<br/>This work is licensed under the terms of the <a href="/LICENSE">GNU General Public License, version 3.0</a>. You are free to copy, distribute, and modify this work under the terms of the <a href="/LICENSE">GPL 3.0 License</a>. Please see the full license text for details.</small>
        </div>
    </body>
</html>`

if (typeof module !== 'undefined' && module.exports) {
	module.exports = {
		pageTop,
		pageBottom
	}
}

function goToLink(link) {
            window.location.href = link
}
