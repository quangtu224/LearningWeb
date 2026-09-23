const search = document.querySelector(".search");
const button = document.querySelector(".btn");
const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const history = document.querySelector(".history");
button.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
submit.addEventListener("click", () => {
  const value = input.value;
  const li = document.createElement("li");
  li.innerText = value;
  history.appendChild(li);
  input.value = "";
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const value = input.value;
    const li = document.createElement("li");
    li.innerText = value;
    history.appendChild(li);
    input.value = "";
  }
});
