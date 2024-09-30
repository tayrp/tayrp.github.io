document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll("video");

  videos.forEach((video) => {
    video.addEventListener("fullscreenchange", () => {
      if (document.fullscreenElement === video) {
        document.exitFullscreen();
      }
    });

    video.addEventListener("click", () => {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    });
  });

  const iframes = document.querySelectorAll("iframe");

  iframes.forEach((iframe) => {
    try {
      const iframeDocument =
        iframe.contentDocument || iframe.contentWindow.document;
      const iframeVideos = iframeDocument.querySelectorAll("video");
      iframeVideos.forEach((iframeVideo) => {
        iframeVideo.addEventListener("fullscreenchange", () => {
          if (iframeDocument.fullscreenElement === iframeVideo) {
            iframeDocument.exitFullscreen();
          }
        });

        iframeVideo.addEventListener("click", () => {
          if (iframeDocument.fullscreenElement) {
            iframeDocument.exitFullscreen();
          }
        });
      });
    } catch (error) {
      console.error("Cross-origin iframe, cannot control fullscreen:", error);
    }
  });
});
