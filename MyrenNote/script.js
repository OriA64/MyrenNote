// Wait for the DOM to load before adding event listener
document.addEventListener('DOMContentLoaded', () => {
    const notecard = document.querySelector('.notecard');

    // Toggle the "flipped" class to flip the notecard
    notecard.addEventListener('click', () => {
        notecard.classList.toggle('flipped');
    });
});
