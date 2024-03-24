const learners = {
  JuniorSchoolMinutesforBOM: [
    {
      Title: "Select",
    },
    { 
      Title: "APPROVAL OF PROJECT UNDER MAINTENANCE AND IMPROVEMENT FUNDS", 
      embeddedDocURL: "https://docs.google.com/document/d/1W_JXzp9tzJn3fdDIubif3Hpo788fZaXl/edit?usp=sharing&ouid=110287645281482421505&rtpof=true&sd=true",
    },
    { 
      Title: "KANYADET SCHOOL BOM MEETING HELD ON 5/03/24", 
      embeddedDocURL: "https://docs.google.com/document/d/1VZj6NOD7h2YoFFwHICcFezKlLhfM8y1t/edit?usp=sharing&ouid=110287645281482421505&rtpof=true&sd=true",
    },
    // Add more learners...
  
    // Add more learners...
  ],
  GradeSeven: [
    {
      Title: "Select",
    },
    { 
      Title: "Student Name", 
      imageUrl: "https://example.com/image2.jpg",
      embeddedDocURL: "https://onedrive.live.com/embed?resid=ABCDEF1234567890",
    },
    // Add more learners...
  ],
  // Other classes and learners...
};

function displayLearners() {
  const selectedClass = document.getElementById("classSelect").value;
  const learnerSelect = document.getElementById("learnerSelect");
  const learnersInClass = learners[selectedClass];

  learnerSelect.innerHTML = "";

  learnersInClass.forEach((learner, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = learner.Title;
    learnerSelect.appendChild(option);
  });

  const numberOfLearners = learnersInClass.length-1;
  const countDisplay = document.getElementById("learnerCount");
  countDisplay.textContent = `Total Documents in : ${numberOfLearners}`;
}

function displayBiodata() {
  const selectedClass = document.getElementById("classSelect").value;
  const selectedLearnerIndex = document.getElementById("learnerSelect").value;
  const selectedLearner = learners[selectedClass][selectedLearnerIndex];

  let detailsHTML = `<h3>ALL YOUR EDITS ARE SYNCHRONISED TO ALL DEVICES </h3>`;
  detailsHTML += `<div><img src="${selectedLearner.imageUrl}" alt="${selectedLearner.Title}'s Image" style="max-width: 100%"></div>`;
  
  // Check if the learner has an embedded document URL
  if (selectedLearner.embeddedDocURL) {
    // Add a link to open the embedded document above the OK button
    detailsHTML += `<p><a href="${selectedLearner.embeddedDocURL}" target="_blank">Open</a></p>`;
    
    // Use the learner's specific embedded document URL
    detailsHTML += `<iframe src="${selectedLearner.embeddedDocURL}" width="100%" height="400" frameborder="0" scrolling="no"></iframe>`;
  } else {
    // Display a message if no embedded document URL is available
    detailsHTML += `<p>No embedded document available for this learner.</p>`;
  }

  Swal.fire({
    html: detailsHTML,
    showCancelButton: true,
    showConfirmButton: true,
    allowOutsideClick: true,
  });
}

document.getElementById("learnerSelect").addEventListener("change", function() {
  displayBiodata();
});

document.addEventListener('DOMContentLoaded', function() {
  const reloadButton = document.getElementById('reload');
  reloadButton.addEventListener('click', function() {
    location.reload();
  });

  displayLearners();
});
