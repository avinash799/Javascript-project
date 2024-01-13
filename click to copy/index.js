const inp=document.querySelector('Input');
const btn=document.querySelector('.btn');

const copyText=(e)=>{
    e.preventDefault();
    inp.select();
    inp.setSelectionRange(0,9999);
    document.execCommand("copy");
    btn.textContent="Copied!!";
    setTimeout(()=>{
           btn.textContent="Copy!!";
    },3000);

    
};
btn.addEventListener('click',copyText);