const escalasMaiores = {
    'C♭': ['C♭','D♭','E♭','F♭','G♭','A♭','B♭'],
    'G♭': ['G♭','A♭','B♭','C♭','D♭','E♭', 'F'],
    'D♭': ['D♭','E♭', 'F','G♭','A♭','B♭', 'C'],
    'A♭': ['A♭','B♭', 'C','D♭','E♭', 'F', 'G'],
    'E♭': ['E♭', 'F', 'G','A♭','B♭', 'C', 'D'],
    'B♭': ['B♭', 'C', 'D','E♭', 'F', 'G', 'A'],
    'F' : [ 'F', 'G', 'A','B♭', 'C', 'D', 'E'],
    'C' : [ 'C', 'D', 'E', 'F', 'G', 'A', 'B'],
    'G' : [ 'G', 'A', 'B', 'C', 'D', 'E','F♯'],
    'D' : [ 'D', 'E','F♯', 'G', 'A', 'B','C♯'],
    'A' : [ 'A', 'B','C♯', 'D', 'E','F♯','G♯'],
    'E' : [ 'E','F♯','G♯', 'A', 'B','C♯','D♯'],
    'B' : [ 'B','C♯','D♯', 'E','F♯','G♯','A♯'],
    'F♯': ['F♯','G♯','A♯', 'B','C♯','D♯','E♯'],
    'C♯': ['C♯','D♯','E♯','F♯','G♯','A♯','B♯']
};

const escalasMenores = {
    'C♭': [ 'B','C♯', 'D', 'E','F♯', 'G', 'A'],
    'G♭': ['F♯','G♯', 'A', 'B','C♯', 'D', 'E'],
    'D♭': ['C♯','D♯', 'E','F♯','G♯', 'A', 'B'],
    'A♭': ['A♭','B♭','C♭','D♭','E♭','F♭','G♭'],
    'E♭': ['E♭', 'F','G♭','A♭','B♭','C♭','D♭'],
    'B♭': ['B♭', 'C','D♭','E♭', 'F','G♭','A♭'],
    'F' : [ 'F', 'G','A♭','B♭', 'C','D♭','E♭'],
    'C' : [ 'C', 'D','E♭', 'F', 'G','A♭','B♭'],
    'G' : [ 'G', 'A','B♭', 'C', 'D','E♭', 'F'],
    'D' : [ 'D', 'E', 'F', 'G', 'A','B♭', 'C'],
    'A' : [ 'A', 'B', 'C', 'D', 'E', 'F', 'G'],
    'E' : [ 'E','F♯', 'G', 'A', 'B', 'C', 'D'],
    'B' : [ 'B','C♯', 'D', 'E','F♯', 'G', 'A'],
    'F♯': ['F♯','G♯', 'A', 'B','C♯', 'D', 'E'],
    'C♯': ['C♯','D♯', 'E','F♯','G♯', 'A', 'B'],
};

const tiposDeAcordes = [
    { name: 'I',   typeMajor: '∆7',   typeMinor: 'm7',   },
    { name: 'II',  typeMajor: 'm7',   typeMinor: 'm7♭5', },
    { name: 'III', typeMajor: 'm7',   typeMinor: '∆7',   },
    { name: 'IV',  typeMajor: '∆7',   typeMinor: 'm7',   },
    { name: 'V',   typeMajor: '7',    typeMinor: 'm7',   },
    { name: 'VI',  typeMajor: 'm7',   typeMinor: '∆7',   },
    { name: 'VII', typeMajor: 'm7♭5', typeMinor: '7',    }
];

function gerarTabela() {
    const escalaSelecionada = document.getElementById('escalaSelect').value;
    const notasDaEscalaMaior = escalasMaiores[escalaSelecionada];
    const notasDaEscalaMenor = escalasMenores[escalaSelecionada];
    const tabelaContainer = document.getElementById('tabelaContainer');

    if (!notasDaEscalaMaior || !notasDaEscalaMenor) {
        tabelaContainer.innerHTML = "<p>Escala não encontrada.</p>";
        return;
    }

    // Criar a tabela
    const tabela = document.createElement('table');
    const linhaCabecalho = tabela.insertRow();

    // Cabeçalhos da tabela
    linhaCabecalho.insertCell().textContent = "Grau";
    linhaCabecalho.insertCell().textContent = "Maior";
    linhaCabecalho.insertCell().textContent = "Menor";

    // Preencher a tabela com os dados
    for (let i = 0; i < notasDaEscalaMaior.length; i++) {
        const linha = tabela.insertRow();
        const grau = tiposDeAcordes[i].name;
        const typeMajor = tiposDeAcordes[i].typeMajor;
        const typeMinor = tiposDeAcordes[i].typeMinor;

        // Notas das escalas maior e menor
        const notaMaior = notasDaEscalaMaior[i];
        const notaMenor = notasDaEscalaMenor[i];

        // Acorde maior e menor
        const acordeMaior = `${notaMaior}${typeMajor}`;
        const acordeMenor = `${notaMenor}${typeMinor}`;

        // Inserir células na linha
        linha.insertCell().textContent = grau;
        linha.insertCell().textContent = acordeMaior;
        linha.insertCell().textContent = acordeMenor;
    }

    // Limpar o container e adicionar a tabela
    tabelaContainer.innerHTML = "";
    tabelaContainer.appendChild(tabela);
}
