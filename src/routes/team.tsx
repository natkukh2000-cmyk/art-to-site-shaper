import { createFileRoute } from "@tanstack/react-router";
import { Plus, UserPlus, Repeat2 } from "lucide-react";
import { AppLayout, TopUser } from "@/components/AppLayout";
import { Avatar, Pill, SectionCard, StatusBadge } from "@/components/ui-kit";
import { employees } from "@/lib/data";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Команда — Pageli Operations" },
      { name: "description", content: "Сотрудники агентства, их роли, клиенты, права доступа и текущие замещения." },
      { property: "og:title", content: "Команда — Pageli Operations" },
      { property: "og:description", content: "Сотрудники агентства, роли, клиенты и права доступа." },
    ],
  }),
  component: Team,
});

const roleSplit = [
  { role: "Копирайтеры", value: 2, color: "var(--primary)" },
  { role: "SMM", value: 3, color: "var(--success)" },
  { role: "Аккаунт-менеджеры", value: 1, color: "var(--warning)" },
  { role: "Директор", value: 1, color: "var(--pink)" },
];

function Team() {
  return (
    <AppLayout>
      <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Команда</h1>
        <div className="flex items-center gap-5">
          <button className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground">
            <UserPlus className="h-4 w-4" /> Добавить сотрудника
          </button>
          <TopUser />
        </div>
      </div>

      <section className="card-surface overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs text-muted-foreground">
              <th className="px-6 py-4 font-normal">Сотрудник</th>
              <th className="px-6 py-4 font-normal">Роль</th>
              <th className="px-6 py-4 font-normal">Клиенты</th>
              <th className="px-6 py-4 font-normal">Доступы</th>
              <th className="px-6 py-4 font-normal">Статус</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((e) => (
              <tr key={e.name} className="border-b border-border/70 last:border-0">
                <td className="px-6 py-5">
                  <span className="flex items-center gap-3">
                    <Avatar initials={e.initials} tone={e.tone} className="h-10 w-10 text-xs" />
                    <span className="font-semibold">{e.name}</span>
                  </span>
                </td>
                <td className="px-6 py-5"><Pill tone={e.tone}>{e.role}</Pill></td>
                <td className="px-6 py-5">
                  <span className="flex items-center -space-x-2">
                    {e.clients.map((c) => (
                      <Avatar key={c} initials={c} tone="info" className="h-8 w-8 border-2 border-card text-[10px]" />
                    ))}
                    {e.extra ? (
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-card bg-secondary text-[10px] font-semibold text-muted-foreground">
                        +{e.extra}
                      </span>
                    ) : null}
                    {!e.clients.length ? <span className="text-muted-foreground">Все клиенты</span> : null}
                  </span>
                </td>
                <td className="px-6 py-5 text-muted-foreground">{e.access}</td>
                <td className="px-6 py-5"><StatusBadge status={e.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <SectionCard title="Роли в команде">
          <div className="flex items-center gap-8">
            <Donut />
            <ul className="space-y-3 text-sm">
              {roleSplit.map((r) => (
                <li key={r.role} className="flex items-center gap-3">
                  <i className="h-2.5 w-2.5 rounded-full" style={{ background: r.color }} />
                  <span className="text-muted-foreground">{r.role}</span>
                  <span className="font-semibold">{r.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </SectionCard>

        <SectionCard
          title="Замещения"
          action={
            <button className="inline-flex items-center gap-2 rounded-xl border border-border px-3.5 py-2 text-sm font-medium">
              <Plus className="h-4 w-4" /> Добавить
            </button>
          }
        >
          <ul className="space-y-3 text-sm">
            {employees
              .filter((e) => e.replaces)
              .map((e) => (
                <li key={e.name} className="flex items-center gap-3 rounded-xl border border-border p-4">
                  <Avatar initials={e.initials} tone={e.tone} className="h-9 w-9 text-[11px]" />
                  <span className="flex-1">
                    <span className="font-semibold">{e.name}</span>
                    <span className="text-muted-foreground"> замещает </span>
                    <span className="font-semibold">{e.replaces?.name}</span>
                    <span className="block text-xs text-muted-foreground">до 25.05.2026 · {e.replaces?.role}</span>
                  </span>
                  <Repeat2 className="h-4 w-4 text-primary" />
                </li>
              ))}
            <li className="rounded-xl border border-dashed border-border p-4 text-center text-muted-foreground">
              Других активных замещений нет
            </li>
          </ul>
        </SectionCard>
      </div>
    </AppLayout>
  );
}

function Donut() {
  const total = roleSplit.reduce((s, r) => s + r.value, 0);
  let offset = 0;
  const r = 54;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 140 140" className="h-40 w-40 -rotate-90">
      {roleSplit.map((s) => {
        const len = (s.value / total) * c;
        const el = (
          <circle
            key={s.role}
            cx={70}
            cy={70}
            r={r}
            fill="none"
            stroke={s.color}
            strokeWidth={18}
            strokeDasharray={`${len} ${c - len}`}
            strokeDashoffset={-offset}
          />
        );
        offset += len;
        return el;
      })}
    </svg>
  );
}
