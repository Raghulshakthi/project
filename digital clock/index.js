const hrs2=document.querySelector(".hours");
const min2=document.querySelector(".min");
const sec2=document.querySelector(".sec");
function done(){
    const time=new Date();
    hrs=time.getHours()
    min=time.getMinutes()
    sec=time.getSeconds()
    hrs2.innerHTML=`<h4>Hours</h4><h1>${hrs}</h1>`
    min2.innerHTML=`<h4>min</h4><h1>${min}</h1>`
    sec2.innerHTML=`<h4>sec</h4><h1>${sec}</h1>`
}
setInterval(done,1000)