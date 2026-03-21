import { Github, Linkedin, Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { contact, portfolioRepoUrl } from "@/content/portfolio";
import { Link } from "@/i18n/navigation";

export async function SiteFooter() {
  const t = await getTranslations("Footer");
  const year = new Date().getFullYear();

  const socials = [
    {
      href: contact.github,
      labelKey: "socialGithub" as const,
      icon: Github,
    },
    {
      href: contact.linkedin,
      labelKey: "socialLinkedin" as const,
      icon: Linkedin,
    },
    {
      href: `mailto:${contact.email}`,
      labelKey: "socialEmail" as const,
      icon: Mail,
    },
  ] as const;

  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <p className="max-w-md text-center text-xs leading-relaxed text-muted-foreground sm:max-w-none sm:text-left">
          {t("copyright", { year })}{" "}
          <Link
            href="/experiencia"
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            {t("experience")}
          </Link>
          {" · "}
          <Link
            href="/projetos"
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            {t("projects")}
          </Link>
          {" · "}
          <a
            href={portfolioRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            {t("sourceOnGitHub")}
          </a>
          .
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-2">
          {socials.map(({ href, labelKey, icon: Icon }) => (
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
                  aria-label={t(labelKey)}
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
