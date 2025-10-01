// button 1: change background color

const button1 = document.getElementById("button1");


button1.addEventListener("click", changeBackgroundColor);


function changeBackgroundColor(){
    document.getElementsByClassName("bucket-body")[0].style.backgroundColor = "#9dddf6ff";
}

// button 2: show/hide table

const button2 = document.getElementById("button2");


button2.addEventListener("click", displayTable);

function displayTable(){
    const table = document.getElementById("bucket-table");
    if(table.style.display === "none"){
        table.style.display = "table";
        button2.innerText = "Click to not see something"
    }
    else {
        table.style.display = "none";
        button2.innerText = "Click to see something";
    }
}