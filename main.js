let DADOS_MODAL = {}; // Armazena info para o modal
let modalBootstrap = null;

// --- CONFIGURAÇÃO DOS MODOS ---
const FAMILIAS = [
    {
        titulo: "ESCALA MAIOR",
        modos: [
            { id: "ionian", nome: "JÔNICO" },
            { id: "dorian", nome: "DÓRICO" },
            { id: "phrygian", nome: "FRÍGIO" },
            { id: "lydian", nome: "LÍDIO" },
            { id: "mixolydian", nome: "MIXOLÍDIO" },
            { id: "aeolian", nome: "EÓLIO" },
            { id: "locrian", nome: "LÓCRIO" }
        ]
    },
    {
        titulo: "MENOR MELÓDICA",
        modos: [
            { id: "melodic minor", nome: "DÓRICO 7M" }, // Nome usual da Menor Melódica no Jazz
            { id: "dorian b2", nome: "DÓRICO b9" },
            { id: "lydian augmented", nome: "LÍDIO #5" },
            { id: "lydian dominant", nome: "LÍDIO 7" },
            { id: "mixolydian b6", nome: "MIXOLÍDIO b6" },
            { id: "locrian #2", nome: "LÓCRIO 9" },
            { id: "altered", nome: "ALTERADO" }
        ]
    },
    {
        titulo: "MENOR HARMÔNICA",
        modos: [
            { id: "harmonic minor", nome: "EÓLIO 7M" }, // Nome usual da Menor Harmônica
            { id: "locrian 6", nome: "LÓCRIO 6" },
            { id: "ionian #5", nome: "JÔNICO #5" },
            { id: "dorian #4", nome: "DÓRICO #4" },
            { id: "phrygian dominant", nome: "FRÍGIO 3M" },
            { id: "lydian #9", nome: "LÍDIO #9" },
            { id: "ultralocrian", nome: "DIM. HARM." }
        ]
    }
];

// --- FUNÇÕES AUXILIARES ---
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
    if (t3 === "3m" && q5 === "5d") return "<sup>dim</sup>"; 

    if (t3 === "3M" && q5 === "5P") return "";
    if (t3 === "3m" && q5 === "5P") return "m";
    return ""; 
}

function obterCor(nomeAcorde, intervalos) {
    const t3 = intervalos[1]; const q5 = intervalos[2];
    if (q5 === "5d" || q5 === "5A") return "danger";
    if (t3 === "3m") return "primary";
    if (nomeAcorde.includes("sup>7")) return "warning";
    return "success";
}

function obterGrauRelativo(root, note) {
    const dist = Tonal.Interval.distance(root, note);
    const semitons = Tonal.Interval.semitones(dist);
    const romanos = ["I", "bII", "II", "bIII", "III", "IV", "#IV", "V", "bVI", "VI", "bVII", "VII"];
    if (semitons === 0) return "I";
    if (semitons === 1) return "bII";
    if (semitons === 2) return "II";
    if (semitons === 3) return "bIII";
    if (semitons === 4) return "III";
    if (semitons === 5) return "IV";
    if (semitons === 6) return "#IV"; 
    if (semitons === 7) return "V";
    if (semitons === 8) return "bVI"; 
    if (semitons === 9) return "VI";
    if (semitons === 10) return "bVII";
    if (semitons === 11) return "VII";
    return "?";
}

