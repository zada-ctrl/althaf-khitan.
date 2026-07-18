document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    const app = document.getElementById("app");
    const undanganLengkap = document.getElementById("undangan-lengkap");
    const btnOpen = document.getElementById("btn-open");

    // Efek loading screen hilang
    if (loader && app) {
        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
                app.style.style.display = "block";
                app.style.display = "block";
            }, 500);
        }, 1000);
    }

    // Tangkap nama tamu dari url ?to=Nama
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get('to');
    const guestElement = document.getElementById("guest-name");
    if (guestElement) {
        if (guestName) {
            guestElement.innerText = decodeURIComponent(guestName);
        } else {
            guestElement.innerText = "Tamu Undangan";
        }
    }

    // Fungsi klik tombol buka undangan
    if (btnOpen && app && undanganLengkap) {
        btnOpen.addEventListener("click", function() {
            app.style.display = "none";
            undanganLengkap.style.display = "block";
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
