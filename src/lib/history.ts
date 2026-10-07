import type { Difficulty } from "./questions";

export type GameRecord = {
  /** ISO date-time of when the game finished */
  date: string;
  difficulty: Difficulty;
  score: number;
  correct: number;
  total: number;
};

const HISTORY_KEY = "sprintquiz-history";
const MAX_ENTRIES = 30;

export function loadHistory(): GameRecord[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isRecord);
  } catch {
    return [];
  }
}

export function saveGame(rec: GameRecord): GameRecord[] {
  const history = [rec, ...loadHistory()].slice(0, MAX_ENTRIES);
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch {
    // storage unavailable (private mode etc.) — history is best-effort
  }
  return history;
}

export function clearHistory() {
  try {
    localStorage.removeItem(HISTORY_KEY);
  } catch {
    // ignore
  }
}

function isRecord(value: unknown): value is GameRecord {
  if (typeof value !== "object" || value === null) return false;
  const r = value as Record<string, unknown>;
  return (
    typeof r["date"] === "string" &&
    (r["difficulty"] === "facil" || r["difficulty"] === "medio" || r["difficulty"] === "dificil") &&
    typeof r["score"] === "number" &&
    typeof r["correct"] === "number" &&
    typeof r["total"] === "number"
  );
}

export type DifficultyStats = {
  games: number;
  best: number;
  average: number;
  accuracy: number; // 0..100
};

export function statsByDifficulty(history: GameRecord[]): Record<Difficulty, DifficultyStats> {
  const empty: DifficultyStats = { games: 0, best: 0, average: 0, accuracy: 0 };
  const acc: Record<Difficulty, DifficultyStats> = {
    facil: { ...empty },
    medio: { ...empty },
    dificil: { ...empty },
  };
  for (const rec of history) {
    const s = acc[rec.difficulty];
    s.games += 1;
    s.best = Math.max(s.best, rec.score);
    s.average += rec.score;
    s.accuracy += rec.total > 0 ? (rec.correct / rec.total) * 100 : 0;
  }
  for (const key of Object.keys(acc) as Difficulty[]) {
    const s = acc[key];
    if (s.games > 0) {
      s.average = Math.round(s.average / s.games);
      s.accuracy = Math.round(s.accuracy / s.games);
    }
  }
  return acc;
}
