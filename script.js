let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')

function pular(){
    if(personagem.classList != 'animar'){
        personagem.classList.add('animar')
    }

    setTimeout(function(){
        personagem.classList.remove('animar')
    },500)

}

var testarColisao = setInterval(function(){
    var topoPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    )

    var EsquedaQuadrado  = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
    )

    if(EsquedaQuadrado < 20 && EsquedaQuadrado > 0 && topoPersonagem >= 130){
        quadrado.style.animation = 'none'
        quadrado.style.display = 'none'
        alert('Game Over')
    }

}, 10)
