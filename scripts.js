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
    'C♭': ['C♭', 'D♭', 'E♭♭', 'F♭', 'G♭','A♭♭','B♭♭'],
    'G♭': ['G♭', 'A♭', 'B♭♭', 'C♭', 'D♭','E♭♭', 'F♭'],
    'D♭': ['D♭', 'E♭',  'F♭', 'G♭', 'A♭','B♭♭', 'C♭'],
    'A♭': ['A♭', 'B♭',  'C♭', 'D♭', 'E♭', 'F♭', 'G♭'],
    'E♭': ['E♭',  'F',  'G♭', 'A♭', 'B♭', 'C♭', 'D♭'],
    'B♭': ['B♭',  'C',  'D♭', 'E♭',  'F', 'G♭', 'A♭'],
    'F' : [ 'F',  'G',  'A♭', 'B♭',  'C', 'D♭', 'E♭'],
    'C' : [ 'C',  'D',  'E♭',  'F',  'G', 'A♭', 'B♭'],
    'G' : [ 'G',  'A',  'B♭',  'C',  'D', 'E♭',  'F'],
    'D' : [ 'D',  'E',   'F',  'G',  'A', 'B♭',  'C'],
    'A' : [ 'A',  'B',   'C',  'D',  'E',  'F',  'G'],
    'E' : [ 'E', 'F♯',   'G',  'A',  'B',  'C',  'D'],
    'B' : [ 'B', 'C♯',   'D',  'E', 'F♯',  'G',  'A'],
    'F♯': ['F♯', 'G♯',   'A',  'B', 'C♯',  'D',  'E'],
    'C♯': ['C♯', 'D♯',   'E', 'F♯', 'G♯',  'A',  'B']
};

const escalasHarmonicas = {
    'C♭': ['C♭', 'D♭', 'E♭♭', 'F♭', 'G♭','A♭♭', 'B♭'],
    'G♭': ['G♭', 'A♭', 'B♭♭', 'C♭', 'D♭','E♭♭',  'F'],
    'D♭': ['D♭', 'E♭',  'F♭', 'G♭', 'A♭','B♭♭',  'C'],
    'A♭': ['A♭', 'B♭',  'C♭', 'D♭', 'E♭', 'F♭',  'G'],
    'E♭': ['E♭',  'F',  'G♭', 'A♭', 'B♭', 'C♭',  'D'],
    'B♭': ['B♭',  'C',  'D♭', 'E♭',  'F', 'G♭',  'A'],
    'F' : [ 'F',  'G',  'A♭', 'B♭',  'C', 'D♭',  'E'],
    'C' : [ 'C',  'D',  'E♭',  'F',  'G', 'A♭',  'B'],
    'G' : [ 'G',  'A',  'B♭',  'C',  'D', 'E♭', 'F♯'],
    'D' : [ 'D',  'E',   'F',  'G',  'A', 'B♭', 'C♯'],
    'A' : [ 'A',  'B',   'C',  'D',  'E',  'F', 'G♯'],
    'E' : [ 'E', 'F♯',   'G',  'A',  'B',  'C', 'D♯'],
    'B' : [ 'B', 'C♯',   'D',  'E', 'F♯',  'G', 'A♯'],
    'F♯': ['F♯', 'G♯',   'A',  'B', 'C♯',  'D', 'E♯'],
    'C♯': ['C♯', 'D♯',   'E', 'F♯', 'G♯',  'A', 'B♯']
};

