// Student ID 201691778, Reem Almutairi -->
// function that display the user score
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the user's score from local storage
    var score = localStorage.getItem('userScore');
    // Update the text content of the element with the ID 'userScore' to display the score
    document.getElementById('userScore').textContent = score;
});