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
    const contents = textbox.children;
    textbox.classList.toggle("is-active");
    for (let i = 1; i < contents.length; i++) {
        contents[i].classList.toggle("is-active");
    }
}
