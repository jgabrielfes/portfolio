import type { Metadata } from "next";
import { Figtree, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "João Ferraz — Desenvolvedor Full-Stack",
    template: "%s | João Ferraz",
  },
  description:
    "João Ferraz — desenvolvedor full-stack sênior (FCamara, consultoria RD, Vite). Microsserviços, NestJS, .NET, React, uConnect. Contato e experiência.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={cn(
        "h-full scroll-smooth antialiased font-sans",
        figtree.variable,
        geistMono.variable
      )}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="jgabrielfes-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
