// Define default data
const defaultData = [
  {
    Entry: "👁️01",
    StudentFullName: "Alice",
    AdmissionNo: "23/001",
    IndexNo: "39741064001",
    AssessmentNumber: "Not a CBC Student",
    Gender: "Male",
    DateOfAdm:"09/0/99",
    AdmissionClass: "Class One",
    ClassOf: "The Year 2023",
    UPI: "A00090090",
    PhoneNumber: "254909000999",
    OfficialEmail: "Allanohn@example.com",
    ClassTeacher: "🧑‍⚕️ Mr Oduor Geofrey Onyango",
    ParentGuardianName: "ADARA MADoe",
    ParentGuardianPhoneNumber: "6th-july-1998",
    Siblings: "jane",
    FileUrl1: "./Pdf/slip 2023/Clement's leaving Cert.pdf",
    FileUrl2: "Result slip",
    FileUrl3: "All collected",
    FileUrl4: "./img/StsPic/abeka.jpg",

  },
  {
    StudentFullName: "Bob",
    AdmissionNo: "kssko",
    Gender: "Female",
    AdmissionClass: "ppppp",
    AssessmentNumber: "B000156",
    UPI: "B00098",
    ClassOf: "The Year 2024",
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
  {
    StudentFullName: "Caroline",
    AdmissionNo: "kssko",
    Gender: "Female",
    AdmissionClass: "ppppp",
    AssessmentNumber: "B000156",
    UPI: "B00098",
    ClassOf: "The Year 2025",
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
  document.querySelector('input[name="DateOfAdm"]').value = data.DateOfAdm|| '';
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
  for (let i = 1; i <= 3; i++) {
    const fileUrl = data[`FileUrl${i}`];
    if (fileUrl) {
      const link = document.createElement('a');
      link.href = fileUrl;
      const fileName = fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
      link.textContent = `${fileName}`;
      link.download = fileName;
      document.body.appendChild(link);

      const container = document.getElementById(`fileDownload${i}`);
      container.innerHTML = '';
      container.appendChild(link);
      container.style.display = 'block';
    }
  }

  // Display learner images (FileUrl4)
  const learnerImageContainer = document.getElementById('learnerImages');
  const learnerImageUrl = data.FileUrl4;
  if (learnerImageUrl) {
    const img = document.createElement('img');
    img.src = learnerImageUrl;
    img.alt = `${data.StudentFullName}'s Image`;
    learnerImageContainer.innerHTML = '';
    learnerImageContainer.appendChild(img);
    learnerImageContainer.style.display = 'block';
  }
}

// Function to filter data based on the first three letters of the input (e.g., name)
function filterDataByName(StudentFullName) {
  const inputFirstThreeLetters = StudentFullName.toLowerCase().slice(0, 3);
  return defaultData.filter(
    item => item.StudentFullName.toLowerCase().slice(0, 3) === inputFirstThreeLetters
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

/// Define a variable to track whether the year select has been disabled
let yearSelectDisabled = false;
let prevSelectedYear = ''; // Variable to store previously selected year

// Function to generate a list of StudentFullName with year selection
function generateStudentList(studentNames, title, count, prevYear = '') {
  // Count the number of learners in each year
  const years = {};
  studentNames.forEach(name => {
    const year = defaultData.find(data => data.StudentFullName === name).ClassOf;
    if (year in years) {
      years[year]++;
    } else {
      years[year] = 1;
    }
  });

  let options = {};
  studentNames.forEach((name, index) => {
    options[index] = `${name}`;
  });

  // Prepare the HTML content for the Swal pop-up
  const htmlContent = `
    <div style="margin-top: 4px;">
      <select id="yearSelect" class="swal2-select" placeholder="Select year">
        <option value="">Select The Year</option>
       
        ${Object.keys(years).map(year => `<option value="${year}">${year}</option>`).join('')}
      </select>
    </div>
    <div>
      <h3 for="studentNameSelect">Select a student:</h3>
      <select id="studentNameSelect" class="swal2-select" placeholder="Select learner">
        <option value="">Select</option>
        ${Object.entries(options).map(([index, option]) => `<option value="${index}">${option}</option>`).join('')}
      </select>
    </div>`;

  // Display the Swal pop-up
  Swal.fire({
    title: `${title} (${count})`,
    html: htmlContent,
    showCancelButton: true,
    didOpen: () => {
      const studentSelect = document.getElementById('studentNameSelect');
      const yearSelect = document.getElementById('yearSelect');
      
      // Check if the previous year is set and select it
      if (prevYear) {
        yearSelect.value = prevYear;
      }

      studentSelect.addEventListener('change', function(event) {
        const selectedIndex = event.target.value;
        const selectedStudent = filteredStudents[selectedIndex];
        populateForm(selectedStudent);
      });

      yearSelect.addEventListener('change', function(event) {
        if (!yearSelectDisabled) {
          yearSelectDisabled = true; // Set the flag to true
          yearSelect.disabled = true; // Disable the select element
        }
        const selectedYear = event.target.value;
        filteredStudents = selectedYear ? defaultData.filter(student => student.ClassOf === selectedYear) : defaultData;
        const studentNames = filteredStudents.map(student => student.StudentFullName);
        generateStudentList(studentNames, `SYSTEM ENROLLMENT `, filteredStudents.length, selectedYear);
      });
    },
  });
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('input[type="search"]');
  let noDataAlertShown = false;

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
          if (inputValue.length >= 3) {
            const studentNames = defaultData.map(student => student.StudentFullName);
            generateStudentList(studentNames, 'Total Registered Learners', studentNames.length, prevSelectedYear);
          }
        },
      });
      noDataAlertShown = true;
    }
  }

  // Function to handle live filtering and form population
  function handleLiveFiltering(inputValue) {
    if (inputValue.length < 3) {
      noDataAlertShown = false;
      return; // If less than 3 characters, do not perform filtering or show the pop-up
    }

    const filteredData = filterDataByName(inputValue);

    if (filteredData.length > 0) {
      const studentNames = filteredData.map(student => student.StudentFullName);
      generateStudentList(studentNames, 'Matching Names', filteredData.length, prevSelectedYear);
      noDataAlertShown = false;
    } else {
      handleNoDataFound();
    }
  }

  // Event listener for input changes
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


