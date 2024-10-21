document.getElementById("show-button-arrow").addEventListener("click", function () {
    const cont = document.getElementById("methods-gifs-cont");
    const button = document.getElementById("show-button-arrow");

    // Проверяем видимость контейнера
    if (cont.style.display === "none" || cont.style.display === "") {
        cont.style.display = "flex";
        button.classList.add("rotate");
    } else {
        cont.style.display = "none";
        button.classList.remove("rotate");
    }
});
