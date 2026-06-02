import { CheckCircle } from "lucide-react";

type ProcessTimelineProps = {
  steps: string[];
};

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-accent via-white/[0.12] to-transparent md:block" />
      <div className="equal-grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step} className="relative h-full rounded-[24px] border border-white/[0.12] bg-glass p-4 shadow-glass backdrop-blur-[18px] 2xl:p-5">
            <div className="mb-4 flex items-center justify-between 2xl:mb-5">
              <span className="text-sm font-semibold text-accent">0{index + 1}</span>
              <CheckCircle className="h-5 w-5 text-accent" aria-hidden />
            </div>
            <p className="text-lg font-semibold text-light">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
