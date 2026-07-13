import Link from "next/link";

const footerLinks = [
    { label: "Our work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "About us", href: "#about" },
];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer
            id="contact"
            className="relative overflow-hidden border-t border-border bg-background px-6 py-16 text-foreground sm:px-12 lg:px-20"
        >
            <div className="pointer-events-none absolute bottom-0 left-1/2 size-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-glow-faint blur-3xl" />

            <div className="relative z-10 mx-auto w-full max-w-7xl">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-8">
                    <div>
                        <Link
                            href="/"
                            className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground/90"
                        >
                            KODA
                            <span className="font-thin italic text-brand normal-case">
                                Agency
                            </span>
                        </Link>
                        <p className="mt-4 max-w-sm text-base font-extralight leading-relaxed text-muted">
                            Your local software agency — design, development, and
                            long-term support for products that matter.
                        </p>
                    </div>

                    <div>
                        <p className="mb-4 text-sm font-light uppercase tracking-[0.25em] text-label">
                            Explore
                        </p>
                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm font-extralight text-muted transition-colors hover:text-accent"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-4 text-sm font-light uppercase tracking-[0.25em] text-label">
                            Get in touch
                        </p>
                        <p className="text-sm font-extralight leading-relaxed text-muted">
                            Have a project in mind? We&apos;d love to hear about it.
                        </p>
                        <Link
                            href="mailto:hello@kodaagency.com"
                            className="mt-5 inline-flex h-11 items-center justify-center rounded-full border border-border px-8 text-sm text-foreground transition-colors hover:border-hover-border hover:text-accent"
                        >
                            hello@kodaagency.com
                        </Link>
                    </div>
                </div>

                <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
                    <p className="text-xs font-extralight text-muted/70">
                        © {year} KODA Agency. All rights reserved.
                    </p>
                    <p className="text-xs font-extralight text-muted/70">
                        Built with care, locally.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
