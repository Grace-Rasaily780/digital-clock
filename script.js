const TimeAndDate  = () => {
	
	let date = moment();
	
	let day = date.format("ddd").toUpperCase();
	let time = date.format("h:mm:ss");
	let a = date.format("a");

	

	document.querySelector('#time').innerHTML = time;
	switch(a) {
		case 'am':
			document.querySelector('#' + a).style.color = '#3d3d3d';
			break;
		case 'pm':
			document.querySelector('#' + a).style.color = '#3d3d3d';
			break;
	}

	switch(day) {
		case 'SUN':
			document.querySelector('#' + day).style.color = '#3d3d3d';
			break;
		case 'MON':
			document.querySelector('#' + day).style.color = '#3d3d3d';
			break;
		case 'TUE':
			document.querySelector('#' + day).style.color = '#3d3d3d';
			break;
		case 'THU':
			document.querySelector('#' + day).style.color = '#3d3d3d';
			break;
		case 'WED':
			document.querySelector('#' + day).style.color = '#3d3d3d';
			break;
		case 'FRI':
			document.querySelector('#' + day).style.color = '#3d3d3d';
			break;
		case 'SAT':
			document.querySelector('#' + day).style.color = '#3d3d3d';
			break;
	}
}

setInterval(TimeAndDate, 1000);

TimeAndDate();

let darkmode = document.querySelector('#flexSwitchCheckDefault');

darkmode.addEventListener("change" , () => {
	document.querySelector('.main_body').style.filter = 'invert(100%)';
	document.querySelector('#body').style.backgroundColor = '#313131';
	document.querySelector('#body').style.color = '#f5f5f5';

	if (darkmode.checked == false) {
		document.querySelector('.main_body').style.filter = 'invert(0%)';
		document.querySelector('#body').style.backgroundColor = '#f5f5f5';
		document.querySelector('#body').style.color = '#313131';
	}
});
