function createButton(parent, content){
    let button = document.createElement("button")
    button.innerHTML = content
    button.classList.add("synthetic-button")

    //Assigning the button's parent
    parent.appendChild(button)

    return button
}

function createParagraph(parent, content){
    let paragraph = document.createElement("p")
    paragraph.innerHTML = content
    paragraph.classList.add("synthetic-paragraph")

    //Assigning the paragraph's parent
    parent.appendChild(paragraph)

    return paragraph
}

function createImage(parent, src){
    let image = document.createElement("img")
    image.src = src
    image.classList.add("synthetic-image")

    //Assigning the image's parent
    parent.appendChild(image)

    return image
}

let apiFrame = document.getElementsByClassName("frame")[0];
let buttonDiv = document.getElementsByClassName("button-div")[0];

//Exporting the funcitons
export {createButton, createParagraph, createImage, apiFrame, buttonDiv}