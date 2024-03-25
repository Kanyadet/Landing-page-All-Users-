// Define default data
const defaultData = [
  {
    ClassIndex: "2 of 58",
    StudentFullName: "JOYJESCA ABALA ATIENO",
    AdmissionNo: "001/23",
    EntryNo: "Pending Update",
    AssessmentNumber: "A000874444",
    Gender: "Female",
    DateOfAdm:"Pending Update",
    AdmissionClass: "Pending Update",
    DateOfBirth:"Pending Update",
    Level: "Grade 8",
    UPI: "BANX8B",
    PhoneNumber: "Pending Update",
    StudentSchoolEmail: "Pending Update",
    ClassTeacher: "🧑‍⚕️ Mr Wyclife Owino",
    ParentGuardianName: "Pending Update",
    ParentGuardianPhoneNumber: "Pending Update",
    Siblings: "APLINE AKINYI",
    FileUrl1: "#",
    FileUrl2: "#",
    FileUrl3: "#",
    FileUrl4: "#",

  },
  {
    ClassIndex: "👁️Grade 4",
    StudentFullName: "Amander",
    AdmissionNo: "23/001",
    EntryNo: "39741064001",
    AssessmentNumber: "AB009876457",
    Gender: "Female",
    DateOfAdm:"09/0/99",
    AdmissionClass: "Class One",
    DateOfBirth:"9/9/2024",
    Level: "Grade 4",
    UPI: "A00090090",
    PhoneNumber: "254909000999",
    StudentSchoolEmail: "Allanohn@example.com",
    ClassTeacher: "🧑‍⚕️ Mr Oduor Geofrey Onyango",
    ParentGuardianName: "ADARA MADoe",
    ParentGuardianPhoneNumber: "07999958",
    Siblings: "jane",
    FileUrl1: "./Pdf/slip 2023/Clement's leaving Cert.pdf",
    FileUrl2: "Result slip",
    FileUrl3: "All collected",
    FileUrl4: "./img/StsPic/abeka.jpg",

  },
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
function populateForm(selectedStudent) {
  if (selectedStudent) {
    document.querySelector('input[name="ClassIndex"]').value = selectedStudent.ClassIndex || '';
    document.querySelector('input[name="StudentFullName"]').value = selectedStudent.StudentFullName || '';
    document.querySelector('input[name="Admission No"]').value = selectedStudent.AdmissionNo || '';
    document.querySelector('input[name="EntryNo"]').value = selectedStudent.EntryNo || '';
    document.querySelector('select[name="Gender"]').value = selectedStudent.Gender || '';
    document.querySelector('input[name="DateOfAdm"]').value = selectedStudent.DateOfAdm || '';
    document.querySelector('input[name="DateOfBirth"]').value = selectedStudent.DateOfBirth || '';
    document.querySelector('input[name="Admission Class"]').value = selectedStudent.AdmissionClass || '';
    document.querySelector('input[name="Level"]').value = selectedStudent.Level || '';
    document.getElementById('Assessment Number').value = selectedStudent.AssessmentNumber || '';
    document.querySelector('input[name="U.P.I"]').value = selectedStudent.UPI || '';
    document.querySelector('input[type="tel"]').value = selectedStudent.PhoneNumber || '';
    document.querySelector('input[type="email"]').value = selectedStudent.StudentSchoolEmail || '';
    document.querySelector('select[name="🐏 Class Teacher"]').value = selectedStudent.ClassTeacher || '';
    document.querySelector('input[name="Parent/Guardian Name"]').value = selectedStudent.ParentGuardianName || '';
    document.querySelector('input[name="ParentGuardianPhoneNumber"]').value = selectedStudent.ParentGuardianPhoneNumber || '';
    document.querySelector('textarea[name="Siblings"]').value = selectedStudent.Siblings || '';

    // Disable form fields after populating with data
    disableFormFields();

    // Generate download links for PDFs
    for (let i = 1; i <= 3; i++) {
      const fileUrl = selectedStudent[`FileUrl${i}`];
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
    const learnerImageUrl = selectedStudent.FileUrl4;
    if (learnerImageUrl) {
      const img = document.createElement('img');
      img.src = learnerImageUrl;
      img.alt = `${selectedStudent.StudentFullName}'s Image`;
      learnerImageContainer.innerHTML = '';
      learnerImageContainer.appendChild(img);
      learnerImageContainer.style.display = 'block';
    }
  } else {
    // Clear form fields and download links
    clearFormFields();
  }
}

function clearFormFields() {
  const formInputs = document.querySelectorAll('input, select, textarea');
  formInputs.forEach(input => {
    input.value = '';
  });

  const downloadContainers = document.querySelectorAll('[id^="fileDownload"]');
  downloadContainers.forEach(container => {
    container.innerHTML = '';
    container.style.display = 'none';
  });

  const learnerImageContainer = document.getElementById('learnerImages');
  learnerImageContainer.innerHTML = '';
  learnerImageContainer.style.display = 'none';
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
    const year = defaultData.find(data => data.StudentFullName === name).Level;
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
        <option value="">Select Grade</option>
       
        ${Object.keys(years).map(year => `<option value="${year}">${year}</option>`).join('')}
      </select>
    </div>
    <div>
      <h3 for="studentNameSelect">Select a student:</h3>
      <select id="studentNameSelect" class="swal2-select" placeholder="Select learner">
        <option value="">Students</option>
        ${Object.entries(options).map(([index, option]) => `<option value="${index}">${option}</option>`).join('')}
      </select>
    </div>`;

  // Display the Swal pop-up
  Swal.fire({
    title: `${title} (${count})`,
    html: htmlContent,
    showCancelButton: true,
    allowOutsideClick: true, // Allow clicking outside the pop-up to close it
    draggable: true, // Make the pop-up draggable
    didOpen: () => {
      const studentSelect = document.getElementById('studentNameSelect');
      const yearSelect = document.getElementById('yearSelect');
      
      // Check if the previous year is set and select it
      if (prevYear) {
        yearSelect.value = prevYear;
      }

      studentSelect.addEventListener('change', function(event) {
        const selectedIndex = event.target.value;
        if (selectedIndex !== '') {
          const selectedStudent = filteredStudents[selectedIndex];
          populateForm(selectedStudent);
        }
      });

      yearSelect.addEventListener('change', function(event) {
        if (!yearSelectDisabled) {
          yearSelectDisabled = true; // Set the flag to true
          yearSelect.disabled = true; // Disable the select element
        }
        const selectedYear = event.target.value;
        filteredStudents = selectedYear ? defaultData.filter(student => student.Level === selectedYear) : defaultData;
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
        text: 'Please refine your search by typing the first thre letters for Surname',
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