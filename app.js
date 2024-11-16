function openModal() {
document.querySelector(".closeModal").style.display = "flex"
document.querySelector(".modalOpen").style.display = "none"
document.querySelector(".question").style.display = "none"
document.querySelector("body").classList.toggle("bodyColor")
}

function closeModal() {
    document.querySelector(".closeModal").style.display = "none"
document.querySelector(".modalOpen").style.display = "none"
document.querySelector("body").classList.toggle("bodyColor")
document.querySelector(".question").style.display = "flex"
}

function yes() {
    document.querySelector(".modalOpen").style.display = "flex"
    document.querySelector(".question").style.display = "none"
}

function no() {
    document.querySelector(".closeModal").style.display = "none"
document.querySelector(".modalOpen").style.display = "none"
document.querySelector(".question").style.display = "none"
}