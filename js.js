document.addEventListener('DOMContentLoaded', (event) => {
    // Banner auto slide
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'flex' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, 3000);

    // Form validation
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        let valid = true;

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        if (!name.value) {
            valid = false;
            alert('Name is required');
        }

        if (!email.value) {
            valid = false;
            alert('Email is required');
        }

        if (!message.value) {
            valid = false;
            alert('Message is required');
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});
