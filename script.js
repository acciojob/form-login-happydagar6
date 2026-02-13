function getFormvalue() {
    //Write your code here
	event.preventDefault();
	const form = document.getElementById("form1");
	const fistName = form.elements["fname"].value.trim();
	const lastName = form.elements["lname"].value.trim();
	const fullName = firstName + " " + lastName;
	alert(fullName);
}
