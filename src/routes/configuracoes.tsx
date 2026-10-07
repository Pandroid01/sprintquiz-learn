import { createFileRoute } from "@tanstack/react-router";
import { Moon, Type } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { useAppearance } from "@/components/AppearanceProvider";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";

export const Route = createFileRoute("/configuracoes")({
  head: () => ({ meta: [
    { title: "Configurações — SprintQuiz" },
    { name: "description", content: "Personalize a aparência do SprintQuiz com modo escuro e ajuste do tamanho da fonte." },
    { property: "og:title", content: "Configurações — SprintQuiz" },
    { property: "og:description", content: "Preferências de tema e tamanho do texto para o seu jogo de métodos ágeis." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: SettingsPage,
});

function SettingsPage() {
  const { dark, fontSize, setDark, setFontSize } = useAppearance();
  return (
    <div className="min-h-screen bg-grid">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="break-words text-3xl font-extrabold sm:text-5xl">Configurações</h1>
        <section aria-labelledby="appearance-title" className="mt-10">
          <h2 id="appearance-title" className="text-xl font-bold">Aparência</h2>
          <div className="mt-5 flex items-center justify-between gap-5 border-y-2 border-ink py-6">
            <label htmlFor="dark-mode" className="flex cursor-pointer items-center gap-3 font-bold"><Moon className="h-5 w-5 text-primary" aria-hidden="true" />Modo escuro</label>
            <Switch id="dark-mode" checked={dark} onCheckedChange={setDark} />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-5 border-b-2 border-ink py-6">
            <span id="font-size-label" className="flex items-center gap-3 font-bold"><Type className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />Tamanho da fonte</span>
            <div className="w-full sm:w-64">
              <div className="mb-3 flex items-center justify-between text-sm text-muted-foreground">
                <span>{fontSize === 14 ? "Pequeno" : fontSize === 16 ? "Padrão" : fontSize === 18 ? "Grande" : "Extra grande"}</span>
                <output aria-live="polite">{Math.round(fontSize / 16 * 100)}%</output>
              </div>
              <Slider aria-labelledby="font-size-label" min={14} max={20} step={2} value={[fontSize]} onValueChange={([value]) => { if (value !== undefined) setFontSize(value); }} className="h-6" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}