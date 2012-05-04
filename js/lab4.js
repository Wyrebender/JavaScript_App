//Lab 4 (Gallery) JavaScript Document
Jcoda.domReady(function(){
	var activeImg=0; //**variable for storing the number of the current full-sized image named “activeImg” (keeps track of active image).**
	var thumbElms = document.getElementById("gallery").getElementsByTagName("a"); //**create variable to search for index.html-Line 67-77.**
		//console.log(thumbElms);
	var prevBtnElms = document.getElementById("clickHandler_prevBtn"); //**create variable to search for index.html-Line 50.**
		//console.log(prevBtnElms);
	var nextBtnElms = document.getElementById("clickHandler_nextBtn"); //**create variable to search for index.html-Line 54.**
		//console.log(nextBtnElms);

	//**loop of thumbnail image elements.**
	for(var i=0; i<thumbElms.length; i++){
		//**thumbnail<a> click handler function.**
		thumbElms[i].onclick = function(e){
			document.getElementById("lgImg").src = this.href; //**Set the src attribute of the full-size image to the href attribute of the thumbnail being clicked.**
			activeImg = this.firstChild.alt; //**change the number representation of an image.**
			console.log(activeImg);
			
			return Jcoda.stopDefault(e); //**Use stopDefault to stop the browsers' default actions.**
		};
		
		//**Click function for previous button.**
		prevBtnElms.onclick = function(e){
			if(activeImg != 0){
				activeImg--; //**decrementing “activeImg” by 1.**
				console.log(activeImg);
				
				document.getElementById("lgImg").src = thumbElms[activeImg]; //**Set the src attribute of the full-size image to be equal to the href attribute of the thumbnail being clicked.**
			}else{
				activeImg = thumbElms.length-1; //**'activeImg' starts at the last index of the array.**
				console.log(activeImg);

				document.getElementById("lgImg").src = thumbElms[activeImg]; //**Set the src attribute of the full-size image to be equal to the href attribute of the thumbnail being clicked.**
			};

			return Jcoda.stopDefault(e); //**Use stopDefault to stop the browsers' default actions.**
		};
		
		//**Click function for next button.**
		nextBtnElms.onclick = function(e){
			if(activeImg < thumbElms.length-1){
				activeImg++; //**incrementing “activeImg” by 1.**
				console.log(activeImg);
				
				document.getElementById("lgImg").src = thumbElms[activeImg]; //**Set the src attribute of the full-size image to be equal to the href attribute of the thumbnail being clicked.**
			}else{
				activeImg = 0; //**'activeImg' starts at the first index of the array.**
				console.log(activeImg);
				
				document.getElementById("lgImg").src = thumbElms[activeImg]; //**Set the src attribute of the full-size image to be equal to the href attribute of the thumbnail being clicked.**
			};
			
			return Jcoda.stopDefault(e);  //**Use stopDefault to stop the browsers' default actions.**
		};
	};
});