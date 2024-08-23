let h1=document.querySelector("h1");
let h1Text=h1.textContent;

   let spliting=h1Text.split("");
   let halfValue=Math.ceil(spliting.length/2);
   console.log(halfValue)
   let clustor=""
   spliting.forEach((e,idx)=>{
  if(idx<halfValue){
     clustor +=`<span class="a">${e}</span>`;
     
  }else{
     clustor +=`<span class="b">${e}</span>`;
    
  }
   })
   h1.innerHTML=clustor;
  




   gsap.from(".a",{
     y:70, 
     duration:0.7,
     stagger:-0.15,
     opacity:0,
     repeat:-1,
   })
   gsap.from(".b",{
     y:70, 
     duration:0.7,
     stagger:0.15,
     opacity:0,
     repeat:-1,
   })