// Select all images on the page
const images = document.querySelectorAll('projectImage');

// Add hover effect to scale images
images.forEach((img) => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(2)';
        img.style.transition = 'transform 0.3s ease';
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});

