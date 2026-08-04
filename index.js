const ColorBtn = document.querySelectorAll(".btn");
function ColorChanger(color){
    switch(color){
        case "yellow":
        document.body.style.backgroundColor="yellow";
        break;
        case "red":
        document.body.style.backgroundColor="red";
        break;
        case "green":
        document.body.style.backgroundColor="green";
        break;
        case "aqua":
        document.body.style.backgroundColor="aqua";
        break;
        case "blue":
        document.body.style.backgroundColor="blue";
        break;
        case "gold":
        document.body.style.backgroundColor="gold";
        break;
        case "silver":
        document.body.style.backgroundColor="silver";
        break;
        case "black":
        document.body.style.backgroundColor="black";
        break;

    }
}
ColorBtn.forEach((btn)=>{
    btn.addEventListener('click',function(){
        ColorChanger(btn.innerText.toLowerCase())
    })
})