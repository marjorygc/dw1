const modoBotao = document.querySelector("#modoBotao")
const container = document.querySelector("#container")
const botaoImg = document.querySelector("#botaoImg")

modoBotao.addEventListener("click", changebackground)

function changebackground(){
    if(container.style.backgroundImage == 'url("imagens/back_claro.avif")'){
         container.style.backgroundImage = 'url("imagens/back_escuro.png")'
         botaoImg.src = "https://img.icons8.com/?size=100&id=45474&format=png&color=000000"; 
    } else {
        container.style.backgroundImage = 'url("imagens/back_claro.avif")'
        botaoImg.src = "https://img.icons8.com/?size=100&id=648&format=png&color=000000"; 
    }  
}

const inputTarefa = document.querySelector(".inputTarefa")
const plus = document.querySelector("#plus")
const tarefas = document.querySelector(".tarefas")

plus.addEventListener("click", add_tarefa) 

function add_tarefa(){
    const novaTarefa = (inputTarefa.value)

    const itemLista = document.createElement("li")
    itemLista.classList.add("itemLista-item")

    
    const divBotao = document.createElement("div")

    const botao = document.createElement("button")
    const imgCheck = document.createElement("img")
    botao.add = imgCheck

    const textoTarefa = document.createElement("p")
    textoTarefa.textContent = novaTarefa

    const icones = document.createElement("div")
    const imgCaneta = document.createElement("img")
    const imgLixo = document.createElement("img")

    icones = imgCaneta
    icones = imgLixo


    itemLista.add = divBotao
    itemLista.add = textoTarefa
    itemLista.ad = icones


    //itemLista.textContent = novaTarefa 
    //itemLista.classList.add("itemLista-item")
    //tarefas.appendChild(itemLista)
    //inputTarefa.value = ""
}