// let Text=document.querySelector(".text");
// let Btn=document.querySelector("#btn");

// Btn.addEventListener("click", ()=>{
//   GrowElement++;
//   Text.innerText=GrowElement;
// })
// let GrowElement=0;
// Text.innerText=GrowElement;

 let Text=document.querySelector(".text");
let Color= document.querySelector("#clr") ;
 let 
 ColorValue="";;
Color.addEventListener("click", ()=>{
  console.log(ColorValue)
  ColorValue= Color.value
  document.body.style.backgroundColor=ColorValue;
  Text.innerText=ColorValue;
  if(ColorValue== "#000000"){
    document.body.style.color="white";
  }
  
})
