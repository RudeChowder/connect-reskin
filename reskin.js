const glcMembers = [
  "Garett Arrowood",
  "Matt Carr",
  "Dirk Cionci",
  "Kyle Fadigan",
  "Taylor Horn",
  "Gabriella Massaro",
  "Mark Rosenberg",
  "Jonathan Watkins",
]

const robots = [
  "Nitro"
]

const peopleBookmarks = Array.from(document.querySelectorAll(".people-bookmark"))
const filteredBookmarks = peopleBookmarks.filter( bookmark => (!!bookmark.querySelector(".bookmark-label-name")) )

filteredBookmarks.forEach( bookmark => {
  const nameLabel = bookmark.querySelector(".bookmark-label-name").innerHTML
  if (glcMembers.some( member => nameLabel.includes(member) )) {
    bookmark.style.backgroundColor = "#b0ebb8"
  } else if (robots.some( member => nameLabel.includes(member) )) {
    bookmark.style.backgroundColor = "#97b2de"
  }
})
