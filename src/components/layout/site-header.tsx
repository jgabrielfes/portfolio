import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const nav = [
  { href: "/#inicio", label: "Início" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#stack", label: "Stack" },
  { href: "/#experiencia", label: "Experiência" },
  { href: "/projetos", label: "Projetos" },
  { href: "/#recrutadores", label: "Recrutadores" },
  { href: "/#formacao", label: "Formação" },
  { href: "/#contato", label: "Contato" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/75 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6">
        <Link
          href="/"
          className="font-heading shrink-0 text-sm font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          JF<span className="text-primary">.</span>
        </Link>
        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Principal"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-1.5 text-[0.7rem] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground xl:text-xs"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" size="sm" className="hidden sm:inline-flex" asChild>
            <Link href="/#contato">Falar comigo</Link>
          </Button>
          <Button size="sm" className="sm:hidden" asChild>
            <Link href="/#contato">Contato</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
