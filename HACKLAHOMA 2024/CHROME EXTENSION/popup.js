// Function to start the countdown
function startCountdown(minutes) {
    // Calculate the target time in milliseconds
    const targetTime = new Date().getTime() + (minutes * 60 * 1000);

    // Update the countdown every second
    const intervalId = setInterval(() => {
        // Get the current time
        const now = new Date().getTime();
        
        // Calculate the remaining time
        const remainingTime = targetTime - now;
        
        // If remaining time is less than or equal to 0, stop the countdown
        if (remainingTime <= 0) {
            clearInterval(intervalId);
            document.getElementById('clock').textContent = 'Countdown Finished!';
            return;
        }
        
        // Convert remaining time to minutes and seconds
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        // Display the remaining time in the clock element
        document.getElementById('clock').textContent = `${minutes}m ${seconds}s`;
    }, 1000);
}

// Function to handle the start countdown button click event
document.getElementById('start-countdown-btn').addEventListener('click', function() {
    // Get the input value (minutes)
    const minutes = parseInt(document.getElementById('countdown-input').value);

    // Check if input is valid (a positive number)
    if (!isNaN(minutes) && minutes > 0) {
        // Start the countdown
        startCountdown(minutes);
    } else {
        // Display error message if input is invalid
        alert('Please enter a valid number of minutes.');
    }
});
