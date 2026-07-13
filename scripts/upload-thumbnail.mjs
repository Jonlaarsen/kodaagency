/**
 * Upload a portfolio thumbnail to Vercel Blob.
 *
 * Prerequisites:
 * 1. Create a Blob store in Vercel → Storage → Blob → Connect to project
 * 2. Pull env vars locally: vercel env pull .env.local
 *    OR copy BLOB_READ_WRITE_TOKEN from Vercel → Settings → Environment Variables
 *
 * Usage:
 *   node --env-file=.env.local scripts/upload-thumbnail.mjs ./haiven.png work/haiven.webp
 *
 * Then save the printed URL to Turso:
 *   UPDATE work SET thumbnail = '<url>' WHERE slug = 'haiven';
 */

import { readFileSync } from "node:fs";
import { basename, extname } from "node:path";
import { put } from "@vercel/blob";

const [, , filePath, blobPathArg] = process.argv;

if (!filePath) {
    console.error(
        "Usage: node --env-file=.env.local scripts/upload-thumbnail.mjs <local-file> [blob-path]",
    );
    process.exit(1);
}

if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error(
        "Missing BLOB_READ_WRITE_TOKEN. Create a Blob store in Vercel and pull env vars with: vercel env pull .env.local",
    );
    process.exit(1);
}

const file = readFileSync(filePath);
const ext = extname(filePath).toLowerCase();
const contentType =
    ext === ".webp"
        ? "image/webp"
        : ext === ".png"
          ? "image/png"
          : ext === ".jpg" || ext === ".jpeg"
            ? "image/jpeg"
            : "application/octet-stream";

const pathname = blobPathArg ?? `work/${basename(filePath)}`;

const blob = await put(pathname, file, {
    access: "public",
    contentType,
    addRandomSuffix: false,
});

console.log("\nUploaded successfully\n");
console.log("URL:", blob.url);
console.log("\nUpdate Turso (replace slug):");
console.log(`UPDATE work SET thumbnail = '${blob.url}' WHERE slug = 'your-slug';`);
