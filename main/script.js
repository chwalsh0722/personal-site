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