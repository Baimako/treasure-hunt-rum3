// track any clicks to
document.addEventListener('click', function(event) {
    let idOfElement = event.target;
    if (!idOfElement.id) {
        console.log("id is empty")
    } else {
        idOfElement.classList.add('found');
    }
});


