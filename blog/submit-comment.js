let commentForm = document.getElementById("commentForm");


commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  let name = document.getElementById("name")
  let comment = document.getElementById("comment")

  console.log(name.value)
  console.log(comment.value)
  
  let post = name.name // The post number ie 0 is stored in the name tag of the input field

  comments[post].push(`${name.value}:  ${comment.value}`)
  console.log(comments)

  $.post('/comment', { comment: comment.value })
  $.post('/name', { name: name.value })
});
