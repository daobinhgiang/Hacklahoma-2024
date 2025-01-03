function updateTime() {
    const now = new Date();
    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
    const second = now.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('hour').textContent = hour;
    document.getElementById('minute').textContent = minute;
    document.getElementById('seconds').textContent = second;
}

// Call updateTime every second to update the clock
setInterval(updateTime, 1000);

// Call updateTime initially to avoid delay in displaying the clock
updateTime();