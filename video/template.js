///////////////////////////
//     ADD THE CONTENT
///////////////////////////

let div = document.getElementById('main');
let divText = div.innerHTML;

console.log(divText);

let newPageHTML = `${pageTop}${divText}${pageBottom}`
document.body.innerHTML = newPageHTML  //apply the template

///////////////////////////
//     ADD THE LINKS
///////////////////////////


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

let linksDiv = document.getElementById("links")

let linksText = ""

console.log(videos)

// Convert the ISO date string to a JavaScript Date object
let dateObject
let month
let year
let oldMonth
let oldYear

for (let video = 0; video < videos.length; video++) {
	dateObject = new Date(videos[video][1])

	// Get the month, year, day of the week, and day of the month
	month = dateObject.toLocaleString('en-US', { month: 'long' }); // 'long' returns the full month name
	year = dateObject.getFullYear();
	const dayOfWeek = dateObject.toLocaleString('en-US', { weekday: 'long' }); // 'long' returns the full day name
	const dayOfMonth = dateObject.getDate();

	if (month != oldMonth) {
		linksText += (`<h4>${month} ${year}</h4>`)
	}

	linksText += `<h3 class="indent">• ${videos[video][0]} -- ${dayOfWeek} ${dayOfMonth}<br/><video class="doubleIndent video" width="300" controls src="videos/${videos[video][0]}"></video><br/>`

	oldYear = year
	oldMonth = month
}

console.log(linksText)
document.getElementById("links").innerHTML = linksText;
