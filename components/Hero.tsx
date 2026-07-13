
const Hero = () => {
    return (
        <section className="relative flex min-h-[70vh] size-full flex-col items-center justify-center px-6 sm:px-12 lg:px-20">
            <div className="z-50 w-full border-b-2 border-hero-divider pb-10 pt-50">
                <h1 className="text-[5rem] font-black tracking-tighter text-foreground/90 sm:text-[8rem] lg:text-[12rem]">
                    KODA
                    <span className="font-thin italic text-brand">Agency</span>
                </h1>
                <div className="flex flex-col items-start justify-between gap-6 pt-10 sm:flex-row sm:items-center">
                    <h2 className="text-2xl font-thin italic text-muted sm:text-4xl">
                        Your local software developer
                    </h2>
                    <button className="h-10 w-60 rounded-full border border-border text-foreground transition-colors hover:border-hover-border hover:text-accent">
                        See more
                    </button>
                </div>
            </div>
            <div className="z-10">
                <div className="absolute top-40 left-1/2 size-250 -translate-x-1/2 rounded-full bg-glow-orb blur-2xl" />
                <div className="absolute top-100 left-1/2 size-125 -translate-x-1/2 rounded-full border-20 border-glow-ring blur-xl" />
                <div className="absolute top-120 left-1/2 size-75 -translate-x-1/2 rounded-full bg-glow-orb blur-3xl" />
            </div>
        </section>
    );
};

export default Hero;
