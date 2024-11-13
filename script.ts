// Function to generateResume
function generateResume() {

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const fullname = (document.getElementById('fullname') as HTMLInputElement).value;   
    const resumetitle = (document.getElementById('resumetitle') as HTMLInputElement).value;
    const dateOfbirth = (document.getElementById('dateOfbirth') as HTMLInputElement).value;
    const age = (document.getElementById('age') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const language = (document.getElementById('language') as HTMLInputElement).value;


    // Profile picture handling
    const profilePicInput = document.getElementById("profilePic") as HTMLInputElement;
    let profilePicURL = "";
    if (profilePicInput.files && profilePicInput.files[0]) {
        profilePicURL = URL.createObjectURL(profilePicInput.files[0]);
    }


    (document.getElementById("nameDisplay") as HTMLElement).textContent = `Name: ${name}`;
    (document.getElementById("fullnameDisplay") as HTMLElement).textContent = `Full Name: ${fullname}`;
    (document.getElementById("ageDisplay") as HTMLElement).textContent = `Age: ${age}`;
    (document.getElementById("dateofbirthDisplay") as HTMLElement).textContent = `Date Of Birth: ${dateOfbirth}`;
    (document.getElementById("contactDisplay") as HTMLElement).textContent = `Phone: ${contact}`;
    (document.getElementById("emailDisplay") as HTMLElement).textContent = `Email: ${email}`;
    (document.getElementById("resumetitleDisplay") as HTMLElement).textContent = resumetitle;
    (document.getElementById("educationDisplay") as HTMLElement).textContent = education;
    (document.getElementById("experienceDisplay") as HTMLElement).textContent = workExperience;
    (document.getElementById("languageDisplay") as HTMLElement).textContent = language;


    // Skills List
    const skillsDisplay = document.getElementById("skillsDisplay") as HTMLElement;
    skillsDisplay.innerHTML = skills.map(skill => `<li>${skill.trim()}</li>`).join("");

    const resumeImage = document.getElementById("resumeImage") as HTMLImageElement;
    if (profilePicURL) {
        resumeImage.src = profilePicURL;
        resumeImage.style.display = "block";
    }

  // Show the resume display 
   (document.getElementById('resume-form')as HTMLDivElement).style.display = "none";
  (document.getElementById('resume-display') as HTMLDivElement).style.display = 'block';

}