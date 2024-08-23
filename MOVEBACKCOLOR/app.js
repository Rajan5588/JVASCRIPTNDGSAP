let rect=document.querySelector(".rect");

rect.addEventListener("mousemove",(e)=>{
    let rectLoc=  rect.getBoundingClientRect()
    
    let rectinsidel=e.clientX - rectLoc.left;
if(rectinsidel<rectLoc.width/2){
    let redColor= gsap.utils.mapRange(0, rectLoc.width/2, 255, 0, rectinsidel);
    gsap.to(rect,{
     backgroundColor:`rgb(${redColor},0,0)`,
     
     ease:Power4 })
}else{
     let blueColor= gsap.utils.mapRange(rectLoc.width/2, rectLoc.width, 255, 0, rectinsidel);
    
    gsap.to(rect,{
     backgroundColor:`rgb(0,0,${blueColor})`,
     
     ease:Power4 })
}
})

rect.addEventListener("mouseleave", (e1)=>{
console.log(e1.target);
     gsap.to(rect,{
          backgroundColor:"white"
     })
})