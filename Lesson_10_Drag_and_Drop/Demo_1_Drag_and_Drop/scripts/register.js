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
			 	 //set the user info
			   var user = {userName:firstName,sex:gender,age:ageGroup};
		   //push the user to localStorage
			   localStorage.setItem("user",JSON.stringify(user));
		   //set the userCode
			   var userCode = user.sex + user.age;
		   //push the userCode to localStorage
			   localStorage.setItem("userCode", userCode);
		   //push the foods eaten to localStorage
			   localStorage.setItem("fruits", "0");
			   localStorage.setItem("vegs", "0");
			   localStorage.setItem("proteins", "0");
			   localStorage.setItem("dairy", "0");
			   localStorage.setItem("grains", "0");
		   //set and push registration date and time to localStorage
			   var today = new Date();
			   localStorage.setItem("today",JSON.stringify(today));
		   //set the header to display the user name
			   $('#welcomeHeader').text(user.userName + "'s Food Plate");
		   //confirm the users registration information  
		   if(gender == "M")
				   {
					   var genderMsg = "Male";
				   }
			else
					{
						genderMsg = "Female";
					}
					
				
			   $("<div id='confirmMsg'><h2>You have successfully registered as: " + user.userName + "</h2><p>Your age group is: " + user.age + "</p><p>Your gender is " + genderMsg + "</p></div>").prependTo('#registerForm');
			   $("<p><input type='button' name='returnToPlate_btn' id='returnToPlate_btn' value='Return to My Plate'></p>").appendTo('#confirmMsg');
			   $('#register_frm').empty();
		  //get the users recommended daily requirements
			   getUserRequirements(); 
			   $('#returnToPlate_btn').show();
			   $("#returnToPlate_btn").click(function()
		        {
			      window.location = "addFood.html";
  		        })
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
	 localStorage.setItem("req",JSON.stringify(req));
}
});	