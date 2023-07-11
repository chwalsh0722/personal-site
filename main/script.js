// Detect transition end.
function getTransitionEndEventName() {
    var transitions = {
        "transition" : "transitioned",
        "OTransition" : "oTransitionEnd",
        "MozTransition" : "transitioned",
        "WebkitTransition" : "webkitTransitionEnd"
    }
    let bodyStyle = document.body.style;
    for (let transition in transitions) {
        if (bodyStyle[transition] != undefined) {
            return transitions[transition];
        }
    }
}

function expandAboutTextWindow(event) {
    const textboxHeader = event.srcElement;
    const textbox = textboxHeader.parentNode;
    textbox.classList.toggle("is-active");
    
}

// // Expands text windows in 'About' section of website.
// function expandAboutTextWindowEvent(element) {
//     // Clickable element is child of a larger text container.
//     // Get text container.
//     const textbox = element.parentNode;
//     // const subtext = element.nextSibling;
//     console.log(`Element that fired event: ${textbox.id}`);
// }

// // // Adds 'click' event listener to an array of elements.
// // function addEventListenersClick(elements, eventFunction) {
// //     for (element in elements) {
// //         element.addEventListener("click", eventFunction);
// //     }
// // }

// const textboxHeaders = document.getElementsByClassName("textbox-header");
// for (let i = 0; i < textboxHeaders.length; i++) {
//     textboxHeaders[i].addEventListener("click", expandAboutTextWindowEvent(textboxHeaders[i]));
// }
