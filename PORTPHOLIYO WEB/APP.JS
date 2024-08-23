let Disp= document.querySelector("#dis");
const botton= document.querySelector("#btn");
const mainFram=document.querySelector(".mainFram");
 let path="M 10 100 Q 490 100 970 100";
 let finalPath="M 10 100 Q 490 100 970 100";

mainFram.addEventListener("mousemove",(dets)=>{
   
      path=`M 10 100 Q 525  ${dets.y} 1049 100`
      console.log(path)
      gsap.to("svg path",{
     attr:{d:path},
          
          ease:"power3.out"
      })
})
mainFram.addEventListener("mouseleave",()=>{
     console.log(finalPath)
     gsap.to("svg path",{
          attr:{d:finalPath},

          ease:"bounce.out",
     })
})

gsap.from("#namer",{
     x:150,
     duration:3,
     stagger:1,
     opacity:0,
     
})


function Display(){
    let clas= document.querySelector(".nav");
    clas.classList.toggle("navJs");
}

Disp.addEventListener("click", (e)=>{
     console.log(e.target)
     Display();
})
;
   let count=0;
botton.addEventListener("click", (e)=>{
     console.log(e.target)
     if(count==0){
     document.body.style.backgroundColor="white";
     count=1;
     botton.innerText="DARK MODE"
     }else{
          document.body.style.backgroundColor="black";
          count=0;
          botton.innerText="LIGHT MODE"
     }
})

const Texth5=document.querySelector(".h5");
const BtnSum=document.querySelector("#sumi");

BtnSum.addEventListener("click", ()=>{
     Texth5.innerText="your details is successfull send"
})
