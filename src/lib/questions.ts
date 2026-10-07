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
];

export const TOPICS: Topic[] = ["Manifesto", "Scrum", "Kanban", "XP", "Lean"];

export function questionsByDifficulty(d: Difficulty): Question[] {
  return QUESTIONS.filter((q) => q.difficulty === d);
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i]!;
    a[i] = a[j]!;
    a[j] = t;
  }
  return a;
}
