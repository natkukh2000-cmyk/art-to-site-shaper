import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Modal({
  open,
  onClose,
  title,
  subtitle,
  footer,
  children,
  className,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-foreground/40 p-6">
      <div className={cn("card-surface my-8 w-full max-w-3xl", className)}>
        <header className="flex items-start justify-between gap-4 border-b border-border px-6 py-5">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
            {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}
          </div>
          <button onClick={onClose} className="text-muted-foreground transition-colors hover:text-foreground">
            <X className="h-5 w-5" />
          </button>
        </header>
        <div className="px-6 py-5">{children}</div>
        {footer ? <footer className="flex items-center justify-end gap-3 border-t border-border px-6 py-4">{footer}</footer> : null}
      </div>
    </div>
  );
}

export function ModalField({
  label,
  placeholder,
  value,
  textarea,
  options,
  className,
}: {
  label: string;
  placeholder?: string;
  value?: string;
  textarea?: boolean;
  options?: string[];
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-1.5 block text-xs text-muted-foreground">{label}</span>
      {options ? (
        <select
          defaultValue={value}
          className="h-11 w-full rounded-xl border border-border bg-card px-3 text-sm outline-none focus:border-primary"
        >
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : textarea ? (
        <textarea
          rows={3}
          defaultValue={value}
          placeholder={placeholder}
          className="w-full rounded-xl border border-border bg-card px-3.5 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
        />
      ) : (
        <input
          defaultValue={value}
          placeholder={placeholder}
          className="h-11 w-full rounded-xl border border-border bg-card px-3.5 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
        />
      )}
    </label>
  );
}

export function ModalActions({ onClose, submit = "Сохранить" }: { onClose: () => void; submit?: string }) {
  return (
    <>
      <button onClick={onClose} className="rounded-xl border border-border px-4 py-2.5 text-sm font-medium">
        Отмена
      </button>
      <button onClick={onClose} className="rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground">
        {submit}
      </button>
    </>
  );
}
