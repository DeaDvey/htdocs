//I didn't write this code, see this tutorial for more info --> https://www.youtube.com/watch?v=TlP5WIxVirU&t=324s

const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      (Array.isArray(user.tags) && user.tags.some(tags => tags.toLowerCase().includes(value))) ||
      (typeof user.tags === 'string' && user.tags.toLowerCase().includes(value)) ||
      user.link.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})

fetch("list.json")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      const hyperlink = card.querySelector("[data-link]");
      
      // Check if "user.tag" is an array
      const tags = Array.isArray(user.tags) ? user.tags.join(', ') : user.tags;
      
      hyperlink.href = user.link;
      hyperlink.textContent = user.name;
      body.textContent = tags;
      
      userCardContainer.append(card)
      return { name: user.name, tags: user.tags, link: user.link, element: card }
    })
  })
