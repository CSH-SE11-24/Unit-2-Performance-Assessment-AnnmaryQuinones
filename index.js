const prompt = require('prompt-sync')()
console.log("It's almost time to transition to Advisory, but you hear a loud noice coming from outside your classroom.. Then everyone gets quiet. You look out the door & see teachers running around to see what the noise was...")
console.log("")

console.log("You see teachers calling 911.. Few mins go by abluance comes in & leaves with a students dead body.. You later found out a Junior named Zyaire was found dead.. You decide you want to investigate & find out who is the Murderer....")

let globalRoom = {
  name: "Global",
  people: "Ms Liani & Mr Ryan",
  message: "We was outside the global room when everything happened but we only saw Metro Kids leaving from that staircase..",
  objectInRoom: "Pocket Knife",
  objectDescription: "No Blood on Knife, only finger prints.. Some kid probably left it here.."

}

let seRoom = {
  name: "Software",
  people: "Ms Pham & Ms Gomes",
  message: "We weren't in the room at the time we were in a meeting in the TWR.. But you should go talk to the guards downstairs maybe they know something..",
  objectInRoom: "Note",
  objectDescription: "Note says, 'Meet me in the Staircase at 12' No name was left on the note.."

}

let secretRoom = {
  name: "Secret Room",
  people: "Guards",
  message: "Yea it was crazy.. The body was found in the staircase. We didn't really have time to check the scene it seemed like he fell & hit his head..",

}

let hallWay = {
  name: "Hall",
  people: "Kayla, Annmary & Yoandiery",
  message: "We were in our 4th Period class..",
  objectInRoom: "Bonnet",
  objectDescription: "Could be Zyaire's Bonnet, it was by the door of the Staircase.."

}

let stairCase = {
  name: "Stair Case",
  objectInRoom: "Notebook",
  objectDescription: "You open the notebook & inside it says 'Property of Yoandiery Rios'"

}

let rooms = [globalRoom, seRoom, secretRoom, hallWay, stairCase]

// this function is where the player is able to pick which room they want to investigate
function pickRoom() {
  for (i = 0; i < rooms.length; i++) {
    console.log(rooms[i].name)
  }
  let question2 = prompt("What room do you want to explore??")
  let currentRoom
  if (question2 === "Global" || question2 === "global") {
    currentRoom = globalRoom
  } else if (question2 === "Software" || question2 === "software") {
    currentRoom = seRoom
  } else if (question2 === "Secret Room" || question2 === "secret room") {
    currentRoom = secretRoom
  } else if (question2 === "Hall" || question2 === "hall") {
    currentRoom = hallWay
  } else if (question2 === "Stair Case" || question2 === "stair case") {
    currentRoom = stairCase
  }
  return currentRoom
}
// this function is where they player can pick what they want to investigate in the room
function investigateRoom(currentRoom) {
  console.log("Things you can investigate:")
  for (let key in currentRoom) {
    console.log(key)
  }
  let moreInvest = "yes"
  while (moreInvest === "yes" || moreInvest === "Yes") {
    let investigat = prompt("What do you want to investigate??")
    // console.log(investigat)
    if (investigat === "people") {
      console.log("In this Room, you find", currentRoom.people)
    } else if (investigat === "objectInRoom") {
      console.log("In this Room, you found a ", currentRoom.objectInRoom)
    } else if (investigat === "objectDescription") {
      console.log("You investigated the object and the room and found out that ", currentRoom.objectDescription)
    } else if (investigat === "name") {
      console.log("You are currently in ", currentRoom.name)
    } else if (investigat === "message") {
      console.log("You started a conversation and they said..", currentRoom.message)
    }
    moreInvest = prompt("Do you want to investigate more?")

  }
}
// this function is where the game loop starts and ends
function playGame() {
  console.log("You are here to investigate the crime scene of dead Comp Sci High student.. Try to find out who 's killer is!!")
  let question = prompt("Do you want to start the game ?")
  if (question === "yes") {
    console.log("Lets Begin !!!")
    let guessLeft = 3
    while (guessLeft > 0) {
      let currentRoom = pickRoom()
      investigateRoom(currentRoom)

      let question = prompt("Do you want to guess who the killer is?")
      if (question === "yes" || question === "Yes") {
        let killer = prompt("Who do you think the killer is?")
        if (killer === "yoandeiry" || killer === "Yoandeiry") {
          console.log("You found the killer!")
          guessLeft = 0
        } else {
          console.log("Wrong, you suck")
          guessLeft--
          console.log("You have", guessLeft, "guesses left")
        }

      } else if (question === "no" || question === "No") {
        console.log("Keep Investigating")
      }

    }



  } else if (question === "no") {
    console.log("OK RIP ")
  }

}

playGame()

