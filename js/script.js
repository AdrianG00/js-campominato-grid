//Pulsante Play 
const play = document.getElementById("play");
play.addEventListener("click", start);
let playCounter = 0;

// Start
function start() {
    
    const grid = document.getElementById("grid");
    const difficultySelector = document.getElementById("difficulty-selector");
    const difficulty = difficultySelector.value;

    if (playCounter == 0) {
        grid.classList.add("started");
    }

    difficultyManager(grid, difficulty);

    playCounter++;
}

// Difficoltà
function difficultyManager(grid, difficulty) {
    if (difficulty == 1) {
        gridGenerator(grid, 100, "easy"); //Easy
    } else if (difficulty == 2) {
        gridGenerator(grid, 81, "medium"); //Medium
    } else {
        gridGenerator(grid, 49, "hard"); //Hard
    }
}

//Genera la griglia con ciascun elemento
function gridGenerator(grid, gridTotal, className) {
    //Svuota la griglia
    grid.innerHTML = "";

    for (let i = 1; i <= gridTotal; i++) {
        //Genera gridSquare
        let gridSquare = gridSquareGenerator(className, i);

        //Aggiunge eventListener al click
        gridSquare.addEventListener("click", addActiveClass);

        //Aggiunge gridSquare alla griglia
        grid.append(gridSquare);
    }
}

//Generatore di gridSquare
function gridSquareGenerator(className, i) {
    //Crea gridSquare
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    gridSquare.classList.add(className);

    //Inserisce numero dentro gridSquare
    let gridSquareNumber = document.createElement("div");
    gridSquareNumber.classList.add("grid-number");
    gridSquareNumber.innerHTML = i;
    gridSquare.append(gridSquareNumber);

    return gridSquare;
}

//Aggiunge la classe "active" ad un elemento
function addActiveClass() {
    this.classList.add("active");
}