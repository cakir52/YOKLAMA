
function submitAttendance() {
    const absent = [{ name: "Deneme Öğrenci 1" }, { name: "Deneme Öğrenci 2" }];

    fetch("https://script.google.com/macros/s/AKfycbx7EpVDymKZaAE4U_LW5UOfvzRrb4lzspwFF5OSf0ipPbOFhXKiljxa_GE-sg8GDTf4/exec", {
        method: "POST",
        body: JSON.stringify({ absent: absent.map(a => a.name) }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => console.log("Google Sheets'e gönderildi:", res.status))
    .catch(err => console.error("Gönderim hatası:", err));
}
