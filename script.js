// Öğrenci listeleri
const participants = {
    "9. sınıf": [
        "Ahmet Hilmi Yumrutaş",
        "Yusuf Emin Aydın",
        "Ahmet Sevban Arslan",
        "Sadık Talha Kanat",
        "Ali Safa Çiftçi",
        "Mustafa Selim Pamukoğlu",
        "Mehmet Eren Doğan",
        "Ahmed Faruk Özşahin",
        "Mehmet Eymen Karaboya",
        "Eymen İnce",
        "Talha Tunahan Alpaslan",
        "Ali Kerem Çevik",
        "Selim Emre Aksoy",
        "Mehmet Fatih Soyçeken",
        "Hasan Hüseyin Soyçeken"
    ],
    "10. sınıf": [
        "Yasin Talha Gömeç",
        "Ahmet Hakan Sarıca",
        "Halil Tarık Dönmez",
        "Yiğit Çalışkan",
        "Mehmet Çitil",
        "Ahmet Faruk Çubuk",
        "Ömer Faruk Aydın",
        "Rüçhan Arif Bağcı",
        "Mehmet Eymen Kök",
        "Hasan Ali Öğüt",
        "Ahmet Kemal Selçuk",
        "Mehmedhan Demirel",
        "Ahmet Arif Aydoğan",
        "Akif Emre Karaca",
        "Ahmet Selim Aydın"
    ],
    "11 TM": [
        "Buğrahan Yılmaz",
        "Mustafa Parlak",
        "Ahmet Sevban Çalı",
        "Ahmet Selim Baloğlu",
        "Yasin Başer",
        "Ramazan Tunahan Başak",
        "Faruk Selman Sekmen",
        "Adem Tunahan Düzgün",
        "Mehmet Arif Kiday"
    ],
    "11 MF": [
        "Abdullah Faruk Özsoy",
        "Mehmedhan Özcan",
        "Cafer Furkan Yıldırım",
        "Mehmet Hakan Ay",
        "Abdul Kerim Kurt",
        "Yusuf Selim Akın",
        "Selman Fatih Cebeci",
        "Sıtkı Eren Erdoğan",
        "Bayram Salih Durmaz",
        "Hilmi Metin Kayır",
        "Osman Taha Koç",
        "Enes Irfan Eser"
    ],
    "12 TM": [
        "Mehmet Hilmi Aydoğan",
        "Ahmed Arif Küçük",
        "Emirhan Gömeç",
        "Yusuf Eren Gümüş",
        "Kemal Selim Temiz"
    ],
    "12 MF": [
        "Emirhan Tiryaki",
        "Umut Buğra Türk",
        "Ahmet Kemal Özdemir",
        "Ahmet Özcan Atakul",
        "Hilmi Tunahan Kaytez",
        "Ömer Faruk Yakut",
        "Emirhan Eren",
        "Mehmet Emre Karakuş",
        "Ahmet Semih Birtane",
        "Bedirhan Efe Altınsoy"
    ]
};

window.onload = function () {
    const classSelect = document.getElementById("class-select");
    const list = document.getElementById("name-list");

    classSelect.addEventListener("change", function () {
        loadClassList(classSelect.value);
    });

    loadClassList(classSelect.value); // İlk açıldığında 9. sınıfı yükle
};

// Sınıfa göre öğrencileri yükleme
function loadClassList(className) {
    const list = document.getElementById("name-list");
    list.innerHTML = ""; // Önceki listeyi temizle

    const selectedClass = participants[className];
    selectedClass.forEach(name => {
        const id = name.toLowerCase().replace(/\s+/g, '-').replace(/ç/g, 'c').replace(/ğ/g, 'g').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ş/g, 's').replace(/ü/g, 'u');
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="${id}"> ${name}`;
        list.appendChild(li);
    });
}

// Yoklamayı gönderme
function submitAttendance() {
    let present = [];
    let absent = [];

    // Katılımcıları ve katılmayanları ayır
    for (let className in participants) {
        const selectedClass = participants[className];
        selectedClass.forEach(name => {
            const id = name.toLowerCase().replace(/\s+/g, '-').replace(/ç/g, 'c').replace(/ğ/g, 'g').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ş/g, 's').replace(/ü/g, 'u');
            const checkbox = document.getElementById(id);
            if (checkbox.checked) {
                present.push(name);
            } else {
                absent.push(name);
            }
        });
    }

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h3>Katılmayanlar (${absent.length} kişi):</h3>
        <ul>${absent.map(name => `<li>${name}</li>`).join("")}</ul>
    `;
}
