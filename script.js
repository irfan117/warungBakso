// Fungsi untuk pesan via WhatsApp
function orderWA(menu) {
    let phoneNumber = "6281230705847";
    let message = `Mang, saya ingin memesan ${menu}.`;
    let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Fungsi untuk tombol chat melayang
window.addEventListener("scroll", function() {
    let chatButton = document.getElementById("chatButton");
    if (window.scrollY > 300) {
        chatButton.classList.add("show");
    } else {
        chatButton.classList.remove("show");
    }
});

function chatWA() {
    let phoneNumber = "6282115335342";
    let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Halo, saya ingin buat website.")}`;
    window.open(url, '_blank');
}
