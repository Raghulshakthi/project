const hourE=document.querySelector(".hour");
const minE=document.querySelector(".min");
const secE=document.querySelector(".sec");


function update(){
    const currentdate= new Date();
    const hour=currentdate.getHours();
    const min=currentdate.getMinutes();
    const sec=currentdate.getSeconds();
    const hourdeg=(hour/12)*360;
    const mindeg=(min/60)*360;
    const secdeg=(sec/60)*360;
    hourE.style.transform=`rotate(${hourdeg}deg)`;
    minE.style.transform=`rotate(${mindeg}deg)`;
    secE.style.transform=`rotate(${secdeg}deg)`;
    console.log(hour,min,sec);

}
setInterval(update,1000);