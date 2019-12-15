let container = document.querySelector("#etchContainer");
let grid = document.createElement("div")

grid.style.height = "600px";
grid.style.width = "600px";
grid.style.display = "grid";



let resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", function(){
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
    drawGrid(prompt("How many pixels per side?"));
})


function drawGrid(size){
    

    let gridsize = 600/size;

   
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            let newDiv = document.createElement("div");
            
            newDiv.style.height = gridsize + "px";
            newDiv.style.width = gridsize + "px";
            newDiv.className = "pixel";
            newDiv.style.background = "#FFFFFF";
            newDiv.id = "box" + ((i * size) + j + 1);
            grid.appendChild(newDiv);
        }
    }

    container.appendChild(grid);

    let pixelArray = document.querySelectorAll(".pixel");

    pixelArray.forEach(pixel => {
        pixel.addEventListener("mouseover", event => {
            pixel.style.background = "#000000";
        })
    })
}


// grid init
drawGrid(16);