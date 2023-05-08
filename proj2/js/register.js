/*
Project:  GBCC Web Dev I Class project
Filename: register.js

Purpose: This set of functions is for form handling
*/

var areFormErrors = false;
var errorMessages = "<ul>";
var errorDiv = document.getElementById("formErrors");
var pass1 = document.getElementById("password");
var pass2 = document.getElementById("password2");
var email = document.getElementById("useremail");
var fullname = document.getElementById("fullname");
var birthday = document.getElementById("birthday");
var phone = document.getElementById("phone");
var comment = document.getElementById("comment");

// using a message string to customize the error message based on the type of error encountered
var messageStr = "";

function validate() {
    console.log("validating form");
}


function isValidPassword() {

    let retCode = true;

    console.log("Checking password...");

    // Error if both fields are empty
    if ((pass1.value === "") || (pass2 === "")) {
        messageStr += "<li>Cannot have a blank password</li>";
        retCode = false;
    }

    // Error if the passwords don't match
    if (pass1.value !== pass2.value) {
        messageStr += "<li>Passwords do not match</li>";
        retCode = false;
    }

    // Error is passwords match and the length is less than 8 characters
    if (pass1.value.length < 8) {
        messageStr += "<li>Password must be at least 8 characters</li>";
        retCode = false;
    }

    // Error if passwords match and there is a formatting error
    if (!(/[a-z]/.test(pass1.value)) || !(/[A-Z]/.test(pass1.value)) || !(/[0-9]/.test(pass1.value))) {
        messageStr += "<li>Passwords require uppercase, lowercase, and number</li>";
        //pass1.classList.add("error");
        retCode = false;
    }

    if (!retCode) {
        console.log("there were password validation errors!");
        pass1.classList.add("error");
        pass2.classList.add("error");
    } else {
        pass1.classList.remove("error");
        pass2.classList.remove("error");
    }

    return (retCode);
}

function isValidEmail() {

    console.log("checking email...");
    let domain = email.value;
    let retCode = true;

    if (email.value === "") {
        messageStr += "<li>must supply an email</li>";
        retCode = false;
    }
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value))) {
        messageStr += "<li>email must be in the format of 'user@domain.com'\n\t\tvalid domains: students.ccsnh.edu / ccsnh.edu / gmail.com</li>";
        retCode = false;
    }

    domain = domain.split('@')[1]; // anything after the @ is the domain
    if (!/students.ccsnh.edu|ccsnh.edu|gmail.com/.test(domain)) {
        messageStr += "<li>\tinvalid email domain. Valid domains are: students.ccsnh.edu / ccsnh.edu / gmail.com</li>";
        retCode = false;
    }

    if (!retCode) {
        console.log("there were email validation errors!");
        email.classList.add("error");
    } else {
        email.classList.remove("error");
    }

    return (retCode);
}

function isValidName() {

    let retCode = true;
    console.log("checking name...");

    if (fullname.value === "") {
        messageStr += "<li>You must supply a name</li>";
        retCode = false;
    }
    if (fullname > 50) {
        messageStr += "<li>Please shorten your name to the 50 character limit</li>";
        retCode = false;
    }
    if (!/[a-z]+ [a-z]+/.test(fullname.value)) {
        messageStr += "<li>Name must be in the format of \"First Last\"</li>";
        retCode = false;
    }

    if (!retCode) {
        console.log("there were name validation errors!");
        fullname.classList.add("error");
    } else {
        fullname.classList.remove("error");
    }

    return (retCode);
}

