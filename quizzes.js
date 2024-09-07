// Student ID 201691778, Reem Almutairi
// this function is set to calculate the score of the quiz
function calculateScore() {
    var allAnswered = true; // flag to check if all questions have been answered
    var score = 0;
    var correctAnswers = {
        question1: 'Totem',
        question2: 'Magic',
        question4: 'TARS',
        question5: 'Harvey Dent',
        question6: 'Memento',
        question7: 'Dunkirk',
        question8: 'Inception',
        question9: 'Inverted',
        question10: 'Jeremy Theobald'
    };

    Object.keys(correctAnswers).forEach(function(question) {
        var radios = document.getElementsByName(question);
        var answered = false; // flag to check if current question has been answered

        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                answered = true; // current question has been answered
                if (radios[i].value === correctAnswers[question]) {
                    score++; // increment score if correct
                }
                break; // break the loop since question is answered
            }
        }

        if (!answered) {
            allAnswered = false; // this to set allAnswered to false if any question is unanswered
        }
    });

    if (!allAnswered) {
        alert('Please answer all questions before submitting the quiz.'); // alert if not all questions are answered
        return false; // prevent form submission
    }

    // proceed if all questions are answered
    localStorage.setItem('userScore', score); // to save score to localStorage
    alert('Are you sure you want to submmit?'); 
    window.location.href = 'score.html'; // redirect to the score page
    return false; // prevent default form submission
}
