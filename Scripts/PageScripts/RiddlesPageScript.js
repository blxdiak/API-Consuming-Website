import { createButton, createParagraph, apiFrame, buttonDiv } from "../../Modules/functions.js"

let question = createParagraph(apiFrame, "<b>Question:</b><br>Waiting for content...")
question.style.marginTop = "35px"

let answer = createParagraph(apiFrame, "<b>Answer:</b><br>Click 'Reveal answer' to reveal the answer.")
answer.style.marginTop = "40px"

let refreshQuestion = createButton(buttonDiv, "Refresh question")
let revealAnswer = createButton(buttonDiv, "Reveal answer")

let storedAnswer = ""

fetch("https://api.api-ninjas.com/v1/riddles", {
    method: "GET",
})
.then(response => response.json())
.then(data => {
    question.innerHTML = `<b>Question:</b><br>${data[0].question}`
    storedAnswer = data[0].answer
})

refreshQuestion.addEventListener("click", () => {
    fetch("https://api.api-ninjas.com/v1/riddles", {
    method: "GET",
    })
    .then(response => response.json())
    .then(data => {
        question.innerHTML = `<b>Question:</b><br>${data[0].question}`
        answer.innerHTML = "<b>Answer:</b><br>Click 'Reveal answer' to reveal the answer."
        storedAnswer = data[0].answer
    })
})

revealAnswer.addEventListener("click", () => {
    answer.innerHTML = `<b>Answer:</b><br>${storedAnswer}`
})