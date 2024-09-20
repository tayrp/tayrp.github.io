function displayDateTime() {
    const timeZone = 'America/New_York';
    const options = {
        hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: timeZone,
        timeZoneName: 'short'
    };
    
    const currentTime = new Date().toLocaleString('en-US', options);
    document.getElementById('date-time').innerHTML = `It is ${currentTime} for Tee`;
}

setInterval(displayDateTime, 1000);
window.onload = displayDateTime;
