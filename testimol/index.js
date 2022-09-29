const arr=[
    {
        name:"Germany Kent",
        pic:"toa-heftiba-O3ymvT7Wf9U-unsplash.jpg",
        text:"Never give up hope. All things are working for your good. One day, you'll look back on everything you've been through and thank God for it.",

    },
    {
        name:"Germany Kent",
        pic:"warren-wong-VVEwJJRRHgk-unsplash.jpg",
        text:"Sometimes, you might find it impossible to change things outside yourself, but you must remember that life isn’t about what happens to you, it is more about how you react to it",

    },
    {
        name:"Germany Kent",
        pic:"joseph-gonzalez-iFgRcqHznqg-unsplash.jpg",
        text:"Momentary kindness today could be what keeps someone holding on tomorrow",
    },
]
const imge1=document.querySelector(".img");
const txtE1=document.querySelector(".text");
const username=document.querySelector(".userN");

let indx=0;
update()
function update(){
    const{name , pic , text}=arr[indx];
    imge1.src=pic;
    txtE1.innerHTML=text;
    username.innerHTML=name;
    indx++;
    if(indx===arr.length)
    {
        indx=0;
    }
    setTimeout(()=>{update()},10000)
}
