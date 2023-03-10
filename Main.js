const colors =["Green", "Red", "Yellow", "Blue", "Grey", "Orange", "Indigo", "Violet"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function (){
    // console.log(randomNumber);
    // get random number between 0 and 7 colors[0]
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];

})

function getRandomNumber (){
 return Math.floor(Math.random()*colors.length);
}