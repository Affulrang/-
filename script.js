document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.image-slider');
    
    sliders.forEach(slider => {
        const images = slider.querySelectorAll('img');
        const prevBtn = slider.querySelector('.prev-btn');
        const nextBtn = slider.querySelector('.next-btn');
        let currentIndex = 0;
        
        function showImage(index) {
            images.forEach(img => img.classList.remove('active'));
            images[index].classList.add('active');
        }
        
        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }
        
        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }
        
        prevBtn.addEventListener('click', prevImage);
        nextBtn.addEventListener('click', nextImage);
    });

    // Плавный скролл к секции скачивания
    const landingBtn = document.querySelector('.landing-download-btn');
    const downloadSection = document.getElementById('download-section');
    const header = document.querySelector('header');

    if (landingBtn && downloadSection && header) {
        landingBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const headerHeight = header.offsetHeight;
            const sectionTop = downloadSection.getBoundingClientRect().top + window.pageYOffset;
            const targetPosition = sectionTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    }
}); 