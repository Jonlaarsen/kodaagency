import { createClient, type Client } from "@libsql/client";

let client: Client | null = null;

export function getDatabaseUrl() {
    return process.env.TURSO_DATABASE_URL ?? process.env.DATABASE_URL;
}

export function isDatabaseConfigured() {
    return Boolean(getDatabaseUrl());
}

export function getDb() {
    const url = getDatabaseUrl();
    const authToken = process.env.TURSO_AUTH_TOKEN;

    if (!url) {
        throw new Error(
            "Missing database URL. Set TURSO_DATABASE_URL or DATABASE_URL.",
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
