// particles.js – SUPER RINGAN & TETAP MENGIKUT MOUSE
class LightParticles {
    constructor() {
        this.canvas = document.getElementById('particles-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: 0, y: 0 };
        this.count = window.innerWidth < 768 ? 25 : 45;

        this.resize();
        this.setupEvents();
        this.createParticles();
        this.loop();
    this.loop();
    }
    resize() {
        this.canvas.width = innerWidth;
        this.canvas.height = innerHeight;
    }
    setupEvents() {
        window.addEventListener('resize', () => this.resize());
        document.addEventListener('mousemove', e => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) cancelAnimationFrame(this.raf);
            else this.loop();
        });
    }
    createParticles() {
        for (let i = 0; i < this.count; i++) {
            this.particles.push({
                x: Math.random() * innerWidth,
                y: Math.random() * innerHeight,
                vx: 0, vy: 0,
                baseSpeed: Math.random() * 0.5 + 0.2,
                radius: Math.random() * 2 + 1,
                hue: Math.random() * 80 + 160
            });
        }
    }
    loop = () => {
        this.ctx.clearRect(0,0,innerWidth,innerHeight);
        this.particles.forEach(p => {
            let dx = this.mouse.x - p.x;
            let dy = this.mouse.y - p.y;
            let dist = Math.hypot(dx, dy);
            if (dist < 130) {
                let force = (130 - dist) / 130;
                p.vx += dx * force * 0.04;
                p.vy += dy * force * 0.04;
            }
            p.vx += (Math.random()-0.5)*p.baseSpeed;
            p.vy += (Math.random()-0.5)*p.baseSpeed;
            p.vx *= 0.96; p.vy *= 0.96;
            p.x += p.vx; p.y += p.vy;

            if (p.x < 0) p.x = innerWidth;
            if (p.x > innerWidth) p.x = 0;
            if (p.y < 0) p.y = innerHeight;
            if (p.y > innerHeight) p.y = 0;

            let grad = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius*5);
            grad.addColorStop(0, `hsla(${p.hue},100%,70%,0.9)`);
            grad.addColorStop(1, 'transparent');
            this.ctx.fillStyle = grad;
            this.ctx.fillRect(p.x-p.radius*5, p.y-p.radius*5, p.radius*10, p.radius*10);
        });
        this.raf = requestAnimationFrame(this.loop);
    }
}
new LightParticles();