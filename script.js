// KATA-KATA ROMANTIS
const MESSAGES = [
    "i love you", "i miss you", "thinking of u", "my favorite person",
    "forever", "love u more", "always with you", "you are enough",
    "my safe place", "you mean everything", "always on my mind",
    "stay with me", "only you", "my heart is yours"
];

// NAMA FILE 15 FOTO (Placeholder)
const PHOTOS = [
    "foto/foto1.jpg", "foto/foto2.jpg", "foto/foto3.jpg", "foto/foto4.jpg", "foto/foto5.jpg",
    "foto/foto6.jpg", "foto/foto7.jpg", "foto/foto8.jpg", "foto/foto9.jpg", "foto/foto10.jpg",
    "foto/foto11.jpg", "foto/foto12.jpg", "foto/foto13.jpg", "foto/foto14.jpg", "foto/foto15.jpg"
];

/* ── WARNA GLOBAL (Glow Effect) ── */
const COLORS = [
    "#ffffff", "#ffe4ef", "#ffb6d5", "#ff6eb4",
    "#ff2d78", "#ff1744", "#00e5ff", "#d500f9"
];
let currentColor = 0;

function applyGlobalColor() {
    const color = COLORS[currentColor];
    // Convert hex to rgb for rgba usage (shadows/background glow)
    const r = parseInt(color.slice(1, 3), 16) || 255;
    const g = parseInt(color.slice(3, 5), 16) || 110;
    const b = parseInt(color.slice(5, 7), 16) || 180;

    // Apply color to floating text
    document.querySelectorAll('.text').forEach(el => {
        el.style.color = color;
        el.style.textShadow = `0 0 8px ${color}`;
    });

    // Apply color border/shadow to photos
    document.querySelectorAll('.photo').forEach(el => {
        el.style.borderColor = color + '55'; // add alpha
        el.style.boxShadow = `0 0 14px ${color}44`;
    });

    // Apply color to music button
    const btn = document.getElementById('musicBtn');
    btn.style.color = color;
    btn.style.borderColor = `rgba(${r},${g},${b},.45)`;
    btn.style.boxShadow = `0 0 12px rgba(${r},${g},${b},.28)`;

    // Apply background dynamic glow
    document.getElementById('bg').style.background =
        `radial-gradient(ellipse 70% 60% at 30% 40%, rgba(${r},${g},${b},.1), transparent),` +
        `radial-gradient(ellipse 50% 70% at 70% 60%, rgba(${r},${g},${b},.06), transparent), #050505`;
}

// Ubah warna setiap 3 detik
setInterval(() => {
    currentColor = (currentColor + 1) % COLORS.length;
    applyGlobalColor();
}, 3000);

/* ── INISIALISASI (Loading & Autoplay Musik) ── */
const audio = document.getElementById('bgAudio');
let isPlaying = false, isMuted = false;

// Mulai musik dari detik ke 5
if (audio.readyState >= 1) {
    audio.currentTime = 5;
} else {
    audio.addEventListener('loadedmetadata', () => {
        audio.currentTime = 5;
    });
}

// 4.4 Detik waktu tunggu animasi loading selesai
setTimeout(() => {
    const loadingEl = document.getElementById('loading');
    const sceneEl = document.getElementById('scene');

    // Sembunyikan layat loading
    loadingEl.classList.add('out');
    // Munculkan Scene 3D
    sceneEl.classList.add('visible');

    // Hapus loading dari DOM setelah transisi
    setTimeout(() => loadingEl.remove(), 1600);

    // Setel dan Mainkan Musik (Autoplay)
    audio.volume = 0.5;
    // Play with catch to handle browser autoplay policies
    audio.play().then(() => {
        isPlaying = true;
        document.getElementById('playIcon').className = 'fa-solid fa-pause';
    }).catch((err) => {
        console.log("Autoplay dicegah oleh browser. Pengguna harus mengklik tombol play.", err);
    });

    // Terapkan warna pertama kali
    applyGlobalColor();
}, 4400);

/* ── MEMBUAT HUJAN TEKS (60 Elemen Teks) ── */
for (let i = 0; i < 60; i++) {
    const el = document.createElement('div');
    el.className = 'text';
    el.innerText = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];

    // Kedalaman (Z-index/3D scale)
    const depth = Math.random();
    const isMobile = window.innerWidth < 768;
    const sz = (isMobile ? 6 : 9) + depth * (isMobile ? 12 : 18); // Ukuran font responsif

    el.style.cssText = `
        left: ${Math.random() * 105}vw;
        font-size: ${sz}px;
        opacity: ${0.1 + depth * 0.5};
        color: #ff6eb4;
        animation-duration: ${10 + Math.random() * 22}s;
        animation-delay: ${-Math.random() * 30}s;
        --tz: ${depth * 200 - 80}px;
        --ry: ${(Math.random() - .5) * 28}deg;
        filter: none;
    `;
    document.body.appendChild(el);
}

