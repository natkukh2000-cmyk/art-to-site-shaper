import { cn } from "@/lib/utils";
import type { Tone } from "@/lib/data";

const toneMap: Record<string, string> = {
  primary: "bg-primary-soft text-primary",
  success: "bg-success-soft text-success",
  warning: "bg-warning-soft text-warning-foreground",
  pink: "bg-pink-soft text-pink",
  info: "bg-info-soft text-info",
  dark: "bg-foreground text-background",
};

export function Avatar({
  initials,
  tone = "primary",
  className,
}: {
  initials: string;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full font-semibold",
        toneMap[tone],
        className ?? "h-9 w-9 text-xs",
      )}
    >
      {initials}
    </span>
  );
}

export function Pill({
  children,
  tone = "primary",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        toneMap[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function StatCard({
  icon,
  tone = "primary",
  label,
  value,
  hint,
  hintClass,
}: {
  icon: React.ReactNode;
  tone?: Tone;
  label: string;
  value: React.ReactNode;
  hint?: React.ReactNode;
  hintClass?: string;
}) {
  return (
    <div className="card-surface flex items-start gap-4 p-5">
      <span className={cn("flex h-11 w-11 items-center justify-center rounded-xl", toneMap[tone])}>
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="mt-1 text-3xl font-bold tracking-tight">{value}</p>
        {hint ? <p className={cn("mt-1 text-xs text-muted-foreground", hintClass)}>{hint}</p> : null}
      </div>
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Опубликован: "bg-success-soft text-success",
    Активен: "bg-success-soft text-success",
    Активный: "bg-success-soft text-success",
    "В работе": "bg-info-soft text-info",
    Черновик: "bg-warning-soft text-warning-foreground",
    "Не начат": "bg-muted text-muted-foreground",
    Запланирован: "bg-primary-soft text-primary",
    Высокий: "bg-pink-soft text-pink",
    Средний: "bg-warning-soft text-warning-foreground",
    Низкий: "bg-success-soft text-success",
  };
  return (
    <span className={cn("inline-flex rounded-md px-2.5 py-1 text-xs font-medium", map[status] ?? "bg-muted text-muted-foreground")}>
      {status}
    </span>
  );
}

export function SectionCard({
  title,
  action,
  subtitle,
  children,
  className,
  bodyClassName,
}: {
  title?: React.ReactNode;
  action?: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <section className={cn("card-surface", className)}>
      {title ? (
        <header className="flex items-start justify-between gap-4 px-6 pt-5">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
            {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}
          </div>
          {action}
        </header>
      ) : null}
      <div className={cn("px-6 pb-6 pt-4", bodyClassName)}>{children}</div>
    </section>
  );
}
