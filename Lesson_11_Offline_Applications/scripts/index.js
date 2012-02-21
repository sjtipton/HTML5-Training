// JavaScript Document
var storage;

function checkStorageSupport()
	{	
     //check for support of local storage
     if(window.localStorage)
     {
		//alert("This browser supports localstorage. You can now use the Food Plate Diary!");
		storage = true;
     }
   else
     {
        alert("This browser does NOT support local storage. Therefore you will not be able to use the food Plate Diary");
		storage = false;
     }
	}

checkStorageSupport();

$(function()
{
	if(storage)
	{
	if(localStorage.user != null)
	{
		//get the current user
		var currentUser = localStorage.getItem("user");
		//parse the user json object
        currentUser = JSON.parse(currentUser);	
		//set the header with the users name	
		$('#welcomeHeader header h1').text(currentUser.userName + "'s Food Plate");
		//change the register button to a check in button
		$('#register_btn').val('Check In');
		//activate the register/checkin button send the user to the addFood page
		$('#register_btn').click(function() {
		window.location =  'html/addFood.html';
		})
	}
	else
	{
		//set the default  header text
		$('#welcomeHeader header h1').text("Your Food Plate");
		//active the register button - take the user to the register page
		$('#register_btn').click(function() {
			window.location =  "html/register.html";
		})	
	}
	}
});
