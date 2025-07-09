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
    'C♭': ['C♭', 'D♭',  'E𝄫', 'F♭', 'G♭', 'A♭',  'B𝄫'],
    'G♭': ['G♭', 'A♭',  'B𝄫', 'C♭', 'D♭', 'E♭',  'F♭'],
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
    'C♭': ['C♭',  'D𝄫',  'E𝄫', 'F♭', 'G♭',  'A𝄫',  'B𝄫'],
    'G♭': ['G♭',  'A𝄫',  'B𝄫', 'C♭', 'D♭',  'E𝄫',  'F♭'],
    'D♭': ['D♭',  'E𝄫',  'F♭', 'G♭', 'A♭',  'B𝄫',  'C♭'],
    'A♭': ['A♭',  'B𝄫',  'C♭', 'D♭', 'E♭',  'F♭',  'G♭'],
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
    'C♯': ['C♯', 'D♯', 'E♯',  'F𝄪', 'G♯', 'A♯', 'B♯']
};

const mixolydian = {
    'C♭': ['C♭', 'D♭', 'E♭', 'F♭', 'G♭', 'A♭',  'B𝄫'],
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
    'C♭': ['C♭', 'D♭',  'E𝄫', 'F♭', 'G♭',  'A𝄫',  'B𝄫'],
    'G♭': ['G♭', 'A♭',  'B𝄫', 'C♭', 'D♭',  'E𝄫',  'F♭'],
    'D♭': ['D♭', 'E♭',  'F♭', 'G♭', 'A♭',  'B𝄫',  'C♭'],
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
    'C♭': ['C♭',  'D𝄫',  'E𝄫', 'F♭',  'G𝄫',  'A𝄫',  'B𝄫'],
    'G♭': ['G♭',  'A𝄫',  'B𝄫', 'C♭',  'D𝄫',  'E𝄫',  'F♭'],
    'D♭': ['D♭',  'E𝄫',  'F♭', 'G♭',  'A𝄫',  'B𝄫',  'C♭'],
    'A♭': ['A♭',  'B𝄫',  'C♭', 'D♭',  'E𝄫',  'F♭',  'G♭'],
    'E♭': ['E♭',  'F♭',  'G♭', 'A♭',  'B𝄫',  'C♭',  'D♭'],
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

const ionianSharp5 = {
    'C♭': ['C♭', 'D♭', 'E♭', 'F♭',   'G', 'A♭', 'B♭'],
    'G♭': ['G♭', 'A♭', 'B♭', 'C♭',   'D', 'E♭',  'F'],
    'D♭': ['D♭', 'E♭',  'F', 'G♭',   'A', 'B♭',  'C'],
    'A♭': ['A♭', 'B♭',  'C', 'D♭',   'E',  'F',  'G'],
    'E♭': ['E♭',  'F',  'G', 'A♭',   'B',  'C',  'D'],
    'B♭': ['B♭',  'C',  'D', 'E♭',  'F♯',  'G',  'A'],
    'F' : [ 'F',  'G',  'A', 'B♭',  'C♯',  'D',  'E'],
    'C' : [ 'C',  'D',  'E',  'F',  'G♯',  'A',  'B'],
    'G' : [ 'G',  'A',  'B',  'C',  'D♯',  'E', 'F♯'],
    'D' : [ 'D',  'E', 'F♯',  'G',  'A♯',  'B', 'C♯'],
    'A' : [ 'A',  'B', 'C♯',  'D',  'E♯', 'F♯', 'G♯'],
    'E' : [ 'E', 'F♯', 'G♯',  'A',  'B♯', 'C♯', 'D♯'],
    'B' : [ 'B', 'C♯', 'D♯',  'E',  'F𝄪', 'G♯', 'A♯'],
    'F♯': ['F♯', 'G♯', 'A♯',  'B',  'C𝄪', 'D♯', 'E♯'],
    'C♯': ['C♯', 'D♯', 'E♯', 'F♯',  'G𝄪', 'A♯', 'B♯']
};

const dorianSharp4 = {
    'C♭': ['C♭', 'D♭',  'E𝄫',  'F', 'G♭', 'A♭',  'B𝄫'],
    'G♭': ['G♭', 'A♭',  'B𝄫',  'C', 'D♭', 'E♭',  'F♭'],
    'D♭': ['D♭', 'E♭',  'F♭',  'G', 'A♭', 'B♭',  'C♭'],
    'A♭': ['A♭', 'B♭',  'C♭',  'D', 'E♭',  'F',  'G♭'],
    'E♭': ['E♭',  'F',  'G♭',  'A', 'B♭',  'C',  'D♭'],
    'B♭': ['B♭',  'C',  'D♭',  'E',  'F',  'G',  'A♭'],
    'F' : [ 'F',  'G',  'A♭',  'B',  'C',  'D',  'E♭'],
    'C' : [ 'C',  'D',  'E♭', 'F♯',  'G',  'A',  'B♭'],
    'G' : [ 'G',  'A',  'B♭', 'C♯',  'D',  'E',   'F'],
    'D' : [ 'D',  'E',   'F', 'G♯',  'A',  'B',   'C'],
    'A' : [ 'A',  'B',   'C', 'D♯',  'E', 'F♯',   'G'],
    'E' : [ 'E', 'F♯',   'G', 'A♯',  'B', 'C♯',   'D'],
    'B' : [ 'B', 'C♯',   'D', 'E♯', 'F♯', 'G♯',   'A'],
    'F♯': ['F♯', 'G♯',   'A', 'B♯', 'C♯', 'D♯',   'E'],
    'C♯': ['C♯', 'D♯',   'E', 'F𝄪', 'G♯', 'A♯',   'B']
};

const phrygian3M = {
    'C♭': ['C♭',  'D𝄫',  'E♭', 'F♭', 'G♭',  'A𝄫',  'B𝄫'],
    'G♭': ['G♭',  'A𝄫',  'B♭', 'C♭', 'D♭',  'E𝄫',  'F♭'],
    'D♭': ['D♭',  'E𝄫',   'F', 'G♭', 'A♭',  'B𝄫',  'C♭'],
    'A♭': ['A♭',  'B𝄫',   'C', 'D♭', 'E♭',  'F♭',  'G♭'],
    'E♭': ['E♭',  'F♭',   'G', 'A♭', 'B♭',  'C♭',  'D♭'],
    'B♭': ['B♭',  'C♭',   'D', 'E♭',  'F',  'G♭',  'A♭'],
    'F' : [ 'F',  'G♭',   'A', 'B♭',  'C',  'D♭',  'E♭'],
    'C' : [ 'C',  'D♭',   'E',  'F',  'G',  'A♭',  'B♭'],
    'G' : [ 'G',  'A♭',   'B',  'C',  'D',  'E♭',   'F'],
    'D' : [ 'D',  'E♭',  'F♯',  'G',  'A',  'B♭',   'C'],
    'A' : [ 'A',  'B♭',  'C♯',  'D',  'E',   'F',   'G'],
    'E' : [ 'E',   'F',  'G♯',  'A',  'B',   'C',   'D'],
    'B' : [ 'B',   'C',  'D♯',  'E', 'F♯',   'G',   'A'],
    'F♯': ['F♯',   'G',  'A♯',  'B', 'C♯',   'D',   'E'],
    'C♯': ['C♯',   'D',  'E♯', 'F♯', 'G♯',   'A',   'B']
};

const tiposDeAcordes = [
    { name: 'I',   typeIonian: '7M (9 11 13)',     typeDorian: 'm7 (9 11 13)',     typePhrygian: 'm7 (♭9 11 ♭13)',   typeLydian: '7M (9 ♯11 13)',    typeMixolydian: '7 (9 11 13)',      typeAeolian: 'm7 (9 11 ♭13)',    typeLocrian: 'm7♭5 (♭9 11 ♭13)', typeIonianSharp5: '7M♯5 (9 11 13)',    typeDorianSharp4: 'm7 (9 ♯11 13)',     typePhrygian3M: '7 (♭9 11 ♭13)',     },
    { name: 'II',  typeIonian: 'm7 (9 11 13)',     typeDorian: 'm7 (♭9 11 ♭13)',   typePhrygian: '7M (9 ♯11 13)',    typeLydian: '7 (9 11 13)',      typeMixolydian: 'm7 (9 11 ♭13)',    typeAeolian: 'm7♭5 (♭9 11 ♭13)', typeLocrian: '7M (9 11 13)',     typeIonianSharp5: 'm7 (9 ♯11 13)',     typeDorianSharp4: '7 (♭9 11 ♭13)',     typePhrygian3M: '7M (♯9 ♯11 13)',    },
    { name: 'III', typeIonian: 'm7 (♭9 11 ♭13)',   typeDorian: '7M (9 ♯11 13)',    typePhrygian: '7 (9 11 13)',      typeLydian: 'm7 (9 11 ♭13)',    typeMixolydian: 'm7♭5 (♭9 11 ♭13)', typeAeolian: '7M (9 11 13)',     typeLocrian: 'm7 (9 11 13)',     typeIonianSharp5: '7 (♭9 11 ♭13)',     typeDorianSharp4: '7M (♯9 ♯11 13)',    typePhrygian3M: 'dim7 (♭9 ♭11 ♭13)', },
    { name: 'IV',  typeIonian: '7M (9 ♯11 13)',    typeDorian: '7 (9 11 13)',      typePhrygian: 'm7 (9 11 ♭13)',    typeLydian: 'm7♭5 (♭9 11 ♭13)', typeMixolydian: '7M (9 11 13)',     typeAeolian: 'm7 (9 11 13)',     typeLocrian: 'm7 (♭9 11 ♭13)',   typeIonianSharp5: '7M (♯9 ♯11 13)',    typeDorianSharp4: 'dim7 (♭9 ♭11 ♭13)', typePhrygian3M: 'm7M (9 11 ♭13)',    },
    { name: 'V',   typeIonian: '7 (9 11 13)',      typeDorian: 'm7 (9 11 ♭13)',    typePhrygian: 'm7♭5 (♭9 11 ♭13)', typeLydian: '7M (9 11 13)',     typeMixolydian: 'm7 (9 11 13)',     typeAeolian: 'm7 (♭9 11 ♭13)',   typeLocrian: '7M (9 ♯11 13)',    typeIonianSharp5: 'dim7 (♭9 ♭11 ♭13)', typeDorianSharp4: 'm7M (9 11 ♭13)',    typePhrygian3M: 'm7♭5 (♭9 11 13)',   },
    { name: 'VI',  typeIonian: 'm7 (9 11 ♭13)',    typeDorian: 'm7♭5 (♭9 11 ♭13)', typePhrygian: '7M (9 11 13)',     typeLydian: 'm7 (9 11 13)',     typeMixolydian: 'm7 (♭9 11 ♭13)',   typeAeolian: '7M (9 ♯11 13)',    typeLocrian: '7 (9 11 13)',      typeIonianSharp5: 'm7M (9 11 ♭13)',    typeDorianSharp4: 'm7♭5 (♭9 11 13)',   typePhrygian3M: '7M♯5 (9 11 13)',    },
    { name: 'VII', typeIonian: 'm7♭5 (♭9 11 ♭13)', typeDorian: '7M (9 11 13)',     typePhrygian: 'm7 (9 11 13)',     typeLydian: 'm7 (♭9 11 ♭13)',   typeMixolydian: '7M (9 ♯11 13)',    typeAeolian: '7 (9 11 13)',      typeLocrian: 'm7 (9 11 ♭13)',    typeIonianSharp5: 'm7♭5 (♭9 11 13)',   typeDorianSharp4: '7M♯5 (9 11 13)',    typePhrygian3M: 'm7 (9 ♯11 13)',     }
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
        locrian: locrian[escalaSelecionada] || [],
        ionianSharp5: ionianSharp5[escalaSelecionada] || [],
        dorianSharp4: dorianSharp4[escalaSelecionada] || [],
        phrygian3M: phrygian3M[escalaSelecionada] || []
    };

    if (notas.ionian.length === 0) {
        document.getElementById('tabelaContainer').innerHTML = "<p class='text-danger'>Escala não encontrada.</p>";
        return;
    }

    const divResponsiva = document.createElement('div');
    divResponsiva.classList.add('table-responsive');

    const tabela = document.createElement('table');
    tabela.classList.add('table', 'table-striped', 'table-bordered', 'mt-3');

    // Novo cabeçalho (graus I a VII)
    const thead = tabela.createTHead();
    const headerRow = thead.insertRow();
    ['', 'Iº', 'IIº', 'IIIº', 'IVº', 'Vº dominante', 'VIº', 'VIIº'].forEach(texto => {
        const th = document.createElement('th');
        th.textContent = texto;
        th.classList.add('align-middle');
        headerRow.appendChild(th);
    });

    // Modos em ordem desejada
    const modos = [
        { key: 'ionian',       nome: 'Jônico'    },
        { key: 'dorian',       nome: 'Dórico'    },
        { key: 'phrygian',     nome: 'Frígio'    },
        { key: 'lydian',       nome: 'Lídio'     },
        { key: 'mixolydian',   nome: 'Mixolídio' },
        { key: 'aeolian',      nome: 'Eólio'     },
        { key: 'locrian',      nome: 'Lócrio'    },
        { key: 'ionianSharp5', nome: 'Jônico ♯5' },
        { key: 'dorianSharp4', nome: 'Dórico ♯4' },
        { key: 'phrygian3M',   nome: 'Frígio 3M' }
    ];

    const tbody = tabela.createTBody();
    modos.forEach(modo => {
        const row = tbody.insertRow();
        const celulaModo = row.insertCell();
        celulaModo.textContent = modo.nome;
        celulaModo.classList.add('fw-bold');

        for (let i = 0; i < 7; i++) {
            const tipo = tiposDeAcordes[i];
            const nota = notas[modo.key][i] || '';
            const tipoAcorde = tipo[`type${modo.key.charAt(0).toUpperCase() + modo.key.slice(1)}`];
            const celula = row.insertCell();
            celula.textContent = `${nota}${tipoAcorde}`;
            celula.classList.add('text-start');
        }
    });

    document.getElementById('tabelaContainer').innerHTML = '';
    document.getElementById('tabelaContainer').appendChild(tabela);
}
