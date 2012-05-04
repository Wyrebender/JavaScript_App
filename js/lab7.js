//Lab 7 (Autocompleter) JavaScript Document.
Jcoda.domReady(function(){
		
	//**method for key pressing up on input text field (autocompleter.html-Line 50).**
	Jcoda.$("#toInput").onkeyup = function(e){
		
		//**call AJAX module.**
		Jcoda.ajax({
			url: "xhr/getemails.php", //**URL for database file.**
			
			//**method for successfully loading file.**
			onSuccess:function(results){
				Jcoda.$("#messageArea").style.display = "block"; //**search element to show dropdown list (autocompleter.html-Line 52)**
				Jcoda.$("#messageArea").innerHTML = ""; //**clear content inside element (autocompleter.html-Line 52).**
				var emailData = results.getElementsByTagName("email"); //**variable to store xml data as a collection.**
					//console.log(emailData);
				
				//**if the email data reaches five or more items on the list, stop looping further data.**
				if(emailData.length >= 5){
				for(var i=0; i<5; i++){
					var emailInfo = emailData[i];
						//console.log(emailInfo);
					var gEmail = emailInfo.getElementsByTagName("address")[0].firstChild.nodeValue;  //**variable to search and store address node value.**
					var gName = emailInfo.getElementsByTagName("name")[0].firstChild.nodeValue;  //**variable to search and store name node value.**
					var gFriends = emailInfo.getElementsByTagName("friends")[0].firstChild.nodeValue;  //**variable to search and store friends node value.**
					
					//**variable for storing xml database node values inside html elements.**
					var myhtml = '<li class="dataSelect"><span class="emailItem">'+gEmail+'</span><br />' +
					'<span class="nameItem">name:  '+gName+'</span><br />' + 
					'<span class="friendsItem">friends:  '+gFriends+'</span></li>';					
					
				Jcoda.$("#messageArea").innerHTML += myhtml;  //**add data under each content inside div (autocompleter.html-Line 48).**
				
				if(Jcoda.$("#toInput").value === ""){
					Jcoda.$("#messageArea").innerHTML = ""; //**clear content inside div element.**
					Jcoda.$("#messageArea").style.display = "none"; //**hide dropdown list.**
				}
				
				var targetEmail = Jcoda.$(".emailItem"); //**variable to search and store email items for displaying it on dropdown list.**
				for(var k=0; k < targetEmail.length; k++)	
					targetEmail[k].onclick = function(e){						
						//console.log(e.currentTarget);
						
						Jcoda.$("#toInput").value = this.innerHTML; //**clear content inside div element.**
						Jcoda.$("#messageArea").innerHTML = ""; //**clear content inside div element.**
					}
				}		
			}else{			
				for(var i=0; i<emailData.length; i++){
					var emailInfo = emailData[i];
					var gEmail = emailInfo.getElementsByTagName("address")[0].firstChild.nodeValue;
					var gName = emailInfo.getElementsByTagName("name")[0].firstChild.nodeValue;
					var gFriends = emailInfo.getElementsByTagName("friends")[0].firstChild.nodeValue;
					
					var myhtml = '<li class="dataSelect"><span class="emailItem">'+gEmail+'</span><br />' +
					'<span class="nameItem">name:  '+gName+'</span><br />' + 
					'<span class="friendsItem">friends:  '+gFriends+'</span></li>';
					
				Jcoda.$("#messageArea").innerHTML += myhtml;
				
				if(Jcoda.$("#toInput").value === ""){
					Jcoda.$("#messageArea").innerHTML = "";  //**clear content inside element.**
					Jcoda.$("#messageArea").style.display = "none";
				}
				
				var targetEmail = Jcoda.$(".emailItem");
				for(var k=0; k < targetEmail.length; k++)
					targetEmail[k].onclick = function(e){						
						//console.log(e.currentTarget);
						
						Jcoda.$("#toInput").value = this.innerHTML;
						Jcoda.$("#messageArea").innerHTML = ""; //**clear content inside div element.**
					};
				};
			};
		},
		
		timeout:6000, //**member property for calling timeout in milliseconds.**
		
		onError:function(){}, //**method for failure to load file.**
		
		data:{sfield:Jcoda.$("#toInput").value}, //**how the data will show on browser.**
		
		type:"xml" //**type of file to parse.**
		}),
		Jcoda.stopDefault(e);
	};

	//**method of when the dropdown box looses focus (autocompleter.html-Line 52).**
	Jcoda.$("#messageArea").onblur = function(e){
		Jcoda.$("#messageArea").innerHTML = ""; //**clear content inside div element.**
		//console.log("bluring");
	};
	
	//**click method for send button (autocompleter.html-Line 56).**
	Jcoda.$("#sendButton").onclick = function(e){
		Jcoda.$("#messageArea").innerHTML = ""; //**clear content inside div element.**
		Jcoda.$("#messageArea").style.display = "none"; //**hide dropdown list.**
		Jcoda.$("#toInput").value = ""; //**clear content inside textfield.**
		
		Jcoda.stopDefault(e);
	};
});