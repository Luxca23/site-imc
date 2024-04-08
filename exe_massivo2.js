let botao = document.querySelector('button')
alert("Para melhor experiencia, teste em PC")

botao.addEventListener('click',(e) => {
    let peso = document.querySelector('#peso')
    let altura = document.querySelector('#altura')
    let resultado = document.querySelector('.valor')
    
    let peso_convertido = Number(peso.value)
    let altura_convertida = Number(altura.value)
    
    let IMC = function(peso, altura, resultado) {
        let valor = peso / (altura * altura);
        let valor2 = parseFloat(valor.toFixed(2))
        if(peso && altura){
            if(valor2 < 18.5){
                resultado.innerText = "abaixo do peso!"
                resultado.style.backgroundColor = 'yellow';
                resultado.style.fontFamily = 'Lucida Sans'
                resultado.style.color = 'black' 
                console.log(valor2)
            }else if(valor2 >= 18.5 && valor <= 24.9){
                resultado.innerText = "Peso normal!"
                resultado.style.backgroundColor = 'green';
                resultado.style.fontFamily = 'Lucida Sans'
                resultado.style.color = 'white' 
                console.log(valor2)
            }else if(valor2 >= 25 && valor <= 29.9){
                resultado.innerText = "sobrepeso!"
                resultado.style.backgroundColor = 'orangered';
                resultado.style.fontFamily = 'Lucida Sans'
                resultado.style.color = 'black' 
                console.log(valor2)
            }else if(valor2 >= 30 && valor <= 34.9){
                resultado.innerText = "Obesidade grau I"
                resultado.style.backgroundColor = 'red';
                resultado.style.fontFamily = 'Lucida Sans'
                resultado.style.color = 'yellow' 
                console.log(valor2)
            }else if(valor2 >= 35 && valor <= 39.9){
                resultado.innerText = "Obesidade grau II"
                resultado.style.backgroundColor = 'red';
                resultado.style.fontFamily = 'Lucida Sans'
                resultado.style.color = 'yellow' 
                console.log(valor2)
            }else if(valor2 >= 40){
                resultado.innerText = "Obesidade grau III"
                resultado.style.backgroundColor = 'black';
                resultado.style.fontFamily = 'Lucida Sans'
                resultado.style.color = 'orange' 
                console.log(valor2)
            }
        }else{
            alert('Digite todos os campos corretamente!')
            resultado.innerText = null;
            resultado.style.backgroundColor = null;
        }    
    }
    
    IMC(peso_convertido, altura_convertida, resultado)

    e.preventDefault()
})
