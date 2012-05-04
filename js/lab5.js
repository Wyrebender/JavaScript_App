//Lab 5 (Form) JavaScript Document
Jcoda.domReady(function(){
	 Jcoda.validateForm(Jcoda.$("#form_fields")); //**module to validate 1st form field.**
	 Jcoda.validateForm(Jcoda.$("#form_fields2")); //**module to validate 2nd form field.**
	 
	 //**onclick method for register button.**
	 Jcoda.$("#register_button").onclick = function(e){
	 	var inputFields = Jcoda.$("input");  //**create variable to search for all the input tags in form.html file.**
	 		//console.log(inputFields);
		
		//**loop through all the input text inside an array.**
	 	for(var i=0, j=inputFields.length; i<j; i++){
	  		//console.log("clicked");
	  		
	  		inputFields[i].value = ""; //**clear text in all input fields.**
	  			//console.log(inputFields[i]);
	 	};
	 	return Jcoda.stopDefault(e); //**Use stopDefault to stop the browsers' default actions.**
	 };
});