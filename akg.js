 const container = document.querySelector(".grid");
  const gridNodes = document.querySelectorAll(".grid-item");
   const gridArray = Array.from(gridNodes);
    let circle = document.createElement("div");
     let position = {x: 0, y: 0};

     let cell;

function makeGrid(rows, cols) {

    for(x=0; x<rows; x++) {
        for(y=0; y<cols; y++) {
           cell = document.createElement("div")
           cell.id = x.toString() + y.toString();
           container.appendChild(cell).className = "grid-item ";
        }
    }
}
const keys = {
  left: 37,
   up: 38,
   right: 39,
  down: 40
};
 makeGrid(5, 5);
    circle.style.width = "50px";
     circle.style.height = "50px";
     circle.style.backgroundColor = "orange";
      circle.className = "cirkel";
     circle.style.position = 'relative';
     circle.style.left = '168px';
    circle.style.top = '168px';

   let firstGridItem = document.querySelector(".grid-item");

 firstGridItem.appendChild(circle);

function handleKey(e) {

    let cirkel = document.querySelector(".cirkel");
    let posX = parseInt(cirkel.style.left);
    let posY = parseInt(cirkel.style.top);

    switch (e.keyCode) {

        case keys.left:
             if(parseInt(cirkel.style.left) >0) {
            cirkel.style.left=parseInt(cirkel.style.left) - 84 + "px";
            }
        break;

        case keys.up:
             if(parseInt(cirkel.style.top) > 0) {
            cirkel.style.top=parseInt(cirkel.style.top) - 84 + "px";
            }
        break;

        case keys.right:
             if(parseInt(cirkel.style.left) < 336) {
            cirkel.style.left=parseInt(cirkel.style.left) + 84 + "px";
            }
            
        break;

        case keys.down:
             if(parseInt(cirkel.style.top) < 336) {
            cirkel.style.top=parseInt(cirkel.style.top) + 84 + "px";
            }
        break;
    }
}
window.addEventListener("keydown", handleKey);