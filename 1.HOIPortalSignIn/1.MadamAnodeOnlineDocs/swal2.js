const learners = {
  JuniorSchoolMinutesforBOM: [
    {
      Title: "Select",
    },
    { 
      Title: "KANYADET SCHOOL BOM MEETING HELD ON 5/03/24", 
      imageUrl: "https://example.com/image1.jpg",
      embeddedDocURL: "https://onedrive.live.com/embed?resid=58F0DDF2E509BB93%2115212&authkey=!AC2LXJdaWf2S6XA&em=2",
    },
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

  const numberOfLearners = learnersInClass.length;
  const countDisplay = document.getElementById("learnerCount");
  countDisplay.textContent = `Total Documents in ${selectedClass}: ${numberOfLearners}`;
}

function displayBiodata() {
  const selectedClass = document.getElementById("classSelect").value;
  const selectedLearnerIndex = document.getElementById("learnerSelect").value;
  const selectedLearner = learners[selectedClass][selectedLearnerIndex];

  let detailsHTML = `<h2>${selectedLearner.Title}</h2>`;
  detailsHTML += `<div><img src="${selectedLearner.imageUrl}" alt="${selectedLearner.Title}'s Image" style="max-width: 100%"></div>`;
  
  // Check if the learner has an embedded document URL
  if (selectedLearner.embeddedDocURL) {
    // Use the learner's specific embedded document URL
    detailsHTML += `<iframe src="${selectedLearner.embeddedDocURL}" width="100%" height="400" frameborder="0" scrolling="no"></iframe>`;
  } else {
    // Display a message if no embedded document URL is available
    detailsHTML += `<p>No embedded document available for this learner.</p>`;
  }

  Swal.fire({
    html: detailsHTML,
    showCancelButton: false,
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
