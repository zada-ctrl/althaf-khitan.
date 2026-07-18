document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    const app = document.getElementById("app");
    const undanganLengkap = document.getElementById("undangan-lengkap");
    const btnOpen = document.getElementById("btn-open");

    // Menghilangkan loading
    setTimeout(() => {
        loader.style.display = "none";
        app.style.display = "block";
    }, 1500);

    // Menampilkan isi undangan saat tombol diklik
    if (btnOpen) {
        btnOpen.addEventListener("click", function() {
            app.style.display = "none"; // Sembunyikan halaman welcome
            undanganLengkap.style.display = "block"; // Tampilkan isi undangan
        });
    }
});
