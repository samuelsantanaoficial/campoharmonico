const ionian = {
    'C♭': ['C♭', 'D♭', 'E♭', 'F♭', 'G♭', 'A♭', 'B♭'],
    'G♭': ['G♭', 'A♭', 'B♭', 'C♭', 'D♭', 'E♭',  'F'],
    'D♭': ['D♭', 'E♭',  'F', 'G♭', 'A♭', 'B♭',  'C'],
    'A♭': ['A♭', 'B♭',  'C', 'D♭', 'E♭',  'F',  'G'],
    'E♭': ['E♭',  'F',  'G', 'A♭', 'B♭',  'C',  'D'],
    'B♭': ['B♭',  'C',  'D', 'E♭',  'F',  'G',  'A'],
    'F' : [ 'F',  'G',  'A', 'B♭',  'C',  'D',  'E'],
    'C' : [ 'C',  'D',  'E',  'F',  'G',  'A',  'B'],
    'G' : [ 'G',  'A',  'B',  'C',  'D',  'E', 'F♯'],
    'D' : [ 'D',  'E', 'F♯',  'G',  'A',  'B', 'C♯'],
    'A' : [ 'A',  'B', 'C♯',  'D',  'E', 'F♯', 'G♯'],
    'E' : [ 'E', 'F♯', 'G♯',  'A',  'B', 'C♯', 'D♯'],
    'B' : [ 'B', 'C♯', 'D♯',  'E', 'F♯', 'G♯', 'A♯'],
    'F♯': ['F♯', 'G♯', 'A♯',  'B', 'C♯', 'D♯', 'E♯'],
    'C♯': ['C♯', 'D♯', 'E♯', 'F♯', 'G♯', 'A♯', 'B♯']
};

const dorian = {
    'C♭': ['C♭', 'D♭', 'E♭♭', 'F♭', 'G♭', 'A♭', 'B♭♭'],
    'G♭': ['G♭', 'A♭', 'B♭♭', 'C♭', 'D♭', 'E♭',  'F♭'],
    'D♭': ['D♭', 'E♭',  'F♭', 'G♭', 'A♭', 'B♭',  'C♭'],
    'A♭': ['A♭', 'B♭',  'C♭', 'D♭', 'E♭',  'F',  'G♭'],
    'E♭': ['E♭',  'F',  'G♭', 'A♭', 'B♭',  'C',  'D♭'],
    'B♭': ['B♭',  'C',  'D♭', 'E♭',  'F',  'G',  'A♭'],
    'F' : [ 'F',  'G',  'A♭', 'B♭',  'C',  'D',  'E♭'],
    'C' : [ 'C',  'D',  'E♭',  'F',  'G',  'A',  'B♭'],
    'G' : [ 'G',  'A',  'B♭',  'C',  'D',  'E',   'F'],
    'D' : [ 'D',  'E',   'F',  'G',  'A',  'B',   'C'],
    'A' : [ 'A',  'B',   'C',  'D',  'E', 'F♯',   'G'],
    'E' : [ 'E', 'F♯',   'G',  'A',  'B', 'C♯',   'D'],
    'B' : [ 'B', 'C♯',   'D',  'E', 'F♯', 'G♯',   'A'],
    'F♯': ['F♯', 'G♯',   'A',  'B', 'C♯', 'D♯',   'E'],
    'C♯': ['C♯', 'D♯',   'E', 'F♯', 'G♯', 'A♯',   'B']
};

const phrygian = {
    'C♭': ['C♭', 'D♭♭', 'E♭♭', 'F♭', 'G♭', 'A♭♭', 'B♭♭'],
    'G♭': ['G♭', 'A♭♭', 'B♭♭', 'C♭', 'D♭', 'E♭♭',  'F♭'],
    'D♭': ['D♭', 'E♭♭',  'F♭', 'G♭', 'A♭', 'B♭♭',  'C♭'],
    'A♭': ['A♭', 'B♭♭',  'C♭', 'D♭', 'E♭',  'F♭',  'G♭'],
    'E♭': ['E♭',  'F♭',  'G♭', 'A♭', 'B♭',  'C♭',  'D♭'],
    'B♭': ['B♭',  'C♭',  'D♭', 'E♭',  'F',  'G♭',  'A♭'],
    'F' : [ 'F',  'G♭',  'A♭', 'B♭',  'C',  'D♭',  'E♭'],
    'C' : [ 'C',  'D♭',  'E♭',  'F',  'G',  'A♭',  'B♭'],
    'G' : [ 'G',  'A♭',  'B♭',  'C',  'D',  'E♭',   'F'],
    'D' : [ 'D',  'E♭',   'F',  'G',  'A',  'B♭',   'C'],
    'A' : [ 'A',  'B♭',   'C',  'D',  'E',   'F',   'G'],
    'E' : [ 'E',   'F',   'G',  'A',  'B',   'C',   'D'],
    'B' : [ 'B',   'C',   'D',  'E', 'F♯',   'G',   'A'],
    'F♯': ['F♯',   'G',   'A',  'B', 'C♯',   'D',   'E'],
    'C♯': ['C♯',   'D',   'E', 'F♯', 'G♯',   'A',   'B']
};

