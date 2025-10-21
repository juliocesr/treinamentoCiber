const conteudo = document.getElementById("conteudo");
let temaAtual = 0;
let indiceTopico = 0;
let respostas = {};
let notas = [];
const imgs = [
  "./img/img1.jpg",
  "./img/img2.jpg",
  "./img/img3.jpg"
];

function mudarImgTema(temaIndex) {
  document.body.style.backgroundImage = `url('${imgs[temaIndex]}')`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.transition = "background-image 0.8s ease-in-out";
}


const temas = [
    {
    titulo: "Segurança da Informação",
    intro: "A Segurança da Informação é o conjunto de cuidados que tomamos para proteger nossos dados — seja no computador, no celular ou na internet. Ela serve para evitar que informações importantes sejam roubadas, alteradas ou perdidas. Assim como trancamos a porta de casa para não deixar estranhos entrarem, também precisamos proteger os nossos dados digitais. Isso envolve criar boas senhas, não compartilhar informações pessoais com qualquer pessoa e ter cuidado com e-mails ou links suspeitos. Hoje em dia, a segurança da informação é importante para todos, não só para quem trabalha com tecnologia. Proteger suas informações é proteger sua privacidade, seus bens e sua tranquilidade no mundo digital.",
    topicos: [
        { titulo: "Confidencialidade", texto: "A confidencialidade é o cuidado de manter o sigilo das informações. Significa garantir que só pessoas autorizadas possam acessar certos dados. Por exemplo, sua senha do banco é algo que apenas você deve saber. Se outra pessoa descobrir, ela pode usar seu dinheiro sem sua permissão. Por isso, é importante criar senhas fortes, não compartilhar logins e usar recursos de segurança como autenticação em dois fatores (aquele código que chega por mensagem ou aplicativo). A confidencialidade é como colocar uma chave em algo valioso: apenas quem tem a chave certa pode abrir." },
        { titulo: "Integridade", texto: "A integridade serve para garantir que a informação não seja modificada por engano ou de propósito. Isso quer dizer que um dado deve permanecer exatamente como foi criado, sem alterações indevidas. Imagine que você envia um arquivo com notas da escola e alguém altera os valores antes que chegue ao destino — isso quebra a integridade. Para evitar esse tipo de problema, é importante fazer cópias de segurança (backup) e usar antivírus ou programas que verifiquem arquivos. A integridade garante que as informações sejam verdadeiras e confiáveis, do mesmo jeito em que foram criadas." },
        { titulo: "Disponibilidade", texto: "A disponibilidade garante que as informações e sistemas estejam sempre prontos para uso quando alguém precisar. De nada adianta ter dados seguros se, na hora de acessar, o sistema está fora do ar. Um exemplo simples é o de uma empresa que usa o computador para registrar vendas: se o sistema parar, ela não consegue trabalhar. Para evitar isso, é importante fazer manutenção nos equipamentos, fazer backup dos arquivos e ter planos de recuperação em caso de falhas. A disponibilidade é o que garante que a tecnologia funcione bem e sem interrupções, permitindo que as pessoas possam confiar nos sistemas todos os dias." },
        { titulo: "Senhas Seguras", texto: "As senhas seguras são uma das formas mais simples e importantes de proteger suas informações. Elas funcionam como chaves digitais, que impedem que outras pessoas entrem em suas contas ou acessem seus dados. Uma senha fraca, como “123456” ou o próprio nome da pessoa, é muito fácil de adivinhar e pode permitir que alguém invada seu e-mail, rede social ou até o aplicativo do banco. Por isso, o ideal é criar senhas com letras maiúsculas e minúsculas, números e símbolos, e que não tenham relação direta com você. Também é importante não usar a mesma senha em todos os lugares e ativar a verificação em dois passos, que pede um código extra de segurança. Assim, mesmo que alguém descubra sua senha, ainda será difícil acessar sua conta. Cuidar das senhas é uma forma simples, mas poderosa, de manter sua vida digital protegida." }
    ],
    quiz: [
        { q: "O que significa 'confidencialidade'?", o: ["Disponibilidade de dados", "Acesso apenas a quem tem permissão", "Integridade de arquivos", "Backup automático"], c: 1 },
        { q: "O que é integridade da informação?", o: ["Evitar corrupção ou alteração indevida", "Garantir acesso a todos", "Ter backups", "Usar VPN"], c: 0 },
        { q: "Qual é uma senha segura?", o: ["123456", "verao2025", "k@z!0#S3gur0!", "senha123"], c: 2 }
    ]
    },
    {
    titulo: "Boas Práticas de Segurança",
    intro: "As boas práticas de segurança são hábitos simples que ajudam a proteger seus dados no dia a dia. Assim como trancar a porta ao sair de casa, também é importante cuidar do que você faz no mundo digital. Isso inclui não compartilhar senhas, evitar acessar sites desconhecidos, desconfiar de ofertas “boas demais” e proteger seus dispositivos com senha ou biometria. Outra boa prática é bloquear o computador ou celular quando não estiver usando e sair das contas depois de utilizá-las em computadores públicos. Essas atitudes parecem pequenas, mas fazem uma grande diferença. Quando todos adotam boas práticas, a chance de cair em golpes ou perder informações diminui muito.",
    topicos: [
        { titulo: "Autenticação de Dois Fatores", texto: "A autenticação de dois fatores, também chamada de verificação em duas etapas, é uma forma extra de proteger suas contas. Funciona assim: além da sua senha, você precisa confirmar sua identidade de outro jeito — por exemplo, com um código que chega por SMS, um aplicativo de autenticação ou até uma digital. Isso significa que, mesmo que alguém descubra sua senha, a pessoa ainda não consegue entrar na sua conta sem o segundo passo. Esse método é muito usado em redes sociais, e-mails e aplicativos de banco, pois aumenta bastante a segurança. É como ter duas chaves para abrir a mesma porta — se alguém conseguir uma, ainda falta a outra." },
        { titulo: "Atualizações", texto: "Fazer atualizações nos aparelhos e programas é essencial para manter a segurança. Quando o celular, computador ou aplicativo pede para atualizar, não é apenas para mudar o visual — muitas vezes, é para corrigir falhas de segurança que poderiam ser usadas por invasores. Ignorar essas atualizações deixa o sistema vulnerável a ataques. Por isso, é importante manter o sistema operacional, antivírus e aplicativos sempre atualizados. Isso pode ser feito de forma automática, configurando o dispositivo para instalar as atualizações assim que estiverem disponíveis. Atualizar é como trocar as fechaduras quando se descobre que elas estão com defeito: um cuidado simples, mas que evita muitos problemas." },
        { titulo: "Backup", texto: "O backup é uma cópia de segurança dos seus arquivos, feita para evitar a perda de informações importantes. Imagine que o computador quebre, o celular seja roubado ou um vírus apague tudo — se você tiver backup, pode recuperar seus dados facilmente. Ele pode ser feito em pendrives, HDs externos ou na nuvem (como Google Drive e OneDrive). O ideal é fazer backups regularmente, de preferência automáticos, e guardar as cópias em lugares diferentes. Assim, se algo acontecer com um dos dispositivos, seus arquivos ainda estarão protegidos. Fazer backup é uma forma simples de garantir que suas lembranças, documentos e trabalhos não sejam perdidos para sempre." },
        { titulo: "Cuidado com Links e Anexos", texto: "Ter cuidado com links e anexos é uma das atitudes mais importantes para se proteger de golpes na internet. Muitos ataques começam com mensagens falsas que parecem vir de bancos, empresas conhecidas ou até amigos, pedindo para clicar em um link ou abrir um arquivo. Esses links podem levar a sites falsos que roubam senhas, ou os anexos podem conter vírus que infectam seu computador. Por isso, nunca clique em nada sem ter certeza da origem. Sempre confira o endereço do site e desconfie de mensagens com erros de escrita ou tom urgente (“sua conta será bloqueada!”). O melhor é apagar e não responder. Ter atenção com links e anexos é como não abrir a porta para estranhos — um simples cuidado que pode evitar grandes problemas." }
    ],
    quiz: [
        { q: "Por que usar autenticação de dois fatores?", o: ["Para lembrar senhas", "Para aumentar segurança", "Para acelerar login", "Para usar Wi-Fi público"], c: 1 },
        { q: "Por que atualizar o sistema?", o: ["Para mudar o visual", "Para corrigir falhas e aumentar segurança", "Para deixar mais lento", "Não é necessário"], c: 1 },
        { q: "O que é backup?", o: ["Antivírus", "Cópia de segurança dos dados", "Rede protegida", "Firewall"], c: 1 }
    ]
    },
    {
    titulo: "Riscos Digitais e Conscientização",
    intro: "Os riscos digitais são as ameaças que existem quando usamos a internet, como golpes, roubo de dados e vírus. Estar consciente desses riscos é o primeiro passo para se proteger. Muitas pessoas acreditam que “isso nunca vai acontecer comigo”, mas qualquer um pode ser vítima se não tiver cuidado. Por isso, é importante desconfiar de mensagens suspeitas, não compartilhar informações pessoais e pensar antes de clicar. A conscientização é o que faz a diferença: quando você entende os perigos, passa a agir com mais atenção e a evitar atitudes arriscadas. A segurança começa com o comportamento do usuário — é ele quem decide se abre a porta ou a mantém trancada no mundo digital.",
    topicos: [
        { titulo: "Phishing", texto: "O phishing é um tipo de golpe em que criminosos tentam enganar a vítima para roubar informações, como senhas, números de cartão e dados pessoais. Normalmente, eles enviam e-mails, mensagens ou links que parecem ser de empresas conhecidas — bancos, redes sociais ou lojas —, mas que são falsos. O objetivo é fazer a pessoa clicar no link e colocar seus dados em um site falso, que imita o original. Para se proteger, é importante verificar o remetente da mensagem, nunca clicar em links desconhecidos e entrar no site digitando o endereço diretamente no navegador. Se a mensagem parecer urgente demais (“sua conta será bloqueada!”), desconfie. O phishing é um golpe de disfarce e pressa, por isso, a melhor defesa é a atenção." },
        { titulo: "Ransomware", texto: "O ransomware é um tipo de vírus que bloqueia o acesso aos seus arquivos ou sistema e exige um pagamento (resgate) para liberá-los. Ele geralmente chega por meio de anexos falsos em e-mails ou downloads de sites não confiáveis. Quando o computador é infectado, todos os arquivos — como fotos, documentos e planilhas — ficam criptografados, ou seja, trancados com uma senha que só o criminoso possui. A melhor forma de se proteger é fazer backups regulares, manter o antivírus atualizado e não abrir arquivos suspeitos. Pagar o resgate não garante que os dados serão devolvidos e ainda incentiva o crime. A prevenção é sempre o caminho mais seguro contra esse tipo de ataque." },
        { titulo: "Engenharia Social", texto: "A engenharia social é uma técnica usada por golpistas para manipular pessoas e obter informações confidenciais. Em vez de atacar o computador, eles atacam a confiança. O criminoso pode fingir ser um funcionário de banco, suporte técnico ou até um colega de trabalho, pedindo dados pessoais, senhas ou códigos de verificação. Muitas vezes, essas mensagens são convincentes e passam credibilidade. Para se proteger, nunca compartilhe informações pessoais por telefone, e-mail ou mensagem, e sempre confirme com a empresa ou pessoa envolvida antes de acreditar. A engenharia social mostra que o elo mais fraco na segurança não é a tecnologia, mas o ser humano — por isso, o conhecimento e a desconfiança saudável são as melhores defesas." },
        { titulo: "Wi-Fi Público", texto: "Usar Wi-Fi público, como em shoppings, cafés ou aeroportos, pode parecer prático, mas também é arriscado. Nessas redes, várias pessoas estão conectadas ao mesmo tempo, e um invasor pode tentar interceptar os dados que você envia ou recebe, como senhas e informações pessoais. Por isso, nunca acesse contas bancárias ou redes sociais em Wi-Fi público sem proteção. Se precisar usar, prefira redes protegidas por senha e evite sites que exigem login. Uma boa opção é usar uma VPN (Rede Privada Virtual), que cria uma conexão segura mesmo em redes abertas. Lembre-se: Wi-Fi gratuito pode sair caro se colocar sua segurança em risco." }
    ],
    quiz: [
        { q: "O que é phishing?", o: ["Backup de dados", "Mensagem falsa para roubar dados", "Sistema seguro", "VPN"], c: 1 },
        { q: "O que faz o ransomware?", o: ["Bloqueia dados e cobra resgate", "Aumenta a velocidade", "Faz backup", "Protege rede"], c: 0 },
        { q: "Por que evitar Wi-Fi público?", o: ["Sinal fraco", "Risco de interceptação de dados", "Mais caro", "Não funciona"], c: 1 }
    ]
    }
];

