// initialise the variables necessary
var clickCounter = 0
var tressuresFound = 0
var totalSeconds = 0;

// get all the interactive items
const timerDisplay =  document.getElementById("timer")
const timerInterval = setInterval(updateTimer, 1000);
const tressureFoundCounter  = document.getElementById("foundCount")
const statement = document.getElementById("statement")


// track all the clicks
document.addEventListener('click', function(event) {
    let idOfElement = event.target;

    if (!idOfElement.id ||
        !idOfElement.id.startsWith("treasure")) {
        console.log("id mismatch");
    } else {
        idOfElement.classList.add('found');
        tressuresFound += 1;
        idOfElement.removeAttribute('id');
    }
    clickCounter += 1;

    if (tressuresFound >= 12) {
        clearInterval(timerInterval);
        statement.innerText = "You found all tressures in " + totalSeconds + " seconds and it took total of " + clickCounter + " clicks";

    }

    tressureFoundCounter.innerText = tressuresFound;

    })


function updateTimer() {
    totalSeconds++;

    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}


