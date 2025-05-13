
function submitAttendance() {
    const absent = [{ name: "Ali" }, { name: "Veli" }]; // örnek veri

    const formData = new FormData();
    formData.append("entry.1447778846", absent.map(a => a.name).join(", "));

    fetch("https://docs.google.com/forms/d/e/1FAIpQLSfOr1JtxOBYCNduYv9OVIK8qr9bMDAPX8ozsfqJUpAYXH7VBA/formResponse", {
        method: "POST",
        mode: "no-cors",
        body: formData
    }).then(() => console.log("Form gönderildi"))
      .catch(err => console.error("Form gönderim hatası:", err));
}
