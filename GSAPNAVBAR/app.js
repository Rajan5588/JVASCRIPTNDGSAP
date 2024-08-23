let tl=gsap.timeline();
 let Clearr=document.querySelector(".right i");
 let Vieww=document.querySelector(".nav i");
tl.to(".right",{
     right:0,
     duration:0.8,
})

tl.from(".right a",{
     x:150,
     color:"red",
     duration:1,
     opacity:0,
     stagger:0.38,
     ease:"power3.out"
})


tl.pause()

Vieww.addEventListener("click",()=>{
   tl.play()
})
 Clearr.addEventListener("click",()=>{
     tl.reverse()
 })
