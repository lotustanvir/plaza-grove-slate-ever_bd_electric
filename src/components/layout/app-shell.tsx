import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Activity, Menu } from "lucide-react";
import { APP_NAME, NAV } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function NavLinks({ onClick, compact = false }: { onClick?: () => void; compact?: boolean }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <>
      {NAV.map((item) => {
        const active = pathname === item.to || pathname.startsWith(`${item.to}/`);
        return (
          <Link
            key={item.to}
            to={item.to}
            onClick={onClick}
            className={cn(
              "rounded-md px-2.5 py-2 text-xs transition-colors xl:text-sm",
              compact ? "block" : "",
              active ? "bg-elevated text-foreground" : "text-muted hover:text-foreground",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium tracking-tight">
            <span className="inline-flex size-7 items-center justify-center rounded-md bg-accent text-accent-fg">
              <Activity className="size-4" />
            </span>
            <span>{APP_NAME}</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            <NavLinks />
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link to="/dashboard">Open dashboard</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-1" aria-label="Mobile">
                  <NavLinks compact />
                </nav>
                <Button asChild className="mt-6 w-full">
                  <Link to="/dashboard">Open dashboard</Link>
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">{children}</main>

      <footer className="border-t border-border/80 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            {APP_NAME} — independent AI energy intelligence. Not affiliated with PGCB, BERC or the Government of Bangladesh.
          </p>
          <p>Sources: PGCB ERP · Open-Meteo · FAOSTAT · BBS · SREDA</p>
        </div>
      </footer>
    </div>
  );
}
