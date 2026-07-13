"use client";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html lang="en">
            <body className="flex min-h-screen flex-col items-center justify-center gap-4 bg-black p-6 text-white">
                <h2 className="text-xl font-semibold">Something went wrong</h2>
                <p className="max-w-md text-center text-sm text-white/70">
                    {error.message || "An unexpected error occurred."}
                </p>
                <button
                    type="button"
                    onClick={() => reset()}
                    className="rounded-full border border-white/30 px-6 py-2 text-sm transition-colors hover:border-white hover:bg-white hover:text-black"
                >
                    Try again
                </button>
            </body>
        </html>
    );
}
