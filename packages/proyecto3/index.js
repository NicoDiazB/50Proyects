const btnNav = document.getElementById("open")
const nav = document.getElementById("navBar")

btnNav.addEventListener("click", () => {
    nav.classList.toggle("expanded")
})