const number=document.querySelector('.count');
const gentt=document.querySelector('.gen');

const generatenumber=()=>{
    const randomnumber=Math.floor(Math.random()*10+1);
    number.innerHTML=randomnumber;
}
gentt.addEventListener('click',generatenumber);
generatenumber();