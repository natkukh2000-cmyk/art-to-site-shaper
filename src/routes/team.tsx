import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, UserPlus, Repeat2, BookOpen } from "lucide-react";
import { AppLayout, TopUser } from "@/components/AppLayout";
import { Avatar, SectionCard, StatusBadge } from "@/components/ui-kit";
import { Modal, ModalActions, ModalField } from "@/components/Modal";
import { employees, roleRegulations } from "@/lib/data";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Команда — Pageli Operations" },
      { name: "description", content: "Сотрудники агентства, их роли, клиенты, права доступа, регламенты и текущие замены." },
      { property: "og:title", content: "Команда — Pageli Operations" },
      { property: "og:description", content: "Сотрудники агентства, роли, клиенты, регламенты и замены." },
    ],
  }),
  component: Team,
});

function Team() {
  const [addOpen, setAddOpen] = useState(false);
  const [regulationRole, setRegulationRole] = useState<string | null>(null);

  return (
    <AppLayout>
      <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Команда</h1>
        <div className="flex items-center gap-5">
          <button
            onClick={() => setAddOpen(true)}
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground"
          >
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
              <th className="px-6 py-4 font-normal">Регламент</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((e) => (
              <tr key={e.name} className="border-b border-border/70 last:border-0">
                <td className="px-6 py-5">
                  <span className="flex items-center gap-3">
                    <Avatar initials={e.initials} tone={e.tone} className="h-10 w-10 text-xs" />
                    <span className="leading-tight">
                      <span className="block font-semibold">{e.name}</span>
                      <span className="block text-xs text-muted-foreground">{e.email}</span>
                    </span>
                  </span>
                </td>
                <td className="px-6 py-5 text-muted-foreground">{e.role}</td>
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
                <td className="px-6 py-5">
                  <button
                    onClick={() => setRegulationRole(e.role)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium hover:border-primary hover:text-primary"
                  >
                    <BookOpen className="h-3.5 w-3.5" /> Открыть
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <SectionCard
        className="mt-6"
        title="Замены"
        action={
          <button className="inline-flex items-center gap-2 rounded-xl border border-border px-3.5 py-2 text-sm font-medium">
            <Plus className="h-4 w-4" /> Добавить
          </button>
        }
      >
        <ul className="grid gap-3 md:grid-cols-2">
          {employees
            .filter((e) => e.replaces)
            .map((e) => (
              <li key={e.name} className="flex items-center gap-3 rounded-xl border border-border p-4 text-sm">
                <Avatar initials={e.initials} tone={e.tone} className="h-9 w-9 text-[11px]" />
                <span className="flex-1">
                  <span className="font-semibold">{e.name}</span>
                  <span className="text-muted-foreground"> → </span>
                  <span className="font-semibold">{e.replaces?.name}</span>
                  <span className="block text-xs text-muted-foreground">до 25.08.2026 · {e.replaces?.role}</span>
                </span>
                <Repeat2 className="h-4 w-4 text-primary" />
              </li>
            ))}
        </ul>
      </SectionCard>

      <AddEmployeeModal open={addOpen} onClose={() => setAddOpen(false)} />
      <RegulationModal role={regulationRole} onClose={() => setRegulationRole(null)} />
    </AppLayout>
  );
}

function AddEmployeeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      className="max-w-2xl"
      title="Добавить сотрудника"
      subtitle="Заполните данные и назначьте клиентов"
      footer={<ModalActions onClose={onClose} submit="Добавить сотрудника" />}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <ModalField label="Имя и фамилия" placeholder="Например, Дарья Фокина" />
        <ModalField label="Email" placeholder="name@pageli.co" />
        <ModalField label="Роль" options={["Копирайтер", "Менеджер страницы", "SMM", "Аккаунт-менеджер", "Директор"]} />
        <ModalField label="Уровень доступа" options={["Просмотр", "Редактирование", "Полный доступ"]} />
        <ModalField label="Статус" options={["Активен", "На паузе", "Отключён"]} />
        <ModalField label="Клиенты" placeholder="Выберите клиентов" />
      </div>
    </Modal>
  );
}

function RegulationModal({ role, onClose }: { role: string | null; onClose: () => void }) {
  const rows = role ? roleRegulations[role] ?? [] : [];
  return (
    <Modal
      open={!!role}
      onClose={onClose}
      className="max-w-4xl"
      title={`Регламент роли: ${role ?? ""}`}
      subtitle="Должностные обязанности и критерии проверки"
      footer={
        <button onClick={onClose} className="rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground">
          Понятно
        </button>
      }
    >
      <div className="overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary/60 text-left text-xs text-muted-foreground">
              <th className="px-4 py-3 font-normal">Задача</th>
              <th className="px-4 py-3 font-normal">Что делать</th>
              <th className="px-4 py-3 font-normal">Периодичность / норма</th>
              <th className="px-4 py-3 font-normal">Как проверяем</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.task} className="border-b border-border/70 last:border-0">
                <td className="px-4 py-3.5 font-medium">{r.task}</td>
                <td className="px-4 py-3.5 text-muted-foreground">{r.what}</td>
                <td className="px-4 py-3.5 text-muted-foreground">{r.norm}</td>
                <td className="px-4 py-3.5 text-muted-foreground">{r.check}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Modal>
  );
}
