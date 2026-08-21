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
// НАЗВАНИЕ В КОНСОЛИ
// ======================================

console.log(`${release.artist} — ${release.title}`);