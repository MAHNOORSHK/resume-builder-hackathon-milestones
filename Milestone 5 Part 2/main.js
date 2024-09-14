// listing element
document.getElementById('formResume')?.addEventListener('submit', function (event) {
    event.preventDefault();
    //type assertion
    const urlElement = document.getElementById('url');
    const profileElement = document.getElementById('profile');
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
    const cityElement = document.getElementById('city');
    const addressElement = document.getElementById('address');
    const degreeElement = document.getElementById('degree');
    const yearElement = document.getElementById('year');
    const universityElement = document.getElementById('university');
    const gradeElement = document.getElementById('grade');
    const skillElement = document.getElementById('skill');
    const levelElement = document.getElementById('level');
    const titleElement = document.getElementById('title');
    const companyElement = document.getElementById('company');
    const durationElement = document.getElementById('duration');
    if (urlElement && profileElement && nameElement && emailElement && phoneElement && cityElement && addressElement && degreeElement && yearElement && universityElement && gradeElement && skillElement && levelElement && titleElement && companyElement && durationElement) {
        const url = urlElement.value;
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const city = cityElement.value;
        const address = addressElement.value;
        const degree = degreeElement.value;
        const year = yearElement.value;
        const university = universityElement.value;
        const grade = gradeElement.value;
        const skill = skillElement.value;
        const level = levelElement.value;
        const title = titleElement.value;
        const company = companyElement.value;
        const duration = durationElement.value;
        const profile = profileElement.files?.[0];
        const profileUrl = profile ? URL.createObjectURL(profile) : "";
        const uniqueurl = `resumes/${url.replace(/\s+/g, ' ')}_cv.html`;
        //create resume output
        const resumeOutput = `
 <div>
  <h1><b>DYNAMIC RESUME BUILDER</b></h1>
  <h2>IT ASSISTANT</h2>
   

    <h3>PERSONAL INFORMATION</h3>
 ${profileUrl ? `<img src="${profileUrl}" alt="Profile Picture" class="profilePicture">` : " "}
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
        const downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniqueurl;
        downloadLink.textContent = "Download your dynamic resume builder";
        const resumeOutputElement = document.getElementById('resumeDisplay');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
            editableresume();
            resumeOutputElement.classList.remove("hidden");
            const buttonContanier = document.createElement("div");
            buttonContanier.id = "buttonsContainer";
            resumeOutputElement.appendChild(buttonContanier);
            const downloadButton = document.createElement("button");
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener("click", () => {
                window.print();
            });
            buttonContanier.appendChild(downloadButton);
            const shareLinkButton = document.createElement("button");
            shareLinkButton.textContent = "Shareable Link";
            shareLinkButton.addEventListener("click", async () => {
                try {
                    const shareableLink = `https://yourdomain.com/resumes/${name.replace(/\s+/g, "_")}_cv.html`;
                    await navigator.clipboard.writeText(shareableLink);
                    alert("Shareable Link Copied To Clipboard");
                }
                catch (err) {
                    console.error("Failed to Copy Link", err);
                    alert(" Please Try Again!! Failed Copy Link");
                }
            });
            buttonContanier.appendChild(shareLinkButton);
        }
        else {
            console.error("Resume container not found");
        }
    }
    else {
        console.error('Output Element are missing');
    }
});
function editableresume() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click', function () {
            const currentElement = element;
            const currentValue = currentElement.textContent || "";
            //replace content
            if (currentElement.tagName === "p") {
                const input = document.createElement('input');
                input.type = 'text';
                input.value = currentValue;
                input.classList.add('editing-input');
                input.addEventListener('blur', function () {
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline';
                    input.remove();
                });
                currentElement.style.display = 'none';
                currentElement.parentNode?.insertBefore(input, currentElement);
                input.focus();
            }
        });
    });
}
export {};
