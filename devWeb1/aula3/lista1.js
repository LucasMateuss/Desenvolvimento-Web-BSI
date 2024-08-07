// 1. Calcular a diferença entre o valor pago pelo ingresso e a proposta recebida
function calcularDiferencaIngresso(valorPago, valorProposta) {
    return valorPago - valorProposta;
}

// 2. Calcular a quantidade de "curtir" recebidos em uma quantidade de dias
function calcularCurtidas(dias) {
    const linksPorDia = 6;
    const curtidasPorLink = 8;
    return dias * linksPorDia * curtidasPorLink;
}

// 3. Calcular quantas vezes o aluno desatento irá twittar em um ano
function calcularTweetsAno(tweetsPorAula) {
    const bimestres = 4;
    const aulasPorBimestre = 20;
    return tweetsPorAula * bimestres * aulasPorBimestre;
}

// 4. Calcular a nota final do aluno considerando a perda de pontos
function calcularNotaFinal(notaInicial, numeroTweets) {
    const tweetsPorPonto = 100;
    const pontosPerdidos = Math.floor(numeroTweets / tweetsPorPonto);
    return notaInicial - pontosPerdidos;
}

// 5. Calcular o tempo acordado assistindo os filmes
function calcularTempoAcordado(tempoSonoGarotoRomantico, tempoSonoGarotaRomantico, 
                                tempoSonoGarotoInvestigacao, tempoSonoGarotaInvestigacao) {
    const tempoTotalGaroto = (90 - tempoSonoGarotoRomantico) + (110 - tempoSonoGarotoInvestigacao);
    const tempoTotalGarota = (90 - tempoSonoGarotaRomantico) + (110 - tempoSonoGarotaInvestigacao);
    return { tempoTotalGaroto, tempoTotalGarota };
}

// 6. Calcular quantos dias o gamer vai demorar para completar o jogo
function calcularDiasParaCompletarJogo(horasPorDia) {
    const horasParaCompletarJogo = 78;
    return Math.ceil(horasParaCompletarJogo / horasPorDia);
}

// 7. Calcular o valor de venda para obter o lucro desejado
function calcularPrecoVenda(lucroDesejado, custoTotal, quantidadeSaquinhos) {
    return (custoTotal + lucroDesejado) / quantidadeSaquinhos;
}

// Exemplos de uso das funções

// 1. Ingresso
const valorPago = 170;
const valorProposta = 150;
console.log(`Diferença: R$${calcularDiferencaIngresso(valorPago, valorProposta)}`);

// 2. Curtidas
const dias = 10;
console.log(`Quantidade de curtidas: ${calcularCurtidas(dias)}`);

// 3. Tweets
const tweetsPorAula = 30;
console.log(`Total de tweets em um ano: ${calcularTweetsAno(tweetsPorAula)}`);

// 4. Nota Final
const notaInicial = 8;
const numeroTweets = 300;
console.log(`Nota final: ${calcularNotaFinal(notaInicial, numeroTweets)}`);

// 5. Tempo Acordado
const tempoSonoGarotoRomantico = 40;
const tempoSonoGarotaRomantico = 20;
const tempoSonoGarotoInvestigacao = 50;
const tempoSonoGarotaInvestigacao = 60;
const temposAcordados = calcularTempoAcordado(tempoSonoGarotoRomantico, tempoSonoGarotaRomantico, 
                                               tempoSonoGarotoInvestigacao, tempoSonoGarotaInvestigacao);
console.log(`Tempo acordado do garoto: ${temposAcordados.tempoTotalGaroto} minutos`);
console.log(`Tempo acordado da garota: ${temposAcordados.tempoTotalGarota} minutos`);

// 6. Dias para completar o jogo
const horasPorDia = 2;
console.log(`Dias necessários para completar o jogo: ${calcularDiasParaCompletarJogo(horasPorDia)}`);

// 7. Preço de venda da pipoca
const custoTotal = 150;
const lucroDesejado = 350;
const quantidadeSaquinhos = 250;
console.log(`Preço de venda por saquinho: R$${calcularPrecoVenda(lucroDesejado, custoTotal, quantidadeSaquinhos).toFixed(2)}`);