const escalasMelodicas = {
    'C♭': ['C♭', 'D♭', 'E♭♭', 'F♭', 'G♭', 'A♭', 'B♭'],
    'G♭': ['G♭', 'A♭', 'B♭♭', 'C♭', 'D♭', 'E♭',  'F'],
    'D♭': ['D♭', 'E♭',  'F♭', 'G♭', 'A♭', 'B♭',  'C'],
    'A♭': ['A♭', 'B♭',  'C♭', 'D♭', 'E♭',  'F',  'G'],
    'E♭': ['E♭',  'F',  'G♭', 'A♭', 'B♭',  'C',  'D'],
    'B♭': ['B♭',  'C',  'D♭', 'E♭',  'F',  'G',  'A'],
    'F' : [ 'F',  'G',  'A♭', 'B♭',  'C',  'D',  'E'],
    'C' : [ 'C',  'D',  'E♭',  'F',  'G',  'A',  'B'],
    'G' : [ 'G',  'A',  'B♭',  'C',  'D',  'E', 'F♯'],
    'D' : [ 'D',  'E',   'F',  'G',  'A',  'B', 'C♯'],
    'A' : [ 'A',  'B',   'C',  'D',  'E', 'F♯', 'G♯'],
    'E' : [ 'E', 'F♯',   'G',  'A',  'B', 'C♯', 'D♯'],
    'B' : [ 'B', 'C♯',   'D',  'E', 'F♯', 'G♯', 'A♯'],
    'F♯': ['F♯', 'G♯',   'A',  'B', 'C♯', 'D♯', 'E♯'],
    'C♯': ['C♯', 'D♯',   'E', 'F♯', 'G♯', 'A♯', 'B♯']
};

const tiposDeAcordes = [
    { name: 'I',   typeMajor: '7M',   typeMinor: 'm7',   typeHarmonica: 'm7M',  typeMelodica: 'm7M',  },
    { name: 'II',  typeMajor: 'm7',   typeMinor: 'm7♭5', typeHarmonica: 'm7♭5', typeMelodica: 'm7',   },
    { name: 'III', typeMajor: 'm7',   typeMinor: '7M',   typeHarmonica: '7M♯5', typeMelodica: '7M♯5', },
    { name: 'IV',  typeMajor: '7M',   typeMinor: 'm7',   typeHarmonica: 'm7',   typeMelodica: '7',    },
    { name: 'V',   typeMajor: '7',    typeMinor: 'm7',   typeHarmonica: '7',    typeMelodica: '7',    },
    { name: 'VI',  typeMajor: 'm7',   typeMinor: '7M',   typeHarmonica: '7M',   typeMelodica: 'm7♭5', },
    { name: 'VII', typeMajor: 'm7♭5', typeMinor: '7',    typeHarmonica: 'dim7', typeMelodica: 'm7♭5', }
];

function gerarTabela() {
    const escalaSelecionada = document.getElementById('escalaSelect').value;
    const notas = {
        maior: escalasMaiores[escalaSelecionada],
        menor: escalasMenores[escalaSelecionada],
        harmonica: escalasHarmonicas[escalaSelecionada],
        melodica: escalasMelodicas[escalaSelecionada]
    };

    // Verificação de erros
    if (!notas.maior || !notas.menor || !notas.harmonica || !notas.melodica) {
        tabelaContainer.innerHTML = "<p>Escala não encontrada ou incompleta.</p>";
        return;
    }

    // Criar tabela
    const tabela = document.createElement('table');

    // Cabeçalho com novas colunas
    const headerRow = tabela.insertRow();
    ['', 'Maior', 'Menor Natural', 'Menor Harmônica', 'Menor Melódica'].forEach(texto => {
        headerRow.insertCell().textContent = texto;
    });

    // Preencher linhas
    for (let i = 0; i < notas.maior.length; i++) {
        const row = tabela.insertRow();
        const tipo = tiposDeAcordes[i];

        // Adicionar células para cada tipo
        [
            tipo.name,
            `${notas.maior[i]}${tipo.typeMajor}`,
            `${notas.menor[i]}${tipo.typeMinor}`,
            `${notas.harmonica[i]}${tipo.typeHarmonica}`,
            `${notas.melodica[i]}${tipo.typeMelodica}`
        ].forEach((texto, idx) => {
            row.insertCell().textContent = texto;
        });
    }

    tabelaContainer.innerHTML = '';
    tabelaContainer.appendChild(tabela);
}
