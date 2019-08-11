window.onload = function () {
	let deckOfCards = ["2_clubs.gif","2_diamonds.gif","2_hearts.gif"];
	let shirt = "img/shirt.jpg";
	let frontSide = "img/2_hearts.gif";
	//let frontSide = [];
	let eee = document.querySelectorAll("img");
	for (let i = 0; i < eee.length; i++) {
		eee[i].addEventListener("click", rotate, false);
	}

	// function rotate(){
	// 	if(!this.clicked){
	// 	 this.src = frontSide;
    //  this.clicked = true;
	// 	}
	// 	else{
	// 		this.src = shirt;
    //   this.clicked = false;
	// 	}
	// }
	function rotate(){
		if(this.flag){
		 this.src = shirt;
		}
		else{
			this.src = frontSide;
		}
		this.flag=!this.flag;
	}

}

