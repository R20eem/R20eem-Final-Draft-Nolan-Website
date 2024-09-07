// Student ID 201691778, Reem Almutairi
// Function that will take the user to thankyou.html after submmiting the form
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('subscribe-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // this willl stop the form from submitting immediately

        // To apply a confirmation message when submmiting the form
        if (confirm('Are you sure you want to subscribe to the newsletter?')) {
            window.location.href = 'thankyou.html'; // Redirect to thank you page
        } else {
            alert('You are not subscribe to our newsletter.');
        }
    });
})