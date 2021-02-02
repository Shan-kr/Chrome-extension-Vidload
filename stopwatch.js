var minute  = document.getElementById("min");
      var second  = document.getElementById("sec");
      var hr  = document.getElementById("hr");
      var Id=0; 
      var sec=0;
      var hr=0;
       var min=0;
      var paused=1;
   function printmsg(){
       sec++;
       if(sec>60){
       min++;
       sec=0;
       }
       if(min>60){
           hr++;
           min=0;
       }
       hr.innerHTML=hr;
       minute.innerHTML=min;
      second.innerHTML=sec;
   }
setInterval(function(){
    if(!paused)
   Id=window.setTimeout(printmsg,1000);
   else
   window.clearTimeout(Id);
},1000);

document.getElementById("myButton").addEventListener("click", function(){
  this.innerHTML = (paused ^= 1) ? "Start" : "Stop";
});
document.getElementById("restart").addEventListener("click",function(){
   sec=-1;
   min=0;
   hr=0;
   printmsg();
});