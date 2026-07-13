"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
    { label: "Our work", href: "#work" },
    { label: "All services", href: "#process" },
    { label: "About us", href: "#about" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        const onEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", onEscape);
        return () => window.removeEventListener("keydown", onEscape);
    }, []);

    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="fixed inset-x-0 top-0 z-100 bg-nav-bg backdrop-blur-md">
            <div className="flex items-center justify-between px-6 py-2 sm:px-12 lg:px-20">
                <Link
                    href="/"
                    onClick={closeMenu}
                    className="text-xl font-bold uppercase tracking-tighter text-foreground/90"
                >
                    KODA
                </Link>

                <div className="hidden items-center gap-2 md:flex lg:gap-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="flex h-10 items-center justify-center px-4 text-sm text-foreground/85 transition-colors hover:text-accent"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <Link
                        href="#contact"
                        className="hidden h-10 items-center justify-center rounded-full border border-border px-6 text-sm text-foreground transition-colors hover:border-hover-border hover:text-accent md:flex"
                    >
                        Contact
                    </Link>
                    <button
                        type="button"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-nav"
                        onClick={() => setIsOpen((open) => !open)}
                        className="flex size-10 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors hover:border-hover-border hover:text-brand md:hidden"
                    >
                        {isOpen ? (
                            <X className="size-5" />
                        ) : (
                            <Menu className="size-5" />
                        )}
                    </button>
                </div>
            </div>

            <div
                id="mobile-nav"
                className={`overflow-hidden border-t border-border transition-[grid-template-rows] duration-300 ease-out md:hidden ${
                    isOpen ? "grid grid-rows-[1fr]" : "grid grid-rows-[0fr]"
                }`}
            >
                <div className="overflow-hidden">
                    <div className="flex flex-col gap-1 px-6 py-4 sm:px-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className="rounded-lg px-4 py-3 text-base text-foreground/85 transition-colors hover:bg-surface-muted hover:text-accent"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            onClick={closeMenu}
                            className="mt-2 inline-flex h-11 items-center justify-center rounded-full border border-border text-sm text-foreground transition-colors hover:border-hover-border hover:text-accent"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
