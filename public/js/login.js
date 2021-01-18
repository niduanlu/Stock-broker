
/**
date: 10/1/2020
author: Duanlu Ni
note: simplest implementation of the basic javascript concepts which covers the following topics 
 
*/
	

/*
this function initialize the opacity of the object using id elements and make a smooth animated transition to appear and disappear the main title 

*/

const formSignup = document.getElementById("formSignup");
const formLogin = document.getElementById("formLogin");
	 
const user_title = document.getElementById("user_title");
 
 



document.getElementById("signup_to_login").addEventListener("click",function (){formSignup.style.display = "None"; formLogin.style.display = "initial"; user_title.innerHTML = "<h3>Login</h3>";});

document.getElementById("login_to_signup").addEventListener("click",function (){formSignup.style.display = "initial"; formLogin.style.display = "None"; user_title.innerHTML = "<h3>Sign Up</h3>";});


let email_flag = 0;
let phone_flag = 0;
let password_flag = 0;
 let password_flip = 0;
function validate(value){
	
	switch (value){
		case 1:
		
		validate_helper( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ , "user_email_warning","user_email", "please enter the correct email format",1);
		break;
		
		case 2:
		validate_helper( /^(\d{3})(\d{3})(\d{4})$/, "user_phone_warning","user_phone", "please enter the correct phone format",2);
		break;
		
	 
		
		
	}
	
}

function validatePassword(value){
 
		 validate_password_helper("user_password_warning" ,"user_password");
		 
	 
		
 
}


function validate_password_helper(element_name,value_name){
	 
	  const password_element = document.getElementById(element_name);
	  let password_value = document.getElementById(value_name);
	  let warning_message_text_node = "";
	 
			  
			  warning_message_text_node = document.createTextNode("the length of the password is too short ");
	 
	  
	   let  warning_element = document.createElement("P");
	   
	   if(password_flag == 0 && password_value.value.length < 8){
		 warning_element.style.backgroundColor = "red";
		 warning_element.style.color = "yellow";
		 warning_element.appendChild(warning_message_text_node);
		  password_element.appendChild(warning_element);
		 
		  
	   } 
	   
	     if(password_value.value.length >= 8  ){
		     password_element.lastChild.innerHTML = '<p    style = "color:blue;background-color:green"> your pass word is safe  </p>';
			 password_flip ++;		   
          } else {
			    password_element.lastChild.innerHTML = '<p   style = "color:yellow;background-color:red">the length of the password is too short </p>';
		  }
	   password_flag ++;
}


function validate_helper(format, element_name,value_name, warning_message,validate_flag){
 
	    const phone_element =  document.getElementById(element_name);
		let phone_value = document.getElementById(value_name);
          if((!phone_value.value.match(format) && ((phone_flag === 0 && validate_flag === 2) || (email_flag === 0 && validate_flag === 1)) )){
			 
			let phone_warning_message_text_node = document.createTextNode(warning_message);
			let phone_warning_element = document.createElement("P");
			phone_warning_element.style.backgroundColor = "red";
			phone_warning_element.style.color = "yellow";
			phone_warning_element.appendChild(phone_warning_message_text_node);
			phone_element.appendChild(phone_warning_element);
			if(validate_flag === 1){
              email_flag ++;
            }else if(validate_flag === 2){
                 phone_flag ++;
			}				
			

		} else {
              phone_element.removeChild(phone_element.lastChild);
		     if(validate_flag === 1){
              email_flag --;
            }else if(validate_flag === 2){
                 phone_flag --;
			}
		}			
	
}



