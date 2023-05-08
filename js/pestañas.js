const btntabuno = document.querySelector(".btntab.uno");
const btntabdos = document.querySelector(".btntab.dos");
const btntabtres = document.querySelector(".btntab.tres");
const btntabcuatro = document.querySelector(".btntab.cuatro");
const tabuno = document.querySelector(".tab.uno");
const tabdos = document.querySelector(".tab.dos");
const tabtres = document.querySelector(".tab.tres");
const tabcuatro = document.querySelector(".tab.cuatro");


btntabuno.addEventListener("click", () => {
    tabuno.classList.remove("close");
    tabdos.classList.add("close");
    tabtres.classList.add("close");
    tabcuatro.classList.add("close");
    btntabuno.classList.add("active");
    btntabdos.classList.remove("active");
    btntabtres.classList.remove("active");
    btntabcuatro.classList.remove("active");
});

btntabdos.addEventListener("click", () => {
    tabuno.classList.add("close");
    tabdos.classList.remove("close");
    tabtres.classList.add("close");
    tabcuatro.classList.add("close");
    btntabuno.classList.remove("active");
    btntabdos.classList.add("active");
    btntabtres.classList.remove("active");
    btntabcuatro.classList.remove("active");

});

btntabtres.addEventListener("click", () => {
    tabuno.classList.add("close");
    tabdos.classList.add("close");
    tabtres.classList.remove("close");
    tabcuatro.classList.add("close");
    tabuno.classList.remove("active");
    btntabuno.classList.remove("active");
    btntabdos.classList.remove("active");
    btntabtres.classList.add("active");
    btntabcuatro.classList.remove("active");
});

btntabcuatro.addEventListener("click", () => {
    tabuno.classList.add("close");
    tabdos.classList.add("close");
    tabtres.classList.add("close");
    tabcuatro.classList.remove("close");
    tabuno.classList.remove("active");
    btntabuno.classList.remove("active");
    btntabdos.classList.remove("active");
    btntabtres.classList.remove("active");
    btntabcuatro.classList.add("active");
});