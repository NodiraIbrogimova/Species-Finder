// One translation dictionary per language.
// Species and location records are stored in data.json.

const translations = {
    en: {
        eyebrow: "UZBEKISTAN · SPECIES ATLAS",
        title: "Explore the snow leopard’s home",
        intro:
            "Discover documented locations across Uzbekistan’s mountain landscapes.",
        version: "01 / Map prototype",
        selected: "SELECTED SPECIES",
        species: "Snow leopard",
        description:
            "A mountain cat with a thick, spotted coat and a long tail. Found in rocky alpine and subalpine habitats.",
        altitude: "Habitat elevation",
        status: "Vulnerable",
        docStatus: "Conservation status and habitat: supplied document.",
        locations: "Documented locations",
        distribution: "Distribution map",
        reset: "Show Uzbekistan",
        legend: "Reported location · population unknown",
        notRange: "Points are not habitat boundaries",
        evidence: "ABOUT THE DATA",
        sourceTitle: "Every location has a source",
        sourceNote:
            "These five coordinates come from your species document. Their accuracy and survey dates have not been independently verified.",
        contextLink: "Read regional context from UNDP ↗",
        contextNote:
            "UNDP describes broad landscapes; it does not verify these individual coordinates. Country outlines: Natural Earth (generalized).",
        next: "WHEN POPULATION DATA IS AVAILABLE",
        populationTitle: "From locations to population",
        less: "Lower population",
        more: "Higher population",
        populationNote:
            "This is the planned color scale, not measured data. Area boundaries, comparable population estimates and survey dates are needed before we shade the map.",
        download: "Download species data (JSON)",
        footer:
            "Learning prototype · Distribution only · No image recognition yet",
        unknown: "Unknown",
        coordinates: "Document coordinates",
        population: "Population",
        survey: "Survey date",
        document: "Document record",
        detailNote:
            "A listed point does not establish an occupied area or the number of animals living there.",
        tileError:
            "Background map tiles could not load. The location list and available boundary layer still work.",
        loadError:
            "Could not load the species data. Please refresh the page."
    },

    uz: {
        eyebrow: "O‘ZBEKISTON · TURLAR ATLASI",
        title: "Qor barsining yashash joylari",
        intro:
            "O‘zbekiston tog‘laridagi hujjatda keltirilgan joylarni o‘rganing.",
        version: "01 / Xarita prototipi",
        selected: "TANLANGAN TUR",
        species: "Qor barsi",
        description:
            "Qalin, dog‘li junli va uzun dumli tog‘ mushugi. Qoyali alp va subalp hududlarida yashaydi.",
        altitude: "Yashash balandligi",
        status: "Zaif holatda",
        docStatus:
            "Muhofaza holati va yashash muhiti: taqdim etilgan hujjat.",
        locations: "Hujjatdagi joylar",
        distribution: "Tarqalish xaritasi",
        reset: "O‘zbekistonni ko‘rsatish",
        legend: "Hujjatdagi joy · soni noma’lum",
        notRange: "Nuqtalar yashash hududi chegarasi emas",
        evidence: "MA’LUMOTLAR HAQIDA",
        sourceTitle: "Har bir joyning manbasi bor",
        sourceNote:
            "Ushbu beshta koordinata tur haqidagi hujjatingizdan olingan. Ularning aniqligi va kuzatuv sanalari mustaqil tekshirilmagan.",
        contextLink: "BMTTDning hududlar haqidagi ma’lumotlari ↗",
        contextNote:
            "BMTTD keng hududlarni tavsiflaydi; ushbu alohida koordinatalarni tasdiqlamaydi. Mamlakat chegaralari: Natural Earth (umumlashtirilgan).",
        next: "POPULYATSIYA MA’LUMOTLARI MAVJUD BO‘LGANDA",
        populationTitle: "Joylashuvdan populyatsiyaga",
        less: "Kamroq individ",
        more: "Ko‘proq individ",
        populationNote:
            "Bu rejalashtirilgan rang shkalasi, o‘lchangan ma’lumot emas. Xaritani bo‘yash uchun hudud chegaralari, taqqoslanadigan son baholari va kuzatuv sanalari kerak.",
        download: "Tur ma’lumotlarini yuklab olish (JSON)",
        footer:
            "O‘quv prototipi · Faqat tarqalish · Rasmni tanish hali ulanmagan",
        unknown: "Noma’lum",
        coordinates: "Hujjatdagi koordinatalar",
        population: "Individlar soni",
        survey: "Kuzatuv sanasi",
        document: "Hujjatdagi qayd",
        detailNote:
            "Bitta nuqta egallangan hududni yoki u yerda yashovchi hayvonlar sonini aniqlamaydi.",
        tileError:
            "Fon xaritasi yuklanmadi. Joylar ro‘yxati va mavjud chegaralar qatlami ishlashda davom etadi.",
        loadError:
            "Tur ma’lumotlari yuklanmadi. Sahifani yangilang."
    },

    ru: {
        eyebrow: "УЗБЕКИСТАН · АТЛАС ВИДОВ",
        title: "Места обитания снежного барса",
        intro:
            "Изучите указанные в документе места в горных районах Узбекистана.",
        version: "01 / Прототип карты",
        selected: "ВЫБРАННЫЙ ВИД",
        species: "Снежный барс",
        description:
            "Горная кошка с густой пятнистой шерстью и длинным хвостом. Обитает в скалистых альпийских и субальпийских поясах.",
        altitude: "Высота обитания",
        status: "Уязвимый вид",
        docStatus:
            "Охранный статус и среда обитания: предоставленный документ.",
        locations: "Места из документа",
        distribution: "Карта распространения",
        reset: "Показать Узбекистан",
        legend: "Место из документа · численность неизвестна",
        notRange: "Точки не обозначают границы ареала",
        evidence: "О ДАННЫХ",
        sourceTitle: "У каждого места есть источник",
        sourceNote:
            "Эти пять координат взяты из вашего документа о виде. Их точность и даты наблюдений независимо не проверены.",
        contextLink: "Информация ПРООН о регионах ↗",
        contextNote:
            "ПРООН описывает обширные территории, но не подтверждает отдельные координаты. Границы стран: Natural Earth (обобщённые).",
        next: "КОГДА ПОЯВЯТСЯ ДАННЫЕ О ЧИСЛЕННОСТИ",
        populationTitle: "От мест к численности",
        less: "Меньше особей",
        more: "Больше особей",
        populationNote:
            "Это планируемая цветовая шкала, а не результаты измерений. Для окраски карты нужны границы участков, сопоставимые оценки численности и даты обследований.",
        download: "Скачать данные о виде (JSON)",
        footer:
            "Учебный прототип · Только распространение · Распознавание фото ещё не подключено",
        unknown: "Неизвестно",
        coordinates: "Координаты из документа",
        population: "Численность",
        survey: "Дата обследования",
        document: "Запись из документа",
        detailNote:
            "Отдельная точка не определяет заселённую площадь или число животных на ней.",
        tileError:
            "Фоновая карта не загрузилась. Список мест и доступный слой границ продолжают работать.",
        loadError:
            "Не удалось загрузить данные о виде. Обновите страницу."
    }
};

