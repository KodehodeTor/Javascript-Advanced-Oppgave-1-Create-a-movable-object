// Movable object:

//Position for element:
let x = 0;
let y = 0;

// Box element:
const box = document.querySelector("#box");

//Listens to key event from document, when key is pressed down enable function, if keys are pressed move x y from orginal place. Start position is 0,0 X = how far from left side, Y = how far from the top. The box moves by 10 pixels for each key stroke.

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    y -= 10;
  } else if (e.key === "ArrowDown") {
    y += 10;
  } else if (e.key === "ArrowRight") {
    x += 10;
  } else if (e.key === "ArrowLeft") {
    x -= 10;
  }

  //We grab the element box, as a HTML element we access .style property and move it left/right/up/down from the loop above. We have the variables x and y above and move box accordingly to buttons being pressed.

  box.style.left = x + "px";
  box.style.top = y + "px";
});

// Listens to click event from document, when the mouse is clicked down the box is moving the the selected position.
document.addEventListener("click", (e) => {
  //Center the element by subtracting half its width and height
  // e.pageX and e.pageY holds the exact horizontal and vertical cordinates of the mouse on the webpage.
  // box.offsetWidth and height is the box size. We divide in half to find the center of the box.
  const targetX = e.pageX - box.offsetWidth / 2;
  const targetY = e.pageY - box.offsetHeight / 2;

  // Move element to clickable place by using .style as before, we use template literals to get both the position and px, as CSS needs px to move the box.
  box.style.left = `${targetX}px`;
  box.style.top = `${targetY}px`;
});
