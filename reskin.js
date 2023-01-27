const glcMembers = [
  "Garett Arrowood",
  "Matt Carr",
  "Dirk Cionci",
  "Kyle Fadigan",
  "Prince Lang",
  "Kristi Lin",
  "Gabriella Massaro",
  "Mark Rosenberg",
  "Jonathan Watkins",
]

const robots = [
  "Nitro"
]

const peopleBookmarks = Array.from(document.querySelectorAll(".people-bookmark"))
const oneToOneBookmarks = peopleBookmarks.filter( bookmark => (!!bookmark.querySelector(".bookmark-label-name")) )

oneToOneBookmarks.forEach( bookmark => {
  const nameLabel = bookmark.querySelector(".bookmark-label-name").innerHTML
  if (glcMembers.some( member => nameLabel.includes(member) )) {
    bookmark.style.backgroundColor = "#b0ebb8"
  } else if (robots.some( member => nameLabel.includes(member) )) {
    bookmark.style.backgroundColor = "#97b2de"
  }
})

const teamRooms = [
  "Green Lantern",
  "GLC",
  "Corporate Finance Devs",
]

// const btRooms = [
//   "Business Technology",
//   "Code Factory",
//   "Learn Something New",
//   "Nitro Release Engineering",
//   "Nitro Dev",
//   "System Operations",
// ]

const roomBookmarks = Array.from(document.querySelectorAll(".rooms-bookmark"))

roomBookmarks.forEach( bookmark => {
  const roomName = bookmark.querySelector(".bookmark-label").innerHTML
  if (teamRooms.some( member => roomName.includes(member) )) {
    bookmark.style.backgroundColor = "#b0ebb8"
  // } else if (btRooms.some( member => roomName.includes(member) )) {
  //   bookmark.style.backgroundColor = "#97b2de"
  }
})
