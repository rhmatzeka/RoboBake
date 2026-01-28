# 🤖 RoboBake - Toko Roti Futuristik

![RoboBake](assets/images/roti_1.jpg)

## 📋 Daftar Isi
- [Tentang Proyek](#tentang-proyek)
- [Fitur Utama](#fitur-utama)
- [Teknologi](#teknologi)
- [Instalasi](#instalasi)
- [Penggunaan](#penggunaan)
- [Struktur File](#struktur-file)
- [Tim Developer](#tim-developer)
- [Lisensi](#lisensi)

## 🎯 Tentang Proyek

**RoboBake** adalah toko roti pertama di Indonesia yang menggunakan teknologi **Robot Baker Otomatis** untuk menghasilkan roti berkualitas tinggi dengan presisi sempurna. Setiap roti dibuat dengan higienis 100%, selalu fresh, dan tersedia 24 jam sehari.

Website ini dirancang dengan konsep futuristik menggunakan:
- 🌌 **Neon Cyberpunk Theme** - Desain modern dengan efek neon
- 🎨 **Glassmorphism Design** - Kaca transparan dengan blur effect
- ✨ **Smooth Animations** - Animasi halus yang memukau
- 📱 **Fully Responsive** - Kompatibel dengan semua perangkat

## ⭐ Fitur Utama

### 1. **Hero Section** dengan Typing Effect
- Animasi typing text yang smooth
- Call-to-action button dengan efek pulse
- Responsive image dengan float animation

### 2. **About Section** - Robot Baker Info
- Deskripsi lengkap tentang teknologi RoboBake
- Showcase tim developer (3 Chef Robot)
- 3 Kartu highlight dengan efek sweep light

### 3. **Produk Showcase**
- Grid responsif dengan 12 produk roti
- Hover effect dengan glow dan zoom
- Tombol "Beli Sekarang" dengan toast notification

### 4. **Statistics Section** 
- Counter animasi otomatis saat scroll
- 4 statistik: Pelanggan Puas, Jenis Roti, Kepuasan %, Jam Operasional
- Efek glow hover yang menarik

### 5. **Testimonial Section**
- 3 Testimoni pelanggan dengan rating bintang
- Hover animation dengan transform
- Responsive layout

### 6. **Contact Form**
- Validasi form yang komprehensif
- Email & WhatsApp validation
- Success notification dengan alert
- Smooth form experience

### 7. **Interactive Particles**
- Background particles animation
- Mengikuti mouse movement
- Fully optimized untuk performa

## 🛠️ Teknologi

### Frontend Stack
- **HTML5** - Semantic markup
- **CSS3** - Modern styling dengan animations
- **JavaScript (ES6+)** - Interactive features
- **Bootstrap 5** - Responsive framework
- **Font Awesome** - Icons library
- **Google Fonts** - Orbitron & Rajdhani fonts

### Libraries & CDN
```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@500;700">

<!-- Font Awesome -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

## 📦 Instalasi

### Persyaratan
- Web Browser modern (Chrome, Firefox, Safari, Edge)
- Text Editor (VS Code, Sublime, dll)
- Git (optional)

### Langkah-Langkah

1. **Clone Repository**
   ```bash
   git clone https://github.com/rhmatzeka/RoboBake.git
   cd RoboBake
   ```

2. **Buka dengan Live Server**
   - Jika menggunakan VS Code:
     - Install extension "Live Server"
     - Right-click pada `index.html` → "Open with Live Server"
   
   - Atau akses langsung di browser:
     ```
     file:///path/to/RoboBake/index.html
     ```

3. **Setup Gambar Produk**
   - Pastikan folder `assets/images/` memiliki gambar dengan nama:
     - `roti_1.jpg` hingga `roti_6.jpg` (produk showcase)
     - `foto_kelompok1.png`, `foto_kelompok2.png`, `foto_kelompok3.png` (tim)
     - `ikon.jpeg` (favicon)

## 🚀 Penggunaan

### Menjalankan Website
```bash
# Menggunakan Python (jika terinstall)
python -m http.server 8000

# Atau menggunakan Node.js
npx http-server
```

Akses di `http://localhost:8000`

### Menambahkan Produk Baru
1. Edit bagian **Products Section** di `index.html`
2. Duplicate kartu product:
   ```html
   <div class="col-lg-4 col-md-6">
       <div class="product-card glow-hover sweep-light text-center">
           <div class="product-img-wrapper">
               <img src="assets/images/roti_X.jpg" class="product-img" alt="Roti">
           </div>
           <div class="product-body">
               <h5 class="text-white fw-bold mt-3">Nama Produk</h5>
               <p class="price fw-bold fs-3 text-cyan">Harga</p>
               <button class="btn btn-outline-cyan w-100 buy-now-btn" 
                   data-product="Nama Produk">
                   Beli Sekarang
               </button>
           </div>
       </div>
   </div>
   ```

### Mengubah Konten
- **Warna Neon**: Edit di `css/style.css` (`#00ffff`, `#ff00ff`)
- **Text & Copy**: Edit langsung di `index.html`
- **Animasi Speed**: Ubah nilai `duration` di CSS keyframes
- **Kontak WhatsApp**: Ubah nomor di link `href="https://wa.me/6289514509392"`

## 📁 Struktur File

```
RoboBake/
│
├── index.html          # Main HTML file
├── README.md           # Dokumentasi proyek
├── ikon.jpeg           # Favicon website
│
├── css/
│   └── style.css       # Styling & animations
│
├── js/
│   ├── main.js         # Main JavaScript logic
│   └── particles.js    # Interactive particles background
│
└── assets/
    └── images/
        ├── roti_1.jpg
        ├── roti_2.jpg
        ├── roti_3.jpg
        ├── roti_4.jpg
        ├── roti_5.jpg
        ├── roti_6.jpg
        ├── foto_kelompok1.png
        ├── foto_kelompok2.png
        ├── foto_kelompok3.png
```

## 🎨 Customization Guide

### Mengubah Warna Tema
Edit di `css/style.css`:
```css
/* Cyan Color */
--cyan: #00ffff;

/* Magenta Color */
--magenta: #ff00ff;

/* Green Color */
--green: #00ff88;
```

### Mengubah Font
Ubah di `index.html` (Google Fonts link):
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT">
```

### Mengaktifkan/Menonaktifkan Animasi
- Typing Effect: Comment/uncomment di `css/style.css` - `.typing-effect`
- Particles: Comment/uncomment di `index.html` - `<script src="js/particles.js"></script>`
- Counter: Comment/uncomment di `js/main.js` - Counter Animation section

## 🤝 Tim Developer

Proyek RoboBake dikembangkan oleh tim profesional dari **Universitas Pamulang**:

| Nama | Role | Spesialisasi |
|------|------|--------------|
| 👨‍💻 Panji Uyu | Frontend Lead | UI/UX & Animation |
| 👨‍💻 Rahmat Eka | Full Stack | Backend & Database |
| 👩‍💻 Astrid Salwa | Designer | Branding & Visual |

## 📞 Kontak & Support

- **WhatsApp**: [089514509392](https://wa.me/6289514509392)
- **Email**: robobake@university.com
- **Website**: www.robobake.com
- **Instagram**: @RoboBake_Official

## 🐛 Bug Report & Feature Request

Jika menemukan bug atau ingin suggest fitur baru:
1. Buka issue di GitHub
2. Jelaskan deskripsi detail
3. Screenshot jika memungkinkan
4. Tunggu tim untuk response

## ✨ Features Improvements (v2.0 Roadmap)

- ✅ Statistics dengan counter animasi
- ✅ Testimonial section
- ✅ Form validation komprehensif
- ✅ Smooth scroll reveal
- 🔄 Dark/Light theme toggle
- 🔄 Multi-language support (ID, EN)
- 🔄 Payment integration (Midtrans, Stripe)
- 🔄 Admin dashboard
- 🔄 Real-time order tracking
- 🔄 Mobile app (React Native)

## 📄 Lisensi

Proyek ini dilindungi di bawah lisensi **MIT License**. Silakan gunakan dan modifikasi sesuai kebutuhan Anda.

```
MIT License

Copyright (c) 2025 RoboBake Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

## 🙏 Terima Kasih

Terima kasih telah menggunakan RoboBake! 🎉

Kami terus berinovasi untuk memberikan pengalaman terbaik.

---

**Last Updated**: January 2025  
**Version**: 2.0  
**Status**: ✅ Production Ready

