// Student ID 201691778, Reem Almutairi
// For nolan-biography.html page, when clicking on the heading it should display the main content
function toggleContent(id) {
    var content = document.getElementById(id);
    setTimeout(function() {
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    }, 200); // Delay in milliseconds (200 ms = 0.2 seconds)
}