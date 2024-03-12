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
    {Name:"learner Not yet Selected ",   
     imageUrl: "./img/schoologo.png",
    },
    { 
      imageUrl: "./img/abeka.jpg",
      Name: "1. EDWARD BENARD ABEKA ",
      Gender: "Male", 
      Academics:"Excellent", 
      AdmNo: "23/001", 
      Index: "39701064001",
      UPI:"F2AJ5A",
      MedicalCondition:"None",
      Father:"SETH OTIENO ABEKA.",
      GratuationYear:"2023",
      Tel:"+254729246853", 
      Mother:"EVELYN AKINYI ABEKA", 
      SchoolChoices: "./Pdfs/SCHOOLCHOICES.pdf",
      LearnerSelections: "./Pdfs/NominallKcpe.pdf", 
      LeavingCertificate: "./Pdfs/leaving/Abeka's leaving Cert.pdf", 
      OnlineResultSlip: "./Pdfs/Slip/Abeka's Slip.pdf", 
      Placement:"./Pdfs/Placements 2023.pdf", 
      CallingLetter:"#",
      password: "ass",
     
      },
    { 
      imageUrl: "./img/lex.jpg",
      Name: "2. OBADHA LEX APONDI  ",
      Gender: "Male", 
      Academics:"Excellent", 
      AdmNo: "23/002", 
      Index: "39701064002",
      MedicalCondition:"Low vision",
      UPI:"SAJM3S",
      Father:"THADEUS OBADBA ODENYO",
      GratuationYear:"2023",
      Mother:"JANEPHER NANGEKHE OSIANJU", 
      Tel:"+254-722-926-467", 
      Email:"osianjujanepher@gmail.com",
      SchoolChoices: "./Pdfs/SCHOOLCHOICES.pdf",
      LearnerSelections: "./Pdfs/NominallKcpe.pdf", 
      LeavingCertificate: "./Pdfs/leaving/lex's leaving Cert.pdf", 
      OnlineResultSlip: "./Pdfs/Slip/lex's Slip.pdf", 
      Placement:"./Pdfs/Placements 2023.pdf", 
      CallingLetter:"#",
      password: "ass",
     
      },
  
    { 
      imageUrl: "./img/clement.jpg",
      Name: "3. CLEMENT JOSEPH AWUOR   ",
      Gender: "Male", 
      Academics:"Excellent", 
      AdmNo: "23/003", 
      Index: "39701064003",
      MedicalCondition:"N/A",
      UPI:"6LDMMB",
      Father:"**********",
      GratuationYear:"2023",
      Mother:"VERONE AWUOR", 
      Tel:" +254-714-235-731", 
      SchoolChoices: "./Pdfs/SCHOOLCHOICES.pdf",
      LearnerSelections: "./Pdfs/NominallKcpe.pdf", 
      LeavingCertificate: "./Pdfs/leaving/clement's leaving Cert.pdf", 
      OnlineResultSlip: "./Pdfs/Slip/Clements Slip.pdf", 
      Placement:"./Pdfs/Placements 2023.pdf", 
      CallingLetter:"#",
      password: "ass",
     
      },
    { 
      imageUrl: "./img/james.jpg",
      Name: "4. JASON JAMES ODHIAMBO",
      Gender: "Male", 
      Academics:"Excellent", 
      AdmNo: "23/004", 
      Index: "39701064004",
      MedicalCondition:"N/A",
      UPI:"2AJQWG",
      GratuationYear:"2023",
      Father:"JAMES ODHIAMBO",
      Contact: "+254745744323",
      Email: "james.opondo@bayer.com",
      Mother:"RUPHINE AKINYI",
     Contact: "+254707496002",
     SchoolChoices: "./Pdfs/SCHOOLCHOICES.pdf",
     LearnerSelections: "./Pdfs/NominallKcpe.pdf",
      LeavingCertificate: "./Pdfs/leaving/Jason's leaving Cert.pdf", 
      OnlineResultSlip: "./Pdfs/Slip/James Slip.pdf", 
      Placement:"./Pdfs/Placements 2023.pdf", 
      CallingLetter:"#",
   
     
      },
    { 
      imageUrl:"./img/Len.jpg",
      Name: "5. HONGO LEN ODHIAMBO",
      Gender: "Male", 
      Academics:"Excellent", 
      AdmNo: "23/005", 
      Index: "39701064005",
      MedicalCondition:"N/A",
      UPI:"2AJQWG",
      GratuationYear:"2023",
      Father:"********",
      Mother:"Mary Hongo",
      Contact: "+254707303356",
     Contact: "+254707496002",
     SchoolChoices: "./Pdfs/SCHOOLCHOICES.pdf",
     LearnerSelections: "./Pdfs/NominallKcpe.pdf",
      LeavingCertificate: "./Pdfs/leaving/Len.pdf", 
      OnlineResultSlip: "./Pdfs/Slip/Len's Slip.pdf", 
      Placement:"./Pdfs/Placements 2023.pdf", 
      CallingLetter:"#",
   
     
      },
    { 
      imageUrl: "./img/BERRYL.jpg",
      Name: " 6. OCHOLA BERRYL ATIENO ",
      Gender: "Female", 
      Academics:"Good", 
      AdmNo: "23/006", 
      Index: "39701064006",
      MedicalCondition:"N/A",
      UPI:"CX7F7H",
      GratuationYear:"2023",
     SchoolChoices: "./Pdfs/SCHOOLCHOICES.pdf",
     LearnerSelections: "./Pdfs/NominallKcpe.pdf",
      LeavingCertificate: "./Pdfs/leaving/Berryl's leaving Cert.pdf", 
      OnlineResultSlip: "./Pdfs/Slip/Berryl's Slip.pdf", 
      Placement:"./Pdfs/Placements 2023.pdf", 
      CallingLetter:"#",
   
     
      },
    { 
      imageUrl: "./img/nuvia.jpg",
      Name: " 7. ONYANGO NUVIAH ACHIENG ",
      Gender: "Female", 
      Academics:"Average", 
      AdmNo: "23/007", 
      Index: "39701064007",
      MedicalCondition:"N/A",
      UPI:"6R9ETJ",
      GratuationYear:"2023",
     SchoolChoices: "./Pdfs/SCHOOLCHOICES.pdf",
     LearnerSelections: "./Pdfs/NominallKcpe.pdf",
      LeavingCertificate: "./Pdfs/leaving/Nuvia.pdf", 
      OnlineResultSlip: "./Pdfs/Slip/Nuviash's Slip.pdf", 
      Placement:"./Pdfs/Placements 2023.pdf", 
      CallingLetter:"#",
   
     
      },
    { 
      imageUrl: "./img/vivian.jpg",
      Name: " 8. AUMA VIVIAN ADHIAMBO  ",
      Gender: "Female", 
      Academics:"Average", 
      AdmNo: "23/008", 
      Index: "39701064008",
      MedicalCondition:"N/A",
      UPI:"GMDXXR",
      GratuationYear:"2023",
      Contact: "+254-727-591-761",
      Email: "joanadhiambo@gmail.com",
     SchoolChoices: "./Pdfs/SCHOOLCHOICES.pdf",
     LearnerSelections: "./Pdfs/NominallKcpe.pdf",
      LeavingCertificate: "./Pdfs/leaving/Vivian Adhiambo.pdf", 
      OnlineResultSlip: "./Pdfs/Slip/Vivian Adhiambo.pdf", 
      Placement:"./Pdfs/Placements 2023.pdf", 
      CallingLetter:"#",
   
     
      },
    { 
      imageUrl: "./img/agiza.jpg",
      Name: "9. AGOSWA RASTARICIA AGIZA  ",
      Gender: "Female", 
      Academics:"Average", 
      AdmNo: "23/009", 
      Index: "39701064009",
      MedicalCondition:"N/A",
      Contact: "+254-793-548-152",
      UPI:"KSMT2A",
      GratuationYear:"2023",
     SchoolChoices: "./Pdfs/SCHOOLCHOICES.pdf",
     LearnerSelections: "./Pdfs/NominallKcpe.pdf",
      LeavingCertificate: "./Pdfs/leaving/Agiza.pdf", 
      OnlineResultSlip: "./Pdfs/Slip/Agiza's Slip.pdf", 
      Placement:"./Pdfs/Placements 2023.pdf", 
      CallingLetter:"./Pdfs/Slip/To whom it may concern FOR AGIZA.pdf",
      },
    { 
      imageUrl:"./img/john.jpg",
      Name: "10. OTIENO JOHN OKOTH   ",
      Gender: "Male", 
      Academics:"Average", 
      AdmNo: "23/0010", 
      Index: "39701064010",
      MedicalCondition:"N/A",
      UPI:"ND9GJG",
      GratuationYear:"2023",
     SchoolChoices: "./Pdfs/SCHOOLCHOICES.pdf",
     LearnerSelections: "./Pdfs/NominallKcpe.pdf",
      LeavingCertificate: "./Pdfs/leaving/john.pdf", 
      OnlineResultSlip: "./Pdfs/Slip/John's Slip.pdf", 
      Placement:"./Pdfs/Placements 2023.pdf", 
      CallingLetter:"#",
   
     
      },

    {
      imageUrl:"./img/Stephanie.jpg",
      Name: "11.  OCHIENG STEPHANY AKINYI   ",
      Gender: "Female", 
      Academics:"Average", 
      AdmNo: "23/0011", 
      Index: "39701064011",
      MedicalCondition:"N/A",
      UPI:"MEK6N8",
      GratuationYear:"2023",
      Father:"RICHARD OCHIENG",
      Contact:" +254-17805584",
      Mother:"MARY GORRETY OWIRO",
      Contact: "+254727032249",
     SchoolChoices: "./Pdfs/SCHOOLCHOICES.pdf",
     LearnerSelections: "./Pdfs/NominallKcpe.pdf",
      LeavingCertificate: "./Pdfs/leaving/stephanie.pdf", 
      OnlineResultSlip: "./Pdfs/Slip/stephanie Slip.pdf", 
      Placement:"./Pdfs/Placements 2023.pdf", 
      CallingLetter:"#",
   
     
      },
    {
      imageUrl: "./img/randy.jpg",
      Name: " 12. OTIENO RANDY FRANKLINE",
      Gender: "Female", 
      Academics:"Good", 
      AdmNo: "23/0012", 
      Index: "39701064012",
      MedicalCondition:"N/A",
      UPI:"AY2YYP",
      GratuationYear:"2023",
     SchoolChoices: "./Pdfs/SCHOOLCHOICES.pdf",
     LearnerSelections: "./Pdfs/NominallKcpe.pdf",
      LeavingCertificate: "./Pdfs/leaving/stephanie.pdf", 
      OnlineResultSlip: "./Pdfs/Slip/stephanie Slip.pdf", 
      Placement:"./Pdfs/Placements 2023.pdf", 
      CallingLetter:"#",
   
     
      },
  
   
  
    // Other learner objects without passwords
  ],
  GradeSeven: [
    { Name: "", Age: "", grade: "", imageUrl: "" },
    { Name: "Alice Johnson", age: 16, grade: "A+", imageUrl: "url/to/image4.jpg" },
    // Other learner objects without passwords
  ],
  // Other classes and learners
};



