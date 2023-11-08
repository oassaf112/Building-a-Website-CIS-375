"use strict";

window.onload = init;

var photo = null;

function init(){

    photo = document.getElementById("Omar");

    photo.addEventListener("mouseover" , next);
    //photo.addEventListener("click" , first);
    photo.addEventListener("mouseleave", function () { photo.src = "omar.jpg";});
    //photo.addEventListener("click" , );
}

function next(){
    photo.src = 'jpeg-imag.jpg';
}

// //Allows for mobile devices to flip through the pictures by clicking on them
// function first(e){
//     e.stopImmediatePropagation();
//     this.removeEventListener("click", first);
//     document.onclick = second;
// }

// function second(){
//     photo.src = 'omar.jpg';
// }