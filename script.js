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

        // Громкость звука
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

    // Плавно убираем экран TAP
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

        // Пользователь вернулся на сайт
        music.play().catch(() => {
            // Браузер может запретить автоматический запуск
        });

    }

});
