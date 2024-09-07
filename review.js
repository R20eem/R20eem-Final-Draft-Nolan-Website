// Student ID 201691778, Reem Almutairi
// the javascript should save the user's data
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('reviewForm');
    const storageKey = 'reviewFormData';
// Function to save form data to local storage
    function saveFormData() {
        const formData = {
            name: form.name.value,
            email: form.email.value,
            password: form.password.value,
            age: form.age.value,
            score: form.score.value,
            newsletter: form.newsletter.checked,
            privacy: form.privacy.checked,
            review: form.review.value
        };
        // Store the form data in local storage after converting it to a JSON string
        try {
            localStorage.setItem(storageKey, JSON.stringify(formData));
        } catch (error) {
            console.error('Failed to save form data to local storage:', error);
        }
    }
    // Function to load form data from local storage and populate the form fields
    function loadFormData() {
        try {
            const savedData = JSON.parse(localStorage.getItem(storageKey));
            if (savedData) {
                // fill form fields with saved data if it exists
                form.name.value = savedData.name;
                form.email.value = savedData.email;
                form.password.value = savedData.password;
                form.age.value = savedData.age;
                form.score.value = savedData.score;
                form.newsletter.checked = savedData.newsletter;
                form.privacy.checked = savedData.privacy;
                form.review.value = savedData.review;
            }
        } catch (error) {
            console.error('Failed to load form data from local storage:', error);
        }
    }
    // Function to handle form submission
    function submitForm() {
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }
        // Check if the privacy policy checkbox is checked
        if (!form.privacy.checked) {
            alert('Please agree to the privacy policy before submitting.');
            return;
        }
        // Confirm submission with user
        if (confirm('Are you sure you want to submit this?')) {
            try {
                // Store submitted name in local storage
                localStorage.setItem('submittedName', form.name.value);
                localStorage.removeItem(storageKey);
                window.location.href = 'thankyou.html'; // Redirect to thank you page
            } catch (error) {
                console.error('Failed during form submission:', error);
            }
        }
    }
    // Event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        submitForm();
    });
    form.addEventListener('change', saveFormData);
    loadFormData();
});

