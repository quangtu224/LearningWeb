const btn = document.querySelector("#btn");
const heading = document.querySelector("#titel");
btn.addEventListener('click', function() {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    const colorCode = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = colorCode;
    heading.innerText = `${colorCode}`;
});