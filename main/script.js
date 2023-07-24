// // Detect transition end.
// function getTransitionEndEventName() {
//     var transitions = {
//         "transition" : "transitioned",
//         "OTransition" : "oTransitionEnd",
//         "MozTransition" : "transitioned",
//         "WebkitTransition" : "webkitTransitionEnd"
//     }
//     let bodyStyle = document.body.style;
//     for (let transition in transitions) {
//         if (bodyStyle[transition] != undefined) {
//             return transitions[transition];
//         }
//     }
// }

function expandAboutTextWindow(event) {
    const textboxHeader = event.srcElement;
    const textbox = textboxHeader.parentNode;
    const contents = textbox.children;
    textbox.classList.toggle('is-active');
    for (let i = 1; i < contents.length; i++) {
        contents[i].classList.toggle('is-active');
    }
}

function getViewportWidth() {
    return window.innerWidth;
}

function rearrangeAboutContent () {
    console.log('resize detected');
    const VPwidth = getViewportWidth();
    const body = document.getElementById('body-layout-about');
    if (VPwidth < 1300) {
        body.style.gridTemplateColumns = '1fr';
    } else {
        body.style.gridTemplateColumns = 'repeat(2, 1fr)';
    }
}

document.addEventListener('DOMContentLoaded',
    window.addEventListener('resize', rearrangeAboutContent)
);
