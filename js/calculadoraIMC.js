let formularioCalculadora = document.querySelector('form')

let cxNome = document.querySelector('#nome')
let cxIdade = document.querySelector('#idade')
let cxAltura = document.querySelector('#altura')
let cxImc = document.querySelector('#imc')

let btnEnviar = document.querySelector('#btnEnviar')
let btnLimpar = document.querySelector('#btnLimpar')

btnEnviar.addEventListener('click', function (e) {
    
    let nome = cxNome.value
    let idade = cxIdade.value
    let peso = cxPeso.value
    let altura = cxAltura.value
    let imc = (peso / (altura * altura)).toFixed(1)

    console.log(nome)
    console.log(idade)
    console.log(peso)
    console.log(altura)
    console.log(imc)

    cxImc.value = imc
    let sit = situacaoDoPeso(imc)

})