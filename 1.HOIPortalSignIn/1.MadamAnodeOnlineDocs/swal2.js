const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

document.addEventListener('DOMContentLoaded', function() {
  var reloadButton = document.getElementById('reload');

  reloadButton.addEventListener('click', function() {
    location.reload();
  });
});

const learners = {
  JuniorSchoolMinutesforBOM: [
    // Learner objects
    {
      Title: "Select",
    },
    
    { 
      Title: "KANYADET SCHOOL BOM MEETING HELD ON 5/03/24 ", 
      fileURL: "https://1drv.ms/w/s!ApO7CeXy3fBY9mwgcoafK-WMySnd?e=dJY21H",
     
    },
  
   
    // Add more learners here...
  ],
  GradeSeven: [
    // Learner objects
  ],
  // Other classes and learners
};

const adminPassword = "admin";
let enteredPassword = ""; // Variable to store the entered password

function promptForDownloadPassword(learner, fileKey = "fileURL") {
  handleDownload(learner, fileKey);
}

function handleDownload(learner, fileKey) {
  const password = enteredPassword;

  // Directly initiate download without checking password
  window.location.href = learner[fileKey];
}

function countLearnersInClass(classTitle) {
  return learners[classTitle].length;
}

function displayLearners() {
  const selectedClass = document.getElementById("classSelect").value;
  const learnerSelect = document.getElementById("learnerSelect");
  const learnersInClass = learners[selectedClass]; // Get learners for the selected class

  learnerSelect.innerHTML = "";

  learnersInClass.forEach((learner, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = learner.Title;
    learnerSelect.appendChild(option);
  });

  // Display number of learners registered for the selected class
  const numberOfLearners = countLearnersInClass(selectedClass);
  const countDisplay = document.getElementById("learnerCount");
  countDisplay.textContent = `Total Documents in ${selectedClass} :  ${numberOfLearners}`;
}

function displayBiodata() {
  const selectedClass = document.getElementById("classSelect").value;
  const selectedLearnerIndex = document.getElementById("learnerSelect").value;
  const selectedLearner = learners[selectedClass][selectedLearnerIndex];

  let detailsHTML = "<div>";
  for (const [key, value] of Object.entries(selectedLearner)) {
    if (
      key !== "fileURL" 
    ) {
      detailsHTML += `<p><strong>${key}: ${value}</strong></p>`;
    }
  }
  detailsHTML += "</div>";

  // Open the document in a new tab/window
 // detailsHTML += `<a href="${selectedLearner.fileURL}" target="_blank"> <strong id="strong">Open Document</strong></a>`;

  Swal.fire({
   // title: `${selectedLearner.Title}'s Biodata`,
    html: `<img src="${selectedLearner.imageUrl}" alt="${selectedLearner.Title}'s Image" style="max-width: 100%">${detailsHTML}
    <iframe src="https://onedrive.live.com/embed?resid=58F0DDF2E509BB93%2115212&authkey=!AC2LXJdaWf2S6XA&em=2" width="100%" height="288" frameborder="0" scrolling="no"></iframe>`,
    showCancelButton: false,
    showConfirmButton: true,
    allowOutsideClick: true,
  });
}

// Add event listener for learnerSelect dropdown
document.getElementById("learnerSelect").addEventListener("change", function() {
  displayBiodata();
});

// Initial call to display learners
displayLearners();
