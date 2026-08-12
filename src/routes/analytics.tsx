import { createFileRoute } from "@tanstack/react-router";
import { Users, Eye, Heart, MessageCircle, Repeat2, MousePointerClick, TrendingUp, Download } from "lucide-react";
import { AppLayout, TopUser } from "@/components/AppLayout";
import { SectionCard, StatCard } from "@/components/ui-kit";
import { analyticsWeeks, chartData } from "@/lib/data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/analytics")({
  head: () => ({
    meta: [
      { title: "Аналитика клиента — Pageli Operations" },
      { name: "description", content: "Динамика подписчиков, просмотров и реакций по неделям с выводами и заметками команды." },
      { property: "og:title", content: "Аналитика клиента — Pageli Operations" },
      { property: "og:description", content: "Динамика подписчиков, просмотров и реакций по неделям." },
    ],
  }),
  component: Analytics,
});

const series = [
  { key: "views" as const, label: "Просмотры", color: "var(--primary)" },
  { key: "reactions" as const, label: "Реакции", color: "var(--success)" },
  { key: "comments" as const, label: "Комментарии", color: "var(--warning)" },
  { key: "reposts" as const, label: "Репосты", color: "var(--pink)" },
];

function Analytics() {
  return (
    <AppLayout>
      <div className="mb-7 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Аналитика</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">Edward Makaron · 21 – 27 апреля 2026</p>
        </div>
        <div className="flex items-center gap-5">
          <button className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-card px-4 text-sm font-medium">
            <Download className="h-4 w-4" /> Экспорт
          </button>
          <TopUser />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        <StatCard icon={<Users className="h-5 w-5" />} label="Подписчики" value="+132" hint="+12% к прошлой неделе" hintClass="text-success font-medium" />
        <StatCard icon={<Eye className="h-5 w-5" />} tone="info" label="Просмотры" value="5 420" hint="+5% к прошлой неделе" hintClass="text-success font-medium" />
        <StatCard icon={<Heart className="h-5 w-5" />} tone="pink" label="Реакции" value="186" hint="−11% к прошлой неделе" hintClass="text-destructive font-medium" />
        <StatCard icon={<MessageCircle className="h-5 w-5" />} tone="warning" label="Комментарии" value="52" hint="−13% к прошлой неделе" hintClass="text-destructive font-medium" />
        <StatCard icon={<Repeat2 className="h-5 w-5" />} tone="success" label="Репосты" value="28" hint="+27% к прошлой неделе" hintClass="text-success font-medium" />
        <StatCard icon={<MousePointerClick className="h-5 w-5" />} tone="primary" label="Переходы" value="76" hint="+3% к прошлой неделе" hintClass="text-success font-medium" />
      </div>

      <SectionCard className="mt-6" title="Показатели по неделям" bodyClassName="px-0 pb-2 pt-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-y border-border text-left text-xs text-muted-foreground">
              <th className="px-6 py-3 font-normal">Неделя</th>
              <th className="px-6 py-3 font-normal">Посты</th>
              <th className="px-6 py-3 font-normal">Подписчики</th>
              <th className="px-6 py-3 font-normal">Просмотры</th>
              <th className="px-6 py-3 font-normal">Реакции</th>
              <th className="px-6 py-3 font-normal">Комментарии</th>
              <th className="px-6 py-3 font-normal">Репосты</th>
              <th className="px-6 py-3 font-normal">Переходы</th>
            </tr>
          </thead>
          <tbody>
            {analyticsWeeks.map((w) => (
              <tr key={w.week} className={cn("border-b border-border/70 last:border-0", w.current && "bg-primary-soft/50")}>
                <td className="px-6 py-3.5 font-medium">{w.week}</td>
                <td className="px-6 py-3.5 text-muted-foreground">{w.posts ?? "—"}</td>
                <td className="px-6 py-3.5 font-medium text-success">{w.subs}</td>
                <td className="px-6 py-3.5 text-muted-foreground">{w.views}</td>
                <td className="px-6 py-3.5 text-muted-foreground">{w.reactions ?? "—"}</td>
                <td className="px-6 py-3.5 text-muted-foreground">{w.comments ?? "—"}</td>
                <td className="px-6 py-3.5 text-muted-foreground">{w.reposts ?? "—"}</td>
                <td className="px-6 py-3.5 text-muted-foreground">{w.clicks ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </SectionCard>

      <SectionCard className="mt-6" title="Динамика ключевых метрик" subtitle="Последние 7 недель">
        <LineChart />
        <div className="mt-5 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
          {series.map((s) => (
            <span key={s.key} className="flex items-center gap-2">
              <i className="h-2.5 w-2.5 rounded-full" style={{ background: s.color }} /> {s.label}
            </span>
          ))}
        </div>
      </SectionCard>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <SectionCard title="Что сработало на этой неделе">
          <ul className="space-y-3 text-sm">
            {[
              "Пост с личной историей врача собрал 2× больше реакций, чем средний.",
              "Карусель с чек-листом дала +27% репостов.",
              "Публикации во вторник в 10:00 стабильно показывают лучший охват.",
            ].map((t) => (
              <li key={t} className="flex gap-3 rounded-xl border border-border p-4">
                <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                <span className="text-muted-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </SectionCard>
        <SectionCard title="Заметки">
          <ul className="space-y-3 text-sm">
            {[
              { d: "26.04.2026", t: "Снижение комментариев связано с отпуском клиента — меньше личных ответов." },
              { d: "24.04.2026", t: "Добавить больше вопросов в конце поста для вовлечения аудитории." },
              { d: "22.04.2026", t: "Тестируем новый формат: короткие инсайты по 600 символов." },
            ].map((n) => (
              <li key={n.d} className="rounded-xl border border-border p-4">
                <p className="text-xs text-muted-foreground">{n.d}</p>
                <p className="mt-1.5 text-muted-foreground">{n.t}</p>
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>
    </AppLayout>
  );
}

function LineChart() {
  const w = 720;
  const h = 240;
  const max = 6000;
  const x = (i: number) => (i / (chartData.length - 1)) * (w - 60) + 40;
  const y = (v: number) => h - 30 - (v / max) * (h - 50);

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full">
      {[0, 1500, 3000, 4500, 6000].map((v) => (
        <g key={v}>
          <line x1={40} x2={w - 10} y1={y(v)} y2={y(v)} stroke="var(--border)" strokeWidth={1} />
          <text x={0} y={y(v) + 4} fontSize={10} fill="var(--muted-foreground)">{v}</text>
        </g>
      ))}
      {series.map((s) => (
        <polyline
          key={s.key}
          fill="none"
          stroke={s.color}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          points={chartData.map((d, i) => `${x(i)},${y(d[s.key])}`).join(" ")}
        />
      ))}
      {chartData.map((d, i) => (
        <g key={d.name}>
          {series.map((s) => (
            <circle key={s.key} cx={x(i)} cy={y(d[s.key])} r={3.5} fill="var(--card)" stroke={s.color} strokeWidth={2} />
          ))}
          <text x={x(i)} y={h - 8} fontSize={10} textAnchor="middle" fill="var(--muted-foreground)">{d.name}</text>
        </g>
      ))}
    </svg>
  );
}
