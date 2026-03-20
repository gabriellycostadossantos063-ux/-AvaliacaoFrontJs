//function
//getElementByid
//addEventListner

 //---------questao2------//
function exercicio2 () {
    const valor = Number (prompt ("digite o valor da hora"))
    const horas = Number (prompt ("digite as horas trabalhadas"))
    // processamento
    const resultado = valor * horas
    //saida
    alert("seu salario é: " + resultado)
}

const buttonexercicio2 = document.getElementById("exercicio2")
buttonexercicio2.addEventListener('click', () => {exercicio2 ()})


//function
//getElementByid
//addEventListner

//----------questao8-------//
function exercicio8 () {
    const numero = Number(prompt("digite um numero inteiro"))
    
    alert (numero*0)
    alert (numero*1)
    alert (numero*2)
    alert (numero*3)
    alert (numero*4)
    alert (numero*5)
    alert (numero*6)
    alert (numero*7)
    alert (numero*8)
    alert (numero*9)
    alert (numero*10)
}

const buttonexercicio8 = document.getElementById("exercicio8")
buttonexercicio8.addEventListener('click', () => {exercicio8 ()})


//function
//getElementByid
//addEventListner

//---------questao11--------//

function exercicio11 () {}
    const num1= Number(prompt("digite o primeiro numero"))
    const num2= Number(prompt("digite o segundo numero"))
    const op= Number(prompt("digite a operacao (+,-,*,/)"))
 let resultado
 alert("resultado")
 if (op ==="+"){
    resultado = num1+num2
 }else if (op ==="-"){
    resultado = num1-num2
 }else if (op ==="*"){
    resultado = num1*num2
 }else if (op ==="/"){
    resultado = num1/num2
 }else {

 }
  alert("resultado:" + resultado);

  const buttonexercicio11 = document.getElementById("exercicio11")
buttonexercicio11.addEventListener('click', () => {exercicio11 ()})

//function
//getElementByid
//addEventListner

//----------questao15-------//

function exercicio15 () {
    const num1= Number(prompt("digite o primeiro numero"))
    const num2= Number(prompt("digite o segundo numero"))

    if (num1 > num2){
        alert("1 maior numero é:", + num1)
    }else if (num2 > num1){
        alert("5 maior numero é: num2")
    }else {
        alert("os numeros sao iguais")
    }
}