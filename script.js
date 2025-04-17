// PARTE 1: Lista de perguntas e respostas
perguntas = [
    {
        pergunta: "Quem é o portador da relíquia de conhecimento?",
        respostas: [
            { opcao: "A Magistrada", correto: true },
            { opcao: "O Anfitrião", correto: false },
            { opcao: "O Diabo", correto: false },
            { opcao: "O Deus da Morte", correto: false }
        ]
    },
    {
        pergunta: "Como se chamam os moradores de Santo Berço?",
        respostas: [
            { opcao: "Luzídios", correto: true },
            { opcao: "Marcados", correto: false },
            { opcao: "Alheios", correto: false },
            { opcao: "Viajantes", correto: false }
        ]
    },
    {
        pergunta: "Quantos são os tipos de alheios?",
        respostas: [
            { opcao: "13", correto: false },
            { opcao: "10", correto: false },
            { opcao: "15", correto: true },
            { opcao: "5", correto: false }
        ]
    },
    {
        pergunta: "Quem é o anfitrião?",
        respostas: [
            { opcao: "Thiago Fritz", correto: false },
            { opcao: "Arnaldo Fritz", correto: true },
            { opcao: "Elizabeth Webber", correto: false },
            { opcao: "Rubens Naluti", correto: false }
        ]
    },
    {
        pergunta: "Qual o nome do pintor que morava na mansão na ilha de Típora?",
        respostas: [
            { opcao: "Barnabé Aleno", correto: false },
            { opcao: "Celestino Vurtoren", correto: false },
            { opcao: "Montel Florence", correto: false },
            { opcao: "Constantino Moretti", correto: true }
        ]
    },
    {
        pergunta: "Quem é o principal vilão de Ordem Paranormal?",
        respostas: [
            { opcao: "Gal", correto: false },
            { opcao: "Kian", correto: true },
            { opcao: "Diabo", correto: false },
            { opcao: "A Porta", correto: false }
        ]
    },
    {
        pergunta: "Quem foram Os Cinco?",
        respostas: [
            { opcao: "Arthur, Joui, Thiago, Liz e César", correto: false },
            { opcao: "Amelie, Olivier, Milo, Bárbara e Wanderley", correto: false },
            { opcao: "Xande, Dara, Guizo, Lírio e Chico", correto: true},
            { opcao: "Artemis, Boris, Damir, T-Bag e Gal", correto: false}
        ]
    },
    {
        pergunta: "Quem colocou a máscara do Caçador de Gente?",
        respostas: [
            { opcao: "Melissa Trovi", correto: false },
            { opcao: "Jorel Lagos", correto: true },
            { opcao: "Ayla Valença", correto: false},
            { opcao: "Jorge Lagos", correto: false}
        ]
    }
];

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
        // Pega a resposta atual com base no índice 'i'
        const resposta = perguntaAtual.respostas[i];
        // Cria um novo elemento 'button' (botão)
        const botao = document.createElement("button");
        // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
        botao.classList.add("botao-resposta");
        // Define o texto do botão com a opção de resposta (resposta.opcao)
        botao.innerText = resposta.opcao;
        // Adiciona um evento de clique no botão
        botao.onclick = function () {
            // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
            if (resposta.correto) {
                acertos = acertos;
                acertos++; // Incrementa o contador de acertos
            }

            // Avança para a próxima pergunta
            indiceAtual++;

            // Se ainda houver perguntas, carrega a próxima pergunta
            if (indiceAtual < perguntas.length) {
                carregarPergunta(); // Carrega a próxima pergunta
            } else {
                // Se não houver mais perguntas, finaliza o jogo
                finalizarJogo();
            }
        };

        // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
        respostasElemento.appendChild(botao);
    }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();
