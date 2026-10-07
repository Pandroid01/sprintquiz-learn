import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SprintQuiz — Jogo sobre Métodos Ágeis" },
      { name: "description", content: "Quiz educativo para estudantes sobre Scrum, Kanban, XP, Lean e o Manifesto Ágil." },
      { property: "og:title", content: "SprintQuiz — Jogo sobre Métodos Ágeis" },
      { property: "og:description", content: "Teste seus conhecimentos em métodos ágeis com perguntas e explicações." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const notes = [
  { t: "Scrum", c: "bg-note", r: "-rotate-3" },
  { t: "Kanban", c: "bg-note-blue", r: "rotate-2" },
  { t: "XP", c: "bg-note-pink", r: "-rotate-1" },
  { t: "Lean", c: "bg-note-green", r: "rotate-3" },
];

function Index() {
  return (
    <div className="min-h-screen bg-grid">
      <SiteHeader />
      <main className="mx-auto grid max-w-5xl items-center gap-12 px-4 py-16 md:grid-cols-2">
        <div className="animate-pop">
          <span className="inline-block rounded-full border-2 border-ink bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider">
            Jogo educativo
          </span>
          <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Domine os <span className="text-estacio">métodos ágeis</span> jogando.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Perguntas sobre Scrum, Kanban, XP, Lean e o Manifesto Ágil. Cada resposta vem com uma explicação para você aprender de verdade.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/quiz" className="btn-ink rounded-lg bg-primary px-6 py-3 font-bold text-primary-foreground">
              Começar o quiz →
            </Link>
            <Link to="/aprenda" className="btn-ink rounded-lg bg-card px-6 py-3 font-bold">
              Estudar antes
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {notes.map((n, i) => (
            <div
              key={n.t}
              className={`${n.c} ${n.r} animate-pop aspect-square rounded-sm border-2 border-ink p-5 shadow-hard`}
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="font-display text-2xl font-extrabold">{n.t}</div>
              <div className="mt-2 h-1.5 w-10 bg-ink" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
