const corPadrao = document.getElementById('btn-padrao')
const corPreta = document.getElementById('btn-preto')
const corRoxa = document.getElementById('btn-roxo')

corPadrao.addEventListener("click", () => {
    document.body.style.cssText = 
    'background-color: var(--fundo-padrao);'+
    'color: var(--cor-padrao-fonte);'+
    'text-shadow: 3px 3px 3px var(--fundo2);'
})

corPreta.addEventListener("click", () => {
    document.body.style.cssText = 
    'background-color: var(--fundo2);'+
    'color: var(--cor-padrao-fonte);'+
    'text-shadow: 3px 3px 3px var(--fonte2);'
})

corRoxa.addEventListener("click", () => {
    document.body.style.cssText = 
    'background-color: var(--fundo3);'+
    'color: var(--cor-padrao-fonte);'+
    'text-shadow: 3px 3px 1px var(--fonte3);'
})
