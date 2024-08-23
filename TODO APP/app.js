let inputElement= document.querySelector("#inp1");
let Text= document.querySelector(".text");
let Date= document.querySelector("#Dte");

function Add(){
     if(inputElement.value == ""){ 
           alert("PLEASE ADD YOUR LIST");
     }else{
          let newEl=document.createElement("h3");
            newEl.innerHTML=`${inputElement.value}     ${Date.value}  <i class="fa-solid fa-delete-left"></i>  `
            Text.appendChild(newEl);
          inputElement.value='';
          Date.value="";
             
          newEl.querySelector("i").addEventListener("click", Remove);
         
          function Remove(){
               newEl.remove();
          }
     }
}
