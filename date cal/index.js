const month=["January",
  "  February" ,
    "March ",
    "April" ,
    "May" ,
    "June" ,
    "July" ,
    "August" ,
    "September" ,
    "October" ,
    "November" ,
    "December" ]

    const MonE1=document.querySelector(".month");
    const dayE1=document.getElementById("day");
    const dateE1=document.getElementById("date");
    const yearE1=document.getElementById("year");

const date= new Date();
let dat=date.getDate();
let year=date.getFullYear()
console.log(year);
MonE1.innerHTML=`<p class="month"> ${month[date.getMonth()]}</p>`;
dayE1.innerText=date.toLocaleString("en",{ weekday: "long"})
dateE1.innerText=date.getDate();
yearE1.innerText=date.getFullYear();
