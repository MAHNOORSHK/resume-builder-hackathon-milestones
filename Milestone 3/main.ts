// listing element
document.getElementById('formResume')?.addEventListener('submit', function(event) {
    event.preventDefault();


  //type assertion
  const  profileElement = document.getElementById('profile') as HTMLInputElement;
  const nameElement = document.getElementById('name') as HTMLInputElement;
  const emailElement = document.getElementById('email') as HTMLInputElement;
  const phoneElement = document.getElementById('phone') as HTMLInputElement;
  const cityElement = document.getElementById('city') as HTMLInputElement;
  const addressElement = document.getElementById('address') as HTMLInputElement;
  const degreeElement = document.getElementById('degree') as HTMLInputElement;
  const yearElement = document.getElementById('year') as HTMLInputElement;
  const universityElement = document.getElementById('university') as HTMLInputElement;
  const gradeElement = document.getElementById('grade') as HTMLInputElement;
  const skillElement = document.getElementById('skill') as HTMLInputElement;
  const levelElement = document.getElementById('level') as HTMLInputElement;
  const titleElement = document.getElementById('title') as HTMLInputElement;
  const companyElement = document.getElementById('company') as HTMLInputElement;
  const durationElement = document.getElementById('duration') as HTMLInputElement;
  


  if(profileElement && nameElement && emailElement && phoneElement && cityElement && addressElement && degreeElement && yearElement &&universityElement && gradeElement && skillElement && levelElement && titleElement && companyElement && durationElement){
  
 const name = nameElement.value
 const email = emailElement.value
 const phone = phoneElement.value
 const city = cityElement.value
 const address = addressElement.value
 const degree = degreeElement.value
 const year = yearElement.value
 const university = universityElement.value
 const grade = gradeElement.value
 const skill = skillElement.value
 const level = levelElement.value
 const title = titleElement.value
 const company = companyElement.value
 const duration = durationElement.value

 const profile = profileElement.files?.[0];
 const profileUrl = profile ? URL.createObjectURL(profile) : "";

 //create resume output
 const resumeOutput = `
 <div>
  <h1><b>DYNAMIC RESUME BUILDER</b></h1>
  <h2>IT ASSISTANT</h2>
   

    <h3>PERSONAL INFORMATION</h3>
 ${
      profileUrl ? `<img src="${profileUrl}" alt="Profile Picture" class="profilePicture">` : " "
    }
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>City:</b> ${city}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>Address:</b> ${address}</p>

    <h3>EDUCATION</h3>
    <p>${degree} - ${year} - ${grade}</p>
    <p>${university}</p>

    <h3>SKILLS</h3>
    <p>${skill}</p>
    <p>${level}</p>

    <h3>EXPERIENCE</h3>
    <p>${title} - ${duration}</p>
    <p>${company}</p>

    </div>
 `;


 const resumeOutputElement = document.getElementById('resumeDisplay')
 if (resumeOutputElement){
  resumeOutputElement.innerHTML = resumeOutput
 } else {
   console.error('the resume output element are missing')
 }
  } else {
    console.error('one or more output element are missing')
  }
})