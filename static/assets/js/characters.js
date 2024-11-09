document.querySelectorAll(".character-links").forEach((link) => {
  link.onclick = function (event) {
    event.preventDefault();
    const backstory = this.getAttribute("data-backstory");
    document.getElementById("character-backstory-text").innerText = backstory;
    document.getElementById("charpopup").style.display = "block";
  };
});

document.getElementsByClassName("close")[0].onclick = function () {
  document.getElementById("charpopup").style.display = "none";
};

window.onclick = function (event) {
  if (event.target == document.getElementById("charpopup")) {
    document.getElementById("charpopup").style.display = "none";
  }
};
