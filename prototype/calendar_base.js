var month = 0;
swapped = false;
function swapColors() {
	if(swapped == true) {
		document.getElementById("screen").style.background = "#a8d8e8";
		for (e of document.getElementsByTagName("button")){
			e.style.background = "#efed70";
		}
	}
	else {
		document.getElementById("screen").style.background = "#ffffff";
				for (e of document.getElementsByTagName("button")){
			e.style.background = "#ffffff";
		}
	}
	swapped = !(swapped);
}

function displayCalendar(){
	var htmlContent ="";
	var FebNumberOfDays ="";
	var counter = 1;

	var dateNow = new Date();
	month = dateNow.getMonth();

	var nextMonth = month+1; //+1; //Used to match up the current month with the correct start date.
	var prevMonth = month -1;
	var day = dateNow.getDate();
	var year = dateNow.getFullYear();


	//Determing if February (28,or 29)
	if (month == 1){
	if ( (year%100!=0) && (year%4==0) || (year%400==0)){
			FebNumberOfDays = 29;
		}else{
			FebNumberOfDays = 28;
		}
	}

	// names of months and week days.
	var monthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
	var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday", "Saturday"];
	var dayPerMonth = ["31", ""+FebNumberOfDays+"","31","30","31","30","31","31","30","31","30","31"]

	// days in previous month and next one , and day of week.
	var nextDate = new Date(nextMonth +' 1 ,'+year);
	var weekdays= nextDate.getDay();
	var weekdays2 = weekdays
	var numOfDays = dayPerMonth[month];

	// this leave a white space for days of pervious month.
	while (weekdays>0){
	htmlContent += "<td class='monthPre'></td>";

	// used in next loop.
	 weekdays--;
	}

	// loop to build the calander body.
	while (counter <= numOfDays){

	 // When to start new line.
	if (weekdays2 > 6){
		weekdays2 = 0;
		htmlContent += "</tr><tr>";
	}

	// if counter is current day.
	// highlight current day using the CSS defined in header.
	if (counter == day){
		htmlContent +="<td class='dayNow'  onMouseOver='this.style.background=\"#FFFFDD\"; this.style.color=\"#00FF00\"' "+
		"onMouseOut='this.style.background=\"#FFFFAA\"; this.style.color=\"#00FF00\"'>"+counter+"</td>";
	}else{
		htmlContent +="<td class='monthNow' onMouseOver='this.style.background=\"#FFFFDD\"'"+
		" onMouseOut='this.style.background=\"#FFFFAA\"'>"+counter+"</td>";

	}

	weekdays2++;
	counter++;
	}

	// building the calendar html body.
	var calendarBody = "<table class='calendar'>";
	calendarBody +="<tr class='dayNames'>  <td>Su</td>  <td>Mo</td> <td>Tu</td>"+
	"<td>We</td> <td>Th</td> <td>Fr</td> <td>Sa</td> </tr>";
	calendarBody += "<tr>";
	calendarBody += htmlContent;
	calendarBody += "</tr></table>";
	// set the content of div .
	document.getElementById("monthCalTitle").innerHTML=monthNames[month]+" "+ year;
	document.getElementById("calendar").innerHTML=calendarBody;

}

function addEvent() {
	document.location.href='confirmation.html';
	var e = document.getElementById("time1");
	var strUser = e.options[e.selectedIndex].value;
	var test = "auto"
	if (strUser == "auto"){
		document.location.href='week.html';
	}
	document.location.href='week.html';

}

function expandNextSib(self){
	console.log(self);
	/* Toggle between adding and removing the "active" class,
	to highlight the button that controls the panel */
	self.classList.toggle("active");

	/* Toggle between hiding and showing the active panel */
	var panel = self.nextElementSibling;
	if (panel.style.display === "block") {
		panel.style.display = "none";
	} else {
		panel.style.display = "block";
	}
}

