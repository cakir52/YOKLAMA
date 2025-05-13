
const participants = ['EMİRHAN TİRYAKİ', 'UMUT BUĞRA TÜRK', 'AHMET KEMAL ÖZDEMİR', 'MEHMET HİLMİ AYDOĞAN', 'AHMED ARİF KÜÇÜK', 'EMİRHAN GÖMEÇ', 'ABDULLAH FARUK ÖZSOY', 'MEHMETHAN ÖZCAN', 'BUĞRAHAN YILMAZ', 'MUSTAFA PARLAK', 'YASİN TALHA GÖMEÇ', 'AHMET HAKAN SARICA', 'AHMET HİLMİ YUMRUTAŞ', 'YUSUF EMİN AYDIN'];

function normalizeId(name) {
    return name.toLowerCase().replace(/ /g, "-");
}

function submitAttendance() {
    const absent = [];
    participants.forEach(name => {
        const checkbox = document.getElementById(normalizeId(name));
        if (!checkbox.checked) absent.push(name);
    });

    const formData = new FormData();
    formData.append("entry.1447778846", absent.join(", "));

    fetch("https://docs.google.com/forms/d/e/1FAIpQLSfOr1JtxOBYCNduYv9OVIK8qr9bMDAPX8ozsfqJUpAYXH7VBA/formResponse", {
        method: "POST",
        mode: "no-cors",
        body: formData
    }).then(() => alert("Yoklama başarıyla gönderildi."))
    .catch(() => alert("Gönderim sırasında bir hata oluştu."));
}
