
    class TowTruckCarousel {
            constructor() {
                this.slidesContainer = document.getElementById('towtrk-slides');
                this.indicators = document.querySelectorAll('.towtrk-indicator');
                this.currentSlide = 0;
                this.isDesktop = window.innerWidth >= 768;
                this.totalSlides = this.isDesktop ? 2 : 6; // 2 slides for desktop, 6 for mobile
                
                this.init();
            }

            init() {
                this.bindEvents();
                this.updateCarousel();
                this.startAutoPlay();

                // Handle resize
                window.addEventListener('resize', () => {
                    const wasDesktop = this.isDesktop;
                    this.isDesktop = window.innerWidth >= 768;
                    
                    if (wasDesktop !== this.isDesktop) {
                        this.totalSlides = this.isDesktop ? 2 : 6;
                        this.currentSlide = 0;
                        this.updateCarousel();
                    }
                });
            }

            bindEvents() {
                this.indicators.forEach((indicator, index) => {
                    indicator.addEventListener('click', () => {
                        // Adjust index based on screen size
                        if (this.isDesktop && index >= 2) return; // Only first 2 indicators work on desktop
                        if (!this.isDesktop && index >= 6) return; // Only first 6 indicators work on mobile
                        
                        this.currentSlide = index;
                        this.updateCarousel();
                        this.resetAutoPlay();
                    });
                });
            }

            updateCarousel() {
                // Update indicators - show only relevant ones
                this.indicators.forEach((indicator, index) => {
                    if (this.isDesktop) {
                        // Desktop: show only first 2 indicators
                        indicator.style.display = index < 2 ? 'block' : 'none';
                        indicator.classList.toggle('active', index === this.currentSlide);
                    } else {
                        // Mobile: show all 6 indicators
                        indicator.style.display = index < 6 ? 'block' : 'none';
                        indicator.classList.toggle('active', index === this.currentSlide);
                    }
                });

                // Update slides position
                const translateX = -this.currentSlide * 100;
                this.slidesContainer.style.transform = `translateX(${translateX}%)`;
            }

            nextSlide() {
                this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
                this.updateCarousel();
            }

            startAutoPlay() {
                this.autoPlayInterval = setInterval(() => {
                    this.nextSlide();
                }, 4000);
            }

            resetAutoPlay() {
                clearInterval(this.autoPlayInterval);
                this.startAutoPlay();
            }
        }

        // Initialize carousel when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            new TowTruckCarousel();
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

        // Auto-update control buttons
        document.getElementById('testimonialsCarousel').addEventListener('slid.bs.carousel', function () {
            updateControlButtons();
        });

        // Add smooth transitions and hover effects
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