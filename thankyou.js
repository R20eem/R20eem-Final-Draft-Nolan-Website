document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the submitted name from local storage
    var name = localStorage.getItem('submittedName');
    if (name) {
        // Check if the name exists
        // If the name exists, this would update the text content of the element with the ID 'thankYouHeader' to display a personalized thank you message
        document.getElementById('thankYouHeader').textContent = name + ', Thank You!';
    }
});