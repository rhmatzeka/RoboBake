// particles.js – SUPER RINGAN & TETAP MENGIKUT MOUSE dengan Bug Fixes
class LightParticles {
    constructor() {
        this.canvas = document.getElementById('particles-canvas');
        if (!this.canvas) return; // Safety check
        
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: 0, y: 0 };
        this.count = window.innerWidth < 768 ? 25 : 45;
        this.raf = null;

        this.resize();
        this.setupEvents();
        this.createParticles();
        this.loop();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    setupEvents() {
        window.addEventListener('resize', () => this.resize());
        
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                if (this.raf) cancelAnimationFrame(this.raf);
            } else {
                this.loop();
            }
        });

        // Touch support untuk mobile
        document.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                this.mouse.x = e.touches[0].clientX;
                this.mouse.y = e.touches[0].clientY;
            }
        });
    }

    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.count; i++) {
            this.particles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: 0, 
                vy: 0,
                baseSpeed: Math.random() * 0.5 + 0.2,
                radius: Math.random() * 2 + 1,
                hue: Math.random() * 80 + 160
            });
        }
    }

    loop = () => {
        // Clear canvas
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        this.particles.forEach(p => {
            // Calculate distance to mouse
            const dx = this.mouse.x - p.x;
            const dy = this.mouse.y - p.y;
            const dist = Math.hypot(dx, dy);

            // Repel dari mouse dengan range 130px
            if (dist < 130) {
                const force = (130 - dist) / 130;
                p.vx += dx * force * 0.04;
                p.vy += dy * force * 0.04;
            }

            // Random walk
            p.vx += (Math.random() - 0.5) * p.baseSpeed;
            p.vy += (Math.random() - 0.5) * p.baseSpeed;

            // Damping
            p.vx *= 0.96;
            p.vy *= 0.96;

            // Update position
            p.x += p.vx;
            p.y += p.vy;

            // Wrap around screen
            if (p.x < 0) p.x = window.innerWidth;
            if (p.x > window.innerWidth) p.x = 0;
            if (p.y < 0) p.y = window.innerHeight;
            if (p.y > window.innerHeight) p.y = 0;

            // Draw particle dengan gradient
            const grad = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 5);
            grad.addColorStop(0, `hsla(${p.hue},100%,70%,0.9)`);
            grad.addColorStop(1, 'transparent');

            this.ctx.fillStyle = grad;
            this.ctx.fillRect(
                p.x - p.radius * 5, 
                p.y - p.radius * 5, 
                p.radius * 10, 
                p.radius * 10
            );
        });

        this.raf = requestAnimationFrame(this.loop);
    }

    destroy() {
        if (this.raf) cancelAnimationFrame(this.raf);
    }
}

// Initialize particles
const particles = new LightParticles();

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    particles.destroy();
});