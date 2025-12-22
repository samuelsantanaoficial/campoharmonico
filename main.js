let DADOS_GLOBAIS = [];
let modalBootstrap = null;

function formatarExtensao(intervalo) {
    const mapa = { "2m": "b9", "2M": "9", "2A": "#9", "4P": "11", "4A": "#11", "4d": "b11", "6m": "b13", "6M": "13", "6A": "#13" };
    return mapa[intervalo] || intervalo;
}

function identificarSufixo(intervalos) {
    const t3 = intervalos[1]; const q5 = intervalos[2]; const s7 = intervalos[3];
    if (t3 === "3M") {
        if (q5 === "5P" && s7 === "7M") return "<sup>Δ7</sup>";
        if (q5 === "5P" && s7 === "7m") return "<sup>7</sup>";
        if (q5 === "5A" && s7 === "7M") return "<sup>Δ7(#5)</sup>"; 
        if (q5 === "5A" && s7 === "7m") return "<sup>7(#5)</sup>";
    }
    if (t3 === "3m") {
        if (q5 === "5P" && s7 === "7m") return "m<sup>7</sup>";
        if (q5 === "5P" && s7 === "7M") return "m<sup>Δ7</sup>"; 
        if (q5 === "5d" && s7 === "7m") return "m<sup>7(b5)</sup>";
        if (q5 === "5d" && s7 === "7d") return "<sup>dim7</sup>";
    }
    if (t3 === "3M" && q5 === "5P") return "";
    if (t3 === "3m" && q5 === "5P") return "m";
    if (t3 === "3m" && q5 === "5d") return "dim";
    return ""; 
}

function obterCor(nomeAcorde, intervalos) {
    const t3 = intervalos[1]; const q5 = intervalos[2];
    if (q5 === "5d" || q5 === "5A") return "danger";
    if (t3 === "3m") return "primary";
    if (nomeAcorde.includes("sup>7")) return "warning";
    return "success";
}

function gerarCampo() {
    const nota = document.getElementById('nota').value;
    const tipoEscala = document.getElementById('escala').value;
    const fullScaleName = `${nota} ${tipoEscala}`;

    const deg = Tonal.Scale.degrees(fullScaleName);
    const modosRelativos = Tonal.Scale.modeNames(fullScaleName);
    const grausRomanos = ["I", "II", "III", "IV", "V", "VI", "VII"];
    
    // Escala Rotacionada
    const notasEscalaMestra = [];
    for(let k=1; k<=7; k++) notasEscalaMestra.push(deg(k));

    // Limpa Memória
    DADOS_GLOBAIS = [];
    
    // Captura as linhas da tabela
    const linhaGraus = document.getElementById('linhaGraus');
    const linhaAcordes = document.getElementById('linhaAcordes');

    // Reinicia as linhas com o Cabeçalho Lateral (Fixo)
    linhaGraus.innerHTML = '<th class="row-header text-secondary"></th>';
    linhaAcordes.innerHTML = '<th class="row-header text-secondary"></th>';

    for (let i = 1; i <= 7; i++) {
        const fundamental = deg(i);
        const notasAcorde = [deg(i), deg(i + 2), deg(i + 4), deg(i + 6)];
        const intervalos = notasAcorde.map(n => Tonal.Interval.distance(fundamental, n));
        
        const sufixo = identificarSufixo(intervalos);
        const nomeAcordeExibicao = fundamental + sufixo;
        const cor = obterCor(nomeAcordeExibicao, intervalos);

        const getExt = (offset) => formatarExtensao(Tonal.Interval.distance(fundamental, deg(i + offset)));
        const extStr = `${getExt(1)}, ${getExt(3)}, ${getExt(5)}`;

        let nomeModo = (modosRelativos && modosRelativos[i - 1]) ? modosRelativos[i - 1][1] : ""; 
        if (nomeModo === "ionian" || nomeModo === "major") nomeModo = "ionian";
        if (nomeModo === "aeolian" || nomeModo === "minor") nomeModo = "aeolian";
        const modoFinal = nomeModo ? nomeModo.charAt(0).toUpperCase() + nomeModo.slice(1) : "-";

        const notasDaEscala = notasEscalaMestra.slice(i - 1).concat(notasEscalaMestra.slice(0, i - 1));

        // SALVA NA MEMÓRIA
        DADOS_GLOBAIS.push({
            grau: grausRomanos[i-1],
            acordeHTML: nomeAcordeExibicao,
            notas: notasAcorde,
            extensoes: extStr,
            modo: modoFinal,
            escala: notasDaEscala,
            cor: cor
        });

        // --- PREENCHE AS CÉLULAS LADO A LADO ---
        
        // Grau
        linhaGraus.innerHTML += `
            <td>
                <strong class="text-secondary">
                    ${grausRomanos[i-1]}
                </strong>
            </td>
        `;

        // Acorde (Clicável)
        linhaAcordes.innerHTML += `
            <td onclick="abrirModal(${i-1})">
                <strong class="chord-symbol text-${cor}">
                    ${nomeAcordeExibicao}
                </strong>
            </td>
        `;
    }
}

function abrirModal(index) {
    const dados = DADOS_GLOBAIS[index];
    const badgeGrau = document.getElementById('modalGrau');
    badgeGrau.innerText = "Grau " + dados.grau;
    badgeGrau.className = `badge rounded-pill fs-6 mb-2 px-3 py-2 bg-${dados.cor}`;
    
    const titulo = document.getElementById('modalAcorde');
    titulo.innerHTML = dados.acordeHTML;
    titulo.className = `display-3 fw-bold mb-0 chord-symbol text-${dados.cor}`;

    document.getElementById('modalModo').innerText = dados.modo;
    document.getElementById('modalNotas').innerText = dados.notas.join(' - ');
    document.getElementById('modalExtensoes').innerText = dados.extensoes;
    document.getElementById('modalEscala').innerText = dados.escala.join('  ');

    if (!modalBootstrap) {
        modalBootstrap = new bootstrap.Modal(document.getElementById('modalDetalhes'));
    }
    modalBootstrap.show();
}

window.onload = gerarCampo;