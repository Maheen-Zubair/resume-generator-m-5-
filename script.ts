
document.addEventListener("DOMContentLoaded", () => {
  const generateButton = document.getElementById("button") as HTMLButtonElement;
  const generatedResume = document.getElementById("generated") as HTMLDivElement;
  const resumeForm = document.getElementById("resumeBox") as HTMLFormElement;
  const editResume = document.getElementById("editResume") as HTMLButtonElement;
  const downloadAsPdf = document.getElementById("downloadAsPdf") as HTMLButtonElement;
  const shareableLinkContainer = document.createElement('shareAbleLink') as HTMLDivElement;
  generatedResume.appendChild(shareableLinkContainer);

  generateButton.addEventListener("click", (event) => {
      event.preventDefault();

      const name = (document.getElementById("userName") as HTMLInputElement).value;
      const email = (document.getElementById("email") as HTMLInputElement).value;
      const phoneNo = (document.getElementById("phoneNo") as HTMLInputElement).value;
      const region = (document.getElementById("region") as HTMLInputElement).value;
      const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
      const education = (document.getElementById("education") as HTMLInputElement).value;
      const education2 = (document.getElementById("education2") as HTMLInputElement).value;

      (document.getElementById("getName") as HTMLSpanElement).textContent = name;
      (document.getElementById("getmail") as HTMLSpanElement).textContent = email;
      (document.getElementById("getNumber") as HTMLSpanElement).textContent = phoneNo;
      (document.getElementById("getRegion") as HTMLSpanElement).textContent = region;
      (document.getElementById("getskills") as HTMLSpanElement).textContent = skills;
      (document.getElementById("getEdu") as HTMLSpanElement).textContent = education;
      (document.getElementById("getEdu2") as HTMLSpanElement).textContent = education2;

      generatedResume.classList.remove("hidden");
      resumeForm.reset();
      const uniqueURL = `${window.location.origin}?resume=${encodeURIComponent(name)}`;
      shareableLinkContainer.innerHTML = `<a href="${uniqueURL}" target="_blank">Shareable Link: ${uniqueURL}</a>`;
  });

  editResume.addEventListener('click', () => {
      (document.getElementById("name") as HTMLInputElement).value = (document.getElementById("getName") as HTMLSpanElement).textContent || '';
      (document.getElementById("email") as HTMLInputElement).value = (document.getElementById("getmail") as HTMLSpanElement).textContent || '';
      (document.getElementById("phoneNo") as HTMLInputElement).value = (document.getElementById("getNumber") as HTMLSpanElement).textContent || '';
      (document.getElementById("region") as HTMLInputElement).value = (document.getElementById("getRegion") as HTMLSpanElement).textContent || '';
      (document.getElementById("skills") as HTMLTextAreaElement).value = (document.getElementById("getskills") as HTMLSpanElement).textContent || '';
      (document.getElementById("education") as HTMLInputElement).value = (document.getElementById("getEdu") as HTMLSpanElement).textContent || '';
      (document.getElementById("education2") as HTMLInputElement).value = (document.getElementById("getEdu2") as HTMLSpanElement).textContent || '';

      generatedResume.classList.add("hidden");
      editResume.classList.add("hidden");
  });

  function downloadPDF() {
      const resumeElement = document.getElementById('resumeBox');
      downloadAsPdf.addEventListener('click', () => {
          if (resumeElement) {
              const resumeContent = resumeElement.outerHTML;
              const blob = new Blob([resumeContent], { type: 'application/pdf' });
              const link = document.createElement('a');
              const url = URL.createObjectURL(blob);
              link.href = url;
              link.download = 'resume.pdf';
              link.click();
              URL.revokeObjectURL(url);
          }
      });
  }

  return downloadPDF();
});