iniciarTreinamento();

function iniciarTreinamento() {
    conteudo.innerHTML = `
    <h2>Bem-vindo ao Treinamento</h2>
    <p>Segurança da informação é o conjunto de práticas que protegem dados e sistemas contra acessos indevidos, perda ou roubo. 
    Neste treinamento, você aprenderá conceitos básicos, boas práticas e riscos digitais.</p>
    <button id="comecarBtn" disabled>Começar Treinamento</button>
    `;
    setTimeout(() => document.getElementById("comecarBtn").disabled = false, 1000);
    document.getElementById("comecarBtn").addEventListener("click", () => mostrarIntroducaoTema());
    document.body.style.backgroundImage = "url('img/img1.jpg')";

}

function mostrarIntroducaoTema() {
    const tema = temas[temaAtual];
    mudarImgTema(temaAtual);
    indiceTopico = 0;
    conteudo.innerHTML = `
    <h2>${tema.titulo}</h2>
    <p>${tema.intro}</p>
    <button id="iniciarTema" disabled>Iniciar</button>
    `;
    setTimeout(() => document.getElementById("iniciarTema").disabled = false, 1000);
    document.getElementById("iniciarTema").addEventListener("click", mostrarTopico);
}

function mostrarTopico() {
    const tema = temas[temaAtual];
    const t = tema.topicos[indiceTopico];
    conteudo.innerHTML = `
    <h3>${t.titulo}</h3>
    <p>${t.texto}</p>
    <button id="proximoBtn" disabled>Próximo</button>
    `;
    setTimeout(() => document.getElementById("proximoBtn").disabled = false, 1000);
    document.getElementById("proximoBtn").addEventListener("click", proximoTopico);
}

