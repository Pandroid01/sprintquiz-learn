import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/aprenda")({
  head: () => ({
    meta: [
      { title: "Aprenda Métodos Ágeis — SprintQuiz" },
      { name: "description", content: "Resumo didático do Manifesto Ágil, Scrum, Kanban, XP e Lean para estudantes." },
      { property: "og:title", content: "Aprenda Métodos Ágeis — SprintQuiz" },
      { property: "og:description", content: "Guia rápido de Scrum, Kanban, XP e Lean." },
    ],
  }),
  component: Aprenda,
});

const sections = [
  {
    id: "manifesto", title: "Manifesto Ágil", color: "bg-note",
    intro: "Publicado em 2001 por 17 profissionais de software, define 4 valores e 12 princípios.",
    items: [
      "Indivíduos e interações mais que processos e ferramentas",
      "Software em funcionamento mais que documentação abrangente",
      "Colaboração com o cliente mais que negociação de contratos",
      "Responder a mudanças mais que seguir um plano",
    ],
  },
  {
    id: "scrum", title: "Scrum", color: "bg-note-blue",
    intro: "Framework leve para resolver problemas complexos em ciclos curtos chamados Sprints (até 1 mês).",
    items: [
      "Papéis: Product Owner (valor e backlog), Scrum Master (eficácia do Scrum), Developers (constroem o incremento)",
      "Eventos: Sprint, Sprint Planning, Daily Scrum (15 min), Sprint Review e Sprint Retrospective",
      "Artefatos: Product Backlog, Sprint Backlog e Incremento",
      "Compromissos: Meta do Produto, Meta da Sprint e Definição de Pronto",
    ],
  },
  {
    id: "kanban", title: "Kanban", color: "bg-note-green",
    intro: "Método de origem na Toyota para visualizar e otimizar o fluxo de trabalho de forma contínua.",
    items: [
      "Visualize o trabalho em um quadro (ex.: A fazer → Fazendo → Feito)",
      "Limite o trabalho em progresso (WIP) em cada coluna",
      "Gerencie o fluxo e meça lead time e cycle time",
      "Melhore continuamente (kaizen), sem iterações obrigatórias",
    ],
  },
  {
    id: "xp", title: "Extreme Programming (XP)", color: "bg-note-pink",
    intro: "Criado por Kent Beck, foca em excelência técnica e feedback rápido.",
    items: [
      "Programação em par (pair programming)",
      "Desenvolvimento guiado por testes (TDD)",
      "Integração contínua e pequenas entregas",
      "Refatoração constante e design simples",
    ],
  },
  {
    id: "lean", title: "Lean", color: "bg-accent",
    intro: "Filosofia de entregar o máximo de valor com o mínimo de desperdício.",
    items: [
      "Eliminar desperdícios (esperas, retrabalho, funcionalidades não usadas)",
      "Entregar rápido e aprender com MVPs",
      "Decidir o mais tarde possível, com base em dados",
      "Respeitar as pessoas e otimizar o todo",
    ],
  },
];

function Aprenda() {
  return (
    <div className="min-h-screen bg-grid">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-5xl font-extrabold tracking-tight">Aprenda</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">Resumo do conteúdo cobrado no quiz. Leia, depois teste o que aprendeu.</p>
        <nav className="mt-6 flex flex-wrap gap-2">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={`${s.color} rounded border-2 border-ink px-3 py-1 text-sm font-bold shadow-hard-sm`}>{s.title}</a>
          ))}
        </nav>
        <div className="mt-10 grid gap-8">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-6 rounded-lg border-2 border-ink bg-card shadow-hard">
              <div className={`${s.color} border-b-2 border-ink px-6 py-4`}>
                <h2 className="text-2xl font-extrabold">{s.title}</h2>
              </div>
              <div className="p-6">
                <p>{s.intro}</p>
                <ul className="mt-4 grid gap-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 bg-primary" />{it}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/quiz" className="btn-ink inline-block rounded-lg bg-primary px-6 py-3 font-bold text-primary-foreground">Estou pronto — jogar!</Link>
        </div>
      </main>
    </div>
  );
}
