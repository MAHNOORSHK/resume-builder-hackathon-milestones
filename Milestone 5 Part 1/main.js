var _a;
// listing element
(_a = document.getElementById('formResume')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //type assertion
    var urlElement = document.getElementById('url');
    var profileElement = document.getElementById('profile');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var cityElement = document.getElementById('city');
    var addressElement = document.getElementById('address');
    var degreeElement = document.getElementById('degree');
    var yearElement = document.getElementById('year');
    var universityElement = document.getElementById('university');
    var gradeElement = document.getElementById('grade');
    var skillElement = document.getElementById('skill');
    var levelElement = document.getElementById('level');
    var titleElement = document.getElementById('title');
    var companyElement = document.getElementById('company');
    var durationElement = document.getElementById('duration');
    if (urlElement && profileElement && nameElement && emailElement && phoneElement && cityElement && addressElement && degreeElement && yearElement && universityElement && gradeElement && skillElement && levelElement && titleElement && companyElement && durationElement) {
        var url = urlElement.value;
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var city = cityElement.value;
        var address = addressElement.value;
        var degree = degreeElement.value;
        var year = yearElement.value;
        var university = universityElement.value;
        var grade = gradeElement.value;
        var skill = skillElement.value;
        var level = levelElement.value;
        var title = titleElement.value;
        var company = companyElement.value;
        var duration = durationElement.value;
        var profile = (_a = profileElement.files) === null || _a === void 0 ? void 0 : _a[0];
        var profileUrl = profile ? URL.createObjectURL(profile) : "";
        var uniqueurl = "resumes/".concat(url.replace(/\s+/g, ' '), "_cv.html");
        //create resume output
        var resumeOutput = "\n <div>\n  <h1><b>DYNAMIC RESUME BUILDER</b></h1>\n  <h2>IT ASSISTANT</h2>\n   \n\n    <h3>PERSONAL INFORMATION</h3>\n ".concat(profileUrl ? "<img src=\"".concat(profileUrl, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : " ", "\n    <p id=\"name\" class=\"editable\" ><b>Name:</b> ").concat(name_1, "</p>\n    <p id=\"email\" class=\"editable\" ><b>Email:</b> ").concat(email, "</p>\n    <p id=\"city\" class=\"editable\" ><b>City:</b> ").concat(city, "</p>\n    <p id=\"phone\" class=\"editable\" ><b>Phone:</b> ").concat(phone, "</p>\n    <p id=\"address\" class=\"editable\" ><b>Address:</b> ").concat(address, "</p>\n\n    <h3>EDUCATION</h3>\n    <p id=\"degree\" class=\"editable\" >").concat(degree, " - ").concat(year, " - ").concat(grade, "</p>\n    <p id=\"university\" class=\"editable\" >").concat(university, "</p>\n\n    <h3>SKILLS</h3>\n    <p id=\"skill\" class=\"editable\" >").concat(skill, "</p>\n    <p id=\"level\" class=\"editable\" >").concat(level, "</p>\n\n    <h3>EXPERIENCE</h3>\n    <p id=\"title\" class=\"editable\" >").concat(title, " - ").concat(duration, "</p>\n    <p id=\"company\" class=\"editable\" >").concat(company, "</p>\n\n    </div>\n ");
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniqueurl;
        downloadLink.textContent = "Download your dynamic resume builder";
        var resumeOutputElement = document.getElementById('resumeDisplay');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
            editableresume();
        }
    }
    else {
        console.error('one or more output element are missing');
    }
});
function editableresume() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            //replace content
            if (currentElement.tagName === "p") {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
