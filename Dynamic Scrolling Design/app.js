let text = document.getElementById("text");
let leftGate= document.getElementById('gate-left');
let rightGate= document.getElementById('gate-right');
let leftTree= document.getElementById('tree-left');
let rightTree= document.getElementById('tree-right');
window.addEventListener('scroll',()=>{
let value= window.scrollY;
text.style.marginTop=value * 2.5+"px";
leftGate.style.left= value * -.5+'px';
rightGate.style.left= value * .5+'px';

leftTree.style.left= value * -1.5+'px';
rightTree.style.left= value * 1.5+'px';

});