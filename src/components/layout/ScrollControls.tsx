"use client";

import { ChevronDown, ChevronUp } from "lucide-react";

export function ScrollControls() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function scrollToBottom() {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  }

  return (
    <div className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 xl:flex">
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.14] bg-bg-main/75 text-light shadow-glass backdrop-blur-2xl transition hover:border-accent/50 hover:text-accent"
        onClick={scrollToTop}
        aria-label="Наверх"
      >
        <ChevronUp className="h-5 w-5" aria-hidden />
      </button>
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.14] bg-bg-main/75 text-light shadow-glass backdrop-blur-2xl transition hover:border-accent/50 hover:text-accent"
        onClick={scrollToBottom}
        aria-label="Вниз"
      >
        <ChevronDown className="h-5 w-5" aria-hidden />
      </button>
    </div>
  );
}
