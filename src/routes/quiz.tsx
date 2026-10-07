import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import {
  DIFFICULTY_LABELS,
  DIFFICULTY_POINTS,
  questionsByDifficulty,
  shuffle,
  type Difficulty,
  type Question,
} from "@/lib/questions";
import { saveGame } from "@/lib/history";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Jogar — SprintQuiz" },
      { name: "description", content: "Responda perguntas sobre métodos ágeis e acompanhe sua pontuação." },
      { property: "og:title", content: "Jogar — SprintQuiz" },
      { property: "og:description", content: "Quiz de métodos ágeis com explicações a cada resposta." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QuizPage,
});

type Phase = "select" | "playing" | "done";

function bestKey(d: Difficulty) {
  return `sprintquiz-best-${d}`;
}

function QuizPage() {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [qs, setQs] = useState<Question[]>([]);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [phase, setPhase] = useState<Phase>("select");

  useEffect(() => {
    if (difficulty) setBest(Number(localStorage.getItem(bestKey(difficulty)) ?? 0));
  }, [difficulty]);

  const q = qs[i] ?? questionsByDifficulty("facil")[0]!;
  const basePoints = difficulty ? DIFFICULTY_POINTS[difficulty] : 10;

  function start(d: Difficulty) {
    setDifficulty(d);
    setQs(shuffle(questionsByDifficulty(d)));
    setI(0); setPicked(null); setScore(0); setStreak(0);
    setPhase("playing");
  }

  function choose(idx: number) {
    if (picked !== null) return;
    setPicked(idx);
    if (idx === q.answer) {
      const bonus = streak >= 2 ? basePoints + 5 : basePoints;
      setScore((s) => s + bonus);
      setStreak((s) => s + 1);
    } else setStreak(0);
  }

  function next() {
    if (i + 1 >= qs.length) {
      if (difficulty && score > best) {
        localStorage.setItem(bestKey(difficulty), String(score));
        setBest(score);
      }
      setPhase("done");
    } else {
      setI(i + 1);
      setPicked(null);
    }
  }

  return (
    <div className="min-h-screen bg-grid">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-4 py-10">
        {phase === "select" && <DifficultySelect onStart={start} />}

        {phase === "playing" && difficulty && (
          <>
            <div className="mb-4 flex items-center justify-between text-sm font-bold">
              <span>
                Pergunta {i + 1}/{qs.length}
                <span className="ml-2 rounded border-2 border-ink bg-note px-2 py-0.5 text-xs">{DIFFICULTY_LABELS[difficulty]}</span>
              </span>
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
        )}

        {phase === "done" && difficulty && (
          <Result
            score={score}
            best={best}
            total={qs.length}
            difficulty={difficulty}
            onRestart={() => start(difficulty)}
            onChangeLevel={() => setPhase("select")}
          />
        )}
      </main>
    </div>
  );
}

function DifficultySelect({ onStart }: { onStart: (d: Difficulty) => void }) {
  const options: { d: Difficulty; desc: string; emoji: string }[] = [
    { d: "facil", desc: "Conceitos básicos para começar a aquecer.", emoji: "★" },
    { d: "medio", desc: "Para quem já conhece o básico dos métodos ágeis.", emoji: "★★" },
    { d: "dificil", desc: "Perguntas avançadas para agilistas experientes.", emoji: "★★★" },
  ];
  return (
    <div className="animate-pop rounded-lg border-2 border-ink bg-card p-8 shadow-hard">
      <h1 className="text-center text-3xl font-extrabold">Escolha a dificuldade</h1>
      <p className="mt-2 text-center text-muted-foreground">10 perguntas por partida. Níveis maiores valem mais pontos!</p>
      <div className="mt-8 grid gap-4">
        {options.map(({ d, desc, emoji }) => (
          <button
            key={d}
            onClick={() => onStart(d)}
            className="btn-ink flex items-center gap-4 rounded-lg border-2 border-ink bg-note px-5 py-4 text-left"
          >
            <span className="text-3xl">{emoji}</span>
            <span className="flex-1">
              <span className="block font-display text-xl font-bold">{DIFFICULTY_LABELS[d]}</span>
              <span className="block text-sm text-muted-foreground">{desc}</span>
            </span>
            <span className="rounded border-2 border-ink bg-accent px-2 py-1 text-sm font-bold">{DIFFICULTY_POINTS[d]} pts/acerto</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Result({ score, best, total, difficulty, onRestart, onChangeLevel }: {
  score: number;
  best: number;
  total: number;
  difficulty: Difficulty;
  onRestart: () => void;
  onChangeLevel: () => void;
}) {
  const max = total * (DIFFICULTY_POINTS[difficulty] + 5);
  const pct = Math.min(100, Math.round((score / max) * 100));
  const msg = pct >= 80 ? "Agilista nível sênior! 🚀" : pct >= 50 ? "Bom ritmo de sprint! Continue melhorando." : "Hora de uma retrospectiva — estude e tente de novo.";
  return (
    <div className="animate-pop rounded-lg border-2 border-ink bg-card p-8 text-center shadow-hard">
      <h2 className="text-3xl font-extrabold">Fim da Sprint!</h2>
      <p className="mt-1 text-sm font-bold text-muted-foreground">Nível {DIFFICULTY_LABELS[difficulty]}</p>
      <div className="mx-auto mt-6 w-fit -rotate-2 rounded-sm border-2 border-ink bg-note px-8 py-6 shadow-hard">
        <div className="font-display text-6xl font-extrabold">{score}</div>
        <div className="text-sm font-bold">pontos</div>
      </div>
      <p className="mt-6 text-lg">{msg}</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Recorde no nível {DIFFICULTY_LABELS[difficulty]}: {Math.max(best, score)} pts · Sequências de 3+ acertos valem +5 pts
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button onClick={onRestart} className="btn-ink rounded-lg bg-primary px-6 py-3 font-bold text-primary-foreground">Jogar de novo</button>
        <button onClick={onChangeLevel} className="btn-ink rounded-lg bg-card px-6 py-3 font-bold">Trocar nível</button>
        <Link to="/aprenda" className="btn-ink rounded-lg bg-card px-6 py-3 font-bold">Revisar conteúdo</Link>
      </div>
    </div>
  );
}
