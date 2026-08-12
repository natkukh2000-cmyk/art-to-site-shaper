import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Linkedin, Mail, Briefcase, CalendarDays, BarChart3, FileText, Plus } from "lucide-react";
import { AppLayout, TopUser } from "@/components/AppLayout";
import { Avatar, SectionCard, StatusBadge } from "@/components/ui-kit";
import { clients } from "@/lib/data";

export const Route = createFileRoute("/clients/$clientId")({
  loader: ({ params }) => {
    const client = clients.find((c) => c.id === params.clientId);
    if (!client) throw notFound();
    return client;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Клиент"} — карточка клиента | Pageli` },
      { name: "description", content: `Профиль клиента ${loaderData?.name ?? ""}: ниша, контакты, команда и заметки по проекту.` },
      { property: "og:title", content: `${loaderData?.name ?? "Клиент"} — карточка клиента | Pageli` },
      { property: "og:description", content: "Профиль клиента: ниша, контакты, команда и заметки по проекту." },
    ],
  }),
  component: ClientPage,
});

const notes = [
  { date: "12.05.2026", author: "Дарья Фокина", initials: "DF", text: "Клиент попросил больше кейсов из практики врачей — добавили в план на следующую неделю." },
  { date: "08.05.2026", author: "Настя Ильина", initials: "NA", text: "Согласован tone of voice: экспертный, без жаргона, с примерами из США." },
  { date: "02.05.2026", author: "Наталья Кухарева", initials: "НК", text: "Продлили контракт на 3 месяца. Оплата 500 USD ежемесячно, 12 числа." },
  { date: "24.04.2026", author: "Дарья Фокина", initials: "DF", text: "Провели интервью на 40 минут, собрали 12 тем для контент-плана." },
];

function ClientPage() {
  const client = Route.useLoaderData();

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
            <p className="mt-1 text-sm text-muted-foreground">{client.niche}</p>
            <div className="mt-3"><StatusBadge status={client.status} /></div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <Info icon={<Briefcase className="h-4 w-4" />} label="Ниша" value={client.niche} />
          <Info icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value="/in/edwardmakaron" />
          <Info icon={<Mail className="h-4 w-4" />} label="Email" value="hello@pageli.co" />
        </div>
      </section>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        <QuickLink to="/content-plans" icon={<CalendarDays className="h-5 w-5" />} title="Контент-план" text="14 постов в мае, готово 6" />
        <QuickLink to="/analytics" icon={<BarChart3 className="h-5 w-5" />} title="Аналитика" text="+132 подписчика за неделю" />
        <QuickLink to="/content-plans" icon={<FileText className="h-5 w-5" />} title="Материалы" text="Брифы, гайды и tone of voice" />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <SectionCard
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

        <SectionCard title="Команда проекта">
          <ul className="space-y-3">
            {client.team.map((m) => (
              <li key={m.role} className="flex items-center gap-3 rounded-xl border border-border p-3.5">
                <Avatar initials={m.initials} tone={m.tone} className="h-10 w-10 text-xs" />
                <div className="leading-tight">
                  <p className="text-sm font-semibold">{m.name}</p>
                  <p className="text-xs text-muted-foreground">{m.role}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-5 space-y-3 border-t border-border pt-5 text-sm">
            <Row label="Последняя оплата" value={client.lastPayment} />
            <Row label="Сумма" value={client.amount} />
            <Row label="Периодичность" value="Ежемесячно" />
            <Row label="Постов в месяц" value="14" />
          </div>
        </SectionCard>
      </div>
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

function Row({ label, value }: { label: string; value: string }) {
  return (
    <p className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </p>
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
