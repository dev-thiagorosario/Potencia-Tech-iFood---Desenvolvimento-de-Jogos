document.addEventListener("DOMContentLoaded", function() {
    var btnMain = document.querySelector("a[href='index.html'] > button");
    var btnCartas = document.querySelector("a[href='cartas.html'] > button");

    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        btnMain.classList.add("btn-active");
    } else if (window.location.pathname === '/cartas.html') {
        btnCartas.classList.add("btn-active");
    }
});


// Personagem 1: Draculus
var draculus = {
    nome: "Draculus",
    forca: 6,
    defesa: 6,
    magia: 4,
    velocidade: 8,
    inteligencia: 6,
};

// Personagem 2: Ignisphera
var ignisphera = {
    nome: "Ignisphera",
    forca: 7,
    defesa: 5,
    magia: 9,
    velocidade: 5,
    inteligencia: 4,
};

// Personagem 3: Aquaterra
var aquaterra = {
    nome: "Aquaterra",
    forca: 5,
    defesa: 8,
    magia: 8,
    velocidade: 4,
    inteligencia: 5,
};

// Personagem 4: Florafey
var florafey = {
    nome: "Florafey",

    forca: 3,
    defesa: 4,
    magia: 7,
    velocidade: 7,
    inteligencia: 9,

};

// Personagem 5 Ventovixen
var ventovixen = {
    nome: "Ventovixen",
    forca: 5,
    defesa: 3,
    magia: 8,
    velocidade: 10,
    inteligencia: 4,
};

// Personagem 6:Terraton
var terraton = {
    nome: "Terraton",
    forca: 6,
    defesa: 10,
    magia: 5,
    velocidade: 5,
    inteligencia: 4,
};

// Personagem 7: Luminis
var luminis = {
    nome: "Luminis",

    forca: 2,
    defesa: 7,
    magia: 10,
    velocidade: 5,
    inteligencia: 6,

};

// Personagem 8: Glacius
var glacius = {

    nome: "Glacius",
    forca: 8,
    defesa: 6,
    magia: 6,
    velocidade: 4,
    inteligencia: 6,

};

// Personagem 9: Metalurgo
var metalurgo = {
    nome: "Metalurgo",

    forca: 7,
    defesa: 8,
    magia: 6,
    velocidade: 3,
    inteligencia: 6,

};

// Personagem 10 Electromagus
var electromagus = {
    nome: "Electromagus",

    forca: 6,
    defesa: 5,
    magia: 9,
    velocidade: 4,
    inteligencia: 6,

};


// Personagem 11: Umbrosa
var umbrosa = {
    nome: "Umbrosa",

    forca: 4,
    defesa: 7,
    magia: 6,
    velocidade: 8,
    inteligencia: 5,

};

// Personagem 12: Psionyx
var psionyx = {
    nome: "Psionyx",

    forca: 3,
    defesa: 4,
    magia: 8,
    velocidade: 5,
    inteligencia: 10,
};

// Personagem 13 Chronomante
var chronomante = {
    nome: "Chronomante",

    forca: 6,
    defesa: 6,
    magia: 10,
    velocidade: 4,
    inteligencia: 5,

};

// Personagem 14: Pyrofenix
var pyrofenix = {
    nome: "Pyrofênix",

    forca: 9,
    defesa: 5,
    magia: 4,
    velocidade: 10,
    inteligencia: 2,

};

// Personagem 15: Thundershock
var thundershock = {
    nome: "Thundershock",

    forca: 6,
    defesa: 7,
    magia: 5,
    velocidade: 9,
    inteligencia: 3,

};

// Personagem 16: MysticSiren:
var mysticSiren = {
    nome: "MysticSiren",

    forca: 3,
    defesa: 5,
    magia: 8,
    velocidade: 7,
    inteligencia: 7,
};

// Personagem 17: StratusBlade:
var stratusBlade = {
    nome: "StratusBlade",
    forca: 10,
    defesa: 8,
    magia: 1,
    velocidade: 4,
    inteligencia: 7,
};

// Personagem 18: Tigron
var tigron = {
    nome: "Tigron",
    forca: 8,
    defesa: 5,
    magia: 2,
    velocidade: 7,
    inteligencia: 8,
};

// Personagem 19: Shapeshift
var shapeshift = {
    nome: "Shapeshift",

    forca: 6,
    defesa: 7,
    magia: 4,
    velocidade: 8,
    inteligencia: 5,

};

