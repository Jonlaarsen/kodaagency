"use client";

import { useState } from "react";

const steps = [
    {
        id: 1,
        title: "design",
        description:
            "We start by understanding your goals, audience, and brand. Wireframes, prototypes, and polished UI — every detail shaped before a single line of code is written.",
    },
    {
        id: 2,
        title: "development",
        description:
            "Clean, scalable code built with modern tools. We ship fast, test thoroughly, and keep you in the loop with regular updates until launch day.",
    },
    {
        id: 3,
        title: "maintenance",
        description:
            "Launch is just the beginning. We handle updates, performance tuning, and ongoing support so your product stays fast, secure, and ahead of the curve.",
    },
];

const Process = () => {
    const [activeStep, setActiveStep] = useState(1);

    return (
        <section
            id="process"
            className="relative flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden px-6 py-24 text-foreground sm:px-12 lg:px-20"
        >
            <div className="pointer-events-none absolute left-1/2 top-1/3 size-[28rem] -translate-x-1/2 rounded-full bg-glow-faint blur-3xl" />
            <div className="pointer-events-none absolute right-0 bottom-0 size-64 translate-x-1/3 rounded-full bg-glow-soft blur-3xl" />

            <div className="relative z-10 w-full max-w-7xl">
                <div className="mb-16 border-b border-border pb-10">
                    <p className="mb-3 text-sm font-light uppercase tracking-[0.35em] text-label">
                        How we work
                    </p>
                    <h2 className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
                        Our Process
                    </h2>
                </div>

                <div className="relative flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-6">
                    <div
                        className="pointer-events-none absolute top-7 hidden h-px lg:block lg:left-[16.67%] lg:right-[16.67%]"
                        aria-hidden
                    >
                        <div className="h-full bg-border" />
                        <div
                            className="absolute left-0 top-0 h-full bg-gradient-to-r from-progress-from to-progress-to transition-all duration-700 ease-out"
                            style={{
                                width: `${((activeStep - 1) / (steps.length - 1)) * 100}%`,
                            }}
                        />
                    </div>

                    {steps.map((step) => {
                        const isActive = activeStep === step.id;
                        const stepIndex = String(step.id).padStart(2, "0");

                        return (
                            <div
                                key={step.id}
                                className="relative flex flex-1 flex-col items-center"
                            >
                                <button
                                    type="button"
                                    onClick={() => setActiveStep(step.id)}
                                    aria-expanded={isActive}
                                    aria-controls={`process-step-${step.id}`}
                                    className={`group flex w-full max-w-sm flex-col items-center transition-all duration-500 ${isActive
                                        ? "scale-100"
                                        : "scale-[0.97] opacity-60 hover:opacity-85"
                                        }`}
                                >
                                    <div
                                        className={`mb-5 flex size-14 items-center justify-center rounded-full border-2 font-mono text-sm transition-all duration-500 ${isActive
                                            ? "border-step-active-border bg-step-active-bg text-step-active-text shadow-step-active"
                                            : "border-border bg-surface-muted text-muted group-hover:border-foreground/25 group-hover:text-foreground/70"
                                            }`}
                                    >
                                        {stepIndex}
                                    </div>

                                    <span
                                        className={`font-display rounded-full border px-8 py-3 text-3xl font-bold uppercase tracking-tight transition-all duration-300 sm:text-4xl ${isActive
                                            ? "border-step-pill-active-border bg-step-pill-active-bg text-foreground shadow-step-pill"
                                            : "border-border text-muted group-hover:border-foreground/30 group-hover:text-foreground/70"
                                            }`}
                                    >
                                        {step.title}
                                    </span>
                                </button>

                                <div
                                    id={`process-step-${step.id}`}
                                    className={`mt-6 grid w-full transition-[grid-template-rows] duration-500 ease-out ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div
                                            className={`mx-auto w-full max-w-sm rounded-2xl border px-6 py-6 backdrop-blur-sm transition-all duration-500 ease-out ${isActive
                                                ? "translate-y-0 border-step-panel-border bg-step-panel-bg opacity-100 "
                                                : "translate-y-6 border-transparent opacity-0"
                                                }`}
                                        >
                                            <p className="text-left text-base font-extralight leading-relaxed text-foreground/90 sm:text-lg">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Process;
