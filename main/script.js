// Event handler for mouse entering header button element.
function mouseoverHeaderButton(event) {
    // Get button corresponding to current page and remove its highlight.
    const currentPageButton = document.getElementsByClassName("current-page");
    currentPageButton[0].classList.remove("background-purple");

    // Get button that triggered event and add purple highlight.
    const element = event.currentTarget;
    element.classList.add("background-purple");
}
// function mouseenterHeaderButton(element) {
//     // Get button that is currently highlighted. Remove its highlight.
//     // Add additional class for use when other button no longer hovered.
//     const currentPageButton = document.getElementsByClassName("current-page");
//     currentPageButton[0].classList.remove("background-purple");

//     // Highlight button that is currently hovered.
//     element.classList.add("background-purple");
//     console.log("mouseenter complete");
// }

// Event handler for mouse leaving header button element.
function mouseoutHeaderButton(event) {
    // Get button that triggered event and remove purple highlight.
    const element = event.currentTarget;
    element.classList.remove("background-purple");

    // Get button corresponding to current page and add purple highlight.
    const currentPageButton = document.getElementsByClassName("current-page");
    currentPageButton[0].classList.add("background-purple");
}
// function mouseleaveHeaderButton(element) {
//     // Remove highlight from previously-hovered button.
//     element.classList.remove("background-purple");

//     // Get button corresponding to current webpage. Put highlight back on button
//     const currentPageButton = document.getElementsByClassName("current-page");
//     currentPageButton[0].classList.add("background-purple");
//     console.log("mouseleave complete");
// }


// Header button elements.
// const homeButton = document.getElementById("home-button");
// const aboutButton = document.getElementById("about-button");
// const projectsButton = document.getElementById("projects-button");
// const contactButton = document.getElementById("contact-button");

// // Event listeners for mouse over a header button.
// homeButton.addEventListener("mouseenter", mouseenterHeaderButton(homeButton));
// aboutButton.addEventListener("mouseenter", mouseenterHeaderButton(aboutButton));
// projectsButton.addEventListener("mouseenter", mouseenterHeaderButton(projectsButton));
// contactButton.addEventListener("mouseenter", mouseenterHeaderButton(contactButton));


// // Event listeners for mouse leaving a header button.
// homeButton.addEventListener("mouseleave", mouseleaveHeaderButton(homeButton));
// aboutButton.addEventListener("mouseleave", mouseleaveHeaderButton(aboutButton));
// projectsButton.addEventListener("mouseleave", mouseleaveHeaderButton(projectsButton));
// contactButton.addEventListener("mouseleave", mouseleaveHeaderButton(contactButton));



// mouseenter - pointer moved onto element
// mouseleave - pointer moved out of element
// mousedown - mouse button pressed over an element