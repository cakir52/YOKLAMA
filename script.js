
const students = [
  { name: "Ahmet Arif Küçük", class: "12" }, { name: "Ahmet Kemal Özdemir", class: "12" },
  { name: "Ahmet Özcan Atakul", class: "12" }, { name: "Ahmet Semih Birtane", class: "12" },
  { name: "Bedirhan Efe Altınsoy", class: "12" }, { name: "Emirhan Eren", class: "12" },
  { name: "Emirhan Tiryaki", class: "12" }, { name: "Hilmi Tunahan Kaytez", class: "12" },
  { name: "Kemal Selim Temiz", class: "12" }, { name: "Mehmet Emre Karakuş", class: "12" },
  { name: "Mehmet Hilmi Aydoğan", class: "12" }, { name: "Ömer Faruk Yakut", class: "12" },
  { name: "Umut Buğra Türk", class: "12" }, { name: "Yusuf Eren Gümüş", class: "12" },
  { name: "11-Abdul Kerim Kurt", class: "11 MF" }, { name: "11-Adem Tunahan Düzgün", class: "11 TM" },
  { name: "11-Ahmet Selim Baloğlu", class: "11 TM" }, { name: "11-Ahmet Sevban Çalı", class: "11 TM" },
  { name: "11-Bayram Salih Durmaz", class: "11 MF" }, { name: "11-Cafer Furkan Yıldırım", class: "11 MF" },
  { name: "11-Faruk Selman Sekmen", class: "11 TM" }, { name: "11-Hilmi Metin Kayır", class: "11 MF" },
  { name: "11-Mehmet Arif Kiday", class: "11 TM" }, { name: "11-Mehmet Hakan Ay", class: "11 MF" },
  { name: "11-Mustafa Parlak", class: "11 TM" }, { name: "11-Osman Taha Koç", class: "11 MF" },
  { name: "11-Selman Fatih Cebeci", class: "11 MF" }, { name: "11-Sıtkı Eren Erdoğan", class: "11 MF" },
  { name: "Ahmet Arif Aydoğan", class: "10" }, { name: "Ahmet Faruk Çubuk", class: "10" },
  { name: "Ahmet Hakan Sarıca", class: "10" }, { name: "Ahmet Kemal Selçuk", class: "10" },
  { name: "Ahmet Selim Aydın", class: "10" }, { name: "Akif Emre Karaca", class: "10" },
  { name: "Halil Tarık Dönmez", class: "10" }, { name: "Hasan Ali Öğüt", class: "10" },
  { name: "Ahmet Faruk Özşahin", class: "9" }, { name: "Ahmet Hilmi Yumrutaş", class: "9" },
  { name: "Ahmet Sevban Arslan", class: "9" }, { name: "Ali Kerem Çevik", class: "9" },
  { name: "Ali Safa Çiftçi", class: "9" },{ name: "Hasan Hüseyin Soyçeken", class: "9" }, { name: "Mehmet Eren Doğan", class: "9" },
  { name: "Mehmet Eymen Karaboya", class: "9" }, { name: "Mehmet Fatih Soyçeken", class: "9" },
  { name: "Mustafa Selim Pamukoğlu", class: "9" },{ name: "Sadık Talha Kanat", class: "9" }, { name: "Selim Emre Aksoy", class: "9" },
  { name: "Talha Tunahan Alpaslan", class: "9" }, { name: "Yusuf Emin Aydın", class: "9" },
  { name: "Eymen İnce", class: "9" }
];

function renderList() {
  const list = document.getElementById("student-list");
  list.innerHTML = "";
  list.className = "grid";
  students.forEach((s, i) => {
    const card = document.createElement("div");
    card.className = `student-card class-${s.class}`;
    card.innerHTML = `<label><input type="checkbox" id="s-${i}" checked> ${s.name}</label>`;
    list.appendChild(card);
  });
}

function getCurrentTRDate() {
  const now = new Date();
  return now.toLocaleDateString("tr-TR");
}

function getCurrentTRTime() {
  const now = new Date();
  return now.toLocaleTimeString("tr-TR").slice(0, 5);
}

function submitAttendance() {
  const absentees = [];
  const attendees = [];
  students.forEach((s, i) => {
    const el = document.getElementById("s-" + i);
    if (el && el.checked) attendees.push(s.name);
    else absentees.push(s.name);
  });

  const date = getCurrentTRDate();
  const time = getCurrentTRTime();

  const formData = new FormData();
  formData.append("entry.2122584840", date);
  formData.append("entry.1585197905", time);
  formData.append("entry.542302589", absentees.join(", "));
  formData.append("entry.1991447631", attendees.join(", "));

  fetch("https://docs.google.com/forms/d/e/1FAIpQLSfTJLwmy8ClSVBhLlK4PWXQm8f2lry4V1tVHb2K3G2LwuCt0A/formResponse", {
    method: "POST",
    mode: "no-cors",
    body: formData
  });

  const csvContent = "data:text/csv;charset=utf-8," + absentees.join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.getElementById("csv-btn");
  link.href = encodedUri;
  link.style.display = "inline-block";

  const summary = document.getElementById("summary");
  summary.innerHTML = `
    <div class="animated-box">
      <h2>Yoklama Özeti</h2>
      <p><strong>Tarih:</strong> ${date}</p>
      <p><strong>Saat:</strong> ${time}</p>
      <p><strong>Katılan:</strong> ${attendees.length} kişi</p>
      <p><strong>Katılmayan:</strong> ${absentees.length} kişi</p>
    </div>
  `;
  summary.classList.add("show");
}

window.onload = function() { renderList(); };
