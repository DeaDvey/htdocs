let div = document.getElementById('main');
let divText = div.innerHTML;

console.log(divText);

let newPageHTML = `${pageTop}${divText}${pageBottom}`

document.body.innerHTML = newPageHTML
