const btn =document.querySelector('.btn');
const result=document.querySelector('.result');
btn.addEventListener('click',Palindrome)

function Palindrome() {
    const word =document.querySelector('.input-text').value;
    let len =word.length;
    let start=word.substring(0,Math.floor(len/2))
    .toLowerCase();
    let end=word.substring(len-Math.floor(len/2))
    .toLowerCase();
 
    let flip=[...end].reverse().join("");
    if(start==flip){
        result.innerHTML=`${word.toUpperCase()} is a Palindrome`;
    }
    else{
        result.innerHTML=`${word.toUpperCas()} is not a Palindrome`;
    }
}
