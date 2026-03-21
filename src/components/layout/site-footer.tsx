import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { contact, portfolioRepoUrl } from "@/content/portfolio";

const socials = [
  {
    href: contact.github,
    label: "GitHub",
    icon: Github,
  },
  {
    href: contact.linkedin,
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: `mailto:${contact.email}`,
    label: "E-mail",
    icon: Mail,
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <p className="max-w-md text-center text-xs leading-relaxed text-muted-foreground sm:max-w-none sm:text-left">
          © {new Date().getFullYear()} João Ferraz.{" "}
          <Link
            href="/experiencia"
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            Experiência
          </Link>
          {" · "}
          <Link
            href="/projetos"
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            Projetos
          </Link>
          {" · "}
          <a
            href={portfolioRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            Código no GitHub
          </a>
          .
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-2">
          {socials.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Button variant="ghost" size="icon-sm" asChild>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={label}
                >
                  <Icon className="size-4" />
                </a>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
