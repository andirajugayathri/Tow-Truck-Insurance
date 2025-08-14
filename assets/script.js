// Why Tow Truck Insurance Is Essential In Australia
document.addEventListener('DOMContentLoaded', function() {
            let currentSlide = 0;
            const wrapper = document.getElementById('carouselWrapper');
            const indicators = document.querySelectorAll('.indicator-dot');
            
            // Check if elements exist
            if (!wrapper || indicators.length === 0) {
                console.error('Carousel elements not found');
                return;
            }
            
            function showSlide(index) {
                // Move the wrapper to show the correct slide (each slide is 25% width)
                const translateX = -index * 25; // Move by 25% for each position
                wrapper.style.transform = `translateX(${translateX}%)`;
                
                // Update indicators
                indicators.forEach(dot => {
                    if (dot) dot.classList.remove('active');
                });
                
                if (indicators[index]) {
                    indicators[index].classList.add('active');
                }
                
                currentSlide = index;
            }
            
            function moveLeft() {
                currentSlide = (currentSlide + 1) % 4; 
                showSlide(currentSlide);
            }
            setInterval(moveLeft, 3000);
            
            // Handle indicator clicks
            indicators.forEach((dot, index) => {
                if (dot) {
                    dot.addEventListener('click', () => {
                        showSlide(index);
                    });
                }
            });
            
            // Initialize first slide
            showSlide(0);
        });

// Testimonials
        const carousel = new bootstrap.Carousel(document.getElementById('testimonialsCarousel'), {
            interval: 5000,
            ride: 'carousel'
        });

        function nextSlide() {
            carousel.next();
            updateControlButtons();
        }

        function previousSlide() {
            carousel.prev();
            updateControlButtons();
        }

        function updateControlButtons() {
            const controls = document.querySelectorAll('.carousel-control-custom');
            controls.forEach(control => control.classList.remove('active'));
            
            setTimeout(() => {
                controls[1].classList.add('active');
            }, 100);
        }

        document.getElementById('testimonialsCarousel').addEventListener('slid.bs.carousel', function () {
            updateControlButtons();
        });
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.testimonial-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                    this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
                });
            });
        });
        