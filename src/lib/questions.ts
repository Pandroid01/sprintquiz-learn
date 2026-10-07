export type Topic = "Manifesto" | "Scrum" | "Kanban" | "XP" | "Lean";

export interface Question {
  topic: Topic;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export const QUESTIONS: Question[] = [
  { topic: "Manifesto", question: "Em que ano foi publicado o Manifesto Ágil?", options: ["1995", "2001", "2008", "2010"], answer: 1, explanation: "O Manifesto Ágil foi escrito em fevereiro de 2001 por 17 desenvolvedores em Snowbird, Utah (EUA)." },
  { topic: "Manifesto", question: "Segundo o Manifesto, o que é mais valorizado?", options: ["Processos e ferramentas", "Documentação abrangente", "Indivíduos e interações", "Seguir um plano"], answer: 2, explanation: "\"Indivíduos e interações mais que processos e ferramentas\" é o primeiro dos quatro valores." },
  { topic: "Manifesto", question: "Quantos princípios acompanham o Manifesto Ágil?", options: ["4", "7", "10", "12"], answer: 3, explanation: "São 4 valores e 12 princípios." },
  { topic: "Manifesto", question: "\"Responder a mudanças\" é mais valorizado que...", options: ["Seguir um plano", "Colaborar com o cliente", "Software funcionando", "Entregas frequentes"], answer: 0, explanation: "O valor completo é: responder a mudanças mais que seguir um plano." },
  { topic: "Scrum", question: "Quais são os três papéis (responsabilidades) do Scrum?", options: ["Gerente, Analista e Dev", "Product Owner, Scrum Master e Developers", "Cliente, Líder e Testador", "Arquiteto, PO e QA"], answer: 1, explanation: "O Scrum Guide define Product Owner, Scrum Master e Developers." },
  { topic: "Scrum", question: "Qual a duração máxima de uma Sprint?", options: ["1 semana", "2 semanas", "1 mês", "3 meses"], answer: 2, explanation: "Sprints têm duração fixa de até um mês." },
  { topic: "Scrum", question: "Quem é responsável por ordenar o Product Backlog?", options: ["Scrum Master", "Developers", "Stakeholders", "Product Owner"], answer: 3, explanation: "O Product Owner é responsável por maximizar o valor e gerenciar o Product Backlog." },
  { topic: "Scrum", question: "Qual o timebox da Daily Scrum?", options: ["15 minutos", "30 minutos", "1 hora", "Sem limite"], answer: 0, explanation: "A Daily Scrum dura 15 minutos para os Developers inspecionarem o progresso rumo à Meta da Sprint." },
  { topic: "Scrum", question: "Qual evento serve para o time melhorar sua forma de trabalhar?", options: ["Sprint Review", "Sprint Planning", "Sprint Retrospective", "Daily Scrum"], answer: 2, explanation: "A Retrospectiva planeja formas de aumentar qualidade e eficácia." },
  { topic: "Scrum", question: "O que é o Incremento?", options: ["Uma lista de tarefas", "Um passo concreto em direção à Meta do Produto, utilizável", "O relatório do Scrum Master", "O aumento da equipe"], answer: 1, explanation: "Cada Incremento é aditivo, verificado e deve atender à Definição de Pronto." },
  { topic: "Scrum", question: "Qual o papel principal do Scrum Master?", options: ["Chefiar o time", "Escrever o código", "Definir o escopo", "Servir ao time e garantir a eficácia do Scrum"], answer: 3, explanation: "O Scrum Master é um líder que serve, removendo impedimentos e ensinando Scrum." },
  { topic: "Kanban", question: "O que significa a palavra \"Kanban\" em japonês?", options: ["Fluxo contínuo", "Cartão visual / sinal", "Melhoria", "Equipe"], answer: 1, explanation: "Kanban significa algo como \"cartão\" ou \"sinal visual\", originado na Toyota." },
  { topic: "Kanban", question: "O que é o limite de WIP?", options: ["Limite de itens em andamento por etapa", "Limite de horas por dia", "Número de reuniões", "Tamanho do time"], answer: 0, explanation: "WIP (Work In Progress) limita o trabalho simultâneo, reduzindo gargalos." },
  { topic: "Kanban", question: "Qual métrica mede o tempo do pedido até a entrega?", options: ["Velocity", "Burndown", "Lead Time", "Story Points"], answer: 2, explanation: "Lead time vai da solicitação até a entrega; cycle time mede do início do trabalho até o fim." },
  { topic: "Kanban", question: "Kanban prescreve iterações de tamanho fixo?", options: ["Sim, de 2 semanas", "Sim, de 1 mês", "Apenas para times grandes", "Não, o fluxo é contínuo"], answer: 3, explanation: "Kanban foca em fluxo contínuo, sem sprints obrigatórias." },
  { topic: "XP", question: "Qual prática é típica do Extreme Programming (XP)?", options: ["Programação em par", "Planejamento anual", "Documentação extensa", "Testes só no final"], answer: 0, explanation: "XP inclui pair programming, TDD, integração contínua e refatoração." },
  { topic: "XP", question: "O que é TDD?", options: ["Testar depois de desenvolver", "Escrever o teste antes do código", "Testes manuais diários", "Documentação técnica"], answer: 1, explanation: "Test-Driven Development: vermelho (teste falha), verde (passa), refatorar." },
  { topic: "XP", question: "Quem criou o Extreme Programming?", options: ["Ken Schwaber", "Taiichi Ohno", "Kent Beck", "Jeff Sutherland"], answer: 2, explanation: "Kent Beck formalizou o XP no fim dos anos 1990." },
  { topic: "Lean", question: "Qual é o foco central do Lean?", options: ["Aumentar reuniões", "Eliminar desperdício e entregar valor", "Contratar mais pessoas", "Documentar tudo"], answer: 1, explanation: "Lean busca maximizar valor eliminando desperdícios (muda)." },
  { topic: "Lean", question: "O que é um MVP?", options: ["Produto final completo", "Melhor jogador do time", "Plano de projeto", "Produto Mínimo Viável para aprender com usuários"], answer: 3, explanation: "MVP é a menor versão que permite validar hipóteses com o mínimo de esforço." },
];

export const TOPICS: Topic[] = ["Manifesto", "Scrum", "Kanban", "XP", "Lean"];

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
