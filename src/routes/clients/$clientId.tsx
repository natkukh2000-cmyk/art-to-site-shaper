import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Linkedin, Mail, Briefcase, Globe, CalendarDays, BarChart3, FileText, Plus, CreditCard, FileSignature, Send } from "lucide-react";
import { AppLayout, TopUser } from "@/components/AppLayout";
import { Avatar, SectionCard, StatusBadge } from "@/components/ui-kit";
import { clients } from "@/lib/data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/clients/$clientId")({
  loader: ({ params }) => {
    const client = clients.find((c) => c.id === params.clientId);
    if (!client) throw notFound();
    return client;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Клиент"} — карточка клиента | Pageli` },
      { name: "description", content: `Профиль клиента ${loaderData?.name ?? ""}: рабочая и коммерческая информация, доступы и заметки.` },
      { property: "og:title", content: `${loaderData?.name ?? "Клиент"} — карточка клиента | Pageli` },
      { property: "og:description", content: "Профиль клиента: рабочая и коммерческая информация, доступы и заметки." },
    ],
  }),
  component: ClientPage,
});

const notesByClient: Record<string, { date: string; author: string; initials: string; text: string }[]> = {
  "andrey-ilmovsky": [
    { date: "10.08.2026", author: "Дарья Фокина", initials: "ДФ", text: "Андрей попросил больше кейсов по миграции iGaming-проектов на on-premises — добавили 3 темы в план." },
    { date: "05.08.2026", author: "Настя Ильина", initials: "НИ", text: "Согласован tone of voice: инженерный, с примерами из продакшена, без маркетинговых клише." },
    { date: "29.07.2026", author: "Наталья Кухарева", initials: "НК", text: "Продлили контракт на 3 месяца. Оплата 700 USD ежемесячно, 12 числа." },
    { date: "18.07.2026", author: "Дарья Фокина", initials: "ДФ", text: "Интервью на 45 минут: собрали 12 тем по iBanking и отказоустойчивости." },
  ],
};

const defaultNotes = [
  { date: "08.08.2026", author: "Дарья Фокина", initials: "ДФ", text: "Собрали темы на ближайший месяц, клиент подтвердил приоритеты." },
  { date: "01.08.2026", author: "Наташа Сергеенко", initials: "НС", text: "Оплата за август получена, договор продлён." },
];

const tabs = ["Общее", "Контент-план", "Аналитика"] as const;

