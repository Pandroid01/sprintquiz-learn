import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { QUESTIONS, shuffle, type Question } from "@/lib/questions";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Jogar — SprintQuiz" },
      { name: "description", content: "Responda perguntas sobre métodos ágeis e acompanhe sua pontuação." },
      { property: "og:title", content: "Jogar — SprintQuiz" },
      { property: "og:description", content: "Quiz de métodos ágeis com explicações a cada resposta." },
    ],
  }),
  component: QuizPage,
});

type Phase = "playing" | "done";

function QuizPage() {
  const [qs, setQs] = useState<Question[]>(QUESTIONS);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);
  const [phase, setPhase] = useState<Phase>("playing");

  useEffect(() => {
    setQs(shuffle(QUESTIONS));
    setBest(Number(localStorage.getItem("sprintquiz-best") ?? 0));
  }, []);

  const q = qs[i];

  function choose(idx: number) {
    if (picked !== null) return;
    setPicked(idx);
    if (idx === q.answer) {
      const bonus = streak >= 2 ? 15 : 10;
      setScore((s) => s + bonus);
      setStreak((s) => s + 1);
    } else setStreak(0);
  }

  function next() {
    if (i + 1 >= qs.length) {
      if (score > best) {
        localStorage.setItem("sprintquiz-best", String(score));
        setBest(score);
      }
      setPhase("done");
    } else {
      setI(i + 1);
      setPicked(null);
    }
  }

  function restart() {
    setQs(shuffle(QUESTIONS));
    setI(0); setPicked(null); setScore(0); setStreak(0); setPhase("playing");
  }

  return (
    <div className="min-h-screen bg-grid">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-4 py-10">
        {phase === "playing" ? (
          <>
            <div className="mb-4 flex items-center justify-between text-sm font-bold">
              <span>Pergunta {i + 1}/{qs.length}</span>
              <span className="flex gap-3">
                {streak >= 2 && <span className="rounded border-2 border-ink bg-note-pink px-2">🔥 {streak}</span>}
                <span className="rounded border-2 border-ink bg-accent px-2">{score} pts</span>
              </span>
            </div>
            <div className="mb-6 h-3 overflow-hidden rounded-full border-2 border-ink bg-card">
              <div className="h-full bg-primary transition-all" style={{ width: `${((i + (picked !== null ? 1 : 0)) / qs.length) * 100}%` }} />
            </div>

            <div key={i} className="animate-pop rounded-lg border-2 border-ink bg-card p-6 shadow-hard">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">{q.topic}</span>
              <h2 className="mt-2 text-2xl font-bold leading-snug">{q.question}</h2>
              <div className="mt-6 grid gap-3">
                {q.options.map((opt, idx) => {
                  let style = "bg-card hover:bg-secondary";
                  if (picked !== null) {
                    if (idx === q.answer) style = "bg-success text-success-foreground";
                    else if (idx === picked) style = "bg-destructive text-destructive-foreground";
                    else style = "bg-card opacity-60";
                  }
                  return (
                    <button
                      key={idx}
                      onClick={() => choose(idx)}
                      disabled={picked !== null}
                      className={`flex items-center gap-3 rounded-md border-2 border-ink px-4 py-3 text-left font-medium shadow-hard-sm transition ${style}`}
                    >
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded border-2 border-ink bg-background font-display text-sm font-bold text-foreground">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>

              {picked !== null && (
                <div className="animate-pop mt-6 rounded-md border-2 border-ink bg-note p-4">
                  <p className="font-bold">{picked === q.answer ? "✔ Correto!" : "✘ Não foi dessa vez."}</p>
                  <p className="mt-1 text-sm">{q.explanation}</p>
                  <button onClick={next} className="btn-ink mt-4 rounded-md bg-primary px-5 py-2 font-bold text-primary-foreground">
                    {i + 1 >= qs.length ? "Ver resultado" : "Próxima →"}
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <Result score={score} best={best} total={qs.length} onRestart={restart} />
        )}
      </main>
    </div>
  );
}

function Result({ score, best, total, onRestart }: { score: number; best: number; total: number; onRestart: () => void }) {
  const max = total * 10;
  const pct = Math.min(100, Math.round((score / max) * 100));
  const msg = pct >= 80 ? "Agilista nível sênior! 🚀" : pct >= 50 ? "Bom ritmo de sprint! Continue melhorando." : "Hora de uma retrospectiva — estude e tente de novo.";
  return (
    <div className="animate-pop rounded-lg border-2 border-ink bg-card p-8 text-center shadow-hard">
      <h2 className="text-3xl font-extrabold">Fim da Sprint!</h2>
      <div className="mx-auto mt-6 w-fit -rotate-2 rounded-sm border-2 border-ink bg-note px-8 py-6 shadow-hard">
        <div className="font-display text-6xl font-extrabold">{score}</div>
        <div className="text-sm font-bold">pontos</div>
      </div>
      <p className="mt-6 text-lg">{msg}</p>
      <p className="mt-1 text-sm text-muted-foreground">Recorde: {Math.max(best, score)} pts · Sequências de 3+ acertos valem 15 pts</p>
      <div className="mt-8 flex justify-center gap-4">
        <button onClick={onRestart} className="btn-ink rounded-lg bg-primary px-6 py-3 font-bold text-primary-foreground">Jogar de novo</button>
        <Link to="/aprenda" className="btn-ink rounded-lg bg-card px-6 py-3 font-bold">Revisar conteúdo</Link>
      </div>
    </div>
  );
}
