import Link from "next/link";

const highlights = [
    {
        title: "Local & personal",
        description:
            "We work closely with you — no hand-offs to strangers, no disappearing after launch.",
    },
    {
        title: "Clear communication",
        description:
            "Plain language, regular updates, and honest timelines. You'll always know where things stand.",
    },
    {
        title: "Built to last",
        description:
            "We care about the details so your product stays fast, secure, and easy to grow.",
    },
];

const About = () => {
    return (
        <section
            id="about"
            className="relative flex w-full flex-col items-center justify-center overflow-hidden px-6 py-24 text-foreground sm:px-12 lg:px-20"
        >
            <div
                className="pointer-events-none absolute inset-0 bg-section-grid"
                aria-hidden
            />
            <div className="pointer-events-none absolute right-1/4 top-1/2 size-80 -translate-y-1/2 rounded-full bg-glow-faint blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 size-64 -translate-x-1/3 rounded-full bg-glow-soft blur-3xl" />

            <div className="relative z-10 w-full max-w-7xl">
                <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <p className="mb-3 text-sm font-light uppercase tracking-[0.35em] text-label">
                            Who we are
                        </p>
                        <h2 className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
                            About Us
                        </h2>

                        <div className="mt-8 space-y-5 text-lg font-extralight leading-relaxed text-muted sm:text-xl">
                            <p>
                                We&apos;re KODA — a local software agency that treats every
                                project like a partnership, not a ticket queue.
                            </p>
                            <p>
                                Whether you&apos;re launching something new or improving what
                                you&apos;ve already built, we keep things simple, honest, and
                                human. Good software should feel approachable — and so should the
                                people who build it.
                            </p>
                        </div>

                        <Link
                            href="#contact"
                            className="mt-10 inline-flex h-11 items-center justify-center rounded-full border border-border px-8 text-sm text-foreground transition-colors hover:border-hover-border hover:text-accent"
                        >
                            Let&apos;s talk
                        </Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        {highlights.map((item, index) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-border bg-surface-muted px-6 py-5 backdrop-blur-sm transition-colors duration-300 hover:border-hover-border-muted hover:bg-surface-muted/80"
                            >
                                <div className="mb-3 flex items-center gap-3">
                                    <span className="flex size-8 items-center justify-center rounded-full border border-badge-border bg-badge-bg font-mono text-xs text-badge-text">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <h3 className="font-display text-xl font-bold">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="pl-11 text-base font-extralight leading-relaxed text-muted">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