function ClientPage() {
  const client = Route.useLoaderData();
  const [tab, setTab] = useState<(typeof tabs)[number]>("Общее");
  const notes = notesByClient[client.id] ?? defaultNotes;

  return (
    <AppLayout>
      <div className="mb-6 flex items-start justify-between gap-6">
        <Link to="/clients" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Назад к клиентам
        </Link>
        <TopUser />
      </div>

      <section className="card-surface flex flex-wrap items-center justify-between gap-6 p-6">
        <div className="flex items-center gap-5">
          <Avatar initials={client.initials} tone={client.tone} className="h-16 w-16 text-lg" />
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{client.name}</h1>
            <p className="mt-1 text-sm text-muted-foreground">DevOps Team Lead · {client.niche}</p>
            <div className="mt-3"><StatusBadge status={client.status} /></div>
          </div>
        </div>
        <button className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground">
          <Send className="h-4 w-4" /> Написать клиенту
        </button>
      </section>

      <div className="mb-6 mt-6 flex gap-1 border-b border-border">
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

      {tab === "Общее" ? (
        <>
          <div className="grid gap-6 xl:grid-cols-2">
            <SectionCard title="Рабочая информация">
              <div className="grid gap-4 sm:grid-cols-2">
                <Info icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value={client.linkedin} />
                <Info icon={<Briefcase className="h-4 w-4" />} label="Ниша" value={client.niche} />
                <Info icon={<Globe className="h-4 w-4" />} label="Язык ведения" value={client.language} />
                <Info icon={<Mail className="h-4 w-4" />} label="Email" value="hello@pageli.co" />
              </div>
              <div className="mt-4 rounded-xl border border-border p-4">
                <p className="text-xs text-muted-foreground">Описание</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{client.description}</p>
              </div>
              <div className="mt-3 rounded-xl border border-border p-4">
                <p className="text-xs text-muted-foreground">Позиционирование</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{client.positioning}</p>
              </div>
            </SectionCard>

            <SectionCard title="Коммерческая информация">
              <div className="grid gap-4 sm:grid-cols-2">
                <Info icon={<CalendarDays className="h-4 w-4" />} label="Дата старта" value={client.start} />
                <Info icon={<CreditCard className="h-4 w-4" />} label="Сумма оплаты" value={client.amount} />
                <Info icon={<FileSignature className="h-4 w-4" />} label="Договор" value={client.contract} />
                <Info icon={<Briefcase className="h-4 w-4" />} label="Периодичность" value="Ежемесячно" />
              </div>
              <div className="mt-4 border-t border-border pt-4">
                <p className="text-xs text-muted-foreground">Доступ и ответственность</p>
                <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                  {client.team.map((m) => (
                    <li key={m.role} className="flex items-center gap-3 rounded-xl border border-border p-3.5">
                      <Avatar initials={m.initials} tone={m.tone} className="h-10 w-10 text-xs" />
                      <span className="leading-tight">
                        <span className="block text-sm font-semibold">{m.name}</span>
                        <span className="block text-xs text-muted-foreground">{m.role}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionCard>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <QuickLink to="/content-plans" icon={<CalendarDays className="h-5 w-5" />} title="Контент-план" text="14 постов в августе, готово 6" />
            <QuickLink to="/analytics" icon={<BarChart3 className="h-5 w-5" />} title="Аналитика" text="+132 подписчика за неделю" />
            <QuickLink to="/clients" icon={<FileText className="h-5 w-5" />} title="Материалы" text="Брифы, гайды и tone of voice" />
          </div>

          <SectionCard
            className="mt-6"
            title="Заметки по клиенту"
            action={
              <button className="inline-flex items-center gap-2 rounded-xl bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground">
                <Plus className="h-4 w-4" /> Добавить
              </button>
            }
          >
            <ul className="space-y-4">
              {notes.map((n) => (
                <li key={n.date} className="flex gap-3 rounded-xl border border-border p-4">
                  <Avatar initials={n.initials} className="h-9 w-9 text-[11px]" />
                  <div>
                    <p className="text-sm font-semibold">
                      {n.author} <span className="ml-2 text-xs font-normal text-muted-foreground">{n.date}</span>
                    </p>
                    <p className="mt-1.5 text-sm text-muted-foreground">{n.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </SectionCard>
        </>
      ) : tab === "Контент-план" ? (
        <SectionCard title="Контент-план" subtitle="Август 2026">
          <p className="text-sm text-muted-foreground">14 постов в плане, 6 опубликовано.</p>
          <Link to="/content-plans" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
            Открыть контент-план
          </Link>
        </SectionCard>
      ) : (
        <SectionCard title="Аналитика" subtitle="Неделя: 3 – 9 августа 2026">
          <p className="text-sm text-muted-foreground">+132 подписчика, 5 420 просмотров, 186 реакций.</p>
          <Link to="/analytics" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
            Открыть аналитику
          </Link>
        </SectionCard>
      )}
    </AppLayout>
  );
}

function Info({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border px-4 py-3">
      <p className="flex items-center gap-2 text-xs text-muted-foreground">{icon} {label}</p>
      <p className="mt-1 text-sm font-medium">{value}</p>
    </div>
  );
}

function QuickLink({ to, icon, title, text }: { to: string; icon: React.ReactNode; title: string; text: string }) {
  return (
    <Link to={to} className="card-surface flex items-start gap-4 p-5 transition-colors hover:border-primary">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">{icon}</span>
      <span className="leading-tight">
        <span className="block font-semibold">{title}</span>
        <span className="mt-1 block text-sm text-muted-foreground">{text}</span>
      </span>
    </Link>
  );
}
