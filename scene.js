// Student ID 201691778, Reem Almutairi
// this is a function for scene.js and is sat to make images display as a slide
var currentImageIndex = 0; // Initialize the index of the current image
// these are the links and title of the images
var images = [
    { src: "https://api.time.com/wp-content/uploads/2014/10/interstellar-07.jpg", title: "Interstellar" },
    { src: "https://cdn.moviestillsdb.com/i/500x/jmkwsfs9/inception-lg.jpg", title: "Inception" },
    { src: "https://th.bing.com/th/id/R.63a2d6d81d27b165319f174ef3628ef9?rik=yAZY%2bvFbpueYhQ&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f9400000%2fThe-Joker-Behind-Scenes-the-dark-knight-9423065-2560-1707.jpg&ehk=hKePn4a9ZfgKbsICNbPcKnAUgPOnFWX%2baNLoeaP7zgk%3d&risl=&pid=ImgRaw&r=0", title: "The Dark Knight - Joker Behind the Scenes" },
    { src: "https://th.bing.com/th/id/R.1b45356778daf37c817f297214ce7f0b?rik=cyKeqQsKv0Kp5g&pid=ImgRaw&r=0", title: "The Prestige" },
    { src: "https://th.bing.com/th/id/OIP._zgKC3UL8HUH-8FA5bf4oQHaEK?pid=ImgDet&rs=1", title: "Memento" },
    { src: "https://cdn.moviestillsdb.com/i/500x/1iahb4g2/batman-begins-lg.jpg", title: "Batman Begins" }
];
// Function to navigate through the gallery of images
function navigateGallery(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    var img = images[currentImageIndex];
    // Update the src, alt, and text content of the displayed image and title
    document.getElementById('currentImage').src = img.src;
    document.getElementById('currentImage').alt = img.title;
    document.getElementById('imageName').textContent = img.title;
    document.getElementById('image-gallery').style.display = 'block'; // to ensure the gallery is visible
}
// Function to toggle the visibility of content based on its ID
function toggleContent(id) {
    var content = document.getElementById(id);
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}
// Initialize the gallery to display the first image when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    navigateGallery(0); 
});
