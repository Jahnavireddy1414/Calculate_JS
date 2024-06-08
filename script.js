// Wait until the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get the display element where the result and input will be shown
    const display = document.getElementById('display');
    // Select all buttons with the class 'btn'
    const buttons = document.querySelectorAll('.btn');

    // Add a click event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Retrieve the data-value and data-action attributes from the button
            const value = button.dataset.value;
            const action = button.dataset.action;
            // Handle the input based on the button's value or action
            handleInput(value, action);
        });
    });

    /**
     * Function to handle button inputs and update the display
     * @param {string} value - The numeric or decimal value from the button
     * @param {string} action - The operation or special action (e.g., clear, equals)
     */
    function handleInput(value, action) {
        switch (action) {
            case 'clear':
                // Clear the display if 'AC' (clear) is pressed
                display.innerText = '';
                break;
            case 'modulo':
                // Add '%' to the display for modulo operation
                display.innerText += '%';
                break;
            case 'divide':
                // Add '/' to the display for division
                display.innerText += '/';
                break;
            case 'multiply':
                // Add '*' to the display for multiplication
                display.innerText += '*';
                break;
            case 'subtract':
                // Add '-' to the display for subtraction
                display.innerText += '-';
                break;
            case 'add':
                // Add '+' to the display for addition
                display.innerText += '+';
                break;
            case 'equals':
                // Calculate and display the result when '=' is pressed
                calculate();
                break;
            case 'square':
                // Add '**2' to the display to indicate squaring the number
                display.innerText += '**2';
                break;
            default:
                // For numeric and decimal inputs, append the value to the display
                display.innerText += value;
                break;
        }
    }

    /**
     * Function to evaluate and display the result of the current expression
     */
    function calculate() {
        try {
            // Replace the custom square symbol with the JavaScript exponentiation operator
            let expression = display.innerText
                                .replace(/x²/g, '**2')
                                // Replace '%' with '/100' to handle percentage calculations
                                .replace(/%/g, '/100');
            // Evaluate the expression using JavaScript's eval function and update the display
            display.innerText = eval(expression);
        } catch (error) {
            // If there's an error in evaluation (e.g., malformed expression), display 'Error'
            display.innerText = 'Error';
        }
    }
});
