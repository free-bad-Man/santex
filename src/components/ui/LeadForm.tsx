"use client";

import { FormEvent, type ReactNode, useEffect, useId, useMemo, useRef, useState } from "react";
import { Check, ChevronDown, Paperclip, Send } from "lucide-react";
import { services } from "@/data/services";
import type { Lead } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

type LeadFormProps = {
  source: string;
  compact?: boolean;
};

const objectTypes = [
  { label: "Квартира", value: "apartment" },
  { label: "Дом", value: "house" },
  { label: "Коммерция", value: "commercial" },
] as const;

type SelectOption = {
  label: string;
  value: string;
};

export function LeadForm({ source, compact }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [hydrated, setHydrated] = useState(false);

  const initialService = useMemo(() => services[0]?.title ?? "", []);

  useEffect(() => {
    setHydrated(true);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("loading");
    setError("");

    const formData = new FormData(form);
    const lead: Lead = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      objectType: String(formData.get("objectType") ?? "apartment") as Lead["objectType"],
      service: String(formData.get("service") ?? initialService),
      area: String(formData.get("area") ?? ""),
      location: String(formData.get("location") ?? ""),
      message: String(formData.get("message") ?? ""),
      source,
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });

      if (!response.ok) {
        throw new Error("Не удалось отправить заявку");
      }

      form.reset();
      setStatus("success");
    } catch (submitError) {
      setStatus("error");
      setError(submitError instanceof Error ? submitError.message : "Не удалось отправить заявку");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[28px] border border-accent/30 bg-accent/10 p-6">
        <h3 className="text-2xl font-semibold text-light">Заявка отправлена</h3>
        <p className="mt-3 leading-7 text-muted">
          Спасибо. Мы свяжемся с вами, уточним объект и подскажем, какие данные нужны для предварительного расчета.
        </p>
        <Button className="mt-6" variant="secondary" onClick={() => setStatus("idle")}>
          Отправить еще одну заявку
        </Button>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className={compact ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
        <Field label="Имя">
          <input name="name" required placeholder="Как к вам обращаться" className="field" />
        </Field>
        <Field label="Телефон">
          <input name="phone" required placeholder="+7 (___) ___-__-__" className="field" />
        </Field>
        <Field label="Тип объекта">
          <CustomSelect name="objectType" options={[...objectTypes]} defaultValue="apartment" />
        </Field>
        <Field label="Услуга">
          <CustomSelect
            name="service"
            options={services.map((service) => ({ label: service.title, value: service.title }))}
            defaultValue={initialService}
          />
        </Field>
        <Field label="Площадь">
          <input name="area" placeholder="Например, 120 м²" className="field" />
        </Field>
        <Field label="Город / район">
          <input name="location" placeholder="Москва, Истра, Одинцово" className="field" />
        </Field>
      </div>
      <Field label="Комментарий">
        <textarea
          name="message"
          placeholder="Коротко опишите задачу, сроки, что уже есть: фото, план, проект, оборудование."
          className="field min-h-28 resize-none"
        />
      </Field>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="inline-flex items-center gap-2 rounded-full border border-dashed border-white/[0.16] bg-white/[0.03] px-4 py-3 text-sm text-muted">
          <Paperclip className="h-4 w-4 text-accent" aria-hidden />
          Файл можно будет прикрепить на следующем этапе
        </div>
        <Button type="submit" disabled={!hydrated || status === "loading"} icon={<Send className="h-4 w-4" aria-hidden />}>
          {!hydrated ? "Готовим форму..." : status === "loading" ? "Отправляем..." : "Получить предварительный расчет"}
        </Button>
      </div>
      {status === "error" ? <p className="text-sm text-red-300">{error}</p> : null}
    </form>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="relative block">
      <span className="mb-2 block text-sm font-semibold text-muted">{label}</span>
      {children}
    </label>
  );
}

function CustomSelect({ name, options, defaultValue }: { name: string; options: SelectOption[]; defaultValue: string }) {
  const id = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const selected = options.find((option) => option.value === value) ?? options[0];

  useEffect(() => {
    if (!open) {
      return;
    }

    function handlePointerDown(event: MouseEvent | TouchEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <input type="hidden" name={name} value={selected.value} />
      <button
        type="button"
        className={cn("field flex items-center justify-between gap-3 text-left", open && "border-accent/60 bg-white/[0.08]")}
        aria-controls={id}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="min-w-0 truncate">{selected.label}</span>
        <ChevronDown className={cn("h-4 w-4 shrink-0 text-accent transition", open && "rotate-180")} aria-hidden />
      </button>
      {open ? (
        <div
          id={id}
          className="absolute left-0 right-0 top-[calc(100%+8px)] z-40 max-h-64 overflow-y-auto rounded-2xl border border-white/[0.14] bg-[#141820] p-1 shadow-glass"
        >
          {options.map((option) => {
            const active = option.value === selected.value;

            return (
              <button
                key={option.value}
                type="button"
                className={cn(
                  "flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-left text-sm transition",
                  active ? "bg-accent text-bg-main" : "text-light hover:bg-white/[0.08]",
                )}
                onClick={() => {
                  setValue(option.value);
                  setOpen(false);
                }}
              >
                <span className="min-w-0 truncate">{option.label}</span>
                {active ? <Check className="h-4 w-4 shrink-0" aria-hidden /> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
