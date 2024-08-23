let Display= document.querySelector(".Display");
let startBtn= document.querySelector("#StartBtn");
let stopBtn = document.querySelector("#StopBtn");
let resetBtn= document.querySelector("#ResetBtn");

let msec = 0 ;
let secs = 0;
let min =  0 ;

let SetTimer=null;
 
startBtn.addEventListener("click", (r)=>{
     console.log(r.target);
     if(SetTimer !== null){
          clearInterval(SetTimer);
     }
     
    SetTimer= setInterval(starTime, 10);
})

stopBtn.addEventListener("click", ()=>{
     clearInterval(SetTimer);
})
resetBtn.addEventListener("click", ()=>{
     clearInterval(SetTimer);
     Display.innerHTML="00 : 00 : 00 ";
     msec=secs=min=0;
})



function starTime(){
msec++;
if(msec==100){
     msec=0;
     secs++
     if(secs==60){
          secs=0;
          min++
     }
     
let msecString=msec<10 ?`0${msec}`:msec;
let secsString=secs<10?`0${secs}`:secs;
let minString=min<10?`0${min}`:min;


Display.innerHTML=`${msecString}: ${secsString}: ${minString}`
}
}