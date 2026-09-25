# O‘zbekiston hayvonlari xaritasi — Species Finder

![Qor barsining yaqindan ko‘rinishi](assets/snow-leopard-zoomin.jpg)

*Surat: Sergey Gorshkov, CC BY 4.0. Foydalanuvchi taqdim etgan hujjatdan olingan.*

## Loyiha haqida

**Species Finder** — O‘zbekistondagi hayvon turlari va ularning hujjatlarda qayd etilgan joylarini interaktiv xaritada ko‘rsatadigan veb loyiha. Birinchi tur sifatida **qor barsi (*Panthera uncia*)** tanlangan. Sayt o‘zbek, rus va ingliz tillarida ishlaydi.

Loyihaning kelajakdagi maqsadi — foydalanuvchi yuklagan suratdagi hayvon turini taxmin qilish, natijani foydalanuvchiga tekshirtirish va tanlangan turning O‘zbekistondagi qayd etilgan joylarini ko‘rsatish.

![Qor barsi tog‘li tabiiy muhitda](assets/in-nature.jpeg)

*Surat: David Shaw, CC BY-NC 4.0. Ushbu suratdan foydalanishda notijorat foydalanish shartiga rioya qiling. Foydalanuvchi taqdim etgan hujjatdan olingan.*

## Hozirgi imkoniyatlar

- Qor barsi haqidagi qisqa ma’lumot va surat.
- O‘zbekiston xaritasida hujjatda keltirilgan beshta joy.
- Joyni tanlaganda xaritani yaqinlashtirish va koordinatalarni ko‘rsatish.
- O‘zbek, rus va ingliz tillari.
- Tur ma’lumotlarini JSON formatida yuklab olish.

## Xaritadagi joylar

| Joy              |    Kenglik |    Uzunlik |
| ---------------- | ---------: | ---------: |
| Hisor            | 38.2950° N | 67.4980° E |
| Chatqol          | 41.4050° N | 70.4190° E |
| Yuqori To‘polang | 38.1730° N | 67.1860° E |
| Zarafshon        | 39.2780° N | 68.3310° E |
| Pskem–Ugam       | 41.5900° N | 70.2500° E |

Koordinatalar `1-tur Qor barsi Panthera.docx` hujjatidan olingan. Ularning aniqligi va kuzatuv sanalari mustaqil tekshirilmagan. Xaritadagi nuqta hayvonning butun yashash hududi chegarasini bildirmaydi.

Hujjatda har bir joydagi qor barslari soni berilmagan. Shu sababli sayt hozir bu joylarni populyatsiya soniga qarab ranglamaydi: ularning soni **noma’lum** deb ko‘rsatiladi.

## Fayllar

```text
species-finder/
├── index.html           # sahifa tuzilishi
├── style.css            # ko‘rinish va mobil moslashuv
├── app.js               # xarita, tillar va tugmalar
├── data.json            # tur va joylar haqidagi ma’lumotlar
├── README.md            # loyiha haqida ma’lumot
└── assets/
    ├── leaflet.js       # interaktiv xarita kutubxonasi
    ├── leaflet.css
    ├── snow-leopard.jpg # saytda ishlatiladigan surat
    ├── image2.jpeg      # README dagi birinchi surat
    ├── image3.jpeg      # README dagi ikkinchi surat
    └── region.geojson   # ixtiyoriy mamlakat chegaralari qatlami
```

**Suratlar chiqishi uchun** `image2.jpeg` va `image3.jpeg` fayllarini aynan `assets` papkasiga joylang. Fayl nomlaridagi raqamlar va harflar yuqoridagi yozuv bilan mos bo‘lishi kerak.

## GitHub Pages orqali ishga tushirish

1. Barcha sayt fayllarini GitHub’dagi ommaviy repozitoriyga yuklang. `index.html` repozitoriyning bosh papkasida bo‘lsin.
2. **Settings → Pages** bo‘limini oching.
3. **Deploy from a branch** manbasini tanlang.
4. **main** tarmog‘i va **/ (root)** papkasini tanlab, **Save** tugmasini bosing.
5. Tayyor sayt havolasini shu bo‘limdan oling.

Bu versiya HTML, CSS, JavaScript va JSON bilan ishlaydi. Hozircha ma’lumotlar bazasi yoki API kaliti talab qilinmaydi. Fon xaritasini ko‘rish uchun internet kerak.

## Keyingi bosqichlar

1. Turlar va joylarni tahrirlash uchun ma’lumotlar bazasi va boshqaruv sahifasini qo‘shish.
2. Surat orqali hayvon turini taxmin qilish va natijani tuzatish imkoniyatini qo‘shish.
3. Boshqa hayvon turlarini qo‘shish.
4. Ishonchli populyatsiya baholari, hudud chegaralari va kuzatuv sanalari mavjud bo‘lganda xaritani sonlarga qarab ranglash.

## Manbalar

- Tur va koordinatalar: foydalanuvchi taqdim etgan `1-tur Qor barsi Panthera.docx` hujjati.
- Xarita kutubxonasi: [Leaflet](https://leafletjs.com/).
- Fon xaritasi: [OpenStreetMap](https://www.openstreetmap.org/copyright).
- Umumlashtirilgan mamlakat chegaralari: [Natural Earth](https://www.naturalearthdata.com/).
- Mintaqaviy ma’lumot: [BMT Taraqqiyot Dasturi](https://www.undp.org/uzbekistan/projects/completed-sustainable-natural-resource-and-forest-management-mountainous-areas). Bu manba hujjatdagi alohida koordinatalarni tasdiqlamaydi.
- README suratlari: Sergey Gorshkov (CC BY 4.0) va David Shaw (CC BY-NC 4.0), Word hujjatidagi kreditlarga muvofiq.

Koddan boshqalar qanday foydalanishini belgilash uchun keyinchalik repozitoriyga alohida `LICENSE` fayli qo‘shilishi mumkin. Suratlar va Leaflet kutubxonasining o‘z litsenziya shartlari saqlanadi.