const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let botton=document.querySelector(".btn");
function getCharacter(i) {
	return hexCharacters[i];
}

function generateNewColor() {
	let hexColorRep = "#"

	for (let i= 0; i< 6; i++){
		const randomPosition = Math.floor ( Math.random(i) * hexCharacters.length ) 
    	hexColorRep += getCharacter( randomPosition )
	}
	
	return hexColorRep
}
//let random=generateNewColor();
botton.addEventListener("click",  (e)=>{
     console.log(e.target);

     botton.innerText=generateNewColor();
     document.body.style.backgroundColor=generateNewColor();
      
})