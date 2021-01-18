
/**
date: 10/1/2020
author: Duanlu Ni
note: simplest implementation of the basic javascript concepts which covers the following topics 
1. variable declaration using const and let, and the only difference between const and let is to create variables that are 
constant variable and regular variables, var is obsolete in the ES6. note, var has the scope issue whereas const and let will have the 
valid scope range in functions. Also, it is important to note that only let allows the value inside the variable to change 
2 basic conditional statement in javascript which is similar to the syntax of java 
3 basic function defintion such as function function_name() {}, it has not used the moderate to advanced features such as closure yet 
4 dom operations 
4.1 how to getElememntById to obtain the html node objects 
4.2 how to change the value of the css tyle in dom using the basic animation / appearance and disappearance function 
4.3 setInterval setTimeOut functions 
4.4 a bit extra curriulum stuff on the Time() class which is simply just to get the timestamp on our browser. will consider getting timestamp on the server later 
5 how to create node by object.createElement object.createTextNode object.appendChild
*/
	

/*
this function initialize the opacity of the object using id elements and make a smooth animated transition to appear and disappear the main title 

*/


	 

function onload_effects(){
	const main_title = document.getElementById("main_title_one");
	const main_title_string = "Carleton's Mainstream Investment";
	let main_title_word_count = 0;
	let main_title_string_add = "";
    let main_title_secs = 0;
    updateTime();
	setInterval(function(){
		main_title.style.opacity = main_title_secs;
	main_title_secs += 0.2;
	main_title_string_add += main_title_string[main_title_word_count];
	main_title.innerHTML = main_title_string_add;
	main_title_word_count += 1;
	
	
	
	if(main_title_secs >= 1.0 ){
		
		main_title_secs = 0.4;
	}
	// reinitalize the opacity once it reaches to the maximum of the value, i.e. 1 
	
	if(main_title_word_count >= main_title_string.length){
		main_title_word_count = 0;
		main_title_string_add = "";
		
	}
	
	},300);
	
	setInterval(updateTime, 100);
	
	
}

function updateTime(){
	 const main_title_two = document.getElementById("main_title_two");
	let today = new Date();
	let time = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	main_title_two.innerHTML = time;
	
}

function scrollEffect(){
	
	const navbar = document.getElementById("navbar");
	const main_title = document.getElementById("main_title_one");
	
	
	  
	 if(document.body.scrollTop > 100){
		 
		 navbar.style.position = "fixed";
		 navbar.style.width = "100%";
		 navbar.style.top = 0;
		 navbar.style.opacity = "0.85";
		 main_title.style.visibility = "hidden";
		 
	 }else{
		 
		 navbar.style.opacity = "1";
		 main_title.style.visibility = "visible";
	 }
	 
	 
}
function resizeEffect(){
	let screen_width = window.innerWidth;
	console.log(screen_width);
	const main_title = document.getElementById("main_title_one");
	
	if(screen_width <= 990){
		 main_title.style.visibility = "hidden";
	}else{
		main_title.style.visibility = "visible";
	}
	
}
 


window.addEventListener("scroll",scrollEffect);
window.addEventListener("resize", resizeEffect);
	

const stock_object1 = {
	'stock_code': 'F',
	'stock_company': 'Ford',
	'price' :  7.29	,
	'change' : 0.42	,
	'change%' : 6.11,
}

const stock_array = [ {
	'stock_code': 'F',
	'stock_company': 'Ford',
	'price' :  7.29	,
	'change' : 0.42	,
	'change%' : 6.11,
}, 
 

 

]

something.forEach(function (blalanana){
	
})


