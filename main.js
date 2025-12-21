function formatarExtensao(intervalo) {
    const mapa = {
        "2m": "b9", 
        "2M": "9", 
        "2A": "#9",
        "4P": "11", 
        "4A": "#11", 
        "4d": "b11",
        "6m": "b13", 
        "6M": "13", 
        "6A": "#13"
    };
    return mapa[intervalo] || intervalo;
}

function identificarSufixo(intervalos) {
    const t3 = intervalos[1]; // Terça
    const q5 = intervalos[2]; // Quinta
    const s7 = intervalos[3]; // Sétima

    // --- ACORDES MAIORES (3M) ---
    if (t3 === "3M") {
        if (q5 === "5P" && s7 === "7M") return "<sup>7M</sup>";
        if (q5 === "5P" && s7 === "7m") return "<sup>7</sup>";
        if (q5 === "5A" && s7 === "7M") return "<sup>aug7M</sup>"; 
        if (q5 === "5A" && s7 === "7m") return "<sup>aug7</sup>";
    }

    // --- ACORDES MENORES (3m) ---
    if (t3 === "3m") {
        if (q5 === "5P" && s7 === "7m") return "m<sup>7</sup>";
        if (q5 === "5P" && s7 === "7M") return "m<sup>7M</sup>"; 
        if (q5 === "5d" && s7 === "7m") return "m<sup>7b5</sup>";
        if (q5 === "5d" && s7 === "7d") return "<sup>dim7</sup>";
    }

    // Fallback para tríades ou acordes não mapeados
    if (t3 === "3M" && q5 === "5P") return "";
    if (t3 === "3m" && q5 === "5P") return "m";
    if (t3 === "3m" && q5 === "5d") return "dim";
    
    return ""; 
}

function gerarCampo() {
    const nota = document.getElementById('nota').value;
    const tipoEscala = document.getElementById('escala').value;
    const fullScaleName = `${nota} ${tipoEscala}`;

    const deg = Tonal.Scale.degrees(fullScaleName);
    const modosRelativos = Tonal.Scale.modeNames(fullScaleName);

    // Preparação da Escala Mestra para a linha de Escala (Rotação)
    const notasEscalaMestra = [];
    for(let k=1; k<=7; k++) {
        notasEscalaMestra.push(deg(k));
    }

    // Limpeza e Cabeçalhos
    const linhas = ['linhaGraus', 'linhaAcordes', 'linhaExtensoes', 'linhaNotas', 'linhaEscala', 'linhaModos'];
    const headers = ['Grau', 'Acorde', 'Extensões', 'Notas', 'Escala', 'Modo'];
    
    linhas.forEach((id, index) => {
        const el = document.getElementById(id);
        if(el) el.innerHTML = `<th class="bg-light fw-bold">${headers[index]}</th>`;
    });

    const grausRomanos = ["I", "II", "III", "IV", "V", "VI", "VII"];

    for (let i = 1; i <= 7; i++) {
        const fundamental = deg(i);
        
        // 1. CONSTRUÇÃO DO ACORDE (Notas e Intervalos)
        const notasAcorde = [deg(i), deg(i + 2), deg(i + 4), deg(i + 6)];
        
        // O distance garante que C -> G# seja "5A" (Quinta Aumentada) e não "6m"
        const intervalos = notasAcorde.map(n => Tonal.Interval.distance(fundamental, n));
        
        // 2. IDENTIFICAÇÃO DO NOME (Chamando sua função)
        const sufixo = identificarSufixo(intervalos);
        const nomeAcordeExibicao = fundamental + sufixo;

        // 3. EXTENSÕES (Calculadas sobre o grau atual i)
        // 9ª = deg(i+1), 11ª = deg(i+3), 13ª = deg(i+5)
        const getExt = (offset) => formatarExtensao(Tonal.Interval.distance(fundamental, deg(i + offset)));
        const extStr = `${getExt(1)}, ${getExt(3)}, ${getExt(5)}`;

        // 4. MODO (Tradução e proteção contra undefined)
        let nomeModoIngles = (modosRelativos && modosRelativos[i - 1]) ? modosRelativos[i - 1][1] : ""; 
        let nomeModoExibicao = nomeModoIngles;
        if (nomeModoExibicao === "ionian" || nomeModoExibicao === "major") nomeModoExibicao = "ionian";
        if (nomeModoExibicao === "aeolian" || nomeModoExibicao === "minor") nomeModoExibicao = "aeolian";
        const modoFinal = nomeModoExibicao ? nomeModoExibicao.charAt(0).toUpperCase() + nomeModoExibicao.slice(1) : "-";

        // 5. ESCALA (Rotação manual para não depender do nome do modo)
        const parteFim = notasEscalaMestra.slice(i - 1);
        const parteInicio = notasEscalaMestra.slice(0, i - 1);
        const notasDaEscala = parteFim.concat(parteInicio);

        document.getElementById('linhaGraus').innerHTML += `<th class="">${grausRomanos[i-1]}</th>`;
        document.getElementById('linhaAcordes').innerHTML += `<td class="text-primary"><strong>${nomeAcordeExibicao}</strong></td>`;
        document.getElementById('linhaExtensoes').innerHTML += `<td class="text-muted small">${extStr}</td>`;
        document.getElementById('linhaNotas').innerHTML += `<td class="fst-italic small">${notasAcorde.join(', ')}</td>`;
        //document.getElementById('linhaEscala').innerHTML += `<td class="small text-secondary" style="font-size: 0.7rem;">${notasDaEscala.join(' - ')}</td>`;
        document.getElementById('linhaModos').innerHTML += `<td class="fst-italic small">${modoFinal}</td>`;
    }
}

window.onload = gerarCampo;