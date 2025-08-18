

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
        