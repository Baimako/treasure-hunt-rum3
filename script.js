// track any clicks to

var clickCounter = 0
var tressuresFound = 0
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

    console.log("tressures found: " + tressuresFound);
});



