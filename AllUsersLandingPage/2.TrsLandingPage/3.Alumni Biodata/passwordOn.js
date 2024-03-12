


// Define default data
const defaultData = [
    {
      Entry:"👁️01",
      StudentFullName: "Abeka",
      AdmissionNo: "23/001",
      IndexNo:"39741064001",
      AssessmentNumber: "Not a CBC Student",
      Gender: "Male",
      AdmissionClass: "Class One",
      ClassOf:"2023",
      UPI: "A00090090",
      PhoneNumber: "254909000999",
      OfficialEmail: "Allanohn@example.com",
      ClassTeacher: "🧑‍⚕️ Mr Oduor Geofrey Onyango",
      ParentGuardianName: "ADARA MADoe",
      ParentGuardianPhoneNumber: "6th-july-1998",
      Siblings:"jane",
      FileUrl1: "./Pdf/slip 2023/Clement's leaving Cert.pdf",
      FileUrl2: "Result slip",
      FileUrl3: "All collected",
      FileUrl4: "./img/StsPic/abeka.jpg",
     
    },
    {
      StudentFullName: "Abondi Obadha",
      AdmissionNo: "kssko",
      Gender: "Female",
      AdmissionClass: "ppppp",
      AssessmentNumber: "B000156",
      UPI: "B00098",
      PhoneNumber: "0922",
      Siblings: "0922",
      OfficialEmail: "shwhn@example.com",
      ClassTeacher: "Mr Allan Tom Onyango",
      ParentGuardianName: "dmsk Doe",
      ParentGuardianPhoneNumber: "4-yyy-yyyy",
      FileUrl1: "URL_to_PDF_1_for_eje_Apondi_Obadha",
      FileUrl2: "URL_to_PDF_2_for_eje_Apondi_Obadha",
      FileUrl4: "./img/StsPic/lex.jpg",
    },
    // Add more default data objects as needed
  ];
  
  
  
  // Function to disable all form fields
  function disableFormFields() {
    const form = document.querySelector('form');
    const formInputs = form.querySelectorAll('input, select, textarea');
  
    formInputs.forEach(input => {
      if (input !== document.querySelector('input[type="search"]')) {
        input.disabled = true;
      }
    });
  }
  
  // Function to populate the form with data and create download links
  function populateForm(data) {
    document.querySelector('input[name="Entry"]').value = data.Entry || '';
    document.querySelector('input[name="StudentFullName"]').value = data.StudentFullName || '';
    document.querySelector('input[name="Admission No"]').value = data.AdmissionNo || '';
    document.querySelector('input[name="IndexNo"]').value = data.IndexNo || '';
    document.querySelector('select[name="Gender"]').value = data.Gender || '';
    document.querySelector('input[name="Admission Class"]').value = data.AdmissionClass || '';
    document.querySelector('input[name="ClassOf"]').value = data.ClassOf || '';
    document.getElementById('Assessment Number').value = data.AssessmentNumber || '';
    document.querySelector('input[name="U.P.I"]').value = data.UPI || '';
    document.querySelector('input[type="tel"]').value = data.PhoneNumber || '';
    document.querySelector('input[type="email"]').value = data.OfficialEmail || '';
    document.querySelector('select[name="🐏 Class Teacher"]').value = data.ClassTeacher || '';
    document.querySelector('input[name="Parent/Guardian Name"]').value = data.ParentGuardianName || '';
    document.querySelector('input[name="Phone Number"]').value = data.ParentGuardianPhoneNumber || '';
    document.querySelector('textarea[name="Siblings"]').value = data.Siblings || '';
  
     // Disable form fields after populating with data
     disableFormFields();
     
  // Generate download links for PDFs
  // Define your default data

  
  // Your existing functions and code...
  
  // Function to prompt for password before downloading files
  function promptPasswordForDownload(fileUrl) {
    const password = prompt('Enter password to download:', '');
  
    // Replace 'YOUR_PASSWORD_HERE' with the actual password you want to set
    const correctPassword = 'papa';
  
    if (password === correctPassword) {
      // If the entered password matches, initiate the download
      window.open(fileUrl);
    } else {
      // If the password is incorrect, show an alert
      alert('Incorrect password. Please try again.');
    }
  }
  
  // Modify your existing code for generating download links for PDFs
  // ... Existing code for populating the form and generating download links
  
  for (let i = 1; i <= 3; i++) {
    const fileUrl = data[`FileUrl${i}`];
    if (fileUrl) {
      const link = document.createElement('a');
      link.textContent = `Download File ${i}`; // Display text for the download link
  
      // Add click event listener to prompt for password before downloading
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        
        // Prompt for password before initiating download
        promptPasswordForDownload(fileUrl);
      });
  
      // Append the link to the container
      const container = document.getElementById(`fileDownload${i}`);
      container.innerHTML = ''; // Clear previous content
      container.appendChild(link);
  
      // Show the container
      container.style.display = 'block';
    }
  }
  
  
  // Your remaining code and functions...
  
  // Display learner images (FileUrl4)
    const learnerImageContainer = document.getElementById('learnerImages');
    const learnerImageUrl = data.FileUrl4;
    if (learnerImageUrl) {
      const img = document.createElement('img');
      img.src = learnerImageUrl;
      img.alt = `${data.StudentFullName}'s Image`;
      
      learnerImageContainer.innerHTML = ''; // Clear previous content
      learnerImageContainer.appendChild(img);
      
      // Show the image container
      learnerImageContainer.style.display = 'block';
    }
  }
  
  // Other functions remain the same...
  
  // Rest of your code...
  
  
  
  // Function to filter data based on the first three letters of the input (e.g., name)
  function filterDataByName(StudentFullName) {
    const inputFirstThreeLetters = StudentFullName.toLowerCase().slice(0, 2);
    return defaultData.filter(
      item => item.StudentFullName.toLowerCase().slice(0, 2) === inputFirstThreeLetters
    );
  }
  
  // Function to handle no data found scenario with SweetAlert
  function handleNoDataFound() {
    Swal.fire({
      icon: 'error',
      title: 'No Matching Data Found!',
      text: 'Please refine your search by \n typing First two letters of the Christian name',
      timer: 5000, // Display alert for 5 seconds
    });
  }
  
  // Function to handle live filtering and form population
  function handleLiveFiltering(inputValue) {
    if (inputValue.length < 2) {
      return; // If less than 3 characters, do not perform filtering or show the pop-up
    }
  
    const filteredData = filterDataByName(inputValue);
  
    if (filteredData.length > 0) {
      // Populate the form with the first match by default
      populateForm(filteredData[0]);
  
      // Prepare the title with the total matching words found
      const totalMatches = filteredData.length;
      const titleText = `{ ${totalMatches} } Matching Name${totalMatches > 1 ? 's' : ''} Found`;
  
      // Show the SweetAlert with a select input
      Swal.fire({
        title: titleText,
        input: 'select',
        inputOptions: filteredData.reduce((options, data, index) => {
          options[index] = data.StudentFullName; // Assuming StudentFullName is unique
          return options;
        }, {}),
        inputPlaceholder: '',
        showCancelButton: true,
        didOpen: () => {
          const selectInput = Swal.getInput();
          selectInput.addEventListener('change', function(event) {
            const selectedIndex = event.target.value;
            populateForm(filteredData[selectedIndex]);
          });
        },
      });
    } else {
      handleNoDataFound(); // Call the function to show the alert
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('input[type="search"]');
    let noDataAlertShown = false;
  
    // Function to generate a list of StudentFullName
    function generateStudentList(studentNames, title, count) {
      studentNames.sort(); // Sort the names alphabetically
      Swal.fire({
        title: `${title} (${count})`,
        input: 'select',
        inputOptions: studentNames.reduce((options, name, index) => {
          options[index] = name;
          return options;
        }, {}),
        inputPlaceholder: 'Select a student',
        showCancelButton: true,
        didOpen: () => {
          const selectInput = Swal.getInput();
          selectInput.addEventListener('change', function(event) {
            const selectedIndex = event.target.value;
            const selectedStudent = defaultData[selectedIndex];
            populateForm(selectedStudent);
          });
        },
      });
    }
  
    // Function to handle no data found scenario with SweetAlert
    function handleNoDataFound() {
      if (!noDataAlertShown) {
        Swal.fire({
          icon: 'error',
          title: 'No Matching Data Found!',
          text: 'Please refine your search by typing the first two letters of the Christian name',
          timer: 5000,
          didClose: () => {
            noDataAlertShown = false;
            const inputValue = searchInput.value.trim();
            if (inputValue.length >= 2) {
              const studentNames = defaultData.map(student => student.StudentFullName);
              generateStudentList(studentNames, 'Registered Learners', studentNames.length);
            }
          },
        });
        noDataAlertShown = true;
      }
    }
  
    // Function to handle live filtering and form population
    function handleLiveFiltering(inputValue) {
      if (inputValue.length < 2) {
        noDataAlertShown = false;
        return; // If less than 3 characters, do not perform filtering or show the pop-up
      }
  
      const filteredData = filterDataByName(inputValue);
  
      if (filteredData.length > 0) {
        const studentNames = filteredData.map(student => student.StudentFullName);
        generateStudentList(studentNames, 'Matching Names', filteredData.length);
        noDataAlertShown = false;
      } else {
        handleNoDataFound();
      }
    }
  
    // Event listeners for input changes
    searchInput.addEventListener('input', function(event) {
      const inputValue = event.target.value.trim();
      handleLiveFiltering(inputValue);
    });
  
  
  
    // Initially hide download link containers and learner image container
    const downloadContainers = document.querySelectorAll('[id^="fileDownload"]');
    downloadContainers.forEach(container => {
      container.style.display = 'block';
    });
  
    const learnerImageContainer = document.getElementById('learnerImages');
    learnerImageContainer.style.display = 'none';
  
  });