document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".image-track");
    let speed = 9; // Adjust scroll speed (lower = smoother)
    let position = 0;
    
    // Get all images in the track
    const images = Array.from(track.children);
    const totalImages = images.length;

    // Duplicate images for smooth looping
    images.forEach(img => {
        const clone = img.cloneNode(true);
        track.appendChild(clone);
    });

    // Function to animate scrolling
    function animate() {
        position -= speed;

        // If the first image has completely moved out of view, move it to the end of the track
        if (Math.abs(position) >= images[0].offsetWidth + 20) { // Adjust to image width + gap
            position = 0; // Reset position to avoid visual jumps
            track.appendChild(track.firstElementChild); // Move the first image to the end
        }

        track.style.transform = `translateX(${position}px)`; // Apply scroll

        requestAnimationFrame(animate); // Call the animation frame for continuous scrolling
    }

    animate(); // Start the animation loop

    // Pause scrolling on hover
    track.addEventListener("mouseenter", () => (speed = 0));
    track.addEventListener("mouseleave", () => (speed = 0.2)); // Adjust speed after hover
});
