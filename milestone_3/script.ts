// // Get reference to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission to display resume
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;

    // Generate the resume content dynamically
    const resumeHTML = `
     <h1>Resume</h1>
        <h3>Personal Information</h3>
        <p>Name: ${name} </p>
        <p>Phone: ${contact}</p>
        <p>Email: ${email}</p>
        
        <h3>Education</h3>
        <p>${education}</p>
        
        <h3>Experience</h3>
        <p>${workExperience}</p>
        
        <h3>Skills</h3>
        <p>${skills}</p>
        `;

        // Display the generated resume
        if(resumeDisplayElement){
            resumeDisplayElement.innerHTML = resumeHTML;
        }else{
            console.error('The resume display element is missing')
        }

})