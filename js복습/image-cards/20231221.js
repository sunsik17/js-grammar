let currentIndex = 0;
const totalSlides = document.querySelectorAll('.carousel-image').length;
const imageContainer = document.getElementById('image-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function showSlide(index) {
    if (index < 0) {
    currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
    currentIndex = 0;
    } else {
    currentIndex = index;
    }

    const translateValue = -currentIndex * 300; // 이미지의 너비를 기준으로 설정 (300px)
    imageContainer.style.transform = `translateX(${translateValue}px)`;
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}