function monthFwd(){
	var htmlContent ="";
	var FebNumberOfDays ="";
	var counter = 1;

	var dateNow = new Date();
	month = month+1;

	var nextMonth = month+1; //+1; //Used to match up the current month with the correct start date.
	var prevMonth = month -1;
	var day = dateNow.getDate();
	var year = dateNow.getFullYear();


	//Determing if February (28,or 29)
	if (month == 1){
	if ( (year%100!=0) && (year%4==0) || (year%400==0)){
			FebNumberOfDays = 29;
		}else{
			FebNumberOfDays = 28;
		}
	}

	// names of months and week days.
	var monthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
	var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday", "Saturday"];
	var dayPerMonth = ["31", ""+FebNumberOfDays+"","31","30","31","30","31","31","30","31","30","31"]

	// days in previous month and next one , and day of week.
	var nextDate = new Date(nextMonth +' 1 ,'+year);
	var weekdays= nextDate.getDay();
	var weekdays2 = weekdays
	var numOfDays = dayPerMonth[month];

	// this leave a white space for days of pervious month.
	while (weekdays>0){
	htmlContent += "<td class='monthPre'></td>";

	// used in next loop.
	 weekdays--;
	}

	// loop to build the calander body.
	while (counter <= numOfDays){

	 // When to start new line.
	if (weekdays2 > 6){
		weekdays2 = 0;
		htmlContent += "</tr><tr>";
	}

	// if counter is current day.
	// highlight current day using the CSS defined in header.
	if (counter == day){
		htmlContent +="<td class='dayNow'  onMouseOver='this.style.background=\"#FFFFDD\"; this.style.color=\"#00FF00\"' "+
		"onMouseOut='this.style.background=\"#FFFFAA\"; this.style.color=\"#00FF00\"'>"+counter+"</td>";
	}else{
		htmlContent +="<td class='monthNow' onMouseOver='this.style.background=\"#FFFFDD\"'"+
		" onMouseOut='this.style.background=\"#FFFFAA\"'>"+counter+"</td>";

	}

	weekdays2++;
	counter++;
	}

	// building the calendar html body.
	var calendarBody = "<table class='calendar'>";
	calendarBody +="<tr class='dayNames'>  <td>Su</td>  <td>Mo</td> <td>Tu</td>"+
	"<td>We</td> <td>Th</td> <td>Fr</td> <td>Sa</td> </tr>";
	calendarBody += "<tr>";
	calendarBody += htmlContent;
	calendarBody += "</tr></table>";
	// set the content of div .
	document.getElementById("monthCalTitle").innerHTML=monthNames[month]+" "+ year;
	document.getElementById("calendar").innerHTML=calendarBody;

}

function monthBack(){
	var htmlContent ="";
	var FebNumberOfDays ="";
	var counter = 1;

	var dateNow = new Date();
	month = month-1;

	var nextMonth = month+1; //+1; //Used to match up the current month with the correct start date.
	var prevMonth = month -1;
	var day = dateNow.getDate();
	var year = dateNow.getFullYear();


	//Determing if February (28,or 29)
	if (month == 1){
	if ( (year%100!=0) && (year%4==0) || (year%400==0)){
			FebNumberOfDays = 29;
		}else{
			FebNumberOfDays = 28;
		}
	}

	// names of months and week days.
	var monthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
	var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday", "Saturday"];
	var dayPerMonth = ["31", ""+FebNumberOfDays+"","31","30","31","30","31","31","30","31","30","31"]

	// days in previous month and next one , and day of week.
	var nextDate = new Date(nextMonth +' 1 ,'+year);
	var weekdays= nextDate.getDay();
	var weekdays2 = weekdays
	var numOfDays = dayPerMonth[month];

	// this leave a white space for days of pervious month.
	while (weekdays>0){
	htmlContent += "<td class='monthPre'></td>";

	// used in next loop.
	 weekdays--;
	}

	// loop to build the calander body.
	while (counter <= numOfDays){

	 // When to start new line.
	if (weekdays2 > 6){
		weekdays2 = 0;
		htmlContent += "</tr><tr>";
	}

	// if counter is current day.
	// highlight current day using the CSS defined in header.
	if (counter == day){
		htmlContent +="<td class='dayNow'  onMouseOver='this.style.background=\"#FFFFDD\"; this.style.color=\"#00FF00\"' "+
		"onMouseOut='this.style.background=\"#FFFFAA\"; this.style.color=\"#00FF00\"'>"+counter+"</td>";
	}else{
		htmlContent +="<td class='monthNow' onMouseOver='this.style.background=\"#FFFFDD\"'"+
		" onMouseOut='this.style.background=\"#FFFFAA\"'>"+counter+"</td>";

	}

	weekdays2++;
	counter++;
	}

	// building the calendar html body.
	var calendarBody = "<table class='calendar'>";
	calendarBody +="<tr class='dayNames'>  <td>Su</td>  <td>Mo</td> <td>Tu</td>"+
	"<td>We</td> <td>Th</td> <td>Fr</td> <td>Sa</td> </tr>";
	calendarBody += "<tr>";
	calendarBody += htmlContent;
	calendarBody += "</tr></table>";
	// set the content of div .
	document.getElementById("monthCalTitle").innerHTML=monthNames[month]+" "+ year;
	document.getElementById("calendar").innerHTML=calendarBody;

}
