import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Plus, Users, CalendarDays, CheckCircle2, CreditCard, ChevronLeft, ChevronRight } from "lucide-react";
import { AppLayout, TopUser } from "@/components/AppLayout";
import { Avatar, StatCard, StatusBadge } from "@/components/ui-kit";
import { clients } from "@/lib/data";

export const Route = createFileRoute("/clients/")({
  head: () => ({
    meta: [
      { title: "Клиенты — Pageli Operations" },
      { name: "description", content: "Список клиентов агентства: ответственные, статусы, оплаты и плановые публикации." },
      { property: "og:title", content: "Клиенты — Pageli Operations" },
      { property: "og:description", content: "Список клиентов агентства: ответственные, статусы, оплаты и публикации." },
    ],
  }),
  component: ClientsPage,
});

function ClientsPage() {
  return (
    <AppLayout>
      <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Клиенты</h1>
        <div className="flex flex-1 items-center justify-end gap-5">
          <div className="relative w-full max-w-[280px]">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Поиск по клиентам..."
              className="h-11 w-full rounded-xl border border-border bg-card pl-10 pr-4 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
            />
          </div>
          <button className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground">
            <Plus className="h-4 w-4" /> Добавить клиента
          </button>
          <TopUser />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={<Users className="h-5 w-5" />} label="Всего клиентов" value="6" hint="Активных: 6" hintClass="text-success font-medium" />
        <StatCard icon={<CalendarDays className="h-5 w-5" />} tone="info" label="Плановых постов" value="18" hint="На эту неделю" />
        <StatCard icon={<CheckCircle2 className="h-5 w-5" />} tone="success" label="Опубликовано" value="12" hint="На этой неделе" />
        <StatCard icon={<CreditCard className="h-5 w-5" />} tone="primary" label="Оплаты в этом месяце" value="3" hint="1 500 USD" />
      </div>

      <section className="card-surface mt-6 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs text-muted-foreground">
              <th className="px-6 py-4 font-normal">Клиент</th>
              <th className="px-6 py-4 font-normal">Ответственные</th>
              <th className="px-6 py-4 font-normal">Статус</th>
              <th className="px-6 py-4 font-normal">Последняя оплата</th>
              <th className="px-6 py-4 font-normal">Сумма</th>
              <th className="px-6 py-4 font-normal">Действия</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((c) => (
              <tr key={c.id} className="border-b border-border/70 last:border-0">
                <td className="px-6 py-5">
                  <span className="flex items-center gap-3">
                    <Avatar initials={c.initials} tone={c.tone} className="h-11 w-11 text-sm" />
                    <span className="leading-tight">
                      <span className="block font-semibold">{c.name}</span>
                      <span className="block text-xs text-muted-foreground">{c.niche}</span>
                    </span>
                  </span>
                </td>
                <td className="px-6 py-5">
                  <div className="space-y-2">
                    {c.team.map((m) => (
                      <span key={m.role} className="flex items-center gap-2.5">
                        <Avatar initials={m.initials} tone={m.tone} className="h-7 w-7 text-[10px]" />
                        <span className="leading-tight">
                          <span className="block text-[13px] font-medium">{m.name}</span>
                          <span className="block text-[11px] text-muted-foreground">{m.role}</span>
                        </span>
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-5"><StatusBadge status={c.status} /></td>
                <td className="px-6 py-5 text-muted-foreground">{c.lastPayment}</td>
                <td className="px-6 py-5 text-muted-foreground">{c.amount}</td>
                <td className="px-6 py-5">
                  <Link
                    to="/clients/$clientId"
                    params={{ clientId: c.id }}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-xs font-medium text-foreground hover:border-primary hover:text-primary"
                  >
                    Открыть <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between px-6 py-5">
          <p className="text-sm text-muted-foreground">Показано 1–6 из 6</p>
          <div className="flex items-center gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground"><ChevronLeft className="h-4 w-4" /></button>
            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary text-sm font-medium text-primary">1</button>
            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground"><ChevronRight className="h-4 w-4" /></button>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
