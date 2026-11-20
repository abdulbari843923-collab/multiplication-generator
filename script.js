const startInput = document.getElementById("startNumber")

const endInput = document.getElementById("endNumber")

const generateBtn = document.getElementById("generateBtn");

const resultsDiv = document.getElementById("results")

const clearBtn = document.getElementById("clearBtn")

generateBtn.addEventListener ("click", function() {


    if(startInput.value === "" || endInput.value === ""){


        alert("please enter both numbers");

        return
    
    }    

    const start = Number(startInput.value);

    const end = Number(endInput.value);

    
    if (start > end) {

    alert("Starting number cannot be greater than ending number");

    return;

    }

    resultsDiv.innerHTML = "";

    for (let i = start; i <= end; i++) {

        const tableDiv = document.createElement("div");

        tableDiv.className = "table-card"

        const heading = document.createElement("h3");

        heading.textContent = "Table of " + i;

        tableDiv.appendChild(heading);

        for (let j = 1; j <= 10; j++) {

            const line = document.createElement("p");

            line.textContent = i + " × " + j + " = " + (i * j);

            tableDiv.appendChild(line);

        }

        resultsDiv.appendChild(tableDiv);

    }

});


clearBtn.addEventListener("click", function() {

    resultsDiv.innerHTML = "";

});