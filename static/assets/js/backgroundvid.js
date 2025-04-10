const videos = [
  "https://im.valerie.lol/r/NKLFb9.webm?compress=false"
];

function setRandomVideo() {
  const randomVideo = videos[Math.floor(Math.random() * videos.length)];
  const videoSource = document.querySelector("#bgVideo source");
  videoSource.src = randomVideo;
  const bgVideo = document.getElementById("bgVideo");
  bgVideo.load();
}

window.onload = setRandomVideo;
