var Jcoda={};Math.linearTween=function(t,b,c,d){return c*t/d+b};Math.easeInQuad=function(t,b,c,d){return c*(t/=d)*t+b};Math.easeOutQuad=function(t,b,c,d){return-c*(t/=d)*(t-2)+b};Math.easeInOutQuad=function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b};Math.easeInCubic=function(t,b,c,d){return c*(t/=d)*t*t+b};Math.easeOutCubic=function(t,b,c,d){return c*((t=t/d-1)*t*t+1)+b};Math.easeInOutCubic=function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b};Math.easeInQuart=function(t,b,c,d){return c*(t/=d)*t*t*t+b};Math.easeOutQuart=function(t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b};Math.easeInOutQuart=function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b};Math.easeInQuint=function(t,b,c,d){return c*(t/=d)*t*t*t*t+b};Math.easeOutQuint=function(t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b};Math.easeInOutQuint=function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b};Math.easeInSine=function(t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b};Math.easeOutSine=function(t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b};Math.easeInOutSine=function(t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b};Math.easeInExpo=function(t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b};Math.easeOutExpo=function(t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b};Math.easeInOutExpo=function(t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b};Math.easeInCirc=function(t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b};Math.easeOutCirc=function(t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b};Math.easeInOutCirc=function(t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b};Math.easeInElastic=function(t,b,c,d,a,p){if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b};Math.easeOutElastic=function(t,b,c,d,a,p){if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b};Math.easeInOutElastic=function(t,b,c,d,a,p){if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b};Math.easeInBack=function(t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b};Math.easeOutBack=function(t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b};Math.easeInOutBack=function(t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b};Math.easeInBounce=function(t,b,c,d){return c-Math.easeOutBounce(d-t,0,c,d)+b};Math.easeOutBounce=function(t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}};Math.easeInOutBounce=function(t,b,c,d){if(t<d/2)return Math.easeInBounce(t*2,0,c,d)*.5+b;return Math.easeOutBounce(t*2-d,0,c,d)*.5+c*.5+b};Jcoda.stopDefault=function(e){if(e&&e.preventDefault){e.preventDefault()}else{window.event.returnValue=false};return false};Jcoda.stopBubble=function(e){if(e&&e.stopPropagation){e.stopPropagation()}else{window.event.cancelBubble=true}};Jcoda.domReady=function(f){if(Jcoda.domReady.done){return f()};if(Jcoda.domReady.timer){Jcoda.domReady.ready.push(f)}else{window.onLoad=Jcoda.isDOMReady;Jcoda.domReady.ready=[f];Jcoda.domReady.timer=setInterval(Jcoda.isDOMReady,14)}};Jcoda.isDOMReady=function(){if(Jcoda.domReady.done){return false};if(document&&document.getElementById&&document.getElementsByTagName&&document.body){Jcoda.domReady.done=true;clearInterval(Jcoda.domReady.timer);Jcoda.domReady.timer=null;for(var i=0;i<Jcoda.domReady.ready.length;i++){Jcoda.domReady.ready[i]()};Jcoda.domReady.ready=null}};Jcoda.getElementsByClass=function(classname,parent){var domset=[];var arr=parent.getElementsByTagName("*");var reg=new RegExp("(^|)"+classname+"(|$)");for(var i=0,j=arr.length;i<j;i++){if(reg.test(arr[i].className)){domset.push(arr[i])}};return domset};Jcoda.$=function(selector){var parent=(this==Jcoda)?document:this;switch(selector.charAt(0)){case"#":var el=selector.substr(1,selector.length);var domset=document.getElementById(el);domset.$=Jcoda.$;break;case".":var domset=[];var el=selector.substr(1,selector.length);var arr=Jcoda.getElementsByClass(el,parent);for(var i=0,j=arr.length;i<j;i++){arr[i].$=Jcoda.$;domset.push(arr[i])};break;default:var domset=[];var arr=parent.getElementsByTagName(selector);for(var i=0,j=arr.length;i<j;i++){domset.push(arr[i]);domset[i].$=Jcoda.$};break};return domset};Jcoda.hasClass=function(el,theClass){var pattern=new RegExp("(^| )"+theClass+"( |$)");if(pattern.test(el.className)){return true};return false};Jcoda.addClass=function(el,theClass){if(!Jcoda.hasClass(el,theClass)){if(el.className==""){el.className=theClass}else{el.className+=" "+theClass}}};Jcoda.removeClass=function(el,theClass){var pattern=new RegExp("(^| )"+theClass+"( |$)");el.className=el.className.replace(pattern,"$1");el.className=el.className.replace(/ $/,"")};Jcoda.validateForm=function(form){var vSet={text:{'test':function(obj){var reg=/^[a-z,A-Z]+$/;return(!(obj.value=="")&&(reg.test(obj.value)))},'msg':"Please use only letters."},username:{'test':function(obj){var reg=/^[0-9,a-z,A-Z,_]+$/;return(!(obj.value=="")&&(reg.test(obj.value)))},'msg':"Only use letters, numbers, and _"},password:{'test':function(obj){var reg=/^\w+$/;return(!(obj.value=="")&&(reg.test(obj.value)))},'msg':"Only use letters, numbers, and _"},retype_password:{'test':function(obj){return(obj.value==Jcoda.$(".password")[0].value)},'msg':"Does not match your 'Password' field."},email:{'test':function(obj){var reg=/^[\w\.\-]+\@([\w\-]+\.)+[a-z]{3}$/;return(!(obj.value=="")&&(reg.test(obj.value)))},'msg':"Please follow <em>email@domain.com</em>"},retype_email:{'test':function(obj){return(obj.value==Jcoda.$(".email")[0].value)},'msg':"Does not match your 'Email' field."},website:{'test':function(obj){var reg=/^(http\:\/\/\www\.)+([a-z]+\.)+[a-z]{3}$/;return(!(obj.value=="")&&(reg.test(obj.value)))},'msg':"Please follow <em>http:&#47;&#47;www.domain.com</em>"},phone:{'test':function(obj){var reg=/^(\([0-9]{3}\))+([0-9]{3}\-)+([0-9]{4})$/;return(!(obj.value=="")&&(reg.test(obj.value)))},'msg':"Please follow <em>(###)###-####</em>"}};for(var i=0;i<form.elements.length;i++){if(form.elements[i].type!="submit"){var fel=form.elements[i];fel.onfocus=function(){Jcoda.addClass(this.parentNode,'formhilite')};fel.onblur=function(){Jcoda.removeClass(this.parentNode,'formhilite')};fel.onkeyup=function(){for(var j in vSet){var success=vSet[j].test(this);if(Jcoda.hasClass(this,j)&&success){Jcoda.$("#"+this.id+"_error").innerHTML="";if(Jcoda.hasClass(this,"required")){var tmp=Jcoda.$("#"+this.id+"_req");tmp.innerHTML="&radic;";Jcoda.addClass(tmp,"vertified")}}else if(Jcoda.hasClass(this,j)&&!success){Jcoda.$("#"+this.id+"_error").innerHTML=vSet[j].msg;if(Jcoda.hasClass(this,"required")){var tmp=Jcoda.$("#"+this.id+"_req");tmp.innerHTML="*";Jcoda.removeClass(tmp,"vertified")}}}}}else{form.onsubmit=function(e){var passed=true;for(var ii=0;ii<form.elements.length;ii++){if(form.elements[ii].type!="submit"){var fel=form.elements[ii];for(var jj in vSet){if(Jcoda.hasClass(fel,jj)){passed=(vSet[jj].test(fel))?passed:false}}}};return(passed)?true:Jcoda.stopDefault(e)}}}};Jcoda.serialize=function(obj){var ser=[];for(var p in obj){ser.push(p+"="+encodeURIComponent(obj[p]))};return ser.join("&")};Jcoda.ajax=function(options){var options={url:options.url||"",timeout:options.timeout||7000,onSuccess:options.onSuccess||function(){},onError:options.onError||function(){},data:options.data||{},type:options.type||"text"};if(typeof options.url==="undefined"){return};options.data=Jcoda.serialize(options.data);if(typeof XMLHttpRequest==="undefined"){XMLHttpRequest=function(){return new ActiveXObject("Msxml2.XMLHTTP")}};var xhr=new XMLHttpRequest();xhr.open("GET",options.url+"?"+options.data,true);xhr.send(null);setTimeout(function(){if(xhr){xhr.abort()}},options.timeout);xhr.onreadystatechange=function(){if(xhr.readyState===4){if(xhr.status===200||xhr.status===304){var result=(options.type==="text")?xhr.responseText:xhr.responseXML;options.onSuccess(result)}else{options.onError()};xhr=undefined}}};Jcoda.getStyle=function(elem,name){if(elem.style[name]){return elem.style[name]}else if(elem.currentStyle){return elem.currentStyle[name]}else if(document.defaultView){name=name.replace(/([A-Z])/g,"-$1");name=name.toLowerCase();var el=document.defaultView.getComputedStyle(elem,"")return el.getPropertyValue(name)}else{return null}};Jcoda.animate=function(options){var options={change:parseInt(options.change)||0,start:options.start||0,duration:options.duration||600,easing:options.easing||'easeOutCirc',property:options.property||null,elem:options.elem||null,complete:options.complete||function(){}};if(!options.elem||!options.property){return false}var i=0;var anim=setInterval(function(){i+=30;options.elem.style[options.property]=Math[options.easing](i,options.start,options.change,options.duration)+"px";if(i>=options.duration){if(options.property=='height'||options.property=='width'){if(options.start+options.change<=0){options.elem.style.display="none";options.elem.style[options.property]=options.start+"px"}};clearInterval(anim);anim=null;options.complete();options={}}},30)};Jcoda.carousel=function(options){var options={carouselcontainer:options.carouselcontainer,nextbutton:options.nextbutton||null,previousbutton:options.previousbutton||null,imagewidth:options.imagewidth||300,imageheight:options.imageheight||200,items:options.items||{},titleelement:options.titleelement||null,detailelement:options.detailelement||null,textelement:options.textelement||null,};imageWidth=options.imagewidth;currentimg=1;function init(){options.previousbutton.style.display='none';options.nextbutton.style.cursor="auto";options.previousbutton.style.cursor="auto";totalimages=0;for(x in news){options.carouselcontainer.innerHTML+="<li><img src="+options.items[x].image+" width='"+options.imagewidth+"' height='"+options.imageheight+"' alt=''/></li>";totalimages++};if(options.titleelement)options.titleelement.innerHTML=options.items["item1"].title;if(options.detailelement)options.detailelement.innerHTML=options.items["item1"].detail;if(options.textelement)options.textelement.innerHTML=options.items["item1"].text};init();options.nextbutton.onclick=function(){next()};options.previousbutton.onclick=function(){previous()};totalImages=options.items.length;function next(){currentimg++;Jcoda.animate({change:-imageWidth,start:parseFloat(Jcoda.getStyle(options.carouselcontainer,"marginLeft")),duration:1000,easing:'easeOutCirc',property:"marginLeft",elem:options.carouselcontainer});Jcoda.animate({elem:options.detailelement,start:parseInt(Jcoda.getStyle(options.detailelement,"marginTop")),change:60,property:"marginTop",complete:function(){options.detailelement.innerHTML=options.items["item"+currentimg].detail;options.textelement.innerHTML=options.items["item"+currentimg].text;Jcoda.animate({elem:options.detailelement,start:parseInt(Jcoda.getStyle(options.detailelement,"marginTop")),change:-60,property:"marginTop"})}});Jcoda.animate({elem:options.titleelement,start:parseInt(Jcoda.getStyle(options.titleelement,"marginTop")),change:-30,property:"marginTop",complete:function(){options.titleelement.innerHTML=options.items["item"+currentimg].title;Jcoda.animate({elem:options.titleelement,start:parseInt(Jcoda.getStyle(options.titleelement,"marginTop")),change:30,property:"marginTop"})}});if(currentimg==totalimages){console.log("ckecking if");options.nextbutton.style.display='none';options.previousbutton.style.display='block'}else{console.log("ckecking else");options.nextbutton.style.display='block';options.previousbutton.style.display='block'}};function previous(){currentimg--;Jcoda.animate({change:+imageWidth,start:parseFloat(Jcoda.getStyle(options.carouselcontainer,"marginLeft")),duration:1000,easing:'easeOutCirc',property:"marginLeft",elem:options.carouselcontainer,});Jcoda.animate({elem:options.detailelement,start:parseInt(Jcoda.getStyle(options.detailelement,"marginTop")),change:60,property:"marginTop",complete:function(){options.detailelement.innerHTML=options.items["item"+currentimg].detail;options.textelement.innerHTML=options.items["item"+currentimg].text;Jcoda.animate({elem:options.detailelement,start:parseInt(Jcoda.getStyle(options.detailelement,"marginTop")),change:-60,property:"marginTop"})}});Jcoda.animate({elem:options.titleelement,start:parseInt(Jcoda.getStyle(options.titleelement,"marginTop")),change:-30,property:"marginTop",complete:function(){options.titleelement.innerHTML=options.items["item"+currentimg].title;Jcoda.animate({elem:options.titleelement,start:parseInt(Jcoda.getStyle(options.titleelement,"marginTop")),change:30,property:"marginTop"})}});if(currentimg==1){console.log("ckecking if");options.nextbutton.style.display='block';options.previousbutton.style.display='none'}else{console.log("ckecking else");options.nextbutton.style.display='block';options.previousbutton.style.display='block'}}};