const scriptURL = 'https://script.google.com/macros/s/AKfycbzbEZSEARSZNsV6mIihKO5t6Ld9Jo9DTpEqigFWQbms_HptG4pVKrzRk8w48pmV5s4s3g/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    Swal.fire({
        title: 'Processing...',
        text: 'Please wait',
        icon: 'info',
        showConfirmButton: false,
        allowOutsideClick: false,
    });

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) => {
            Swal.close();
            if (response.status === 200) {
                Swal.fire({
                    title: 'Access Granted!',
                    text: 'Welcome!',
                    icon: 'success',
                });
                form.reset();
                // Redirect to the appropriate page after a successful submission
                // You may want to replace 'passwordRedirectMap[password]' with the desired URL.
                setTimeout(() => {
                    Swal.close();
                    // Replace the following line with the desired redirection logic
                    window.location.href = './AllUsersLandingPage/AllUsersLandingPage.html';
                }, 2000);
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Submission Failed',
                    icon: 'error',
                });
            }
        })
        .catch((error) => {
            console.error('Error!', error.message);
            Swal.close();
            Swal.fire({
                title: 'Ooops!!',
                text: 'Connect to the internet ',
                icon: 'error',
            });
        });
});
