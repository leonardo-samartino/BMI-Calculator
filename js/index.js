// Função para pegar os dados inseridos
function getDadosInput(){

    let peso = document.getElementById('peso')
    let altura = document.getElementById('altura')


    //validaçao de caixa vazia para o campo Peso
    if(peso.value == ''){
        setErrorField(peso)
    //validaçao de caixa vazia para o campo Altura
    }else if (altura.value == ''){
        setErrorField(altura)
    }else if (isNaN(peso.value) && peso.value != ''){
        alert( 'Não é possivel digitar letras no campo Peso')
        peso.value = '' 
        altura.value = ''
    }else if (isNaN(altura.value) && altura.value != ''){
        alert('Não é possivel digitar letras no campo Altura')
        altura.value = ''
    }else{
        setResultadosIMC(peso.value, altura.value)
    }
}
// Função para tratativa de caixa vazia
function setErrorField(element){
    
    element.focus()

    //retorna uma mensagem de alerta para o usuário caso deixe o campo vazio
    alert('O campo ' + element.getAttribute('id') + ' é obrigatório na digitação.')

} 
//Função para resetar a calculadora
function setResetForm(){
    let peso = document.getElementById('peso')
    let altura = document.getElementById('altura')
    let resultado = document.getElementById('resultadoIMC')
    let status = document.getElementById('statusIMC')
    

    peso.value = ''
    altura.value = ''
    resultado.innerText = ''
    status.innerText = ''

}
// Função para imprimir o resultado na tela
function setResultadosIMC(pesoUsuario, alturaUsuario){
    
    // Recebe os dados do usuário encaminhados da funçao getDadosInput
    let peso = pesoUsuario
    let altura = alturaUsuario

    let resultadoIMC = document.getElementById('resultadoIMC')
    let statusIMC = document.getElementById('statusIMC')
    let resultado = CalculoIMC(peso, altura)
    let imcStatus = StatusIMC(resultado)


    resultadoIMC.innerText = resultado.toFixed(2)
    statusIMC.innerText = imcStatus
}
// Função para calcular o IMC  peso/altura²
function CalculoIMC(pesoUsuario, alturaUsuario){

    let peso = pesoUsuario
    let altura = alturaUsuario/100
    let resultadoIMC 

    resultadoIMC = peso/(altura*altura)
    
return resultadoIMC
}
// Função de definir o status IMC
function StatusIMC(resultado){

    let imcStatus = resultado
    let StatusIMC 

    if(imcStatus < 16){
        StatusIMC = "Magreza Grave"

    }else if( imcStatus >= 16 && imcStatus < 17){
        StatusIMC = "Magreza Moderada"
    }else if( imcStatus >= 17 && imcStatus < 18.6){
        StatusIMC = "Magreza Leve"
    }else if( imcStatus >= 18.6 && imcStatus < 25){
        StatusIMC = "Peso Ideal"
    }else if( imcStatus >= 25 && imcStatus < 30){
        StatusIMC = "Sobrepeso"
    }else if( imcStatus >= 30 && imcStatus < 35){
        StatusIMC = "Obesidade Grau 1"
    }else if( imcStatus >= 35 && imcStatus < 40){
        StatusIMC = "Obesidade Grau 2"
    }else if( imcStatus >= 40){
        StatusIMC = "Obesidade Morbida"
    }

return StatusIMC
}