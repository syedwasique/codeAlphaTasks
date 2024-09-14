const images = ["img/img1.jpg", "img/image2.jpg", "img/img3.jpg", "img/img4.jpg"];
let currentIndex = 0;

function showImage(index) {
    document.getElementById('currentImage').src = images[index];
    currentIndex = index;
}

// Optional next/previous functionality
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}
