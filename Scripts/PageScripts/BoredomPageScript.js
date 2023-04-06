import { createButton, createParagraph, apiFrame, buttonDiv } from "../../Modules/functions.js";

let activityParagraph = createParagraph(apiFrame, "Waiting for content...");
let activityType = createParagraph(apiFrame, "Waiting for content...")
let activityRefresh = createButton(buttonDiv, "Refresh");

activityParagraph.style.marginTop = "90px";

fetch("https://www.boredapi.com/api/activity", {
    method: "GET"
})
.then(response => response.json())
.then(data => {
    activityParagraph.innerHTML = data.activity;
    activityType.innerHTML = `<b>Category</b>: ${data.type}`
})
.catch(() => {
    activityParagraph.innerHTML = "An error occured. Please try again later."
})

activityRefresh.addEventListener("click", () => {
    fetch("https://www.boredapi.com/api/activity", {
    method: "GET"
    })
    .then(response => response.json())
    .then(data => {
        activityParagraph.innerHTML = data.activity;
        activityType.innerHTML = `<b>Category</b>: ${data.type}`
    })
    .catch(() => {
        activityParagraph.innerHTML = "An error occured. Please try again later."
    })
    
})