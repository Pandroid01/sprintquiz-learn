export type Topic = "Manifesto" | "Scrum" | "Kanban" | "XP" | "Lean";
export type Difficulty = "facil" | "medio" | "dificil";

export interface Question {
  topic: Topic;
  difficulty: Difficulty;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  facil: "Fácil",
  medio: "Médio",
  dificil: "Difícil",
};

export const DIFFICULTY_POINTS: Record<Difficulty, number> = {
  facil: 10,
  medio: 15,
  dificil: 20,
};

export const QUESTIONS: Question[] = [
  // ===== FÁCIL =====
  { topic: "Manifesto", difficulty: "facil", question: "Em que ano foi publicado o Manifesto Ágil?", options: ["1995", "2001", "2008", "2010"], answer: 1, explanation: "O Manifesto Ágil foi escrito em fevereiro de 2001 por 17 desenvolvedores em Snowbird, Utah (EUA)." },
  { topic: "Manifesto", difficulty: "facil", question: "Segundo o Manifesto, o que é mais valorizado?", options: ["Processos e ferramentas", "Documentação abrangente", "Indivíduos e interações", "Seguir um plano"], answer: 2, explanation: "\"Indivíduos e interações mais que processos e ferramentas\" é o primeiro dos quatro valores." },
  { topic: "Manifesto", difficulty: "facil", question: "Quantos valores tem o Manifesto Ágil?", options: ["4", "6", "10", "12"], answer: 0, explanation: "São 4 valores (e 12 princípios)." },
  { topic: "Scrum", difficulty: "facil", question: "Quais são os três papéis (responsabilidades) do Scrum?", options: ["Gerente, Analista e Dev", "Product Owner, Scrum Master e Developers", "Cliente, Líder e Testador", "Arquiteto, PO e QA"], answer: 1, explanation: "O Scrum Guide define Product Owner, Scrum Master e Developers." },
  { topic: "Scrum", difficulty: "facil", question: "Quem é responsável por ordenar o Product Backlog?", options: ["Scrum Master", "Developers", "Stakeholders", "Product Owner"], answer: 3, explanation: "O Product Owner é responsável por maximizar o valor e gerenciar o Product Backlog." },
  { topic: "Scrum", difficulty: "facil", question: "Qual o timebox da Daily Scrum?", options: ["15 minutos", "30 minutos", "1 hora", "Sem limite"], answer: 0, explanation: "A Daily Scrum dura 15 minutos para os Developers inspecionarem o progresso rumo à Meta da Sprint." },
  { topic: "Scrum", difficulty: "facil", question: "Quem participa da Daily Scrum?", options: ["Apenas o Scrum Master", "Os Developers", "Apenas o Product Owner", "Os clientes"], answer: 1, explanation: "A Daily é um evento dos Developers; PO e Scrum Master participam se também forem Developers." },
  { topic: "Kanban", difficulty: "facil", question: "O que significa a palavra \"Kanban\" em japonês?", options: ["Fluxo contínuo", "Cartão visual / sinal", "Melhoria", "Equipe"], answer: 1, explanation: "Kanban significa algo como \"cartão\" ou \"sinal visual\", originado na Toyota." },
  { topic: "XP", difficulty: "facil", question: "Qual prática é típica do Extreme Programming (XP)?", options: ["Programação em par", "Planejamento anual", "Documentação extensa", "Testes só no final"], answer: 0, explanation: "XP inclui pair programming, TDD, integração contínua e refatoração." },
  { topic: "Lean", difficulty: "facil", question: "Qual é o foco central do Lean?", options: ["Aumentar reuniões", "Eliminar desperdício e entregar valor", "Contratar mais pessoas", "Documentar tudo"], answer: 1, explanation: "Lean busca maximizar valor eliminando desperdícios (muda)." },

  // ===== MÉDIO =====
  { topic: "Manifesto", difficulty: "medio", question: "Quantos princípios acompanham o Manifesto Ágil?", options: ["4", "7", "10", "12"], answer: 3, explanation: "São 4 valores e 12 princípios." },
  { topic: "Manifesto", difficulty: "medio", question: "\"Responder a mudanças\" é mais valorizado que...", options: ["Seguir um plano", "Colaborar com o cliente", "Software funcionando", "Entregas frequentes"], answer: 0, explanation: "O valor completo é: responder a mudanças mais que seguir um plano." },
  { topic: "Scrum", difficulty: "medio", question: "Qual a duração máxima de uma Sprint?", options: ["1 semana", "2 semanas", "1 mês", "3 meses"], answer: 2, explanation: "Sprints têm duração fixa de até um mês." },
  { topic: "Scrum", difficulty: "medio", question: "Qual evento serve para o time melhorar sua forma de trabalhar?", options: ["Sprint Review", "Sprint Planning", "Sprint Retrospective", "Daily Scrum"], answer: 2, explanation: "A Retrospectiva planeja formas de aumentar qualidade e eficácia." },
  { topic: "Scrum", difficulty: "medio", question: "Qual o papel principal do Scrum Master?", options: ["Chefiar o time", "Escrever o código", "Definir o escopo", "Servir ao time e garantir a eficácia do Scrum"], answer: 3, explanation: "O Scrum Master é um líder que serve, removendo impedimentos e ensinando Scrum." },
  { topic: "Kanban", difficulty: "medio", question: "O que é o limite de WIP?", options: ["Limite de itens em andamento por etapa", "Limite de horas por dia", "Número de reuniões", "Tamanho do time"], answer: 0, explanation: "WIP (Work In Progress) limita o trabalho simultâneo, reduzindo gargalos." },
  { topic: "Kanban", difficulty: "medio", question: "Onde o Kanban foi criado originalmente?", options: ["Na Toyota", "Na Microsoft", "No MIT", "Na NASA"], answer: 0, explanation: "O sistema Kanban surgiu na Toyota nos anos 1940, como parte do Lean Manufacturing." },
  { topic: "Kanban", difficulty: "medio", question: "Kanban prescreve iterações de tamanho fixo?", options: ["Sim, de 2 semanas", "Sim, de 1 mês", "Apenas para times grandes", "Não, o fluxo é contínuo"], answer: 3, explanation: "Kanban foca em fluxo contínuo, sem sprints obrigatórias." },
  { topic: "XP", difficulty: "medio", question: "O que é TDD?", options: ["Testar depois de desenvolver", "Escrever o teste antes do código", "Testes manuais diários", "Documentação técnica"], answer: 1, explanation: "Test-Driven Development: vermelho (teste falha), verde (passa), refatorar." },
  { topic: "Lean", difficulty: "medio", question: "O que é um MVP?", options: ["Produto final completo", "Melhor jogador do time", "Plano de projeto", "Produto Mínimo Viável para aprender com usuários"], answer: 3, explanation: "MVP é a menor versão que permite validar hipóteses com o mínimo de esforço." },

  // ===== DIFÍCIL =====
  { topic: "Manifesto", difficulty: "dificil", question: "Segundo os princípios do Manifesto, qual é a principal medida de progresso?", options: ["Linhas de código escritas", "Software funcionando", "Reuniões realizadas", "Documentos aprovados"], answer: 1, explanation: "\"Software funcionando é a medida primária de progresso\" é um dos 12 princípios." },
  { topic: "Scrum", difficulty: "dificil", question: "O que é o Incremento?", options: ["Uma lista de tarefas", "Um passo concreto em direção à Meta do Produto, utilizável", "O relatório do Scrum Master", "O aumento da equipe"], answer: 1, explanation: "Cada Incremento é aditivo, verificado e deve atender à Definição de Pronto." },
  { topic: "Scrum", difficulty: "dificil", question: "Quem pode cancelar uma Sprint?", options: ["Qualquer stakeholder", "O Scrum Master", "O Product Owner", "Os Developers"], answer: 2, explanation: "Somente o Product Owner pode cancelar uma Sprint, geralmente quando a Meta da Sprint se torna obsoleta." },
  { topic: "Scrum", difficulty: "dificil", question: "O que é a Definição de Pronto (Definition of Done)?", options: ["Um contrato com o cliente", "Descrição formal do estado do Incremento quando atende a qualidade exigida", "Lista de tarefas da Sprint", "Critério para contratar pessoas"], answer: 1, explanation: "A DoD é o compromisso do artefato Incremento: define a qualidade mínima para considerar o trabalho concluído." },
  { topic: "Kanban", difficulty: "dificil", question: "Qual métrica mede o tempo do pedido até a entrega?", options: ["Velocity", "Burndown", "Lead Time", "Story Points"], answer: 2, explanation: "Lead time vai da solicitação até a entrega; cycle time mede do início do trabalho até o fim." },
  { topic: "Kanban", difficulty: "dificil", question: "O que o Cycle Time mede no Kanban?", options: ["Tempo do pedido até a entrega", "Tempo entre reuniões", "Tempo do início do trabalho até a conclusão do item", "Tempo de deploy"], answer: 2, explanation: "Cycle time começa quando o trabalho efetivamente inicia e termina quando o item fica pronto." },
  { topic: "XP", difficulty: "dificil", question: "Quem criou o Extreme Programming?", options: ["Ken Schwaber", "Taiichi Ohno", "Kent Beck", "Jeff Sutherland"], answer: 2, explanation: "Kent Beck formalizou o XP no fim dos anos 1990." },
  { topic: "XP", difficulty: "dificil", question: "O que é refatoração?", options: ["Reescrever o sistema do zero", "Melhorar a estrutura interna do código sem mudar seu comportamento", "Adicionar novas funcionalidades", "Corrigir bugs em produção"], answer: 1, explanation: "Refatorar é reestruturar o código mantendo o comportamento observável, para melhorar legibilidade e design." },
  { topic: "Lean", difficulty: "dificil", question: "No Lean, o que significa \"muda\"?", options: ["Melhoria contínua", "Desperdício", "Fluxo", "Qualidade"], answer: 1, explanation: "Muda é o termo japonês para desperdício — qualquer atividade que não agrega valor ao cliente." },
  { topic: "Lean", difficulty: "dificil", question: "Qual destes é um dos 7 desperdícios do Lean?", options: ["Pair programming", "Integração contínua", "Trabalho parcialmente concluído", "Feedback do cliente"], answer: 2, explanation: "Trabalho parcialmente concluído (WIP excessivo) é um dos 7 desperdícios, junto de retrabalho, espera, transporte etc." },

  // ===== NOVAS VARIAÇÕES: FÁCIL =====
  { topic: "Manifesto", difficulty: "facil", question: "Qual entrega é mais valorizada pelo Manifesto Ágil?", options: ["Software funcionando", "Relatórios extensos", "Planos imutáveis", "Mais ferramentas"], answer: 0, explanation: "O Manifesto valoriza software funcionando mais que documentação abrangente, sem descartar a importância da documentação." },
  { topic: "Manifesto", difficulty: "facil", question: "Qual relação com o cliente é valorizada no Manifesto?", options: ["Evitar contato", "Colaborar com o cliente", "Conversar apenas na entrega", "Substituir feedback por contratos"], answer: 1, explanation: "Colaboração com o cliente é mais valorizada que negociação de contratos." },
  { topic: "Scrum", difficulty: "facil", question: "Como se chama o período de trabalho de duração fixa no Scrum?", options: ["Release anual", "Sprint", "Fila", "Contrato"], answer: 1, explanation: "A Sprint é um evento de duração fixa, de um mês ou menos, que contém os demais eventos do Scrum." },
  { topic: "Scrum", difficulty: "facil", question: "Qual evento permite inspecionar o resultado da Sprint com stakeholders?", options: ["Daily Scrum", "Sprint Planning", "Sprint Review", "Sprint Retrospective"], answer: 2, explanation: "Na Sprint Review, o Scrum Team e stakeholders inspecionam o resultado e discutem adaptações futuras." },
  { topic: "Kanban", difficulty: "facil", question: "Para que serve visualizar o trabalho em um quadro Kanban?", options: ["Esconder atrasos", "Substituir toda comunicação", "Garantir que tudo comece junto", "Tornar o fluxo e o estado dos itens visíveis"], answer: 3, explanation: "A visualização permite compreender o fluxo e identificar itens em andamento, bloqueios e oportunidades de melhoria." },
  { topic: "Kanban", difficulty: "facil", question: "Em um quadro simples, o que representa a coluna 'Concluído'?", options: ["Itens que atenderam aos critérios de conclusão", "Ideias ainda não avaliadas", "Trabalho que acabou de começar", "Itens bloqueados"], answer: 0, explanation: "A coluna Concluído reúne itens que satisfazem as políticas de conclusão definidas pelo time." },
  { topic: "XP", difficulty: "facil", question: "Na programação em par, como as pessoas trabalham?", options: ["Sem conversar", "Em tarefas sem relação", "Duas pessoas colaboram no mesmo código", "Uma pessoa só testa no fim do mês"], answer: 2, explanation: "Duas pessoas colaboram no mesmo trabalho, alternando a condução e a revisão do raciocínio e do código." },
  { topic: "XP", difficulty: "facil", question: "Qual prática do XP integra alterações com frequência?", options: ["Integração contínua", "Congelamento anual", "Entrega única", "Revisão apenas no fim"], answer: 0, explanation: "Integração contínua reúne alterações frequentemente e usa verificações automatizadas para detectar problemas cedo." },
  { topic: "Lean", difficulty: "facil", question: "Quem define se uma atividade entrega valor no pensamento Lean?", options: ["A quantidade de reuniões", "A perspectiva do cliente", "O tamanho do documento", "O número de tarefas abertas"], answer: 1, explanation: "Valor é entendido pela perspectiva do cliente, não apenas pelo esforço gasto pela equipe." },
  { topic: "Lean", difficulty: "facil", question: "O que significa melhoria contínua?", options: ["Nunca mudar o processo", "Mudar tudo sem avaliar", "Esperar a próxima crise", "Melhorar o trabalho de forma recorrente"], answer: 3, explanation: "Melhoria contínua envolve observar, experimentar e avaliar ajustes recorrentes na forma de trabalhar." },

  // ===== NOVAS VARIAÇÕES: MÉDIO =====
  { topic: "Manifesto", difficulty: "medio", question: "Como o Manifesto trata os itens à direita de seus quatro valores?", options: ["São proibidos", "Não têm valor algum", "Têm valor, mas os itens à esquerda são mais valorizados", "Devem sempre vir primeiro"], answer: 2, explanation: "O Manifesto reconhece valor nos itens à direita, mas valoriza mais os itens à esquerda." },
  { topic: "Manifesto", difficulty: "medio", question: "O que os princípios ágeis dizem sobre o ritmo de trabalho?", options: ["Deve ser sustentável por tempo indefinido", "Deve exigir horas extras constantes", "Só importa na última semana", "Deve aumentar todos os dias"], answer: 0, explanation: "Desenvolvimento sustentável permite que patrocinadores, desenvolvedores e usuários mantenham um ritmo constante indefinidamente." },
  { topic: "Scrum", difficulty: "medio", question: "Quais são os três pilares do empirismo no Scrum?", options: ["Prazo, custo e escopo", "Transparência, inspeção e adaptação", "Código, teste e deploy", "Planejamento, comando e controle"], answer: 1, explanation: "O Scrum se apoia em transparência, inspeção e adaptação para tomar decisões a partir da experiência." },
  { topic: "Scrum", difficulty: "medio", question: "Quem cria o plano de trabalho do Sprint Backlog?", options: ["Os stakeholders", "A diretoria", "Somente o Product Owner", "Os Developers"], answer: 3, explanation: "O Sprint Backlog é um plano feito pelos e para os Developers e é atualizado conforme aprendem durante a Sprint." },
  { topic: "Kanban", difficulty: "medio", question: "O que caracteriza um sistema puxado?", options: ["Novos itens entram quando existe capacidade disponível", "Todos os pedidos começam imediatamente", "Um gerente distribui trabalho sem limites", "Cada pessoa inicia o máximo possível"], answer: 0, explanation: "Em um sistema puxado, a capacidade disponível sinaliza quando iniciar ou puxar novo trabalho." },
  { topic: "Kanban", difficulty: "medio", question: "O que a métrica throughput mede?", options: ["Tempo de uma reunião", "Número de pessoas", "Quantidade de itens concluídos por unidade de tempo", "Tamanho estimado de cada item"], answer: 2, explanation: "Throughput é a quantidade de itens concluídos em um período, por exemplo, itens por semana." },
  { topic: "XP", difficulty: "medio", question: "Qual é a sequência mais conhecida do ciclo de TDD?", options: ["Documentar, publicar, testar", "Vermelho, verde, refatorar", "Refatorar, abandonar, reescrever", "Planejar, esperar, integrar"], answer: 1, explanation: "Primeiro um teste falha (vermelho), depois o código o faz passar (verde) e então a estrutura é melhorada (refatorar)." },
  { topic: "XP", difficulty: "medio", question: "O que significa propriedade coletiva do código no XP?", options: ["Só o autor pode alterar um arquivo", "Ninguém é responsável pela qualidade", "Não existem testes", "A equipe pode melhorar qualquer parte do código com responsabilidade"], answer: 3, explanation: "A propriedade coletiva permite contribuições em todo o código, apoiadas por testes e padrões compartilhados." },
  { topic: "Lean", difficulty: "medio", question: "Qual exemplo representa desperdício por espera?", options: ["Validar uma hipótese com um usuário", "Automatizar testes", "Um item parado aguardando aprovação desnecessária", "Concluir trabalho com qualidade"], answer: 2, explanation: "Tempo parado sem agregar valor, como em aprovações desnecessárias, é desperdício por espera." },
  { topic: "Lean", difficulty: "medio", question: "O que significa otimizar o todo no Lean?", options: ["Melhorar o fluxo completo de entrega, não apenas uma etapa", "Maximizar a ocupação de cada pessoa", "Focar apenas na velocidade de codificação", "Ignorar problemas entre equipes"], answer: 0, explanation: "Uma melhoria local pode piorar o sistema; otimizar o todo considera o fluxo de valor de ponta a ponta." },

  // ===== NOVAS VARIAÇÕES: DIFÍCIL =====
  { topic: "Manifesto", difficulty: "dificil", question: "O cliente solicita uma mudança valiosa no fim do desenvolvimento. Qual princípio ágil orienta a decisão?", options: ["Recusar qualquer mudança tardia", "Aceitar mudanças de requisitos, mesmo tardiamente, para gerar vantagem ao cliente", "Eliminar todos os planos", "Entregar sem discutir impacto"], answer: 1, explanation: "Os princípios acolhem mudanças mesmo tardiamente. O impacto deve ser discutido para adaptar a entrega e gerar valor." },
  { topic: "Manifesto", difficulty: "dificil", question: "No princípio da simplicidade, o que significa maximizar o trabalho não realizado?", options: ["Ignorar testes necessários", "Omitir requisitos essenciais", "Evitar trabalho desnecessário e focar no valor", "Reduzir a colaboração"], answer: 2, explanation: "Simplicidade significa evitar esforço que não é necessário para entregar valor, sem comprometer qualidade ou necessidades reais." },
  { topic: "Scrum", difficulty: "dificil", question: "Quais compromissos correspondem a Product Backlog, Sprint Backlog e Incremento, respectivamente?", options: ["Meta do Produto, Meta da Sprint e Definição de Pronto", "Prazo, orçamento e contrato", "Velocity, burndown e roadmap", "Daily, Review e Retrospectiva"], answer: 0, explanation: "Cada artefato tem um compromisso: Product Goal, Sprint Goal e Definition of Done, respectivamente." },
  { topic: "Scrum", difficulty: "dificil", question: "Um item não atende à Definição de Pronto ao fim da Sprint. O que acontece?", options: ["É considerado pronto se o prazo acabou", "É apresentado como Incremento concluído", "É entregue sem verificação", "Volta ao Product Backlog para consideração futura"], answer: 3, explanation: "Um item que não atende à Definição de Pronto não faz parte do Incremento, não pode ser liberado nem apresentado na Review como concluído." },
  { topic: "Kanban", difficulty: "dificil", question: "Em um sistema estável, com WIP médio de 12 itens e throughput médio de 3 itens/dia, qual é o cycle time médio pela Lei de Little?", options: ["36 dias", "4 dias", "9 dias", "0,25 dia"], answer: 1, explanation: "Com fronteiras consistentes e estabilidade, cycle time médio = WIP médio / throughput médio: 12 / 3 = 4 dias." },
  { topic: "Kanban", difficulty: "dificil", question: "Uma etapa está no limite de WIP e vários itens estão bloqueados. Qual ação favorece o fluxo?", options: ["Começar mais itens para manter todos ocupados", "Esconder os itens bloqueados", "Colaborar para remover bloqueios antes de puxar mais trabalho", "Aumentar o limite automaticamente"], answer: 2, explanation: "O limite expõe problemas de fluxo. Colaborar para desbloquear e concluir trabalho evita acumular ainda mais itens." },
  { topic: "XP", difficulty: "dificil", question: "Após fazer um teste passar no TDD, a equipe encontra duplicação no código. Qual é o próximo passo?", options: ["Refatorar mantendo os testes passando", "Apagar os testes", "Adicionar funcionalidades não solicitadas", "Aceitar a duplicação para sempre"], answer: 0, explanation: "A fase de refatoração melhora a estrutura sem alterar comportamento, usando os testes como rede de segurança." },
  { topic: "XP", difficulty: "dificil", question: "Qual combinação melhor sustenta mudanças frequentes com segurança no XP?", options: ["Grandes lotes e testes só no final", "Código sem revisão e deploy anual", "Documentação substituindo testes", "Testes automatizados, integração contínua e refatoração"], answer: 3, explanation: "Essas práticas se reforçam: testes detectam regressões, integração revela conflitos cedo e refatoração mantém o código adaptável." },
  { topic: "Lean", difficulty: "dificil", question: "Uma equipe acelera uma etapa, mas aumenta a fila na etapa seguinte sem melhorar entregas. Qual conceito Lean foi negligenciado?", options: ["Propriedade individual", "Otimização do todo", "Aumento de lotes", "Planejamento anual"], answer: 1, explanation: "Otimizar uma etapa isolada não garante melhorar o fluxo completo; pode apenas deslocar ou aumentar o gargalo." },
  { topic: "Lean", difficulty: "dificil", question: "Como 'adiar decisões' deve ser entendido no Lean Software Development?", options: ["Nunca tomar decisões", "Esperar uma crise", "Decidir no último momento responsável, preservando opções e aprendizado", "Ignorar prazos e riscos"], answer: 2, explanation: "Adiar o compromisso até o último momento responsável permite aprender mais sem perder a oportunidade de agir nem assumir riscos indevidos." },
];

export const TOPICS: Topic[] = ["Manifesto", "Scrum", "Kanban", "XP", "Lean"];

export function questionsByDifficulty(d: Difficulty): Question[] {
  return QUESTIONS.filter((q) => q.difficulty === d);
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i];
    const other = a[j];
    if (t === undefined || other === undefined) continue;
    a[i] = other;
    a[j] = t;
  }
  return a;
}
