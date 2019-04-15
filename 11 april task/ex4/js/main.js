"use srict";
let left=document.querySelector(".left");
let right= document.querySelector(".right");
let slider
[...document.querySelectorAll(".img-row .imgs")].map(imgs=>{
    imgs.onclick = function (){
        document.querySelector(".active").classList.remove("active");
        this.classList.add("active");
        document.querySelector(".main-slider").classList.remove("d-none");
        document.querySelector(".main-slider img").src = this.src ;
       left.onclick = function(){
        const active= document.querySelector(".img-row imgs.active");
        active.classList.remove("active");
        active.previousElementSibling.classList.add("active");
        document.querySelector(".main-slider img").src=active.previousElementSibling.src;
       }
       right.onclick = function(){
        const active= document.querySelector(".img-row imgs.active");
        active.classList.remove("active");
        active.nextElementSibling.classList.add("active");
        document.querySelector(".main-slider img").src=active.nextElementSibling.src;
       }
        
    }
})



