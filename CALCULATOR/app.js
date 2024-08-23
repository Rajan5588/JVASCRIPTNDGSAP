let String='';

let buttons=document.querySelectorAll(".btn");

Array.from(buttons).forEach((button)=>{
     button.addEventListener('click', (e)=>{
          if(e.target.innerHTML== "="){
               String=eval(String);
               document.querySelector("#inpu").value=String;
          }
          else if (e.target.innerHTML== 'DEL'){
               String='';
               document.querySelector("#inpu").value=String;

          }

          else{
      String=String+e.target.innerHTML;
      document.querySelector("#inpu").value=String;
     
          }
     })
})