const adminPassword = "admin";
let enteredPassword = ""; // Variable to store the entered password

function promptForDownloadPassword(learner, fileKey = "SchoolChoices") {
  handleDownload(learner, fileKey);
}

// ... (previous code)

function handleDownload(learner, fileKey) {
  const url = learner[fileKey];

  // Create a temporary anchor element to trigger the download
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "");
  link.click();


// ... (rest of your code remains unchanged)


  // Directly initiate download without checking password
  window.location.href = learner[fileKey];
}
function countLearnersInClass(className) {
  return learners[className].length-1;
}

function displayLearners() {
  const selectedClass = document.getElementById("classSelect").value;
  const learnerSelect = document.getElementById("learnerSelect");
  learnerSelect.innerHTML = "";

  learners[selectedClass].forEach((learner, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = learner.Name;
    learnerSelect.appendChild(option);
  });
   // Display number of learners registered for the selected class
   const numberOfLearners = countLearnersInClass(selectedClass);
   const countDisplay = document.getElementById("learnerCount");
   countDisplay.textContent = `🔍Number of Registered learners :>>  ${numberOfLearners}`;
  //  countDisplay.textContent = `🔍Number of Registered learners in ${selectedClass} are: ${numberOfLearners}`;

  displayBiodata();
}

function displayBiodata() {
  const selectedClass = document.getElementById("classSelect").value;
  const selectedLearnerIndex = document.getElementById("learnerSelect").value;
  const biodataDiv = document.getElementById("learnerBiodata");
  const selectedLearner = learners[selectedClass][selectedLearnerIndex];

  biodataDiv.innerHTML = "";

  // Display image
  const learnerImage = document.createElement("img");
  learnerImage.src = selectedLearner.imageUrl;
  learnerImage.alt = `${selectedLearner.Name}'s Image`;
  biodataDiv.appendChild(learnerImage);

  // Display learner details
  for (const [key, value] of Object.entries(selectedLearner)) {
    if (key !== "imageUrl" 
    && key !== "SchoolChoices"
    && key !== "LearnerSelections" 
    && key !== "LeavingCertificate"
    && key !== "OnlineResultSlip"
    && key !== "Placement" 
    && key !== "CallingLetter" 
    && key !== "password") 
    {
    const p = document.createElement("p");
    p.textContent = `${key}: ${value}`;
    biodataDiv.appendChild(p);
    }
  }

  // Display download links
  if (selectedLearner.SchoolChoices) {
    const downloadLink = document.createElement("a");
    downloadLink.href = "#";
    downloadLink.textContent = "🫂School Choices";
    downloadLink.onclick = function () {
      promptForDownloadPassword(selectedLearner);
    };
    biodataDiv.appendChild(downloadLink);
    
  

    if (selectedLearner.SchoolChoices) {
        const downloadLink = document.createElement("a");
        downloadLink.textContent = "🫂 School Choices";
        downloadLink.setAttribute("download", "SchoolChoices('')");
        downloadLink.href = selectedLearner.SchoolChoices; // Use the URL from the data array
        biodataDiv.appendChild(downloadLink);
    }

    if (selectedLearner.LearnerSelections) {
        const downloadLink2 = document.createElement("a");
        downloadLink2.textContent = "🚶‍♀️ Learner Selections";
        downloadLink2.setAttribute("download", "LearnerSelections.pdf");
        downloadLink2.href = selectedLearner.LearnerSelections;
        biodataDiv.appendChild(downloadLink2);
    }
    if (selectedLearner.OnlineResultSlip) {
      const downloadLink4 = document.createElement("a");
      downloadLink4.href = "#";
      downloadLink4.textContent = "👨‍⚕️Online Result Slip";
      downloadLink4.onclick = function () {
        promptForDownloadPassword(selectedLearner, "OnlineResultSlip");
      };
      biodataDiv.appendChild(downloadLink4);
    }
    if (selectedLearner.OnlineResultSlip) {
      const downloadLink5 = document.createElement("a");
      downloadLink5.href  = "#";
      downloadLink5.textContent = "🔍Placements";
      downloadLink5.onclick = function () {
        promptForDownloadPassword(selectedLearner, "Placement");
      };
      biodataDiv.appendChild(downloadLink5);
    }
    if (selectedLearner.OnlineResultSlip) {
      const downloadLink6 = document.createElement("a");
      downloadLink6.href  = "#";
      downloadLink6.textContent = "📩Calling Letter";
      downloadLink6.onclick = function () {
        promptForDownloadPassword(selectedLearner, "CallingLetter");
        alert("Pending Update");
        
      };
      biodataDiv.appendChild(downloadLink6);
    }
   
  }
}

// Initial call to display learners
displayLearners();