// Personagem 20: NebulaWitch
var nebulaWitch = {
    nome: "NebulaWitch",
    forca: 4,
    defesa: 5,
    magia: 9,
    velocidade: 7,
    inteligencia: 5,
};

// Personagem 1: Draculus-Supremo
var draculusSupremo = {
    nome: "Draculus-Supremo",
    forca: 12,
    defesa: 8,
    magia: 5,
    velocidade: 15,
    inteligencia: 5,
};

// Personagem 2: Ignisphera Suprema
var ignispheraSuprema = {
    nome: "Ignisphera-Suprema",
    forca: 13,
    defesa: 6,
    magia: 12,
    velocidade: 9,
    inteligencia: 8,
};

// Personagem 3: Aquaterra-Supremo
var aquaterraSupremo = {
    nome: "Aquaterra-Suprema",
    forca: 8,
    defesa: 8,
    magia: 13,
    velocidade: 4,
    inteligencia: 9,
};

// Personagem 4: Florafey-Suprema
var florafeySuprema = {
    nome: "Florafey-Suprema",
    forca: 4,
    defesa: 4,
    magia: 10,
    velocidade: 8,
    inteligencia: 15,
};

// Personagem 5: Ventovixen-Suprema
var ventovixenSuprema = {
    nome: "Ventovixen-Suprema",
    forca: 9,
    defesa: 3,
    magia: 8,
    velocidade: 15,
    inteligencia: 4,
};

// Personagem 6: Terraton-Supremo
var terratonSupremo = {
    nome: "Terraton-Supremo",
    forca: 10,
    defesa: 16,
    magia: 3,
    velocidade: 1,
    inteligencia: 4,
};

// Personagem 7: Luminis-Supremo
var luminisSuprema = {
    nome: "Luminis-Suprema",
    forca: 1,
    defesa: 13,
    magia: 15,
    velocidade: 5,
    inteligencia: 13,
};

// Personagem 8: Glacius Supremo
var glaciusSupremo = {
    nome: "Glacius-Supremo",
    forca: 14,
    defesa: 10,
    magia: 8,
    velocidade: 3,
    inteligencia: 4,
};

// Personagem 9: Metalurgo Supremo
var metalurgoSupremo = {
    nome: "Metalurgo-Supremo",
    forca: 9,
    defesa: 15,
    magia: 5,
    velocidade: 2,
    inteligencia: 9,
};

// Personagem 10: Electromagus Supremo
var electromagusSupremo = {
    nome: "Electromagus-Supremo",
    forca: 9,
    defesa: 3,
    magia: 13,
    velocidade: 2,
    inteligencia: 11,
};

// Personagem 11: Umbrosa Suprema
var umbrosaSuprema = {
    nome: "Umbrosa-Suprema",
    forca: 5,
    defesa: 12,
    magia: 9,
    velocidade: 14,
    inteligencia: 7,
};


// Personagem 12: Psionyx Supremo
var psionyxSupremo = {
    nome: "Psionyx-Suprema",

    forca: 3,
    defesa: 3,
    magia: 11,
    velocidade: 8,
    inteligencia: 15,
};

// Personagem 13: Chronomante Supremo
var chronomanteSupremo = {
    nome: "Chronomante-Supremo",

    forca: 9,
    defesa: 7,
    magia: 14,
    velocidade: 2,
    inteligencia: 12,
};

// Personagem 14: Pyrofênix-Suprema
var pyrofenixSuprema = {
    nome: "Pyrofênix-Suprema",

    forca: 10,
    defesa: 10,
    magia: 2,
    velocidade: 12,
    inteligencia: 2,
};

// Personagem 15: Thundershock-Supremo
var thundershockSupremo = {
    nome: "Thundershock-Supremo",

    forca: 12,
    defesa: 8,
    magia: 5,
    velocidade: 14,
    inteligencia: 5,
};

// Personagem 16: MysticSiren-Suprema
var mysticsirenSuprema = {
    nome: "MysticSiren-Suprema",

    forca: 2,
    defesa: 6,
    magia: 9,
    velocidade: 8,
    inteligencia: 15,
};

// Personagem 17: StratusBlade-Supremo
var stratusbladeSupremo = {
    nome: "StratusBlade-Supremo",

    forca: 15,
    defesa: 15,
    magia: 1,
    velocidade: 4,
    inteligencia: 8,
};

