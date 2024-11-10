const videos = [
  "https://index.havenmc.org/website/assets/mp4/fightsong.mp4",
  "https://index.havenmc.org/website/assets/mp4/usurper.mp4",
  "https://index.havenmc.org/website/assets/mp4/lmwasabi.mp4",
  "https://index.havenmc.org/website/assets/mp4/canyoufeelmyheart.mp4",
];

function setRandomVideo() {
  const randomVideo = videos[Math.floor(Math.random() * videos.length)];
  const videoSource = document.querySelector("#bgVideo source");
  videoSource.src = randomVideo;
  const bgVideo = document.getElementById("bgVideo");
  bgVideo.load();
}

window.onload = setRandomVideo;
