import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BarChart3, RotateCcw, Trophy } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import {
  DIFFICULTY_LABELS,
  DIFFICULTY_POINTS,
  type Difficulty,
} from "@/lib/questions";
import {
  clearHistory,
  loadHistory,
  statsByDifficulty,
  type GameRecord,
} from "@/lib/history";

export const Route = createFileRoute("/desempenho")({
  head: () => ({
    meta: [
      { title: "Desempenho — SprintQuiz" },
      { name: "description", content: "Acompanhe o histórico das suas partidas e analise seu desempenho por nível de dificuldade." },
      { property: "og:title", content: "Desempenho — SprintQuiz" },
      { property: "og:description", content: "Histórico de pontuação das últimas partidas, por nível de dificuldade." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PerformancePage,
});

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" }) + " " +
    d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
}

function PerformancePage() {
  // Read browser-only localStorage after hydration to avoid SSR mismatch.
  const [history, setHistory] = useState<GameRecord[] | null>(null);

  useEffect(() => {
    setHistory(loadHistory());
  }, []);

  const stats = history ? statsByDifficulty(history) : null;
  const hasGames = !!history && history.length > 0;

  return (
    <div className="min-h-screen bg-grid">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="break-words text-3xl font-extrabold sm:text-5xl">Desempenho</h1>
        <p className="mt-2 text-muted-foreground">
          Suas últimas partidas, com pontuação e dificuldade, para você acompanhar sua evolução.
        </p>

        {history === null ? null : !hasGames ? (
          <div className="animate-pop mt-10 rounded-lg border-2 border-ink bg-card p-8 text-center shadow-hard">
            <p className="text-lg font-bold">Nenhuma partida ainda.</p>
            <p className="mt-1 text-sm text-muted-foreground">Jogue uma partida e ela aparecerá aqui.</p>
            <a href="/quiz" className="btn-ink mt-6 inline-block rounded-lg bg-primary px-6 py-3 font-bold text-primary-foreground">
              Jogar agora
            </a>
          </div>
        ) : (
          <>
            {/* Resumo por dificuldade */}
            <section aria-labelledby="resumo-title" className="mt-8">
              <h2 id="resumo-title" className="flex items-center gap-2 text-xl font-bold">
                <BarChart3 className="h-5 w-5 text-primary" aria-hidden="true" />Resumo por nível
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {(Object.keys(DIFFICULTY_LABELS) as Difficulty[]).map((d) => {
                  const s = stats![d];
                  const stars = d === "facil" ? "★" : d === "medio" ? "★★" : "★★★";
                  return (
                    <div key={d} className="rounded-lg border-2 border-ink bg-card p-4 shadow-hard-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-display font-bold">{DIFFICULTY_LABELS[d]}</span>
                        <span className="text-xs text-muted-foreground">{stars}</span>
                      </div>
                      <dl className="mt-3 grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <dt className="text-muted-foreground">Recorde</dt>
                          <dd className="flex items-center gap-1 font-bold">
                            <Trophy className="h-3.5 w-3.5 text-primary" aria-hidden="true" />{s.best} pts
                          </dd>
                        </div>
                        <div>
                          <dt className="text-muted-foreground">Média</dt>
                          <dd className="font-bold">{s.average} pts</dd>
                        </div>
                        <div>
                          <dt className="text-muted-foreground">Partidas</dt>
                          <dd className="font-bold">{s.games}</dd>
                        </div>
                        <div>
                          <dt className="text-muted-foreground">Acertos</dt>
                          <dd className="font-bold">{s.accuracy}%</dd>
                        </div>
                      </dl>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Últimas partidas */}
            <section aria-labelledby="historico-title" className="mt-10">
              <h2 id="historico-title" className="text-xl font-bold">Últimas partidas</h2>
              <ul className="mt-4 grid gap-3">
                {history.map((rec, idx) => (
                  <li
                    key={`${rec.date}-${idx}`}
                    className="flex flex-wrap items-center gap-3 rounded-lg border-2 border-ink bg-card px-4 py-3 shadow-hard-sm"
                  >
                    <span className={`rounded border-2 border-ink px-2 py-0.5 text-xs font-bold ${
                      rec.difficulty === "facil" ? "bg-note-green" : rec.difficulty === "medio" ? "bg-note" : "bg-note-pink"
                    }`}>
                      {DIFFICULTY_LABELS[rec.difficulty]}
                    </span>
                    <span className="font-display text-xl font-extrabold text-primary">{rec.score} pts</span>
                    <span className="text-sm text-muted-foreground">
                      {rec.correct}/{rec.total} acertos · máx {rec.total * (DIFFICULTY_POINTS[rec.difficulty] + 5)} pts
                    </span>
                    <span className="ml-auto text-sm text-muted-foreground">{formatDate(rec.date)}</span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  clearHistory();
                  setHistory([]);
                }}
                className="btn-ink inline-flex items-center gap-2 rounded-lg bg-card px-5 py-2.5 text-sm font-bold"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />Limpar histórico
              </button>
              <span className="text-xs text-muted-foreground">Mostrando as {history!.length} últimas partidas (máx. 30).</span>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