// Personagem 18: Tigron-Supremo
var tigronSupremo = {
    nome: "Tigron-Supremo",

    forca: 15,
    defesa: 8,
    magia: 3,
    velocidade: 8,
    inteligencia: 6,
};

// Personagem 19: Shapeshift-Suprema
var shapeshiftSuprema = {
    nome: "Shapeshift-Suprema",

    forca: 9,
    defesa: 9,
    magia: 5,
    velocidade: 14,
    inteligencia: 13,

};

// Personagem 20: NebulaWitch-Suprema
var nebulaWitchSuprema = {
    nome: "NebulaWitch-Suprema",

    forca: 3,
    defesa: 6,
    magia: 15,
    velocidade: 6,
    inteligencia: 10,
};

var cartas = [draculus, ignisphera, aquaterra, florafey, ventovixen, terraton, luminis, glacius, metalurgo, electromagus, umbrosa, psionyx, chronomante, pyrofenix, thundershock,  mysticSiren, stratusBlade, tigron, shapeshift, nebulaWitch]
var cartaSuprema = [draculusSupremo, ignispheraSuprema, aquaterraSupremo, florafeySuprema, ventovixenSuprema, terratonSupremo, luminisSuprema, glaciusSupremo, metalurgoSupremo, electromagusSupremo, umbrosaSuprema, psionyxSupremo, chronomanteSupremo, pyrofenixSuprema, thundershockSupremo, mysticsirenSuprema, stratusbladeSupremo, tigronSupremo, shapeshiftSuprema, nebulaWitchSuprema]


var cartasMaquina = [];
var cartasJogador = [];


function sortearBaralho(){

       // Limpar localStorage antes de sortear novas cartas
    localStorage.removeItem('cartasMaquina');
    localStorage.removeItem('cartasJogador');
 
    for (var i = 0; i < 7; i++) {
        // Sorteio para a máquina
        var numeroCartaMaquina = parseInt(Math.random() * 20);
        if (Math.random() < 0.30) { 
            var cartaSupremaMaquina = parseInt(Math.random() * cartaSuprema.length);
            cartasMaquina.push(cartaSuprema[cartaSupremaMaquina]);
        } else {
            cartasMaquina.push(cartas[numeroCartaMaquina]);
        }

        // Sorteio para o jogador
        var numeroCartaJogador = parseInt(Math.random() * 20);
        if (Math.random() < 0.30) { 
            var cartaSupremaJogador = parseInt(Math.random() * cartaSuprema.length);
            cartasJogador.push(cartaSuprema[cartaSupremaJogador]);
        } else {
            cartasJogador.push(cartas[numeroCartaJogador]);
        }
    }

 localStorage.setItem('cartasMaquina', JSON.stringify(cartasMaquina));
    localStorage.setItem('cartasJogador', JSON.stringify(cartasJogador));
    exibirBaralho('containerCartas');
    carregarPersonagens();
}


function exibirBaralho(divContainerId) {
    var cartas = JSON.parse(localStorage.getItem('cartasJogador'));
    var container = document.getElementById(divContainerId);
    container.innerHTML = '';

    var ol = document.createElement('ol');
    ol.className = 'todas_cartas';
    container.appendChild(ol);

    cartas.forEach(function(carta) {
        var isSuprema = carta.nome.includes('Supremo') || carta.nome.includes('Suprema');
        var liCarta = document.createElement('li');
        liCarta.className = isSuprema ? 'carta_suprema' : 'Carta_Basica';

        var divCarta = document.createElement('div');
        divCarta.className = isSuprema ? 'carta_especial' : 'Carta_Padrao';

        var img = document.createElement('img');
        img.src = 'img/' + carta.nome + '.webp';

        var spanNome = document.createElement('span');
        spanNome.className = 'nome';
        spanNome.textContent = carta.nome;

        var ulSkillPoints = document.createElement('ul');
        ulSkillPoints.className = isSuprema ? 'skill_points' : 'Pontos_de_habilidade';

        var habilidades = ['forca', 'defesa', 'magia', 'velocidade', 'inteligencia'];
        habilidades.forEach(habilidade => {
            var liHabilidade = document.createElement('li');
            liHabilidade.className = habilidade;
            liHabilidade.innerHTML = '<h6>' + habilidade.toUpperCase() + ' :</h6>' + carta[habilidade];
            ulSkillPoints.appendChild(liHabilidade);
        });

        divCarta.appendChild(img);
        divCarta.appendChild(spanNome);
        divCarta.appendChild(ulSkillPoints);
        liCarta.appendChild(divCarta);
        ol.appendChild(liCarta);
    });
}


