import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, ArrowRight, ChevronLeft, ChevronRight, Clock, CalendarClock, UserX, FileClock } from "lucide-react";
import { AppLayout, TopUser } from "@/components/AppLayout";
import { Avatar, SectionCard, StatusBadge } from "@/components/ui-kit";
import { activeClientsShort, attentionItems, todayTasks } from "@/lib/data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pageli Operations — панель управления агентством" },
      { name: "description", content: "Обзор задач, клиентов, контент-планов и точек внимания агентства Pageli за сегодня." },
      { property: "og:title", content: "Pageli Operations — панель управления агентством" },
      { property: "og:description", content: "Обзор задач, клиентов, контент-планов и точек внимания агентства Pageli." },
    ],
  }),
  component: Index,
});

const monthDays = Array.from({ length: 35 }, (_, i) => i - 4);
const published = [3, 4];
const planned = [5, 6, 7, 10, 12, 14, 17];

const attentionIcons = [AlertTriangle, FileClock, CalendarClock, UserX];

function Index() {
  return (
    <AppLayout>
      <div className="mb-7 flex items-start justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Добрый день, Наталья! 👋</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">Вот что происходит в Pageli сегодня, 11 августа 2026.</p>
        </div>
        <TopUser />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <SectionCard title="Мои задачи на сегодня" bodyClassName="px-6 pb-5 pt-3">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-muted-foreground">
                <th className="pb-3 font-normal">Задача</th>
                <th className="pb-3 font-normal">Клиент</th>
                <th className="pb-3 font-normal">Срок</th>
                <th className="pb-3 text-right font-normal">Приоритет</th>
              </tr>
            </thead>
            <tbody>
              {todayTasks.map((t) => (
                <tr key={t.title} className="border-t border-border/70">
                  <td className="py-3.5">
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="h-4 w-4 rounded border-border accent-[var(--primary)]" />
                      <span>{t.title}</span>
                    </label>
                  </td>
                  <td className="py-3.5 text-muted-foreground">{t.client}</td>
                  <td className="py-3.5 text-muted-foreground">{t.due}</td>
                  <td className="py-3.5 text-right"><StatusBadge status={t.priority} /></td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/tasks" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
            Перейти ко всем задачам <ArrowRight className="h-4 w-4" />
          </Link>
        </SectionCard>

        <SectionCard title="Календарь публикаций">
          <div className="mb-3 flex items-center justify-between">
            <button className="text-muted-foreground"><ChevronLeft className="h-4 w-4" /></button>
            <p className="text-sm font-semibold">Август 2026</p>
            <button className="text-muted-foreground"><ChevronRight className="h-4 w-4" /></button>
          </div>
          <div className="grid grid-cols-7 gap-y-2 text-center text-xs">
            {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((d) => (
              <span key={d} className="pb-1 text-muted-foreground">{d}</span>
            ))}
            {monthDays.map((d, i) => {
              const inMonth = d >= 1 && d <= 31;
              const label = inMonth ? d : d < 1 ? 31 + d : d - 31;
              return (
                <span key={i} className="relative flex h-9 flex-col items-center justify-center">
                  <span
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full text-sm",
                      !inMonth && "text-muted-foreground/50",
                      inMonth && d === 11 && "bg-primary font-semibold text-primary-foreground",
                      inMonth && published.includes(d) && "bg-success-soft font-medium text-success",
                    )}
                  >
                    {label}
                  </span>
                  {inMonth && planned.includes(d) ? (
                    <span className="absolute bottom-0 h-1 w-1 rounded-full bg-primary" />
                  ) : null}
                </span>
              );
            })}
          </div>
          <div className="mt-4 flex items-center gap-5 text-xs text-muted-foreground">
            <span className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-primary" />Запланировано</span>
            <span className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-success" />Опубликовано</span>
          </div>
          <Link to="/content-plans" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
            Открыть календарь <ArrowRight className="h-4 w-4" />
          </Link>
        </SectionCard>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <SectionCard title="Активные клиенты" bodyClassName="px-6 pb-5 pt-3">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-muted-foreground">
                <th className="pb-3 font-normal">Клиент</th>
                <th className="pb-3 font-normal">Копирайтер</th>
                <th className="pb-3 font-normal">Старт</th>
                <th className="pb-3 text-right font-normal" />
              </tr>
            </thead>
            <tbody>
              {activeClientsShort.map((c) => (
                <tr key={c.name} className="border-t border-border/70">
                  <td className="py-3.5">
                    <span className="flex items-center gap-3">
                      <Avatar initials={c.initials} tone={c.tone} className="h-8 w-8 text-[11px]" />
                      {c.name}
                    </span>
                  </td>
                  <td className="py-3.5 text-muted-foreground">{c.owner}</td>
                  <td className="py-3.5 text-muted-foreground">{c.next}</td>
                  <td className="py-3.5 text-right">
                    <Link to="/clients/$clientId" params={{ clientId: c.id }} className="text-sm font-medium text-primary">
                      Открыть
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/clients" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
            Все клиенты <ArrowRight className="h-4 w-4" />
          </Link>
        </SectionCard>

        <SectionCard title="Требуют внимания" subtitle="Что стоит разобрать сегодня">
          <ul className="space-y-3">
            {attentionItems.map((a, i) => {
              const Icon = attentionIcons[i] ?? Clock;
              return (
                <li key={a.label} className="flex items-center gap-4 rounded-xl border border-border p-4">
                  <span
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-xl",
                      a.tone === "pink" && "bg-pink-soft text-pink",
                      a.tone === "warning" && "bg-warning-soft text-warning-foreground",
                      a.tone === "info" && "bg-info-soft text-info",
                      a.tone === "primary" && "bg-primary-soft text-primary",
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex-1 leading-tight">
                    <span className="block text-sm font-semibold">{a.label}</span>
                    <span className="block text-xs text-muted-foreground">{a.hint}</span>
                  </span>
                  <span className="text-2xl font-bold tracking-tight">{a.count}</span>
                </li>
              );
            })}
          </ul>
        </SectionCard>
      </div>
    </AppLayout>
  );
}
