import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CalendarDays, CheckCircle2, Clock, FileEdit, ChevronLeft, ChevronRight, Plus, LayoutGrid, List } from "lucide-react";
import { AppLayout, TopUser } from "@/components/AppLayout";
import { Avatar, StatCard, StatusBadge } from "@/components/ui-kit";
import { calendarEvents, planPosts } from "@/lib/data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/content-plans")({
  head: () => ({
    meta: [
      { title: "Контент-планы — Pageli Operations" },
      { name: "description", content: "Календарь и список публикаций клиента: темы, авторы, статусы и даты выхода постов." },
      { property: "og:title", content: "Контент-планы — Pageli Operations" },
      { property: "og:description", content: "Календарь и список публикаций: темы, авторы, статусы и даты." },
    ],
  }),
  component: ContentPlans,
});

const statusColor: Record<string, string> = {
  Опубликован: "border-l-success bg-success-soft text-success",
  Запланирован: "border-l-primary bg-primary-soft text-primary",
  Черновик: "border-l-warning bg-warning-soft text-warning-foreground",
};

function ContentPlans() {
  const [view, setView] = useState<"calendar" | "list">("calendar");

  return (
    <AppLayout>
      <div className="mb-7 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Контент-план</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">Edward Makaron · Май 2026</p>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex rounded-xl border border-border bg-card p-1">
            <button
              onClick={() => setView("calendar")}
              className={cn("inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium", view === "calendar" ? "bg-primary text-primary-foreground" : "text-muted-foreground")}
            >
              <LayoutGrid className="h-4 w-4" /> Календарь
            </button>
            <button
              onClick={() => setView("list")}
              className={cn("inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium", view === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground")}
            >
              <List className="h-4 w-4" /> Список
            </button>
          </div>
          <button className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground">
            <Plus className="h-4 w-4" /> Добавить пост
          </button>
          <TopUser />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={<CalendarDays className="h-5 w-5" />} label="Всего постов" value="14" hint="В этом месяце" />
        <StatCard icon={<CheckCircle2 className="h-5 w-5" />} tone="success" label="Опубликовано" value="6" hint="43% плана" />
        <StatCard icon={<Clock className="h-5 w-5" />} tone="info" label="В работе" value="4" hint="Ждут согласования" />
        <StatCard icon={<FileEdit className="h-5 w-5" />} tone="warning" label="Черновики" value="4" hint="Нужно доработать" />
      </div>

      {view === "calendar" ? <CalendarView /> : <ListView />}
    </AppLayout>
  );
}

function CalendarView() {
  const cells = Array.from({ length: 35 }, (_, i) => i - 3);
  return (
    <section className="card-surface mt-6 overflow-hidden">
      <header className="flex items-center justify-between border-b border-border px-6 py-4">
        <h2 className="text-lg font-semibold tracking-tight">Май 2026</h2>
        <div className="flex items-center gap-2">
          <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground"><ChevronLeft className="h-4 w-4" /></button>
          <button className="rounded-lg border border-border px-3.5 py-2 text-sm font-medium">Сегодня</button>
          <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground"><ChevronRight className="h-4 w-4" /></button>
        </div>
      </header>
      <div className="grid grid-cols-7 border-b border-border text-xs text-muted-foreground">
        {["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"].map((d) => (
          <span key={d} className="px-3 py-3 text-center">{d}</span>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {cells.map((d, i) => {
          const inMonth = d >= 1 && d <= 31;
          const events = calendarEvents.filter((e) => e.day === d);
          return (
            <div key={i} className={cn("min-h-[124px] border-b border-r border-border p-2.5", !inMonth && "bg-muted/40")}>
              <span className={cn("text-xs font-medium", !inMonth ? "text-muted-foreground/60" : "text-muted-foreground")}>
                {inMonth ? d : d < 1 ? 27 + d : d - 31}
              </span>
              <div className="mt-2 space-y-1.5">
                {events.map((e) => (
                  <div key={e.title} className={cn("rounded-md border-l-2 px-2 py-1.5 text-[11px] leading-tight", statusColor[e.status])}>
                    <span className="block font-semibold">{e.time}</span>
                    <span className="block">{e.title}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-6 px-6 py-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-2"><i className="h-2.5 w-2.5 rounded-full bg-primary" />Запланирован</span>
        <span className="flex items-center gap-2"><i className="h-2.5 w-2.5 rounded-full bg-success" />Опубликован</span>
        <span className="flex items-center gap-2"><i className="h-2.5 w-2.5 rounded-full bg-warning" />Черновик</span>
      </div>
    </section>
  );
}

function ListView() {
  return (
    <>
      <section className="card-surface mt-6 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold tracking-tight">Готовность плана</h2>
          <p className="text-sm text-muted-foreground">6 из 14 дней</p>
        </div>
        <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-secondary">
          <div className="h-full rounded-full bg-primary" style={{ width: "43%" }} />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">43% публикаций готово к выходу</p>
      </section>

      <section className="card-surface mt-6 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs text-muted-foreground">
              <th className="px-6 py-4 font-normal">Дата</th>
              <th className="px-6 py-4 font-normal">Тема поста</th>
              <th className="px-6 py-4 font-normal">Ответственный</th>
              <th className="px-6 py-4 font-normal">Статус</th>
              <th className="px-6 py-4 font-normal">Подготовлен</th>
              <th className="px-6 py-4 font-normal">Опубликован</th>
            </tr>
          </thead>
          <tbody>
            {planPosts.map((p) => (
              <tr key={p.date} className="border-b border-border/70 last:border-0">
                <td className="px-6 py-4 font-medium">{p.date}</td>
                <td className="px-6 py-4">{p.topic}</td>
                <td className="px-6 py-4">
                  <span className="flex items-center gap-2.5">
                    <Avatar initials={p.initials} tone={p.ownerRole === "SMM" ? "pink" : "primary"} className="h-8 w-8 text-[10px]" />
                    <span className="leading-tight">
                      <span className="block text-[13px] font-medium">{p.owner}</span>
                      <span className="block text-[11px] text-muted-foreground">{p.ownerRole}</span>
                    </span>
                  </span>
                </td>
                <td className="px-6 py-4"><StatusBadge status={p.status} /></td>
                <td className="px-6 py-4 text-muted-foreground">{p.prepared}</td>
                <td className="px-6 py-4 text-muted-foreground">{p.published}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
