//https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/1.png

const container = document.getElementById("container");
const baseURL =
  "https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";

for (let i = 1; i <= 150; i++) {
  const newDiv = document.createElement("div");
  const parentDiv = container.appendChild(newDiv);
  const newImg = document.createElement("img");
  newImg.src = `${baseURL}${i}.png`;
  parentDiv.appendChild(newImg);
  const newSpan = document.createElement("span");
  newSpan.innerText = `#${i}`;
  parentDiv.appendChild(newSpan);
}
