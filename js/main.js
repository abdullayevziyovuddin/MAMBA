

 let value=document.querySelectorAll(".number");

 let interval=3000;
 
 
 value.forEach((value)=>{
 let startValue=0;
 
 let endValue=parseInt (value.getAttribute("data-val"));
 
 let duration=interval/endValue;
 
 let result=setInterval(function(){
     startValue+=1;
     value.textContent=startValue;
 if(startValue==endValue){
     clearInterval(result);
 
 }
 }, duration)
 });

