let storiya=document.querySelector(".storiya");

let arr=[
     {dp:"1.jpeg",story:"2.jpeg"},
     {dp:"2.jpeg",story:"3.jpeg"},
     {dp:"4.jpeg",story:"5.jpeg"},
     {dp:"5.jpeg",story:"1.jpeg"},
]
var cluster=""

arr.forEach((e,idx)=>{
     cluster+=`   <div class="story">
                    <img id="${idx}"src="${e.dp}" >
                    </div>`
})
 storiya.innerHTML=cluster;
storiya.addEventListener("click", (dets)=>{
     document.querySelector(".full-screen").style.display="block";
     document.querySelector(".full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`
 setTimeout(()=>{
     document.querySelector(".full-screen").style.display="none";
 },3000)

})