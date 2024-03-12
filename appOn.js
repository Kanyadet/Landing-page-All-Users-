const scriptURL = 'https://script.google.com/macros/s/AKfycbzbEZSEARSZNsV6mIihKO5t6Ld9Jo9DTpEqigFWQbms_HptG4pVKrzRk8w48pmV5s4s3g/exec';
const form = document.forms['submit-to-google-sheet'];

const passwordRedirectMap = {
    '887314': './MR ODUOR PFD/ProDo.html', //MR ODUOR GREDENTIALS
    'pass2': './redirect2.html',
    'password3': './redirect3.html',
    // Add more mappings as needed
};

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Prompt for password
    const { value: password } = await Swal.fire({
        title: 'Teacher Tsc No',
        input: 'password',
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return 'Password is required!';
            } else {
                // Check if the entered password is in the passwordRedirectMap
                if (!passwordRedirectMap.hasOwnProperty(value)) {
                    Swal.fire({
                        title: 'Incorrect Tsc No',
                        text: 'Please enter valid Tsc No for the Teacher.',
                        icon: 'warning',
                    });
                    return ''; // Reject the input
                }
            }
        },
    });

    if (password) {
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
                    setTimeout(() => {
                        Swal.close();
                        window.location.href = passwordRedirectMap[password];
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
    }
});
