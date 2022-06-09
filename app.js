const clock = document.querySelector('.clock');
const hou = document.querySelector('.hou');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');




setInterval(()=>{
const date = new Date();


const h =date.getHours()*30;
const m =date.getMinutes()*6;
const s = date.getSeconds()*6;


hou.style.transform =`rotateZ(${h}deg)`
min.style.transform =`rotateZ(${m}deg)`
sec.style.transform =`rotateZ(${s}deg)`
},10)

