// listing element
document.getElementById('formResume')?.addEventListener('submit', function(event) {
    event.preventDefault();


  //type assertion
  const urlElement = document.getElementById('url') as HTMLInputElement;
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
  


  if(urlElement && profileElement && nameElement && emailElement && phoneElement && cityElement && addressElement && degreeElement && yearElement &&universityElement && gradeElement && skillElement && levelElement && titleElement && companyElement && durationElement){
  
 const url = urlElement.value   
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

 const uniqueurl = `resumes/${url.replace(/\s+/g, ' ')}_cv.html`

 //create resume output
 const resumeOutput = `
 <div>
  <h1><b>DYNAMIC RESUME BUILDER</b></h1>
  <h2>IT ASSISTANT</h2>
   

    <h3>PERSONAL INFORMATION</h3>
 ${
      profileUrl ? `<img src="${profileUrl}" alt="Profile Picture" class="profilePicture">` : " "
    }
    <p id="name" class="editable" ><b>Name:</b> ${name}</p>
    <p id="email" class="editable" ><b>Email:</b> ${email}</p>
    <p id="city" class="editable" ><b>City:</b> ${city}</p>
    <p id="phone" class="editable" ><b>Phone:</b> ${phone}</p>
    <p id="address" class="editable" ><b>Address:</b> ${address}</p>

    <h3>EDUCATION</h3>
    <p id="degree" class="editable" >${degree} - ${year} - ${grade}</p>
    <p id="university" class="editable" >${university}</p>

    <h3>SKILLS</h3>
    <p id="skill" class="editable" >${skill}</p>
    <p id="level" class="editable" >${level}</p>

    <h3>EXPERIENCE</h3>
    <p id="title" class="editable" >${title} - ${duration}</p>
    <p id="company" class="editable" >${company}</p>

    </div>
 `;

 const downloadLink = document.createElement('a')
downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
downloadLink.download = uniqueurl;
downloadLink.textContent = "Download your dynamic resume builder";

 const resumeOutputElement = document.getElementById('resumeDisplay')
 if (resumeOutputElement){
  resumeOutputElement.innerHTML = resumeOutput
  
  resumeOutputElement.appendChild(downloadLink)
  editableresume();
 }
  } else {
    console.error('one or more output element are missing')
  }
})

function editableresume(){
  const editableElements = document.querySelectorAll('.editable');
  editableElements.forEach(element => {
    element.addEventListener('click' , function() {
      const currentElement = element as HTMLElement;
      const currentValue = currentElement.textContent || "" ;

      //replace content
      if (currentElement.tagName === "p") {
        const input = document.createElement('input')
        input.type = 'text'
        input.value = currentValue
        input.classList.add('editing-input')


        input.addEventListener('blur' , function () {
          currentElement.textContent = input.value;
          currentElement.style.display = 'inline'
          input.remove()
        })



       currentElement.style.display = 'none'
       currentElement.parentNode?.insertBefore(input, currentElement)
       input.focus()
      }

    })
  })
}