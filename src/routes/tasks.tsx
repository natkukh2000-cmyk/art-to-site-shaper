import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Clock, LayoutList } from "lucide-react";
import { AppLayout, TopUser } from "@/components/AppLayout";
import { SectionCard, StatCard, StatusBadge } from "@/components/ui-kit";
import { todayTasks } from "@/lib/data";

export const Route = createFileRoute("/tasks")({
  head: () => ({
    meta: [
      { title: "Мои задачи — Pageli Operations" },
      { name: "description", content: "Личный список задач: согласования, публикации и подготовка контента по клиентам." },
      { property: "og:title", content: "Мои задачи — Pageli Operations" },
      { property: "og:description", content: "Личный список задач по клиентам и публикациям." },
    ],
  }),
  component: Tasks,
});

const later = [
  { title: "Собрать аналитику за месяц", client: "FinTech Insights", due: "21.05.2026", priority: "Средний" },
  { title: "Согласовать контент-план на июнь", client: "DataMed AI", due: "22.05.2026", priority: "Высокий" },
  { title: "Обновить брендбук постов", client: "SaaStr", due: "25.05.2026", priority: "Низкий" },
];

function Tasks() {
  return (
    <AppLayout>
      <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Мои задачи</h1>
        <TopUser />
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <StatCard icon={<LayoutList className="h-5 w-5" />} label="Всего задач" value="8" hint="На эту неделю" />
        <StatCard icon={<Clock className="h-5 w-5" />} tone="warning" label="На сегодня" value="5" hint="2 с высоким приоритетом" />
        <StatCard icon={<CheckCircle2 className="h-5 w-5" />} tone="success" label="Выполнено" value="11" hint="За неделю" />
      </div>

      <SectionCard className="mt-6" title="Сегодня" bodyClassName="px-6 pb-5 pt-3">
        <TaskTable rows={todayTasks} />
      </SectionCard>

      <SectionCard className="mt-6" title="Ближайшие" bodyClassName="px-6 pb-5 pt-3">
        <TaskTable rows={later} />
      </SectionCard>
    </AppLayout>
  );
}

function TaskTable({ rows }: { rows: { title: string; client: string; due: string; priority: string }[] }) {
  return (
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
        {rows.map((t) => (
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
  );
}
