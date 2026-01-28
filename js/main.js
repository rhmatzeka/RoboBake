document.addEventListener("DOMContentLoaded", () => {
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        document.querySelector('.navbar').style.background = scrollY > 50 
            ? 'rgba(0,0,0,0.95)' : 'rgba(0,0,0,0.8)';
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Counter Animation untuk Statistics
    function countUp(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const increment = Math.ceil(target / 50);
        let current = 0;

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                if (current > target) current = target;
                element.textContent = current;
                requestAnimationFrame(updateCounter);
            }
        };
        updateCounter();
    }

    // Trigger counter when section is visible
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => {
                    if (!counter.classList.contains('started')) {
                        counter.classList.add('started');
                        countUp(counter);
                    }
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        observer.observe(statsSection);
    }

    // Toast Order Notification
    const toastElement = document.getElementById('orderToast');
    if (toastElement) {
        const toastBody = document.getElementById('productName');
        const toast = new bootstrap.Toast(toastElement);

        document.querySelectorAll('.buy-now-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const productName = btn.getAttribute('data-product');
                toastBody.textContent = productName;
                toast.show();
                
                btn.classList.add('pulse-btn');
                setTimeout(() => btn.classList.remove('pulse-btn'), 1000);
            });
        });
    }

    // Form Validation dan Submit
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Validasi form
            const formData = new FormData(contactForm);
            const nama = contactForm.querySelector('input[placeholder="Nama Lengkap"]').value;
            const email = contactForm.querySelector('input[placeholder="Email"]').value;
            const wa = contactForm.querySelector('input[placeholder="No. WhatsApp"]').value;
            const alamat = contactForm.querySelector('input[placeholder="Alamat"]').value;
            const pesan = contactForm.querySelector('textarea').value;

            if (!nama || !email || !wa || !alamat || !pesan) {
                alert('Semua field harus diisi!');
                return;
            }

            // Validasi email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Email tidak valid!');
                return;
            }

            // Validasi nomor WA (minimal 10 digit)
            const waRegex = /^[0-9]{10,}$/;
            if (!waRegex.test(wa.replace(/\D/g, ''))) {
                alert('Nomor WhatsApp tidak valid!');
                return;
            }

            // Show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'alert alert-success alert-dismissible fade show';
            successMsg.innerHTML = `
                <strong><i class="fas fa-check-circle"></i> Berhasil!</strong> 
                Order Anda telah dikirim. Kami akan hubungi via WhatsApp secepatnya.
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            `;
            contactForm.parentElement.insertBefore(successMsg, contactForm);

            // Reset form
            contactForm.reset();

            // Remove success message after 5 seconds
            setTimeout(() => successMsg.remove(), 5000);
        });
    }

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.product-card, .testimonial-card, .stat-card');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('scroll-reveal');
                    }, index * 100);
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => revealObserver.observe(el));
    }
});