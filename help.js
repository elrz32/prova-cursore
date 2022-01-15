gsap.set('.cursore',{xPercent:-50,yPercent:-50});

var cursor = document.querySelector('.cursore');

window.addEventListener("mousemove",e=>{
    gsap.to(cursor,0.2,{x:e.clientX,y:e.clientY})
})