
var clickCounter = 0
var tressuresFound = 0
var totalSeconds = 0;


const timerDisplay =  document.getElementById("timer")
const timerInterval = setInterval(updateTimer, 1000);

document.addEventListener('click', function(event) {
    let idOfElement = event.target;

    if (!idOfElement.id ||
        !idOfElement.id.startsWith("tressure"))
    {
        console.log("id mismatch");
    } else
    {
        idOfElement.classList.add('found');
        tressuresFound += 1;
        idOfElement.removeAttribute('id');
    }
    clickCounter += 1;

    if (tressuresFound >= 10)
    {
        clearInterval(timerInterval);
    }
    console.log("tressures found: " + tressuresFound);
    console.log("total seconds: " + totalSeconds);
});



//
function updateTimer() {
    totalSeconds++;

    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}


