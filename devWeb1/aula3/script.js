function showExercise(number) {
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => container.classList.remove('active'));
    document.getElementById(`exercise${number}`).classList.add('active');
}

function calcularCurtidas() {
    const dias = parseInt(document.getElementById('dias').value);
    const curtidas = dias * 6 * 8;
    document.getElementById('resultado1').innerText = `Quantidade de curtidas: ${curtidas}`;
}

function calcularDiasParaCompletarJogo() {
    const horasPorDia = parseFloat(document.getElementById('horasPorDia').value);
    const diasParaCompletar = Math.ceil(78 / horasPorDia);
    document.getElementById('resultado2').innerText = `Dias necessários para completar o jogo: ${diasParaCompletar}`;
}

function maiorNumero() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const result = num1 > num2 ? `O maior número é ${num1}` : `O maior número é ${num2}`;
    document.getElementById('resultado3').innerText = result;
}

function numeroPositivoOuNegativo() {
    const num = parseFloat(document.getElementById('numero').value);
    const result = num >= 0 ? `${num} é positivo` : `${num} é negativo`;
    document.getElementById('resultado4').innerText = result;
}

function somaParesEImpares() {
    let somaPares = 0;
    let somaImpares = 0;
    
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            somaPares += i;
        } else {
            somaImpares += i;
        }
    }
    
    document.getElementById('resultado5').innerText = `Soma dos números pares: ${somaPares}\nSoma dos números ímpares: ${somaImpares}`;
}

function somaDos100Termos() {
    let soma = 0;
    let detalhes = 'Cálculo da soma dos 100 primeiros termos:\n';

    for (let i = 1; i <= 100; i++) {
        soma += i;
        detalhes += i;
        if (i < 100) {
            detalhes += ' + ';
        }
    }
    
    detalhes += ` = ${soma}`;
    document.getElementById('resultado6').innerText = detalhes;
}

function converterFahrenheitParaCelsius() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    const celsius = (fahrenheit - 32) * 5 / 9;
    
    document.getElementById('resultado7').innerText = `${fahrenheit}°F é igual a ${celsius}°C`;
}

function obterNotasECalcularMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    
    calcularMediaSemestral(nota1, nota2);
}

function calcularMediaSemestral(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
    
    let resultado = `Média Semestral: ${media}`;
    if (media >= 6.0) {
        resultado += "\nPARABÉNS! Você foi aprovado!";
    } else {
        resultado += "\nVocê foi reprovado!";
    }
    
    document.getElementById('resultado8').innerText = resultado;
}
