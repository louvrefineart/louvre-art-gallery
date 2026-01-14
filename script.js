const artworks = [
    { id: 1, title: "Celestial Void", artist: "Julian Thorne", cat: "Abstract", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop" },
    { id: 2, title: "Neural Bloom", artist: "Zoe Bloom", cat: "Abstract", img: "https://tse3.mm.bing.net/th/id/OIP.ZMGUh6biUfMOgzHxOeLeaAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 3, title: "Echoes of Solitude", artist: "Leo Kael", cat: "Abstract", img: "https://tse4.mm.bing.net/th/id/OIP.jMK1qR86fSxrNlPAdns3twHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 4, title: "Prismatic Flow", artist: "Iris West", cat: "Abstract", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop" },
    { id: 5, title: "Deep Sea Mind", artist: "Odin Vance", cat: "Abstract", img: "https://th.bing.com/th/id/OIP.I5TEmFVanHAAMgenBxKeSgHaHa?w=197&h=197&c=7&r=0&o=7&pid=1.7&rm=3" },
    
    { id: 6, title: "The Silent Gaze", artist: "Sophia Mare", cat: "Portrait Art", img: "https://tse3.mm.bing.net/th/id/OIP.-GJVKeBWslDd8VYfa3JowQHaGL?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 7, title: "Velvet Secrets", artist: "Xavier Du", cat: "Portrait Art", img: "https://th.bing.com/th/id/OIP.b2f8g-wz8iMbmU0-nW9QBgHaO0?w=174&h=349&c=7&r=0&o=7&pid=1.7&rm=3" },
    { id: 8, title: "Golden Hour", artist: "Elena Vostok", cat: "Portrait Art", img: "https://external-preview.redd.it/ZfZzheBiAA_x2WxS9SNUUjz_2PueIwPl255r7wemdRs.jpg?width=1080&crop=smart&auto=webp&s=eb2908c608eb41842ccac72be7db6cada7929392" },
    { id: 9, title: "Nomad Man", artist: "Geoffrey Fleming", cat: "Portrait Art", img: "https://th.bing.com/th/id/OIP.fqYbhfwGkx2qIQOGxhzlEwHaHa?w=195&h=195&c=7&r=0&o=7&pid=1.7&rm=3" },
    { id: 10, title: "Forgotten Queen", artist: "Bella Hadid", cat: "Portrait Art", img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/532ac8fa-5d42-4cd0-823a-13c07e3a7350/dg7oek3-4343e25e-ad5f-4412-88db-366586e744e5.jpg/v1/fill/w_894,h_894,q_70,strp/beautiful_queen_portrait_1_by_badgercmyk_dg7oek3-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzUzMmFjOGZhLTVkNDItNGNkMC04MjNhLTEzYzA3ZTNhNzM1MFwvZGc3b2VrMy00MzQzZTI1ZS1hZDVmLTQ0MTItODhkYi0zNjY1ODZlNzQ0ZTUuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.NIWGX2Fs4diUkeJ3LEhE90o4S6vLO-CDcNa_9R3qrLE" },
    
    { id: 11, title: "Mist Over Mayon", artist: "Marcus Vane", cat: "Nature", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop" },
    { id: 12, title: "Sylvan Whispers", artist: "Oliver Stark", cat: "Nature", img: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=1200&auto=format&fit=crop" },
    { id: 13, title: "Azure Peak", artist: "Aris Kael", cat: "Nature", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop" },
    { id: 14, title: "Wild Bloom", artist: "Mina Sato", cat: "Nature", img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200&auto=format&fit=crop" },
    { id: 15, title: "Cascading Light", artist: "Samuel Lee", cat: "Nature", img: "https://images4.alphacoders.com/553/553753.jpg" }
];
    const artistsData = [
    { name: "Julian Thorne", role: "Abstract", bio: "Exploring chaos.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop" },
    { name: "Sophia Mare", role: "Portraitist", bio: "Coastline emotions.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop" },
    { name: "Marcus Vane", role: "Nature Painter", bio: "Landscape focus.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop" },
    { name: "Elena Vostok", role: "Multimedia", bio: "Digital light.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop" },
    { name: "Zoe Bloom", role: "Modern Abstract", bio: "Botanical fractals.", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=500&auto=format&fit=crop" },
    { name: "Xavier Du", role: "Urban Portrait", bio: "Neo-Tokyo docs.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop" },
    { name: "Oliver Stark", role: "Nature Photographer", bio: "Untouched wilds.", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=500&auto=format&fit=crop" },
    { name: "Iris West", role: "Color Field", bio: "Psychology of blue.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop" },
    { name: "Geoffrey Fleming", role: "Versatile Master", bio: " Legend.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop" },
    { name: "Aris Kael", role: "Landscape Art", bio: "Peak expressions.", img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=500&auto=format&fit=crop" },
    { name: "Odin Vance", role: "Minimalist", bio: "Geometric truths.", img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=500&auto=format&fit=crop" },
    { name: "Bella Hadid", role: "Ethereal Film", bio: "Soft focus arts.", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=500&auto=format&fit=crop" },
    { name: "Mina Sato", role: "Botanical Art", bio: "Floral structures.", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=500&auto=format&fit=crop" },
    { name: "Leo Kael", role: "Digital Abstract", bio: "Math based art.", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=500&auto=format&fit=crop" },
    { name: "Samuel Lee", role: "Earth Scapes", bio: "Nature photography.", img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=500&auto=format&fit=crop" }
];


const cursor = document.getElementById("cursor");
    const follower = document.getElementById("cursor-follower");
    
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
        if (cursor) cursor.style.display = 'none';
        if (follower) follower.style.display = 'none';
    } else {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            follower.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        });
    }

    const links = document.querySelectorAll('[data-link]');
    const pages = document.querySelectorAll('.page');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-link');

            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            pages.forEach(page => {
                page.classList.remove('active');
                if (page.id === targetId) {
                    page.classList.add('active');
                }
            });

            window.scrollTo({ top: 0, behavior: 'smooth' });

            if (typeof reveal === 'function') reveal();
        });
    });


const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeBtn.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

const galleryContainer = document.getElementById('gallery-container');
const searchInput = document.getElementById('search-input');

function renderGallery(items) {
    var container = document.getElementById('gallery-container');
    if (!container) return;
    var htmlContent = "";
    for (var i = 0; i < items.length; i++) {
        var art = items[i];
        htmlContent += '<div class="art-card reveal">' +
            '<div class="img-box" onclick="openLightbox(\'' + art.img + '\', \'' + art.title + '\')">' +
                '<img src="' + art.img + '" alt="' + art.title + '">' +
            '</div>' +
            '<div class="react-bar">' +
                '<button class="heart-btn" onclick="this.classList.toggle(\'liked\')" aria-label="Like" title="Like"><i class="fas fa-heart"></i></button>' +
                '<span class="gallery-cat-text">Collection: ' + art.cat + '</span>' +
            '</div>' +
            '<div style="padding: 0 1rem 1rem">' +
                '<h3>' + art.title + '</h3>' +
                '<p class="gallery-artist-name">' + art.artist + '</p>' +
            '</div>' +
        '</div>';
    }
    container.innerHTML = htmlContent;
    if (typeof initScrollReveal === "function") initScrollReveal();
}

function renderArtists() {
    var container = document.getElementById('artists-container');
    if (!container) return;
    var htmlContent = "";
    for (var i = 0; i < artistsData.length; i++) {
        var artist = artistsData[i];
        htmlContent += '<div class="artist-card reveal">' +
            '<div class="artist-img"><img src="' + artist.img + '" alt="' + artist.name + '"></div>' +
            '<div class="artist-info">' +
                '<span class="artist-role">' + artist.role + '</span>' +
                '<h3>' + artist.name + '</h3>' +
                '<p>' + artist.bio + '</p>' +
                '<button class="btn-outline" onclick="viewArtistPortfolio(\'' + artist.name + '\')">View Portfolio</button>' +
            '</div>' +
        '</div>';
    }
    container.innerHTML = htmlContent;
    if (typeof initScrollReveal === "function") initScrollReveal();
}

function viewArtistPortfolio(artistName) {
    const filteredArt = artworks.filter(art => art.artist === artistName);
    
    renderGallery(filteredArt);
    
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('collections').classList.add('active');
    
    document.getElementById('search-input').value = artistName;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = artworks.filter(a => 
        a.title.toLowerCase().includes(term) || a.artist.toLowerCase().includes(term)
    );
    renderGallery(filtered);
});

const slider = document.getElementById('hero-slider');
function initSlider() {
    const featured = artworks.slice(0, 5);
    slider.innerHTML = featured.map((art, i) => `
        <div class="slide ${i === 0 ? 'active' : ''}" style="background-image: url(${art.img})">
            <div class="slide-overlay"></div>
            <div class="slide-content">
                <h1>${art.title}</h1>
                <p>Curated Selection from ${art.artist}</p>
            </div>
        </div>
    `).join('');

    let current = 0;
    setInterval(() => {
        const slides = document.querySelectorAll('.slide');
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 5000);
}

function openLightbox(img, title) {
    const lb = document.getElementById('lightbox');
    document.getElementById('lb-img').src = img;
    document.getElementById('lb-caption').innerText = title;
    lb.style.display = 'flex';
}

document.querySelector('.close-lb').onclick = () => {
    document.getElementById('lightbox').style.display = 'none';
};

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
});

function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}


const loginModal = document.getElementById('login-modal');
const loginForm = document.getElementById('login-form');
const toastContainer = document.getElementById('toast-container');

function showNotification(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle" style="color: var(--accent)"></i> ${message}`;
    
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}

document.querySelectorAll('[data-link="login"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'flex';
    });
});

document.querySelector('.close-modal').onclick = () => {
    loginModal.style.display = 'none';
};

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    

    loginModal.style.display = 'none'; 
    showNotification(`Welcome back, ${email.split('@')[0]}! Successfully logged in.`);
});

window.onclick = (event) => {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
};

window.onload = () => {
    renderGallery(artworks); 
    initSlider();           
    initScrollReveal();     
    renderArtists(); 
    
    const yearSpan = document.querySelector('.footer-bottom p');
    if (yearSpan) {
        yearSpan.innerHTML = `&copy; ${new Date().getFullYear()} LOUVRE FINE ART GALLERY. ALL RIGHTS RESERVED.`;
    }
};  