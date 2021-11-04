const displayBingo = function () {
  let bingoContainerNode = document.getElementById("bingo-container")

  for (let ballNumber = 1; ballNumber <= 76; ballNumber++) {
    let newBallNode = document.createElement("div")
    newBallNode.innerText = ballNumber
    newBallNode.classList.add("ball")

    // newBallNode.onclick = selectBall

    bingoContainerNode.appendChild(newBallNode)
  }
}

const randomNumber = function () {
  return Math.floor(Math.random() * 76) + 1
}

const randomizeBingo = function () {
  let ballNumber = randomNumber()

  let ballNodes = document.querySelectorAll(".ball")

  let selectedBallNode = ballNodes[ballNumber - 1]
  selectedBallNode.classList.add("selected")
}

window.onload = function () {
  displayBingo()
}
