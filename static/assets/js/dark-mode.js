function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "enabled");
  } else {
    localStorage.setItem("dark-mode", "disabled");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const darkModeSetting = localStorage.getItem("dark-mode");
  
  if (darkModeSetting === "enabled" || darkModeSetting === null) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
});
