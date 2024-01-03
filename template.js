let div = document.getElementById('main');
let divText = div.innerHTML;

divText += `Here you can read my latest blog: <a href='/blog/blogs/${blogs.length - 1}.html'>Latest blog</a>`

console.log(divText);

let newPageHTML = `${pageTop}${divText}${pageBottom}`

document.body.innerHTML = newPageHTML

function goToLink(link) {
            window.location.href = link
}

console.log(lastupdated)
