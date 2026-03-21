"use client";

import { Menu } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteNavLinks } from "@/config/navigation";

export function MobileNav() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            className="size-8 shrink-0"
            aria-label="Abrir menu de navegação"
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[min(100vw-1rem,20rem)] sm:max-w-sm">
          <SheetHeader className="text-left">
            <SheetTitle>Navegação</SheetTitle>
          </SheetHeader>
          <nav
            className="flex flex-col gap-0.5 px-2 pb-6"
            aria-label="Principal"
          >
            {siteNavLinks.map((item) => (
              <SheetClose key={item.href} asChild>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {item.label}
                </Link>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