function carregarPersonagens() {
    var cartasJogador = JSON.parse(localStorage.getItem('cartasJogador')) || [];
    var seletorPersonagem = document.getElementById('seletor1');
    seletorPersonagem.innerHTML = '<option selected>SELECIONE O PERSONAGEM</option>'; // Limpa as opções anteriores

    cartasJogador.forEach(function(carta, index) {
        var opcao = document.createElement('option');
        opcao.textContent = carta.nome;
        opcao.value = index;
        seletorPersonagem.appendChild(opcao);
    });

    // Adiciona um ouvinte de eventos para quando uma opção for selecionada
    seletorPersonagem.addEventListener('change', function() {
        carregarAtributos(this.value);
    });
}

function carregarAtributos(index) {
    var cartasJogador = JSON.parse(localStorage.getItem('cartasJogador')) || [];
    var cartaSelecionada = cartasJogador[index];
    var seletorAtributo = document.getElementById('seletor2');
    seletorAtributo.innerHTML = '<option selected>SELECIONE O ATRIBUTO</option>'; // Limpa as opções anteriores

    var habilidades = ['forca', 'defesa', 'magia', 'velocidade', 'inteligencia'];
    habilidades.forEach(function(habilidade) {
        var opcao = document.createElement('option');
        opcao.textContent = habilidade.toUpperCase() + ': ' + cartaSelecionada[habilidade];
        seletorAtributo.appendChild(opcao);
    });
}


function salvarSelecao() {
    var seletorPersonagem = document.getElementById('seletor1');
    var index = seletorPersonagem.selectedIndex - 1; // Ajustar o índice
    var cartasJogador = JSON.parse(localStorage.getItem('cartasJogador')) || [];

    if (index >= 0 && cartasJogador[index]) {
        var cartaSelecionada = cartasJogador[index];
        localStorage.setItem('cartaJogadorSelecionada', JSON.stringify(cartaSelecionada));
        window.location.href = 'luta.html'; // Redireciona após salvar
    } else {
        console.log("Nenhuma carta selecionada.");
    }
}

function salvarAtributoSelecionado() {
    var seletorPersonagem = document.getElementById('seletor1');
    var seletorAtributo = document.getElementById('seletor2');

    var indexPersonagem = seletorPersonagem.selectedIndex - 1; // Ajustar o índice
    var indexAtributo = seletorAtributo.selectedIndex - 1; // Ajustar o índice

    if (indexPersonagem >= 0 && indexAtributo >= 0) {
        var cartasJogador = JSON.parse(localStorage.getItem('cartasJogador')) || [];
        var cartaSelecionada = cartasJogador[indexPersonagem];

        if (cartaSelecionada) {
            var atributoSelecionado = seletorAtributo.options[seletorAtributo.selectedIndex].text.split(':')[0].toLowerCase();
            localStorage.setItem('atributoSelecionado', atributoSelecionado);
        } else {
            console.log("Nenhuma carta ou atributo selecionado.");
        }
    } else {
        console.log("Nenhuma carta ou atributo selecionado.");
    }
}


function escolherCartaMaquina() {
    if (!localStorage.getItem('cartaMaquinaSelecionada')) {
        var cartasMaquina = JSON.parse(localStorage.getItem('cartasMaquina')) || [];
        var indiceCartaMaquina = parseInt(Math.random() * cartasMaquina.length);
        var cartaMaquinaSelecionada = cartasMaquina[indiceCartaMaquina];
        localStorage.setItem('cartaMaquinaSelecionada', JSON.stringify(cartaMaquinaSelecionada));
    }
}

