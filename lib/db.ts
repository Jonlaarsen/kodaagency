import { createClient, type Client } from "@libsql/client";

let client: Client | null = null;

export function getDb() {
    const url = process.env.TURSO_DATABASE_URL ?? process.env.DATABASE_URL;
    const authToken = process.env.TURSO_AUTH_TOKEN;

    if (!url) {
        throw new Error(
            "Missing database URL. Set TURSO_DATABASE_URL or DATABASE_URL in .env.local.",
        );
    }

    if (!client) {
        client = createClient({
            url,
            authToken,
        });
    }

    return client;
}
