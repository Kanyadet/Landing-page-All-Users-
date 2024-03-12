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
  ClassEight2023: [
    // Learner objects

    { 
      Name: "Edward Benard Abeka",
      Gender: "Male", 
      AdmNo: "23/001", 
      Index: "39701064001",
      Tel:"+254729246853", 
      Mother:"EVELYN AKINYI ABEKA", 
      imageUrl: "./img/abeka.jpg",
      fileURL: "./Pdf/slip 2023/Abeka.pdf",
      fileURL2: "./Pdf/slip2023/ClementJoseph.pdf", 
      fileURL3: "./Pdf/slip2023/ClementJoseph.pdf",
      password: "ass"
    },
    { 
      Name: "Amos",
      Gender: "Male", 
      AdmNo: "23/001", 
      Index: "39701064001",
      Tel:"+254729246853", 
      Mother:"EVELYN AKINYI ABEKA", 
      imageUrl: "./img/abeka.jpg",
      fileURL: "./Pdf/slip 2023/Abeka.pdf",
      fileURL2: "./Pdf/slip2023/ClementJoseph.pdf", 
      fileURL3: "./Pdf/slip2023/ClementJoseph.pdf",
      password: "ass"
    },
    { 
      Name: "Amos",
      Gender: "Male", 
      AdmNo: "23/001", 
      Index: "39701064001",
      Tel:"+254729246853", 
      Mother:"EVELYN AKINYI ABEKA", 
      imageUrl: "./img/abeka.jpg",
      fileURL: "./Pdf/slip 2023/Abeka.pdf",
      fileURL2: "./Pdf/slip2023/ClementJoseph.pdf", 
      fileURL3: "./Pdf/slip2023/ClementJoseph.pdf",
      password: "ass"
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

function countLearnersInClass(className) {
  return learners[className].length;
}

function displayLearners() {
  const selectedClass = document.getElementById("classSelect").value;
  const learnerSelect = document.getElementById("learnerSelect");
  const learnersInClass = learners[selectedClass]; // Get learners for the selected class

  learnerSelect.innerHTML = "";

  learnersInClass.forEach((learner, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = learner.Name;
    learnerSelect.appendChild(option);
  });z

  // Display number of learners registered for the selected class
  const numberOfLearners = countLearnersInClass(selectedClass);
  const countDisplay = document.getElementById("learnerCount");
  countDisplay.textContent = `Number of learners in ${selectedClass}: ${numberOfLearners}`;

  displayBiodata();
}

function displayBiodata() {
  const selectedClass = document.getElementById("classSelect").value;
  const selectedLearnerIndex = document.getElementById("learnerSelect").value;
  const biodataDiv = document.getElementById("learnerBiodata");
  const selectedLearner = learners[selectedClass][selectedLearnerIndex];

  let detailsHTML = "<div>";
  for (const [key, value] of Object.entries(selectedLearner)) {
    if (
      key !== "imageUrl" &&
      key !== "fileURL" &&
      key !== "fileURL2" &&
      key !== "fileURL3" &&
      key !== "password"
    ) {
      detailsHTML += `<p><strong>${key}:</strong> ${value}</p>`;
    }
  }
  detailsHTML += "</div>";

  Swal.fire({
    title: `${selectedLearner.Name}'s Biodata`,
    html: `<img src="${selectedLearner.imageUrl}" alt="${selectedLearner.Name}'s Image" style="max-width: 100%">${detailsHTML}`,
    showCancelButton: false,
    showConfirmButton: false,
    allowOutsideClick: true,
  });
}

// Initial call to display learners
displayLearners();
