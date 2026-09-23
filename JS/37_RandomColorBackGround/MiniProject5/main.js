const btns = document.querySelectorAll(".btn");
const count = document.querySelector(".count");
let temp = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //Get the position of the button in view port
    const position = e.target.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;
    const xInside = x - position.left;
    const yInside = y - position.top;
    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.left = xInside + "px";
    circle.style.top = yInside + "px";
    e.target.appendChild(circle);
    temp++;
    count.textContent = `How many times have you clicked? ${temp}`;
  });
});
