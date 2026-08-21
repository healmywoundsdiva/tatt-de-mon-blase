// ======================================
// ДАННЫЕ РЕЛИЗА
// ======================================

const release = {
    artist: "TRYBOY",
    title: "tatt' de mon blase"
};


// ======================================
// ОБНОВЛЕНИЕ ИНФОРМАЦИИ
// ======================================

document.querySelector(".artist").textContent = release.artist;

document.querySelector(".release-info h1").textContent = release.title;


// ======================================
// АНИМАЦИЯ КНОПОК
// ======================================

const platforms = document.querySelectorAll(".platform");

platforms.forEach((platform, index) => {

    platform.style.animationDelay = `${index * 0.05}s`;

});


// ======================================
// ЗВУК НАЖАТИЯ НА ПЛОЩАДКУ
// ======================================

platforms.forEach((platform) => {

    platform.addEventListener("click", (event) => {

        // Не даём ссылке открыться сразу
        event.preventDefault();


        // Создаём звук клика
        const clickSound = new Audio("sound/mouse-click.wav");


        // Громкость
        clickSound.volume = 0.5;


        // Проигрываем звук
        clickSound.play();


        // Небольшая задержка перед переходом
        setTimeout(() => {

            window.open(platform.href, "_blank");

        }, 50);

    });

});


// ======================================
// СТАРТОВЫЙ ЭКРАН + МУЗЫКА
// ======================================

const tapScreen = document.getElementById("tapScreen");

const music = document.getElementById("backgroundMusic");


tapScreen.addEventListener("click", () => {

    // Запускаем музыку
    music.play();

    // Убираем экран TAP
    tapScreen.classList.add("hidden");

});


// ======================================
// ПАУЗА ПРИ УХОДЕ СО СТРАНИЦЫ
// ======================================

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        // Пользователь покинул вкладку
        music.pause();

    } else {

        // Пользователь вернулся
        music.play().catch(() => {

            // Браузер может запретить автоматический запуск

        });

    }

});


// ======================================
// ОКНО ПОДЕЛИТЬСЯ
// ======================================

const shareButton = document.getElementById("shareButton");

const shareOverlay = document.getElementById("shareOverlay");

const shareClose = document.getElementById("shareClose");

const shareTelegram = document.getElementById("shareTelegram");

const shareVK = document.getElementById("shareVK");

const shareWhatsApp = document.getElementById("shareWhatsApp");

const shareTwitter = document.getElementById("shareTwitter");

const shareFacebook = document.getElementById("shareFacebook");

const shareCopy = document.getElementById("shareCopy");

const copyStatus = document.getElementById("copyStatus");


// ======================================
// ТЕКУЩАЯ ССЫЛКА
// ======================================

const shareURL = window.location.href;


// ======================================
// ОТКРЫТЬ ОКНО ПОДЕЛИТЬСЯ
// ======================================

shareButton.addEventListener("click", (event) => {

    event.stopPropagation();

    shareOverlay.classList.add("active");

});


// ======================================
// ЗАКРЫТЬ ОКНО
// ======================================

shareClose.addEventListener("click", () => {

    shareOverlay.classList.remove("active");

});


// ======================================
// ЗАКРЫТИЕ ПРИ НАЖАТИИ НА ФОН
// ======================================

shareOverlay.addEventListener("click", (event) => {

    if (event.target === shareOverlay) {

        shareOverlay.classList.remove("active");

    }

});


// ======================================
// TELEGRAM
// ======================================

shareTelegram.addEventListener("click", (event) => {

    event.preventDefault();

    const text = encodeURIComponent(
        `${release.artist} — ${release.title}`
    );

    const url = encodeURIComponent(shareURL);

    window.open(
        `https://t.me/share/url?url=${url}&text=${text}`,
        "_blank"
    );

});


// ======================================
// VK
// ======================================

shareVK.addEventListener("click", (event) => {

    event.preventDefault();

    const url = encodeURIComponent(shareURL);

    window.open(
        `https://vk.com/share.php?url=${url}`,
        "_blank"
    );

});


// ======================================
// WHATSAPP
// ======================================

shareWhatsApp.addEventListener("click", (event) => {

    event.preventDefault();

    const text = encodeURIComponent(
        `${release.artist} — ${release.title}\n${shareURL}`
    );

    window.open(
        `https://wa.me/?text=${text}`,
        "_blank"
    );

});


// ======================================
// TWITTER / X
// ======================================

shareTwitter.addEventListener("click", (event) => {

    event.preventDefault();

    const text = encodeURIComponent(
        `${release.artist} — ${release.title}`
    );

    const url = encodeURIComponent(shareURL);

    window.open(
        `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
        "_blank"
    );

});

// ======================================
// FACEBOOK
// ======================================

shareFacebook.addEventListener("click", (event) => {

    event.preventDefault();

    const url = encodeURIComponent(shareURL);

    window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        "_blank"
    );

});


// ======================================
// COPY LINK
// ======================================

shareCopy.addEventListener("click", async () => {

    try {

        await navigator.clipboard.writeText(shareURL);


        // Показываем уведомление
        copyStatus.classList.add("visible");


        // Убираем уведомление
        setTimeout(() => {

            copyStatus.classList.remove("visible");

        }, 1800);


    } catch (error) {

        console.log("Не удалось скопировать ссылку.");

    }

});


// ======================================
// НАЗВАНИЕ В КОНСОЛИ
// ======================================

console.log(
    `${release.artist} — ${release.title}`
);
