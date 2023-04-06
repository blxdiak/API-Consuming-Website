import { createButton, createParagraph, apiFrame, buttonDiv } from "../../Modules/functions.js";

let quoteParagraph = createParagraph(apiFrame, "Waiting for content...");
let quoteRefreshButton = createButton(buttonDiv, "Refresh");

quoteParagraph.style.marginTop = "90px";

fetch("https://api.quotable.io/random", {
    method: "GET"
})
.then(response => response.json())
.then(data => {
    quoteParagraph.innerHTML = `${data.author} - ${data.content}`;
})
.catch(() => {
    quoteParagraph.innerHTML = "An error has occured while trying to fetch a quote. Please refresh your page.";
})

quoteRefreshButton.addEventListener("click", () => {
    fetch("https://api.quotable.io/random", {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {
        quoteParagraph.innerHTML = `${data.author} - ${data.content}`;
    })
    .catch(() => {
        quoteParagraph.innerHTML = "An error has occured while trying to fetch a quote. Please refresh your page.";
    })
})

