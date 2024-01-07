//let color=Math.random();
//color=Math.random().tostring(16);
//color=Math.random.tostring(16).substring(2,8);


const countt=document.querySelector('.count-color');
const gen=document.querySelector('.generate');

const generatecolor=()=>{
    colorr =Math.random().toString(16).substring(2,8);
    document.body.style.backgroundColor="#"+colorr;
    countt.innerHTML="#"+colorr;
}
gen.addEventListener('click',generatecolor);
