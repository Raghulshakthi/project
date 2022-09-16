const containerE1 = document.querySelector(".container");
const x = document.querySelector(".l-box");
const y = document.querySelector(".r-box");
window.addEventListener("mousemove" ,(event)=>{
    containerE1.innerHTML=`<div class=l-box>
    <h1>${event.clientX}x pos</h1>
    </div>
    <div class=r-box>
    <h1>${event.clientY}Ypos</h1>
    </div>`
});