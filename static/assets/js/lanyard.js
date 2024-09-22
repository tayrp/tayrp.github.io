const dcstat = document.getElementById("dcstat");
const apiEndpoint = `https://api.lanyard.rest/v1/users/1050531216589332581`;
fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => {
        const dcStatus = data.data.discord_status;
        if (dcStatus === "offline") {
            dcstat.src = "/assets/imgs/offline.png"; /* dcstat.innerHTML = "{OFFLINE}" */
        } else if (dcStatus === "online") {
            dcstat.src = "/assets/imgs/online.png"; /* dcstat.innerHTML = "{ONLINE}" */
        } else if (dcStatus === "idle") {
            dcstat.src = "/assets/imgs/away.png"; /* dcstat.innerHTML = "{AWAY}" */
        } else if (dcStatus === "dnd") {
            dcstat.src = "/assets/imgs/dnd.png"; /* dcstat.innerHTML = "{DND}" */
        }
    })
    .catch(error => {
        console.error('Error fetching Discord status:', error);
    });
