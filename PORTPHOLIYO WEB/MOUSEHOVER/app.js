let bords=document.querySelectorAll(".bord1");

bords.forEach((bord)=>{
   
bord.addEventListener("mouseenter",(e)=>{

  bord.childNodes[3].style.opacity=1;
})

bord.addEventListener("mouseleave",(e)=>{

     bord.childNodes[3].style.opacity=0;
   })
   bord.addEventListener("mousemove",(e)=>{
     bord.childNodes[3].style.left=e.x+"px"
          bord.childNodes[3].style.top=e.y+"px"
   })
})