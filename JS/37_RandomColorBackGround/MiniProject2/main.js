const panels = document.querySelectorAll(".panel");
function removeActive() {
  panels.forEach((panel) => {
    if (panel.classList.contains("active")) panel.classList.remove("active");
  });
}
for (let panel of panels) {
  panel.addEventListener("click", () => {
    removeActive();
    panel.classList.add("active");
  });
}
