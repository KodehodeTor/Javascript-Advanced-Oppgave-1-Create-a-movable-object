// Movable object:

// Position for element:
let x = 0;
let y = 0;

// Size of one movement tile.
const TILE_SIZE = 100;

// Position for walls
const walls = [
  { x: TILE_SIZE, y: 0 },
  { x: TILE_SIZE * 2, y: 0 },
  { x: TILE_SIZE * 3, y: 0 },
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
    newY -= TILE_SIZE;
  } else if (e.key === "ArrowDown") {
    newY += TILE_SIZE;
  } else if (e.key === "ArrowRight") {
    newX += TILE_SIZE;
  } else if (e.key === "ArrowLeft") {
    newX -= TILE_SIZE;
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

// Mouse function:

// Listens to click event from document, when the mouse is clicked the box is moving the the selected position.
document.addEventListener("click", (e) => {
  // e.pageX and e.pageY holds the exact horizontal and vertical coordinates of the mouse on the webpage.
  // Math floor snaps it to the nearest 100x100 tile
  const targetX = Math.floor(e.pageX / TILE_SIZE) * TILE_SIZE;
  const targetY = Math.floor(e.pageY / TILE_SIZE) * TILE_SIZE;

  // Wall hit set to false as standard
  let hitWall = false;

  // Loop through walls, check if the clicked position matches a wall position
  for (let wall of walls) {
    if (wall.x === targetX && wall.y === targetY) {
      hitWall = true;
    }
  }
  // If the moved position isnt a wall, update the players position.
  if (!hitWall) {
    x = targetX;
    y = targetY;

    // Move element to clickable place by using .style as before, CSS properties like left and top expect it to be a string.
    box.style.left = x + "px";
    box.style.top = y + "px";
  }
});

// Visible walls array:

//Loops through walls and create a new div element for each wall.
for (let wall of walls) {
  const wallElement = document.createElement("div");

  //Give the div wall class so we can customize it.
  wallElement.classList.add("wall");
  //Positioning of the wall using x / y
  wallElement.style.left = wall.x + "px";
  wallElement.style.top = wall.y + "px";
  //Adding the wall to the webpage.
  document.body.appendChild(wallElement);
}
