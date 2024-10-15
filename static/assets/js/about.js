document.addEventListener("DOMContentLoaded", function () {
    var overlay = document.getElementById("overlay");
    var content = document.getElementById("content");
    var enterButton = document.getElementById("enterButton");
    var video = document.getElementById("aboutvideo");
    var volumeControl = document.getElementById("volumeControl");
    var volumePercentage = document.getElementById("volumePercentage");

    enterButton.onclick = function () {
        overlay.style.display = "none";
        content.style.display = "block";
        video.muted = false; // Unmute video
        video.play(); // Autoplay video
    };

    video.volume = volumeControl.value;
    volumePercentage.innerHTML = Math.round(volumeControl.value * 100) + "%";

    volumeControl.addEventListener("input", function () {
        video.volume = volumeControl.value;
        var percentage = Math.round(volumeControl.value * 100);
        volumePercentage.innerHTML = percentage + "%";
    });
});
