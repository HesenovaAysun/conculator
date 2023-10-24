const  calculEl=document.querySelector('.calcul');
const hourEl=document.querySelector('.hour');
let value=document.querySelector('.value');


let clear=document.querySelector('.ac');
let cler=document.querySelector('.c');
let percent=document.querySelector('.percent');
let division=document.querySelector('.division');
let equalel = document.querySelector('.equal');
let sub


let click1=document.querySelector('.number-1');
let click2=document.querySelector('.number-2');
let click3=document.querySelector('.number-3');
let click4=document.querySelector('.number-4');
let click5=document.querySelector('.number-5');
let click6=document.querySelector('.number-6');
let click7=document.querySelector('.number-7');
let click8=document.querySelector('.number-8');
let click9=document.querySelector('.number-9');
let click0=document.querySelector('.number-0');




 clear.addEventListener("click",()=>{
    value.textContent = " ";
 })
 cler.addEventListener("click",()=>{
    value.textContent = " ";
 })

click0.addEventListener("click",()=>{
    value.textContent +=click0.innerText;
})
click1.addEventListener("click",()=>{
    value.textContent +=click1.innerText;
})
click2.addEventListener("click",()=>{
    value.textContent +=click2.innerText;
})
click3.addEventListener("click",()=>{
    value.textContent +=click3.innerText;
})
click4.addEventListener("click",()=>{
    value.textContent +=click4.innerText;
})
click5.addEventListener("click",()=>{
    value.textContent +=click5.innerText;
})
click6.addEventListener("click",()=>{
    value.textContent +=click6.innerText;
})
click7 .addEventListener("click",()=>{
    value.textContent +=click7.innerText;
})
click8.addEventListener("click",()=>{
    value.textContent +=click8.innerText;
})
click9.addEventListener("click",()=>{
    value.textContent +=click9.innerText;
})

