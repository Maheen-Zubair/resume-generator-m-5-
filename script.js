document.addEventListener("DOMContentLoaded", function () {
    var generateButton = document.getElementById("button");
    var generatedResume = document.getElementById("generated");
    var resumeForm = document.getElementById("resumeBox");
    var editResume = document.getElementById("editResume");
    var downloadAsPdf = document.getElementById("downloadAsPdf");
    var shareableLinkContainer = document.createElement('shareAbleLink');
    generatedResume.appendChild(shareableLinkContainer);
    generateButton.addEventListener("click", function (event) {
        event.preventDefault();
        var name = document.getElementById("userName").value;
        var email = document.getElementById("email").value;
        var phoneNo = document.getElementById("phoneNo").value;
        var region = document.getElementById("region").value;
        var skills = document.getElementById("skills").value;
        var education = document.getElementById("education").value;
        var education2 = document.getElementById("education2").value;
        document.getElementById("getName").textContent = name;
        document.getElementById("getmail").textContent = email;
        document.getElementById("getNumber").textContent = phoneNo;
        document.getElementById("getRegion").textContent = region;
        document.getElementById("getskills").textContent = skills;
        document.getElementById("getEdu").textContent = education;
        document.getElementById("getEdu2").textContent = education2;
        generatedResume.classList.remove("hidden");
        resumeForm.reset();
        var uniqueURL = "".concat(window.location.origin, "?resume=").concat(encodeURIComponent(name));
        shareableLinkContainer.innerHTML = "<a href=\"".concat(uniqueURL, "\" target=\"_blank\">Shareable Link: ").concat(uniqueURL, "</a>");
    });
    editResume.addEventListener('click', function () {
        document.getElementById("name").value = document.getElementById("getName").textContent || '';
        document.getElementById("email").value = document.getElementById("getmail").textContent || '';
        document.getElementById("phoneNo").value = document.getElementById("getNumber").textContent || '';
        document.getElementById("region").value = document.getElementById("getRegion").textContent || '';
        document.getElementById("skills").value = document.getElementById("getskills").textContent || '';
        document.getElementById("education").value = document.getElementById("getEdu").textContent || '';
        document.getElementById("education2").value = document.getElementById("getEdu2").textContent || '';
        generatedResume.classList.add("hidden");
        editResume.classList.add("hidden");
    });
    function downloadPDF() {
        var resumeElement = document.getElementById('resumeBox');
        downloadAsPdf.addEventListener('click', function () {
            if (resumeElement) {
                var resumeContent = resumeElement.outerHTML;
                var blob = new Blob([resumeContent], { type: 'application/pdf' });
                var link = document.createElement('a');
                var url = URL.createObjectURL(blob);
                link.href = url;
                link.download = 'resume.pdf';
                link.click();
                URL.revokeObjectURL(url);
            }
        });
    }
    return downloadPDF();
});
