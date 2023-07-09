// Event handler for mouse entering header button element.
function mouseoverHeaderButton(event) {
    // Get button corresponding to current page and remove its highlight.
    const currentPageButton = document.getElementsByClassName("current-page");
    currentPageButton[0].classList.remove("background-purple");

    // Get button that triggered event and add purple highlight.
    const element = event.currentTarget;
    element.classList.add("background-purple");
}

// Event handler for mouse leaving header button element.
function mouseoutHeaderButton(event) {
    // Get button that triggered event and remove purple highlight.
    const element = event.currentTarget;
    element.classList.remove("background-purple");

    // Get button corresponding to current page and add purple highlight.
    const currentPageButton = document.getElementsByClassName("current-page");
    currentPageButton[0].classList.add("background-purple");
}



// mouseenter - pointer moved onto element
// mouseleave - pointer moved out of element
// mousedown - mouse button pressed over an element