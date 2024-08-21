// const glcMembers = [
//   "Garett Arrowood",
//   "Matt Carr",
//   "Dirk Cionci",
//   "Kyle Fadigan",
//   "Prince Lang",
//   "Jon Marshall",
//   "Gabriella Massaro",
//   "Edward Saleeby",
//   "Jonathan Watkins",
// ]

const sfMembers = [
  "Andrew McIndoe",
  "Ramon Ruiz",
  "Shane Novitsky",
  "Trinh Thach",
  "Talia Turner",
]

const robots = [
  "Nitro"
]

const peopleBookmarks = Array.from(document.querySelectorAll(".people-bookmark"))
const oneToOneBookmarks = peopleBookmarks.filter( bookmark => (!!bookmark.querySelector(".bookmark-label-name")) )

oneToOneBookmarks.forEach( bookmark => {
  const nameLabel = bookmark.querySelector(".bookmark-label-name").innerHTML
  if (sfMembers.some( member => nameLabel.includes(member) )) {
    bookmark.style.backgroundColor = "#b0ebb8"
  } else if (robots.some( member => nameLabel.includes(member) )) {
    bookmark.style.backgroundColor = "#97b2de"
  }
})

// const glcRooms = [
//   "Green Lantern",
//   "GLC",
//   "Corporate Finance Devs",
//   "Corp. Finance",
// ]

const sfRooms = [
  "Super Friends",
  "Super Friends Devs",
]

// const btRooms = [
//   "Business Technology",
//   "Code Factory",
//   "Learn Something New",
//   "Nitro Release Engineering",
//   "Nitro Dev",
//   "System Operations",
// ]

const impRooms = [
  "Nitro Web Build Status",
  "System Operations",
]

const roomBookmarksSection = document.querySelector(".bookmarks-rooms")
roomBookmarksSection.style.borderBottom = "thick solid #5f6670"

const roomBookmarks = Array.from(document.querySelectorAll(".rooms-bookmark"))

roomBookmarks.forEach( bookmark => {
  const roomName = bookmark.querySelector(".bookmark-label").innerHTML
  if (sfRooms.some( member => roomName.includes(member) )) {
    bookmark.style.backgroundColor = "#b0ebb8"
  } else if (impRooms.some( member => roomName.includes(member) )) {
    bookmark.style.backgroundColor = "#b1c3e0"
  }
})
