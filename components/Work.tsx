import Image from "next/image";
import Link from "next/link";

import { getPublishedWork } from "@/lib/queries/work";
import type { WorkProject } from "@/types/work";

function WorkCardContent({
    project,
    index,
    isFeatured,
    description,
    showLink,
}: {
    project: WorkProject;
    index: number;
    isFeatured: boolean;
    description: string;
    showLink: boolean;
}) {
    return (
        <>
            <div
                className={`relative overflow-hidden ${
                    project.thumbnail
                        ? isFeatured
                            ? "min-h-56 sm:min-h-64"
                            : "min-h-44 sm:min-h-52"
                        : `bg-gradient-to-br from-card-from via-card-via to-card-to ${
                              isFeatured ? "min-h-56 sm:min-h-64" : "min-h-44 sm:min-h-52"
                          }`
                }`}
            >
                {project.thumbnail ? (
                    <>
                        <Image
                            src={project.thumbnail}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes={
                                isFeatured
                                    ? "(max-width: 768px) 100vw, 1280px"
                                    : "(max-width: 768px) 100vw, 640px"
                            }
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                    </>
                ) : (
                    <>
                        <div className="pointer-events-none absolute inset-0 bg-card-shimmer transition-opacity duration-500 group-hover:opacity-100" />
                        <div className="pointer-events-none absolute -right-8 -top-8 size-40 rounded-full bg-glow-faint blur-2xl transition-all duration-700 group-hover:bg-glow-soft" />
                    </>
                )}

                <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
                    <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-label">
                        {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                        {project.title}
                    </h3>
                </div>
            </div>

            <div className="border-t border-border bg-surface-overlay p-6 backdrop-blur-sm sm:p-8">
                <p className="line-clamp-3 text-sm font-extralight leading-relaxed text-muted transition-colors duration-300 group-hover:text-foreground/85 sm:text-base">
                    {description}
                </p>
                <p className="mt-4 text-xs font-light leading-relaxed text-label sm:text-sm">
                    {project.stack}
                </p>
                {showLink && (
                    <span className="mt-5 inline-flex items-center gap-2 text-sm text-link transition-all duration-300 group-hover:gap-3">
                        View project
                        <span
                            aria-hidden
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                            →
                        </span>
                    </span>
                )}
            </div>
        </>
    );
}

function WorkCard({
    project,
    index,
}: {
    project: WorkProject;
    index: number;
}) {
    const isFeatured = project.featured;
    const description = project.excerpt ?? project.desc;
    const cardHref = project.link ?? project.repo_url;
    const className = `group relative overflow-hidden rounded-2xl border border-border bg-surface-muted transition-all duration-500 hover:border-hover-border-muted hover:shadow-elevated ${
        isFeatured ? "md:col-span-2" : ""
    }`;

    if (cardHref) {
        return (
            <Link
                href={cardHref}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
            >
                <WorkCardContent
                    project={project}
                    index={index}
                    isFeatured={isFeatured}
                    description={description}
                    showLink
                />
            </Link>
        );
    }

    return (
        <article className={className}>
            <WorkCardContent
                project={project}
                index={index}
                isFeatured={isFeatured}
                description={description}
                showLink={false}
            />
        </article>
    );
}

const Work = async () => {
    const projects = await getPublishedWork();

    return (
        <section
            id="work"
            className="relative flex w-full flex-col items-center justify-center overflow-hidden px-6 py-24 text-foreground sm:px-12 lg:px-20"
        >
            <div className="pointer-events-none absolute left-0 top-1/4 size-72 -translate-x-1/3 rounded-full bg-glow-faint blur-3xl" />

            <div className="relative z-10 w-full max-w-7xl">
                <div className="mb-16 border-b border-border pb-10">
                    <p className="mb-3 text-sm font-light uppercase tracking-[0.35em] text-label">
                        Portfolio
                    </p>
                    <h2 className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
                        Our Work
                    </h2>
                </div>

                {projects.length === 0 ? (
                    <p className="text-center text-muted">
                        No published projects yet.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
                        {projects.map((project, index) => (
                            <WorkCard
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Work;
