// Get reference to HTML elements
const countdownSection = document.getElementById('countdown-section');
const countdownHoursInput = document.getElementById('countdown-hours');
const countdownMinutesInput = document.getElementById('countdown-minutes');
const countdownSecondsInput = document.getElementById('countdown-seconds');
const startCountdownButton = document.getElementById('start-countdown-button');
const clockElement = document.getElementById('clock');

// Function to update the countdown clock
function updateCountdownClock(targetDate) {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown values in the HTML elements
    countdownHoursInput.value = hours;
    countdownMinutesInput.value = minutes; // Corrected variable name
    countdownSecondsInput.value = seconds; // Corrected variable name

    // If the countdown is finished, show the real-time clock and hide the countdown section
    if (distance < 0) {
        clearInterval(countdownInterval);
        clockElement.style.display = 'block';
        countdownSection.style.display = 'none';
        
        // Show the bubble
        showBubble();
    }
}

// Function to show the bubble
function showBubble() {
    const bubble = document.querySelector('.bubble');
    bubble.style.display = 'block';
}

// Function to start the countdown
function startCountdown() {
    const hoursInput = parseInt(countdownHoursInput.value) || 0;
    const minutesInput = parseInt(countdownMinutesInput.value) || 0;
    const secondsInput = parseInt(countdownSecondsInput.value) || 0;

    // Convert input values to milliseconds
    const totalMilliseconds = (hoursInput * 3600 + minutesInput * 60 + secondsInput) * 1000;

    // Calculate target date
    const targetDate = new Date().getTime() + totalMilliseconds;

    // Hide the real-time clock
    clockElement.style.display = 'none';

    // Show the countdown section
    countdownSection.style.display = 'block';

    // Update the countdown clock immediately
    updateCountdownClock(targetDate);

    // Update the countdown clock every second
    countdownInterval = setInterval(function () {
        updateCountdownClock(targetDate);
    }, 1000);
}

// Event listener to handle clicks on the Timer menu option
document.getElementById('timer-option').addEventListener('click', function() {
    // Show the countdown section when Timer is clicked
    countdownSection.style.display = 'block';
    clockElement.style.display = 'none'; // Hide the real-time clock when the countdown section is shown
});

// Event listener to handle clicks on the Start Countdown button
startCountdownButton.addEventListener('click', startCountdown);