const lydian = {
    'C♭': ['C♭', 'D♭', 'E♭',   'F', 'G♭', 'A♭', 'B♭'],
    'G♭': ['G♭', 'A♭', 'B♭',   'C', 'D♭', 'E♭',  'F'],
    'D♭': ['D♭', 'E♭',  'F',   'G', 'A♭', 'B♭',  'C'],
    'A♭': ['A♭', 'B♭',  'C',   'D', 'E♭',  'F',  'G'],
    'E♭': ['E♭',  'F',  'G',   'A', 'B♭',  'C',  'D'],
    'B♭': ['B♭',  'C',  'D',   'E',  'F',  'G',  'A'],
    'F' : [ 'F',  'G',  'A',   'B',  'C',  'D',  'E'],
    'C' : [ 'C',  'D',  'E',  'F♯',  'G',  'A',  'B'],
    'G' : [ 'G',  'A',  'B',  'C♯',  'D',  'E', 'F♯'],
    'D' : [ 'D',  'E', 'F♯',  'G♯',  'A',  'B', 'C♯'],
    'A' : [ 'A',  'B', 'C♯',  'D♯',  'E', 'F♯', 'G♯'],
    'E' : [ 'E', 'F♯', 'G♯',  'A♯',  'B', 'C♯', 'D♯'],
    'B' : [ 'B', 'C♯', 'D♯',  'E♯', 'F♯', 'G♯', 'A♯'],
    'F♯': ['F♯', 'G♯', 'A♯',  'B♯', 'C♯', 'D♯', 'E♯'],
    'C♯': ['C♯', 'D♯', 'E♯', 'F♯♯', 'G♯', 'A♯', 'B♯']
};

const mixolydian = {
    'C♭': ['C♭', 'D♭', 'E♭', 'F♭', 'G♭', 'A♭', 'B♭♭'],
    'G♭': ['G♭', 'A♭', 'B♭', 'C♭', 'D♭', 'E♭',  'F♭'],
    'D♭': ['D♭', 'E♭',  'F', 'G♭', 'A♭', 'B♭',  'C♭'],
    'A♭': ['A♭', 'B♭',  'C', 'D♭', 'E♭',  'F',  'G♭'],
    'E♭': ['E♭',  'F',  'G', 'A♭', 'B♭',  'C',  'D♭'],
    'B♭': ['B♭',  'C',  'D', 'E♭',  'F',  'G',  'A♭'],
    'F' : [ 'F',  'G',  'A', 'B♭',  'C',  'D',  'E♭'],
    'C' : [ 'C',  'D',  'E',  'F',  'G',  'A',  'B♭'],
    'G' : [ 'G',  'A',  'B',  'C',  'D',  'E',   'F'],
    'D' : [ 'D',  'E', 'F♯',  'G',  'A',  'B',   'C'],
    'A' : [ 'A',  'B', 'C♯',  'D',  'E', 'F♯',   'G'],
    'E' : [ 'E', 'F♯', 'G♯',  'A',  'B', 'C♯',   'D'],
    'B' : [ 'B', 'C♯', 'D♯',  'E', 'F♯', 'G♯',   'A'],
    'F♯': ['F♯', 'G♯', 'A♯',  'B', 'C♯', 'D♯',   'E'],
    'C♯': ['C♯', 'D♯', 'E♯', 'F♯', 'G♯', 'A♯',   'B']
};