// Default language.
let lang = "uz";

// Restore the previously selected language, when available.
try {
    const saved = localStorage.getItem("speciesLanguage");

    if (translations[saved]) {
        lang = saved;
    }
} catch {
    // The page still works if browser storage is unavailable.
}

// Application state.
let data;
let map;
let selected = 0;
let markers = [];
let countryLayer;

// Helpers.
const $ = (selector) => document.querySelector(selector);
const text = (key) => translations[lang][key];

function coord(location) {
    return (
        `${location.latitude.toFixed(4)}° N, ` +
        `${location.longitude.toFixed(4)}° E`
    );
}

// Display details for the currently selected location.
function details() {
    if (!data) return;

    const location = data.locations[selected];
    const target = $("#detail");

    target.replaceChildren();

    const head = document.createElement("div");
    head.className = "detail-head";

    const heading = document.createElement("h2");
    heading.textContent = location.name[lang];

    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = text("document");

    head.append(heading, tag);

    const grid = document.createElement("div");
    grid.className = "detail-grid";

    const fields = [
        ["coordinates", coord(location)],
        ["population", location.population ?? text("unknown")],
        ["survey", location.surveyDate ?? text("unknown")]
    ];

    for (const [key, value] of fields) {
        const cell = document.createElement("div");

        const label = document.createElement("span");
        label.textContent = text(key);

        const fieldValue = document.createElement("strong");
        fieldValue.textContent = value;

        cell.append(label, fieldValue);
        grid.append(cell);
    }

    const note = document.createElement("p");
    note.textContent = text("detailNote");

    target.append(head, grid, note);
}

// Select a location and optionally zoom to it.
function selectLocation(index, fly = true) {
    selected = index;

    document.querySelectorAll(".location").forEach((element, i) => {
        const isSelected = i === index;

        element.classList.toggle("active", isSelected);
        element.setAttribute("aria-pressed", String(isSelected));
    });

    markers.forEach((marker, i) => {
        marker.setStyle({
            radius: i === index ? 10 : 7,
            fillColor: i === index ? "#006b69" : "#758b94"
        });
    });

    details();

    if (map && fly) {
        const location = data.locations[index];

        map.flyTo(
            [location.latitude, location.longitude],
            8,
            { duration: 0.6 }
        );

        markers[index]?.openPopup();
    }
}

