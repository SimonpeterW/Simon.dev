 
 
 // Mobile menu toggle
        const mobileMenu = document.getElementById('mobileMenu');
        const navLinks = document.getElementById('navLinks');

        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                // Close mobile menu after clicking
                navLinks.classList.remove('active');
            });
        });

        // Header background on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = '#fff';
                header.style.backdropFilter = 'none';
            }
        });

        // Form submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            // Simulate form submission
            alert('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.service-card, .project-card, .stat').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        //  click handlers for project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', () => {
                // Projects are still in progress. will be hosted soon 
                alert('Opening project details... Project in Progress- Stay Tuned');
            });
        });

        // typing effect to hero title
        const heroTitle = document.querySelector('.hero h1');
        const text = heroTitle.textContent;
        heroTitle.textContent = '';

        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(()=>{
                    heroTitle.textContent = '';
                    i = 0;
                    typeWriter();
                }, 3000);
            }
            
        };

        // Start typing effect after a short delay
        
            setTimeout(typeWriter, 200);

    
        

        // parallax effect to hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        });

        //  hover effects to service cards
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });


        //Media Player

       function playAudio() {
                const audio = document.getElementById('audioPlayer');
                const btn = document.getElementById('audioBtn');
                if (audio.paused) {
                    audio.play();
                    btn.textContent = '⏸️ Pause Audio';
                } else {
                    audio.pause();
                    btn.textContent = '🎵 Play Audio';
                }
            }

            function toggleVideo() {
                const video = document.getElementById('videoPlayer');
                const btn = document.getElementById('videoBtn');
                if (video.style.display === 'none') {
                    video.style.display = 'block';
                    video.play();
                    btn.textContent = '❌ Hide Video';
                } else {
                    video.style.display = 'none';
                    video.pause();
                    btn.textContent = '🎬 Play Video';
                }
            }

            function rate(type, stars) {
                const ratingEl = document.getElementById(type + 'Rating');
                ratingEl.textContent = '★'.repeat(stars) + '☆'.repeat(5 - stars);

                // Highlight selected stars
                const component = ratingEl.parentElement;
                const starEls = component.querySelectorAll('span:not(:last-child)');
                starEls.forEach((star, i) => {
                    star.style.opacity = i < stars ? '1' : '0.3';
                });
            }
