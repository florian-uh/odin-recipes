// filepath: /home/flo/Documents/github/odin-recipes/html/recette2.html
document.addEventListener("DOMContentLoaded", () => {
    const preButton = document.querySelector(".btns button:first-child");
    const nextButton = document.querySelector(".btns button:last-child");
    const quantities = document.querySelectorAll(".quantite");
    const display = document.querySelector(".display p");

    // Function to update quantities
    const updateQuantities = (factor) => {
        quantities.forEach((item) => {
            const value = parseFloat(item.textContent);
            if (!isNaN(value)) {
                item.textContent = `${value * factor}${item.textContent.replace(/[0-9.]/g, '')}`;
            }
        });

        // Update the number of people in the display
        const people = parseInt(display.textContent);
        if (!isNaN(people)) {
            display.textContent = `${people * factor} personnes`;
        }
    };

    // Event listeners for buttons
    preButton.addEventListener("click", () => updateQuantities(0.5)); // Halve quantities
    nextButton.addEventListener("click", () => updateQuantities(2));  // Double quantities
});