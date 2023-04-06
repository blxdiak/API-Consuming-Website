import { createButton, createImage, createParagraph, apiFrame, buttonDiv } from "../../Modules/functions.js"

let dogimage = createImage(apiFrame, "")
let dogFact = createParagraph(apiFrame, "Waiting for content...")
let factRefreshButton = createButton(buttonDiv, "Refresh")

dogFact.style.marginTop = "25px"

fetch("https://some-random-api.ml/animal/dog", {
    method: "GET"
})
.then(response => response.json())
.then(data => {
    dogFact.innerHTML = data.fact
    dogimage.src = data.image
})
.catch(() => {
    dogFact.innerHTML = `An error occured. Please try again later.`
})

factRefreshButton.addEventListener("click", () => {
    fetch("https://some-random-api.ml/animal/dog", {
    method: "GET"
    })
    .then(response => response.json())
    .then(data => {
        dogFact.innerHTML = data.fact
        dogimage.src = data.image
    })
    .catch(() => {
        dogFact.innerHTML = `An error occured. Please try again later.`
    })
})