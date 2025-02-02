const notasBase = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];
const notasBemols = ['C', 'D♭', 'D', 'E♭', 'E', 'F', 'G♭', 'G', 'A♭', 'A', 'B♭', 'B'];

const escalas = [
    {
        nome: 'Maior',
        intervalos: [0, 2, 4, 5, 7, 9, 11],
        acordes: [
            { tipo: '∆7',   extensoes: ['9',  '11',  '13'] }, // I
            { tipo: 'm7',   extensoes: ['9',  '11',  '13'] }, // II
            { tipo: 'm7',   extensoes: ['♭9', '11', '♭13'] }, // III
            { tipo: '∆7',   extensoes: ['9',  '♯11', '13'] }, // IV
            { tipo: '7',    extensoes: ['9',  '♭11', '13'] }, // V
            { tipo: 'm7',   extensoes: ['9',  '11', '♭13'] }, // VI
            { tipo: 'm7♭5', extensoes: ['♭9', '11', '♭13'] }  // VII
        ]
    },
    {
        nome: 'Menor Natural',
        intervalos: [0, 2, 3, 5, 7, 8, 10],
        acordes: [
            { tipo: 'm7',   extensoes: ['9',  '11', '♭13']  }, // I
            { tipo: 'm7♭5', extensoes: ['♭9', '11',  '♭13'] }, // II
            { tipo: '∆7',   extensoes: ['9',  '11', '13']  }, // III
            { tipo: 'm7',   extensoes: ['♭9',  '11', '♭13']  }, // IV
            { tipo: 'm7',   extensoes: ['♭9', '11',  '♭13'] }, // V
            { tipo: '∆7',   extensoes: ['9',  '11',  '13']  }, // VI
            { tipo: '7',    extensoes: ['9',  '♭11',  '13']  }  // VII
        ]
    },
    {
        nome: 'Menor Harmônica',
        intervalos: [0, 2, 3, 5, 7, 8, 11],
        acordes: [
            { tipo: 'm∆7',  extensoes: ['9',  '11',  '13']  }, // I
            { tipo: 'm7♭5', extensoes: ['♭9', '11',  '♭13'] }, // II
            { tipo: 'aug∆7', extensoes: ['9',  '♯11', '13']  }, // III
            { tipo: 'm7',   extensoes: ['9',  '11',  '13']  }, // IV
            { tipo: '7',    extensoes: ['♭9', '11',  '13']  }, // V
            { tipo: '∆7',   extensoes: ['9',  '♯11', '13']  }, // VI
            { tipo: 'dim7', extensoes: ['♭9', '11',  '♭13'] }  // VII
        ]
    },
    {
        nome: 'Menor Melódica',
        intervalos: [0, 2, 3, 5, 7, 9, 11],
        acordes: [
            { tipo: 'm∆7',  extensoes: ['9',  '11',  '13'] }, // I
            { tipo: 'm7',   extensoes: ['9',  '11',  '13'] }, // II
            { tipo: 'aug∆7', extensoes: ['9',  '♯11', '13'] }, // III
            { tipo: '7',    extensoes: ['9',  '11',  '13'] }, // IV
            { tipo: '7',    extensoes: ['♭9', '11',  '13'] }, // V
            { tipo: 'm7♭5', extensoes: ['9',  '11',  '13'] }, // VI
            { tipo: 'm7♭5', extensoes: ['9',  '11',  '13'] }  // VII
        ]
    }
];

function getEscala(tonica, acidente, escala) {
    const notas = acidente === '♭' ? notasBemols : notasBase;
    const indexTonica = notas.indexOf(tonica + acidente);
    return escala.intervalos.map(i => notas[(indexTonica + i) % 12]);
}

function formatarAcorde(nota, acidente, acorde) {
    // Transforma cada extensão em <sup>
    const extensoes = acorde.extensoes.map(ext => `<sup>${ext}</sup>`).join(' ');
    return `${nota}${acidente}${acorde.tipo} ${extensoes}`;
}

function generateTable() {
    const tonica = document.getElementById('noteSelect').value;
    const acidente = document.getElementById('accidentalSelect').value;
    const container = document.getElementById('tableContainer');
    container.innerHTML = '';

    const table = document.createElement('table');

    // Cabeçalho com nomes das escalas
    const headerRow = table.insertRow();
    headerRow.insertCell().textContent = "Graus ↑"; // Canto superior esquerdo
    escalas.forEach(escala => {
        headerRow.insertCell().textContent = escala.nome;
    });

    // Criar uma linha para cada grau (VII a I)
    for(let grau = 6; grau >= 0; grau--) {
        const row = table.insertRow();
        row.insertCell().textContent = `${grau + 1}° grau`; // Célula de título do grau

        // Preencher células para cada escala
        escalas.forEach(escala => {
            const notasEscala = getEscala(tonica, acidente, escala);
            const nota = notasEscala[grau];
            const acorde = escala.acordes[grau];
            const simbolo = formatarAcorde(nota[0], nota[1] || '', acorde);
            row.insertCell().innerHTML = simbolo; // Alterado para innerHTML
        });
    }

    container.appendChild(table);
}
