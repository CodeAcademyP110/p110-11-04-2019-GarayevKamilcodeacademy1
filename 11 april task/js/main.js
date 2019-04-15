"use srict";
// const send=document.querySelector(".send");
// const green = document.querySelector(".green");
// send.onclick=function(){
//     let left = parseFloat(getComputedStyle(green).left);
//     left =(left + 400)+"px";
//     green.style.left=left;
// }

const send=document.querySelector(".send");
const green = document.querySelector(".green");
let sliderInterval = setInterval(() => {
    let left = parseFloat(getComputedStyle(green).left);
    left =(left + 40)+"px";
    green.style.left=left;
    clearInterval(sliderInterval)
    if(getComputedStyle(green).left==="-353.208px"){
        console.log("salam")
        clearInterval(sliderInterval)
    }
}, 200); 

send.onclick= function(){
    // sliderInterval();
    // leftToRight(); 
    clearInterval(sliderInterval)
   
}
//  function leftToRight (){

//     if (getComputedStyle(green).left == "0px") {
//         clearInterval(sliderInterval)
//     }
// }
