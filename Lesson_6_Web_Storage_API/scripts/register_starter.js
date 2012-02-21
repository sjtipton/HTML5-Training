// JavaScript Document
$(document).ready(function()  	
	{
	//declare variables
	var gender;
	var firstName;
	var ageGroup = "Select your Age Group";
	var storage;
	checkStorageSupport();
	
	function checkStorageSupport()
	{
	 //check for support of local storage
     if(window.localStorage)
       {
       // alert("This browser supports localstorage");
		storage = true;
       }
   else
       {
        alert("This browser does NOT support local storage");
		storage = false;
       }
	}
	 	$("#ageGroupA").click(function(){		
	    $("#adultAgeGroups").css("display","block");
		$("#childAgeGroups").css("display","none");
	})	
		$("#ageGroupC").click(function(){		
	    $("#childAgeGroups").css("display","block");
		$("#adultAgeGroups").css("display","none");	
	})
		$('input:radio').click(function()
		   {
				   gender = $("input:radio:checked").val();
	})
		$('#adultAgeGroup').change(function()
		   {

				   ageGroup = $("#adultAgeGroups option:selected").text();
	})
		$('#childAgeGroup').change(function()
		   {
				   ageGroup = $("#childAgeGroups option:selected").text();
	})
	//set users first name
		$("#firstName").blur(function()
		   {
			   firstName = $('#firstName').val();
	})
		$("#submit").click(function()
		   {
			   if($("#firstName").val() == "" || $("input[name='sex']:checked").length == 0 || $("input[name='ageGroup']:checked").length == 0 || ageGroup == "Select your Age Group") 
			   {
				   alert("You must fill out the entire form!");
			   }
			   
			   else if(storage)
			   {
// BEGIN HERE
			 	 //set the user info 
				 //use a variable named "user"
				 //use curly brace syntax to assign userName, sex and age properties
			   
		  		 //push the user to localStorage
				 //use the setItem() method
				 //pass the use data with the JSON.stringify() method
			  
		   		 //set the userCode
				 //use a variable named userCode
				 //the userCode variable is the users sex combind with the users age
			   
		   		//push the userCode to localStorage
			   
		  		//push the foods eaten to localStorage
			   localStorage.setItem("fruits", "0");
			   localStorage.setItem("vegs", "0");
			   localStorage.setItem("proteins", "0");
			   localStorage.setItem("dairy", "0");
			   localStorage.setItem("grains", "0");
			   
		   		//set and push registration date and time to localStorage
				//create a variable called today as a date object
			  
			  	//send the date to the local storage using JSON.stringify()
			   
		  		 //set the header to display the user name
				 //set the text to read "userName's Food Plate"
			   
		   		//confirm the users registration information  
		  		 if(gender == "M")
				   {
					   var genderMsg = "Male";
				   }
				else
					{
						genderMsg = "Female";
					}
			  //Create a div tag called confirmMsg that reads:
					/*
					<h2>"You have successfully registered as: Kevin"</h2>
					<p>Your age group is: 51+</p>
					<p>Your gender is Male</p>
					*/
					
					//and append the div to the #confirmMsg div
								
			   $("<div id='confirmMsg'><h2>You have successfully registered as: " + user.userName + "</h2><p>Your age group is: " + user.age + "</p><p>Your gender is " + genderMsg + "</p></div>").prependTo('#registerForm');
			   $("<p><input type='button' name='returnToPlate_btn' id='returnToPlate_btn' value='Return to My Plate'></p>").appendTo('#confirmMsg');
			  
			  		//clear the form
			 
		  		//get the users recommended daily requirements by calling the getUserRequirements() function
			   getUserRequirements(); 
			   
			   //show the #returnToPlate_btn
			   
			  	
			   //activate the return to plate button
			   //when clicked this button should change the windows' location to addFood.html

		}
   })
	


function getUserRequirements()
{
	 switch(window.localStorage.userCode)
	 {
		case 'F19-30' :
		var req = { 
			"fruit" : "2",
			"protein" : "5.5",
			"dairy" : "3",
			"veg" : "2.5",
			"grains" : "6"	   
		}
		break; 
		
		case 'M51+' :
		var req = { 
			"fruit" : "2",
			"protein" : "5.5",
			"dairy" : "3",
			"veg" : "2.5",
			"grains" : "6"	   
		}
		break; 
		
		case 'F31-50':
		var req = {
			"fruit" : "1.5",
			"protein" : "5",
			"dairy" : "3",
			"veg" : "2.5",
			"grains" : "6"
		   }

		break; 
		
		case 'M9-13':
		var req = {
			"fruit" : "1.5",
			"protein" : "5",
			"dairy" : "3",
			"veg" : "2.5",
			"grains" : "6"
		   }

		break; 
		
		case 'F51+':
		var req = {
			"fruit" : "1.5",
			"protein" : "5",
			"dairy" : "3",
			"veg" : "2",
			"grains" : "5"
		}
		break; 
		
		case 'F9-13':
		var req = {
			"fruit" : "1.5",
			"protein" : "5",
			"dairy" : "3",
			"veg" : "2",
			"grains" : "5"
		   }

		break; 
		
		case 'F14-18':
		var req =  {
			"fruit" : "1.5",
			"protein" : "5",
			"dairy" : "3",
			"veg" : "2.5",
			"grains" : "6"
		}
		break;
		
		case 'F2-3' :
		var req = {
			"fruit" : "1",
			"protein" : "2",
			"dairy" : "2",
			"veg" : "1",
			"grains" : "3"
		}
		break;	
		
		case 'M2-3' :
		var req = {
			"fruit" : "1",
			"protein" : "2",
			"dairy" : "2",
			"veg" : "1",
			"grains" : "3"
		}
		break;	
		
		case 'M4-8' :
		var req = {
			"fruit" : "1",
			"protein" : "2",
			"dairy" : "2",
			"veg" : "1",
			"grains" : "3"
		}
		break;
		
		case 'F4-8' :
		var req = {
			"fruit" : "1",
			"protein" : "2",
			"dairy" : "2",
			"veg" : "1",
			"grains" : "3"
		}
		break;
		
		case 'M31-50':
		var req = {
			"fruit" : "2",
			"protein" : "6",
			"dairy" : "3",
			"veg" : "3",
			"grains" : "7"
		}
		break;
		case 'M14-18':
		var req = {
			"fruit" : "2",
			"protein" : "6.5",
			"dairy" : "3",
			"veg" : "3",
			"grains" : "8"
		}
		break;
		case 'M19-30' :
		var req = { 
			"fruit" : "2",
			"protein" : "5.5",
			"dairy" : "3",
			"veg" : "2.5",
			"grains" : "6"	   
		}
		break; 
	 }
	 
	 //sends the requirements to localStorage
	 localStorage.setItem("req",JSON.stringify(req));
}
});	