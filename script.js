document.addEventListener('DOMContentLoaded', () => {
    // Get all clickable divs
    const clickableDivs = document.querySelectorAll('.clickable, .hidden');

    // Iterate over each div
    clickableDivs.forEach((div, index) => {
        div.addEventListener('click', () => {
            // If there's a next div, show it
            if (index + 1 < clickableDivs.length) {
                clickableDivs[index + 1].style.display = 'block';
            }
        });
    });
});
