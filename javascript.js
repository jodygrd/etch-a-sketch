//CREATE GRID OF DIVS
    //  make cells
    //make rows   
    //make columns

// const para = document.createElement("p");
// para.innerHTML = "This is a paragraph.";
// document.getElementById("myDIV").appendChild(para);

//CREATE GRID
const grid_width = 16

for (let i = 0; i < grid_width; i++) {
    for (let i = 0; i < grid_width; i++) {
        const cell = document.createElement("div")
        cell.classList.add("cell");
        document.getElementById("container").appendChild(cell)
    }
}

//MAKE CELLS CHANGE ON MOUSE OVER
const cells = document.querySelectorAll(".cell")
cells.forEach(cell => {cell.addEventListener('mouseover', function(){
    cell.style.backgroundColor = "purple";
    }
)});



