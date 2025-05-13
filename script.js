
function submitAttendance() {
    const absent = [{ name: "Ahmet Öğrenci" }, { name: "Ayşe Öğrenci" }];

    fetch("https://script.google.com/macros/s/AKfycbyt4_H-p8Jl4XtjGGvyUAw2oESv0zYU9yRp9oVhDjWDamO9U-NYB1gxpESKsq_cU7Wb/exec", {
        method: "POST",
        body: JSON.stringify({ absent: absent.map(a => a.name) }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => console.log("Google Sheets'e gönderildi:", res.status))
    .catch(err => console.error("Gönderim hatası:", err));
}
