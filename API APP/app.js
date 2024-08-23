     
let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=7a59c1240ac34affb6f80073671174af";
let Item=document.querySelector(".cont");


     let getVideo= async()=>{
       try {
          let res=await axios(url)
          return res.data.articles;
       } catch (error) {
          console.log("eror ḍ")
       }

     }
     async function res(){
     let results= await getVideo();
results.forEach((result) => {
   // console.log( result.title)
    let i= result.url
    console.log(i)
    Item.innerText=i;
     return result.title;
})}

 
let btn=document.querySelector(".btn");
let input=document.querySelector("input");

btn.addEventListener("click",async(e) => {
   
   let news= await res();
//    console.log(news)
//   console.log(e.target)
//   document.body.innerText=news;
})


