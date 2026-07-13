import { getDb, isDatabaseConfigured } from "@/lib/db";
import type { WorkProject, WorkRow } from "@/types/work";

function parseJsonArray(value: string): string[] {
    try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string") : [];
    } catch {
        return [];
    }
}

function parseJsonObject(value: string): Record<string, unknown> {
    try {
        const parsed = JSON.parse(value);
        return parsed && typeof parsed === "object" && !Array.isArray(parsed)
            ? (parsed as Record<string, unknown>)
            : {};
    } catch {
        return {};
    }
}

function mapWorkRow(row: WorkRow): WorkProject {
    return {
        id: row.id,
        slug: row.slug,
        title: row.title,
        excerpt: row.excerpt,
        desc: row.desc,
        thumbnail: row.thumbnail,
        link: row.link,
        repo_url: row.repo_url,
        stack: row.stack,
        category: row.category,
        client: row.client,
        year: row.year,
        featured: row.featured === 1,
        sort_order: row.sort_order,
        status: row.status,
        gallery: parseJsonArray(row.gallery),
        meta: parseJsonObject(row.meta),
        created_at: row.created_at,
        updated_at: row.updated_at,
    };
}

export async function getPublishedWork(): Promise<WorkProject[]> {
    if (!isDatabaseConfigured()) {
        return [];
    }

    const db = getDb();

    const result = await db.execute({
        sql: `
            SELECT
                id, slug, title, excerpt, desc, thumbnail, link, repo_url, stack,
                category, client, year, featured, sort_order, status, gallery, meta,
                created_at, updated_at
            FROM work
            WHERE status = 'published'
            ORDER BY sort_order DESC, id DESC
        `,
        args: [],
    });

    return result.rows.map((row) => mapWorkRow(row as unknown as WorkRow));
}
