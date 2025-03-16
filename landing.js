
document.addEventListener("DOMContentLoaded", function () {
    // Initialize Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyBqZv6IcP0dsCIZLADu2LMalMBA66Q1sCQ",
        authDomain: "writerscape-3855a.firebaseapp.com",
        projectId: "writerscape-3855a",
        storageBucket: "writerscape-3855a.appspot.com",
        messagingSenderId: "377436644028",
        appId: "1:377436644028:web:ffc3d2841055b470bda6b9",
        measurementId: "G-8STT58NQ0Q"
    };

    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    auth.onAuthStateChanged(user => {
        if (user && (user.emailVerified || user.providerData.some(p => p.providerId === 'google.com'))) {
            window.location.href = 'index.html';
        }
    });

    // Check if continue button exists before adding event listener
    const continueBtn = document.getElementById('continueBtn');
    if (continueBtn) {
        continueBtn.addEventListener('click', () => {
            const authOptions = document.getElementById('authOptions');
            authOptions.style.display = 'flex';
            gsap.fromTo(authOptions, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
        });
    }

    // Initialize Vanta.js Waves Effect
    VANTA.WAVES({
        el: "#my-background",
        backgroundColor: 0x0d1117, // Dark background
        color: 0x007bff, // Wave color (blue)
        shininess: 50, // Reflective effect
        waveHeight: 20, // Height of waves
        waveSpeed: 0.7, // Speed of waves
        zoom: 1 // Zoom level
    });
});

document.addEventListener("DOMContentLoaded", () => {
    gsap.from("h1", { opacity: 0, y: -50, duration: 1, ease: "power2.out" });
    gsap.from("p", { opacity: 0, x: -50, duration: 1, delay: 0.5, ease: "power2.out" });
    gsap.from(".buttons", { opacity: 0, y: 50, duration: 1, delay: 1, ease: "power2.out", stagger: 0.3 });
    gsap.from("footer", { opacity: 0, y: 30, duration: 1, delay: 1.5, ease: "power2.out" });
});
