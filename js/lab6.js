//Lab 6 (Blog) JavaScript Document
Jcoda.domReady(function(){

	//**call AJAX module.**
	Jcoda.ajax({
		url: "xhr/getposts.php", //**URL for database file.**
		
		//**method for successfully loading file.**
		onSuccess:function(results){
			var posts = results.getElementsByTagName("post");
				console.log(posts);
			
			for(var i=0, j=posts.length; i<j; i++){
				var postData = posts[i];
					//console.log("looping");
				var pTitle = postData.getElementsByTagName("title")[0].firstChild.nodeValue; //**variable to search and store title node value.**
				var pAuthor = postData.getElementsByTagName("author")[0].firstChild.nodeValue; //**variable to search and store author node value.**
				var pDateTime = postData.getElementsByTagName("datetime")[0].firstChild.nodeValue; //**variable to search and store date and time node value.**
				var pContent = postData.getElementsByTagName("content")[0].firstChild.nodeValue; //**variable to search and store title node value.**
				
				//**variable for storing xml database node values inside html elements.**
				var myhtml =
					'<hr>' +
					'<h2 class="postTitle">'+pTitle+'</h2>' +
					'<p class="postAuthor">'+pAuthor+'</p>' +
					'<span class="postDate">'+pDateTime+'</span>' +
					'<p class="postContent">'+pContent+'</p>';
				
				Jcoda.$("#blog_context").innerHTML += myhtml; //**add data under each content inside div (blog.html-Line 48).**
			}
		},
		
		timeout:6000, //**member property for calling timeout in milliseconds.**
		
		onError:function(){}, //**method for failure to load file.**
		
		data:{}, //**how the data will show on browser.**
		
		type:"xml" //**type of file to parse.**
	});
	
	//**click method for 'All Post' link (blog.html-Line 48)**
	Jcoda.$("#allpost").onclick = function(e){
		Jcoda.ajax({
			url: "xhr/getposts.php",
			
			onSuccess:function(results){
				Jcoda.$("#blog_context").innerHTML = "";
					var posts = results.getElementsByTagName("post");
					for(var i=0, j=posts.length; i<j; i++){
						var postData = posts[i];
							//console.log("looping");
						var pTitle = postData.getElementsByTagName("title")[0].firstChild.nodeValue;
						var pAuthor = postData.getElementsByTagName("author")[0].firstChild.nodeValue;
						var pDateTime = postData.getElementsByTagName("datetime")[0].firstChild.nodeValue;
						var pContent = postData.getElementsByTagName("content")[0].firstChild.nodeValue;
						
						var myhtml =
							'<hr>' +
							'<h2 class="postTitle">'+pTitle+'</h2>' +
							'<p class="postAuthor">'+pAuthor+'</p>' +
							'<span class="postDate">'+pDateTime+'</span>' +
							'<p class="postContent">'+pContent+'</p>';
						
						Jcoda.$("#blog_context").innerHTML += myhtml;
				}
			},
			
			timeout:6000,
			
			onError:function(){},
			
			data:{},
			
			type:"xml"
		}),
		Jcoda.stopDefault(e);
	};

		//**click method for 'Mike's Post' link (blog.html-Line 49)**
		Jcoda.$("#mikes_post").onclick = function(e){
			Jcoda.ajax({
				url: "xhr/getposts.php",
				
				onSuccess:function(results){
				Jcoda.$("#blog_context").innerHTML = "";
					var posts = results.getElementsByTagName("post");
					for(var i=0, j=posts.length; i<j; i++){
						var postData = posts[i];
						var pTitle = postData.getElementsByTagName("title")[0].firstChild.nodeValue;
						var pAuthor = postData.getElementsByTagName("author")[0].firstChild.nodeValue;
						var pDateTime = postData.getElementsByTagName("datetime")[0].firstChild.nodeValue;
						var pContent = postData.getElementsByTagName("content")[0].firstChild.nodeValue;
						
						var myhtml = 
							'<hr>' +
							'<h2 class="postTitle">'+pTitle+'</h2>' +
							'<p class="postAuthor">'+pAuthor+'</p>' +
							'<span class="postDate">'+pDateTime+'</span>' +
							'<p class="postContent">'+pContent+'</p>';

						
						Jcoda.$("#blog_context").innerHTML += myhtml;
				}
			},
			
			timeout:6000,
			
			onError:function(){},
			
			data:{author:"Mike"},
			
			type:"xml"
		}),
		Jcoda.stopDefault(e);
	};
	
		//**click method for dropdown list (blog.html-Line 57)**
		Jcoda.$("#post_limit").onchange = function(e){
		Jcoda.ajax({
			url: "xhr/getposts.php",
			
			onSuccess:function(results){
				Jcoda.$("#blog_context").innerHTML = "";
					var posts = results.getElementsByTagName("post");
					for(var i=0, j=posts.length; i<j; i++){
						var postData = posts[i];
						var pTitle = postData.getElementsByTagName("title")[0].firstChild.nodeValue;
						var pAuthor = postData.getElementsByTagName("author")[0].firstChild.nodeValue;
						var pDateTime = postData.getElementsByTagName("datetime")[0].firstChild.nodeValue;
						var pContent = postData.getElementsByTagName("content")[0].firstChild.nodeValue;
						
						var myhtml = 
							'<hr>' +
							'<h2 class="postTitle">'+pTitle+'</h2>' +
							'<p class="postAuthor">'+pAuthor+'</p>' +
							'<span class="postDate">'+pDateTime+'</span>' +
							'<p class="postContent">'+pContent+'</p>';
						
						Jcoda.$("#blog_context").innerHTML += myhtml;
				}
			},
			
			timeout:6000,
			
			onError:function(){},
						
			data:{author:"Mike", limit:Jcoda.$("#post_limit").options[Jcoda.$("#post_limit").selectedIndex].value},
			
			type:"xml"
		}),
		Jcoda.stopDefault(e);
	};

		//**click method for 'Title Search' button (blog.html-Line 58)**
		Jcoda.$("#searchBtn").onclick = function(e){
		Jcoda.ajax({
			url: "xhr/getposts.php",
			
			onSuccess:function(results){
				Jcoda.$("#blog_context").innerHTML = "";
					var posts = results.getElementsByTagName("post");
					for(var i=0, j=posts.length; i<j; i++){
						var postData = posts[i];
						var pTitle = postData.getElementsByTagName("title")[0].firstChild.nodeValue;
						var pAuthor = postData.getElementsByTagName("author")[0].firstChild.nodeValue;
						var pDateTime = postData.getElementsByTagName("datetime")[0].firstChild.nodeValue;
						var pContent = postData.getElementsByTagName("content")[0].firstChild.nodeValue;
						
						var myhtml = 
							'<hr>' +
							'<h2 class="postTitle">'+pTitle+'</h2>' +
							'<p class="postAuthor">'+pAuthor+'</p>' +
							'<span class="postDate">'+pDateTime+'</span>' +
							'<p class="postContent">'+pContent+'</p>';
						
						Jcoda.$("#blog_context").innerHTML += myhtml;
				}
			},
			
			timeout:6000,
			
			onError:function(){},
						
			data:{limit:Jcoda.$("#post_limit").options[Jcoda.$("#post_limit").selectedIndex].value, 
				title:Jcoda.$("#titleInput").value},
			
			type:"xml"
			
		}),
		Jcoda.stopDefault(e);
	};
});