document.addEventListener("DOMContentLoaded", function () {
    // Menghilangkan loading screen setelah halaman siap
    const loader = document.getElementById("loader");
    const app = document.getElementById("app");
    
    if (loader && app) {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
            app.style.display = "block";
        }, 500);
    }

    // Mengambil nama tamu dari link (?to=Nama Tuan)
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
});
