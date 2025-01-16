document.addEventListener("DOMContentLoaded", function () {
  const names = ["Valerie"];
  const nameElement = document.getElementById("dynamic-name");
  let index = 0;
  let currentName = "";
  let typingIndex = 0;
  let isDeleting = false;

  function type() {
    if (isDeleting) {
      currentName = names[index].substring(0, typingIndex--);
    } else {
      currentName = names[index].substring(0, typingIndex++);
    }

    nameElement.textContent = currentName;

    if (!isDeleting && typingIndex === names[index].length) {
      setTimeout(() => {
        isDeleting = true;
      }, 1000);
    } else if (isDeleting && typingIndex === 0) {
      isDeleting = false;
      index = (index + 1) % names.length;
    }

    setTimeout(type, isDeleting ? 100 : 200);
  }

  type();
});
