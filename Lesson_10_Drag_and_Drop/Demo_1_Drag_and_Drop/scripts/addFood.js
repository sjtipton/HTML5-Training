// JavaScript Document
$(document).ready(function(){	
	 $('#welcomeHeader').text(window.localStorage.fName + "'s Food Plate");

	//variables needed to calculate if the user is within a 24-hour time frame
	var laterdate = new Date();     // today
	var earlierdate = localStorage.getItem("today");
	earlierdate = new Date(earlierdate);
	var daysDifference;
	var hoursDifference;
	var fruitEaton;
	var fruitLeft;	
	var vegEaton;
	var vegLeft;
	var proteinEaten;
	var proteinLeft;
	var grainEaton;
	var grainLeft;
	var dairyEaten;
	var dairyLeft;
	var selectedFood;
	var metFruit;
	var metVeg;
	var metDairy;
	var metProtein;
	var metGrain;

	//variables to keep track of food eaten	
	var req = localStorage.getItem("req");
	req = JSON.parse(req);
	fruitNeeded = req.fruit;
	vegNeeded = req.veg;
	proteinNeeded = req.protein;
	grainNeeded = req.grains;
	dairyNeeded = req.dairy;
	//reset the welcome header
	var user = localStorage.getItem("user");
    user = JSON.parse(user);
	$('#welcomeHeader').text(user.userName + "'s Food Plate");
	//drag the foodIcons
	$('#fruitIcon').draggable({opacity:".75",  revert:'invalid', helper: 'clone',cursor: 'pointer'});
	$('#vegIcon').draggable({opacity:".75",  revert:'invalid', helper: 'clone',cursor: 'pointer'});
	$('#proteinIcon').draggable({opacity:".75",  revert:'invalid', helper: 'clone',cursor: 'pointer'});
	$('#grainIcon').draggable({opacity:".75",  revert:'invalid', helper: 'clone',cursor: 'pointer'});
	$('#dairyIcon').draggable({opacity:".75",  revert:'invalid', helper: 'clone',cursor: 'pointer'});
	$('#fruitempty').droppable({accept:"#fruitIcon",
	 drop: foodDropEvent
	})
	$('#vegempty').droppable({accept:"#vegIcon",
	 drop: foodDropEvent
	})
	$('#graindairyempty').droppable({accept:"#grainIcon",
	 drop: foodDropEvent
	})
	$('#proteinempty').droppable({accept:"#proteinIcon",
	 drop: foodDropEvent
	})

	setImgs();


function diaryUpdate(foodAdded)
{
	var measure;
	if(foodAdded == "fruitIcon")
	{
	  measure = "cup";
	  if(localStorage.getItem("fruits") == 0)
		{
			measure = "cup";
			fruitEaton = 1;		
			fruitLeft = fruitNeeded - fruitEaton;
			metFruit = false;
			$('#status').html("<p>You have eaten " + fruitEaton + " " + measure + " of Fruit. You need to eat " + fruitLeft + " more " + measure + "(s).</p>");
		}
		else
		{
			fruitEaton = localStorage.getItem("fruits");
			fruitEaton++;
			measure = "cups";
			fruitLeft = fruitNeeded - fruitEaton;
			metFruit = false;
			$('#status').html("<p>You have eaten " + fruitEaton + " " + measure + " of Fruit. You need to eat " + fruitLeft + " more " + measure + "(s).</p>");			
		}
		
		localStorage.setItem("fruits",fruitEaton);
		if( fruitEaton < fruitNeeded)
		{			
			alert("you have more fruit to eat!");	
				
		}
		else 
		{
			$('#status').html('<p>You have eaten all the fruit you need to eat today!</p>');
			metFruit = true;
			localStorage.setItem("metFruit",true);
			loadImgs();
		}	
	}
	
	if(foodAdded == "vegIcon")
	{
	  measure = "ounce";
	  if(localStorage.getItem("vegs") == 0)
		{
			measure = "cup";
			vegEaton = 1;		
			vegLeft = vegNeeded - vegEaton;
			metVeg = false;
			$('#status').html("<p>You have eaten " + vegEaton + " " + measure + " of vegetable. You need to eat " + vegLeft + " more " + measure + "(s).</p>");
		}
		else 
		{
			vegEaton = localStorage.getItem("vegs");
			vegEaton++;
			measure = "cups";
			vegLeft = vegNeeded - vegEaton;
			metVeg = false;
			$('#status').html("<p>You have eaten " + vegEaton + " " + measure + " of vegetables. You need to eat " + vegLeft + " more " + measure + "(s).</p>");
		}
		localStorage.setItem("vegs",vegEaton);
		if( vegEaton < vegNeeded)
		{			
			alert("you have more vegetables to eat!");		
		}
		else
		{
			$('#status').html('<p>You have eaten all the vegetables you need to eat today!</p>');
			metVeg= true;
			localStorage.setItem("metVeg",true);
			loadImgs();
		}	
	}
	
	if(foodAdded == "proteinIcon")
	{
	  measure = "ounce";
	  if(localStorage.getItem("protein") == 0)
		{
			measure = "ounce";
			proteinEaton = 1;		
			proteinLeft = proteinNeeded - proteinEaton;
			metProtein = false;
			$('#status').html("<p>You have eaten " + proteinEaton + " " + measure + " of protein. You need to eat " + proteinLeft + " more " + measure + "(s).</p>");
		}
		else 
		{
			proteinEaton = localStorage.getItem("proteins");
			proteinEaton++;
			measure = "ounces";
			proteinLeft = proteinNeeded - proteinEaton;
			metProtein = false;
			$('#status').html("<p>You have eaten " + proteinEaton + " " + measure + " of protein. You need to eat " + proteinLeft + " more " + measure + "(s).</p>");
		}

		localStorage.setItem("proteins",proteinEaton);
		if( proteinEaton < proteinNeeded)
		{			
			alert("you have more protein to eat!");
			
		}
		else
		{
			$('#status').html('<p>You have eaten all the protein you need to eat today!</p>');
			metProtein = true;
			loadImgs();
			localStorage.setItem("metProtein",true);
		}	
	}
		
	if(foodAdded == "grainIcon")
	{
	  measure = "ounce";
	  if(localStorage.getItem("grains") == 0)
		{
			measure = "ounce";
			grainEaton = 1;		
			grainLeft = grainNeeded - grainEaton;
			metGrain = false;
			$('#status').html("<p>You have eaten " + grainEaton + " " + measure + " of grains. You need to eat " + grainLeft + " more " + measure + "(s).</p>");
		}
		else 
		{
			grainEaton = localStorage.getItem("grains");
			grainEaton++;
			measure = "ounces";
			grainLeft = grainNeeded - grainEaton;
			metGrain = false;
			$('#status').html("<p>You have eaten " + grainEaton + " " + measure + " of grains. You need to eat " + grainLeft + " more " + measure + "(s).</p>");
		}
		localStorage.setItem("grains",grainEaton);
		if( grainEaton < grainNeeded)
		{			
			alert("you have more Grains to eat!");
		}
		else
		{
			$('#status').html('<p>You have eaten all the grain you need to eat today!</p>');
			metGrain = true;
			loadImgs();
			localStorage.setItem("metGrain",true);
		}	
	}
}

function foodDropEvent(evt, ui)
{
	selectedFood = ui.draggable.attr('id');
	timeDifference(laterdate, earlierdate);
	if( daysDifference >= 1)
	{
		alert("It's been more than 24 hours since your last check-in. Would you like to start a new day?");
	}
	else
	{
		if(hoursDifference == 1)
		{
			//alert("It's been " + hoursDifference + "hour since you last checked in.")
		}
		else if(hoursDifference > 1)
		{
			//alert("It's been " + hoursDifference + " hours since you last checked in.")
		}
		diaryUpdate(selectedFood);		
	}
}

function timeDifference(laterdate,earlierdate) 
{
    var difference = laterdate.getTime() - earlierdate.getTime();
 
    daysDifference = Math.floor(difference/1000/60/60/24);
    difference -= daysDifference*1000*60*60*24
 
    hoursDifference = Math.floor(difference/1000/60/60);
    difference -= hoursDifference*1000*60*60
 
    var minutesDifference = Math.floor(difference/1000/60);
    difference -= minutesDifference*1000*60
 
    var secondsDifference = Math.floor(difference/1000);

}

function loadImgs()
{
		if(metFruit == true)
		{
			$('#fruitempty').attr('src', '../images/myPlate/fruit.jpg?timestamp=" + new Date().getTime()"');
		}
		
		if(metVeg == true)
		{
			$('#vegempty').attr('src', '../images/myPlate/vegetable.jpg?timestamp=" + new Date().getTime()"');
		}
		
		if(metProtein == true)
		{
			$('#proteinempty').attr('src', '../images/myPlate/protein.jpg?timestamp=" + new Date().getTime()"');
		}
		
		if(metGrain == true)
		{
			$('#graindairyempty').attr('src', '../images/myPlate/grain-dairy.jpg?timestamp=" + new Date().getTime()"');
		}	
}
	
function setImgs()
{
	if(localStorage.getItem("metFruit"))
	{
		$('#fruitempty').attr('src', '../images/myPlate/fruit.jpg');
		
	}
		
	if(localStorage.getItem("metVeg"))
	{
		$('#vegempty').attr('src', '../images/myPlate/vegetable.jpg');
	}
	
	if(localStorage.getItem("metProtein"))
	{
		$('#proteinempty').attr('src', '../images/myPlate/protein.jpg');
	}
	if(localStorage.getItem('metGrain'))
	{
		$('#graindairyempty').attr('src', '../images/myPlate/grain-dairy.jpg');
	}	
}
		var req;
		$("#myStats").click(function(){	
			req = localStorage.getItem("req");
			req = JSON.parse(req);
			fruitNeeded = req.fruit;
			vegNeeded = req.veg;
			proteinNeeded = req.protein;
			grainNeeded = req.grains;
			dairyNeeded = req.dairy;
			fruits = localStorage.getItem("fruits");
			vegs = localStorage.getItem("vegs");
			proteins = localStorage.getItem("proteins");
			grains = localStorage.getItem("grains");
			alert("Fruits Required: " + fruitNeeded + '\n' + "Fruits Eaten: " + fruits + '\n' + "Proteins Required: " + proteinNeeded + '\n' + "Protein Eaten: " + proteins + '\n' +"Grains Required: " + grainNeeded + '\n' + "Grains Eaten: " + grains + '\n');
});

});	
	

