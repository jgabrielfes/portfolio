"use client";

import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteNavConfig } from "@/config/navigation";
import { Link } from "@/i18n/navigation";

export function MobileNav() {
  const tNav = useTranslations("Nav");
  const tMobile = useTranslations("MobileNav");
  const tHeader = useTranslations("Header");

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            className="size-8 shrink-0"
            aria-label={tMobile("openMenu")}
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[min(100vw-1rem,20rem)] sm:max-w-sm">
          <SheetHeader className="text-left">
            <SheetTitle>{tMobile("sheetTitle")}</SheetTitle>
          </SheetHeader>
          <nav
            className="flex flex-col gap-0.5 px-2 pb-6"
            aria-label={tHeader("navAria")}
          >
            {siteNavConfig.map((item) =>
              item.kind === "anchor" ? (
                <SheetClose key={item.id} asChild>
                  <Link
                    href={`/#${item.id}`}
                    className="rounded-md px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    {tNav(item.labelKey)}
                  </Link>
                </SheetClose>
              ) : (
                <SheetClose key={item.path} asChild>
                  <Link
                    href={item.path}
                    className="rounded-md px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    {tNav(item.labelKey)}
                  </Link>
                </SheetClose>
              )
            )}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
