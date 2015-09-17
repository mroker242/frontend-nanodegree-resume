 var bio = 
 	{
 		"Name":"Michael Roker",
 		"Role":"Web Developer",
 			"contacts":
 				{
 					"Phone":"242-698-1700",
 					"EmailAddress":"mroker@gmail.com",
 					"twitter":"@aceofspades242",
 					"linkedin":"https://www.linkedin.com/pub/michael-roker/a/7b4/a07",
 					"github":"https://github.com/mroker242",
 					"location":"Nassau, Bahamas"
 				},
 		"pictureUrl":"images/profile.jpg",
 		"welcome":"Hi my name is Michael and this is my resume.",
 		"skills": ["HTML","CSS","Javascript","MYSQL","Angular","Grunt","PHP","SASS"]
 		
 	};




 var work = {
 	"jobs":
 	[
 	{
 		"jobPosition": "Systems Administrator",
 		"employer":"Cable Bahamas Ltd.",
 		"yearsWoked":"11",
 		"location":"Nassau, Bahamas",
 		"workstart": "Jun 14",
 		"descriptions":"Work to develop and maintain multiple systems"
 	},
 	{
 		"jobPosition":"Freelance Web Developer",
 		"employer": "Freelance",
 		"yearsWorked":"2",
 		"location":"Nassau, Bahamas",
 		"workstart": "June 14",
 		"descriptions": "Develop and build websites."
 	}
 	]};




 	var projects = {
 		"tasks":
 	[
 	{
 		"title":"website",
 		"datesworked":"June 14' - June 15'",
 		"description": "Created website for mmmazingbakes.com",
 		"images":["https://placeimg.com/300/200/tech","https://placeimg.com/300/200/tech"],

 	},
 	{
 		"title":"website",
 		"datesworked":"June 14' - June 15'",
 		"description":"Created website for christinaysaguirre.com",
 		"images":["https://placeimg.com/300/200/tech","https://placeimg.com/300/200/tech"],
 	},
	]};

	


 var education = {
 	"schools":
 	[
 		{
 			"school":"Remington College",
 			"yearsAttended":"2",
 			"location":"Tampa, Florida",
 			"year":"2003",
 			"url":"http://www.remingtoncollege.edu/"
 		}

 	],	
 	"online courses":[
 		{
 			"school":"udacity",
 			"yearsattended":"0.5",
 			"location":"online",
 			"url":"www.udacity.com",
 			"year":"2015"
 		},
 		{	
 			"school":"codeacademy",
 			"courses":"Javascript",
 			"url":"www.codeacademy.com",
 			"year":"2015"
 		}
 	]
 };




 //Header
 var headerName = HTMLheaderName.replace("%data%","Michael Roker");
 var role = HTMLheaderRole.replace("%data%","Web Developer");
 $("#header").prepend(role);
 $("#header").prepend(headerName);

 //contacts
 var contactPhone = HTMLmobile.replace("%data%",bio.contacts.Phone);
 var contactEmail = HTMLemail.replace("%data%",bio.contacts.EmailAddress);
 var contactTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
 var contactGitHub = HTMLgithub.replace("%data%",bio.contacts.github);
 var contactLocations = HTMLlocation.replace("%data%",bio.contacts.location);

 $("#topContacts").append(contactPhone);
 $("#topContacts").append(contactEmail);
 $("#topContacts").append(contactTwitter);
 $("#topContacts").append(contactGitHub);
 $("#topContacts").append(contactLocations);




 //if statement to check if there are any skills in the bio object
 if(bio.skills.length > 0){
 	$("#header").append(HTMLskillsStart);

 	var myskills = HTMLskills.replace("%data%",bio.skills[0]);
 	$("#skills").append(myskills);
 	 myskills = HTMLskills.replace("%data%",bio.skills[1]);
 	$("#skills").append(myskills);
 	 myskills = HTMLskills.replace("%data%",bio.skills[2]);
 	$("#skills").append(myskills);
 	 myskills = HTMLskills.replace("%data%",bio.skills[3]);
 	$("#skills").append(myskills); 
 	 myskills = HTMLskills.replace("%data%",bio.skills[4]);
 	$("#skills").append(myskills); 
 	 myskills = HTMLskills.replace("%data%",bio.skills[5]);
 	$("#skills").append(myskills);
 	 myskills = HTMLskills.replace("%data%",bio.skills[6]);
 	$("#skills").append(myskills);
 }


//WORK SECTION
function displayWork(){

 for(myjobs in work.jobs){
 	$("#workExperience").append(HTMLworkStart);

 	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[myjobs].employer);
 	var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[myjobs].jobPosition);
 	

 	var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[myjobs].location);
 	var formattedDates = HTMLworkDates.replace("%data%",work.jobs[myjobs].workstart);
 	var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[myjobs].descriptions);

 	var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;

 	$(".work-entry:last").append(formattedEmployerTitle);

 	$(".work-entry:last").append(formattedDates);
 	$(".work-entry:last").append(formattedLocation);
 	$(".work-entry:last").append(formattedDescription);
  }	
 }

 displayWork();


//function that takes a string a name and turns it into a capitalized last name
function capLastName(name){
	name = name.split(" ");
	name[1] = name[1].toUpperCase();
	name = name.join(",");
	name = name.replace(","," ");

	name = name.replace(name.charAt(0),name.charAt(0).toUpperCase());
	return name;

}


 $("#main").append(internationalizeButton);
 $("#mapDiv").append(googleMap);

 projects.display = function(){
 			
 			for(var myTasks in projects.tasks){
 				$("#projects").append(HTMLprojectStart);

 				var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.tasks[myTasks].title);
 				var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.tasks[myTasks].datesworked);
 				var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.tasks[myTasks].description);
 				

 				$(".project-entry:last").append(formattedProjectTitle);
 				$(".project-entry:last").append(formattedProjectDates);
 				$(".project-entry:last").append(formattedProjectDescription);

 				if(projects.tasks[myTasks].images.length > 0){
 					for(image in projects.tasks[myTasks].images){
 						var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.tasks[myTasks].images[image]);
 						$(".project-entry:last").append(formattedProjectImage);
 					}
 				}
 				
 			}
 	};

 projects.display();




 
 	
 






