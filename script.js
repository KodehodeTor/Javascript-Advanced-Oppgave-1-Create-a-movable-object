// Movable object:

//Position for element:

let x = 0
let y = 0

// Box element:
const box = document.querySelector("#box")

//PSEDUO CODE:


//Listens to event from document, when key is pressed down enable function, if keys are pressed move x y from orginal place.
document.addEventListener("keydown", (e) => {
    if (e.key === "Arrowup")
    // PSEDUO { move element up }
    else if (e.key === "Arrowdown")
    // PSEDUO { move element down }
     else if (e.key === "ArrowRight")
    // PSEDUO { move element right }
     else if (e.key === "ArrowLeft")
    // PSEDUO { move element left }
})

document.addEventListener("click", (e) {
    //Move element to clickable place
})