//CREATE GRID OF DIVS
    //  make cells
    //make rows   
    //make columns

// const para = document.createElement("p");
// para.innerHTML = "This is a paragraph.";
// document.getElementById("myDIV").appendChild(para);

// //GET GRID WIDTH
// let grid_width = 16
// createGrid(grid_width);

createGrid(16);
sketch();
getSize();

//QUERY FOR SIZE;
function getSize(){
    const buttons = document.querySelectorAll("button")
    buttons.forEach( button => button.addEventListener("click", function(){
        document.getElementById("container").innerHTML = ""
        let grid_width = 0;
        do {
            grid_width = prompt("Pick a number between 10 and 100!");
        } while (grid_width < 10 || grid_width > 100)
        createGrid(grid_width);
        sketch();   
    }))
}



//CREATE GRID
function createGrid(grid_width){
    const cell_width = 400 / grid_width
    for (let i = 0; i < grid_width; i++) {
        for (let i = 0; i < grid_width; i++) {
            const cell = document.createElement("div")
            cell.classList.add("cell");
            document.getElementById("container").appendChild(cell)
            cell.style.width = cell_width + "px"
        }
    }   

}

//MAKE CELLS CHANGE ON MOUSE OVER
function sketch() {
    const cells = document.querySelectorAll(".cell")
    cells.forEach(cell => {cell.addEventListener('mouseover', function(){
        cell.style.backgroundColor = "purple";
    }
)});
}





