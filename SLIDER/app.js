let sliders=document.querySelectorAll(".image");
let pre= document.querySelector("#pre");
let next= document.querySelector("#next");
let counter=0;

sliders.forEach((slide,index)=>{
      slide.style.left=`${index*100}%`
     // slide.style.bottom=`${index*100}%`
})
let prev=()=>{
    counter--
   // alert()
    sliders.forEach((slidar)=>{
        slidar.style.transform=`translateX(-${counter*100}%)`
       //  slidar.style.transform=`translateY(${counter*100}%)`
   })
}
let nextt=()=>{
    counter++
    sliders.forEach((slidar)=>{
        slidar.style.transform=`translateX(-${counter*100}%)`
   })
    
}
pre.addEventListener("click",()=>{
   prev()
})

next.addEventListener("click",()=>{
    nextt()
    
})

// function imageSlid(){
//     alert()
// sliders.forEach((slidar)=>{
//      slidar.style.transform=`translateX(-${counter*100}%)`
// })
// }
// imageSlid()



 


