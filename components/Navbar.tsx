import Link from "next/link";

import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
    { label: "Our work", href: "#work" },
    { label: "All services", href: "#process" },
    { label: "About us", href: "#about" },
];

const Navbar = () => {
    return (
        <nav className="fixed inset-x-0 top-0 z-100 flex items-center justify-between bg-nav-bg px-6 py-2 backdrop-blur-md sm:px-12 lg:px-20">
            <Link
                href="/"
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
                    className="hidden h-10 items-center justify-center rounded-full border border-border px-6 text-sm text-foreground transition-colors hover:border-hover-border hover:text-accent sm:flex"
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
