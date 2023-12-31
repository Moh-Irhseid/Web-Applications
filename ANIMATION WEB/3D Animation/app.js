const parallax_el = document.querySelectorAll('.parallax');
let x=0 ,y=0;

window.addEventListener("mousemove", (e) =>{
x=e.clientX - window.innerWidth/2;
y = e.clientY - window.innerHeight/2;
console.log(x,y);

parallax_el.forEach((el) => {
    let speedx= el.dataset.speedx;
    let speedy = el.dataset.speedx;;
el.style.transform = 
`translateX(calc(-50% + ${-x * speedx}px)) 
translateY(calc(-50% + ${-y * speedy}px))`;
});
});