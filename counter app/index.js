const count=document.querySelector('.counter');
const add=document.querySelector('.add');
const sub=document.querySelector('.subtract');
const resettCount=document.querySelector('.ress');


add.addEventListener('click',()=>{
    if(count.innerHTML>=20){
        count.innerHTML=0;
    }
    else{
    count.innerHTML++;    
    }
    setcolor();
});
sub.addEventListener('click',()=>{
    if(count.innerHTML<=0){
        count.innerHTML=0;
    }
    else{
        count.innerHTML--; 
    }
    setcolor();
});
resettCount.addEventListener('click',()=>{
    count.innerHTML= 0;
    setcolor();
});

/* set the color 
function setcolor(){
    if(count.innerHTML>0){

        count.Style.color="yellow";
    }
    else if(count.innerHTML<0){
        count.Style.color="orange";
    }
    else {
        count.Style.color="pink";
    }
}
*/
/*event delegation is basically allows us to implement capturing and bubbling */

/* buttons=document.querySelector('.buttons') 

buttons.addEventListener('click',(e)=>{
   if(e.target.classList.container('add')){
    count.innerHTML++;
   }
   buttons.addEventListener('click',(e)=>{
    if(e.target.classList.container('subtract')){
     count.innerHTML--;
    }
 })
 buttons.addEventListener('click',(e)=>{
    if(e.target.classList.container('ress')){
     count.innerHTML=0;
    }
 })
});
*/
