//dom
const anonimo = document.querySelector('#anonimo')
const bt01 = document.querySelector('#Messi')
const bt02 = document.querySelector('#Reus')
const bt03 = document.querySelector('#Osvaldo')


//eventos
bt01.addEventListener('click' , Messi)
bt02.addEventListener('click' , Reus)
bt03.addEventListener('click' , Osvaldo)



//funções

function Messi(){

    anonimo.src = "imagens/messi.jpg"

}

function Reus(){

    anonimo.src = "imagens/osvaldo.jpg"

}

function Osvaldo(){

    anonimo.src = "imagens/reus.jpg"

}
