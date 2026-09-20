function randomColor()
{
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    const colorCode = `rgb(${r},${g},${b})`;
    return colorCode;
}

const btnList = document.querySelectorAll(".btn");
for(let btn of btnList)
{
    if(btn instanceof HTMLElement)
    {
        btn.addEventListener("click", function (){
            btn.style.backgroundColor = randomColor();
            btn.style.color = randomColor();
        });
    }
}

const titelList = document.querySelectorAll(".titel");
for(let titel of titelList)
{
    if(titel instanceof HTMLElement)
    {
        titel.addEventListener("mouseover", function (){
            titel.style.backgroundColor = randomColor();
        })
    }
}