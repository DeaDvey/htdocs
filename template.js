let div = document.getElementById('main');
let divText = div.innerHTML;

console.log(divText);

let newPageHTML = `${pageTop}${divText}${pageBottom}`

document.body.innerHTML = newPageHTML

function goToLink(link) {
            window.location.href = link
}

// Write latest commits to page

let commitsDiv = document.getElementById("commits")
commitsDiv.innerHTML = commits


// Write latest blog to home page

let latestBlogDiv = document.getElementById("latestBlog");
let blogText = `<h5 class="blog-title"><a href="/blog/blogs/${blogs.length-1}.html">${blogs[blogs.length - 1][0]}</a></h5>
${blogs[blogs.length - 1][1]}
${blogs[blogs.length - 1][3] ?
                  `<div class="blog-images">
                    ${blogs[blogs.length - 1][3].map(image => `<img class="blog-image" height="200" src="/images/${image}" alt="${image}" />`).join('')}
                  </div>`
                  : ''}`

let blogHTML = `${blogText}`
latestBlogDiv.innerHTML = blogHTML
