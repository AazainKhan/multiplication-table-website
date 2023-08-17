function createTable() { //function to generate the table.
    let rowsInput = document.getElementById("rowsNumber").value; // accepts user input from the form field.
    let columnInput = document.getElementById("columnsNumber").value; // accepts user input from the form field.
    document.getElementById("multiplyTable").innerHTML = ""; // clears the table each time the function is called.

    let tbl = document.getElementById("multiplyTable") // grabs the element multiplyTable from the HTML document.    
    for (let i = 1; i <= rowsInput; i++) { // for loop runs 11 times and adds 1 each iteration staring from 0.
        
        let rows = document.createElement("tr"); // each iteration creates a "tr" element and stores in the rows variable.
        rows.id = "row" + i; // each iteration adds a row with the id "rows0", "rows1", "rows..."" to the rows variable (which creates "tr" element).
        tbl.appendChild(rows); //each iteration appends the tbl variable (holds the muliplyTable element from the HTML document).
        
        let newRow = rows; // each iteration adds each row id (eg. "row0") to the newRow variable.

        // after creating the rows and storing them in a variable with id so it can be accessed later
        // we should be looking to manipulating the rows and adding table cells.

        for (let j = 1; j <= columnInput; j++) { // for loop runs 11 iterations in each row iteration (which will be columns together). 
            let cells = document.createElement("td"); // each iteration creates a "td" element and stores in the cells variable.
            cells.id = "cell" + j; //each iteration creates a new id for the cells variable (which holds the td element)
            newRow.appendChild(cells) // each iteration appends the newRow variable with a new td cell 
            
            for (let k = 0; k < 1; k++) { // for loop runs once as the j for loop runs 11 times and text needs to be entered once in each iteration.
                k = i*j; // value of k is the summ of i (row) times j (column).
                let pElement = document.createElement("p"); // each iteration creates the "p" element.
                let insideText = document.createTextNode(`${i} x ${j} = ${k}`); // each iteration creates text.
                pElement.appendChild(insideText); // each iteration insideText (text) is added into the pElement ("p").

                cells.appendChild(pElement); // each iteration pElement is appended to each cell.
            }

        }
        // the inside text containing the mulitplication is looped once and pushed into each cell.
        // the cells variable (holds the td elements) is appened to the
        // newRow variable (holds the rows according to rowid eg. row0 )
        // then the tbl.appendChild(rows) adds the row to the multiplyTable
        // element stored in the tbl variable.
    }
}

window.onload = createTable(); //creates the table (10x10) when the page loads.