// Função para criar a estrutura HTML da carta
function criarEstruturaCarta(carta) {
    var liCarta = document.createElement('li');
    liCarta.className = carta.nome.includes('Supremo') || carta.nome.includes('Suprema') ? 'carta_suprema' : 'Carta_Basica';

    var divCarta = document.createElement('div');
    divCarta.className = carta.nome.includes('Supremo') || carta.nome.includes('Suprema') ? 'carta_especial' : 'Carta_Padrao';

    var img = document.createElement('img');
    img.src = 'img/' + carta.nome + '.webp';
    img.className = 'img-fluid';

    var spanNome = document.createElement('span');
    spanNome.className = 'nome';
    spanNome.textContent = carta.nome;

    var ulSkillPoints = document.createElement('ul');
    ulSkillPoints.className = carta.nome.includes('Supremo') || carta.nome.includes('Suprema') ? 'skill_points' : 'Pontos_de_habilidade';

    var habilidades = ['forca', 'defesa', 'magia', 'velocidade', 'inteligencia'];
    habilidades.forEach(function(habilidade) {
        var liHabilidade = document.createElement('li');
        liHabilidade.className = habilidade;
        liHabilidade.innerHTML = '<h6>' + habilidade.toUpperCase() + ' :</h6>' + carta[habilidade];
        ulSkillPoints.appendChild(liHabilidade);
    });

    divCarta.appendChild(img);
    divCarta.appendChild(spanNome);
    divCarta.appendChild(ulSkillPoints);
    liCarta.appendChild(divCarta);

    return liCarta;
}

function eliminarCartaPerdedora(vencedor, indiceCartaPerdedora) {
    if (vencedor === 'jogador') {
        // Remove a carta da máquina
        var cartasMaquina = JSON.parse(localStorage.getItem('cartasMaquina')) || [];
        cartasMaquina.splice(indiceCartaPerdedora, 1);
        localStorage.setItem('cartasMaquina', JSON.stringify(cartasMaquina));
    } else if (vencedor === 'maquina') {
        // Remove a carta do jogador
        var cartasJogador = JSON.parse(localStorage.getItem('cartasJogador')) || [];
        cartasJogador.splice(indiceCartaPerdedora, 1);
        localStorage.setItem('cartasJogador', JSON.stringify(cartasJogador));
    }
}


function alternarRodada() {
    var cartasJogador = JSON.parse(localStorage.getItem('cartasJogador')) || [];
    var cartasMaquina = JSON.parse(localStorage.getItem('cartasMaquina')) || [];

    if (cartasJogador.length === 0) {
        
        window.location.href = "loser.html";
    } else if (cartasMaquina.length === 0) {
       
        window.location.href = "winner.html";
    } else {
      
        window.location.href = "game-trunfo.html"; 
    }
}

function compararAtributo(atributo, cartaJogador, cartaMaquina, indiceCartaJogador, indiceCartaMaquina) {
    let resultado;

    if (cartaJogador[atributo] > cartaMaquina[atributo]) {
        alert("Parabéns! Você venceu!");
        resultado = { vencedor: 'jogador', indiceCartaPerdedora: indiceCartaMaquina };
    } else if (cartaJogador[atributo] < cartaMaquina[atributo]) {
        alert("Você perdeu! Tente novamente.");
        resultado = { vencedor: 'maquina', indiceCartaPerdedora: indiceCartaJogador };
    } else {
        alert("Empate! Ninguém ganha ou perde.");
        resultado = { vencedor: 'empate' };
    }

    if (resultado.vencedor !== 'empate') {
        eliminarCartaPerdedora(resultado.vencedor, resultado.indiceCartaPerdedora);
    }
    
    alternarRodada();
    eliminarCartaPerdedora(vencedor, indiceCartaPerdedora);
    return resultado;
}

function iniciarBatalha() {
    var cartaJogadorSelecionada = JSON.parse(localStorage.getItem('cartaJogadorSelecionada'));
    var cartaMaquinaSelecionada = JSON.parse(localStorage.getItem('cartaMaquinaSelecionada'));
    var atributoSelecionado = localStorage.getItem('atributoSelecionado');

    if (cartaJogadorSelecionada && cartaMaquinaSelecionada && atributoSelecionado) {
        // Encontra os índices das cartas selecionadas
        var indiceCartaJogador = JSON.parse(localStorage.getItem('cartasJogador')).findIndex(carta => carta.nome === cartaJogadorSelecionada.nome);
        var indiceCartaMaquina = JSON.parse(localStorage.getItem('cartasMaquina')).findIndex(carta => carta.nome === cartaMaquinaSelecionada.nome);

        compararAtributo(atributoSelecionado, cartaJogadorSelecionada, cartaMaquinaSelecionada, indiceCartaJogador, indiceCartaMaquina);
    } else {
        alert("Por favor, selecione uma carta e um atributo antes de lutar.");
    }
}


