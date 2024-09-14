var _a;
// listing element
(_a = document.getElementById('formResume')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //type assertion
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
    if (profileElement && nameElement && emailElement && phoneElement && cityElement && addressElement && degreeElement && yearElement && universityElement && gradeElement && skillElement && levelElement && titleElement && companyElement && durationElement) {
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
        //create resume output
        var resumeOutput = "\n <div>\n  <h1><b>DYNAMIC RESUME BUILDER</b></h1>\n  <h2>IT ASSISTANT</h2>\n   \n\n    <h3>PERSONAL INFORMATION</h3>\n ".concat(profileUrl ? "<img src=\"".concat(profileUrl, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : " ", "\n    <p><b>Name:</b> ").concat(name_1, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>City:</b> ").concat(city, "</p>\n    <p><b>Phone:</b> ").concat(phone, "</p>\n    <p><b>Address:</b> ").concat(address, "</p>\n\n    <h3>EDUCATION</h3>\n    <p>").concat(degree, " - ").concat(year, " - ").concat(grade, "</p>\n    <p>").concat(university, "</p>\n\n    <h3>SKILLS</h3>\n    <p>").concat(skill, "</p>\n    <p>").concat(level, "</p>\n\n    <h3>EXPERIENCE</h3>\n    <p>").concat(title, " - ").concat(duration, "</p>\n    <p>").concat(company, "</p>\n\n    </div>\n ");
        var resumeOutputElement = document.getElementById('resumeDisplay');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('the resume output element are missing');
        }
    }
    else {
        console.error('one or more output element are missing');
    }
});