// --- FUNÇÃO PRINCIPAL ---
function gerarCampoGeral() {
    const notaRaiz = document.getElementById('nota').value;
    const container = document.getElementById('containerPrincipal');
    container.innerHTML = "";
    DADOS_MODAL = {}; 

    FAMILIAS.forEach((familia, fIndex) => {
        // Título da Seção (Ajustado para classes nativas do Bootstrap)
        container.innerHTML += `<h5 class="fw-bold mt-4 mb-3 border-start border-primary border-4 ps-2">${familia.titulo}</h5>`;
        
        let tabelaHTML = `
            <div class="card shadow-sm border-0 mb-4">
                <div class="table-responsive">
                    <table class="table table-hover table-bordered mb-0 align-middle">
                        <tbody>
        `;

        familia.modos.forEach((modoDaLinha, indexDaLinha) => {
            const fullScaleName = `${notaRaiz} ${modoDaLinha.id}`;
            const deg = Tonal.Scale.degrees(fullScaleName);
            
            if (!deg || typeof deg !== 'function') return;

            const notasMestra = [];
            for(let k=1; k<=7; k++) notasMestra.push(deg(k));

            let rowHTML = `<tr>`;
            
            rowHTML += `
                <td class="small fw-bold bg-light text-secondary" 
                    style="min-width: 120px; cursor: pointer;" 
                    onclick="copiarLinha(${fIndex}, ${indexDaLinha}, '${modoDaLinha.nome}')" 
                    title="Clique para copiar os acordes">
                    ${modoDaLinha.nome}
                </td>`;

            for (let i = 1; i <= 7; i++) {
                const fundamental = deg(i);
                const notasAcorde = [deg(i), deg(i + 2), deg(i + 4), deg(i + 6)];
                const intervalos = notasAcorde.map(n => Tonal.Interval.distance(fundamental, n));
                const sufixo = identificarSufixo(intervalos);
                const nomeAcordeExibicao = fundamental + sufixo;
                const cor = obterCor(nomeAcordeExibicao, intervalos);
                const grauRelativo = obterGrauRelativo(notaRaiz, fundamental);

                const parteFim = notasMestra.slice(i - 1);
                const parteInicio = notasMestra.slice(0, i - 1);
                const notasEscalaRotacionada = parteFim.concat(parteInicio);

                const indexModoRelativo = (indexDaLinha + (i - 1)) % 7;
                const modoRelativoNome = familia.modos[indexModoRelativo].nome;

                const extStr = `${formatarExtensao(Tonal.Interval.distance(fundamental, deg(i + 1)))}, ${formatarExtensao(Tonal.Interval.distance(fundamental, deg(i + 3)))}, ${formatarExtensao(Tonal.Interval.distance(fundamental, deg(i + 5)))}`;

                const uniqueID = `chord-${fIndex}-${indexDaLinha}-${i}`;
                
                DADOS_MODAL[uniqueID] = {
                    grau: grauRelativo,
                    acordeHTML: nomeAcordeExibicao,
                    notas: notasAcorde,
                    extensoes: extStr,
                    escala: notasEscalaRotacionada,
                    modoNome: modoRelativoNome,
                    cor: cor
                };

                rowHTML += `
                    <td class="bg-${cor} bg-opacity-10 text-${cor}" style="cursor: pointer; min-width: 90px;" onclick="abrirModal('${uniqueID}')">
                        <span class="small text-secondary d-block" style="font-size: 0.65rem;">${grauRelativo}</span>
                        <strong class="fs-5">${nomeAcordeExibicao}</strong>
                    </td>
                `;
            }
            rowHTML += `</tr>`;
            tabelaHTML += rowHTML;
        });

        tabelaHTML += `</tbody></table></div></div>`;
        container.innerHTML += tabelaHTML;
    });
}

function abrirModal(id) {
    const dados = DADOS_MODAL[id];
    if (!dados) return;

    const badgeGrau = document.getElementById('modalGrau');
    badgeGrau.innerText = "Grau " + dados.grau;
    badgeGrau.className = `badge rounded-pill fs-6 mb-2 px-3 py-2 bg-${dados.cor}`;
    
    const titulo = document.getElementById('modalAcorde');
    titulo.innerHTML = dados.acordeHTML;
    titulo.className = `display-3 fw-bold mb-0 text-${dados.cor}`;

    document.getElementById('modalModo').innerText = `Modo: ${dados.modoNome}`;
    document.getElementById('modalNotas').innerText = dados.notas.join(' - ');
    document.getElementById('modalExtensoes').innerText = dados.extensoes;
    document.getElementById('modalEscala').innerText = dados.escala.join('  ');

    if (!modalBootstrap) {
        modalBootstrap = new bootstrap.Modal(document.getElementById('modalDetalhes'));
    }
    modalBootstrap.show();
}

function copiarLinha(fIndex, indexDaLinha, nomeModo) {
    const acordesParaCopiar = [];
    const notaTom = document.getElementById('nota').value;

    // Busca os 7 acordes que foram salvos no DADOS_MODAL para esta linha específica
    for (let i = 1; i <= 7; i++) {
        const id = `chord-${fIndex}-${indexDaLinha}-${i}`;
        if (DADOS_MODAL[id]) {
            // Remove as tags <sup> e </sup> para copiar apenas o texto (ex: CΔ7 em vez de C<sup>Δ7</sup>)
            const nomeLimpo = DADOS_MODAL[id].acordeHTML.replace(/<[^>]*>?/gm, '');
            acordesParaCopiar.push(nomeLimpo);
        }
    }

    // Formata a mensagem
    const mensagem = `*Campo harmônico de ${notaTom} ${nomeModo}*\n${acordesParaCopiar.join(' - ')}`;

    // Copia para a área de transferência
    navigator.clipboard.writeText(mensagem).then(() => {
        // Feedback visual simples usando apenas Bootstrap
        alert(`Copiado para a área de transferência`);
        // alert(`Copiado para a área de transferência:\n${mensagem}`);
    }).catch(err => {
        console.error('Erro ao copiar: ', err);
    });
}

window.onload = gerarCampoGeral;