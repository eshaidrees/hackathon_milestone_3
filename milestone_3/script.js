// // Get reference to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission to display resume
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collect input values
    var name = document.getElementById('name').value;
    var contact = document.getElementById('contact').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value.split(',');
    var workExperience = document.getElementById('work-experience').value;
    // Generate the resume content dynamically
    var resumeHTML = "\n     <h1>Resume</h1>\n        <h3>Personal Information</h3>\n        <p>Name: ".concat(name, " </p>\n        <p>Phone: ").concat(contact, "</p>\n        <p>Email: ").concat(email, "</p>\n        \n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        \n        <h3>Experience</h3>\n        <p>").concat(workExperience, "</p>\n        \n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n        ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
