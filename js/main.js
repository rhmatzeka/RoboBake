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
            document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form submit
    document.querySelector('form')?.addEventListener('submit', e => {
        e.preventDefault();
        alert('Order berhasil dikirim! Kami hubungi via WA. Terima kasih!');
        e.target.reset();
    });


    // Toast Order Notification
const toastElement = document.getElementById('orderToast');
const toastBody = document.getElementById('productName');
const toast = new bootstrap.Toast(toastElement);

document.querySelectorAll('.buy-now-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const productName = btn.getAttribute('data-product');
        toastBody.textContent = productName;
        toast.show();
        
        // Optional: tambah efek getar kecil pada tombol
        btn.classList.add('pulse-btn');
        setTimeout(() => btn.classList.remove('pulse-btn'), 1000);
    });
});
});