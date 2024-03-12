// Function to download the populated form data as a PDF
function downloadFormDataAsPDF() {
  // Get the form data
  const formData = new FormData(document.querySelector('form'));

  // Convert form data to an object
  const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  // Create a new jsPDF instance
  const doc = new jsPDF();

  // Define y coordinate for new lines
  let y = 10;

  // Add form data to PDF
  Object.entries(formDataObject).forEach(([key, value]) => {
    doc.text(20, y, `${key}: ${value}`);
    y += 10;
  });

  // Save the PDF
  doc.save('form_data.pdf');
}

// Event listener for the download PDF button
document.getElementById('downloadPDFButton').addEventListener('click', downloadFormDataAsPDF);

