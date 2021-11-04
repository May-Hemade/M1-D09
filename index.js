const displayBingo = function () {
  let bingoContainerNode = document.getElementById("bingo-container")

  for (let ballNumber = 1; ballNumber <= 76; ballNumber++) {
    let newBallNode = document.createElement("div")
    newBallNode.innerText = ballNumber
    newBallNode.classList.add("ball")

    bingoContainerNode.appendChild(newBallNode)
  }
}

const randomNumber = function () {
  return Math.floor(Math.random() * 76) + 1
}

const randomizeBingo = function () {
  let ballNodes = document.querySelectorAll(".ball")
  let ballNumber = randomNumber()
  let selectedBallNode = ballNodes[ballNumber - 1]
  let isAlreadySelected = selectedBallNode.classList.contains("selected")

  if (!isAlreadySelected) {
    selectedBallNode.classList.add("selected")
  }
}

const displayUserBoard = function () {
  let boardContainerNode = document.getElementById("user-container")

  for (let i = 0; i < 24; i++) {
    let ballNumber = randomNumber()
    let newBallNode = document.createElement("div")
    newBallNode.innerText = ballNumber
    newBallNode.classList.add("ball")

    boardContainerNode.appendChild(newBallNode)
  }
}

window.onload = function () {
  displayBingo()
  displayUserBoard()
}