/* ── MEMBUAT HUJAN FOTO (15 Foto Sesuai Array) ── */
for (let i = 0; i < PHOTOS.length; i++) {
    const el = document.createElement('div');
    el.className = 'photo';

    const depth = Math.random();
    const isMobile = window.innerWidth < 768;
    const sz = (isMobile ? 40 : 65) + depth * (isMobile ? 40 : 65); // Ukuran kotak foto responsif

    el.style.cssText = `
        width: ${sz}px; height: ${sz}px;
        left: ${Math.random() * 100}vw;
        opacity: ${0.3 + depth * 0.5};
        animation-duration: ${16 + Math.random() * 22}s;
        animation-delay: ${-Math.random() * 25}s;
        --tz: ${depth * 160 - 60}px;
        --ry: ${(Math.random() - .5) * 30}deg;
    `;

    const img = document.createElement('img');
    img.src = PHOTOS[i];
    img.loading = 'lazy';
    img.alt = 'Memory';

    el.appendChild(img);
    document.body.appendChild(el);
}

/* ── MOUSE PARALLAX (Menggerakkan Scene mengikuti Mouse) ── */
let tx = 0, ty = 0;
document.addEventListener('mousemove', e => {
    // Kalkulasi pergeseran berdasarkan posisi kursor dari tengah layar
    tx = (e.clientX / innerWidth - .5) * 20;
    ty = (e.clientY / innerHeight - .5) * 12;
});

// Support untuk perangkat sentuh (Mobile) dan mencegah scroll
document.addEventListener('touchmove', e => {
    e.preventDefault(); // Mencegah native scrolling di mobile
    if (e.touches.length > 0) {
        tx = (e.touches[0].clientX / innerWidth - .5) * 20;
        ty = (e.touches[0].clientY / innerHeight - .5) * 12;
    }
}, { passive: false });

// Update animasi terus-menerus
(function loop() {
    const sc = document.getElementById('scene');
    if (sc) {
        sc.style.transform = `rotateY(${tx * .18}deg) rotateX(${-ty * .12}deg) translate(${tx * .4}px, ${ty * .25}px)`;
    }
    requestAnimationFrame(loop);
})();


/* ── INTERAKSI PANEL MUSIK ── */
let panelOpen = false;
const musicBtn = document.getElementById('musicBtn');
const musicPanel = document.getElementById('musicPanel');
const musicIcon = document.getElementById('musicIcon');

musicBtn.addEventListener('click', () => {
    panelOpen = !panelOpen;
    musicPanel.classList.toggle('open', panelOpen);
    musicIcon.className = panelOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-music';
});

// Tutup panel jika area luar diklik
document.addEventListener('click', e => {
    if (panelOpen && !musicBtn.contains(e.target) && !musicPanel.contains(e.target)) {
        panelOpen = false;
        musicPanel.classList.remove('open');
        musicIcon.className = 'fa-solid fa-music';
    }
});


/* ── KONTROL MUSIK (Play, Mute, Loop, Volume) ── */
const btnPlay = document.getElementById('btnPlay');
const playIcon = document.getElementById('playIcon');
const btnMute = document.getElementById('btnMute');
const muteIcon = document.getElementById('muteIcon');
const btnLoop = document.getElementById('btnLoop');
const volSlider = document.getElementById('volSlider');

btnPlay.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playIcon.className = 'fa-solid fa-play';
    } else {
        audio.play().catch(() => { });
        playIcon.className = 'fa-solid fa-pause';
    }
    isPlaying = !isPlaying;
});

btnMute.addEventListener('click', () => {
    isMuted = !isMuted;
    audio.muted = isMuted;
    muteIcon.className = isMuted ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high';
});

btnLoop.addEventListener('click', function () {
    audio.loop = !audio.loop;
    this.style.opacity = audio.loop ? '1' : '0.4';
});

volSlider.addEventListener('input', function () {
    audio.volume = this.value / 100;
    if (audio.volume > 0 && isMuted) {
        isMuted = false;
        audio.muted = false;
        muteIcon.className = 'fa-solid fa-volume-high';
    }
});

// Sync Play/Pause UI if triggered outside button
audio.addEventListener('play', () => {
    isPlaying = true;
    playIcon.className = 'fa-solid fa-pause';
});
audio.addEventListener('pause', () => {
    isPlaying = false;
    playIcon.className = 'fa-solid fa-play';
});

// Bypass Autoplay Policy: Putar musik saat pengguna melakukan klik dimanapun di layar
document.addEventListener('click', () => {
    if (!isPlaying) {
        audio.play().catch(() => { });
    }
}, { once: true });

