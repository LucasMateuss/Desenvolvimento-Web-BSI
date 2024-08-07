function showExercise(number) {
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => container.classList.remove('active'));
    document.getElementById(`exercise${number}`).classList.add('active');
}

function calcularDiferencaIngresso() {
    const valorProposta = parseFloat(document.getElementById('valorProposta').value);
    const diferenca = 170 - valorProposta;
    document.getElementById('resultado1').innerText = `R$${diferenca.toFixed(2)}`;
}

function calcularCurtidas() {
    const dias = parseInt(document.getElementById('dias').value);
    const curtidas = dias * 6 * 8;
    document.getElementById('resultado2').innerText = `Quantidade de curtidas: ${curtidas}`;
}

function calcularTweetsAno() {
    const tweetsPorAula = parseInt(document.getElementById('tweetsPorAula').value);
    const totalTweets = tweetsPorAula * 4 * 20;
    document.getElementById('resultado3').innerText = `Total de tweets em um ano: ${totalTweets}`;
}

function calcularNotaFinal() {
    const notaInicial = parseFloat(document.getElementById('notaInicial').value);
    const numeroTweets = parseInt(document.getElementById('numeroTweets').value);
    const totalTweets = numeroTweets * 4 * 20;
    const pontosPerdidos = Math.floor(totalTweets / 100);
    const notaFinal = notaInicial - pontosPerdidos;
    document.getElementById('resultado4').innerText = `Nota final: ${notaFinal.toFixed(1)}`;
}

function calcularTempoAcordado() {
    const sonoGaroto = parseInt(document.getElementById('sonoGaroto').value);
    const sonoGarota = parseInt(document.getElementById('sonoGarota').value);
    const filmeRomance = 90;
    const filmeInvestigacao = 110;
    const tempoAcordadoGaroto = (filmeRomance - sonoGaroto) + filmeInvestigacao;
    const tempoAcordadoGarota =  filmeRomance + (filmeInvestigacao - sonoGarota);

    document.getElementById('resultado5').innerText = `Tempo acordado do garoto: ${tempoAcordadoGaroto} minutos\nTempo acordado da garota: ${tempoAcordadoGarota} minutos`;
}

function calcularDiasParaCompletarJogo() {
    const horasPorDia = parseFloat(document.getElementById('horasPorDia').value);
    const diasParaCompletar = Math.ceil(78 / horasPorDia);
    document.getElementById('resultado6').innerText = `Dias necessários para completar o jogo: ${diasParaCompletar}`;
}

function calcularPrecoVenda() {
    const precoVenda = (150 + 350) / 250;
    document.getElementById('resultado7').innerText = `Preço de venda por saquinho: R$${precoVenda.toFixed(2)}`;
}

function maiorNumero() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const result = num1 > num2 ? `O maior número é ${num1}` : `O maior número é ${num2}`
    document.getElementById('resultado8').innerText = result;
}

function numeroPositivoOuNegativo() {
    const num = parseFloat(document.getElementById('numero').value);
    const result = num >= 0 ? `${num} é positivo` : `${num} é negativo`
    document.getElementById('resultado9').innerText = result;
}

function verificarSexo() {
    const sexo = document.getElementById('sexo').value.toLowerCase();
    let result = ""
    switch (sexo) {
        case "f":
            result = "Feminino"
            break;
        case "m":
            result = "Masculino"
            break;
        default:
            result = "Sexo Inválido."
    }
    document.getElementById('resultado10').innerText = result;
}

function verificarVogalOuConsoante() {
    const letra = document.getElementById('letra').value.toLowerCase();
    let result = "";
    switch (letra) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            result = "Vogal";
            break;
        default:
            result = "Consoante";
    }
    document.getElementById('resultado11').innerText = result;
}

function verificarDivisivelPorCinco() {
    const num = parseInt(document.getElementById('num').value);
    const result = num % 5 === 0 ? `${num} é divisível por 5` : `${num} não é divisível por 5`;
    document.getElementById('resultado12').innerText = result;
}

function verificaIntervalo() {
    const num = parseInt(document.getElementById('num13').value);
    const result = (num >= 20 && num <= 90) ? `${num} Está no intervalo` : `${num} Não está no intervalo`;
    document.getElementById('resultado13').innerText = result;
}

function verificaVotacao() {
    const ano = parseInt(document.getElementById('ano').value);
    const result = 2024 - ano >= 18 ? "Pode votar" : "Não pode votar"
    document.getElementById('resultado14').innerText = result;
}

function verificarMedia() {
    const n1 = parseFloat(document.getElementById('nota1').value);
    const n2 = parseFloat(document.getElementById('nota2').value);
    const media = (n1 + n2) / 2 
    const result = media >= 6 ? `Média: ${media}\nAprovado` : `Média: ${media}\nReprovado`
    document.getElementById('resultado15').innerText = result;
}

function calcularSalario() {
    const salarioHora1 = parseFloat(document.getElementById('salarioHora1').value);
    const salarioHora2 = parseFloat(document.getElementById('salarioHora2').value);
    const horasTrabalhadas1 = parseInt(document.getElementById('horasTrabalhadas1').value);
    const horasTrabalhadas2 = parseInt(document.getElementById('horasTrabalhadas2').value);
    const salario1 = salarioHora1 * horasTrabalhadas1;
    const salario2 = salarioHora2 * horasTrabalhadas2;
    const result = salario1 > salario2 ? `O primeiro professor recebe R$${salario1} e recebe mais` : `O segundo professor recebe R$${salario2} e recebe mais`;
    document.getElementById('resultado16').innerText = result;
}

function parOuImpar() {
    const num = parseFloat(document.getElementById('num17').value);
    const result = (num % 2 === 0) ? `${num} é par` : `${num} é ímpar`
    document.getElementById('resultado17').innerText = result;
}

function verificarMediaParcial() {
    const n1 = parseFloat(document.getElementById('notaParcial1').value);
    const n2 = parseFloat(document.getElementById('notaParcial2').value);
    const media = (n1 + n2) / 2;
    let result = ""
    if (media === 10) {
        result = "Aprovado com Distinção";
    } else if (media >= 7 && media < 10) {
        result = "Aprovado";
    } else {
        result = "Reprovado";
    }
    document.getElementById('resultado18').innerText = result;
}

function calculate() {
    const negativeNumbers = [];
    let positiveSum = 0;
    let positiveCount = 0;

    for (let i = 1; i <= 20; i++) {
        const value = parseInt(document.getElementById(`ex19N${i}`).value, 10);
        if (!isNaN(value)) {
            if (value < 0) {
                negativeNumbers.push(value);
            } else if (value > 0) {
                positiveSum += value;
                positiveCount++;
            }
        }
    }
    const negativeNumbersText = negativeNumbers.length > 0 ? `Números negativos: ${negativeNumbers.join(', ')}` : 'Nenhum número negativo';
    const averagePositive = positiveCount > 0 ? `Média dos números positivos: ${(positiveSum / positiveCount)}` : 'Nenhum número positivo';

    document.getElementById('resultado19').innerHTML = `
        ${negativeNumbersText}<br>
        ${averagePositive}
    `;
}
