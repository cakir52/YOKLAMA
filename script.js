const participants = [
    { name: "Ahmet Arif Küçük", class: "12" },
    { name: "Ahmet Kemal Özdemir", class: "12" },
    { name: "Ahmet Özcan Atakul", class: "12" },
    { name: "Ahmet Semih Birtane", class: "12" },
    { name: "Bedirhan Efe Altınsoy", class: "12" },
    { name: "Emirhan Eren", class: "12" },
    { name: "Emirhan Tiryaki", class: "12" },
    { name: "Hilmi Tunahan Kaytez", class: "12" },
    { name: "Kemal Selim Temiz", class: "12" },
    { name: "Mehmet Emre Karakuş", class: "12" },
    { name: "Mehmet Hilmi Aydoğan", class: "12" },
    { name: "Ömer Faruk Yakut", class: "12" },
    { name: "Umut Buğra Türk", class: "12" },
    { name: "Yusuf Eren Gümüş", class: "12" },
    { name: "Abdul Kerim Kurt", class: "11" },
    { name: "Adem Tunahan Düzgün", class: "11" },
    { name: "Ahmet Selim Baloğlu", class: "11" },
    { name: "Ahmet Sevban Çalı", class: "11" },
    { name: "Bayram Salih Durmaz", class: "11" },
    { name: "Cafer Furkan Yıldırım", class: "11" },
    { name: "Faruk Selman Sekmen", class: "11" },
    { name: "Hilmi Metin Kayır", class: "11" },
    { name: "Mehmet Arif Kiday", class: "11" },
    { name: "Mehmet Hakan Ay", class: "11" },
    { name: "Mustafa Parlak", class: "11" },
    { name: "Osman Taha Koç", class: "11" },
    { name: "Selman Fatih Cebeci", class: "11" },
    { name: "Sıtkı Eren Erdoğan", class: "11" },
    { name: "Tunahan Başak", class: "11" },
    { name: "Yasin Başer", class: "11" },
    { name: "Yusuf Selim Akın", class: "11" },
    { name: "Buğrahan Yılmaz", class: "11" },
    { name: "Enes İrfan Eser", class: "11" },
    { name: "Abdullah Faruk Özsoy", class: "11" },
    { name: "Mehmedhan Özcan", class: "11" },
    { name: "Ahmet Arif Aydoğan", class: "10" },
    { name: "Ahmet Faruk Çubuk", class: "10" },
    { name: "Ahmet Hakan Sarıca", class: "10" },
    { name: "Ahmet Kemal Selçuk", class: "10" },
    { name: "Ahmet Selim Aydın", class: "10" },
    { name: "Akif Emre Karaca", class: "10" },
    { name: "Halil Tarık Dönmez", class: "10" },
    { name: "Hasan Ali Öğüt", class: "10" },
    { name: "Mehmedhan Demirel", class: "10" },
    { name: "Mehmet Çitil", class: "10" },
    { name: "Mehmet Eymen Kök", class: "10" },
    { name: "Ömer Faruk Aydın", class: "10" },
    { name: "Rüçhan Arif Bağcı", class: "10" },
    { name: "Yasin Talha Gömeç", class: "10" },
    { name: "Yiğit Çalışkan", class: "10" },
    { name: "Ahmet Faruk Özşahin", class: "9" },
    { name: "Ahmet Hilmi Yumrutaş", class: "9" },
    { name: "Ahmet Sevban Arslan", class: "9" },
    { name: "Ali Kerem Çevik", class: "9" },
    { name: "Ali Safa Çiftçi", class: "9" },
    { name: "Hasan Hüseyin Soyçeken", class: "9" },
    { name: "Mehmet Eren Doğan", class: "9" },
    { name: "Mehmet Eymen Karaboya", class: "9" },
    { name: "Mehmet Fatih Soyçeken", class: "9" },
    { name: "Mustafa Selim Pamukoğlu", class: "9" },
    { name: "Sadık Talha Kanat", class: "9" },
    { name: "Selim Emre Aksoy", class: "9" },
    { name: "Talha Tunahan Alpaslan", class: "9" },
    { name: "Yusuf Emin Aydın", class: "9" },
    { name: "Eymen İnce", class: "9" }
];


const classColors = {
    "12": "#d1e7dd",
    "11": "#cff4fc",
    "10": "#e0bbff",
    "9": "#d6d8db"
};

window.onload = function () {
    const list = document.getElementById("name-list");
    participants.forEach(({ name, class: className }) => {
        const id = name.toLowerCase().replace(/\s+/g, '-')
            .replace(/ç/g, 'c').replace(/ğ/g, 'g')
            .replace(/ı/g, 'i').replace(/ö/g, 'o')
            .replace(/ş/g, 's').replace(/ü/g, 'u');
        const li = document.createElement("li");
        li.style.backgroundColor = classColors[className] || "#f0f0f0";
        li.innerHTML = `<input type="checkbox" id="${id}"> <strong>${name}</strong> - <em>${className}</em>`;
        list.appendChild(li);
    });
};

function submitAttendance() {
    const absent = [];
    participants.forEach(({ name, class: className }) => {
        const id = name.toLowerCase().replace(/\s+/g, '-')
            .replace(/ç/g, 'c').replace(/ğ/g, 'g')
            .replace(/ı/g, 'i').replace(/ö/g, 'o')
            .replace(/ş/g, 's').replace(/ü/g, 'u');
        const checkbox = document.getElementById(id);
        if (!checkbox.checked) {
            absent.push({ name, class: className });
        }
    });

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>Katılmayanlar (${absent.length} kişi):</h2><ul>${absent.map(s => `<li>${s.name} (${s.class})</li>`).join('')}</ul>`;

    const csvBtn = document.getElementById("csv-btn");
    csvBtn.style.display = absent.length > 0 ? "block" : "none";

    const csvRows = [["Ad Soyad", "Sınıf"]];
    absent.forEach(s => csvRows.push([s.name, s.class]));
    const csvContent = csvRows.map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    csvBtn.href = url;
    csvBtn.download = "katilmayanlar.csv";

    generateSummary(absent);
}

function generateSummary(absentList) {
    const summary = {};
    absentList.forEach(s => {
        if (!summary[s.class]) summary[s.class] = 0;
        summary[s.class]++;
    });

    const summaryTable = document.getElementById("summary");
    summaryTable.innerHTML = "<h3>Sınıf Özeti</h3>";

    const table = document.createElement("table");
    table.className = "summary-table";

    const header = document.createElement("tr");
    header.innerHTML = "<th>Sınıf</th><th>Sayı</th>";
    table.appendChild(header);

    let total = 0;
    for (const cls in summary) {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${cls}</td><td>${summary[cls]}</td>`;
        table.appendChild(row);
        total += summary[cls];
    }

    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `<td><strong>Toplam</strong></td><td><strong>${total}</strong></td>`;
    table.appendChild(totalRow);

    summaryTable.appendChild(table);
}
