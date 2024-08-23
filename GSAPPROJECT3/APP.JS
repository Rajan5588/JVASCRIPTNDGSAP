window.addEventListener("wheel",(e)=>{
 if(e.deltaY>0){
     console.log("sidha")
gsap.to(".item",{
     transform: "translateX(-200%)",
    duration:3,
     repeat:-1,
     ease:"none"
})
gsap.to(".item img",{
     rotate:360,
     duration:2,
     ease:"none"


})
 }
 else{
     console.log("ulta")
     gsap.to(".item",{
          transform: "translateX(0%)",
       duration:2,
          repeat:-1,
          ease:"none"
     })
     gsap.to(".item img",{
          rotate:180,
          duration:2,
          ease:"none"
     
     })
 }
})