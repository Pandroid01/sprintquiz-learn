import { createFileRoute } from "@tanstack/react-router";
import { Moon, Type } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { useAppearance, isFontChoice } from "@/components/AppearanceProvider";
import { Switch } from "@/components/ui/switch";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export const Route = createFileRoute("/configuracoes")({
  head: () => ({ meta: [
    { title: "Configurações — SprintQuiz" },
    { name: "description", content: "Personalize a aparência do SprintQuiz com modo escuro e escolha de fonte." },
    { property: "og:title", content: "Configurações — SprintQuiz" },
    { property: "og:description", content: "Preferências de tema e fonte para o seu jogo de métodos ágeis." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: SettingsPage,
});

function SettingsPage() {
  const { dark, font, setDark, setFont } = useAppearance();
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
            <label htmlFor="font-choice" className="flex items-center gap-3 font-bold"><Type className="h-5 w-5 text-primary" aria-hidden="true" />Fonte</label>
            <Select value={font} onValueChange={(value) => { if (isFontChoice(value)) setFont(value); }}>
              <SelectTrigger id="font-choice" className="h-11 w-full border-2 bg-card shadow-hard-sm sm:w-64"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="original">Original</SelectItem>
                <SelectItem value="system">Arial</SelectItem>
                <SelectItem value="serif">Georgia</SelectItem>
                <SelectItem value="mono">Courier New</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>
      </main>
    </div>
  );
}