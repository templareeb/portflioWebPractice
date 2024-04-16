function toggleDarkMode() {
    // Select specific elements to be toggled
    const elementsToToggle = document.querySelectorAll('.item, p, h1, h2, h3, .container, body');

    // Loop through each element
    elementsToToggle.forEach(element => {
        // Get the current computed color values
        const computedStyles = window.getComputedStyle(element);
        const currentColor = computedStyles.color;
        const currentBgColor = computedStyles.backgroundColor;

        // Determine if the element is in dark mode (black text on white background)
        const isInDarkMode = (currentColor === 'rgb(0, 0, 0)' && currentBgColor === 'rgb(255, 255, 255)');

        // Toggle colors based on the current mode
        if (isInDarkMode) {
            // Switch to light mode (white text on black background)
            element.style.color = 'white';
            element.style.backgroundColor = 'black';
        } else {
            // Switch to dark mode (black text on white background)
            element.style.color = 'black';
            element.style.backgroundColor = 'white';
        }
    });
}