// Translate the page and rebuild the location list.
function render() {
    document.documentElement.lang = lang;
    document.title = `${text("species")} · Species Finder`;

    document.querySelectorAll("[data-t]").forEach((element) => {
        element.textContent = text(element.dataset.t);
    });

    document.querySelectorAll("[data-lang]").forEach((element) => {
        const isActive = element.dataset.lang === lang;

        element.classList.toggle("active", isActive);
        element.setAttribute("aria-pressed", String(isActive));
    });

    if (!data) return;

    $("#locations").replaceChildren();

    data.locations.forEach((location, index) => {
        const button = document.createElement("button");
        button.className = "location";

        const number = document.createElement("span");
        number.className = "number";
        number.textContent = String(index + 1).padStart(2, "0");

        const content = document.createElement("span");

        const name = document.createElement("strong");
        name.textContent = location.name[lang];

        const coordinates = document.createElement("small");
        coordinates.textContent = coord(location);

        content.append(name, coordinates);

        const arrow = document.createElement("span");
        arrow.className = "arrow";
        arrow.textContent = "↗";
        arrow.setAttribute("aria-hidden", "true");

        button.append(number, content, arrow);
        button.onclick = () => selectLocation(index);

        $("#locations").append(button);

        // Update map popup text when the language changes.
        if (markers[index]) {
            const popup = document.createElement("div");

            const title = document.createElement("strong");
            title.textContent = location.name[lang];

            const subtitle = document.createElement("div");
            subtitle.textContent = text("legend");

            popup.append(title, subtitle);
            markers[index].bindPopup(popup);
        }
    });

    selectLocation(selected, false);
}

// Language buttons.
document.querySelectorAll("[data-lang]").forEach((button) => {
    button.onclick = () => {
        lang = button.dataset.lang;

        try {
            localStorage.setItem("speciesLanguage", lang);
        } catch {
            // Saving the language preference is optional.
        }

        render();
    };
});

// Reset the map to show Uzbekistan.
$("#reset").onclick = () => {
    map?.fitBounds(
        [
            [37.1, 55.9],
            [45.7, 73.2]
        ],
        { padding: [12, 12] }
    );
};

// Download the current species record as a JSON file.
$("#download").onclick = () => {
    if (!data) return;

    const blob = new Blob(
        [JSON.stringify(data, null, 2)],
        { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "snow-leopard-data.json";
    link.click();

    setTimeout(() => URL.revokeObjectURL(url), 1000);
};

// Translate the page before loading the data.
render();

// Load species data and initialize the map.
(async () => {
    try {
        const response = await fetch("data.json");

        if (!response.ok) {
            throw new Error("Could not load data.json");
        }

        data = await response.json();
        render();

        // Leaflet must be loaded before app.js.
        if (!window.L) {
            $("#map-warning").hidden = false;
            return;
        }

        map = L.map("map", {
            scrollWheelZoom: false,
            minZoom: 4,
            maxZoom: 13
        });

        map.fitBounds(
            [
                [37.1, 55.9],
                [45.7, 73.2]
            ],
            { padding: [12, 12] }
        );

        // Background map.
        const tiles = L.tileLayer(
            "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
            {
                maxZoom: 19,
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">' +
                    "OpenStreetMap</a>"
            }
        ).addTo(map);

        tiles.on("tileerror", () => {
            $("#map-warning").hidden = false;
        });

        // A marker for each document-provided location.
        markers = data.locations.map((location, index) => {
            return L.circleMarker(
                [location.latitude, location.longitude],
                {
                    radius: 7,
                    color: "#fff",
                    weight: 2,
                    fillColor: "#758b94",
                    fillOpacity: 1
                }
            )
                .addTo(map)
                .on("click", () => selectLocation(index, false));
        });

        render();

        // Optional generalized country boundaries.
        try {
            const boundaryResponse = await fetch(
                "assets/region.geojson"
            );

            if (boundaryResponse.ok) {
                const region = await boundaryResponse.json();

                countryLayer = L.geoJSON(region, {
                    style: (feature) => {
                        const isUzbekistan =
                            feature.properties.ADM0_A3 === "UZB";

                        return {
                            color: isUzbekistan ? "#267d7c" : "#8b9ca5",
                            weight: isUzbekistan ? 2 : 1,
                            fillColor: isUzbekistan ? "#c1dcda" : "#e4ecef",
                            fillOpacity: 0.23
                        };
                    },
                    interactive: false
                }).addTo(map);

                countryLayer.bringToBack();

                map.attributionControl.addAttribution(
                    '<a href="https://www.naturalearthdata.com/">' +
                    "Natural Earth</a>"
                );
            }
        } catch {
            // Markers and background tiles can work without this layer.
        }
    } catch {
        const error = document.createElement("p");
        error.className = "notice";
        error.textContent = text("loadError");

        $("#detail").replaceChildren(error);
    }
})();