const aeolian = {
    'C♭': ['C♭', 'D♭', 'E♭♭', 'F♭', 'G♭', 'A♭♭', 'B♭♭'],
    'G♭': ['G♭', 'A♭', 'B♭♭', 'C♭', 'D♭', 'E♭♭',  'F♭'],
    'D♭': ['D♭', 'E♭',  'F♭', 'G♭', 'A♭', 'B♭♭',  'C♭'],
    'A♭': ['A♭', 'B♭',  'C♭', 'D♭', 'E♭',  'F♭',  'G♭'],
    'E♭': ['E♭',  'F',  'G♭', 'A♭', 'B♭',  'C♭',  'D♭'],
    'B♭': ['B♭',  'C',  'D♭', 'E♭',  'F',  'G♭',  'A♭'],
    'F' : [ 'F',  'G',  'A♭', 'B♭',  'C',  'D♭',  'E♭'],
    'C' : [ 'C',  'D',  'E♭',  'F',  'G',  'A♭',  'B♭'],
    'G' : [ 'G',  'A',  'B♭',  'C',  'D',  'E♭',   'F'],
    'D' : [ 'D',  'E',   'F',  'G',  'A',  'B♭',   'C'],
    'A' : [ 'A',  'B',   'C',  'D',  'E',   'F',   'G'],
    'E' : [ 'E', 'F♯',   'G',  'A',  'B',   'C',   'D'],
    'B' : [ 'B', 'C♯',   'D',  'E', 'F♯',   'G',   'A'],
    'F♯': ['F♯', 'G♯',   'A',  'B', 'C♯',   'D',   'E'],
    'C♯': ['C♯', 'D♯',   'E', 'F♯', 'G♯',   'A',   'B']
};

    const locrian = {
        'C♭': ['C♭', 'D♭♭', 'E♭♭', 'F♭', 'G♭♭', 'A♭♭', 'B♭♭'],
        'G♭': ['G♭', 'A♭♭', 'B♭♭', 'C♭', 'D♭♭', 'E♭♭',  'F♭'],
        'D♭': ['D♭', 'E♭♭',  'F♭', 'G♭', 'A♭♭', 'B♭♭',  'C♭'],
        'A♭': ['A♭', 'B♭♭',  'C♭', 'D♭', 'E♭♭',  'F♭',  'G♭'],
        'E♭': ['E♭',  'F♭',  'G♭', 'A♭', 'B♭♭',  'C♭',  'D♭'],
        'B♭': ['B♭',  'C♭',  'D♭', 'E♭',  'F♭',  'G♭',  'A♭'],
        'F' : [ 'F',  'G♭',  'A♭', 'B♭',  'C♭',  'D♭',  'E♭'],
        'C' : [ 'C',  'D♭',  'E♭',  'F',  'G♭',  'A♭',  'B♭'],
        'G' : [ 'G',  'A♭',  'B♭',  'C',  'D♭',  'E♭',   'F'],
        'D' : [ 'D',  'E♭',   'F',  'G',  'A♭',  'B♭',   'C'],
        'A' : [ 'A',  'B♭',   'C',  'D',  'E♭',   'F',   'G'],
        'E' : [ 'E',   'F',   'G',  'A',  'B♭',   'C',   'D'],
        'B' : [ 'B',   'C',   'D',  'E',   'F',   'G',   'A'],
        'F♯': ['F♯',   'G',   'A',  'B',   'C',   'D',   'E'],
        'C♯': ['C♯',   'D',   'E', 'F♯',   'G',   'A',   'B']
    };

