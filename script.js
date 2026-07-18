document.addEventListener("DOMContentLoaded", function () {
    // 1. Menghilangkan loading screen otomatis
    const loader = document.getElementById("loader");
    const app = document.getElementById("app");
    
    if (loader && app) {
        // Beri jeda sedikit agar loading screen terlihat sebentar
        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
                app.style.display = "block";
            }, 500);
        }, 1500);
    }

    // 2. Mengambil nama tamu dari link
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get('to');
    const guestElement = document.getElementById("guest-name");

    if (guestElement) {
        if (guestName) {
            guestElement.innerText = "Kepada Yth: " + decodeURIComponent(guestName);
        } else {
            guestElement.innerText = "Kepada Yth: Tamu Undangan";
        }
    }

    // 3. Fungsi Tombol Buka Undangan
    const btnOpen = document.getElementById("btn-open");
    if (btnOpen) {
        btnOpen.addEventListener("click", function() {
            // Aksi saat tombol ditekan
            alert("Selamat Datang! Undangan sedang dibuka...");
            // Di sini nanti kamu bisa menambahkan perintah untuk scroll ke bawah atau menampilkan isi undangan
            btnOpen.style.display = "none"; // Tombol akan hilang setelah diklik
        });
    }
});
