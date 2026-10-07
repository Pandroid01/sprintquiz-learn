import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  const link = "px-3 py-1.5 rounded-md font-medium hover:bg-secondary";
  const active = { className: "bg-accent border-2 border-ink" };
  return (
    <header className="border-b-2 border-ink bg-card">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link to="/" className="font-display text-xl font-extrabold tracking-tight">
          Sprint<span className="text-primary">Quiz</span>
        </Link>
        <nav className="flex gap-1 text-sm">
          <Link to="/" className={link} activeProps={active} activeOptions={{ exact: true }}>Início</Link>
          <Link to="/quiz" className={link} activeProps={active}>Jogar</Link>
          <Link to="/aprenda" className={link} activeProps={active}>Aprenda</Link>
        </nav>
      </div>
    </header>
  );
}
