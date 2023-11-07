  const slider = document.querySelector('.slider');
        let currentIndex = 0;
        const totalSlides = 3; // Assuming 3 slides in this example

        function showSlide(index) {
            slider.style.transform = `translateX(-${index * 100}%)`;
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            showSlide(currentIndex);
        }

        function startSlider() {
            setInterval(nextSlide, 3000); // Change slide every 3 seconds (3000 milliseconds)
        }

        startSlider(); // Start the auto slider