// Movable object:

//Position for element:
let x = 0;
let y = 0;

//Position for walls
const walls = [
  { x: 40, y: 0 },
  { x: 60, y: 0 },
  { x: 80, y: 0 },
];

// Box element:
const box = document.querySelector("#box");

// Arrow functions and walls:
document.addEventListener("keydown", (e) => {
  //Temporary variable
  let newX = x;
  let newY = y;

  //Listens to key event from document, when key is pressed down enable function; move x y from orginal place. Start position is 0,0 X = how far from left side, Y = how far from the top. The box moves by 20 pixels for each key stroke.
  if (e.key === "ArrowUp") {
    newY -= 20;
  } else if (e.key === "ArrowDown") {
    newY += 20;
  } else if (e.key === "ArrowRight") {
    newX += 20;
  } else if (e.key === "ArrowLeft") {
    newX -= 20;
  }

  //Wall hit set as false standard
  let hitWall = false;

  //Loop that checks if next position is a wall or not. If its wall, set hitWall to true.
  for (let wall of walls) {
    if (wall.x === newX && wall.y === newY) {
      hitWall = true;
    }
  }

  //If there is no wall, new X and Y position is set to new position. Otherwise the element dont move.
  if (!hitWall) {
    x = newX;
    y = newY;
  }

  //We grab the element box, as a HTML element we access .style property and move it left/right/up/down from the loop above. We have the variables x and y above and move box accordingly to buttons being pressed.
  box.style.left = x + "px";
  box.style.top = y + "px";
});

// Listens to click event from document, when the mouse is clicked the box is moving the the selected position.
document.addEventListener("click", (e) => {
  // e.pageX and e.pageY holds the exact horizontal and vertical coordinates of the mouse on the webpage.
  // box.offsetWidth and height is the box size. We divide in half to find the center of the box.
  const targetX = e.pageX - box.offsetWidth / 2;
  const targetY = e.pageY - box.offsetHeight / 2;

  // Move element to clickable place by using .style as before, we use template literals to get both the position and px, due to CSS properties like left and top expect it to be a string.
  box.style.left = `${targetX}px`;
  box.style.top = `${targetY}px`;
});
