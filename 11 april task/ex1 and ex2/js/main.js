"use srict";

// 1 ve 2 ci tapsiriglar
const empty=document.querySelector(".empty");
const send=document.querySelector(".send");
const green = document.querySelector(".green");
send.onclick=function(){
    let interval=setInterval(() => {
        let left = parseFloat(getComputedStyle(green).left);
        left= (left+10)+"px";
        green.style.left=left;
        if(left==0+"px"){
            send.classList.add("d-none");
            empty.classList.add("d-none");
            document.querySelector(".paragraphy").classList.remove("d-none");
            clearInterval(interval);
        }
    }, 300);
    empty.onmouseover=function(){
        clearInterval(interval);
        document.querySelector(".cancel").classList.remove("d-none");
    }
    empty.onmouseout=function(){
        document.querySelector(".cancel").classList.add("d-none");
         interval=setInterval(() => {
            let left = parseFloat(getComputedStyle(green).left);
            left= (left+10)+"px";
            green.style.left=left;
            if(left==0+"px"){
                send.classList.add("d-none");
                empty.classList.add("d-none");
                document.querySelector(".paragraphy").classList.remove("d-none");
                clearInterval(interval);
            }
        }, 300);
    }
}
 