function proximoTopico() {
    indiceTopico++;
    const tema = temas[temaAtual];
    if (indiceTopico < tema.topicos.length) {
    mostrarTopico();
    } else {
    iniciarQuiz();
    }
}

function iniciarQuiz() {
    respostas = {};
    const tema = temas[temaAtual];
    conteudo.innerHTML = `<h3>Quiz – ${tema.titulo}</h3>`;
    tema.quiz.forEach((p, i) => {
    const bloco = document.createElement("div");
    bloco.innerHTML = `<p><strong>${i + 1}.</strong> ${p.q}</p>`;
    p.o.forEach((op, j) => {
        bloco.innerHTML += `<div class="opcao" onclick="selecionarOpcao(${i}, ${j}, this)">${op}</div>`;
    });
    conteudo.appendChild(bloco);
    });
    conteudo.innerHTML += `<button onclick="finalizarQuiz()">Enviar Respostas</button>`;
}

function selecionarOpcao(i, j, el) {
    respostas[i] = j;
    const opcoes = el.parentElement.querySelectorAll(".opcao");
    opcoes.forEach(o => o.style.background = "#f0f0f0");
    el.style.background = "#d1e7ff";
}

function finalizarQuiz() {
    const tema = temas[temaAtual];
    let acertos = 0;
    tema.quiz.forEach((p, i) => {
    if (respostas[i] === p.c) acertos++;
    });
    const nota = (acertos / tema.quiz.length) * 10;
    notas.push(nota);
    temaAtual++;
    if (temaAtual < temas.length) {
    mostrarIntroducaoTema();
    } else {
    mostrarResultadoFinal();
    }
}

function mostrarResultadoFinal() {
    const media = notas.reduce((a,b) => a + b, 0) / notas.length;
    conteudo.innerHTML = `
    <h2>Treinamento Concluído!</h2>
    <p>Sua nota final: <strong>${media.toFixed(1)}</strong></p>
    <p>${media >= 8 ? "✅ Parabéns! Você foi aprovado." : "❌ Você não atingiu a média mínima de 8. Tente novamente."}</p>
    `;
}