const tiposDeAcordes = [
    { name: 'I',   typeIonian: '7M (9 11 13)',     typeDorian: 'm7 (9 11 13)',     typePhrygian: 'm7 (♭9 11 ♭13)',   typeLydian: '7M (9 ♯11 13)',    typeMixolydian: '7 (9 11 13)',      typeAeolian: 'm7 (9 11 ♭13)',    typeLocrian: 'm7♭5 (♭9 11 ♭13)', },
    { name: 'II',  typeIonian: 'm7 (9 11 13)',     typeDorian: 'm7 (♭9 11 ♭13)',   typePhrygian: '7M (9 ♯11 13)',    typeLydian: '7 (9 11 13)',      typeMixolydian: 'm7 (9 11 ♭13)',    typeAeolian: 'm7♭5 (♭9 11 ♭13)', typeLocrian: '7M (9 11 13)',     },
    { name: 'III', typeIonian: 'm7 (♭9 11 ♭13)',   typeDorian: '7M (9 ♯11 13)',    typePhrygian: '7 (9 11 13)',      typeLydian: 'm7 (9 11 ♭13)',    typeMixolydian: 'm7♭5 (♭9 11 ♭13)', typeAeolian: '7M (9 11 13)',     typeLocrian: 'm7 (9 11 13)',     },
    { name: 'IV',  typeIonian: '7M (9 ♯11 13)',    typeDorian: '7 (9 11 13)',      typePhrygian: 'm7 (9 11 ♭13)',    typeLydian: 'm7♭5 (♭9 11 ♭13)', typeMixolydian: '7M (9 11 13)',     typeAeolian: 'm7 (9 11 13)',     typeLocrian: 'm7 (♭9 11 ♭13)',   },
    { name: 'V',   typeIonian: '7 (9 11 13)',      typeDorian: 'm7 (9 11 ♭13)',    typePhrygian: 'm7♭5 (♭9 11 ♭13)', typeLydian: '7M (9 11 13)',     typeMixolydian: 'm7 (9 11 13)',     typeAeolian: 'm7 (♭9 11 ♭13)',   typeLocrian: '7M (9 ♯11 13)',    },
    { name: 'VI',  typeIonian: 'm7 (9 11 ♭13)',    typeDorian: 'm7♭5 (♭9 11 ♭13)', typePhrygian: '7M (9 11 13)',     typeLydian: 'm7 (9 11 13)',     typeMixolydian: 'm7 (♭9 11 ♭13)',   typeAeolian: '7M (9 ♯11 13)',    typeLocrian: '7 (9 11 13)',      },
    { name: 'VII', typeIonian: 'm7♭5 (♭9 11 ♭13)', typeDorian: '7M (9 11 13)',     typePhrygian: 'm7 (9 11 13)',     typeLydian: 'm7 (♭9 11 ♭13)',   typeMixolydian: '7M (9 ♯11 13)',    typeAeolian: '7 (9 11 13)',      typeLocrian: 'm7 (9 11 ♭13)',    }
    ];

function gerarTabela() {
    const escalaSelecionada = document.getElementById('escalaSelect').value;
    const notas = {
        ionian: ionian[escalaSelecionada] || [],
        dorian: dorian[escalaSelecionada] || [],
        phrygian: phrygian[escalaSelecionada] || [],
        lydian: lydian[escalaSelecionada] || [],
        mixolydian: mixolydian[escalaSelecionada] || [],
        aeolian: aeolian[escalaSelecionada] || [],
        locrian: locrian[escalaSelecionada] || []
    };

    // Verificação de erros: se os dados essenciais estiverem vazios, exibe mensagem
    if (notas.ionian.length === 0 || notas.aeolian.length === 0) {
        document.getElementById('tabelaContainer').innerHTML = "<p class='text-danger'>Escala não encontrada ou incompleta.</p>";
        return;
    }

    // Criar tabela com classes do Bootstrap
    const tabela = document.createElement('table');
    tabela.classList.add('table', 'table-striped', 'table-bordered', 'text-start', 'mt-3');

    // Cabeçalho
    const thead = tabela.createTHead();
    const headerRow = thead.insertRow();
    ['', 'Jônico', 'Dórico', 'Frígio', 'Lídio', 'Mixolídio', 'Eólio', 'Lócrio'].forEach(texto => {
        const th = document.createElement('th');
        th.textContent = texto;
        th.classList.add('align-middle');
        headerRow.appendChild(th);
    });

    // Corpo da tabela
    const tbody = tabela.createTBody();
    for (let i = 0; i < notas.ionian.length; i++) {
        const row = tbody.insertRow();
        const tipo = tiposDeAcordes[i];

        const celulas = [
            tipo.name,
            `${notas.ionian[i]}${tipo.typeIonian}`,
            `${notas.dorian[i] || ''}${tipo.typeDorian}`,
            `${notas.phrygian[i] || ''}${tipo.typePhrygian}`,
            `${notas.lydian[i] || ''}${tipo.typeLydian}`,
            `${notas.mixolydian[i] || ''}${tipo.typeMixolydian}`,
            `${notas.aeolian[i]}${tipo.typeAeolian}`,
            `${notas.locrian[i] || ''}${tipo.typeLocrian}`
        ];

        celulas.forEach(texto => {
            const td = row.insertCell();
            td.textContent = texto;
            td.classList.add('align-middle');
        });
    }

    document.getElementById('tabelaContainer').innerHTML = '';
    document.getElementById('tabelaContainer').appendChild(tabela);
}
