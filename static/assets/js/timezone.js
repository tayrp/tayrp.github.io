function displayDateTime() {
    const timeZone = 'America/New_York';
    const options = {
        hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: timeZone,
        timeZoneName: 'short'
    };
    
    const currentTime = new Date().toLocaleString('en-US', options);
    
    const now = new Date();
    const timeZoneOffset = now.getTimezoneOffset() / -60; 
    const gmtOffset = timeZoneOffset >= 0 ? `GMT+${timeZoneOffset}` : `GMT${timeZoneOffset}`;
    document.getElementById('date-time').innerHTML = `It is ${currentTime} (${gmtOffset})`;
}
setInterval(displayDateTime, 1000);
window.onload = displayDateTime;
