// Function to generateResume
function generateResume() {
    // Collect input values
    var name = document.getElementById('name').value;
    var fullname = document.getElementById('fullname').value;
    var resumetitle = document.getElementById('resumetitle').value;
    var dateOfbirth = document.getElementById('dateOfbirth').value;
    var age = document.getElementById('age').value;
    var contact = document.getElementById('contact').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value.split(',');
    var workExperience = document.getElementById('work-experience').value;
    var language = document.getElementById('language').value;
    // Profile picture handling
    var profilePicInput = document.getElementById("profilePic");
    var profilePicURL = "";
    if (profilePicInput.files && profilePicInput.files[0]) {
        profilePicURL = URL.createObjectURL(profilePicInput.files[0]);
    }
    document.getElementById("nameDisplay").textContent = "Name: ".concat(name);
    document.getElementById("fullnameDisplay").textContent = "Full Name: ".concat(fullname);
    document.getElementById("ageDisplay").textContent = "Age: ".concat(age);
    document.getElementById("dateofbirthDisplay").textContent = "Date Of Birth: ".concat(dateOfbirth);
    document.getElementById("contactDisplay").textContent = "Phone: ".concat(contact);
    document.getElementById("emailDisplay").textContent = "Email: ".concat(email);
    document.getElementById("resumetitleDisplay").textContent = resumetitle;
    document.getElementById("educationDisplay").textContent = education;
    document.getElementById("experienceDisplay").textContent = workExperience;
    document.getElementById("languageDisplay").textContent = language;
    // Skills List
    var skillsDisplay = document.getElementById("skillsDisplay");
    skillsDisplay.innerHTML = skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join("");
    var resumeImage = document.getElementById("resumeImage");
    if (profilePicURL) {
        resumeImage.src = profilePicURL;
        resumeImage.style.display = "block";
    }
    // Show the resume display 
    document.getElementById('resume-form').style.display = "none";
    document.getElementById('resume-display').style.display = 'block';
}
