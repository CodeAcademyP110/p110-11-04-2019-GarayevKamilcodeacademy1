"use srict";
let name=document.querySelector(".name");
let surname=document.querySelector(".surname");
let password=document.querySelector(".passwprd");
name.onkeyup= function(){
    let value = name.value.trim();
    if(value.length<3){
        document.querySelector(".alert-name").classList.remove("d-none");
    }
    else{document.querySelector(".alert-name").classList.add("d-none");}
}
surname.onkeyup= function(){
    let value = surname.value.trim();
    if(value.length<3){
        document.querySelector(".alert-surname").classList.remove("d-none");
    }
    else{document.querySelector(".alert-surname").classList.add("d-none");}
}





 



