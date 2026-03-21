import Link from "next/link";

import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteNavLinks } from "@/config/navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/75 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-14 min-h-14 max-w-6xl items-center justify-between gap-2 px-4 sm:gap-3 sm:px-6">
        <Link
          href="/"
          className="font-heading min-w-0 shrink-0 text-sm font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          JF<span className="text-primary">.</span>
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1"
          aria-label="Principal"
        >
          {siteNavLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-1.5 py-1.5 text-[0.65rem] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground xl:px-2 xl:text-xs"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <MobileNav />
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            className="hidden min-[400px]:inline-flex"
            asChild
          >
            <Link href="/#contato">Falar comigo</Link>
          </Button>
          <Button size="sm" className="min-[400px]:hidden" asChild>
            <Link href="/#contato">Contato</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
