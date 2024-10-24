// Capturar os elementos que terão interação em tela

const menuIcon = document.querySelector("#menuIcon")
const closeIcon = document.querySelector("#closeIcon")
const sidebar = document.querySelector("#sidebar")

// definir qual será a interação(evento) desse elemento

menuIcon.addEventListener("click", showSidebar)
closeIcon.addEventListener("click", hideSidebar)


// definir oque ele vai fazer quando a interação (evento) ocorrer

function showSidebar(){
    // sidebar.style.right = "flex"
    sidebar.style.right = "0"
}

function hideSidebar(){
    // sidebar.style.display = "none"
    sidebar.style.right = "-100%"
}