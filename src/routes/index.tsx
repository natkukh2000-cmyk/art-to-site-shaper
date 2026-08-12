import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, CalendarDays, CheckCircle2, LayoutList, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { AppLayout, TopUser } from "@/components/AppLayout";
import { Avatar, SectionCard, StatCard, StatusBadge } from "@/components/ui-kit";
import { activeClientsShort, latestPosts, todayTasks } from "@/lib/data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pageli Operations — панель управления агентством" },
      { name: "description", content: "Обзор задач, клиентов, контент-планов и публикаций агентства Pageli за сегодня." },
      { property: "og:title", content: "Pageli Operations — панель управления агентством" },
      { property: "og:description", content: "Обзор задач, клиентов, контент-планов и публикаций агентства Pageli." },
    ],
  }),
  component: Index,
});

const monthDays = Array.from({ length: 35 }, (_, i) => i - 3);
const published = [12, 15];
const planned = [18, 21, 22, 23, 26, 29, 30];

function Index() {
  return (
    <AppLayout>
      <div className="mb-7 flex items-start justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Добрый день, Наталья! 👋</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">Вот что происходит в Pageli сегодня.</p>
        </div>
        <TopUser />
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={<Users className="h-5 w-5" />} label="Активные клиенты" value="6" hint="+1 за неделю" hintClass="text-success font-medium" />
        <StatCard icon={<CalendarDays className="h-5 w-5" />} tone="info" label="Плановые посты" value="18" hint="На эту неделю" />
        <StatCard icon={<CheckCircle2 className="h-5 w-5" />} tone="success" label="Опубликовано" value="12" hint="На этой неделе" />
        <StatCard icon={<LayoutList className="h-5 w-5" />} tone="warning" label="Мои задачи" value="7" hint="На сегодня" />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_1fr]">
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
            <p className="text-sm font-semibold">Май 2026</p>
            <button className="text-muted-foreground"><ChevronRight className="h-4 w-4" /></button>
          </div>
          <div className="grid grid-cols-7 gap-y-2 text-center text-xs">
            {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((d) => (
              <span key={d} className="pb-1 text-muted-foreground">{d}</span>
            ))}
            {monthDays.map((d, i) => {
              const inMonth = d >= 1 && d <= 31;
              const label = inMonth ? d : d < 1 ? 27 + d : d - 31;
              return (
                <span key={i} className="relative flex h-9 flex-col items-center justify-center">
                  <span
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full text-sm",
                      !inMonth && "text-muted-foreground/50",
                      inMonth && d === 20 && "bg-primary font-semibold text-primary-foreground",
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
                <th className="pb-3 font-normal">Ответственный</th>
                <th className="pb-3 font-normal">След. пост</th>
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

        <SectionCard title="Последние публикации" bodyClassName="px-6 pb-5 pt-3">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-muted-foreground">
                <th className="pb-3 font-normal">Пост</th>
                <th className="pb-3 font-normal">Клиент</th>
                <th className="pb-3 font-normal">Дата</th>
                <th className="pb-3 font-normal">Статус</th>
              </tr>
            </thead>
            <tbody>
              {latestPosts.map((p) => (
                <tr key={p.title} className="border-t border-border/70">
                  <td className="py-3.5">{p.title}</td>
                  <td className="py-3.5 text-muted-foreground">{p.client}</td>
                  <td className="py-3.5 text-muted-foreground">{p.date}</td>
                  <td className="py-3.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-success">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Опубликован
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/content-plans" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
            Все публикации <ArrowRight className="h-4 w-4" />
          </Link>
        </SectionCard>
      </div>
    </AppLayout>
  );
}
