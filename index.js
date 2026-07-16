// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
    // Generate a random valid hex color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    document.body.style.backgroundColor = randomColor;
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
    document.body.style.backgroundColor = '';   // Must be empty string for tests
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
    const keyDisplay = document.getElementById('keyPressDisplay');
    if (keyDisplay) {
        keyDisplay.textContent = `Key pressed: ${event.key}`;   // Exact text required by test
    }
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
    const input = document.getElementById('textInput');
    const display = document.getElementById('textInputDisplay');
    
    if (input && display) {
        display.textContent = `You typed: ${input.value}`;   // Exact format required by test
    }
}

// Attach Event Listeners
function setupEventListeners() {
    // Change background color button
    const changeBtn = document.getElementById('changeColorButton');
    if (changeBtn) {
        changeBtn.addEventListener('click', changeBackgroundColor);
    }

    // Reset background color button (double-click)
    const resetBtn = document.getElementById('resetColorButton');
    if (resetBtn) {
        resetBtn.addEventListener('dblclick', resetBackgroundColor);
    }

    // Keyboard input
    document.addEventListener('keydown', displayKeyPress);

    // Real-time text input
    const textInputEl = document.getElementById('textInput');
    if (textInputEl) {
        textInputEl.addEventListener('input', displayUserInput);
    }
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', setupEventListeners);
}

// Export for testing
module.exports = {
    changeBackgroundColor,
    resetBackgroundColor,
    displayKeyPress,
    displayUserInput,
    setupEventListeners,
};