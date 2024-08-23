var rect=document.querySelector(".rect");
window.addEventListener("mousemove",(e)=>{
     let xval= gsap.utils.mapRange(0, window.innerWidth,200+rect.getBoundingClientRect().width/2,window.innerWidth-310 ,e.clientX);
     let yval= gsap.utils.mapRange(0,window.innerWidth,300+rect.getBoundingClientRect().width/2,window.innerWidth-590 ,e.clientY);
     gsap.to(rect,{
          left:xval+"px",
          top:yval+"px",
          ease:Power3,
     })
})