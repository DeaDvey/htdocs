//function to get number in a range
function randomBetweenTwo(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

randomNumber = randomBetweenTwo(0, 1)//get a random number between 0 and 1

if (randomNumber == 0) { //if it's 0 then set this as image
    $(".logo-at-the-bottom").attr("src", "images/runLikeTheRiver.png")
}
if (randomNumber == 1) { //if it's 1 then set this as image
    $(".logo-at-the-bottom").attr("src", "images/flyYouHigh.png")
}