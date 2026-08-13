import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppLayout, TopUser } from "@/components/AppLayout";
import { Avatar, Pill, SectionCard, StatusBadge } from "@/components/ui-kit";
import { clients } from "@/lib/data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Настройки — Pageli Operations" },
      { name: "description", content: "Основные настройки агентства: данные компании, уведомления, роли и права доступа." },
      { property: "og:title", content: "Настройки — Pageli Operations" },
      { property: "og:description", content: "Данные компании, уведомления, роли и права доступа." },
    ],
  }),
  component: Settings,
});

const tabs = ["Общие настройки", "Роли и обязанности", "Клиенты", "Уведомления"] as const;

const roles = [
  { name: "Копирайтер", desc: "Пишет тексты, готовит контент-планы, вносит правки", people: 2 },
  { name: "SMM", desc: "Публикует посты, работает с комментариями и охватами", people: 3 },
  { name: "Аккаунт-менеджер", desc: "Общается с клиентом, согласует планы и оплаты", people: 1 },
  { name: "Директор", desc: "Полный доступ ко всем разделам и настройкам", people: 1 },
];

const access = clients.slice(0, 6).map((c) => ({
  client: c.name,
  copy: c.team[0]!.name,
  smm: c.team[1]!.name,
  manager: "Наташа Сергеенко",
}));

function Settings() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Общие настройки");

  return (
    <AppLayout>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Настройки</h1>
        <TopUser />
      </div>

      <div className="mb-6 flex gap-1 border-b border-border">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              "-mb-px border-b-2 px-4 py-3 text-sm font-medium",
              tab === t ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground",
            )}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "Роли и обязанности" ? <RolesTab /> : tab === "Клиенты" ? <ClientsTab /> : <GeneralTab />}
    </AppLayout>
  );
}

function GeneralTab() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.3fr_1fr]">
      <SectionCard title="Информация о компании">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Название" value="Pageli" />
          <Field label="Домен" value="pageli.co" />
          <Field label="Email" value="hello@pageli.co" />
          <Field label="Часовой пояс" value="GMT+3 · Москва" />
        </div>
        <button className="mt-5 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground">
          Сохранить изменения
        </button>
      </SectionCard>

      <SectionCard title="Уведомления">
        <ul className="space-y-4 text-sm">
          {[
            ["Новые задачи", "Уведомлять о назначенных задачах", true],
            ["Публикации", "Напоминать о выходе постов", true],
            ["Оплаты клиентов", "Сообщать о поступивших платежах", false],
            ["Еженедельный отчёт", "Присылать сводку по понедельникам", true],
          ].map(([title, desc, on]) => (
            <li key={title as string} className="flex items-center justify-between gap-4">
              <span className="leading-tight">
                <span className="block font-medium">{title as string}</span>
                <span className="block text-xs text-muted-foreground">{desc as string}</span>
              </span>
              <span className={cn("flex h-6 w-11 items-center rounded-full p-0.5", on ? "bg-primary" : "bg-secondary")}>
                <span className={cn("h-5 w-5 rounded-full bg-card shadow-sm transition-transform", on && "translate-x-5")} />
              </span>
            </li>
          ))}
        </ul>
      </SectionCard>

      <SectionCard title="Роли в системе">
        <ul className="space-y-3 text-sm">
          {roles.map((r) => (
            <li key={r.name} className="flex items-center justify-between gap-4 rounded-xl border border-border p-4">
              <span className="leading-tight">
                <span className="block font-semibold">{r.name}</span>
                <span className="block text-xs text-muted-foreground">{r.desc}</span>
              </span>
              <Pill tone="primary">{r.people} чел.</Pill>
            </li>
          ))}
        </ul>
      </SectionCard>

      <SectionCard title="Хранилище">
        <p className="text-sm text-muted-foreground">Использовано 6.4 ГБ из 20 ГБ</p>
        <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-secondary">
          <div className="h-full rounded-full bg-primary" style={{ width: "32%" }} />
        </div>
        <button className="mt-5 rounded-xl border border-border px-4 py-2.5 text-sm font-medium">Управлять файлами</button>
      </SectionCard>
    </div>
  );
}

function RolesTab() {
  return (
    <div className="space-y-6">
      <SectionCard title="Роли в системе" subtitle="Что делает каждая роль в агентстве">
        <ul className="grid gap-3 md:grid-cols-2">
          {roles.map((r) => (
            <li key={r.name} className="rounded-xl border border-border p-4">
              <div className="flex items-center justify-between">
                <p className="font-semibold">{r.name}</p>
                <Pill tone="primary">{r.people} чел.</Pill>
              </div>
              <p className="mt-1.5 text-sm text-muted-foreground">{r.desc}</p>
            </li>
          ))}
        </ul>
      </SectionCard>

      <SectionCard title="Права и доступы" subtitle="Кто отвечает за каждого клиента" bodyClassName="px-0 pb-2 pt-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-y border-border text-left text-xs text-muted-foreground">
              <th className="px-6 py-3 font-normal">Клиент</th>
              <th className="px-6 py-3 font-normal">Копирайтер</th>
              <th className="px-6 py-3 font-normal">SMM</th>
              <th className="px-6 py-3 font-normal">Аккаунт-менеджер</th>
            </tr>
          </thead>
          <tbody>
            {access.map((a) => (
              <tr key={a.client} className="border-b border-border/70 last:border-0">
                <td className="px-6 py-4 font-medium">{a.client}</td>
                {[a.copy, a.smm, a.manager].map((p, i) => (
                  <td key={i} className="px-6 py-4">
                    <span className="flex items-center gap-2.5">
                      <Avatar initials={p.split(" ").map((s) => s[0]).join("")} tone={i === 0 ? "primary" : i === 1 ? "pink" : "warning"} className="h-7 w-7 text-[10px]" />
                      <span className="text-muted-foreground">{p}</span>
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </SectionCard>
    </div>
  );
}

function ClientsTab() {
  return (
    <SectionCard title="Клиенты" subtitle="Коммерческие данные по всем клиентам" bodyClassName="px-0 pb-2 pt-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-y border-border text-left text-xs text-muted-foreground">
            <th className="px-6 py-3 font-normal">Клиент</th>
            <th className="px-6 py-3 font-normal">Ниша</th>
            <th className="px-6 py-3 font-normal">Язык</th>
            <th className="px-6 py-3 font-normal">Дата старта</th>
            <th className="px-6 py-3 font-normal">Сумма оплаты</th>
            <th className="px-6 py-3 font-normal">Договор</th>
            <th className="px-6 py-3 font-normal">Статус</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((c) => (
            <tr key={c.id} className="border-b border-border/70 last:border-0">
              <td className="px-6 py-4">
                <span className="flex items-center gap-2.5">
                  <Avatar initials={c.initials} tone={c.tone} className="h-8 w-8 text-[10px]" />
                  <span className="font-medium">{c.name}</span>
                </span>
              </td>
              <td className="px-6 py-4 text-muted-foreground">{c.niche}</td>
              <td className="px-6 py-4 text-muted-foreground">{c.language}</td>
              <td className="px-6 py-4 text-muted-foreground">{c.start}</td>
              <td className="px-6 py-4 text-muted-foreground">{c.amount}</td>
              <td className="px-6 py-4"><a href="#" className="text-primary">{c.contract}</a></td>
              <td className="px-6 py-4"><StatusBadge status={c.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </SectionCard>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs text-muted-foreground">{label}</span>
      <input
        defaultValue={value}
        className="h-11 w-full rounded-xl border border-border bg-card px-3.5 text-sm outline-none focus:border-primary"
      />
    </label>
  );
}
