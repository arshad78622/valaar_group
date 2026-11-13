const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let current = 0;

function showSlide(index){

    slides.forEach(slide=>slide.classList.remove("active"));
    dots.forEach(dot=>dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

document.querySelector(".next").onclick=()=>{

    current++;

    if(current>=slides.length){
        current=0;
    }

    showSlide(current);

}

document.querySelector(".prev").onclick=()=>{

    current--;

    if(current<0){
        current=slides.length-1;
    }

    showSlide(current);

}

setInterval(()=>{

    current++;

    if(current>=slides.length){
        current=0;
    }

    showSlide(current);

},5000);// placeholder for slider JS