function isValidDate() {

    let retCode = true;

    // internationalization...
    let year = birthday.value.split("-")[0];
    let month = birthday.value.split("-")[1];
    let day = birthday.value.split("-")[2];

    let dispDate = day + "/" + month + "/" + year;

    let thisYear = new Date().getFullYear();
    let oldestValidYear = thisYear - 72; // working past retirement...
    let youngestValidYear = thisYear - 18; // no minors

    console.log("checking birthday...");

    if (birthday.value === "") {
        messageStr += "<li>Not a valid Date</li>";
        retCode = false;
    }
    if (parseInt(year) < oldestValidYear) {
        messageStr += "<li>This is not age discrimination, but I need someone younger</li>";
        retCode = false;
    }
    if ((parseInt(year) >= youngestValidYear) && !(parseInt(year) > thisYear)) {
        messageStr += "<li>You do not meet the minimum age limit</li>";
        retCode = false;
    }
    if (parseInt(year) > thisYear) {
        // throwing this in for fun to cover the edge case of someone entering a year larger than this year...
        messageStr += "<li>You may have entered an incorrect year, it appears you haven't been born yet...</li>";
        retCode = false;
    }

    if (!retCode) {
        console.log("there were date validation errors!");
        birthday.classList.add("error");
    } else {
        birthday.classList.remove("error");
    }

    return (retCode);
}

function isValidPhone() {

    let retCode = true;
    console.log("checking phone...");

    if (phone.value === "") {
        messageStr += "<li>Not a valid Phone Number. Use the format: (###) ###-####</li>";
        retCode = false;
    }
    if (!(/\([1-9][0-9][0-9]\) [1-9][0-9][0-9]\-[0-9][0-9][0-9][0-9]/.test(phone.value))) {
        messageStr += "<li>Phone Number must be in the format of (###) ###-####</li>";
        retCode = false;
    }

    if (!retCode) {
        console.log("there were phone validation errors!");
        phone.classList.add("error");
    } else {
        phone.classList.remove("error");
    }

    return (retCode);
}

function isValidComment() {

    let retCode = true;

    console.log("checking Comment...");

    if (comment.value.length <= 5) {
        messageStr += "<li>Please supply a comment, minimum length is 5 characters</li>";
        retCode = false;
    }

    if (!retCode) {
        console.log("there were comment validation errors!");
        comment.classList.add("error");
    } else {
        comment.classList.remove("error");
    }

    return (retCode);
}

function checkForm() {
    // figure out if there are any missing or incorrect 
    // values on the form

    errorDiv.innerHTML = ""; // start by cleaning any previous errors...
    errorDiv.style.display = "none";
    areFormErrors = false;
    errorMessages = "<ul>";

    console.log("\n\n****************  validating the form   ********************\n\n")

    if (!isValidPassword()) {
        console.log("\t" + messageStr);
        errorMessages += messageStr;
        messageStr = "" // clear the message
        areFormErrors = true;
    }

    if (!isValidEmail()) {
        console.log("\t" + messageStr);
        errorMessages += messageStr;
        messageStr = "" // clear the message
        areFormErrors = true;
    }

    if (!isValidName()) {
        console.log("\t" + messageStr);
        errorMessages += messageStr;
        messageStr = "" // clear the message
        areFormErrors = true;
    }

    if (!isValidDate()) {
        console.log("\t" + messageStr);
        errorMessages += messageStr;
        messageStr = "" // clear the message
        areFormErrors = true;
    }

    if (!isValidPhone()) {
        console.log("\t" + messageStr);
        errorMessages += messageStr;
        messageStr = "" // clear the message
        areFormErrors = true;
    }

    if (!isValidComment()) {
        console.log("\t" + messageStr);
        errorMessages += messageStr;
        messageStr = "" // clear the message
        areFormErrors = true;
    }

    errorMessages += "</ul>";

    if (areFormErrors) {
        errorDiv.innerHTML = errorMessages;
        errorDiv.style.display = "block";
        console.log("Errors were encountered...\n");
        return (false);
    }

    // if there are form errors, return false (not (areErrors = true))
    // if there are no errors, return true (not (areErrors = false))
    return (true);
}

document.getElementById("submit").addEventListener("click", function (event) {
    if (!checkForm()) {

        // Prevent default form action. DO NOT REMOVE THIS LINE
        event.preventDefault();
    } else {
        return (true);
    }
});
