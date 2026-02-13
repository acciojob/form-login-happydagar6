function getFormvalue(event) {
    event.preventDefault();

    const form = document.getElementById("form1");

    const firstName = form.elements["fname"].value.trim();
    const lastName = form.elements["lname"].value.trim();

    const fullName = (firstName + " " + lastName).trim();

    alert(fullName);
}
